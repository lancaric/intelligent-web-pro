import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Zásady používania cookies — Lanzo" },
      {
        name: "description",
        content: "Informácie o cookies používaných na webe lanzo.sk — nevyhnutné, analytické a marketingové cookies a spôsob odvolania súhlasu.",
      },
      { property: "og:title", content: "Zásady používania cookies — Lanzo" },
      { property: "og:description", content: "Typy cookies, ich účel a spôsob odvolania súhlasu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

const cookieTypes = [
  {
    name: "Nevyhnutné (technické) cookies",
    required: true,
    description:
      "Tieto cookies sú nevyhnutné pre správne fungovanie webovej stránky. Zabezpečujú základné funkcie ako navigácia, bezpečnosť a prístup k chráneným oblastiam. Bez týchto cookies stránka nemôže pracovať správne.",
    examples: [
      "Uloženie vášho súhlasu s cookies (cookie_consent)",
      "Základná funkčnosť formulárov a navigácie",
    ],
  },
  {
    name: "Analytické cookies",
    required: false,
    description:
      "Pomáhajú nám pochopiť, ako návštevníci používajú našu webovú stránku, aby sme ju mohli zlepšovať. Zhromažďujú anonymizované štatistické dáta o počte návštev, obľúbených stránkach a spôsobe používania.",
    examples: [
      "Google Analytics alebo podobné nástroje",
      "Štatistika návštevnosti a správania používateľov",
    ],
  },
  {
    name: "Marketingové cookies",
    required: false,
    description:
      "Používajú sa na zobrazenie relevantnejšieho obsahu a reklamy. Môžu sledovať vašu aktivitu naprieč webom na základe vami udeleného súhlasu, aby sme vám mohli ponúknuť relevantnejšie informácie a služby.",
    examples: [
      "Personalizácia obsahu a ponúk",
      "Meranie výkonnosti reklamných kampaní",
    ],
  },
];

const sections = [
  {
    title: "1. Čo sú cookies",
    body: [
      "Cookies sú malé textové súbory, ktoré webová stránka uloží do vášho prehliadača alebo zariadenia. Umožňujú webovej stránke zapamätať si vaše akcie a preferencie počas určitého obdobia.",
      "Cookies sa používajú na zlepšenie funkčnosti, analýzu návštevnosti a personalizáciu obsahu.",
    ],
  },
  {
    title: "2. Súhlas s cookies",
    body: [
      "Pri prvej návšteve našej stránky sa vám zobrazí cookie banner, v ktorom môžete vyjadriť súhlas s používaním analytických a marketingových cookies.",
      "Nevyhnutné (technické) cookies sa používajú vždy a nevyžadujú váš súhlas, pretože sú nevyhnutné pre fungovanie stránky.",
      "Súhlas s analytickými a marketingovými cookies je dobrovoľný a môžete ho kedykoľvek odvolať.",
    ],
  },
  {
    title: "3. Správa a odvolanie súhlasu",
    body: [
      "Váš súhlas s cookies uchovávame 12 mesiacov, po ktorých sa banner zobrazí znova.",
      "Súhlas môžete kedykoľvek odvolať alebo zmeniť nasledujúcimi spôsobmi:",
      "— Kliknutím na odkaz „Spravovať cookies\" v pätičke stránky, ktorý znova zobrazí cookie banner",
      "— Vymazaním cookies v nastaveniach vášho prehliadača",
      "— E-mailom na info@lanzo.sk s žiadosťou o vymazanie vášho súhlasu",
      "Odvolanie súhlasu neovplyvní zákonnosť spracovania pred jeho odvolaním.",
    ],
  },
  {
    title: "4. Tretie strany",
    body: [
      "Niektoré cookies môžu byť nastavované tretími stranami (napr. Google pre analytické cookies). Tieto tretie strany môžu spracúvať dáta v súlade so svojimi vlastnými zásadami ochrany súkromia.",
      "Odporúčame vám oboznámiť sa so zásadami týchto tretích strán.",
    ],
  },
  {
    title: "5. Súvislosť s GDPR",
    body: [
      "Cookies, ktoré zhromažďujú osobné údaje (napr. IP adresu), podliehajú ochrane v zmysle GDPR.",
      "Bližšie informácie o spracovaní osobných údajov nájdete v našich Zásadách ochrany súkromia.",
    ],
  },
  {
    title: "6. Zmeny týchto zásad",
    body: [
      "Tieto zásady môžu byť kedykoľvek aktualizované. Dátum poslednej aktualizácie je uvedený dolu.",
      "Významné zmeny vás budeme informovať prostredníctvom oznámenia na tejto stránke.",
    ],
  },
];

function CookiesPage() {
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
            <Link to="/kontakt" className="font-mono text-xs font-semibold transition-colors hover:text-primary">NAPÍSAŤ →</Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-border pb-14 pt-14 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Link to="/" className="mb-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
            ← Späť na úvod
          </Link>
          <p className="mb-4 font-mono text-xs uppercase text-primary">Právne informácie</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">Zásady používania<br />cookies</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tento dokument popisuje, aké cookies používame na webovej stránke lanzo.sk, aký je ich účel a ako môžete svoj súhlas udeliť, spravovať alebo odvolať.
          </p>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">Posledná aktualizácia: 4. augusta 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="mb-8 text-xl font-bold sm:text-2xl">Typy cookies, ktoré používame</h2>
          <div className="mb-16 space-y-6">
            {cookieTypes.map((type) => (
              <article key={type.name} className="border border-border bg-surface p-6 sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold">{type.name}</h3>
                  {type.required ? (
                    <span className="bg-secondary px-3 py-1 font-mono text-[10px] font-bold uppercase text-secondary-foreground">Vždy aktívne</span>
                  ) : (
                    <span className="bg-primary/10 px-3 py-1 font-mono text-[10px] font-bold uppercase text-primary">Voliteľné</span>
                  )}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{type.description}</p>
                <ul className="space-y-2 font-mono text-xs text-muted-foreground">
                  {type.examples.map((ex) => (
                    <li key={ex} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-3">+ {ex}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="mb-4 text-xl font-bold sm:text-2xl">{section.title}</h2>
                <div className="space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {section.body.map((line, i) => (
                    <p key={i} className={line.startsWith("—") ? "pl-2" : ""}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <Link to="/ochrana-sukromia" className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-foreground transition-colors hover:text-primary">
              ← Zásady ochrany súkromia
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 font-mono text-[10px] uppercase text-muted-foreground sm:px-6 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Lanzo — Kristián Lančarič</span>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/ochrana-sukromia" className="transition-colors hover:text-primary">Ochrana súkromia</Link>
            <Link to="/cookies" className="font-semibold text-foreground">Cookies</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
