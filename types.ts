export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  admission: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  title: string;
  category: 'défilé' | 'atelier' | 'création';
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  imageUrl: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Alumni {
  id: number;
  name: string;
  description: string;
  images: {
    id: number;
    imageUrl: string;
    alt: string;
  }[];
}