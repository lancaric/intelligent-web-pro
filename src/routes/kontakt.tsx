import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock3, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Lanzo" },
      {
        name: "description",
        content: "Kontaktujte Lanzo pre IT podporu, webové riešenia alebo automatizácie. Opíšte svoju požiadavku a získajte návrh ďalšieho kroku.",
      },
      { property: "og:title", content: "Kontaktujte Lanzo" },
      {
        property: "og:description",
        content: "Napíšte, čo potrebujete vyriešiť. Ozvem sa s konkrétnym návrhom ďalšieho kroku.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Zadajte, prosím, vaše meno.").max(100, "Meno môže mať najviac 100 znakov."),
  email: z.string().trim().email("Zadajte platnú e-mailovú adresu.").max(255, "E-mail je príliš dlhý."),
  service: z.enum(["IT podpora", "Webová stránka", "Automatizácia", "Webová aplikácia", "Iné"]),
  message: z.string().trim().min(10, "Popíšte požiadavku aspoň 10 znakmi.").max(1500, "Správa môže mať najviac 1 500 znakov."),
  gdpr_consent: z.boolean().refine((v) => v === true, "Súhlas so spracovaním údajov je povinný."),
  newsletter_consent: z.boolean().optional().default(false),
});

type FieldErrors = Partial<Record<"name" | "email" | "service" | "message" | "gdpr_consent", string>>;

function ContactPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const form = new FormData(event.currentTarget);
    const result = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      service: form.get("service"),
      message: form.get("message"),
      gdpr_consent: form.get("gdpr_consent") === "on",
      newsletter_consent: form.get("newsletter_consent") === "on",
    });

    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && field in contactSchema.shape) {
          nextErrors[field as keyof FieldErrors] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-contact`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          service: result.data.service,
          message: result.data.message,
          gdpr_consent: result.data.gdpr_consent,
          newsletter_consent: result.data.newsletter_consent,
          website: form.get("website") ?? "",
        }),
      });

      if (!response.ok) {
        throw new Error("Odoslanie zlyhalo.");
      }

      navigate({ to: "/podakovanie" });
    } catch {
      setSubmitError("Nepodarilo sa odoslať formulár. Skúste to prosím znova, alebo napíšte priamo na info@lanzo.sk.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = "min-h-12 w-full border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-6">
          <Link to="/" aria-label="Lanzo — domov" className="min-w-0 font-mono text-lg font-bold">
            LANZO<span className="text-primary">_</span>
          </Link>
          <nav aria-label="Hlavná navigácia" className="flex items-center gap-5 text-sm font-medium sm:gap-7">
            <Link to="/" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">Domov</Link>
            <Link to="/sluzby" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">Služby</Link>
            <span className="font-semibold text-foreground">Kontakt</span>
          </nav>
        </div>
      </header>

      <section className="border-b border-border pb-14 pt-14 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Link to="/" className="mb-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft aria-hidden="true" className="size-4" /> Späť na úvod
          </Link>
          <p className="mb-4 font-mono text-xs uppercase text-primary">Kontakt / nový dopyt</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">Povedzte mi, čo<br />potrebujete vyriešiť.</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-4">
            <p className="mb-8 max-w-sm leading-relaxed text-muted-foreground">
              Stačí stručne opísať problém alebo cieľ. Ozvem sa s doplňujúcimi otázkami a konkrétnym ďalším krokom.
            </p>
            <div className="divide-y divide-border border-y border-border">
              <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-4 py-5">
                <Mail aria-hidden="true" className="mt-0.5 size-5 text-primary" />
                <div><p className="mb-1 font-mono text-[10px] uppercase text-muted-foreground">E-mail</p><a href="mailto:info@lanzo.sk" className="font-semibold transition-colors hover:text-primary">info@lanzo.sk</a></div>
              </div>
              <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-4 py-5">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 text-primary" />
                <div><p className="mb-1 font-mono text-[10px] uppercase text-muted-foreground">Pôsobnosť</p><p className="font-semibold">Slovensko / Remote</p></div>
              </div>
              <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-4 py-5">
                <Clock3 aria-hidden="true" className="mt-0.5 size-5 text-primary" />
                <div><p className="mb-1 font-mono text-[10px] uppercase text-muted-foreground">Odpoveď</p><p className="font-semibold">Zvyčajne do 1 pracovného dňa</p></div>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} noValidate className="bg-surface p-6 ring-1 ring-border sm:p-9 lg:col-span-7 lg:col-start-6" aria-label="Kontaktný formulár">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[10px] uppercase">
              <span>LANZO_CONTACT_PROTOCOL</span><span className="text-success">[ONLINE]</span>
            </div>
            {/* Honeypot — skryté pole na odhalenie botov. Reálni používatelia ho nevidia. */}
            <div className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Nevypĺňajte toto pole</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Meno" error={errors.name} htmlFor="name">
                <input id="name" name="name" type="text" autoComplete="name" maxLength={100} className={inputClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Vaše meno" />
              </Field>
              <Field label="E-mail" error={errors.email} htmlFor="email">
                <input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={inputClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="vas@email.sk" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="O akú službu máte záujem?" error={errors.service} htmlFor="service">
                  <select id="service" name="service" defaultValue="" className={inputClass} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}>
                    <option value="" disabled>Vyberte službu</option>
                    <option>IT podpora</option><option>Webová stránka</option><option>Automatizácia</option><option>Webová aplikácia</option><option>Iné</option>
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Správa" error={errors.message} htmlFor="message">
                  <textarea id="message" name="message" rows={6} minLength={10} maxLength={1500} className={`${inputClass} resize-y py-3`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Stručne opíšte problém, cieľ alebo predstavu..." />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="newsletter_consent" className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input id="newsletter_consent" name="newsletter_consent" type="checkbox" className="mt-0.5 size-4 accent-primary" />
                  <span>Súhlasím so spracovaním môjho e-mailu pre marketingové a analytické účely (cookies, newsletter, ponuky). Súhlas môžem kedykoľvek odvolať.</span>
                </label>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="gdpr_consent" className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input id="gdpr_consent" name="gdpr_consent" type="checkbox" className="mt-0.5 size-4 accent-primary" aria-invalid={Boolean(errors.gdpr_consent)} aria-describedby={errors.gdpr_consent ? "gdpr_consent-error" : undefined} />
                  <span>Súhlasím so spracovaním osobných údajov v zmysle GDPR. Bližšie informácie v <Link to="/ochrana-sukromia" className="font-semibold text-foreground underline underline-offset-2 hover:text-primary">zásadách ochrany súkromia</Link>. Údaje budú uložené maximálne 12 mesiacov.</span>
                </label>
                {errors.gdpr_consent && <p id="gdpr_consent-error" className="mt-2 text-xs text-destructive" role="alert">{errors.gdpr_consent}</p>}
              </div>
            </div>

            {submitError && (
              <div className="mt-6 border border-destructive/50 bg-destructive/5 px-4 py-3 text-sm text-destructive" role="alert">
                {submitError}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs font-mono text-[10px] leading-relaxed text-muted-foreground">Po odoslaní dostanete potvrdzovací e-mail a uvidíte ďakovnú stránku.</p>
              <Button type="submit" disabled={submitting} className="min-h-12 rounded-none bg-foreground px-6 text-background shadow-none hover:bg-primary hover:text-primary-foreground disabled:opacity-60">
                {submitting ? "Odosielam..." : <>Odoslať dopyt <ArrowRight aria-hidden="true" /></>}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 font-mono text-[10px] uppercase text-muted-foreground sm:px-6 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Lanzo</span>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/ochrana-sukromia" className="transition-colors hover:text-primary">Ochrana súkromia</Link>
            <Link to="/cookies" className="transition-colors hover:text-primary">Cookies</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Field({ label, error, htmlFor, children }: { label: string; error: string | undefined; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">{label}</label>
      {children}
      {error && <p id={`${htmlFor}-error`} className="mt-2 text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}
