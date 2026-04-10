import React from "react";
import Link from "next/link";
import {
  Maximize2,
  Layers,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";

interface Plan {
  name: string;
  desc: string;
  price: number;
  isMostPop: boolean;
  features: string[];
}

interface Feature {
  name: string;
  desc: string;
  icon: React.ReactNode;
}

const plan: Plan = {
  name: "Custom Craft Plan",
  desc: "Unlock exclusive perks, early access to new pieces, and priority custom orders — all for one flat monthly rate.",
  price: 29,
  isMostPop: true,
  features: [
    "Priority custom order queue",
    "10% off every purchase",
    "Early access to new arrivals",
    "Free standard shipping always",
    "Member-only seasonal pieces",
    "Dedicated support line",
    "Exclusive workshop updates",
    "Annual artisan gift box",
  ],
};

const features: Feature[] = [
  {
    name: "Scalable Selection",
    desc: "Our catalog grows every season. Members get first pick of new handmade arrivals before they go public — so you never miss a one-of-a-kind piece.",
    icon: <Maximize2 className="w-6 h-6" />,
  },
  {
    name: "Flexible Orders",
    desc: "Order single items or bundle multiple crafts together. Mix categories — quilts, pottery, wood art — and ship them together to save on handling.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    name: "Smooth Experience",
    desc: "From browsing to doorstep, we keep everything simple. Track your order in real time and reach our team any time — we always respond within a day.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    name: "Secure & Trusted",
    desc: "Every transaction is protected by Stripe's industry-leading encryption. Your details are safe, and every order is backed by our 30-day return policy.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

interface ColorfulPricingProps {
  ctaHref?: string;
}

export default function ColorfulPricing({ ctaHref = "/checkout" }: ColorfulPricingProps) {
  return (
    <section className="relative py-14 w-full flex justify-center bg-amber-950/10 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-0 z-0 h-full w-full bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(180,100,20,0.25),rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-screen-xl mx-auto text-stone-400 px-4 md:px-8 w-full">
        {/* Header */}
        <div className="max-w-xl space-y-3">
          <h3 className="text-amber-700 font-semibold tracking-wide uppercase text-sm">
            Membership
          </h3>
          <p className="mt-2 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            The right plan for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
          <p className="text-stone-500 max-w-lg">
            Join the Wyoming Hand Crafts membership and get exclusive benefits,
            priority crafting, and savings on every order — every single month.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-start">
          {/* Feature list */}
          <ul className="flex-1 max-w-md space-y-10">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 rounded-full border border-amber-200 bg-amber-50 text-amber-700 flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold tracking-tight text-stone-800">
                    {item.name}
                  </h4>
                  <p className="text-stone-500 mt-1.5 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Pricing card */}
          <div className="flex-1 flex flex-col border border-amber-200 rounded-2xl shadow-xl md:max-w-xl bg-white overflow-hidden">
            {/* Card header */}
            <div className="p-6 py-8 border-b border-amber-100 md:p-8">
              <div className="flex justify-between gap-4">
                <div className="max-w-xs">
                  <span className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                    {plan.name}
                  </span>
                  <p className="mt-2 text-sm text-stone-500 leading-relaxed">{plan.desc}</p>
                </div>
                <div className="flex-none text-2xl font-bold text-amber-800 sm:text-3xl text-right">
                  ${plan.price}
                  <span className="text-base font-normal text-stone-400 block">/mo</span>
                </div>
              </div>

              <Link
                href={ctaHref}
                className="mt-6 w-full text-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-800 px-4 py-3 text-base font-semibold text-white ring-amber-500/50 ring-offset-2 transition-all hover:scale-[1.02] hover:ring-2 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Features list */}
            <ul className="p-6 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid lg:grid-cols-2">
              <li className="pb-2 col-span-2 font-semibold text-stone-700">
                What&apos;s included
              </li>
              {plan.features.map((featureItem, idx) => (
                <li key={idx} className="flex items-center gap-3 text-stone-600">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {featureItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
