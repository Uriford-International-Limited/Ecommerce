"use client";

import React, { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1 flex flex-col sm:flex-row items-center justify-between space-y-1 sm:space-y-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">
            <Link href="/about-us" className="hover:text-gray-900">About Us</Link>
            <Link href="/account" className="hover:text-gray-900">My Account</Link>
            <Link href="/wishlist" className="hover:text-gray-900">Wishlist</Link>
            <span>
              We Deliver To You Every Day <span className="text-red-500 font-semibold">7:00–23:00</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1 cursor-pointer hover:text-gray-900">English <ChevronDown size={14} /></span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-gray-900">USD <ChevronDown size={14} /></span>
            <Link href="/order-tracking" className="hover:text-gray-900 flex items-center">Order Tracking</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 flex items-center justify-between border-b border-gray-200">
        {/* Logo + Location */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" alt="ShopStore Logo" width={52} height={45} className="w-10 h-auto sm:w-12 sm:h-auto"/>
            <span className="font-bold text-xl sm:text-2xl text-gray-900">ShopStore</span>
          </Link>
          <div className="hidden sm:flex items-center gap-3 cursor-pointer">
            <MapPin size={20} className="text-gray-700" />
            <div className="flex flex-col text-sm leading-tight">
              <span>Deliver to</span>
              <span className="font-bold">all</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 mx-2 sm:mx-4 relative">
          <input
            type="search"
            placeholder="Search products, categories or brands..."
            className="w-full bg-gray-100 rounded-md pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" size={20} />
        </div>

        {/* Desktop Right Side Icons */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-gray-700">
          <Link href="/profile" className="flex items-center gap-2 hover:text-gray-900">
            <User size={22} />
            <div className="flex flex-col text-sm leading-tight">
              <span>Sign In</span>
              <span className="font-bold">Account</span>
            </div>
          </Link>
          <Link href="/wishlist" className="hover:text-gray-900"><Heart size={22} /></Link>
          <Link href="/cart" className="relative hover:text-gray-900">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2">
          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-gray-800 font-medium">
            <Link href="/categories" className="flex items-center gap-1 hover:text-purple-600 mr-6">
              <Grid size={18} /> <span>All Categories</span> <ChevronDown size={16} />
            </Link>
            <Link href="/" className="flex items-center gap-1 hover:text-purple-600">Home <ChevronDown size={16} /></Link>
            <Link href="/shop" className="flex items-center gap-1 hover:text-purple-600">Shop <ChevronDown size={16} /></Link>
            <Link href="/fruits" className="hover:text-purple-600">Fruits & Vegetables</Link>
            <Link href="/beverages" className="hover:text-purple-600">Beverages</Link>
            <Link href="/blog" className="hover:text-purple-600">Blog</Link>
            <Link href="/contact" className="hover:text-purple-600">Contact</Link>

            <div className="flex items-center space-x-4 lg:space-x-6 ml-auto">
              <Link href="/trending" className="flex items-center gap-1 hover:text-purple-600">Trending Products <ChevronDown size={16} /></Link>
              <Link href="/almost-finished" className="flex items-center gap-2 text-red-500">
                <span>Almost Finished</span>
                <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">Sale</span>
                <ChevronDown size={16} />
              </Link>
            </div>
          </div>

          {/* Mobile */}
          {mobileMenuOpen && (
            <div className="flex flex-col md:hidden space-y-2 text-gray-700">
              <Link href="/categories" className="flex items-center gap-1 hover:text-purple-600"><Grid size={18}/> All Categories <ChevronDown size={16} /></Link>
              <Link href="/" className="hover:text-purple-600">Home</Link>
              <Link href="/shop" className="hover:text-purple-600">Shop</Link>
              <Link href="/fruits" className="hover:text-purple-600">Fruits & Vegetables</Link>
              <Link href="/beverages" className="hover:text-purple-600">Beverages</Link>
              <Link href="/blog" className="hover:text-purple-600">Blog</Link>
              <Link href="/contact" className="hover:text-purple-600">Contact</Link>
              <Link href="/trending" className="hover:text-purple-600">Trending Products</Link>
              <Link href="/almost-finished" className="text-red-500 flex items-center gap-2">
                Almost Finished <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">Sale</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
