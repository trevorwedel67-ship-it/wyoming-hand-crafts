import React from "react";
import Link from "next/link";
import { Sparkles, Briefcase, Building2, Check } from "lucide-react";

// --- PricingCard ---
interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  priceDescription: string;
  features: string[];
  icon: React.ReactNode;
  iconBgClass: string;
  isPopular: boolean;
  buttonText: string;
  buttonHref?: string;
}

function PricingCard({
  planName,
  description,
  price,
  priceDescription,
  features,
  icon,
  iconBgClass,
  isPopular,
  buttonText,
  buttonHref = "/contact",
}: PricingCardProps) {
  const cardStyle: React.CSSProperties = {
    width: "19rem",
    backgroundColor: "hsla(240, 15%, 9%, 1)",
    backgroundImage:
      "radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
      " radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
      " radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%)," +
      " radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%)," +
      " radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%)," +
      " radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)",
    boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset",
  };

  const borderContainerStyle: React.CSSProperties = {
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: -10,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% + 2px)",
    height: "calc(100% + 2px)",
    backgroundImage:
      "linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)",
    borderRadius: "1rem",
  };

  const rotatingBorderStyle: React.CSSProperties = {
    pointerEvents: "none",
    position: "fixed",
    zIndex: 200,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(0deg)",
    width: "200%",
    height: "10rem",
    backgroundImage:
      "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%)",
    animation: "rotate 8s linear infinite",
  };

  return (
    <div
      className="relative hover:bg-white/[0.04] transition-all duration-300 group rounded-2xl p-6 flex flex-col"
      style={cardStyle}
    >
      <style>{`@keyframes rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }`}</style>

      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-amber-700 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="flex-grow">
        <div style={borderContainerStyle}>
          <div style={rotatingBorderStyle} />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`h-10 w-10 rounded-xl border border-white/20 bg-gradient-to-br ${iconBgClass} flex items-center justify-center`}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-white">
                {planName}
              </h3>
              <p className="text-xs text-neutral-500">{description}</p>
            </div>
          </div>
          <div className="h-5 w-5 rounded-full border-2 border-white/30 shrink-0" />
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight text-white">
              {price}
            </span>
            <span className="text-sm text-neutral-400">{priceDescription}</span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">No commitment required</p>
        </div>

        <ul className="space-y-3 text-sm text-neutral-300">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-4 h-4 bg-amber-600 rounded-full shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Link
          href={buttonHref}
          className="block w-full h-12 bg-white rounded-lg text-neutral-900 font-bold hover:bg-amber-50 transition-colors flex items-center justify-center"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

// --- Main PricingPage ---
export default function PricingPage() {
  const plans: PricingCardProps[] = [
    {
      planName: "Browse",
      description: "Just exploring",
      price: "Free",
      priceDescription: "forever",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      iconBgClass: "from-emerald-500/20 to-teal-500/20",
      features: [
        "Full access to shop & browse",
        "Wishlist up to 10 items",
        "Standard email support",
        "Community newsletter",
      ],
      buttonText: "Start Browsing",
      buttonHref: "/shop",
      isPopular: false,
    },
    {
      planName: "Member",
      description: "Best for regulars",
      price: "$29",
      priceDescription: "/ month",
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      iconBgClass: "from-blue-500/20 to-cyan-500/20",
      features: [
        "Everything in Browse",
        "10% off every order",
        "Priority custom order queue",
        "Free shipping always",
        "Early access to new arrivals",
        "Member-only seasonal pieces",
      ],
      buttonText: "Join as Member",
      buttonHref: "/contact",
      isPopular: true,
    },
    {
      planName: "Wholesale",
      description: "For galleries & retailers",
      price: "Custom",
      priceDescription: "pricing",
      icon: <Building2 className="w-5 h-5 text-purple-400" />,
      iconBgClass: "from-purple-500/20 to-indigo-500/20",
      features: [
        "Everything in Member",
        "Bulk order discounts",
        "Dedicated account manager",
        "Custom branding & packaging",
        "Net-30 payment terms",
      ],
      buttonText: "Contact Us",
      buttonHref: "/contact",
      isPopular: false,
    },
  ];

  return (
    <div className="w-full bg-neutral-950 flex flex-col items-center justify-center py-20 px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-3">
          Pricing
        </p>
        <h2 className="text-4xl font-bold text-white tracking-tight sm:text-5xl">
          Find the plan that&apos;s right for you
        </h2>
        <p className="mt-4 text-lg text-neutral-400 max-w-xl mx-auto">
          From casual browsers to wholesale partners — there&apos;s a plan for
          every Wyoming Hand Crafts customer.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl">
        {plans.map((plan) => (
          <PricingCard key={plan.planName} {...plan} />
        ))}
      </div>
    </div>
  );
}
