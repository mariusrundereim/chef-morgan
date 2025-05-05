export interface ChefProfile {
  name: string;
  title: string;
  bio: string;
  longBio: string;
  image: string;
  expertise: string[];
  socialMedia: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    twitter?: string;
  };
}

export interface Collaboration {
  id: string;
  name: string;
  image: string;
  age: number;
  description: string;
}

export interface AboutPageData {
  chef: ChefProfile;
  collaborations: Collaboration[];
  stats: {
    followers: number;
    recipes: number;
    workshops: number;
  };
}
