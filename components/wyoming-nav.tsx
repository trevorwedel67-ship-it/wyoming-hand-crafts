"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "Our Story" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function WyomingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Wyoming Hand Crafts Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? scrolled ? "bg-amber-50 text-amber-800" : "bg-amber-100/20 text-stone-900"
                    : scrolled ? "text-stone-600 hover:bg-amber-50 hover:text-amber-800" : "text-stone-900 hover:bg-white/10 hover:text-stone-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Cart + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'text-stone-700 hover:bg-amber-50 hover:text-amber-800' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-800 text-[10px] font-bold text-white">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>

          <Link
            href="/shop"
            className="rounded-full bg-amber-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-900 inline-flex"
          >
            Shop Now
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
              scrolled ? 'text-stone-700 hover:bg-amber-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-white mt-2 mx-4 rounded-2xl p-4 shadow-lg md:hidden animate-scale-in border border-amber-100">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-amber-50 text-amber-800"
                      : "text-stone-600 hover:bg-amber-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/cart"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-amber-800 px-5 py-3 text-sm font-semibold text-white"
            >
              <ShoppingCart className="w-4 h-4" />
              Cart {itemCount > 0 && `(${itemCount})`}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
