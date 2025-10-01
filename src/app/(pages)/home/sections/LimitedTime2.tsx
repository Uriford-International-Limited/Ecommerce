import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const LimitedTime2 = () => {
  return (
    <section>
      <div className="container flex gap-10">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "border h-60 min-w-[400px] grow bg-center bg-cover p-4",
              idx === 0 && "bg-[url('/lt4.png')]",
              idx === 1 && "bg-[url('/lt5.png')]"
            )}
          >
            <p className="text-xs text-[#7C2D12] font-semibold bg-[#FFEDD5] inline px-2 py-0.5 rounded-full">Only This Week</p>

            <h2 className="text-3xl font-bold w-4/8 my-4">Make your grocery shopping easy with us</h2>

            <Button variant={"outline"} className="rounded-full mt-5">
              Shop now <ArrowRight />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LimitedTime2;
