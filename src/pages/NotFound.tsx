import { Link } from "react-router-dom";
import { Y2KWindow } from "../components/Y2KWindow";
import { Home, AlertTriangle } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-lg space-y-4">

        {/* Fenêtre erreur style Win XP / SA2 */}
        <Y2KWindow
          title={
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <AlertTriangle size={14} />
              ERREUR — PAGE_NOT_FOUND
            </span>
          }
        >
          <div className="p-6 space-y-6 text-center">

            {/* Code erreur */}
            <div className="font-pixel text-8xl text-y2k-magenta dark:text-y2k-yellow leading-none select-none">
              404
            </div>

            {/* Message */}
            <div className="space-y-2">
              <p className="font-mono text-sm uppercase tracking-widest opacity-60">
                Erreur fatale détectée
              </p>
              <p className="font-sans text-base opacity-80">
                Cette page n'existe pas ou a été déplacée.<br />
                Peut-être qu'un Chao l'a mangée, qui sait ?
              </p>
            </div>

            {/* Fausse stack trace style BIOS */}
            <div className="text-left bg-black/10 dark:bg-black/30 rounded p-3 font-mono text-xs opacity-50 space-y-1 select-none">
              <p>{">"} LOADING page... <span className="text-red-400">FAILED</span></p>
              <p>{">"} RETRY x3... <span className="text-red-400">FAILED</span></p>
              <p>{">"} ROUTE /unknown not found in registry</p>
              <p>{">"} Suggest: return to <span className="text-y2k-yellow">/</span></p>
            </div>

            {/* CTA */}
            <Link to="/" className="y2k-button inline-flex items-center gap-2">
              <Home size={16} />
              Retour à l'accueil
            </Link>

          </div>
        </Y2KWindow>

      </div>
    </div>
  );
}
