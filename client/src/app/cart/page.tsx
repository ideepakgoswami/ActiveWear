import { DummyProducts } from "@/constants/DummyProducts";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const product = DummyProducts[0];
  const { id, title, price, image, description } = product;

  const shortText = (text: string) => {
    const words = text.split(" ");
    return words.length <= 5 ? text : words.slice(0, 10).join(" ");
  };

  return (
    <section className="py-20 px-10 space-y-10">
      {/* HEADING OUTSIDE */}
      <h1 className="font-heading text-3xl px-10 pt-10">Shopping Cart</h1>

      {/* CART CONTENT */}
      <div className="flex gap-10">
        {/* PRODUCTS */}
        <div className="p-5 w-3/5 bg-teal/10 rounded-xl">
          {/* SINGLE PRODUCT */}
          <div className="bg-sand/70 flex gap-8 p-4 rounded-2xl items-center border-2 border-warm-gray/20">
            {/* IMAGE */}
            <div className="relative w-24 h-32">
              <Image
                className="object-cover rounded-2xl"
                src={image}
                alt={`Product ${id}`}
                fill
              />
            </div>

            {/* DETAILS */}
            <div className="flex flex-col justify-center gap-2 flex-1">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p>{shortText(description)}</p>
              <div className="flex gap-4">
                <button className="text-teal font-body text-sm hover:underline">
                  ♡ Add to favorites
                </button>
                <button className="text-teal font-body text-sm hover:underline">
                  ❌ Remove
                </button>
              </div>
            </div>

            {/* COUNTER */}
            <div className="flex items-center gap-3">
              <button className="px-2 py-1 border bg-teal/15 hover:bg-teal/30 rounded-xl text-sm font-semibold">
                ➖
              </button>
              <p>1</p>
              <button className="px-2 py-1 border bg-teal/15 hover:bg-teal/30 rounded-xl text-sm font-semibold">
                ➕
              </button>
            </div>

            {/* PRICE */}
            <div className="text-lg font-semibold text-right min-w-[60px]">
              ${price}
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="summary w-2/5 bg-teal/10 rounded-xl p-4 space-y-4">
          <h2 className="text-xl font-heading mb-4">Order Summary</h2>
          {/* ITEM ROWS */}
          <div className="flex text-warm-gray justify-between font-body text-base gap-4">
            <span>Original price</span>
            <span>{price}</span>
          </div>
          <div className="flex text-warm-gray justify-between font-body text-base gap-4">
            <span>Savings</span>
            <span className="text-teal">-$299.00</span>
          </div>
          <div className="flex text-warm-gray justify-between font-body text-base gap-4">
            <span>Delivery Charges</span>
            <span>$99</span>
          </div>
          <div className="flex text-warm-gray justify-between font-body text-base gap-4">
            <span>Tax</span>
            <span>$50</span>
          </div>
          <hr className="border-t-2 border-sand/70" />
          <div className="flex text-warm-gray justify-between font-body text-base gap-4">
            <span>Total</span>
            <span>$500</span>
          </div>
          <button className="w-full bg-teal py-3 rounded-full text-cloud">
            Checkout
          </button>
          <h5 className="text-center">
            or{" "}
            <Link className="text-teal" href={"/shop"}>
              continue shopping →
            </Link>
          </h5>

          {/* VOUCHER  */}
          <div className="voucher space-y-3">
            <h3>Do you have a voucher or gift card?</h3>
            <input
              className="w-full bg-sand/50 py-3 border-2 border-warm-gray/20 rounded-lg text-center"
              type="text"
            />
            <button className="w-full bg-teal py-3 rounded-full text-cloud">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
