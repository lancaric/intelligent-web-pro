import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "lanzo_cookie_consent";
const CONSENT_TTL_DAYS = 365;

type ConsentState = "accepted-all" | "accepted-necessary" | null;

function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { state: ConsentState; at: number };
    const ageDays = (Date.now() - parsed.at) / (1000 * 60 * 60 * 24);
    if (ageDays > CONSENT_TTL_DAYS) return null;
    return parsed.state;
  } catch {
    return null;
  }
}

function storeConsent(state: Exclude<ConsentState, null>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, at: Date.now() }));
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === null) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    storeConsent("accepted-all");
    setVisible(false);
  }

  function acceptNecessary() {
    storeConsent("accepted-necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-3xl border border-border bg-surface p-5 shadow-2xl ring-1 ring-border sm:p-6">
        <div className="flex items-start gap-4">
          <div className="hidden size-10 shrink-0 place-items-center rounded-full bg-primary/10 sm:grid">
            <Cookie aria-hidden="true" className="size-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="mb-2 text-base font-bold">Tento web používa cookies</h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Používame nevyhnutné cookies pre fungovanie stránky, a s vaším súhlasom aj analytické a marketingové cookies na zlepšovanie obsahu. Súhlas môžete kedykoľvek odvolať.{" "}
              <Link to="/cookies" className="font-semibold text-foreground underline underline-offset-2 hover:text-primary">Viac informácií</Link>.
            </p>

            {expanded && (
              <div className="mb-4 space-y-3 border-l-2 border-primary/30 pl-4">
                <div>
                  <p className="text-sm font-semibold">Nevyhnutné cookies</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">Vždy aktívne — pre fungovanie stránky.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Analytické cookies</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">Anonymizovaná štatistika návštevnosti.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Marketingové cookies</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">Personalizácia obsahu a ponúk.</p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                onClick={acceptAll}
                className="inline-flex min-h-11 items-center justify-center bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Prijať všetky
              </button>
              <button
                onClick={acceptNecessary}
                className="inline-flex min-h-11 items-center justify-center border border-foreground bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Iba nevyhnutné
              </button>
              <button
                onClick={() => setExpanded((e) => !e)}
                className="inline-flex min-h-11 items-center justify-center px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {expanded ? "Menej" : "Podrobnosti"}
              </button>
            </div>
          </div>
          <button
            onClick={acceptNecessary}
            aria-label="Zavrieť a prijať iba nevyhnutné"
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
