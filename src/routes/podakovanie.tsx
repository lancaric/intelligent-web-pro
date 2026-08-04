import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Mail } from "lucide-react";

export const Route = createFileRoute("/podakovanie")({
  head: () => ({
    meta: [
      { title: "Ďakujem — Lanzo" },
      { name: "description", content: "Váš dopyt bol prijatý. Ozvem sa vám s konkrétnym návrhom ďalšieho kroku." },
      { property: "og:title", content: "Ďakujem za vašu správu — Lanzo" },
      { property: "og:description", content: "Váš dopyt bol prijatý a potvrdený e-mailom." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/podakovanie" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-6">
          <Link to="/" aria-label="Lanzo — domov" className="min-w-0 font-mono text-lg font-bold">
            LANZO<span className="text-primary">_</span>
          </Link>
          <Link to="/kontakt" className="font-mono text-xs font-semibold text-foreground transition-colors hover:text-primary">
            NAPÍSAŤ →
          </Link>
        </div>
      </header>

      <section className="flex flex-1 items-center justify-center px-5 py-20 sm:py-28">
        <div className="reveal-up mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 grid size-20 place-items-center rounded-full bg-success/10 ring-1 ring-success/30">
            <Check aria-hidden="true" className="size-10 text-success" />
          </div>
          <p className="mb-4 font-mono text-xs uppercase text-primary">Dopyt prijatý</p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">Ďakujem za vašu správu.</h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Váš dopyt bol úspešne odoslaný a uložený. Potvrdzovací e-mail je na ceste k vám. Ozvem sa s konkrétnym návrhom ďalšieho kroku zvyčajne do 1 pracovného dňa.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="inline-flex min-h-12 items-center justify-center bg-foreground px-8 font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground">
              Späť na úvod <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <a href="mailto:info@lanzo.sk" className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground bg-background px-8 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
              <Mail aria-hidden="true" className="size-4" /> info@lanzo.sk
            </a>
          </div>
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
