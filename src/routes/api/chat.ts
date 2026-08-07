import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import {
  createLovableAiGatewayProvider,
  getLovableAiGatewayRunId,
  getLovableAiGatewayResponseHeaders,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `Si asistent značky Lanzo — jednočlenného slovenského štúdia (IT technik, ktorý robí IT podporu, webové stránky, AI automatizácie a webové aplikácie). Kontakt: info@lanzo.sk, pôsobnosť Slovensko / remote, odpoveď zvyčajne do 1 pracovného dňa.

Cenové rozpätia (orientačné, vždy to zdôrazni):
- IT podpora: 35 – 350 € (podľa dohody, SLA odozva od 1 hodiny pri kritickej priorite)
- Automatizácie: 250 – 1 200 €, 1–3 týždne
- Webové stránky: 490 – 1 500 €, 2–5 týždňov
- Webové aplikácie: 1 200 – 5 000 €, 4–10 týždňov

Pravidlá:
- Odpovedaj vždy po slovensky, stručne, vecne, priateľsky a bez marketingových fráz. Max 4–6 viet.
- Nikdy si nevymýšľaj referencie, presné ceny, termíny ani technické záväzky.
- Ak sa pýtajú na konkrétnu cenovú ponuku, termín, zmluvu, prístupy, fakturáciu alebo niečo, čo nevieš spoľahlivo zodpovedať, odpovedz krátko a odovzdaj konverzáciu reálnej osobe.
- Keď odovzdávaš konverzáciu človeku, ukonči správu presne značkou [HANDOFF] na samostatnom riadku (nič za ňou).
- Ak používateľ výslovne žiada človeka, okamžite použi [HANDOFF].`;

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const initialRunId = getLovableAiGatewayRunId(request);
        const gateway = createLovableAiGatewayProvider(key, initialRunId);

        const result = streamText({
          model: gateway("google/gemini-3.6-flash"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        const response = result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
          headers: getLovableAiGatewayResponseHeaders(undefined, {
            ...(initialRunId ? { "X-Lovable-AIG-Run-ID": initialRunId } : {}),
          }),
        });

        return withLovableAiGatewayRunIdHeader(response, gateway);
      },
    },
  },
});
