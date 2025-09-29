import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <section className="container mx-auto flex justify-center">

      <ProductCard direction="horizontal" items={[]}/>
      <ProductCard items={[]}/>
      </section>
    </div>
  );
}
