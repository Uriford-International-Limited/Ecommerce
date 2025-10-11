"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  ShoppingCart,
  PlusCircle,
  Box,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "/vendors/dashboard", icon: Home },
    { name: "Products", href: "/vendors/dashboard/products", icon: ShoppingCart },
    { name: "Add Product", href: "/vendors/dashboard/addproduct", icon: PlusCircle },
    { name: "Orders", href: "/vendors/dashboard/orders", icon: Box },
    { name: "Settings", href: "/vendors/dashboard/settings", icon: Settings },
    { name: "Exit", href: "/", icon: LogOut },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="sm:hidden flex justify-between items-center border-b p-4 shadow-md">
        <h2 className="text-xl font-bold text-gray-800">Vendor Panel</h2>
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-700 focus:outline-none"
          aria-label="Open sidebar">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-md transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          sm:translate-x-0 sm:static sm:flex sm:flex-col
        `}>
        <div className="sm:hidden flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-700 focus:outline-none"
            aria-label="Close sidebar">
            <X className="w-6 h-6" />
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-8 px-6 sm:px-8 border-b pb-3">
          Vendor Panel
        </h2>

        <nav className="flex-1 px-6 py-4 space-y-3 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center px-4 py-3 rounded-md transition
                  ${isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-gray-800 hover:bg-accent"}
                `}>
                <Icon className="mr-3 w-5 h-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"/>
      )}
      <div className="flex-1 p-4 min-w-0">{children}</div>
    </div>
  );
}
