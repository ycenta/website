import React from "react";
import { Y2KWindow } from "../components/Y2KWindow";

export const Legal = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-5xl text-y2k-green">MENTIONS LÉGALES</h1>
        <p className="opacity-70">Informations légales du site Ludokino.</p>
      </div>
<Y2KWindow title="EDITEUR.TXT">
        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <p>Site édité par : LUDOKINO, collectif en cours de constitution en association loi 1901.</p>
          <p>Contact : <a href="mailto:contact@ludokino.net" className="underline">contact@ludokino.net</a></p>
          <p>Directeur de la publication : Vincent Quêne</p>
        </div>
      </Y2KWindow>
 
      <Y2KWindow title="HEBERGEMENT.TXT">
        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <p>
            Ce site est hébergé via <strong>GitHub Pages</strong>, un service de GitHub, Inc.<br />
            88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.<br />
            <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="underline">https://pages.github.com</a>
          </p>
          <p>
            Nom de domaine enregistré auprès de <strong>OVH SAS</strong>,<br />
            2 rue Kellermann, 59100 Roubaix, France.<br />
            <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="underline">https://www.ovh.com</a>
          </p>
        </div>
      </Y2KWindow>
 
      <Y2KWindow title="PROPRIETE_INTELLECTUELLE.TXT">
        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <p>
            L'ensemble des contenus publiés sur ce site (textes, visuels, identité graphique, formats vidéo)
            sont la propriété de LUDOKINO ou de leurs auteurs respectifs.
            Toute reproduction ou diffusion sans autorisation préalable est interdite.
          </p>
          <p>
            Les contenus vidéo sont hébergés sur des plateformes tierces (YouTube, Twitch, TikTok, etc.)
            et soumis aux conditions d'utilisation de ces plateformes.
          </p>
        </div>
      </Y2KWindow>
 
      <Y2KWindow title="DONNEES_PERSONNELLES.TXT">
        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <p>
            Ce site ne collecte aucune donnée personnelle.
            Aucun formulaire, cookie de suivi ou outil d'analytics n'est utilisé par LUDOKINO.
          </p>
          <p>
            GitHub Pages, en tant qu'hébergeur, peut collecter des données techniques de navigation
            (adresse IP, navigateur, pages consultées) à des fins de sécurité et de maintenance.
            Ces données sont traitées par GitHub, Inc. selon leur{" "}
            <a
              href="https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              politique de confidentialité
            </a>
            . LUDOKINO n'a pas accès à ces données et n'en est pas le responsable de traitement.
          </p>
        </div>
      </Y2KWindow>
 
      <Y2KWindow title="LIENS_EXTERNES.TXT">
        <div className="space-y-2 text-sm md:text-base leading-relaxed">
          <p>
            Ce site contient des liens vers des plateformes tierces (YouTube, Twitch, Instagram, TikTok, Bluesky, etc.).
            LUDOKINO ne peut être tenu responsable du contenu ou des pratiques de ces sites.
          </p>
          <p>
            Les vidéos intégrées directement sur ce site utilisent le mode de confidentialité renforcée de YouTube
            (<code>youtube-nocookie.com</code>). Aucun cookie n'est déposé par YouTube avant que l'utilisateur
            ne lance la lecture.
          </p>
        </div>
      </Y2KWindow>
 
      <p className="text-center text-xs opacity-50">Dernière mise à jour : mars 2026</p>
    </div>
  );
};
