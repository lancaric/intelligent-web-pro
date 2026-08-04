import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock3 } from "lucide-react";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby a ceny — Lanzo" },
      {
        name: "description",
        content:
          "Prehľadné balíčky pre IT podporu, webové stránky, webové aplikácie a automatizácie. Orientačné ceny, jasný rozsah a priama komunikácia.",
      },
      { property: "og:title", content: "Služby a orientačné ceny — Lanzo" },
      {
        property: "og:description",
        content: "Vyberte si riešenie podľa cieľa a rozpočtu: IT podpora, weby, aplikácie a automatizácie bez skrytých prekvapení.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sluzby" }],
  }),
  component: ServicesPage,
});

const packages = [
  {
    number: "01",
    label: "IT podpora",
    title: "Technika bez prestojov",
    price: "35 – 350 €",
    timeframe: "podľa dohody",
    description:
      "Rýchla pomoc s počítačmi, softvérom, sieťou a bezpečnosťou pre jednotlivcov aj menšie firmy.",
    items: [
      "Diagnostika a riešenie technických problémov",
      "Nastavenie počítačov, Windows a programov",
      "Wi-Fi, routery, zálohovanie a bezpečnosť",
      "Vzdialená alebo osobná podpora",
    ],
    subject: "Mám záujem o IT podporu",
  },
  {
    number: "02",
    label: "Webové stránky",
    title: "Profesionálny web",
    price: "490 – 1 500 €",
    timeframe: "2 – 5 týždňov",
    description:
      "Rýchla a dôveryhodná prezentácia pre živnostníka alebo menšiu firmu, pripravená získavať dopyty.",
    items: [
      "Návrh štruktúry a responzívny dizajn",
      "Kontaktný formulár a základné SEO",
      "Meranie návštevnosti a technické nasadenie",
      "Krátke zaškolenie po odovzdaní",
    ],
    subject: "Mám záujem o webovú stránku",
  },
  {
    number: "03",
    label: "Automatizácie",
    title: "Menej ručnej práce",
    price: "250 – 1 200 €",
    timeframe: "1 – 3 týždne",
    description:
      "Prepojenie nástrojov a automatizácia opakovaných úloh, ktoré dnes zbytočne berú váš čas.",
    items: [
      "Analýza procesu a návrh riešenia",
      "Prepojenie formulárov, e-mailov a tabuliek",
      "AI asistent alebo jednoduchý chatbot",
      "Testovanie, dokumentácia a odovzdanie",
    ],
    subject: "Mám záujem o automatizáciu",
    featured: true,
  },
  {
    number: "04",
    label: "Webové aplikácie",
    title: "Nástroj na mieru",
    price: "1 200 – 5 000 €",
    timeframe: "4 – 10 týždňov",
    description:
      "Jednoduchá interná alebo zákaznícka aplikácia navrhnutá okolo konkrétneho pracovného postupu.",
    items: [
      "Návrh používateľského toku a prototyp",
      "Prihlásenie, formuláre a práca s dátami",
      "Responzívne rozhranie a testovanie",
      "Nasadenie a dohodnutá podpora",
    ],
    subject: "Mám záujem o webovú aplikáciu",
  },
];

function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-6">
          <Link to="/" aria-label="Lanzo — domov" className="min-w-0 font-mono text-lg font-bold">
            LANZO<span className="text-primary">_</span>
          </Link>
          <nav aria-label="Hlavná navigácia" className="flex items-center gap-5 text-sm font-medium sm:gap-7">
            <Link to="/" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">
              Domov
            </Link>
            <span className="hidden font-semibold text-foreground sm:inline-flex">Služby</span>
            <Link to="/kontakt" className="font-mono text-xs font-semibold transition-colors hover:text-primary">
              NAPÍSAŤ →
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-border pb-16 pt-14 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Link to="/" className="mb-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft aria-hidden="true" className="size-4" /> Späť na úvod
          </Link>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="reveal-up lg:col-span-8">
              <p className="mb-4 font-mono text-xs uppercase text-primary">Služby / orientačný cenník</p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
                Jasný rozsah.<br />Rozumná investícia.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:col-span-4 lg:pb-2">
              Vyberte si najbližší typ riešenia. Po krátkej konzultácii dostanete presný rozsah, cenu a termín ešte pred začiatkom práce.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {packages.map((item) => (
              <article
                key={item.number}
                className={`relative flex min-h-full flex-col border p-6 sm:p-8 ${item.featured ? "border-primary bg-surface shadow-lg" : "border-border bg-background"}`}
              >
                {item.featured && (
                  <span className="absolute right-5 top-0 -translate-y-1/2 bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase text-primary-foreground">
                    Častý prvý krok
                  </span>
                )}
                <div className="mb-8 flex items-center justify-between gap-4 font-mono text-xs">
                  <span className="text-primary">{item.number}</span>
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
                <h2 className="mb-3 text-2xl font-extrabold">{item.title}</h2>
                <p className="mb-7 min-h-20 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <div className="mb-7 border-y border-border py-5">
                  <p className="mb-1 font-mono text-[10px] uppercase text-muted-foreground">Orientačná cena</p>
                  <p className="text-2xl font-extrabold">{item.price}</p>
                  <p className="mt-3 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                    <Clock3 aria-hidden="true" className="size-3.5 text-primary" /> {item.timeframe}
                  </p>
                </div>
                <ul className="mb-9 space-y-3 text-sm leading-relaxed">
                  {item.items.map((feature) => (
                    <li key={feature} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-3">
                      <Check aria-hidden="true" className="mt-0.5 size-4 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:info@lanzo.sk?subject=${encodeURIComponent(item.subject)}`}
                  className={`mt-auto inline-flex min-h-12 items-center justify-between gap-3 px-5 text-sm font-semibold transition-colors ${item.featured ? "bg-foreground text-background hover:bg-primary hover:text-primary-foreground" : "border border-foreground bg-background text-foreground hover:bg-foreground hover:text-background"}`}
                >
                  Nezáväzne sa opýtať <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl font-mono text-[11px] leading-relaxed text-muted-foreground">
            * Uvedené ceny sú orientačné. Finálna cena závisí od rozsahu, pripravenosti podkladov a potrebných integrácií. Vždy ju odsúhlasíme vopred.
          </p>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="mb-4 font-mono text-xs uppercase text-primary">Neviete, ktorý balíček sedí?</p>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">Stačí opísať problém. Navrhnem najmenší zmysluplný rozsah.</h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href="mailto:info@lanzo.sk?subject=Krátka konzultácia" className="inline-flex min-h-14 items-center gap-4 bg-primary px-7 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Dohodnúť konzultáciu <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 font-mono text-[10px] uppercase text-muted-foreground sm:px-6 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Lanzo</span>
          <div className="flex flex-wrap gap-x-8 gap-y-3"><span>Slovensko / Remote</span><a href="mailto:info@lanzo.sk" className="transition-colors hover:text-primary">info@lanzo.sk</a></div>
        </div>
      </footer>
    </main>
  );
}