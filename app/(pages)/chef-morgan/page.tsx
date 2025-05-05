import Image from "next/image";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { AboutPageData, SanityImage } from "@/app/types/about";
import { urlForImage } from "@/sanity/image-url";

// Define the query to fetch about page data from Sanity
const ABOUT_QUERY = defineQuery(`*[_type == "about"][0]{
  chef {
    name,
    title,
    bio,
    longBio,
    image,
    expertise,
    socialMedia {
      instagram,
      youtube,
      tiktok,
      twitter
    }
  },
  collaborations[] {
    _key,
    name,
    image,
    age,
    description
  },
  stats {
    followers,
    recipes,
    workshops
  }
}`);

export default async function ChefMorganPage() {
  // Fetch data from Sanity
  const { data: aboutData } = await sanityFetch<AboutPageData>({
    query: ABOUT_QUERY,
  });

  // Destructure the data
  const { chef, collaborations, stats } = aboutData;

  return (
    <main className="min-h-screen bg-white font-[Inter]">
      {/* Hero Section */}
      <section className="bg-stone-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 font-[Playfair] mb-4">
                {chef.name}
              </h1>
              <div className="w-20 h-1 bg-yellow-300 mb-6"></div>
              <h2 className="text-xl md:text-2xl text-stone-600 mb-4">
                {chef.title}
              </h2>
              <p className="text-lg text-stone-800 mb-8">{chef.bio}</p>
              <div className="flex gap-4">
                {Object.entries(chef.socialMedia)
                  .filter(([_, handle]) => handle) // Filter out null/undefined values
                  .map(([platform, handle]) => (
                    <a
                      key={platform}
                      href={`https://${platform}.com/${String(handle).replace(
                        "@",
                        ""
                      )}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-800 text-white hover:bg-yellow-300 hover:text-stone-800 transition-colors"
                      aria-label={`${platform} link`}
                    >
                      {platform.charAt(0).toUpperCase()}
                    </a>
                  ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
                <div className="absolute w-full h-full bg-yellow-300 rounded-lg -rotate-3"></div>
                <div className="absolute w-full h-full bg-white rounded-lg rotate-1 overflow-hidden">
                  {chef.image && (
                    <Image
                      src={urlForImage(chef.image).url()}
                      alt={chef.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-stone-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-300 mb-2">
                {stats.followers.toLocaleString()}
              </div>
              <div className="text-lg font-medium">Følgere</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-300 mb-2">
                {stats.recipes.toLocaleString()}
              </div>
              <div className="text-lg font-medium">Oppskrifter</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-300 mb-2">
                {stats.workshops.toLocaleString()}
              </div>
              <div className="text-lg font-medium">Workshops</div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 font-[Playfair] mb-6 text-center">
              Om Chef Morgan
            </h2>
            <div className="w-16 h-1 bg-yellow-300 mx-auto mb-8"></div>
            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-lg leading-relaxed mb-6">{chef.longBio}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div className="bg-stone-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-stone-800 mb-4">
                    Ekspertise
                  </h3>
                  <ul className="space-y-2">
                    {chef.expertise &&
                      chef.expertise.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-stone-700"
                        >
                          <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="bg-stone-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-stone-800 mb-4">
                    Visjonen Min
                  </h3>
                  <p className="text-stone-700">
                    "Jeg tror at matlaging handler om lidenskap, kreativitet og
                    deling. Min visjon er å inspirere en ny generasjon til å
                    oppdage gleden ved å lage mat, uansett ferdighetsnivå."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 font-[Playfair] mb-6 text-center">
            Samarbeidspartnere
          </h2>
          <div className="w-16 h-1 bg-yellow-300 mx-auto mb-12"></div>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto text-center mb-12">
            Chef Morgan samarbeider med unge kjendiser og influencere for å
            inspirere en ny generasjon av matentusiaster mellom 15 og 35 år.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations &&
              collaborations.map((collab) => (
                <div
                  key={collab._key}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
                >
                  <div className="relative h-64 w-full">
                    {collab.image ? (
                      <Image
                        src={urlForImage(collab.image).url()}
                        alt={collab.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <Image
                        src="/images/placeholder-collab.jpg"
                        alt={collab.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-stone-800">
                        {collab.name}
                      </h3>
                      <span className="bg-yellow-300 text-stone-800 px-2 py-1 rounded text-sm font-medium">
                        {collab.age} år
                      </span>
                    </div>
                    <p className="text-stone-700">{collab.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[Playfair] mb-6">
              Ta Kontakt
            </h2>
            <div className="w-16 h-1 bg-yellow-300 mx-auto mb-8"></div>
            <p className="text-lg mb-8">
              Vil du samarbeide med Chef Morgan eller har du spørsmål om
              matlaging? Ikke nøl med å ta kontakt.
            </p>
            <button className="bg-yellow-300 hover:bg-yellow-400 text-stone-800 font-bold py-3 px-8 rounded-lg transition-colors">
              Kontakt Meg
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
