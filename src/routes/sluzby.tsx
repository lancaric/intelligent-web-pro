import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Cloud,
  Cpu,
  Lock,
  Mail,
  MessagesSquare,
  Network,
  Phone,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";


export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — Lanzo | IT partner pre malé a stredné firmy" },
      {
        name: "description",
        content:
          "Komplexné IT služby pre firmy bez vlastného IT oddelenia: externá IT správa, kybernetická bezpečnosť, sieťová infraštruktúra, AI automatizácia a vývoj interných aplikácií.",
      },
      { property: "og:title", content: "IT služby pre malé a stredné firmy — Lanzo" },
      {
        property: "og:description",
        content:
          "Dlhodobý IT partner pre firmy bez vlastného IT oddelenia. Externá správa, bezpečnosť, siete, AI automatizácia a vývoj aplikácií.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sluzby" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Lanzo",
          url: "/sluzby",
          email: "info@lanzo.sk",
          areaServed: "Slovensko",
          description:
            "IT partner pre malé a stredné firmy: externá IT správa, kybernetická bezpečnosť, sieťová infraštruktúra, AI automatizácia a vývoj interných aplikácií.",
        }),
      },
    ],
  }),
  component: ServicesPage,
});

type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  marketing: string;
  subject: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: Cloud,
    title: "Externá IT správa a podpora",
    tagline: "Komplexná starostlivosť o firemnú IT infraštruktúru",
    description:
      "Postaráme sa o celú vašu IT infraštruktúru bez potreby vlastného IT oddelenia. Od každodenných technických problémov po dlhodobú údržbu a optimalizáciu prostredia.",
    benefits: [
      "Vzdialená a onsite IT podpora",
      "Správa počítačov a notebookov",
      "Riešenie technických problémov používateľov",
      "Aktualizácie systémov a softvéru",
      "Monitoring zariadení",
      "Správa používateľských účtov",
      "Microsoft 365 administrácia",
      "Pravidelná údržba IT prostredia",
    ],
    marketing:
      "Zabezpečíme, aby vaša IT infraštruktúra fungovala spoľahlivo každý deň. Ste pripravení sústrediť sa na podnikanie a IT necháte na nás.",
    subject: "Mám záujem o externú IT správu a podporu",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Kybernetická bezpečnosť",
    tagline: "Ochrana firemných dát, systémov a siete",
    description:
      "Chránime vaše firemné dáta, systémy a sieť pred bezpečnostnými hrozbami. Od auditov po implementáciu bezpečnostných politík a prípravu na legislatívne požiadavky.",
    benefits: [
      "Bezpečnostné audity",
      "Kontrola konfigurácie firewallov",
      "Nastavenie VPN prístupov",
      "Viacfaktorové overenie (MFA)",
      "Bezpečnostné politiky",
      "Ochrana používateľských účtov",
      "Kontrola zálohovania",
      "Základná príprava na požiadavky NIS2",
    ],
    marketing:
      "Bezpečnosť už nie je výsadou veľkých spoločností. Pomáhame firmám chrániť ich dáta, systémy a podnikanie.",
    subject: "Mám záujem o kybernetickú bezpečnosť",
  },
  {
    number: "03",
    icon: Network,
    title: "Sieťová infraštruktúra",
    tagline: "Návrh, konfigurácia a správa firemných sietí",
    description:
      "Navrhujeme, konfigurujeme a spravujeme firemné siete, ktoré sú stabilným základom každodennej prevádzky. Riešenia rastú spolu s vaším podnikaním.",
    benefits: [
      "Návrh sieťovej architektúry",
      "Konfigurácia switchov",
      "WiFi riešenia",
      "VLAN siete",
      "Firewall riešenia",
      "VPN pre vzdialený prístup",
      "Optimalizácia výkonu siete",
      "Diagnostika problémov",
    ],
    marketing:
      "Stabilná sieť je základ každej modernej firmy. Navrhujeme riešenia, ktoré rastú spolu s vaším podnikaním.",
    subject: "Mám záujem o sieťovú infraštruktúru",
  },
  {
    number: "04",
    icon: Cpu,
    title: "AI automatizácia a digitalizácia",
    tagline: "Moderné technológie na šetrenie času a ručnej práce",
    description:
      "Pomáhame firmám využiť potenciál umelej inteligencie a automatizácie tam, kde môže reálne ušetriť čas a peniaze. Od AI chatbotov po digitalizáciu interných procesov.",
    benefits: [
      "AI chatboty",
      "Firemní AI asistenti",
      "Automatizácia opakovaných procesov",
      "Spracovanie dokumentov",
      "Automatické reporty",
      "Prepojenie systémov",
      "Digitalizácia interných procesov",
    ],
    marketing:
      "Pomáhame firmám využiť potenciál umelej inteligencie a automatizácie tam, kde môže ušetriť čas a peniaze.",
    subject: "Mám záujem o AI automatizáciu a digitalizáciu",
  },
  {
    number: "05",
    icon: Lock,
    title: "Vývoj interných aplikácií",
    tagline: "Softvérové riešenia prispôsobené potrebám firmy",
    description:
      "Vyvíjame digitálne nástroje, ktoré zjednodušujú každodennú prácu a riešia konkrétne firemné potreby — od zákazkových systémov po firemné dashboardy a integrácie.",
    benefits: [
      "Interné webové aplikácie",
      "Zákazkové systémy",
      "Administračné panely",
      "Formulárové systémy",
      "Evidenčné aplikácie",
      "Firemné dashboardy",
      "Integrácia existujúcich riešení",
    ],
    marketing:
      "Vyvíjame digitálne nástroje, ktoré zjednodušujú každodennú prácu a riešia konkrétne firemné potreby.",
    subject: "Mám záujem o vývoj interných aplikácií",
  },
];

