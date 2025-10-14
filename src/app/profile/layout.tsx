"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  ClipboardList,
  Inbox,
  UserPen,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const items = [
  { title: "Dashboard", url: "/profile", icon: LayoutDashboard },
  { title: "Orders", url: "/profile/orders", icon: ShoppingCart },
  { title: "Wishlist", url: "/profile/wishlist", icon: ClipboardList },
  { title: "Inbox", url: "/profile/inbox", icon: Inbox },
  { title: "Account Details", url: "/profile/accountdetails", icon: UserPen },
  { title: "Log out", url: "/profile/logout", icon: LogOut },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="relative">
      <SidebarProvider>
        <div className="flex container">
          {/* User Dashboard Sidebar */}
          <Sidebar className="absolute top-0 left-0">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel className="text-3xl mb-4 mx-auto">Profile</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-1.5 p-3">
                    {items.map((item) => {
                      const isDashboard = item.url === "/profile";
                      const isActive = isDashboard
                        ? pathname === item.url
                        : pathname.startsWith(item.url);

                      const isLogOut = item.title === "Log out";

                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            {isLogOut ? (
                              //Log Out
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <button className="flex items-center gap-2 p-2 rounded-md w-full text-left transition-colors hover:bg-gray-100 text-muted">
                                    <item.icon />
                                    <span>{item.title}</span>
                                  </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      Are you absolutely sure?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This action cannot be undone. This will
                                      permanently log you out.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction onClick={() => {}}>
                                      Log out
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            ) : (
                              <Link
                                href={item.url}
                                className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                                  isActive
                                    ? "bg-border font-semibold text-muted"
                                    : "hover:bg-input text-muted"
                                }`}
                              >
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          {/* Main Content */}
          <main className="flex-1 p-3 lg:p-6">
            <SidebarTrigger />
            {children}
          </main>
        </div>
      </SidebarProvider>
    </main>
  );
}
