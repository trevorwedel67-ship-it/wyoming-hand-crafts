"use client";

import { useState } from "react";
import { Save, Check, CreditCard, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [store, setStore] = useState({
    name: "Wyoming Hand Crafts",
    tagline: "Handmade in Lagrange, Wyoming",
    email: "sanderssalesofwyo@gmail.com",
    phone: "(307) 534-6506",
    address: "Lagrange, Wyoming 82221",
    freeShippingThreshold: "75",
    taxRate: "7",
    returnPolicy: "30-day hassle-free returns on all non-custom items.",
  });

  const [stripe, setStripe] = useState({
    publishableKey: "",
    webhookSecret: "",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Store Settings</h1>
        <p className="text-sm text-stone-500 mt-0.5">Manage your store details and integrations</p>
      </div>

      {/* Store info */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-5">
        <h2 className="font-semibold text-stone-800 text-lg">Store Information</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label>Store Name</Label>
            <Input className="mt-1" value={store.name}
              onChange={(e) => setStore({ ...store, name: e.target.value })} />
          </div>
          <div>
            <Label>Tagline</Label>
            <Input className="mt-1" value={store.tagline}
              onChange={(e) => setStore({ ...store, tagline: e.target.value })} />
          </div>
          <div>
            <Label>Contact Email</Label>
            <Input type="email" className="mt-1" value={store.email}
              onChange={(e) => setStore({ ...store, email: e.target.value })} />
          </div>
          <div>
            <Label>Contact Phone</Label>
            <Input type="tel" className="mt-1" value={store.phone}
              onChange={(e) => setStore({ ...store, phone: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <Label>Address</Label>
            <Input className="mt-1" value={store.address}
              onChange={(e) => setStore({ ...store, address: e.target.value })} />
          </div>
        </div>
      </div>

      {/* Shipping & Tax */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="font-semibold text-stone-800 text-lg">Shipping & Tax</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label>Free Shipping Threshold ($)</Label>
            <Input type="number" className="mt-1" value={store.freeShippingThreshold}
              onChange={(e) => setStore({ ...store, freeShippingThreshold: e.target.value })} />
            <p className="text-xs text-stone-400 mt-1">Orders above this amount get free shipping</p>
          </div>
          <div>
            <Label>Tax Rate (%)</Label>
            <Input type="number" step="0.1" className="mt-1" value={store.taxRate}
              onChange={(e) => setStore({ ...store, taxRate: e.target.value })} />
          </div>
        </div>
        <div>
          <Label>Return Policy</Label>
          <Textarea className="mt-1" rows={3} value={store.returnPolicy}
            onChange={(e) => setStore({ ...store, returnPolicy: e.target.value })} />
        </div>
      </div>

      {/* Stripe */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-amber-700" />
          <h2 className="font-semibold text-stone-800 text-lg">Stripe Integration</h2>
        </div>
        <div className="rounded-lg bg-amber-100/50 border border-amber-200 p-4 text-sm text-amber-800">
          <p className="font-medium mb-1">Setup Instructions:</p>
          <ol className="list-decimal list-inside space-y-1 text-amber-700">
            <li>Create a Stripe account at stripe.com</li>
            <li>Copy your publishable key from the Stripe Dashboard</li>
            <li>Install <code className="bg-amber-100 px-1 rounded">@stripe/stripe-js</code> and <code className="bg-amber-100 px-1 rounded">@stripe/react-stripe-js</code></li>
            <li>Set your secret key as <code className="bg-amber-100 px-1 rounded">STRIPE_SECRET_KEY</code> in <code className="bg-amber-100 px-1 rounded">.env.local</code></li>
            <li>Create API route at <code className="bg-amber-100 px-1 rounded">/api/checkout</code> to create payment intents</li>
          </ol>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label>Publishable Key</Label>
            <Input
              className="mt-1 font-mono text-xs"
              placeholder="pk_live_... or pk_test_..."
              value={stripe.publishableKey}
              onChange={(e) => setStripe({ ...stripe, publishableKey: e.target.value })}
            />
          </div>
          <div>
            <Label>Webhook Secret</Label>
            <Input
              type="password"
              className="mt-1 font-mono text-xs"
              placeholder="whsec_..."
              value={stripe.webhookSecret}
              onChange={(e) => setStripe({ ...stripe, webhookSecret: e.target.value })}
            />
            <p className="text-xs text-stone-400 mt-1">
              Store this as <code>STRIPE_WEBHOOK_SECRET</code> in your environment variables
            </p>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-stone-500" />
          <h2 className="font-semibold text-stone-800 text-lg">Email Notifications</h2>
        </div>
        <div className="rounded-lg bg-stone-50 border border-stone-200 p-4 text-sm text-stone-600">
          <p className="font-medium text-stone-700 mb-1">Recommended: Resend or SendGrid</p>
          <p>
            Connect an email service to send order confirmations to customers at{" "}
            <strong>{store.email}</strong>. Install the Resend SDK and create an
            API route at <code className="bg-stone-100 px-1 rounded">/api/email</code>.
          </p>
        </div>
      </div>

      <Separator />

      <Button size="lg" className="btn-shine" onClick={handleSave}>
        {saved ? (
          <><Check className="mr-2 w-4 h-4" />Saved!</>
        ) : (
          <><Save className="mr-2 w-4 h-4" />Save Settings</>
        )}
      </Button>
    </div>
  );
}
