import { ReactNode } from "react";

// Card properties
export interface CardProps {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  _createdAt?: string;
  [key: string]: any;
}

// Carousel properties
export interface CarouselProps {
  cards: CardProps[];
  className?: string;
  cardComponent?: (cardProps: CardProps) => ReactNode;
}

// Offerings section properties
export interface OfferingsProps {
  title: string;
  cards: CardProps[];
}
