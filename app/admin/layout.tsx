"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Package, ShoppingBag, Users,
  Settings, Mountain, LogOut, BarChart3,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-stone-100">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-stone-900 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-6 py-5 border-b border-stone-800">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-700 text-white">
            <Mountain className="w-4 h-4" />
          </div>
          <div className="leading-none">
            <p className="text-sm font-bold text-white">WHC Admin</p>
            <p className="text-xs text-stone-400">Wyoming Hand Crafts</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-amber-700 text-white"
                    : "text-stone-400 hover:bg-stone-800 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-stone-800">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-stone-400 hover:bg-stone-800 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="bg-white border-b border-stone-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-stone-900">
              {navItems.find((n) =>
                n.exact ? pathname === n.href : pathname.startsWith(n.href),
              )?.label ?? "Admin"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <div className="h-8 w-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">
                WHC
              </div>
              <span className="hidden sm:block">Admin</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
