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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-3"
      }`}
    >
      {/* Main Header Bar */}
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 flex items-center justify-between h-14">
        {/* Logo - Left */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Wyoming Hand Crafts Logo"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-colors ${
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

        {/* Right Side Actions - Logo, Shop Now (desktop), Cart, Menu */}
        <div className="flex items-center gap-1 sm:gap-2 ml-auto flex-shrink-0">
          {/* Shop Now - Desktop only (hidden on mobile) */}
          <Link
            href="/shop"
            className="hidden sm:inline-flex rounded-full bg-amber-800 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-amber-900 whitespace-nowrap"
          >
            Shop Now
          </Link>

          {/* Cart Icon - Always visible */}
          <Link
            href="/cart"
            className={`relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg transition-colors flex-shrink-0 ${
              scrolled ? 'text-stone-700 hover:bg-amber-50 hover:text-amber-800' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-amber-800 text-[9px] sm:text-[10px] font-bold text-white">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>

          {/* Hamburger Menu - Mobile only */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:hidden flex-shrink-0 ${
              scrolled ? 'text-stone-700 hover:bg-amber-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Only on mobile */}
      {mobileOpen && (
        <div className="bg-white border-t border-amber-100 sm:hidden max-h-[calc(100vh-56px)] overflow-y-auto">
          <div className="mx-auto max-w-7xl px-3 py-3 flex flex-col gap-1">
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
              href="/shop"
              className="mt-2 flex items-center justify-center rounded-full bg-amber-800 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-900 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/cart"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-stone-700 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800 transition-colors"
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
