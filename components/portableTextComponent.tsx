import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/image-url";

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) {
        return null;
      }

      const imageUrl = urlForImage(value).url();

      return (
        <div className="relative w-full my-8">
          <div className="relative w-full aspect-video">
            <Image
              src={imageUrl}
              alt={value.alt || ""}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <div className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold my-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold my-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold my-4">{children}</h3>
    ),
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-blue-600 hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
};
