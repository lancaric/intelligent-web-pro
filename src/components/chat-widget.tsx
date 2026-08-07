import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Mail, MessageSquare, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

const HANDOFF = "[HANDOFF]";

const SUGGESTIONS = [
  "Koľko stojí webová stránka?",
  "Čo zahŕňa IT podpora?",
  "Viete mi zautomatizovať faktúry?",
];

function messageText(message: UIMessage) {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("");
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
  const handoff = Boolean(lastAssistant && messageText(lastAssistant).includes(HANDOFF));

  function submit(text: string) {
    const value = text.trim();
    if (!value || isLoading) return;
    setInput("");
    void sendMessage({ text: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Zavrieť chat" : "Otvoriť chat s asistentom"}
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {open ? <X aria-hidden="true" className="size-6" /> : <MessageSquare aria-hidden="true" className="size-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[min(34rem,calc(100dvh-8rem))] w-[min(24rem,calc(100vw-2rem))] flex-col border border-border bg-background shadow-2xl">
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 font-mono text-[10px] uppercase">
            <span className="flex items-center gap-2 font-semibold">
              <Bot aria-hidden="true" className="size-4 text-primary" /> Lanzo_assistant
            </span>
            <span className="text-success">[ONLINE]</span>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-sm">
            {messages.length === 0 && (
              <div className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  Ahoj — som AI asistent Lanzo. Odpoviem na otázky o službách, cenách a spolupráci. Ak si nebudem istý, prepojím vás priamo na človeka.
                </p>
                <div className="flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => submit(s)}
                      className="border border-border px-3 py-2 text-left text-xs transition-colors hover:border-primary hover:text-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => {
              const text = messageText(message).replace(HANDOFF, "").trim();
              if (!text) return null;
              return (
                <div
                  key={message.id}
                  className={
                    message.role === "user"
                      ? "ml-auto w-fit max-w-[85%] bg-foreground px-3 py-2 text-background"
                      : "w-fit max-w-[90%] whitespace-pre-wrap bg-surface px-3 py-2 leading-relaxed ring-1 ring-border"
                  }
                >
                  {text}
                </div>
              );
            })}

            {isLoading && (
              <p className="font-mono text-[10px] uppercase text-muted-foreground">Asistent píše…</p>
            )}

            {error && (
              <p className="border border-destructive/50 bg-destructive/5 px-3 py-2 text-xs text-destructive" role="alert">
                Asistent je momentálne nedostupný. Napíšte prosím na info@lanzo.sk.
              </p>
            )}

            {handoff && (
              <div className="border border-primary/40 bg-primary/5 px-3 py-3">
                <p className="mb-3 text-xs leading-relaxed">
                  Túto otázku radšej preberie človek. Pošlite dopyt alebo napíšte priamo e-mailom.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/kontakt"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 bg-foreground px-3 py-2 text-xs font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Kontaktný formulár <ArrowRight aria-hidden="true" className="size-3.5" />
                  </Link>
                  <a
                    href="mailto:info@lanzo.sk"
                    className="inline-flex items-center gap-2 border border-border px-3 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
                  >
                    <Mail aria-hidden="true" className="size-3.5" /> info@lanzo.sk
                  </a>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-3">
            <div className="flex items-center gap-2">
              <label htmlFor="chat-input" className="sr-only">Správa pre asistenta</label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={500}
                placeholder="Napíšte otázku…"
                className="min-h-11 w-full border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Odoslať správu"
                className="inline-flex size-11 shrink-0 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
              >
                <Send aria-hidden="true" className="size-4" />
              </button>
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase text-muted-foreground">
              AI odpovede sú orientačné · človek odpovie do 1 prac. dňa
            </p>
          </form>
        </div>
      )}
    </>
  );
}
