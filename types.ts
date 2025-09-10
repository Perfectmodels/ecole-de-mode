export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  admission: string;
  imageUrl: string;
  chapters?: Chapter[];
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  title: string;
  category: 'défilé' | 'atelier' | 'création';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Alumni {
  id: string;
  name: string;
  description: string;
  images: {
    id: string;
    imageUrl: string;
    alt: string;
  }[];
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
}

export interface SiteSettings {
  contact: {
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
  };
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

// FIX: Added missing TrainingModule interface.
export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  chapters?: Chapter[];
}
