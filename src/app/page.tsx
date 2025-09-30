import CardWrapper from "@/components/ui/CardWrapper";
import Hero from "./(pages)/home/sections/Hero";
import ProductCard from "@/components/ui/ProductCard";
import { arrivalDatas, arrivalDatas2 } from "@/datas";

export default function Page() {
  return (
    <>
      <Hero />

      <CardWrapper
        label="New Arrivals"
        description="Dont miss this opportunity at a special discount just for this week."
      >
        {arrivalDatas.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </CardWrapper>

      <CardWrapper
        label="Featured Products"
        description="Do not miss the current offers until the end of March."
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {arrivalDatas2.map((item) => (
          <ProductCard direction="horizontal" key={item._id} item={item} />
        ))}
      </CardWrapper>
    </>
  );
}
