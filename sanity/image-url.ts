import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import { SanityImage } from "@/app/types/about";

// Initialize the imageUrlBuilder with your Sanity configuration
const builder = imageUrlBuilder({
  projectId: client.config().projectId || "",
  dataset: client.config().dataset || "",
});

// Type-safe image URL builder function
export const urlForImage = (source: SanityImage | null | undefined) => {
  // Return a fallback if the source is missing or invalid
  if (!source || !source.asset) {
    return {
      url: () => "/images/placeholder-chef.jpg",
    };
  }

  // Return the Sanity image URL builder instance
  return {
    url: () => builder.image(source).auto("format").fit("max").url(),
  };
};
