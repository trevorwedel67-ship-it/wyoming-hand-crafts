"use client";

import Link from "next/link";
import {
  DollarSign, ShoppingBag, Package, Users,
  TrendingUp, ArrowUpRight, Eye, AlertCircle,
} from "lucide-react";
import { products } from "@/lib/products";

const stats = [
  {
    label: "Total Revenue",
    value: "$12,847.00",
    change: "+18.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Orders This Month",
    value: "84",
    change: "+12 this week",
    trend: "up",
    icon: ShoppingBag,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Active Products",
    value: String(products.length),
    change: "All in stock",
    trend: "neutral",
    icon: Package,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Customers",
    value: "247",
    change: "+8 this week",
    trend: "up",
    icon: Users,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const recentOrders = [
  { id: "#1084", customer: "Lisa Monroe", items: 2, total: 178.98, status: "shipped", date: "Apr 8, 2026" },
  { id: "#1083", customer: "Tom Kessler", items: 1, total: 249.00, status: "processing", date: "Apr 7, 2026" },
  { id: "#1082", customer: "Rebecca Jones", items: 3, total: 164.97, status: "delivered", date: "Apr 5, 2026" },
  { id: "#1081", customer: "Dan Williams", items: 1, total: 89.99, status: "delivered", date: "Apr 4, 2026" },
  { id: "#1080", customer: "Sarah Park", items: 2, total: 207.00, status: "shipped", date: "Apr 3, 2026" },
];

const statusStyles: Record<string, string> = {
  processing: "bg-amber-100 text-amber-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-rose-100 text-rose-700",
};

const lowStockProducts = products.filter((p) => p.stockCount <= 3);

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-stone-500">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-stone-900">{stat.value}</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1">
              {stat.trend === "up" && <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />}
              <span className="text-xs text-stone-400">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent orders */}
        <div className="lg:col-span-2 rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
            <h2 className="font-semibold text-stone-800">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="flex items-center gap-1 text-xs font-medium text-amber-700 hover:underline"
            >
              View all <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-100">
                  {["Order", "Customer", "Items", "Total", "Status", "Date"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-stone-400 uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-amber-700">{order.id}</td>
                    <td className="px-6 py-3.5 text-stone-700">{order.customer}</td>
                    <td className="px-6 py-3.5 text-stone-500">{order.items}</td>
                    <td className="px-6 py-3.5 font-semibold text-stone-800">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-stone-400">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low stock + Quick links */}
        <div className="space-y-5">
          {/* Low stock alert */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-amber-200">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <h2 className="font-semibold text-stone-800 text-sm">Low Stock Alert</h2>
            </div>
            <div className="p-4 space-y-3">
              {lowStockProducts.map((p) => (
                <div key={p.id} className="flex items-center justify-between text-sm">
                  <span className="text-stone-700 truncate flex-1">{p.name}</span>
                  <span className="font-bold text-rose-600 ml-2">{p.stockCount} left</span>
                </div>
              ))}
              {lowStockProducts.length === 0 && (
                <p className="text-sm text-stone-400 text-center py-2">All products well-stocked</p>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div className="rounded-2xl border border-stone-200 bg-white shadow-sm p-5">
            <h2 className="font-semibold text-stone-800 mb-4 text-sm">Quick Actions</h2>
            <div className="space-y-2">
              {[
                { label: "Add New Product", href: "/admin/products" },
                { label: "View All Orders", href: "/admin/orders" },
                { label: "Browse Customers", href: "/admin/customers" },
                { label: "Visit Storefront", href: "/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-stone-600 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="rounded-2xl border border-stone-200 bg-white shadow-sm p-5 text-sm">
            <h2 className="font-semibold text-stone-800 mb-3">Store Contact</h2>
            <div className="space-y-1.5 text-stone-500">
              <p>📍 Lagrange, Wyoming</p>
              <p>📞 (307) 534-6506</p>
              <p className="break-all">✉️ sanderssalesofwyo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top products */}
      <div className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
          <h2 className="font-semibold text-stone-800">Product Catalog</h2>
          <Link
            href="/admin/products"
            className="flex items-center gap-1 text-xs font-medium text-amber-700 hover:underline"
          >
            Manage <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100">
                {["Product", "Category", "Price", "Stock", "Rating", ""].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-stone-400 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden bg-muted shrink-0">
                        <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover" />
                      </div>
                      <span className="font-medium text-stone-800">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-stone-500">{p.category}</td>
                  <td className="px-6 py-3.5 font-semibold text-stone-800">${p.price.toFixed(2)}</td>
                  <td className="px-6 py-3.5">
                    <span className={`font-medium ${p.stockCount <= 3 ? "text-rose-500" : "text-emerald-600"}`}>
                      {p.stockCount}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-stone-500">⭐ {p.rating}</td>
                  <td className="px-6 py-3.5">
                    <Link
                      href={`/shop/${p.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-amber-700 hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
