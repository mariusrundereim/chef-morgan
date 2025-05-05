import Image from "next/image";
import heroPic from "@/public/hero-picture.jpg";
export default function Hero() {
  return (
    <section>
      <div className="bg-red-800 text-white">
        <Image
          src={heroPic}
          alt="Picture of the author"
          className="brightness-50"
        />
      </div>
    </section>
  );
}
