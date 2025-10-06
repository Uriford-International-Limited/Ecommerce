"use client";

import { useFilters } from "@/hooks/useFilters";
import Image from "next/image";
import { SlidersHorizontal, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterSidebar from "./components/FilterSidebar";
import BrandCard from "./components/BrandCard";
import { allBrands } from "@/datas";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Shop = () => {
  const { filters, setFilters } = useFilters({
    categories: [],
    rating: null,
    offers: [],
    brandName: "",
  });

  const filteredBrands = allBrands.filter((brand) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(brand.category!)
    )
      return false;
    if (filters.rating && brand.rating! < filters.rating) return false;
    if (
      filters.offers.length > 0 &&
      !filters.offers.some((o) => brand.offers?.includes(o))
    )
      return false;
    if (
      filters.brandName &&
      !brand.name.toLowerCase().includes(filters.brandName.toLowerCase())
    )
      return false;

    return true;
  });

  return (
    <div className="container grid lg:grid-cols-6 gap-[34px]">
      {/* Filter Sidebar */}
      <div className="col-span-1">
        <div className="hidden lg:block">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            categories={["Beverages", "Frozen Foods", "Snacks"]}
          />
        </div>
      </div>
      {/* Brand Cards */}
      <div className="col-span-5">
        {/* Banner */}
        <div className="relative mb-4 lg:mb-10">
          <Image
            src="/shop_banner.svg"
            width={1000}
            height={500}
            alt="Shop Page Banner"
            className="rounded-[7px] w-full"
          />
          <div className="absolute top-[50%] -translate-y-[50%] left-[2%] md:left-[3%] lg:left-[4%] max-w-[431px] w-full">
            <h4 className="hidden w-[80px] lg:w-[96px] h-[20px] lg:h-[24px] text-[10px] rounded-[34px] sm:inline-flex items-center justify-center bg-[#ffedd5] font-semibold tracking-[-0.02em] text-[#7c2d12]">
              Only This Week
            </h4>
            <h2 className="pt-1 lg:pt-2 pb-[3px] md:pb-[4px] lg:pb-[7px] font-bold text-[14px] md:text-[18px] lg:text-[32px] tracking-[-0.04em] text-muted">
              Grocery store with different treasures
            </h2>
            <p className="hidden md:block pb-1 lg:pb-3 text-sm leading-[150%] tracking-[-0.02em] text-muted-foreground">
              We have prepared special discounts for you on grocery products...
            </p>
            <div>
              <Button className="w-[100px] md:w-[110px] lg:w-[123px] h-[26px] md:h-[28px] lg:h-[38px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] inline-flex items-center justify-center font-medium lg:font-bold leading-[350%] tracking-[-0.02em] text-muted bg-background border-[1.13px] border-border rounded-[1132px]">
                Shop Now
                <MoveRight
                  className="w-[11px] md:w-[12px] lg:w-[14px] h-[11px] md:h-[12px] lg:h-[14px] ml-1 md:ml-2"
                  strokeWidth={2}
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[22px] lg:text-[28px] font-semibold pb-4">
            All Shops
          </h3>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger>
                <SlidersHorizontal
                  size={24}
                  className="text-muted"
                  strokeWidth={2}
                />
              </SheetTrigger>
              <SheetContent>
                <SheetTitle></SheetTitle>
                <FilterSidebar
                  filters={filters}
                  setFilters={setFilters}
                  categories={["Beverages", "Frozen Foods", "Snacks"]}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))
          ) : (
            <p className="text-muted-foreground col-span-3 text-center">
              No brands found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
