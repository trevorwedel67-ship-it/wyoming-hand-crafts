import type { Metadata } from "next";
import WyomingNav from "@/components/wyoming-nav";
import WyomingFooter from "@/components/wyoming-footer";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Wyoming Hand Crafts — Handmade in Lagrange, WY",
    template: "%s | Wyoming Hand Crafts",
  },
  description:
    "Authentic handmade crafts from the heart of Wyoming. Shop wood art, quilts, pottery, jewelry, leather goods, and more — all made by hand in Lagrange, WY.",
  keywords: [
    "wyoming handmade",
    "wyoming crafts",
    "handcrafted gifts",
    "wood art",
    "handmade quilts",
    "wyoming pottery",
    "western jewelry",
    "lagrange wyoming",
  ],
  openGraph: {
    title: "Wyoming Hand Crafts — Handmade in Lagrange, WY",
    description:
      "Authentic handmade crafts from the heart of Wyoming. Shop unique, one-of-a-kind pieces made with care.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wyoming Hand Crafts",
    description: "Authentic handmade crafts from Lagrange, Wyoming.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>
          <WyomingNav />
          <div className="flex-1">{children}</div>
          <WyomingFooter />
        </CartProvider>
      </body>
    </html>
  );
}
