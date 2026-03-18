import React from "react";
import { Y2KWindow } from "./Y2KWindow";

interface UnderConstructionPageProps {
  title: string;
  subtitle: string;
  windowTitle: string;
}

export const UnderConstructionPage = ({
  title,
  subtitle,
  windowTitle,
}: UnderConstructionPageProps) => {
  return (
    <div className="mx-auto max-w-2xl">
      <Y2KWindow title={windowTitle}>
        <div className="space-y-3 px-6 py-8 text-center">
          <h1 className="text-3xl text-y2k-magenta">{title}</h1>
          <p className="opacity-70">{subtitle}</p>
          <p className="text-lg text-y2k-cyan">
            Encore en cours de construction, repasse plus tard!
          </p>
        </div>
      </Y2KWindow>
    </div>
  );
};
