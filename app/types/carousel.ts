export interface CardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  // Fields for Sanity integration
  _createdAt?: string;
  _updatedAt?: string;
}

export interface CarouselProps {
  cards: CardProps[];
  className?: string;
}

export interface OfferingsProps {
  title: string;
  cards: CardProps[];
}
