"use client";

import { useState } from "react";
import { Search, Mail, Phone, Users } from "lucide-react";
import { Input } from "@/components/ui/input";

const mockCustomers = [
  { id: "1", name: "Lisa Monroe", email: "lisa@example.com", phone: "(303) 555-1234", location: "Denver, CO", orders: 4, totalSpent: 512.94, joined: "Jan 2026", lastOrder: "Apr 8, 2026" },
  { id: "2", name: "Tom Kessler", email: "tom@example.com", phone: "(307) 555-2345", location: "Cheyenne, WY", orders: 2, totalSpent: 338.99, joined: "Feb 2026", lastOrder: "Apr 7, 2026" },
  { id: "3", name: "Rebecca Jones", email: "rebecca@example.com", phone: "(480) 555-3456", location: "Scottsdale, AZ", orders: 3, totalSpent: 264.97, joined: "Mar 2026", lastOrder: "Apr 5, 2026" },
  { id: "4", name: "Dan Williams", email: "dan@example.com", phone: "(307) 555-4567", location: "Laramie, WY", orders: 6, totalSpent: 789.44, joined: "Nov 2025", lastOrder: "Apr 4, 2026" },
  { id: "5", name: "Sarah Park", email: "sarah@example.com", phone: "(801) 555-5678", location: "Salt Lake City, UT", orders: 2, totalSpent: 358.00, joined: "Mar 2026", lastOrder: "Apr 3, 2026" },
  { id: "6", name: "Mike Johnson", email: "mike@example.com", phone: "(303) 555-6789", location: "Boulder, CO", orders: 1, totalSpent: 119.98, joined: "Apr 2026", lastOrder: "Apr 9, 2026" },
  { id: "7", name: "Amy Chen", email: "amy@example.com", phone: "(720) 555-7890", location: "Fort Collins, CO", orders: 5, totalSpent: 645.95, joined: "Dec 2025", lastOrder: "Mar 28, 2026" },
  { id: "8", name: "James Miller", email: "james@example.com", phone: "(307) 555-8901", location: "Casper, WY", orders: 3, totalSpent: 420.00, joined: "Jan 2026", lastOrder: "Mar 20, 2026" },
];

export default function AdminCustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = mockCustomers.filter(
    (c) =>
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase()),
  );

  const totalRevenue = mockCustomers.reduce((s, c) => s + c.totalSpent, 0);
  const avgOrderValue = totalRevenue / mockCustomers.reduce((s, c) => s + c.orders, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Customers</h1>
        <p className="text-sm text-stone-500 mt-0.5">{mockCustomers.length} registered customers</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Total Customers", value: mockCustomers.length, icon: Users, color: "text-violet-600", bg: "bg-violet-50" },
          { label: "Total Revenue", value: `$${totalRevenue.toFixed(2)}`, icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Avg Order Value", value: `$${avgOrderValue.toFixed(2)}`, icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-stone-500">{s.label}</p>
            <p className="text-2xl font-bold text-stone-900 mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50">
                {["Customer", "Location", "Orders", "Total Spent", "Last Order", "Contact"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-stone-400 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((customer) => (
                <tr key={customer.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-sm font-bold shrink-0">
                        {customer.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-stone-800">{customer.name}</p>
                        <p className="text-xs text-stone-400">Since {customer.joined}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-stone-500">{customer.location}</td>
                  <td className="px-5 py-3.5 font-semibold text-stone-700">{customer.orders}</td>
                  <td className="px-5 py-3.5 font-bold text-amber-700">${customer.totalSpent.toFixed(2)}</td>
                  <td className="px-5 py-3.5 text-stone-400">{customer.lastOrder}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${customer.email}`}
                        className="p-1.5 rounded-lg text-stone-400 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                        title={customer.email}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${customer.phone}`}
                        className="p-1.5 rounded-lg text-stone-400 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                        title={customer.phone}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-stone-400">
                    No customers found
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
