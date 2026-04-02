import { Tv, Zap, Cpu, Film, Star, Music, Bot, Sandwich, PlayCircle, Clock, FolderOpen, Sunrise, Monitor } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'OMNIBUS':                  Tv,
  'Omnibus':                  Tv,

  'Monthly Wave':             Music,

  'TOKUKINO':                 Bot,
  'Tokukino':                 Bot,

  'arka-TECH':                Cpu,
  'ARKA-TECH':                Cpu,
  'arka-tech':                Cpu,

  'UNE DE MES JAPANIMATIONS': Sunrise,
  'UDMJ':                     Sunrise,

  'TOONFLASH':                Monitor,

  'In Paris':                 Sandwich,
  'Merguez In Paris':         Sandwich,

  'Absolute LUDOKINO':        Star,
  'ABSOLUTE LUDOKINO':        Star,

  'Skidrow Core':             PlayCircle,
  'skidrow core':             PlayCircle,

  'Critique Contemporaine':   Zap,

  'Critique Flashback':       Clock,
  'Flashback':                Clock,

  'Dossiers':                 FolderOpen,
  'Dossier':                  FolderOpen,

  'NEWS':                     Zap,
  'Making-of':                Film,
};