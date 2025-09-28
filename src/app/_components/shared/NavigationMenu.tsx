"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Grid,
  ChevronDown,
  Apple,
  Fish,
  Milk,
  Cake,
  CupSoda,
  Snowflake,
  Cookie,
  ShoppingBag,
  Home,
  HeartPulse,
  Baby,
} from "lucide-react";

interface Category {
  label: string;
  icon: React.ElementType;
}

const categories: Category[] = [
  { label: "Fruits & Vegetables", icon: Apple },
  { label: "Meats & Seafood", icon: Fish },
  { label: "Breakfast & Dairy", icon: Milk },
  { label: "Breads & Bakery", icon: Cake },
  { label: "Beverages", icon: CupSoda },
  { label: "Frozen Foods", icon: Snowflake },
  { label: "Biscuits & Snacks", icon: Cookie },
  { label: "Grocery & Staples", icon: ShoppingBag },
  { label: "Household Needs", icon: Home },
  { label: "Healthcare", icon: HeartPulse },
  { label: "Baby & Pregnancy", icon: Baby },
];

interface NavigationMenuProps {
  mobileMenuOpen: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ mobileMenuOpen }) => {
  const [allCategoriesOpen, setAllCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAllCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Fruits & Vegetables", href: "/fruits" },
    { label: "Beverages", href: "/beverages" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4 py-0 md:py-2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center text-gray-800 font-medium w-full flex-nowrap space-x-6">
          {/* All Categories */}
          <div ref={dropdownRef} className="relative flex-shrink-0">
            <button
              onClick={() => setAllCategoriesOpen(!allCategoriesOpen)}
              className="flex items-center gap-1 hover:text-primary"
            >
              <Grid size={18} /> All Categories <ChevronDown size={16} />
            </button>
            {allCategoriesOpen && (
              <div className="absolute left-0 mt-1 w-60 bg-white shadow-lg rounded-md z-50">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <React.Fragment key={cat.label}>
                      <Link
                        href={`/categories/${cat.label.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        <Icon size={16} />
                        <span>{cat.label}</span>
                      </Link>
                      {idx < categories.length - 1 && <div className="border-b border-gray-200 mx-4"></div>}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-1 hover:text-primary">
              {link.label} {(link.label === "Home" || link.label === "Shop") && <ChevronDown size={16} />}
            </Link>
          ))}

          {/* Right-side Links */}
          <div className="flex items-center space-x-4 lg:space-x-6 ml-auto flex-shrink-0">
            <Link href="/trending" className="flex items-center gap-1 hover:text-primary">
              Trending Products <ChevronDown size={16} />
            </Link>
            <Link href="/almost-finished" className="flex items-center gap-2 text-destructive whitespace-nowrap">
              <span>Almost Finished</span>
              <span className="bg-destructive text-white px-2 py-0.5 rounded text-xs">SALE</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="flex flex-col md:hidden space-y-2 text-gray-700">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  href={`/categories/${cat.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                </Link>
              );
            })}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 ${link.label.includes("Almost") ? "text-destructive" : "hover:text-primary"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;
