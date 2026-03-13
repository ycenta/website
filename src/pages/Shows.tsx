import React from 'react';
import { Y2KWindow } from '../components/Y2KWindow';
import { SHOWS } from '../constants';
import { Music, Ghost, Cpu, Film, Sandwich, PlayCircle } from 'lucide-react';

const IconMap: Record<string, any> = {
  Music,
  Ghost,
  Cpu,
  Film,
  Sandwich
};

export const Shows = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-5xl text-y2k-green">NOS ÉMISSIONS</h1>
        <p className="text-xl opacity-80">
          De la musique à la tech, en passant par les bails otaku, découvrez l'univers Ludokino.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SHOWS.map(show => {
          const Icon = IconMap[show.icon] || PlayCircle;
          return (
            <Y2KWindow key={show.id} title={`${show.id.toUpperCase()}.EXE`}>
              <div className="flex gap-6">
                <div className="w-24 h-24 bg-y2k-border flex items-center justify-center shrink-0 border-2 border-y2k-border">
                  <Icon size={48} className="text-y2k-cyan" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl text-y2k-green">{show.title}</h2>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {show.description}
                  </p>
                  <button className="y2k-button">Voir les épisodes</button>
                </div>
              </div>
            </Y2KWindow>
          );
        })}
      </div>

      <Y2KWindow title="OMNIBUS_EXPLAINED.TXT" className="max-w-3xl mx-auto">
        <div className="space-y-4 text-center p-8">
          <h2 className="text-4xl text-y2k-magenta">C'EST QUOI UN OMNIBUS ?</h2>
          <p className="text-xl leading-relaxed">
            C'est le format ultime de Ludokino. Chaque mois, nous mélangeons toutes nos émissions, 
            nos sketchs et nos intermittences funs pour créer un montage final massif pouvant durer 
            jusqu'à <span className="text-y2k-green font-bold">2 HEURES</span>.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <div className="px-4 py-2 bg-y2k-border border border-white/20 text-xs font-mono">24 FPS</div>
            <div className="px-4 py-2 bg-y2k-border border border-white/20 text-xs font-mono">1080P</div>
            <div className="px-4 py-2 bg-y2k-border border border-white/20 text-xs font-mono">STEREO</div>
          </div>
        </div>
      </Y2KWindow>
    </div>
  );
};
