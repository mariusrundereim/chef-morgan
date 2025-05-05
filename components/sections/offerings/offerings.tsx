import React, { useMemo } from "react";
import Carousel from "@/components/ui/carousel/carousel";
import { OfferingsProps, CardProps } from "@/app/types/carousel";

interface EnhancedOfferingsProps extends OfferingsProps {
  showLatest?: boolean;
  maxCards?: number;
}

// Helper function to sort cards by date (for latest content)
const sortCardsByDate = (cards: CardProps[]): CardProps[] => {
  return [...cards].sort((a, b) => {
    const dateA = a._createdAt ? new Date(a._createdAt).getTime() : 0;
    const dateB = b._createdAt ? new Date(b._createdAt).getTime() : 0;
    return dateB - dateA; // Newest first
  });
};

export default function Offerings({
  title,
  cards,
  showLatest = true,
  maxCards = 12,
}: EnhancedOfferingsProps) {
  // Process
  const processedCards = useMemo(() => {
    let result = [...cards];

    // Sort by date if showing latest
    if (showLatest) {
      result = sortCardsByDate(result);
    }

    // Limit to maximum number of cards
    if (maxCards > 0 && result.length > maxCards) {
      result = result.slice(0, maxCards);
    }

    return result;
  }, [cards, showLatest, maxCards]);
  return (
    <section>
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">{title}</h2>
          <Carousel cards={processedCards} />
        </div>
      </section>
    </section>
  );
}
