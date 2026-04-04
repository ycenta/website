import React from "react";
import { Y2KWindow } from "../components/Y2KWindow";
import { SHOWS } from "../constants";
import { CATEGORY_ICONS } from '../lib/categoryIcons';
import { PlayCircle, ArrowRight } from 'lucide-react';
export const Shows = () => {
  return (
    <div className="space-y-8">
      <div className="page-header">
        <h1 className="text-5xl text-y2k-green">NOS ÉMISSIONS</h1>
        <p className="text-xl opacity-80">
          De la musique à la tech, en passant par les tokusatsu, l'animation, ou bien, le jeu vidéo, découvrez
          l'univers LUDOKINO.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SHOWS.map((show) => {
          const Icon = CATEGORY_ICONS[show.title] || PlayCircle;
          return (
            <Y2KWindow key={show.id} title={show.title} className={show.tone ? `y2k-window-tone-${show.tone}` : undefined}>
              <div className="show-card flex gap-5">
                <div className="show-media-slot" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <div className={`show-card-content flex min-h-full flex-col show-tone-${show.id}`}>
                  <h2 className="show-title">{show.title}</h2>
                  <p className="show-description">{show.shortDescription ?? show.description}</p>
                  <a
                    href={show.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="y2k-button mt-4 self-start"
                  >
                    Voir les épisodes <ArrowRight size={16} className="inline-block ml-1" />
                  </a>
                </div>
              </div>
            </Y2KWindow>

          );
        })}
      </div>

      <Y2KWindow
        title="OMNIBUS : LA DÉFINITION"
        className="max-w-3xl mx-auto"
      >
        <div className="omnibus-entry p-8">
          <header className="omnibus-term-block">
            <span className="omnibus-term">omnibus</span>
            <span className="omnibus-phonetic">/ɔm.ni.bus/</span>
            <span className="omnibus-label">nom masculin</span>
          </header>

          <p className="omnibus-definition">
            <span className="omnibus-index">1.</span> Format vidéo mensuel de
            LUDOKINO réunissant émissions, sketchs, rubriques et autres
            intermittences douteuses dans un montage long, dense et généreusement
            chaotique, pouvant atteindre
            <span className="omnibus-duration"> 2&nbsp;HEURES*</span>.
          </p>

          <p className="omnibus-editorial-note">
            <span className="omnibus-note-label">Note de la rédaction :</span> contrairement
            à une légende tenace entretenue par nous-mêmes, nous n’avons évidemment
            rien inventé. L’idée a été élégamment subtilisée à Jean-Pat
            <span className="omnibus-aside"> (Patrick Sarréa, sur Game One)</span>,
            qui l’avait lui-même très probablement récupérée quelque part du côté de
            la BBC. <br /><span className="omnibus-punchline">
              Bref : une grande tradition de l’emprunt, habituel dans le milieu audiovisuel.
            </span>
          </p>

          <p className="omnibus-footnote">
            *La durée varie selon l’humeur, la fatigue, la quantité de trucs à monter
            et notre rapport très relatif à la notion de concision.
          </p>

          <div className="omnibus-specs flex justify-center gap-4 pt-4">
            <div className="omnibus-spec-pill">50 FPS</div>
            <div className="omnibus-spec-pill">1080P</div>
            <div className="omnibus-spec-pill">STÉRÉO</div>
          </div>
        </div>
      </Y2KWindow>
    </div>
  );
};