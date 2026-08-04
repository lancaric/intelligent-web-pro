import { createClient } from "npm:@supabase/supabase-js@2.112.0";
import { z } from "npm:zod@3.24.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  service: z.enum(["IT podpora", "Webová stránka", "Automatizácia", "Webová aplikácia", "Iné"]),
  message: z.string().trim().min(10).max(1500),
  gdpr_consent: z.boolean().refine((v) => v === true, "Súhlas GDPR je povinný"),
  newsletter_consent: z.boolean().default(false),
  // honeypot — if filled, silently accept but do nothing
  website: z.string().max(0).optional().or(z.literal("")),
});

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Neplatné údaje formulára.", details: parsed.error.issues }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = parsed.data;

    // Honeypot: if the hidden field was filled by a bot, pretend success
    if (data.website && data.website.length > 0) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      {
        auth: { persistSession: false, autoRefreshToken: false },
      },
    );

    const { error: insertError } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      service: data.service,
      message: data.message,
      gdpr_consent: data.gdpr_consent,
      newsletter_consent: data.newsletter_consent,
    });

    if (insertError) {
      console.error("DB insert error:", insertError);
      return new Response(JSON.stringify({ error: "Nepodarilo sa odoslať formulár." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send confirmation email to the submitter via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const ownerEmail = "info@lanzo.sk";

    if (resendApiKey) {
      const emailHtml = buildConfirmationEmail(data.name, data.service);

      const submitterEmail = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Lanzo <noreply@lanzo.sk>",
          to: [data.email],
          subject: "Potvrdenie — váš dopyt bol prijatý",
          html: emailHtml,
        }),
      });

      if (!submitterEmail.ok) {
        console.error("Resend submitter email failed:", await submitterEmail.text());
      }

      // Send notification email to owner
      const ownerHtml = buildOwnerNotification(data.name, data.email, data.service, data.message);
      const ownerResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Lanzo <noreply@lanzo.sk>",
          to: [ownerEmail],
          subject: `Nový dopyt: ${data.service}`,
          html: ownerHtml,
          reply_to: data.email,
        }),
      });

      if (!ownerResp.ok) {
        console.error("Resend owner email failed:", await ownerResp.text());
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ error: "Neočakávaná chyba." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function buildConfirmationEmail(name: string, service: string): string {
  return `<!doctype html>
<html lang="sk">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e4e4e7">
        <tr><td style="background:#111827;padding:24px 32px">
          <span style="font-family:monospace;font-size:20px;font-weight:700;color:#fff">LANZO<span style="color:#f59e0b">_</span></span>
        </td></tr>
        <tr><td style="padding:32px 40px">
          <h1 style="margin:0 0 20px;font-size:24px;font-weight:800;color:#111827">Ďakujem za vašu správu, ${escapeHtml(name)}</h1>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#52525b">Váš dopyt v kategórii <strong>${escapeHtml(service)}</strong> bol prijatý a uložený. Ozvem sa vám s konkrétnym návrhom ďalšieho kroku zvyčajne do 1 pracovného dňa.</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#52525b">Ak by ste potrebovali urgentnejšiu komunikáciu, môžete mi napísať aj priamo na <a href="mailto:info@lanzo.sk" style="color:#f59e0b">info@lanzo.sk</a>.</p>
          <hr style="border:none;border-top:1px solid #e4e4e7;margin:28px 0">
          <p style="margin:0;font-size:13px;line-height:1.5;color:#a1a1aa">Tento e-mail bol odoslaný automaticky z formulára na stránke lanzo.sk. Na tento e-mail neodpovedajte — pre komunikáciu použite info@lanzo.sk.</p>
          <p style="margin:12px 0 0;font-size:12px;color:#a1a1aa">© ${new Date().getFullYear()} Lanzo — Kristián Lančarič, Slovensko</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildOwnerNotification(name: string, email: string, service: string, message: string): string {
  return `<!doctype html>
<html lang="sk">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e4e4e7">
        <tr><td style="background:#111827;padding:24px 32px">
          <span style="font-family:monospace;font-size:20px;font-weight:700;color:#fff">LANZO<span style="color:#f59e0b">_</span></span>
        </td></tr>
        <tr><td style="padding:32px 40px">
          <h1 style="margin:0 0 20px;font-size:22px;font-weight:800;color:#111827">Nový dopyt z webu</h1>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6">
            <tr><td style="padding:4px 0;color:#71717a;width:100px;vertical-align:top">Meno</td><td style="padding:4px 0;color:#111827;font-weight:600">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:4px 0;color:#71717a;vertical-align:top">E-mail</td><td style="padding:4px 0"><a href="mailto:${escapeHtml(email)}" style="color:#f59e0b">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:4px 0;color:#71717a;vertical-align:top">Služba</td><td style="padding:4px 0;color:#111827">${escapeHtml(service)}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e4e4e7;margin:20px 0">
          <p style="margin:0 0 8px;font-size:13px;color:#71717a;text-transform:uppercase;letter-spacing:0.05em">Správa</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#111827;white-space:pre-wrap">${escapeHtml(message)}</p>
          <hr style="border:none;border-top:1px solid #e4e4e7;margin:28px 0">
          <p style="margin:0;font-size:13px;color:#a1a1aa">Odpovedzte priamo na e-mail odosielateľa kliknutím na Reply.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
