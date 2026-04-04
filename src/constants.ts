import { Show, TeamMember, DownloadItem } from "./types";

export const SHOWS: Show[] = [
  {
    id: "monthly-wave",
    title: "Monthly Wave",
    description:
      "L'émission musicale mensuelle qui explore les pépites sonores et les classiques oubliés, présentée par Suzuka.",
    icon: "Music",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfix9XYhGjoKQdoL0Je81qD3l",
    tone: "music",
  },
  {
    id: "tokukino",
    title: "TOKUKINO",
    description:
      "Au programme : héros en spandex moulant, monstre géants et explosions ! C'est notre format consacré au TOKUSATSU. ",
    icon: "Bot",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfix9cWf78JWzGAdsksUj4MuR",
    tone: "tokusatsu",
  },
  {
    id: "arka-tech",
    title: "arka-TECH",
    description:
      "Re-découvre la high-tech de la fin d'années 90/début 2000 avec VincenTimes. Parce que parfois, il faut connaître le passé pour comprendre pourquoi aujourd'hui… c'est encore plus chelou.",
    icon: "Cpu",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfiz2XSS9Z2N6RNfVpluRk_yT",
    tone: "tech",
  },
  {
    id: "udmj",
    title: "UNE DE MES JAPANIMATIONS",
    description:
      "Kagano met en avant des œuvres d'animation japonaise — les bonnes comme les mauvaises. Parce que le bon et le mauvais, ça mérite tous les deux qu'on en parle.",
    icon: "Sunrise",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfixjwSVuDGfQplh3jBj46Jg1",
    tone: "anime",
  },
  {
    id: "toonflash",
    title: "TOONFLASH",
    description:
      "En collaboration avec 'toonesque.', TOONFLASH est une pastille qui recommande les œuvres animées du moment.",
    icon: "Tv",
    url: "https://www.youtube.com/playlist?list=PLYP9p4UelR2QqwIDScjeXGzxSQAuxtOUC",
    tone: "animation",
  },
   {
    id: "merguez-in-paris",
    title: "merguez in paris",
    description:
      "Deux mecs cools (Wendöh et VincenTimes) cherchent le meilleur sandwich merguez dans Paris. Et ils parlent de tout et de rien.",
    icon: "Sandwich",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfix9dXj9wNYqGCyAQbdHmPJf",
    tone: "merguez",
  },
  {
    id: "absolute-ludokino",
    title: "Absolute LUDOKINO",
    description:
      "Une personnalité raconte SON moment préféré dans l'un de ses jeux vidéo favoris. Intime, précis, inattendu.",
    icon: "Star",
    url: "#",
    tone: "absolute",
  },
   {
    id: "skidrow core",
    title: "Skidrow Core",
    description:
      "Skidrow Core, c'est l'émission qui te rappellera sans doute une autre émission de jeu vidéo sur une chaîne qui n'existe plus. Y a même le même effet d'incrustation en luminance.",
    icon: "PlayCircle",
    url: "#",
    tone: "skidrow",

  },
  {
    id: "critique-contemporaine",
    title: "Critique Contemporaine",
    description:
      "La critique du jeu qui vient de sortir. À chaud, sans filtre.",
    icon: "Zap",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfixBk5H2gNH1Q8QugDhyQ75_",
    tone: "contemporary",
  },
  {
    id: "critique-flashback",
    title: "Critique Flashback",
    description:
      "Retour sur les jeux sortis avant l'ère Xbox 360 / PS3. Le retro comme on l'aime : honnête.",
    icon: "Clock",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfixcLLe3_zcB7Ow1a9p9K4th",
    tone: "flashback",
  },
  {
    id: "dossiers",
    title: "Dossiers",
    description:
      "Des vidéos sur des sujets spécifiques qui n'entrent dans aucune case. Quand le sujet le mérite, on lui consacre le temps qu'il faut.",
    icon: "FolderOpen",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfiwbUkhTXT7oMmNl8y5haJ6q",
    tone: "dossier",
  },

  {
    id: "omnibus",
    title: "OMNIBUS",
    description:
      "Le magazine mensuel de LUDOKINO, avec toutes les émissions et quelques exclusivités !",
    icon: "Film",
    url: "https://www.youtube.com/playlist?list=PL13-SWMvlfiwijmK3dQ_rHY67bJj6rJ3P",
    tone: "omnibus",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Suzuka",
    role: "Monthly Wave",
    bio: "Passionné de pop-culture et de montage vidéo depuis l'époque Game One.",
    bluesky: "https://bsky.app/profile/suzuka.ludokino.net",
  },
  {
    name: "Wendöh",
    role: "todo",
    bio: "todo",
    bluesky: "https://bsky.app/profile/wendoh.ludokino.net",
  },
  {
    name: "VincenTimes",
    role: "arka-TECH, In Paris, TOONFLASH",
    bio: "todo",
    bluesky: "https://bsky.app/profile/vincentimes.fr",
  },
  {    name: "Kagano",
    role: "UNE DE MES JAPANIMATIONS",
    bio: "todo",
    bluesky: "https://bsky.app/profile/kagano.ludokino.net",
  },
  { name: "Reo",
    role: "TOKUKINO",
    bio: "todo",
    bluesky: "https://bsky.app/profile/reo.ludokino.net",
  },
  { name: "Sarah",
    role: "TOONFLASH",
    bio: "todo",
    bluesky: "https://bsky.app/profile/sarah.ludokino.net",
  },
  { name: "Teloru",
    role: "NEWS",
    bio: "todo",
    bluesky: "https://bsky.app/profile/teloru.dev",
  },
];

export const DOWNLOADS: DownloadItem[] = [
  {
    id: "wp-1",
    title: "Wallpaper Ludokino 4K",
    category: "wallpaper",
    description: "Fond d'écran 4K pour votre setup.",
    url: "#",
  },
  {
    id: "winamp-1",
    title: "Skin Winamp Ludokino v1",
    category: "skin",
    description: "Pour écouter les .wav suggérés dans Monthly Wave... avec style.",
    url: "#",
  },
  {
    id: "cursor-1",
    title: "Pack Curseur Ludokino",
    category: "cursor",
    description: "Remplacez votre flèche par une étoile Ludokino.",
    url: "#",
  },
];
