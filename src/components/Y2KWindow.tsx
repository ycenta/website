import React from 'react';
import { cn } from '../lib/utils';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  onClose?: () => void;
}

export const Y2KWindow = ({ title, children, className, headerClassName, onClose }: WindowProps) => {
  return (
    <div className={cn("y2k-window flex flex-col", className)}>
      <div className={cn("y2k-window-header", headerClassName)}>
        <span className="font-pixel text-lg uppercase tracking-wider truncate">{title}</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-y2k-border border border-white/20"></div>
          <button 
            onClick={onClose}
            className="w-3 h-3 bg-red-500 border border-black hover:bg-red-400 transition-colors cursor-pointer"
          ></button>
        </div>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};