const trustPillars = [
  {
    title: "Dlhodobé partnerstvo",
    description:
      "Nie sme tu na jednorazovú úlohu. Stávame sa vaším IT partnerom, ktorý pozná vaše prostredie a rastie spolu s vami.",
  },
  {
    title: "Spoľahlivosť",
    description:
      "Rýchla odozva, proaktívny monitoring a riešenia, ktoré fungujú aj keď sa niečo pokazí.",
  },
  {
    title: "Bezpečnosť na prvom mieste",
    description:
      "Bezpečnosť nie je doplnok — je súčasťou každého riešenia, ktoré dodávame.",
  },
  {
    title: "Transparentná komunikácia",
    description:
      "Vysvetlíme možnosti a riziká bez technického žargónu. Vždy viete, za čo platíte.",
  },
];

const supportChannels = [
  {
    icon: Mail,
    channel: "E-mail",
    detail: "info@lanzo.sk",
    note: "Základný kanál pre všetky požiadavky. Každý e-mail dostane potvrdenie o prijatí.",
  },
  {
    icon: Phone,
    channel: "Telefón",
    detail: "Pracovné dni 8:00 – 17:00",
    note: "Pre urgentné výpadky, ktoré blokujú prevádzku firmy.",
  },
  {
    icon: MessagesSquare,
    channel: "Zdieľaný kanál",
    detail: "Teams / Slack",
    note: "Pri dlhodobej spolupráci zriadime spoločný kanál pre rýchlu komunikáciu.",
  },
];

const slaLevels = [
  {
    priority: "Kritická",
    example: "Výpadok siete, servera alebo e-mailov — firma nemôže pracovať.",
    response: "do 1 hodiny",
    fix: "riešenie začíname okamžite",
  },
  {
    priority: "Vysoká",
    example: "Nefunkčné zariadenie alebo aplikácia u viacerých používateľov.",
    response: "do 4 hodín",
    fix: "spravidla v ten istý pracovný deň",
  },
  {
    priority: "Bežná",
    example: "Individuálny problém používateľa, nastavenie účtu, inštalácia.",
    response: "do 1 pracovného dňa",
    fix: "do 2 pracovných dní",
  },
  {
    priority: "Plánovaná",
    example: "Upgrade, migrácia, nové zariadenia, konzultácia.",
    response: "do 2 pracovných dní",
    fix: "podľa dohodnutého termínu",
  },
];

