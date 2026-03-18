export interface Show {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  category: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category:
    | "wallpaper"
    | "avatar"
    | "skin"
    | "cursor"
    | "ringtone"
    | "smiley"
    | "papertoy";
  description: string;
  url: string;
}
