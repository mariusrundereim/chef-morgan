import React from "react";
import Carousel from "@/components/ui/carousel/carousel";
import BlogCard from "@/components/ui/cards/blogCard/blogCard";
import { getBlogPosts } from "@/sanity/queries";

interface BlogSectionProps {
  title?: string;
  maxPosts?: number;
}

export default async function BlogSection({
  title = "Latest From Our Blog",
  maxPosts = 6,
}: BlogSectionProps) {
  // Fetch blog posts
  const posts = await getBlogPosts();

  // Limit to maxPosts
  const limitedPosts = posts.slice(0, maxPosts);

  // Transform blog posts to match the card format expected by Carousel
  const blogCards = limitedPosts.map((post: any) => ({
    id: post._id,
    title: post.title,
    description: post.description,
    imageUrl: post.mainImage || "/images/placeholder-blog.jpg", // Ensure there's a fallback image
    ctaText: "Read More",
    ctaLink: `/blog/${post.slug.current}`,
    _createdAt: post._createdAt, // Keep this for sorting by date
    // Additional blog-specific props that will be passed to the card component
    formattedDate: post.formattedDate,
    tags: post.tags,
    author: post.author
      ? {
          name: post.author.name,
          authorImage: post.authorImage,
        }
      : undefined,
  }));

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">{title}</h2>
        <Carousel
          cards={blogCards}
          className="blog-carousel"
          cardComponent={(cardProps) => <BlogCard {...cardProps} />}
        />
      </div>
    </section>
  );
}