const supportWorkflow = [
  {
    step: "01",
    title: "Nahlásenie",
    description:
      "Požiadavku pošlete e-mailom, telefonicky alebo v zdieľanom kanáli. Zaznamenáme ju a potvrdíme prijatie.",
  },
  {
    step: "02",
    title: "Triáž a priorita",
    description:
      "Do niekoľkých minút posúdime dopad na prevádzku a pridelíme prioritu podľa SLA tabuľky.",
  },
  {
    step: "03",
    title: "Diagnostika",
    description:
      "Vzdialene sa pripojíme, zistíme príčinu a informujeme vás, čo sa deje a aký je odhad riešenia.",
  },
  {
    step: "04",
    title: "Riešenie",
    description:
      "Problém odstránime vzdialene, prípadne prídeme osobne. Priebeh vidíte v komunikácii, nie až na konci.",
  },
  {
    step: "05",
    title: "Overenie a uzavretie",
    description:
      "Potvrdíte, že všetko funguje. Až potom požiadavku uzatvárame a zapisujeme riešenie do dokumentácie.",
  },
  {
    step: "06",
    title: "Prevencia",
    description:
      "Opakované problémy riešime systémovo — úpravou konfigurácie, monitoringom alebo návrhom zmeny.",
  },
];

const supportFaq = [
  {
    question: "Ako rýchlo reagujete na nahlásený problém?",
    answer:
      "Podľa priority: kritické výpadky do 1 hodiny, bežné požiadavky do 1 pracovného dňa. Presné časy máte v SLA tabuľke vyššie a sú súčasťou zmluvy.",
  },
  {
    question: "Potrebujem zmluvu, alebo sa dá aj jednorazovo?",
    answer:
      "Oboje. Jednorazové zásahy fakturujeme hodinovo, pri pravidelnej spolupráci odporúčame mesačný paušál s garantovaným časom odozvy.",
  },
  {
    question: "Riešite problémy vzdialene alebo prídete osobne?",
    answer:
      "Väčšinu požiadaviek vyriešime vzdialene do niekoľkých minút. Ak to problém vyžaduje (hardvér, sieť, nové zariadenia), dohodneme osobný výjazd.",
  },
  {
    question: "Čo ak sa niečo pokazí mimo pracovných hodín?",
    answer:
      "Pri paušálnej spolupráci sa dá dohodnúť rozšírená dostupnosť vrátane večerov a víkendov pre kritické výpadky.",
  },
  {
    question: "Prevezmete správu aj po inom dodávateľovi?",
    answer:
      "Áno. Začíname auditom prostredia, zdokumentujeme prístupy a nastavenia a až potom preberáme zodpovednosť — bez výpadku prevádzky.",
  },
  {
    question: "Ako fakturujete a čo je v cene?",
    answer:
      "Transparentne: pri paušále je v cene dohodnutý rozsah podpory a monitoring, nadrámcové práce odsúhlasujete vopred. Nikdy vás neprekvapí faktúra bez vysvetlenia.",
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

      {/* Hero */}
      <section className="border-b border-border pb-16 pt-14 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4" /> Späť na úvod
          </Link>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="reveal-up lg:col-span-8">
              <p className="mb-4 font-mono text-xs uppercase text-primary">Služby / IT partner pre firmy</p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
                Váš dlhodobý<br />IT partner.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:col-span-4 lg:pb-2">
              Komplexné IT riešenia pre malé a stredné firmy bez vlastného IT oddelenia. Od každodennej podpory po strategický rozvoj infraštruktúry.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-14 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5">
            <div>
              <p className="mb-3 font-mono text-xs uppercase text-primary">Naše služby</p>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Päť oblastí, ktoré<br />pokryjeme za vás</h2>
            </div>
            <span className="hidden font-mono text-xs uppercase text-muted-foreground sm:block">01—05</span>
          </div>

          <div className="space-y-px border-y border-border bg-border">
            {services.map((service) => (
              <ServiceRow key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* IT podpora — komunikácia a SLA */}
      <section id="it-podpora-sla" className="border-t border-border bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase text-primary">IT podpora / Ako to funguje</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Vieme, dokedy sa<br />ozveme a čo urobíme
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Podpora nie je sľub „ozveme sa čo najskôr". Máme pevne dané kanály, časy odozvy a postup riešenia — všetko je súčasťou dohody.
            </p>
          </div>

          <div className="mb-px grid gap-px border-y border-border bg-border sm:grid-cols-3">
            {supportChannels.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.channel} className="bg-surface p-8">
                  <Icon aria-hidden="true" className="mb-5 size-6 text-primary" />
                  <h3 className="text-lg font-bold">{c.channel}</h3>
                  <p className="mt-1 font-mono text-xs text-primary">{c.detail}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <Clock aria-hidden="true" className="size-5 text-primary" />
              <h3 className="text-xl font-bold">Garantované časy odozvy (SLA)</h3>
            </div>
            <div className="overflow-x-auto border border-border bg-background">
              <table className="w-full min-w-[720px] text-left text-sm">
                <caption className="sr-only">Prehľad priorít a garantovaných časov odozvy IT podpory</caption>
                <thead className="border-b border-border font-mono text-[11px] uppercase text-muted-foreground">
                  <tr>
                    <th scope="col" className="px-5 py-4">Priorita</th>
                    <th scope="col" className="px-5 py-4">Typický príklad</th>
                    <th scope="col" className="px-5 py-4">Odozva</th>
                    <th scope="col" className="px-5 py-4">Riešenie</th>
                  </tr>
                </thead>
                <tbody>
                  {slaLevels.map((row) => (
                    <tr key={row.priority} className="border-b border-border last:border-b-0">
                      <th scope="row" className="px-5 py-5 font-bold">{row.priority}</th>
                      <td className="px-5 py-5 text-muted-foreground">{row.example}</td>
                      <td className="px-5 py-5 font-mono text-xs text-primary">{row.response}</td>
                      <td className="px-5 py-5 text-muted-foreground">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase text-muted-foreground">
              Pracovné dni 8:00 – 17:00 / rozšírená dostupnosť po dohode
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-t border-border py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase text-primary">Vzorový workflow</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Od nahlásenia po<br />overené riešenie
            </h2>
          </div>
          <ol className="grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {supportWorkflow.map((s) => (
              <li key={s.step} className="bg-background p-8">
                <span className="mb-6 block font-mono text-sm text-primary">{s.step}</span>
                <h3 className="mb-3 text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 font-mono text-xs uppercase text-primary">Časté otázky</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Na čo sa firmy<br />pýtajú najčastejšie
              </h2>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex min-h-12 items-center gap-3 border border-foreground px-6 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
              >
                Máte inú otázku? <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="divide-y divide-border border-y border-border lg:col-span-8">
              {supportFaq.map((item) => (
                <details key={item.question} className="group px-1 py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-bold marker:hidden">
                    {item.question}
                    <span aria-hidden="true" className="mt-1 font-mono text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Trust pillars */}
      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase text-primary">Prečo Lanzo</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Dôvera, ktorá má<br />opodstatnenie
            </h2>
          </div>
          <div className="grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar, i) => (
              <div key={pillar.title} className="bg-surface p-8">
                <span className="mb-6 block font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 text-lg font-bold">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-20 text-background sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="mb-4 font-mono text-xs uppercase text-primary">Neviete, ktorá služba je pre vás?</p>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Opíšte svoju situáciu. Navrhujeme najvhodnejší rozsah bez záväzkov.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/kontakt"
              className="inline-flex min-h-14 items-center gap-4 bg-primary px-7 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Nezáväzná konzultácia <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 font-mono text-[10px] uppercase text-muted-foreground sm:px-6 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Lanzo</span>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <span>Slovensko / Remote</span>
            <a href="mailto:info@lanzo.sk" className="transition-colors hover:text-primary">info@lanzo.sk</a>
            <Link to="/ochrana-sukromia" className="transition-colors hover:text-primary">Ochrana súkromia</Link>
            <Link to="/cookies" className="transition-colors hover:text-primary">Cookies</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServiceRow({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group bg-background transition-colors hover:bg-surface">
      <div className="grid gap-6 px-1 py-10 sm:px-2 lg:grid-cols-12 lg:gap-10 lg:py-14">
        {/* Left: icon + number + title */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <div className="grid size-12 shrink-0 place-items-center bg-foreground text-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon aria-hidden="true" className="size-6" />
            </div>
            <span className="font-mono text-sm text-primary">{service.number}</span>
          </div>
          <h3 className="mb-2 mt-6 text-2xl font-extrabold leading-tight">{service.title}</h3>
          <p className="text-sm font-medium text-muted-foreground">{service.tagline}</p>
        </div>

        {/* Middle: description + benefits */}
        <div className="lg:col-span-5">
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: marketing quote + CTA */}
        <div className="flex flex-col justify-between lg:col-span-3">
          <blockquote className="border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-foreground/80">
            {service.marketing}
          </blockquote>
          <Link
            to="/kontakt"
            className="mt-6 inline-flex min-h-11 items-center justify-between gap-3 border border-foreground bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Nezáväzná konzultácia <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
