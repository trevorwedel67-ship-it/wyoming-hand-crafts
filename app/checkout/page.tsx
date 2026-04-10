"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock, Check, Loader2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type Step = "info" | "payment" | "confirmation";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("info");
  const [loading, setLoading] = useState(false);

  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Stripe integration placeholder — replace with real Stripe.js
    setTimeout(() => {
      setLoading(false);
      setStep("confirmation");
      clearCart();
      window.scrollTo(0, 0);
    }, 1800);
  };

  if (step === "confirmation") {
    return (
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-lg px-6 text-center py-16">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
            <Check className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-stone-900">Order Confirmed!</h1>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Thank you for your order, {info.firstName}! We&apos;ve sent a confirmation to{" "}
            <strong>{info.email}</strong>. Your handcrafted items will be lovingly packed and
            shipped within 2–3 business days.
          </p>
          <p className="mt-4 text-sm text-stone-500">
            Questions? Reach us at{" "}
            <a href="tel:+13075346506" className="text-amber-700 hover:underline">(307) 534-6506</a>
            {" "}or{" "}
            <a href="mailto:sanderssalesofwyo@gmail.com" className="text-amber-700 hover:underline">
              sanderssalesofwyo@gmail.com
            </a>
          </p>
          <div className="mt-10 flex flex-col gap-3">
            <Button size="lg" className="w-full btn-shine" asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link href="/">Go to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/cart"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-amber-800 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </Link>

        <h1 className="text-3xl font-bold text-stone-900 mb-8">Checkout</h1>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-10">
          {(["info", "payment"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  step === s
                    ? "bg-amber-800 text-white"
                    : step === "payment" && s === "info"
                    ? "bg-emerald-500 text-white"
                    : "bg-stone-200 text-stone-500"
                }`}
              >
                {step === "payment" && s === "info" ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-sm font-medium capitalize ${step === s ? "text-amber-800" : "text-stone-400"}`}>
                {s === "info" ? "Your Info" : "Payment"}
              </span>
              {i < 1 && <div className="mx-2 h-px w-8 bg-stone-200" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === "info" && (
              <form onSubmit={handleInfoSubmit} className="space-y-6">
                <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-stone-900 mb-5">Contact Information</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required className="mt-1" value={info.firstName}
                        onChange={(e) => setInfo({ ...info, firstName: e.target.value })} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required className="mt-1" value={info.lastName}
                        onChange={(e) => setInfo({ ...info, lastName: e.target.value })} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required className="mt-1" value={info.email}
                        onChange={(e) => setInfo({ ...info, email: e.target.value })} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" className="mt-1" value={info.phone}
                        onChange={(e) => setInfo({ ...info, phone: e.target.value })} />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-stone-900 mb-5">Shipping Address</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" required className="mt-1" value={info.address}
                        onChange={(e) => setInfo({ ...info, address: e.target.value })} />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="sm:col-span-1">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required className="mt-1" value={info.city}
                          onChange={(e) => setInfo({ ...info, city: e.target.value })} />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" required className="mt-1" maxLength={2} placeholder="WY" value={info.state}
                          onChange={(e) => setInfo({ ...info, state: e.target.value })} />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" required className="mt-1" value={info.zip}
                          onChange={(e) => setInfo({ ...info, zip: e.target.value })} />
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full btn-shine">
                  Continue to Payment →
                </Button>
              </form>
            )}

            {step === "payment" && (
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-semibold text-stone-900">Payment Details</h2>
                    <div className="flex items-center gap-1.5 text-xs text-stone-400">
                      <Lock className="w-3.5 h-3.5" />
                      Secured by Stripe
                    </div>
                  </div>

                  {/* Stripe placeholder UI */}
                  <div className="rounded-lg border border-dashed border-amber-300 bg-amber-50/50 p-6 text-center mb-5">
                    <CreditCard className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-stone-700">Stripe Payment Form</p>
                    <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                      Stripe Elements will be mounted here. Configure your Stripe publishable key
                      and add <code className="bg-amber-100 px-1 rounded">@stripe/stripe-js</code>{" "}
                      and <code className="bg-amber-100 px-1 rounded">@stripe/react-stripe-js</code> to enable live payments.
                    </p>
                  </div>

                  {/* Demo card fields */}
                  <div className="space-y-4">
                    <div>
                      <Label>Card Number</Label>
                      <Input className="mt-1" placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Expiry</Label>
                        <Input className="mt-1" placeholder="MM / YY" />
                      </div>
                      <div>
                        <Label>CVC</Label>
                        <Input className="mt-1" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label>Name on Card</Label>
                      <Input className="mt-1" placeholder="Full name" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button type="submit" size="lg" className="w-full btn-shine" disabled={loading}>
                    {loading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
                    ) : (
                      <><Lock className="mr-2 h-4 w-4" />Pay ${total.toFixed(2)}</>
                    )}
                  </Button>
                  <button
                    type="button"
                    onClick={() => setStep("info")}
                    className="text-sm text-muted-foreground hover:text-amber-800 transition-colors"
                  >
                    ← Back to information
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm sticky top-28">
              <h2 className="text-base font-semibold text-stone-900 mb-4">Your Order</h2>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative h-14 w-14 rounded-lg overflow-hidden shrink-0 bg-muted">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-800 text-[10px] font-bold text-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-800 truncate">{item.name}</p>
                    </div>
                    <span className="text-sm font-semibold shrink-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-stone-500">
                  <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-emerald-600" : ""}>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Tax</span><span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-stone-900">
                  <span>Total</span>
                  <span className="text-amber-800">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
