import React from "react";
import { Y2KWindow } from "../components/Y2KWindow";

export const Legal = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-5xl text-y2k-green">MENTIONS LÉGALES</h1>
        <p className="opacity-70">Informations légales du site Ludokino.</p>
      </div>

      <Y2KWindow title="LEGAL_INFO.TXT">
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>Site édité par: LUDOKINO</p>
          <p>Contact: contact@ludokino.net</p>
          <p>
            Ce contenu est fourni à titre informatif et sera complété avec les
            informations légales définitives. Editeur, hébergeur, propriété
            intellectuelle, RGPD...
          </p>
        </div>
      </Y2KWindow>
    </div>
  );
};
