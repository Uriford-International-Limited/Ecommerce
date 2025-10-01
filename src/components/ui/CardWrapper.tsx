import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardWrapperProps {
  label: string;
  description: string;
  children: ReactNode;
  className?: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  label,
  description,
  children,
  className,
}) => {
  return (
    <section className="container space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="inline text-xl font-bold me-5">{label}</h2>
          <p className="inline text-sm text-muted-foreground">{description}</p>
        </div>

        <Button variant="outline" className="rounded-full">
          View All <ArrowRight />
        </Button>
      </div>
      <div className={cn("flex", className)}>{children}</div>
    </section>
  );
};

export default CardWrapper;
