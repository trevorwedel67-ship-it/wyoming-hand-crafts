"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card-1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating" },
  { label: "Newest", value: "newest" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)),
      );
    }

    // Category
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return list;
  }, [search, selectedCategory, sort]);

  return (
    <main className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-amber-800 py-12 mb-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Shop All Products</h1>
          <p className="mt-2 text-amber-200">
            {products.length} handcrafted pieces, made in Lagrange, Wyoming
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shrink-0"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground shrink-0">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category filters */}
        {showFilters && (
          <div className="mb-8 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <p className="text-sm font-semibold text-stone-700 mb-3">Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? "bg-amber-800 text-white"
                      : "bg-white border border-amber-200 text-stone-600 hover:border-amber-800 hover:text-amber-800"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active filter chips */}
        {(selectedCategory !== "all" || search) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="gap-1 pr-1">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-1 rounded-full hover:bg-stone-300 p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {search && (
              <Badge variant="secondary" className="gap-1 pr-1">
                &quot;{search}&quot;
                <button
                  onClick={() => setSearch("")}
                  className="ml-1 rounded-full hover:bg-stone-300 p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            <span className="text-sm text-muted-foreground self-center">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
                images={product.images}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
                discount={product.discount}
                freeShipping={product.freeShipping}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-2xl font-semibold text-stone-400">No products found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => { setSearch(""); setSelectedCategory("all"); }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
