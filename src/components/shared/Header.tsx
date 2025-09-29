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
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import NavigationMenu from "./widgets/NavigationMenu";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full">
      {/* Top Bar */}
      <div className="hidden md:flex bg-gray-100 text-xs text-gray-600 border-b border-gray-200">
        <div className="container flex justify-between px-2 py-2">
          {/* Left side */}
          <div className="flex items-center gap-4">
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
              <span className="text-destructive font-semibold">7:00–23:00</span>
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
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

      {/* Main Header */}
      <div className="container px-2 sm:px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.svg"
              alt="ShopStore Logo"
              width={52}
              height={45}
              className="w-10 h-auto sm:w-12 sm:h-auto"
            />
            <span className="font-bold text-xl sm:text-2xl text-gray-900">
              ShopStore
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-3 cursor-pointer">
            <MapPin size={20} className="text-gray-700" />
            <div className="flex flex-col text-sm leading-tight">
              <span>Deliver to</span>
              <span className="font-bold">all</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 mx-2 sm:mx-4 relative">
          <input
            type="search"
            placeholder="Search products, categories or brands..."
            className="w-full bg-input rounded-md pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base"
          />
          <Search
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            size={20}
          />
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-gray-700">
          <Link
            href="/profile"
            className="flex items-center gap-2 hover:text-gray-900"
          >
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
            <span className="absolute -top-1 -right-2 bg-destructive text-white text-xs rounded-full px-1">
              3
            </span>
          </Link>
        </nav>

        <button
          className="md:hidden ml-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu mobileMenuOpen={mobileMenuOpen} />
    </header>
  );
};

export default Header;
