import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lanzo — IT služby, weby a AI automatizácie" },
      { name: "description", content: "Spoľahlivá IT podpora, moderné webové riešenia a praktické AI automatizácie pre firmy aj jednotlivcov." },
      { property: "og:title", content: "Lanzo — Precízna technológia pre váš biznis" },
      { property: "og:description", content: "IT podpora, weby a AI automatizácie s osobným a transparentným prístupom." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Lanzo",
        url: "/",
        email: "info@lanzo.sk",
        areaServed: "Slovensko",
        description: "IT služby, tvorba webov a AI automatizácie.",
      }),
    }],
  }),
  component: Index,
});

const services = [
  {
    number: "01",
    label: "IT služby",
    title: "Technika bez zbytočných prestojov",
    text: "Diagnostika a oprava počítačov, Windows, siete, zálohovanie, bezpečnosť aj vzdialená podpora.",
    items: ["Správa PC a notebookov", "Wi-Fi a routery", "Obnova dát a odstránenie vírusov"],
  },
  {
    number: "02",
    label: "Web & aplikácie",
    title: "Digitálna prezentácia, ktorá pracuje",
    text: "Rýchle firemné weby, landing pages a jednoduché aplikácie navrhnuté podľa reálneho cieľa.",
    items: ["Webové stránky na mieru", "Firemné prezentácie", "Správa a údržba webov"],
  },
  {
    number: "03",
    label: "AI & automatizácia",
    title: "Menej rutiny. Viac užitočnej práce.",
    text: "Praktickí AI asistenti, chatboty a prepojenia aplikácií, ktoré zjednodušia každodennú administratívu.",
    items: ["AI chatboty a asistenti", "Automatizácia procesov", "Integrácie medzi aplikáciami"],
  },
];

