import { Show, TeamMember, DownloadItem } from './types';

export const SHOWS: Show[] = [,
  {
    id: 'omnibus',
    title: 'OMNIBUS',
    description: 'Le magazine mensuel de LUDOKINO, avec toutes les émissions et quelques exclusivités !',
    icon: 'Film'
  },
  {
    id: 'monthly-wave',
    title: 'Monthly Wave',
    description: 'L\'émission musicale mensuelle qui explore les pépites sonores et les classiques oubliés.',
    icon: 'Music'
  },
  {
    id: 'tokukino',
    title: 'Tokukino',
    description: 'TOKUKINO c\'est notre format MENSUEL consacré au TOKUSATSU. Au programme : héros en spandex moulant, monstre géants et explosions !',
    icon: 'Ghost'
  },
  {
    id: 'in-paris',
    title: 'In Paris',
    description: 'Deux mecs cools cherchent le meilleur sandwich merguez dans Paris. Et ils parlent.',
    icon: 'Sandwich'
  },
  {
    id: 'arka-tech',
    title: 'arka-TECH',
    description: 'Re-découvre la high-tech de la fin d\'années 90/début 2000. Parce que parfois, il faut connaître le passé pour comprendre pourquoi aujourd\'hui… c\'est encore plus chelou.',
    icon: 'Cpu'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Suzuka',
    role: 'todo',
    bio: 'Passionné de pop-culture et de montage vidéo depuis l\'époque Game One.'
  },
  {
    name: 'Wendöh',
    role: 'todo',
    bio: 'todo'
  }
];

export const DOWNLOADS: DownloadItem[] = [
  {
    id: 'wp-1',
    title: 'Wallpaper Ludokino Neon',
    category: 'wallpaper',
    description: 'Fond d\'écran 4K pour votre setup.',
    url: '#'
  },
  {
    id: 'winamp-1',
    title: 'Skin Winamp Ludokino v1',
    category: 'skin',
    description: 'Pour écouter Monthly Wave avec style.',
    url: '#'
  },
  {
    id: 'cursor-1',
    title: 'Pack Curseur Ludokino',
    category: 'cursor',
    description: 'Remplacez votre flèche par une étoile Ludokino.',
    url: '#'
  }
];
