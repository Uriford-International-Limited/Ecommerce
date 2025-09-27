"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Heart,
  ShoppingCart,
  Search,
  MapPin,
  Grid,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-100 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/about-us" className="hover:text-gray-900">
              About Us
            </Link>
            <Link href="/account" className="hover:text-gray-900">
              My Account
            </Link>
            <Link href="/wishlist" className="hover:text-gray-900">
              Wishlist
            </Link>
            <span>
              We Deliver To You Every Day{" "}
              <span className="text-red-500 font-semibold">7:00–23:00</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
              English <ChevronDown size={14} />
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
              USD <ChevronDown size={14} />
            </span>
            <Link
              href="/order-tracking"
              className="hover:text-gray-900 flex items-center"
            >
              Order Tracking
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between border-b border-gray-200">

        {/* Logo and Location */}
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" alt="ShopStore Logo" width={52} height={45} />
            <span className="font-bold text-2xl text-gray-900">ShopStore</span>
          </Link>

          <div className="flex items-center gap-4 cursor-pointer">
            <MapPin size={20} className="text-gray-700" />
            <div className="flex flex-col text-sm leading-tight">
              <span>Deliver to</span>
              <span className="font-bold">all</span>
            </div>
          </div>
        </div>

        {/* Search bar */}
<div className="flex flex-1 mx-6 relative">
  <input
    type="search"
    placeholder="Search products, categories or brands..."
    className="w-full bg-gray-100 rounded-md pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
  />
  <Search
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-500 cursor-pointer" 
    size={20}
  />
</div>

        {/* Right side icons */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700">
          <Link href="/profile" className="flex items-center gap-2 hover:text-gray-900">
            <User size={22} />
            <div className="flex flex-col text-sm leading-tight">
              <span>Sign In</span>
              <span className="font-bold">Account</span>
            </div>
          </Link>
          <Link href="/wishlist" className="hover:text-gray-900">
            <Heart size={22} />
          </Link>
          <Link href="/cart" className="relative hover:text-gray-900">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </Link>
        </nav>
      </div>

      {/* Navigation menus */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center">
          <div className="flex items-center space-x-6 text-black-700 font-medium w-full">
            
            <Link href="/categories" className="flex items-center gap-1 hover:text-purple-600 mr-10">
              <Grid size={18} />
              <span>All Categories</span>
              <ChevronDown size={16} />
            </Link>

            <Link href="/" className="flex items-center gap-1 hover:text-purple-600">
              Home
              <ChevronDown size={16} />
            </Link>
            <Link href="/shop" className="flex items-center gap-1 hover:text-purple-600">
              Shop
              <ChevronDown size={16} />
            </Link>
            <Link href="/fruits" className="hover:text-purple-600">Fruits & Vegetables</Link>
            <Link href="/beverages" className="hover:text-purple-600">Beverages</Link>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <Link href="/contact" className="hover:text-purple-600">Contact</Link>

            {/* Rightside texts */}
            <div className="flex items-center space-x-6 ml-auto">
              <Link href="/trending" className="flex items-center gap-1 hover:text-purple-600">
                Trending Products
                <ChevronDown size={16} />
              </Link>
              <Link href="/almost-finished" className="flex items-center gap-2 text-red-500">
                <span>Almost Finished</span>
                <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">Sale</span>
                <ChevronDown size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
