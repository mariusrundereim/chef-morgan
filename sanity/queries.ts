import { client } from "./client";
import { urlForImage } from "./image-url";

export type BlogPost = {
  _id: string;
  _type: string;
  title: string;
  description: string;
  content: any[];
  slug: { current: string };
  tags: string[];
  ctaText: string;
  author: { _ref: string; _type: string };
  _createdAt: string;
  _updatedAt: string;
};

export async function getBlogPosts() {
  const posts = await client.fetch(`
    *[_type == "blog"] | order(_createdAt desc) {
      _id,
      title,
      description,
      slug,
      tags,
      _createdAt,
      author->{
        _id,
        name,
        image
      }
    }
  `);

  return posts.map((post: any) => ({
    ...post,
    authorImage: post.author?.image
      ? urlForImage(post.author.image).url()
      : null,
    formattedDate: new Date(post._createdAt).toLocaleDateString("no-NO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));
}

export async function getBlogPostBySlug(slug: string) {
  const post = await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      description,
      content,
      slug,
      tags,
      ctaText,
      _createdAt,
      author->{
        _id,
        name,
        image
      }
    }
  `,
    { slug }
  );

  if (!post) return null;

  return {
    ...post,
    authorImage: post.author?.image
      ? urlForImage(post.author.image).url()
      : null,
    formattedDate: new Date(post._createdAt).toLocaleDateString("no-NO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

// Get all blog slugs for static path generation
export async function getAllBlogSlugs() {
  const slugs = await client.fetch(`
    *[_type == "blog"].slug.current
  `);

  return slugs.map((slug: string) => ({ slug }));
}
