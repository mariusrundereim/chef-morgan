import React from "react";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  description: string;
  slug: string;
  formattedDate: string;
  tags: string[];
  author?: {
    name: string;
    authorImage?: string | null;
  };
};

export default function BlogCard({
  title,
  description,
  slug,
  formattedDate,
  tags,
  author,
}: BlogCardProps) {
  return (
    <div className="bg-white h-full flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2 text-sm text-gray-500">
          {formattedDate}
          {author?.name && ` • ${author.name}`}
        </div>
        <h3 className="text-2xl text-stone-800 font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link href={`/blogg/${slug}`} className="mt-auto">
          <div className="bg-yellow-400 hover:bg-yellow-500 text-stone-800 font-medium px-4 py-2 inline-block">
            Les mer
          </div>
        </Link>
      </div>
    </div>
  );
}
