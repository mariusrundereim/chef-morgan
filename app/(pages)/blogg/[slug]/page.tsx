import { PortableText } from "@portabletext/react";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/sanity/queries";
import { portableTextComponents } from "@/components/portableTextComponent";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/ThemeProvider";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: post.title,
    description: post.description || "",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">
          Innlegget ble ikke funnet
        </h1>
      </div>
    );
  }

  return (
    <>
      <ThemeProvider navTheme="light">
        <Header />
        <main className="container mx-auto py-12 px-4 pt-24">
          <article className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-stone-800 mb-4">
                {post.title}
              </h1>
              <div className="text-gray-500">
                {post.formattedDate}
                {post.author?.name && ` • ${post.author.name}`}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <PortableText
                value={post.content}
                components={portableTextComponents}
              />
            </div>

            {post.ctaText && (
              <div className="mt-12 p-6 bg-yellow-100 rounded-lg">
                <p className="text-lg font-medium">{post.ctaText}</p>
              </div>
            )}
          </article>
        </main>
      </ThemeProvider>
    </>
  );
}
