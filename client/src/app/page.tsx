import Hero from "@/components/ui/Hero";
import Id from "./shop/product/[id]/page";
export default function Home() {
  return (
    <main>
      <section className="section-hero">
        <Hero />
        <Id />
      </section>
    </main>
  );
}
