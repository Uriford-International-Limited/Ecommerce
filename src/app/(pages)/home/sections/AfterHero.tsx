import { Button } from "@/components/ui/button";
import { afterHero } from "@/datas";
import { ArrowLeft } from "lucide-react";

const AfterHero = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-wrap gap-5">
        {afterHero.map(({ image, label, des }, idx) => (
          <div
            key={idx}
            className={`w-full md:w-[48%] xl:w-[32%] h-40 lg:h-54 rounded-sm py-3 lg:py-5 px-4 bg-cover bg-center`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="w-2/3 space-y-1 lg:space-y-2">
              <p className="text-xs lg:text-sm text-destructive">
                Only This Week
              </p>
              <h3 className="text-lg lg:text-2xl ls:font-semibold font-bold text-black">
                {label}
              </h3>
              <p className="text-xs lg:text-sm text-muted-foreground">{des}</p>
              <Button
                size="sm"
                className="text-xs rounded-full mt-1 lg:mt-3 bg-white text-black hover:text-white"
              >
                Shop Now <ArrowLeft />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AfterHero;
