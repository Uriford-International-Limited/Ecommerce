"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export type Brand = {
  id: string;
  name: string;
  imageUrl: string;
  rating?: number;
  category?: string;
  offers?: string[];
};

type Props = {
  brand: Brand;
};

const BrandCard = ({ brand }: Props) => {
  return (
    <Card className="group overflow-hidden transition hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={brand.imageUrl}
            alt={brand.name}
            width={200}
            height={200}
            className="w-49 h-49 sm:w-50 sm:h-50 md:w-45 md:h-45 lg:w-[200px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105 mx-auto"
          />
        </div>
      </CardHeader>
      <CardContent className="p-2 lg:p-4 flex items-center justify-between border-t">
        <div className="flex flex-col">
          <h3 className="pb-1 lg:pb-2 lg:text-[20px] font-medium text-muted truncate">
            {brand.name}
          </h3>
        </div>
        {brand.rating !== undefined && (
          <div className="ml-3 inline-flex items-center text-chart-3">
            <Star className="mr-1 h-4 w-4 text-chart-4" />
            {brand.rating.toFixed(1)}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BrandCard;
