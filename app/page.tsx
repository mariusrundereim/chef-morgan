import Cta from "@/components/sections/cta";
import Hero from "@/components/sections/hero/hero";
import Offerings from "@/components/sections/offerings/offerings";

const offeringsData = {
  title: "Siste kulinariske opplevelser", // "Latest culinary experiences" in Norwegian
  cards: [
    {
      id: "1",
      title: "Meal Prepping",
      description: "Master the art of preparation with expert guidance",
      imageUrl: "/images/meal-prep-1.jpg",
      ctaText: "Read more",
      ctaLink: "/meal-prepping",
      _createdAt: "2023-04-15T12:00:00Z",
    },
    {
      id: "2",
      title: "Meal Prepping",
      description: "Master the art of preparation with expert guidance",
      imageUrl: "/images/meal-prep-2.jpg",
      ctaText: "Read more",
      ctaLink: "/meal-prepping-2",
      _createdAt: "2023-04-16T12:00:00Z",
    },
    {
      id: "3",
      title: "Meal Prepping",
      description: "Master the art of preparation with expert guidance",
      imageUrl: "/images/meal-prep-3.jpg",
      ctaText: "Read more",
      ctaLink: "/meal-prepping-3",
      _createdAt: "2023-04-17T12:00:00Z",
    },
    {
      id: "4",
      title: "Healthy Cooking",
      description: "Learn the secrets of nutritious and delicious meals",
      imageUrl: "/images/healthy-cooking.jpg",
      ctaText: "Read more",
      ctaLink: "/healthy-cooking",
      _createdAt: "2023-04-18T12:00:00Z",
    },
    {
      id: "5",
      title: "Gourmet Techniques",
      description: "Elevate your cooking with professional methods",
      imageUrl: "/images/gourmet.jpg",
      ctaText: "Read more",
      ctaLink: "/gourmet-techniques",
      _createdAt: "2023-04-19T12:00:00Z",
    },
    {
      id: "6",
      title: "Quick Recipes",
      description: "Fast and tasty meals for busy weekdays",
      imageUrl: "/images/quick-recipes.jpg",
      ctaText: "Read more",
      ctaLink: "/quick-recipes",
      _createdAt: "2023-04-20T12:00:00Z",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Offerings
        title={offeringsData.title}
        cards={offeringsData.cards}
        showLatest={true}
      />
      <Cta />
    </div>
  );
}
