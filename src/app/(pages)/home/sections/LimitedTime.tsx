import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const LimitedTime = () => {
  return (
    <section>
      <div className="container flex flex-wrap justify-center gap-10">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "border max-h-52 grow bg-center bg-cover p-4 space-y-3",
              idx === 0 && "bg-[url('/lt1.png')]",
              idx === 1 && "bg-[url('/lt2.png')]",
              idx === 2 && "bg-[url('/lt3.png')]"
            )}
          >
            <p className="text-xs text-destructive">Only This Week</p>

            <h2 className="text-lg md:text-2xl font-bold w-4/5 md:3/5">Quality eggs at an affordable price</h2>

            <Button variant={"outline"} className="rounded-full md:mt-5">
              Shop now <ArrowRight />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LimitedTime;
