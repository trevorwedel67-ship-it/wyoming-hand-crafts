"use client";

import { useState } from "react";
import { Search, Eye, Package, Truck, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  shipping: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  address: string;
}

const mockOrders: Order[] = [
  {
    id: "#1084",
    customer: "Lisa Monroe",
    email: "lisa@example.com",
    phone: "(303) 555-1234",
    items: [
      { name: "Hand-Carved Cedar Bowl", qty: 1, price: 89.99 },
      { name: "Hand-Thrown Pottery Mug", qty: 1, price: 38.00 },
    ],
    total: 127.99,
    shipping: 0,
    status: "shipped",
    date: "Apr 8, 2026",
    address: "123 Main St, Denver, CO 80201",
  },
  {
    id: "#1083",
    customer: "Tom Kessler",
    email: "tom@example.com",
    phone: "(307) 555-2345",
    items: [{ name: "Wyoming Wildlife Quilt", qty: 1, price: 249.00 }],
    total: 249.00,
    shipping: 0,
    status: "processing",
    date: "Apr 7, 2026",
    address: "456 Oak Ave, Cheyenne, WY 82001",
  },
  {
    id: "#1082",
    customer: "Rebecca Jones",
    email: "rebecca@example.com",
    phone: "(480) 555-3456",
    items: [
      { name: "Turquoise & Silver Earrings", qty: 1, price: 72.00 },
      { name: "Hand-Thrown Pottery Mug", qty: 2, price: 38.00 },
    ],
    total: 148.00,
    shipping: 9.99,
    status: "delivered",
    date: "Apr 5, 2026",
    address: "789 Desert Rd, Scottsdale, AZ 85251",
  },
  {
    id: "#1081",
    customer: "Dan Williams",
    email: "dan@example.com",
    phone: "(307) 555-4567",
    items: [{ name: "Hand-Carved Cedar Bowl", qty: 1, price: 89.99 }],
    total: 89.99,
    shipping: 0,
    status: "delivered",
    date: "Apr 4, 2026",
    address: "321 Prairie Ln, Laramie, WY 82070",
  },
  {
    id: "#1080",
    customer: "Sarah Park",
    email: "sarah@example.com",
    phone: "(801) 555-5678",
    items: [
      { name: "Wood-Burned Wyoming Sign", qty: 1, price: 115.00 },
      { name: "Hand-Stitched Throw Pillow", qty: 1, price: 64.00 },
    ],
    total: 179.00,
    shipping: 0,
    status: "shipped",
    date: "Apr 3, 2026",
    address: "654 Mountain View, Salt Lake City, UT 84101",
  },
  {
    id: "#1079",
    customer: "Mike Johnson",
    email: "mike@example.com",
    phone: "(303) 555-6789",
    items: [{ name: "Leather Western Wallet", qty: 2, price: 59.99 }],
    total: 119.98,
    shipping: 9.99,
    status: "pending",
    date: "Apr 9, 2026",
    address: "987 Park St, Boulder, CO 80301",
  },
];

const statusConfig = {
  pending: { label: "Pending", color: "bg-stone-100 text-stone-600", icon: Package },
  processing: { label: "Processing", color: "bg-amber-100 text-amber-700", icon: Package },
  shipped: { label: "Shipped", color: "bg-blue-100 text-blue-700", icon: Truck },
  delivered: { label: "Delivered", color: "bg-emerald-100 text-emerald-700", icon: CheckCircle },
  cancelled: { label: "Cancelled", color: "bg-rose-100 text-rose-600", icon: XCircle },
};

const allStatuses = ["all", "pending", "processing", "shipped", "delivered", "cancelled"] as const;

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = orders.filter((o) => {
    const matchesSearch =
      !search ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id: string, status: Order["status"]) => {
    setOrders((list) =>
      list.map((o) => (o.id === id ? { ...o, status } : o)),
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Orders</h1>
        <p className="text-sm text-stone-500 mt-0.5">{orders.length} total orders</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {allStatuses.filter((s) => s !== "all").map((status) => {
          const count = orders.filter((o) => o.status === status).length;
          const cfg = statusConfig[status as Order["status"]];
          return (
            <button
              key={status}
              onClick={() => setStatusFilter(status === statusFilter ? "all" : status)}
              className={`rounded-xl border p-3 text-left transition-all ${
                statusFilter === status
                  ? "border-amber-400 bg-amber-50"
                  : "border-stone-200 bg-white hover:border-amber-200"
              }`}
            >
              <p className="text-2xl font-bold text-stone-800">{count}</p>
              <p className={`text-xs font-medium mt-0.5 capitalize inline-flex px-2 py-0.5 rounded-full ${cfg.color}`}>
                {cfg.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {allStatuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                statusFilter === s
                  ? "bg-amber-800 text-white"
                  : "bg-white border border-stone-200 text-stone-600 hover:border-amber-700"
              }`}
            >
              {s === "all" ? "All" : statusConfig[s as Order["status"]].label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders table */}
      <div className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50">
                {["Order", "Customer", "Date", "Total", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-stone-400 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => {
                const cfg = statusConfig[order.status];
                const isExpanded = expandedId === order.id;
                return (
                  <>
                    <tr key={order.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-amber-700">{order.id}</td>
                      <td className="px-5 py-3.5">
                        <div>
                          <p className="font-medium text-stone-800">{order.customer}</p>
                          <p className="text-xs text-stone-400">{order.email}</p>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-stone-500">{order.date}</td>
                      <td className="px-5 py-3.5 font-bold text-stone-800">${order.total.toFixed(2)}</td>
                      <td className="px-5 py-3.5">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.color}`}>
                          {cfg.label}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : order.id)}
                            className="p-1.5 rounded-lg text-stone-400 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                            title="View details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr key={`${order.id}-detail`} className="border-b border-stone-100 bg-amber-50/30">
                        <td colSpan={6} className="px-5 py-5">
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                              <p className="text-xs font-semibold text-stone-400 uppercase mb-2">Items</p>
                              {order.items.map((item) => (
                                <div key={item.name} className="flex justify-between text-sm py-1">
                                  <span className="text-stone-700">{item.name} × {item.qty}</span>
                                  <span className="font-medium text-stone-800">${(item.price * item.qty).toFixed(2)}</span>
                                </div>
                              ))}
                              <div className="border-t border-stone-200 mt-2 pt-2 flex justify-between text-sm font-semibold">
                                <span>Shipping</span>
                                <span>{order.shipping === 0 ? "FREE" : `$${order.shipping.toFixed(2)}`}</span>
                              </div>
                              <div className="flex justify-between text-sm font-bold text-amber-800 mt-1">
                                <span>Total</span>
                                <span>${order.total.toFixed(2)}</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-stone-400 uppercase mb-2">Customer</p>
                              <p className="text-sm text-stone-700">{order.customer}</p>
                              <p className="text-sm text-stone-500">{order.email}</p>
                              <p className="text-sm text-stone-500">{order.phone}</p>
                              <p className="text-sm text-stone-500 mt-2">{order.address}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-stone-400 uppercase mb-2">Update Status</p>
                              <div className="flex flex-wrap gap-2">
                                {(Object.keys(statusConfig) as Order["status"][]).map((s) => (
                                  <Button
                                    key={s}
                                    size="sm"
                                    variant={order.status === s ? "default" : "outline"}
                                    className="text-xs capitalize"
                                    onClick={() => updateStatus(order.id, s)}
                                  >
                                    {statusConfig[s].label}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-stone-400">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
