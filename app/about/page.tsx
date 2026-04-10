import Link from "next/link";
import { Mountain, Heart, Hammer, Leaf, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story behind Wyoming Hand Crafts — handmade in Lagrange, WY since day one.",
};

const values = [
  {
    icon: <Hammer className="w-6 h-6" />,
    title: "True Craftsmanship",
    desc: "Every piece is made by hand, not machine. We believe in the value of work done with skill and intention.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Made with Love",
    desc: "Craft is personal. We pour care into every stitch, carve, and glaze — and you can feel it in the finished piece.",
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Wyoming Proud",
    desc: "Our materials, inspiration, and roots are all right here in Wyoming. We celebrate the beauty of this place.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sustainable Sourcing",
    desc: "We use locally sourced and sustainably harvested materials wherever possible — from cedar to elk antlers.",
  },
];

const team = [
  {
    name: "The Sanders Family",
    role: "Founders & Artisans",
    bio: "Wyoming Hand Crafts was started by the Sanders family right here in Lagrange, Wyoming. With roots deep in the Cowboy State, they bring authentic Western craftsmanship to every piece they create.",
    image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden bg-stone-900 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?w=1400&q=80"
            alt="Woodworking Workshop"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Our Story
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl leading-tight">
            Handmade in the Heart of Wyoming
          </h1>
          <p className="mt-5 text-lg text-stone-300 leading-relaxed">
            Wyoming Hand Crafts was born from a love of this land and a belief that the
            best things in life are made by hand. Based in Lagrange, Wyoming, we create
            authentic, one-of-a-kind pieces that celebrate the spirit of the West.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-3">
                How It Started
              </p>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                From a Garage Workshop to Your Home
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  It started with a single cedar bowl, hand-carved at the kitchen table in
                  Lagrange. What began as a hobby turned into a calling — and soon, neighbors
                  and friends were asking for pieces of their own.
                </p>
                <p>
                  Wyoming Hand Crafts grew out of that simple beginning: a deep respect for
                  materials, a love of working with your hands, and a desire to share the
                  beauty of Wyoming with the world.
                </p>
                <p>
                  Every item in our collection is still handmade, one at a time, right here
                  in Goshen County. We don&apos;t mass-produce. We don&apos;t outsource. And we
                  never will.
                </p>
              </div>
              <Link
                href="/shop"
                className="mt-8 btn-shine inline-flex items-center gap-2 rounded-full bg-amber-800 px-8 py-3.5 text-sm font-semibold text-white hover:bg-amber-900 transition-colors"
              >
                Shop Our Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?w=800&q=80"
                  alt="Woodworking shop with tools and wood"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
                <img
                  src="https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?w=400&q=80"
                  alt="Handcrafted wooden piece"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-amber-50/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              What We Stand For
            </p>
            <h2 className="mt-2 text-3xl font-bold text-stone-900">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover rounded-2xl border border-amber-100 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  {v.icon}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{v.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              The Makers
            </p>
            <h2 className="mt-2 text-3xl font-bold text-stone-900">Meet the Artisans</h2>
          </div>

          <div className="flex justify-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="card-hover rounded-3xl overflow-hidden border border-amber-100 bg-amber-50/50 max-w-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-stone-900">{member.name}</h3>
                  <p className="text-sm text-amber-700 font-medium mt-1">{member.role}</p>
                  <p className="mt-4 text-sm text-stone-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-800 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Find Something Special?</h2>
          <p className="mt-4 text-amber-200">
            Browse our full collection of handmade Wyoming crafts, or reach out about a custom piece.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-amber-800 hover:bg-amber-50 transition-colors"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
