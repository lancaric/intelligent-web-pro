import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ochrana-sukromia")({
  head: () => ({
    meta: [
      { title: "Ochrana súkromia a GDPR — Lanzo" },
      {
        name: "description",
        content: "Zásady ochrany osobných údajov v zmysle GDPR. Prevádzkovateľ: Kristián Lančarič. Údaje uchovávame max. 12 mesiacov.",
      },
      { property: "og:title", content: "Ochrana súkromia a GDPR — Lanzo" },
      { property: "og:description", content: "Zásady spracovania osobných údajov v zmysle GDPR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ochrana-sukromia" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Prevádzkovateľ osobných údajov",
    body: [
      "Prevádzkovateľom osobných údajov v zmysle Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) je:",
      "Meno: Kristián Lančarič",
      "Webová stránka: lanzo.sk",
      "Kontaktný e-mail: info@lanzo.sk",
      "Na tejto webovej stránke nie je vedený záznam o činnostiach spracovania podľa § 16 ods. 3 zákona č. 18/2018 Z.z., keďže spracovanie nepodlieha povinnosti vedenia záznamu.",
    ],
  },
  {
    title: "2. Aké osobné údaje spracúvame",
    body: [
      "Prostredníctvom kontaktného formulára na stránke /kontakt spracúvame tieto osobné údaje:",
      "— Meno a priezvisko (úd potrebný na oslovenie)",
      "— E-mailová adresa (údaj potrebný na odpoveď)",
      "— Text správy (obsah vašej požiadavky)",
      "— Vybraný typ služby (IT podpora, web, automatizácia, aplikácia, iné)",
      "— Súhlas so spracovaním (GDPR) a prípadný súhlas s marketingovými/analytickými cookies",
      "Žiadne iné osobné údaje nezhromažďujeme, ak nám ich sami neposkytnete.",
    ],
  },
  {
    title: "3. Účel a právny základ spracovania",
    body: [
      "Vaše osobné údaje spracúvame výlučne za účelom odpovede na váš dopyt a prípravy návrhu spolupráce.",
      "Právnym základom spracovania je váš výslovný súhlas (čl. 6 ods. 1 písm. a GDPR), ktorý udeľujete zaškrtnutím políčka súhlasu v kontaktnom formulári.",
      "Súhlas môžete kedykoľvek odvolať e-mailom na info@lanzo.sk. Odvolanie súhlasu neovplyvní zákonnosť spracovania pred jeho odvolaním.",
    ],
  },
  {
    title: "4. Doba uchovávania údajov",
    body: [
      "Vaše osobné údaje uchovávame maximálne 12 mesiacov od odoslania formulára.",
      "Po uplynutí tejto doby budú údaje automaticky vymazané, ak ste medzitým nezískali zákonný nárok na dlhšiu dobu uchovávania (napr. v rámci uzavretej zmluvy).",
      "V prípade uzavretia zmluvy môžeme údaje uchovávať po dobu nevyhnutnú na plnenie zákonných povinností (napr. účtovníctvo).",
    ],
  },
  {
    title: "5. Príjemcovia a sprostredkovatelia",
    body: [
      "Vaše osobné údaje nepredávame, neprenajímame ani neposkytujeme tretím stranám na marketingové účely.",
      "Na technické spracovanie (databáza, e-mailové služby) využívame sprostredkovateľov, ktorí sú viazaní zmluvou o spracúvaní osobných údajov v zmysle čl. 28 GDPR:",
      "— Supabase (databázové úložisko, EÚ)",
      "— Resend (e-mailová služba, EÚ/USA s GDPR DPA)",
      "Títo sprostredkovatelia spracúvajú údaje výlučne na náš pokyn a v súlade s GDPR.",
    ],
  },
  {
    title: "6. Prenos údajov do tretích krajín",
    body: [
      "Vaše údaje sa spracúvajú predovšetkým v prostredí Európskej únie.",
      "V prípade využitia služieb so spracovaním mimo EÚ (napr. USA) zabezpečujeme primeranú úroveň ochrany prostredníctvom štandardných zmluvných dôkazov (SCC) v zmysle čl. 46 GDPR.",
    ],
  },
  {
    title: "7. Vaše práva podľa GDPR",
    body: [
      "Ako dotknutá osoba máte právo:",
      "— Právo na prístup k svojim osobným údajom (čl. 15 GDPR)",
      "— Právo na opravu nesprávnych alebo neúplných údajov (čl. 16 GDPR)",
      "— Právo na vymazanie (čl. 17 GDPR) — „právo byť zabudnutý\"",
      "— Právo na obmedzenie spracovania (čl. 18 GDPR)",
      "— Právo na prenosnosť údajov (čl. 20 GDPR)",
      "— Právo namietať voči spracovaniu (čl. 21 GDPR)",
      "— Právo odvolať súhlas kedykoľvek (čl. 7 ods. 3 GDPR)",
      "Tieto práva môžete uplatniť e-mailom na info@lanzo.sk.",
    ],
  },
  {
    title: "8. Právo podať sťažnosť",
    body: [
      "Ak sa domnievate, že spracovanie vašich osobných údajov porušuje GDPR, máte právo podať sťažnosť:",
      "— Úrad na ochranu osobných údajov Slovenskej republiky",
      "— Adresa: Hraničná 16, 826 06 Bratislava 29, Slovenská republika",
      "— Web: dataprotection.gov.sk",
      "Máte tiež právo obrátiť sa na súd.",
    ],
  },
  {
    title: "9. Cookies a sledovanie",
    body: [
      "Tento web používa cookies (súbory cookies) na zlepšenie funkčnosti a analýzu návštevnosti.",
      "Bližšie informácie o typoch cookies, ich účele a spôsode odvolania súhlasu nájdete v Zásadách používania cookies.",
      "Súhlas s cookies udeľujete prostredníctvom cookie banneru, ktorý sa zobrazí pri prvej návšteve.",
    ],
  },
  {
    title: "10. Zmeny týchto zásad",
    body: [
      "Tieto zásady môžu byť kedykoľvek aktualizované. Dátum poslednej aktualizácie je uvedený dolu.",
      "Významné zmeny vás budeme informovať prostredníctvom oznámenia na tejto stránke alebo e-mailom, ak ste nám poskytli kontaktný e-mail.",
    ],
  },
];

function PrivacyPage() {
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
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">Ochrana súkromia<br />a GDPR</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tento dokument popisuje spôsob spracovania osobných údajov na webovej stránke lanzo.sk v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (všeobecné nariadenie o ochrane údajov — GDPR) a zákonom č. 18/2018 Z.z. o ochrane osobných údajov.
          </p>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">Posledná aktualizácia: 4. augusta 2026</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
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
            <Link to="/cookies" className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-foreground transition-colors hover:text-primary">
              Zásady používania cookies →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 font-mono text-[10px] uppercase text-muted-foreground sm:px-6 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Lanzo — Kristián Lančarič</span>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/ochrana-sukromia" className="font-semibold text-foreground">Ochrana súkromia</Link>
            <Link to="/cookies" className="transition-colors hover:text-primary">Cookies</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
