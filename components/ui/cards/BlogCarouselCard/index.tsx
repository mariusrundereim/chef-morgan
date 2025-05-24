import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCarouselCardProps {
  title: string;
  description: string;
  slug: string;
  formattedDate: string;
  tags?: string[];
  author?: {
    name: string;
    authorImage?: string | null;
  };
  imageUrl?: string;
}

export default function BlogCarouselCard({
  title,
  description,
  slug,
  formattedDate,
  tags,
  author,
  imageUrl,
}: BlogCarouselCardProps) {
  return (
    <div className="bg-white h-full flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* Featured Image */}
      <div className="relative w-full aspect-video bg-stone-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-stone-700">
            {formattedDate}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="text-gray-500 text-xs px-2 py-1">
                +{tags.length - 2}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-stone-800 mb-3 line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>

        {/* Author */}
        {author?.name && (
          <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
              {author.authorImage ? (
                <Image
                  src={author.authorImage}
                  alt={author.name}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              ) : (
                <span className="text-stone-800 text-sm font-bold">
                  {author.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-stone-700">
                {author.name}
              </p>
              <p className="text-xs text-gray-500">Forfatter</p>
            </div>
          </div>
        )}

        {/* Read More Button */}
        <Link href={`/blogg/${slug}`} className="mt-auto">
          <div className="group bg-stone-800 hover:bg-yellow-400 text-white hover:text-stone-800 font-medium px-4 py-3 rounded-lg transition-all duration-300 text-center flex items-center justify-center">
            <span className="mr-2">Les mer</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </Link>
      </div>
    </div>
  );
}

// Add custom styles for line-clamp
const styles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Inject styles if not using Tailwind CSS line-clamp plugin
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
