import Image from "next/image";
import heroPic from "@/public/hero-picture.jpg";
export default function Hero() {
  return (
    <section>
      <div className="bg-red-800 text-white  min-h-[10rem]">
        <Image
          src={heroPic}
          alt="Picture of the author"
          className="brightness-50 object-cover w-full aspect-video"
        />
      </div>
    </section>
  );
}
