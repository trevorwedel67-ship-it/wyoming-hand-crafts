"use client";

import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, itemCount, clearCart } = useCart();

  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-2xl px-6 text-center py-24">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-amber-50 flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-amber-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-stone-900">Your cart is empty</h1>
          <p className="mt-3 text-muted-foreground">
            Looks like you haven&apos;t added anything yet. Explore our handmade collection!
          </p>
          <Button size="lg" className="mt-8 btn-shine rounded-full" asChild>
            <Link href="/shop">Browse the Shop</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-stone-900">
            Shopping Cart <span className="text-muted-foreground text-xl font-normal">({itemCount} items)</span>
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-muted-foreground hover:text-rose-500 transition-colors"
          >
            Clear cart
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm"
              >
                <Link href={`/shop/${item.slug}`} className="shrink-0">
                  <div className="h-24 w-24 rounded-xl overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-2">
                    <Link href={`/shop/${item.slug}`} className="font-semibold text-stone-800 hover:text-amber-800 transition-colors">
                      {item.name}
                    </Link>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-stone-400 hover:text-rose-500 transition-colors shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity control */}
                    <div className="flex items-center border border-input rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2.5 py-1.5 text-stone-500 hover:text-stone-800 hover:bg-amber-50 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 py-1.5 text-sm font-semibold min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2.5 py-1.5 text-stone-500 hover:text-stone-800 hover:bg-amber-50 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="font-bold text-amber-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm sticky top-28">
              <h2 className="text-lg font-bold text-stone-900 mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-emerald-600 font-medium" : ""}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                    Add ${(75 - subtotal).toFixed(2)} more to get free shipping!
                  </p>
                )}
                <div className="flex justify-between text-stone-600">
                  <span>Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-base font-bold text-stone-900">
                <span>Total</span>
                <span className="text-amber-800">${total.toFixed(2)}</span>
              </div>

              <Button size="lg" className="w-full mt-6 btn-shine" asChild>
                <Link href="/checkout">
                  Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <div className="mt-4 text-center">
                <Link
                  href="/shop"
                  className="text-sm text-amber-800 hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Secure checkout powered by Stripe
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
