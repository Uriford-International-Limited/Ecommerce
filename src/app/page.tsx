import ProductCard from "@/components/ui/ProductCard";
import { IProduct } from "@/types/Product";

export default function Home() {
  const data: IProduct[] = [
    {
      _id: "1",
      image: "/oil.png",
      title: "100 Percent Apple Juice - 64 floz Bottle",
      price: 0.5,
      category: "organic",
      off: 50,
      isAvailable: true,
    },
    {
      _id: "2",
      image: "/oil.png",
      title: "100 Percent Apple Juice - 64 floz Bottle",
      price: 2.53,
      category: "cold",
      off: 60,
      isAvailable: true,
    },
  ];
  return (
    <div className="min-h-screen flex">
      <section className="container mx-auto flex justify-center">
        {data.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </section>
    </div>
  );
}
