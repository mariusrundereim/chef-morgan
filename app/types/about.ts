export interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface ChefProfile {
  name: string;
  title: string;
  bio: string;
  longBio: string;
  image: SanityImage;
  expertise: string[];
  socialMedia: {
    instagram?: string | null;
    youtube?: string | null;
    tiktok?: string | null;
    twitter?: string | null;
    [key: string]: string | null | undefined;
  };
}

export interface Collaboration {
  _key: string;
  name: string;
  image: SanityImage;
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
