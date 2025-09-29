import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cardItems } from "@/datas";

const Hero = () => {
  return (
    <section>
      <div className="container px-4 mt-2">
        <div className="h-[calc(100vh-42rem)] sm:h-[calc(100vh-35rem)] md:h-[calc(100vh-31rem)] xl:h-[calc(100vh-22rem)] flex gap-4">
          <div className="hidden lg:block min-w-60 h-full"></div>
          <div className="bg-[url('/hero.svg')] w-full bg-center bg-cover p-2 sm:p-6 md:p-10 2xl:p-14 rounded-lg overflow-hidden">
            <div className="lg:w-3/4 xl:w-2/3 2xl:w-1/2 space-y-2 sm:space-y-4 2xl:space-y-5">
              <p className="bg-gradient-to-r from-green-800/60 via-green-800/25 text-green-800 inline-block  px-1 py-0.5 lg:px-[11px] lg:py-[7px] rounded-sm font-medium text-sm lg:text-base">
                Weekend Discount
              </p>
              <h1 className="text-[#39245F] text-xl md:text-[calc(30px+26*(100vw-320px)/1600)] font-bold leading-7 md:leading-12 xl:leading-16">
                Get the best quality products at the lowest prices
              </h1>
              <p className="hidden xl:block text-lg">
                We have prepared special discounts for you on grocery products.
                Don`t miss these opportunities...
              </p>

              <div className="flex items-center gap-2 md:gap-4 lg:mt-7 2xl:mt-12">
                <Button className="md:h-12 md:w-40 md:text-base">
                  Shop Now
                </Button>
                <div>
                  <h2 className="text-destructive font-bold text-lg md:text-2xl">
                    $27.99{" "}
                    <del className="text-black text-base md:text-lg font-medium">
                      $56.67
                    </del>
                  </h2>
                  <p className="text-xs text-muted-foreground font-medium">
                    Don`t miss this limited time offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-between py-6 border-b-2">
          {cardItems.map((item, idx) => (
            <div key={idx} className="p-2 flex items-end gap-3">
              <Image src={item.image} width={50} height={50} alt="card image" />
              <div className="mb-5">
                <h4 className="font-bold text-lg">{item.label}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
