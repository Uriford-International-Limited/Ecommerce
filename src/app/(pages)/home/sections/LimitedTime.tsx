import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const LimitedTime = () => {
  return (
    <section>
      <div className="container flex gap-10">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "border h-52 min-w-[400px] grow bg-center bg-cover p-4 space-y-3",
              idx === 0 && "bg-[url('/lt1.png')]",
              idx === 1 && "bg-[url('/lt2.png')]",
              idx === 2 && "bg-[url('/lt3.png')]"
            )}
          >
            <p className="text-xs text-destructive">Only This Week</p>

            <h2 className="text-2xl font-bold w-3/5">Quality eggs at an affordable price</h2>

            <Button variant={"outline"} className="rounded-full mt-5">
              Shop now <ArrowRight />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LimitedTime;
