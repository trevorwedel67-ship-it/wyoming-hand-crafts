"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import {
  Star, ChevronLeft, ChevronRight, ShoppingCart, Heart,
  Truck, RotateCcw, Shield, Check, Loader2, ArrowLeft,
} from "lucide-react";
import { getProductBySlug, products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ui/product-card-1";
import { useCart } from "@/lib/cart-context";

function ProductDetailContent({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const [imgIndex, setImgIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    if (adding || added) return;
    setAdding(true);
    setTimeout(() => {
      for (let i = 0; i < qty; i++) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          slug: product.slug,
        });
      }
      setAdding(false);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }, 600);
  };

  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-amber-800">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-amber-800">Shop</Link>
          <span>/</span>
          <span className="text-stone-800">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Images */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <img
                src={product.images[imgIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIndex((i) => (i - 1 + product.images.length) % product.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setImgIndex((i) => (i + 1) % product.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`relative h-20 w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === imgIndex ? "border-amber-800" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className="text-amber-700 border-amber-300">
                {product.category}
              </Badge>
              {product.isNew && <Badge className="bg-blue-500 hover:bg-blue-500/90">New</Badge>}
              {product.isBestSeller && <Badge className="bg-amber-600 hover:bg-amber-600/90">Best Seller</Badge>}
              {product.discount > 0 && (
                <Badge className="bg-rose-500 hover:bg-rose-500/90">-{product.discount}%</Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold text-stone-900 md:text-4xl">{product.name}</h1>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-500 text-amber-500"
                        : "text-stone-300"
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm font-semibold">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-amber-800">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount > 0 && (
                <span className="text-sm font-semibold text-rose-500">
                  Save ${((product.originalPrice ?? product.price) - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <p className="mt-6 text-base leading-relaxed text-stone-600">
              {product.longDescription}
            </p>

            {/* Materials + Dimensions */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-stone-700 mb-1">Materials</p>
                <ul className="space-y-0.5">
                  {product.materials.map((m) => (
                    <li key={m} className="text-stone-500">{m}</li>
                  ))}
                </ul>
              </div>
              {product.dimensions && (
                <div>
                  <p className="font-semibold text-stone-700 mb-1">Dimensions</p>
                  <p className="text-stone-500">{product.dimensions}</p>
                </div>
              )}
            </div>

            {/* Stock */}
            <div className="mt-6">
              {product.inStock ? (
                <p className="text-sm font-medium text-emerald-600 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  In stock ({product.stockCount} available)
                </p>
              ) : (
                <p className="text-sm font-medium text-rose-500">Out of stock</p>
              )}
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-stone-700">Qty:</label>
                <div className="flex items-center border border-input rounded-md">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-2 text-stone-500 hover:text-stone-800 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold min-w-[2rem] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(Math.min(product.stockCount, qty + 1))}
                    className="px-3 py-2 text-stone-500 hover:text-stone-800 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 btn-shine"
                  onClick={handleAdd}
                  disabled={!product.inStock || adding || added}
                >
                  {adding ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Adding...</>
                  ) : added ? (
                    <><Check className="mr-2 h-4 w-4" />Added!</>
                  ) : (
                    <><ShoppingCart className="mr-2 h-4 w-4" />Add to Cart</>
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-rose-500 border-rose-300" : ""}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-rose-500" : ""}`} />
                </Button>
              </div>

              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/checkout">Buy Now →</Link>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-amber-100 pt-6">
              {[
                { icon: <Truck className="w-4 h-4" />, label: product.freeShipping ? "Free Shipping" : "Ships in 3-5 days" },
                { icon: <RotateCcw className="w-4 h-4" />, label: "30-day Returns" },
                { icon: <Shield className="w-4 h-4" />, label: "Secure Checkout" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1 text-center">
                  <div className="text-amber-700">{s.icon}</div>
                  <span className="text-xs text-stone-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  slug={p.slug}
                  name={p.name}
                  price={p.price}
                  originalPrice={p.originalPrice}
                  rating={p.rating}
                  reviewCount={p.reviewCount}
                  images={p.images}
                  isNew={p.isNew}
                  isBestSeller={p.isBestSeller}
                  discount={p.discount}
                  freeShipping={p.freeShipping}
                  category={p.category}
                />
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-amber-800 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return <ProductDetailContent slug={slug} />;
}
