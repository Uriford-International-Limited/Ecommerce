"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";
import { Heart, Plus, CheckCircle, Flame, Snowflake, Star } from "lucide-react";
import { IProduct } from "@/types";

interface cardTypes {
  direction?: "vertical" | "horizontal";
  item: IProduct;
  className?: string;
}

const ProductCard: React.FC<cardTypes> = ({
  direction = "vertical",
  item,
  className,
  ...prop
}) => {
  const [wish, setWish] = React.useState<boolean>(false);

  let priceWithDiscount = item.price;
  if (item.off) {
    priceWithDiscount = item.price * (1 - item.off / 100);
  }

  return (
    <div
      className={cn(
        "relative h-[430px] max-w-[256px] border p-4",
        direction === "horizontal" && "h-[215px] max-w-[512px] flex",
        className
      )}
      {...prop}
    >
      <div
        className={cn(
          "relative h-7/12 p-3",
          direction === "horizontal" && "h-full w-5/12"
        )}
      >
        <Image
          src={item.image}
          width={300}
          height={500}
          alt="Product Image"
          className="size-full"
        />

        {/* Discount label */}
        {item.off && (
          <span className="absolute top-0 left-0 text-xs p-1 px-2 bg-destructive/70 rounded-full">
            {item.off}%
          </span>
        )}

        {/* Wish icon */}
        <Heart
          onClick={() => setWish(!wish)}
          size="22px"
          color="var(--destructive)"
          className={cn(
            "absolute top-0 right-0 cursor-pointer",
            direction === "horizontal" && "right-2",
            wish && "fill-destructive"
          )}
        />

        {/* Type label */}
        <ProductTypeBadge
          variant={item.category}
          className="absolute bottom-1 left-0"
        />
      </div>

      {/* Product Details */}
      <div
        className={cn(
          "h-5/12 flex flex-col justify-end gap-2",
          direction === "horizontal" && "h-full w-7/12 justify-between"
        )}
      >
        <div className="flex flex-col gap-1">
          <h3 className="font-medium line-clamp-2">{item.title}</h3>

          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={13} />
            ))}
            <span>3</span>
          </div>

          <strong className="text-xl text-destructive">
            ${priceWithDiscount.toFixed(2)}&nbsp;
            {item.off && (
              <del className="text-muted-foreground text-base">
                ${item.price.toFixed(2)}
              </del>
            )}
          </strong>
        </div>

        <Button
          variant="outline"
          className="w-full rounded-full justify-between ring ring-ring text-primary"
        >
          Add to cart
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

// Product Type Badge
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-sm font-bold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "hidden",
        organic: "bg-linear-to-r from-[#D4FC79] to-[#96E6A1] text-green-700",
        cold: "bg-linear-to-r from-[#A5EFFF] to-[#E7F8FD] text-[#0891B2]",
        hot: "bg-linear-to-r from-[#FF9A9E] to-[#FAD0C4] text-red-700",
        premium: "bg-linear-to-r from-[#FDEB71] to-[#F8D800] text-yellow-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconMap: Record<string, React.ElementType> = {
  organic: CheckCircle,
  cold: Snowflake,
  hot: Flame,
  premium: Star,
};

const textMap: Record<string, string> = {
  organic: "Organic",
  cold: "Cold Sale",
  hot: "Hot Sale",
  premium: "Premium",
};

function ProductTypeBadge({
  className,
  variant,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  const currentVariant = variant || "default";
  const Icon = iconMap[variant || "default"];
  const text = children ?? textMap[currentVariant];

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {Icon && <Icon />}
      {text}
    </Comp>
  );
}
