import Hero from "./(pages)/home/sections/Hero";
import CardWrapper from "@/components/ui/CardWrapper";
import ProductCard from "@/components/ui/ProductCard";
import { arrivalDatas, arrivalDatas2 } from "@/datas";
import LimitedTime from "./(pages)/home/sections/LimitedTime";
import LimitedTime2 from "./(pages)/home/sections/LimitedTime2";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="space-y-10">
      <Hero />

      <LimitedTime />

      <CardWrapper
        label="New Arrivals"
        description="Dont miss this opportunity at a special discount just for this week."
      >
        {arrivalDatas.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </CardWrapper>

      <LimitedTime2 />

      <CardWrapper
        label="Featured Products"
        description="Do not miss the current offers until the end of March."
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {arrivalDatas2.map((item) => (
          <ProductCard direction="horizontal" key={item._id} item={item} />
        ))}
      </CardWrapper>

      <CardWrapper
        label="Popular Companies"
        description="Some of the new products arriving this weeks"
        className="flex"
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="min-w-[300px] grow p-4 border">
            <div className="flex gap-3 border-b pb-4">
              <Image
                src="/user2.svg"
                width={300}
                height={300}
                alt="User Image"
                className="size-[81px] rounded"
              />

              <div>
                <h2 className=" font-bold">Machic</h2>
                <p className="text-xs my-1">Featured</p>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={13}
                      className={`${idx <= 3 && "fill-amber-400"}`}
                    />
                  ))}
                  <span className="ms-2">40</span>
                </div>
              </div>
            </div>
            <p className="text-sm">
              Good quality product can only be found in good stores
            </p>
          </div>
        ))}
      </CardWrapper>
    </div>
  );
}
