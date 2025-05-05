import Image from "next/image";
import { DummyProducts } from "@/constants/DummyProducts";

const ProductDetail = () => {
  return (
    <section className="h-96 grid grid-cols-12">
      {/* IMAGES */}
      <div className="images col-span-6 flex flex-col justify-center items-center py-16">
        <div className="prod-big-img bg-coral relative w-96 aspect-square">
          <Image
            className="rounded-xl"
            fill
            objectFit="contain"
            src={DummyProducts[0].image}
            alt="product-big-img"></Image>
        </div>
        <div className="prod-sml-img flex gap-4 mt-4">
          <div className="relative w-20 h-20">
            <Image
              fill
              className="object-cover rounded-md"
              src={DummyProducts[0].image}
              alt="product-sml-img-1"
            />
          </div>
          <div className="relative w-20 h-20">
            <Image
              fill
              className="object-cover rounded-md"
              src={DummyProducts[1].image}
              alt="product-sml-img-2"
            />
          </div>
          <div className="relative w-20 h-20">
            <Image
              fill
              className="object-cover rounded-md"
              src={DummyProducts[2].image}
              alt="product-sml-img-3"
            />
          </div>
        </div>
      </div>
      {/* DETAILS */}
      <div className="details col-span-6 py-16">
        <div className="info">
          <h1 className="font-heading font-semibold text-5xl">
            {DummyProducts[0].title}
          </h1>
          <div className="pri-rat flex">
            <p className="price font-body text-xl pt-3 pb-8">
              {`$${DummyProducts[0].price}`}
            </p>
            {/* RATING  */}
          </div>
        </div>
        <div className="button flex gap-6">
          <button className="px-8 py-3 bg-coral text-gold font-semibold rounded-full hover:bg-gray-100 transition">
            ♡ Add to favorites
          </button>
          <button className="px-8 py-3 bg-coral text-gold font-semibold rounded-full hover:bg-gray-100 transition">
            🛒 Add to cart
          </button>
        </div>
        <hr className="border-t-2 border-gold w-11/12 my-8" />
        <div className="description">
          <h5 className="font-body font-light text-base text-warm-gray">
            {DummyProducts[0].description}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
