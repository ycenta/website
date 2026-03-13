import { Show, TeamMember, BlogPost, DownloadItem } from './types';

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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'bienvenue-sur-le-site',
    title: 'Bienvenue sur le nouveau portail Ludokino',
    date: '2025-03-10',
    author: 'Teloru',
    category: 'News',
    excerpt: 'On a enfin un site web ! Fini le simple Linktree, place à la vraie expérience Y2K.',
    content: `
# Bienvenue !

C'est un grand jour pour Ludokino. On a voulu créer un espace qui nous ressemble, loin des algorithmes des réseaux sociaux.

Ici vous trouverez :
- Nos dernières émissions
- Un blog pour approfondir nos sujets
- Des goodies à télécharger (skins Winamp, curseurs...)
- Les infos sur l'association

Restez branchés !
    `
  },
  {
    id: 'psp-revival',
    title: 'Pourquoi la PSP est-elle redevenue cool ?',
    date: '2025-03-05',
    author: 'arka-TECH Team',
    category: 'Tech',
    excerpt: 'Retour sur le premier épisode de arka-TECH consacré à la console portable de Sony.',
    content: `
# La PSP : Plus qu'une console, une icône

Dans notre premier épisode de **arka-TECH**, on s'est penché sur le retour en grâce de la PlayStation Portable.

## Pourquoi maintenant ?
1. **L'esthétique Y2K** : Son design glossy et ses courbes sont pile dans la tendance actuelle.
2. **Le Homebrew** : La scène est plus active que jamais.
3. **L'écran** : Pour du rétro, ça reste une référence.

Regardez l'épisode complet sur notre chaîne YouTube !
    `
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
