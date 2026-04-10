'use client';

import Link from "next/link";
import { ArrowRight, Star, Truck, RotateCcw, Shield, Heart, ArrowUpRight } from "lucide-react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero-enhanced";
import { ParallaxStorySection } from "@/components/ui/parallax-story-section";
import { getFeaturedProducts, getNewArrivals } from "@/lib/products";
import { ProductCard } from "@/components/ui/product-card-1";
import { OfferCarousel, type Offer } from "@/components/ui/offer-carousel";

import { motion } from "framer-motion";

const wyomingOffers: Offer[] = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Hand-carved wooden art piece",
    tag: "Limited Time",
    title: "25% OFF Cedar Bowls",
    description: "Handcrafted from Wyoming cedar. While supplies last.",
    brandLogoSrc: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=80&q=80",
    brandName: "Wood Art",
    promoCode: "CEDAR25",
    href: "/shop?category=Wood+Art",
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1544956291-f1fc9394cca7?w=800&q=80",
    imageAlt: "Handmade Wyoming quilt",
    tag: "Free Shipping",
    title: "Free Shipping on Quilts",
    description: "All handmade quilt orders ship free, no minimum.",
    brandLogoSrc: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=80&q=80",
    brandName: "Quilts",
    promoCode: "QUILTSHIP",
    href: "/shop?category=Quilts",
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    imageAlt: "Turquoise and silver jewelry",
    tag: "New Arrival",
    title: "New Western Jewelry",
    description: "Sterling silver & turquoise — just in from the workshop.",
    brandLogoSrc: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=80&q=80",
    brandName: "Jewelry",
    href: "/shop?category=Jewelry",
  },
];

const perks = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free Shipping",
    desc: "On all orders over $75",
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Checkout",
    desc: "Stripe-powered & encrypted",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Handmade with Love",
    desc: "Every piece made in Wyoming",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <main>
      {/* ─── HERO ─── */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop"
        title="Crafted with Heart, Built to Last."
        date="Est. 1984"
        scrollToExpand="Scroll to Explore Our Craft"
        textBlend
        enableKenBurns={true}
      >
        <div className="max-w-4xl mx-auto text-center py-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-stone-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Authentic Wyoming Craftsmanship
          </motion.h2>
          <motion.p 
            className="text-xl text-stone-600 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every piece is lovingly made by hand in the heart of Wyoming — from
            quilts and pottery to wood art and jewelry. Experience the rugged 
            beauty and spirit of the Cowboy State in every detail.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-amber-800 px-8 py-4 text-sm font-semibold text-white hover:bg-amber-900 transition-colors shadow-lg"
            >
              Shop the Collection <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/story"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-8 py-4 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </ScrollExpandMedia>

      {/* ─── PERKS ─── */}
      <section className="bg-amber-800 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {perks.map((perk) => (
              <div key={perk.title} className="flex items-center gap-3 text-white">
                <div className="shrink-0 text-amber-200">{perk.icon}</div>
                <div>
                  <p className="text-sm font-semibold">{perk.title}</p>
                  <p className="text-xs text-amber-200">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEW ARRIVALS ─── */}
      <section className="py-20 bg-amber-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Fresh from the Workshop
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/shop?sort=newest"
              className="hidden items-center gap-1 text-sm font-semibold text-amber-800 hover:underline sm:flex"
            >
              See all new <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
                images={product.images}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
                discount={product.discount}
                freeShipping={product.freeShipping}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARALLAX STORY SECTION ─── */}
      <ParallaxStorySection />

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Handpicked
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden items-center gap-1 text-sm font-semibold text-amber-800 hover:underline sm:flex"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
                images={product.images}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
                discount={product.discount}
                freeShipping={product.freeShipping}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEALS CAROUSEL ─── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Current Deals
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
                Deals of the Day
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden items-center gap-1 text-sm font-semibold text-amber-800 hover:underline sm:flex"
            >
              All products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <OfferCarousel offers={wyomingOffers} />
        </div>
      </section>
    </main>
  );
}