const process = [
  ["01", "Krátka konzultácia", "Popíšete problém alebo cieľ. Pýtam sa na podstatné veci a bez žargónu zhrniem možnosti."],
  ["02", "Jasný návrh a cena", "Dostanete odporúčané riešenie, rozsah, termín a cenu ešte pred začiatkom práce."],
  ["03", "Realizácia a odovzdanie", "Riešenie otestujem, zrozumiteľne odovzdám a podľa dohody sa postarám aj o ďalšiu podporu."],
];

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-6">
          <a href="#top" aria-label="Lanzo — domov" className="min-w-0 font-mono text-lg font-bold">
            LANZO<span className="text-primary">_</span>
          </a>
          <nav aria-label="Hlavná navigácia" className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <Link to="/sluzby" className="transition-colors hover:text-foreground">Služby</Link>
            <a href="#pristup" className="transition-colors hover:text-foreground">Prístup</a>
            <a href="#proces" className="transition-colors hover:text-foreground">Spolupráca</a>
            <Link to="/kontakt" className="font-semibold text-foreground transition-colors hover:text-primary">Kontakt</Link>
          </nav>
          <Link to="/kontakt" className="font-mono text-xs font-semibold text-foreground md:hidden">NAPÍSAŤ →</Link>
        </div>
      </header>

      <section id="top" className="relative pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-5 sm:px-6 lg:grid-cols-12">
          <div className="reveal-up lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase text-primary">
              <span className="diagnostic-pulse size-1.5 shrink-0 rounded-full bg-primary" />
              Dostupný pre nové projekty
            </div>
            <h1 className="mb-8 max-w-4xl text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
              Precízna technológia<br />pre váš biznis.
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Spoľahlivá IT podpora, moderné webové riešenia a praktické AI automatizácie — osobne, zrozumiteľne a bez zbytočných nákladov.
            </p>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link to="/kontakt" className="inline-flex min-h-14 items-center justify-center bg-foreground px-8 font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                Nezáväzne konzultovať
              </Link>
              <div className="flex items-center gap-4 px-1 font-mono text-xs text-muted-foreground sm:px-3">
                <span aria-hidden="true" className="opacity-40">//</span>
                <span>Napíšte, čo potrebujete vyriešiť</span>
              </div>
            </div>
          </div>

          <div className="reveal-up lg:col-span-5 lg:[animation-delay:180ms]">
            <div className="bg-surface p-5 shadow-lg ring-1 ring-border sm:p-6">
              <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-border pb-3 font-mono text-[10px]">
                <span className="min-w-0 truncate text-muted-foreground">LANZO_SERVICE_PROTOCOL</span>
                <span className="shrink-0 text-primary">[PRIPRAVENÝ]</span>
              </div>
              <div className="space-y-3 font-mono text-[11px] leading-relaxed sm:text-xs">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4"><span>IT PODPORA</span><span className="text-success">ONLINE</span></div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4"><span>WEBOVÉ RIEŠENIA</span><span>NA MIERU</span></div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4"><span>AI AUTOMATIZÁCIE</span><span>PRAKTICKÉ</span></div>
                <div className="relative mt-5 h-1 w-full bg-secondary"><div className="absolute inset-y-0 left-0 w-4/5 bg-primary" /></div>
                <div className="pt-3 leading-6 text-muted-foreground">
                  &gt; Analýza potrieb... PRIPRAVENÁ<br />
                  &gt; Návrh riešenia... TRANSPARENTNÝ<br />
                  &gt; Realizácia... ČAKÁ NA ZADANIE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="bg-foreground py-24 text-background sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-16 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5 sm:mb-20">
            <div>
              <p className="mb-3 font-mono text-xs uppercase text-primary">Čo dokážem vyriešiť</p>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Tri piliere služieb</h2>
            </div>
            <span className="hidden font-mono text-xs uppercase text-background/45 sm:block">Služby / 01—03</span>
          </div>
          <div className="grid grid-cols-1 border-t border-background/15 md:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.number} className={`border-b border-background/15 py-10 md:border-b-0 md:py-12 ${index === 0 ? "md:pr-10" : index === 1 ? "md:border-x md:px-10" : "md:pl-10"}`}>
                <span className="mb-6 block font-mono text-sm text-primary">{service.number}. {service.label}</span>
                <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
                <p className="mb-7 text-sm leading-relaxed text-background/60">{service.text}</p>
                <ul className="space-y-2 font-mono text-xs text-background/55">
                  {service.items.map((item) => <li key={item}>+ {item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-12 border-t border-background/15 pt-8 text-right">
            <Link to="/sluzby" className="inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase text-background transition-colors hover:text-primary">
              Balíčky a orientačné ceny <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="pristup" className="bg-surface py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="mb-4 font-mono text-xs uppercase text-primary">Dôvera bez prázdnych sľubov</p>
            <h2 className="mb-7 text-4xl font-extrabold leading-tight">Technická prax. Moderné nástroje. Ľudský prístup.</h2>
            <p className="leading-relaxed text-muted-foreground">
              Každý deň riešim reálne IT problémy — od počítačov a softvéru po siete a podporu používateľov. Moderné AI nástroje používam tam, kde prinášajú merateľný úžitok, nie ako náhradu za premýšľanie.
            </p>
          </div>
          <div className="grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {[
              ["01", "Jedna kontaktná osoba", "Komunikujete priamo so mnou od prvého e-mailu až po odovzdanie."],
              ["02", "Rozumný rozsah", "Navrhnem iba to, čo rieši váš problém a zodpovedá rozpočtu."],
              ["03", "Zrozumiteľná komunikácia", "Vysvetlím možnosti a riziká bez komplikovaného technického slovníka."],
              ["04", "Dôraz na kvalitu", "Každé riešenie testujem a odovzdávam tak, aby ste mu vedeli rozumieť."],
            ].map(([n, title, text]) => (
              <div key={n} className="bg-surface p-7 sm:p-8">
                <span className="mb-7 block font-mono text-xs text-primary">{n}</span>
                <h3 className="mb-3 font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proces" className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="mb-4 font-mono text-xs uppercase text-primary">Ako to funguje</p>
            <h2 className="text-4xl font-extrabold">Protokol spolupráce</h2>
          </div>
          <div className="space-y-10 lg:col-span-7 lg:col-start-6">
            {process.map(([n, title, text]) => (
              <div key={n} className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-5 sm:gap-8">
                <div className="grid size-8 shrink-0 place-items-center ring-1 ring-border font-mono text-xs font-bold">{n}</div>
                <div>
                  <h3 className="mb-2 font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 text-center sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <p className="mb-6 font-mono text-xs uppercase text-muted-foreground">Máte IT problém alebo nápad na digitálne riešenie?</p>
          <h2 className="mb-8 text-4xl font-extrabold leading-tight sm:text-5xl">Začnime krátkym e-mailom.</h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-muted-foreground">Napíšte mi, čo potrebujete vyriešiť. Ozvem sa s doplňujúcimi otázkami a navrhnem ďalší konkrétny krok.</p>
          <Link to="/kontakt" className="inline-flex min-h-14 items-center justify-center bg-foreground px-8 font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground">Otvoriť kontaktný formulár</Link>
        </div>
      </section>

      <footer className="py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 font-mono text-[10px] uppercase text-muted-foreground sm:px-6 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Lanzo</div>
          <div className="flex flex-wrap gap-x-8 gap-y-3"><span>Slovensko / Remote</span><a href="mailto:info@lanzo.sk" className="transition-colors hover:text-primary">info@lanzo.sk</a><Link to="/ochrana-sukromia" className="transition-colors hover:text-primary">Ochrana súkromia</Link><Link to="/cookies" className="transition-colors hover:text-primary">Cookies</Link></div>
        </div>
      </footer>
    </main>
  );
}
