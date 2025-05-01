import { Product } from "@/types/Product";
import { IoBagHandleOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const ShortText = (str: string) => {
    const words = str.split(" ");
    return words.length <= 2 ? str : words.slice(0, 2).join(" ");
  };

  return (
    <div className="p-3 bg-teal/30 rounded-xl flex flex-col justify-between h-full">
      {/* IMAGE */}
      <div className="relative w-full h-52 md:h-80 rounded-md overflow-hidden">
        <Link href="/">
          <Image
            src={product.image}
            alt={`${product.title} Image`}
            fill
            className="object-contain"
            unoptimized
          />
        </Link>
      </div>

      {/* CONTENT */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex flex-col gap-1">
          <h5 className="text-sm md:text-base font-heading font-semibold tracking-tight line-clamp-2">
            {ShortText(product.title)}
          </h5>
          <p className="font-body text-teal text-sm md:text-base">
            ${product.price}
          </p>
        </div>

        <button className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 border border-zinc-700 rounded-full text-lg hover:bg-teal/20 transition">
          <IoBagHandleOutline />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
