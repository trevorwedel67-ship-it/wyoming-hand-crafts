import Link from "next/link";
import { Mountain, Mail, Phone, MapPin, Share2, Link2 } from "lucide-react";

export default function WyomingFooter() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-700 text-white">
                <Mountain className="w-5 h-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">Wyoming</span>
                <span className="text-xs text-amber-400 tracking-wide">Hand Crafts</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Authentic handmade crafts from the heart of Wyoming. Every piece tells a story.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:bg-amber-700 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:bg-amber-700 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Link2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Shop</h3>
            <ul className="space-y-2">
              {[
                { label: "All Products", href: "/shop" },
                { label: "Wood Art", href: "/shop?category=Wood+Art" },
                { label: "Quilts", href: "/shop?category=Quilts" },
                { label: "Pottery", href: "/shop?category=Pottery" },
                { label: "Jewelry", href: "/shop?category=Jewelry" },
                { label: "Leather", href: "/shop?category=Leather" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Shipping Policy", href: "/contact#shipping" },
                { label: "Returns", href: "/contact#returns" },
                { label: "Admin", href: "/admin" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-sm text-stone-400">Lagrange, Wyoming 82221</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="tel:+13075346506"
                  className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                >
                  (307) 534-6506
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="mailto:sanderssalesofwyo@gmail.com"
                  className="text-sm text-stone-400 hover:text-amber-400 transition-colors break-all"
                >
                  sanderssalesofwyo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Wyoming Hand Crafts. All rights reserved.
          </p>
          <p className="text-xs text-stone-500">
            Handmade with love in Lagrange, Wyoming
          </p>
        </div>
      </div>
    </footer>
  );
}
