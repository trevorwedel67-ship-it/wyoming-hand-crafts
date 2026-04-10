import { TrendingUp, DollarSign, ShoppingBag, Users } from "lucide-react";

const monthlyData = [
  { month: "Nov", revenue: 2100, orders: 18 },
  { month: "Dec", revenue: 4800, orders: 42 },
  { month: "Jan", revenue: 3200, orders: 28 },
  { month: "Feb", revenue: 2900, orders: 24 },
  { month: "Mar", revenue: 4100, orders: 36 },
  { month: "Apr", revenue: 2847, orders: 22 },
];

const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue));

const topProducts = [
  { name: "Wyoming Wildlife Quilt", revenue: 1743, units: 7 },
  { name: "Antler Coat Rack", revenue: 1295, units: 7 },
  { name: "Hand-Carved Cedar Bowl", revenue: 1080, units: 12 },
  { name: "Wood-Burned Wyoming Sign", revenue: 805, units: 7 },
  { name: "Turquoise & Silver Earrings", revenue: 720, units: 10 },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Analytics</h1>
        <p className="text-sm text-stone-500 mt-0.5">Sales performance overview</p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 gap-5 xl:grid-cols-4">
        {[
          { label: "Total Revenue (YTD)", value: "$19,947", change: "+23%", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Total Orders", value: "170", change: "+15%", icon: ShoppingBag, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Avg Order Value", value: "$117.34", change: "+6%", icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Unique Customers", value: "247", change: "+8%", icon: Users, color: "text-violet-600", bg: "bg-violet-50" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-stone-400">{kpi.label}</p>
                <p className="text-2xl font-bold text-stone-900 mt-1">{kpi.value}</p>
              </div>
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${kpi.bg} ${kpi.color}`}>
                <kpi.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-emerald-600 mt-3 font-medium">{kpi.change} vs last period</p>
          </div>
        ))}
      </div>

      {/* Revenue chart */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-stone-800 mb-6">Monthly Revenue</h2>
        <div className="flex items-end gap-4 h-40">
          {monthlyData.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-stone-500">${(d.revenue / 1000).toFixed(1)}k</span>
              <div
                className="w-full rounded-t-lg bg-amber-500 hover:bg-amber-600 transition-colors cursor-default"
                style={{ height: `${(d.revenue / maxRevenue) * 100}%`, minHeight: "4px" }}
                title={`$${d.revenue} — ${d.orders} orders`}
              />
              <span className="text-xs text-stone-400">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top products */}
      <div className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-stone-100">
          <h2 className="font-semibold text-stone-800">Top Products by Revenue</h2>
        </div>
        <div className="p-6 space-y-4">
          {topProducts.map((p, i) => {
            const pct = (p.revenue / topProducts[0].revenue) * 100;
            return (
              <div key={p.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-300 font-bold text-xs w-4">{i + 1}</span>
                    <span className="font-medium text-stone-700">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <span className="text-stone-400 text-xs">{p.units} sold</span>
                    <span className="font-bold text-amber-700 w-16 text-right">${p.revenue}</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-500 transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
