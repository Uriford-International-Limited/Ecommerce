"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, ShoppingCart, PlusCircle, Box, Settings, LogOut, Menu, X } from "lucide-react";

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

  const renderMenuItems = () =>
    menuItems.map((item) => {
      const Icon = item.icon;
      const isActive = pathname === item.href;
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setSidebarOpen(false)} 
          className={`
            flex items-center px-4 py-3 rounded-md transition
            ${isActive
              ? "bg-accent text-accent-foreground"
              : "text-gray-800 hover:bg-accent hover:text-accent-foreground"}
          `}>
          <Icon className="mr-3 w-5 h-5 flex-shrink-0" />
          <span className="truncate">{item.name}</span>
        </Link>
      );
    });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white border-r shadow-md">
        <h2 className="text-2xl font-bold mb-8 px-6 sm:px-8 border-b pb-3 truncate">Vendor Panel</h2>
        <nav className="flex-1 px-6 py-4 space-y-3 overflow-y-auto">{renderMenuItems()}</nav>
      </aside>
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 sm:hidden"
            onClick={() => setSidebarOpen(false)}/>
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-md sm:hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Vendor Panel</h2>
              <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-6 py-4 space-y-3 overflow-y-auto">{renderMenuItems()}</nav>
          </aside>
        </>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between p-4 bg-white shadow md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
            className="text-gray-700 focus:outline-none" >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold truncate">Vendor Page</h1>
          <div className="w-6 h-6" /> 
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
