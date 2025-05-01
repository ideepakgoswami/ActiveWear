import Image from "next/image";
import HeroImg from "/public/assets/image.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-end ">
      <Image
        className="z-0 object-cover md:object-cover md:object-left-top "
        src={HeroImg}
        alt="Hero"
        fill
        quality={100}></Image>

      {/* Overlay */}
      <div className="absolute inset-0 bg-teal/30 z-10"></div>

      {/* content  */}
      <div className="relative z-20 flex flex-col items-end text-cloud space-y-6 max-w-2xl p-8">
        <h1 className="text-5xl font-bold text-right">
          Train With Purpose, Perform With Intention
        </h1>
        <p className="text-lg text-right text-sand">
          Take on any challenge with style and confidence, powered by our
          premium active wear.
        </p>
        <Link href="/products">
          <button className="px-8 py-3 bg-white text-teal font-semibold rounded-full hover:bg-gray-100 transition">
            Explore Now →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
