import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/app/types/carousel";

export default function OfferingCard({
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink,
}: CardProps) {
  return (
    <div className="bg-white h-full flex flex-col">
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl text-stone-800 font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        <Link href={ctaLink} className="mt-auto">
          <div className="bg-yellow-400 hover:bg-yellow-500 text-stone-800 font-medium px-4 py-2 inline-block">
            {ctaText}
          </div>
        </Link>
      </div>
    </div>
  );
}
