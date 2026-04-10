"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus, Search, Edit, Trash2, Eye, Package,
  X, Check, Loader2,
} from "lucide-react";
import { products as initialProducts, Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function AdminProductsPage() {
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    originalPrice: "",
    category: "",
    description: "",
    longDescription: "",
    inStock: true,
    stockCount: "10",
    freeShipping: false,
    isBestSeller: false,
    isNew: false,
    discount: "0",
    image: "",
  });

  const filtered = productList.filter(
    (p) =>
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()),
  );

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      originalPrice: "",
      category: "",
      description: "",
      longDescription: "",
      inStock: true,
      stockCount: "10",
      freeShipping: false,
      isBestSeller: false,
      isNew: false,
      discount: "0",
      image: "",
    });
    setEditingProduct(null);
  };

  const openEdit = (product: Product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      price: String(product.price),
      originalPrice: product.originalPrice ? String(product.originalPrice) : "",
      category: product.category,
      description: product.description,
      longDescription: product.longDescription,
      inStock: product.inStock,
      stockCount: String(product.stockCount),
      freeShipping: product.freeShipping,
      isBestSeller: product.isBestSeller,
      isNew: product.isNew,
      discount: String(product.discount),
      image: product.images[0] ?? "",
    });
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  const handleSave = () => {
    if (!form.name || !form.price || !form.category) return;
    setSaving(true);
    setTimeout(() => {
      if (editingProduct) {
        setProductList((list) =>
          list.map((p) =>
            p.id === editingProduct.id
              ? {
                  ...p,
                  name: form.name,
                  price: parseFloat(form.price),
                  originalPrice: form.originalPrice ? parseFloat(form.originalPrice) : undefined,
                  category: form.category,
                  description: form.description,
                  longDescription: form.longDescription,
                  inStock: form.inStock,
                  stockCount: parseInt(form.stockCount),
                  freeShipping: form.freeShipping,
                  isBestSeller: form.isBestSeller,
                  isNew: form.isNew,
                  discount: parseInt(form.discount),
                  images: form.image ? [form.image, ...p.images.slice(1)] : p.images,
                }
              : p,
          ),
        );
      } else {
        const newProduct: Product = {
          id: String(Date.now()),
          slug: form.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
          name: form.name,
          price: parseFloat(form.price),
          originalPrice: form.originalPrice ? parseFloat(form.originalPrice) : undefined,
          category: form.category,
          description: form.description,
          longDescription: form.longDescription || form.description,
          images: form.image ? [form.image] : ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"],
          rating: 0,
          reviewCount: 0,
          inStock: form.inStock,
          stockCount: parseInt(form.stockCount),
          freeShipping: form.freeShipping,
          isBestSeller: form.isBestSeller,
          isNew: form.isNew,
          discount: parseInt(form.discount),
          materials: [],
          tags: [form.category.toLowerCase()],
        };
        setProductList((list) => [newProduct, ...list]);
      }
      setSaving(false);
      setShowForm(false);
      resetForm();
    }, 600);
  };

  const handleDelete = (id: string) => {
    setProductList((list) => list.filter((p) => p.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Products</h1>
          <p className="text-sm text-stone-500 mt-0.5">{productList.length} total products</p>
        </div>
        <Button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="gap-2 btn-shine"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Add/Edit form */}
      {showForm && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-stone-900 text-lg">
              {editingProduct ? "Edit Product" : "New Product"}
            </h2>
            <button onClick={() => { setShowForm(false); resetForm(); }} className="text-stone-400 hover:text-stone-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label>Product Name *</Label>
              <Input className="mt-1 bg-white" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <Label>Category *</Label>
              <Input className="mt-1 bg-white" placeholder="Wood Art, Quilts..." value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
            </div>
            <div>
              <Label>Price ($) *</Label>
              <Input type="number" step="0.01" className="mt-1 bg-white" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            </div>
            <div>
              <Label>Original Price ($)</Label>
              <Input type="number" step="0.01" className="mt-1 bg-white" placeholder="For sale pricing" value={form.originalPrice} onChange={(e) => setForm({ ...form, originalPrice: e.target.value })} />
            </div>
            <div>
              <Label>Stock Count</Label>
              <Input type="number" className="mt-1 bg-white" value={form.stockCount} onChange={(e) => setForm({ ...form, stockCount: e.target.value })} />
            </div>
            <div>
              <Label>Discount (%)</Label>
              <Input type="number" className="mt-1 bg-white" value={form.discount} onChange={(e) => setForm({ ...form, discount: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <Label>Image URL</Label>
              <Input className="mt-1 bg-white" placeholder="https://..." value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
            </div>
            <div>
              <Label>Short Description</Label>
              <Input className="mt-1 bg-white" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <Label>Long Description</Label>
              <Textarea rows={3} className="mt-1 bg-white" value={form.longDescription} onChange={(e) => setForm({ ...form, longDescription: e.target.value })} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { key: "inStock", label: "In Stock" },
              { key: "freeShipping", label: "Free Shipping" },
              { key: "isBestSeller", label: "Best Seller" },
              { key: "isNew", label: "New Arrival" },
            ].map((toggle) => (
              <label key={toggle.key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-amber-700"
                  checked={form[toggle.key as keyof typeof form] as boolean}
                  onChange={(e) => setForm({ ...form, [toggle.key]: e.target.checked })}
                />
                <span className="text-sm text-stone-700">{toggle.label}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-3">
            <Button onClick={handleSave} className="btn-shine" disabled={saving || !form.name || !form.price}>
              {saving ? <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Saving...</> : <><Check className="mr-2 w-4 h-4" />Save Product</>}
            </Button>
            <Button variant="outline" onClick={() => { setShowForm(false); resetForm(); }}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Confirm delete dialog */}
      {deleteId && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 flex items-center justify-between">
          <p className="text-sm font-medium text-rose-700">
            Delete &quot;{productList.find((p) => p.id === deleteId)?.name}&quot;? This cannot be undone.
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteId)}>Delete</Button>
            <Button size="sm" variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
          </div>
        </div>
      )}

      {/* Products table */}
      <div className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50">
                {["Product", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-stone-400 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden bg-muted shrink-0">
                        <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-stone-800">{p.name}</p>
                        <p className="text-xs text-stone-400 truncate max-w-[180px]">{p.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant="outline" className="text-xs text-amber-700 border-amber-200">
                      {p.category}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5">
                    <div>
                      <span className="font-bold text-stone-800">${p.price.toFixed(2)}</span>
                      {p.originalPrice && (
                        <span className="text-xs text-stone-400 line-through ml-1.5">${p.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`font-semibold ${p.stockCount <= 3 ? "text-rose-500" : p.stockCount <= 8 ? "text-amber-500" : "text-emerald-600"}`}>
                      {p.stockCount}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {p.inStock ? (
                        <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700">In Stock</span>
                      ) : (
                        <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-rose-100 text-rose-700">Out of Stock</span>
                      )}
                      {p.isNew && <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700">New</span>}
                      {p.isBestSeller && <span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700">Best Seller</span>}
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/shop/${p.slug}`}
                        className="p-1.5 rounded-lg text-stone-400 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                        title="View on site"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => openEdit(p)}
                        className="p-1.5 rounded-lg text-stone-400 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDeleteId(p.id)}
                        className="p-1.5 rounded-lg text-stone-400 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-stone-400">
                    <Package className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    No products found
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
