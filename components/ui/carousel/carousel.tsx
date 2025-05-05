"use client";
import { useState, useEffect, useCallback } from "react";
import { CarouselProps } from "@/app/types/carousel";
import OfferingsCard from "@/components/ui/cards/offeringCard/offeringCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ cards, className = "" }: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Determine cards per page based on screen width
  const updateCardsPerPage = useCallback(() => {
    setCardsPerPage(window.innerWidth < 768 ? 1 : 3);
  }, []);

  // Initialize and update on resize
  useEffect(() => {
    if (typeof window !== "undefined") {
      updateCardsPerPage();
      window.addEventListener("resize", updateCardsPerPage);
      return () => window.removeEventListener("resize", updateCardsPerPage);
    }
  }, [updateCardsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // Navigation functions
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Get current page cards with wrapping
  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, cards.length);

    // Handle wrapping if needed
    if (endIndex - startIndex < cardsPerPage && cards.length > cardsPerPage) {
      const remainingSlots = cardsPerPage - (endIndex - startIndex);
      return [
        ...cards.slice(startIndex, endIndex),
        ...cards.slice(0, remainingSlots),
      ];
    }

    return cards.slice(startIndex, endIndex);
  };

  const currentPageCards = getCurrentPageCards();

  return (
    <div className={`relative ${className}`}>
      {/* Navigation Buttons - Centered design */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={prevPage}
          className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-yellow-500"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextPage}
          className=" w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-yellow-500"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentPageCards.map((card, index) => (
          <div key={`${card.id || index}`} className="h-full">
            <OfferingsCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
