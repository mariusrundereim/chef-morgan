import { getBlogPosts } from "@/sanity/queries";
import BlogCard from "@/components/ui/cards/blogCard/blogCard";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/layout/header";

export const metadata = {
  title: "Matbloggen",
  description: "Les våre siste blogginlegg om mat og oppskrifter",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <ThemeProvider navTheme="light">
        <Header />
        <main className="container mx-auto py-12 px-4 pt-24">
          <div className="max-w-7xl mx-auto ">
            <h1 className="text-4xl font-bold text-stone-800 mb-8">
              Matbloggen
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <BlogCard
                  key={post._id}
                  title={post.title}
                  description={post.description}
                  slug={post.slug.current}
                  formattedDate={post.formattedDate}
                  tags={post.tags}
                  author={
                    post.author
                      ? {
                          name: post.author.name,
                          authorImage: post.authorImage,
                        }
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
