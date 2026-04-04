import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';

interface WindowProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  onClose?: () => void;
}

export const Y2KWindow = ({
  title,
  children,
  className,
  headerClassName,
  onClose,
}: WindowProps) => {
  return (
    <div className={cn("y2k-window flex flex-col", className)}>
      <div className={cn("y2k-window-header flex items-center", headerClassName)}>
        <span className="y2k-window-header-title truncate">
          {title}
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
          title="Fermer"
          className="window-close-button"
        >
          <X size={15} strokeWidth={2.5} className="relative z-10" aria-hidden="true" />
        </button>
      </div>

      <div className="p-4 flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};