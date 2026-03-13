import React from 'react';
import { Y2KWindow } from '../components/Y2KWindow';
import { TEAM } from '../constants';
import { FileText, Users, Heart, Scale } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-6xl text-y2k-green">À PROPOS DE LUDOKINO</h1>
        <p className="text-xl opacity-80">
          Plus qu'un média, une association de passionnés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Y2KWindow title="L_ASSOCIATION.DOC">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-y2k-cyan">
              <Scale size={24} />
              <h2 className="text-2xl">Loi 1901</h2>
            </div>
            <p className="leading-relaxed">
              Ludokino est une association loi 1901 à futur but lucratif. Notre objectif est de 
              professionnaliser notre passion tout en gardant l'esprit libre et créatif des 
              médias qui nous ont inspirés.
            </p>
            <p className="leading-relaxed">
              Nous croyons en un média indépendant, financé par sa communauté et ses partenaires, 
              sans compromis sur la qualité éditoriale.
            </p>
          </div>
        </Y2KWindow>

        <Y2KWindow title="PRESS_KIT.ZIP">
          <div className="space-y-6 text-center py-4">
            <FileText size={64} className="mx-auto text-y2k-magenta" />
            <div className="space-y-2">
              <h3 className="text-xl">Besoin de visuels ?</h3>
              <p className="text-sm opacity-60">Logos, photos de l'équipe et fiches techniques.</p>
            </div>
            <button className="y2k-button w-full">Download Press Kit</button>
          </div>
        </Y2KWindow>
      </div>

      <Y2KWindow title="THE_TEAM.EXE">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
          {TEAM.map(member => (
            <div key={member.name} className="flex gap-4 border border-y2k-border p-4 bg-black/20">
              <div className="w-20 h-20 bg-y2k-border border-2 border-y2k-border shrink-0">
                {/* Placeholder for avatar */}
                <div className="w-full h-full flex items-center justify-center text-y2k-green opacity-20">
                  <Users size={40} />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl text-y2k-green">{member.name}</h3>
                <p className="text-xs text-y2k-cyan font-mono uppercase">{member.role}</p>
                <p className="text-sm opacity-80 mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Y2KWindow>

      <div className="text-center space-y-6 py-12">
        <Heart size={48} className="mx-auto text-red-500 animate-pulse" />
        <h2 className="text-3xl">REJOIGNEZ L'AVENTURE</h2>
        <p className="max-w-xl mx-auto opacity-70">
          Ludokino est un projet ouvert. Si vous avez des talents en montage, rédaction, 
          graphisme ou que vous voulez simplement nous soutenir, contactez-nous !
        </p>
        <div className="flex justify-center gap-4">
          <button className="y2k-button">Nous contacter</button>
          <button className="y2k-button border-y2k-magenta text-y2k-magenta">Faire un don</button>
        </div>
      </div>
    </div>
  );
};
