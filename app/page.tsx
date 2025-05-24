import { getBlogPosts } from "@/sanity/queries";
import Cta from "@/components/sections/cta";
import Hero from "@/components/sections/hero/hero";
import BlogCarousel from "@/components/sections/blog/BlogCarousel";
import Header from "@/components/layout/header";

export const metadata = {
  title: "Chef Morgan - Kulinariske Opplevelser",
  description:
    "Opplev eksepsjonell matlaging med Chef Morgan. Fra meal prep til gourmet-teknikker - la oss skape uforglemmelige kulinariske øyeblikk sammen.",
  keywords:
    "chef, matlaging, oppskrifter, kulinarisk, Norge, gourmet, meal prep",
};

export default async function Home() {
  const blogPosts = await getBlogPosts();

  const latestPosts = blogPosts.slice(0, 6);

  return (
    <main>
      <Header />

      {/* Latest Blog Posts Carousel */}
      <BlogCarousel posts={latestPosts} title="Siste Fra Kjøkkenet" />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 font-playfair mb-4">
              Hva Gjør Oss Spesielle
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Med års erfaring og lidenskap for mat, tilbyr Chef Morgan unike
              kulinariske opplevelser som kombinerer tradisjonelle teknikker med
              moderne innovasjon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-stone-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">
                Kreativ Matlaging
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Utforsk nye smaker og teknikker som vil inspirere ditt kjøkken.
                Fra enkle hverdagsretter til avanserte gourmet-kreasjoner.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-stone-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">
                Effektiv Meal Prep
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lær hvordan du kan spare tid og penger ved å planlegge og
                tilberede måltider på forhånd uten å gå på kompromiss med smak.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-stone-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">
                Sunn Livsstil
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oppdag hvordan god mat kan være både deilig og næringsrik. Få
                tips om balanserte måltider som støtter din helse og velvære.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 font-playfair mb-4">
              Hva Kundene Sier
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Chef Morgan har virkelig forvandlet min tilnærming til
                matlaging. Oppskriftene er enkle å følge og resultatene er
                alltid imponerende!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-stone-800 font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-stone-800">Anna Larsen</p>
                  <p className="text-gray-500 text-sm">Matentusiast</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Meal prep-kursene har revolusjonert hverdagen min. Jeg sparer
                både tid og penger, og maten smaker fantastisk!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-stone-800 font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-stone-800">Martin Olsen</p>
                  <p className="text-gray-500 text-sm">Travle foreldre</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "De personlige kokekursene var en fantastisk opplevelse. Jeg
                lærte teknikker jeg aldri trodde jeg kunne mestre!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-stone-800 font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-stone-800">Sofia Hansen</p>
                  <p className="text-gray-500 text-sm">Hobby-kokk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <Cta />
    </main>
  );
}
