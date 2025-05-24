"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCarouselCard from "@/components/ui/cards/BlogCarouselCard";

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
  tags?: string[];
  _createdAt: string;
  author?: {
    name: string;
    authorImage?: string | null;
  };
  formattedDate: string;
}

interface BlogCarouselProps {
  posts: BlogPost[];
  title?: string;
  className?: string;
}

export default function BlogCarousel({
  posts,
  title = "Siste Fra Bloggen",
  className = "",
}: BlogCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Add null check and default value
  const safePosts = posts || [];

  // Determine cards per page based on screen width
  const updateCardsPerPage = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    }
  }, []);

  // Initialize and update on resize
  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, [updateCardsPerPage]);

  // Calculate total pages - use safePosts
  const totalPages = Math.ceil(safePosts.length / cardsPerPage);

  // Navigation functions
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Get current page posts - use safePosts
  const getCurrentPagePosts = () => {
    const startIndex = currentPage * cardsPerPage;
    return safePosts.slice(startIndex, startIndex + cardsPerPage);
  };

  const currentPagePosts = getCurrentPagePosts();

  // Don't render if no posts - use safePosts
  if (!safePosts || safePosts.length === 0) {
    return (
      <section className={`py-16 bg-stone-50 ${className}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-stone-800 font-playfair">
            {title}
          </h2>
          <div className="text-center text-gray-600">
            <p>Ingen blogginnlegg funnet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-stone-50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 font-playfair mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oppdag de nyeste oppskriftene, tipsene og kulinariske innsiktene fra
            Chef Morgan
          </p>
        </div>

        {/* Navigation Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={prevPage}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 hover:bg-yellow-400 hover:border-yellow-400 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md group"
              aria-label="Previous posts"
            >
              <ChevronLeft className="h-5 w-5 text-stone-600 group-hover:text-stone-800" />
            </button>

            {/* Page Indicators */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-yellow-400 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 hover:bg-yellow-400 hover:border-yellow-400 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md group"
              aria-label="Next posts"
            >
              <ChevronRight className="h-5 w-5 text-stone-600 group-hover:text-stone-800" />
            </button>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPagePosts.map((post) => (
            <div key={post._id} className="h-full">
              <BlogCarouselCard
                title={post.title}
                description={post.description}
                slug={post.slug.current}
                formattedDate={post.formattedDate}
                tags={post.tags}
                author={post.author}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/blogg"
            className="inline-flex items-center bg-stone-800 hover:bg-yellow-400 text-white hover:text-stone-800 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg group"
          >
            <span className="mr-2">Se Alle Innlegg</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
