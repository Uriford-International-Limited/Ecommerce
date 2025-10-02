"use client";

import React from "react";
import BrandCard, { Brand } from "@/components/ui/BrandCard";
import { useFilters } from "@/hooks/useFilters";
import FilterSidebar from "@/components/ui/FilterSidebar";
import { SlidersHorizontal, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const allBrands: Brand[] = [
  {
    id: 1,
    name: "Mojo",
    imageUrl: "/mojo.jpg",
    rating: 4,
    category: "Beverages",
    offers: ["Free Delivery"],
  },
  {
    id: 2,
    name: "Pepsi",
    imageUrl: "/pepsi.png",
    rating: 3,
    category: "Beverages",
    offers: ["Deals"],
  },
  {
    id: 3,
    name: "Magnum",
    imageUrl: "/magnum.png",
    rating: 4,
    category: "Frozen Foods",
    offers: ["Accepts Vouchers"],
  },
  {
    id: 4,
    name: "Orange",
    imageUrl: "/orange.png",
    rating: 2,
    category: "Frozen Foods",
    offers: ["Accepts Vouchers"],
  },
  {
    id: 5,
    name: "Pran",
    imageUrl: "/pran.png",
    rating: 3,
    category: "Frozen Foods",
    offers: ["Deals"],
  },
];

const Shop = () => {
  const { filters, setFilters } = useFilters({
    minPrice: 0,
    maxPrice: 1000,
    categories: [],
    rating: null,
    offers: [],
    brandName: "",
  });

  const filteredBrands = allBrands.filter((brand) => {
    if (brand.price! < filters.minPrice || brand.price! > filters.maxPrice)
      return false;
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
    <div className="container grid lg:grid-cols-6 gap-[34px] py-[30px] lg:py-[60px]">
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
            width={1147.58}
            height={313.75}
            alt="Shop Page Banner"
            className="rounded-[7px]"
          />
          <div className="absolute top-[50%] -translate-y-[50%] left-[2%] md:left-[3%] lg:left-[4%] max-w-[431px] w-full">
            <h4 className="w-[80px] lg:w-[96px] h-[20px] lg:h-[24px] text-[10px] rounded-[34px] inline-flex items-center justify-center bg-[#ffedd5] font-semibold tracking-[-0.02em] text-[#7c2d12]">
              Only This Week
            </h4>
            <h2 className="pt-1 lg:pt-2 pb-[3px] md:pb-[4px] lg:pb-[7px] font-bold text-[14px] md:text-[18px] lg:text-[32px] tracking-[-0.04em] text-muted">
              Grocery store with different treasures
            </h2>
            <p className="hidden md:block pb-1 lg:pb-3 text-sm leading-[150%] tracking-[-0.02em] text-muted-foreground">
              We have prepared special discounts for you on grocery products...
            </p>
            <div>
              <Link
                href="/shop"
                className="w-[100px] lg:w-[123px] h-[26px] lg:h-[38px] text-[11px] lg:text-[13px] inline-flex items-center justify-center font-medium lg:font-bold leading-[350%] tracking-[-0.02em] text-muted bg-background border-[1.13px] border-border rounded-[1132px]"
              >
                Shop Now
                <MoveRight size={12} className="ml-2" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg lg:text-[22px] font-semibold mb-4">
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
