'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Hammer, Mountain, Leaf, Heart } from 'lucide-react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const values = [
  {
    icon: <Hammer className="w-6 h-6" />,
    title: 'True Craftsmanship',
    desc: 'Every piece made by hand in Lagrange, Wyoming — not a machine in sight.',
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: 'Wyoming Proud',
    desc: 'Our materials, inspiration, and roots are all right here in the Cowboy State.',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Sustainable Sourcing',
    desc: 'Locally sourced cedar, naturally shed elk antlers, and eco-conscious materials.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Made with Love',
    desc: 'We pour genuine care into every stitch, carve, and glaze — and you can feel it.',
  },
];

export default function StoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.pexels.com/photos/11403946/pexels-photo-11403946.jpeg?auto=compress&cs=tinysrgb&w=1280"
      bgImageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      title="Wyoming Hand Crafts"
      date="Lagrange, Wyoming"
      scrollToExpand="Scroll to explore our story"
      textBlend={false}
    >
      {/* Story content revealed after expansion */}
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700 mb-3">
            Our Story
          </p>
          <h2 className="text-4xl font-bold text-stone-900 md:text-5xl leading-tight mb-6">
            Made in the Heart of Wyoming
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Wyoming Hand Crafts was born from a love of this land and a belief that the best
            things in life are made by hand. Based in Lagrange, Wyoming, we create authentic,
            one-of-a-kind pieces that celebrate the rugged beauty and spirit of the West.
          </p>
        </div>

        {/* Story narrative */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center mb-20">
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              It started with a single cedar bowl, hand-carved at the kitchen table in Lagrange.
              What began as a hobby turned into a calling — and soon, neighbors and friends were
              asking for pieces of their own.
            </p>
            <p>
              Wyoming Hand Crafts grew out of that simple beginning: a deep respect for materials,
              a love of working with your hands, and a desire to share the beauty of Wyoming
              with the world.
            </p>
            <p>
              Every item in our collection is still handmade, one at a time, right here in
              Goshen County. We don&apos;t mass-produce. We don&apos;t outsource. And we never will.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Artisan at work"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-stone-900 text-center mb-10">Our Values</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-amber-100 bg-amber-50 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  {v.icon}
                </div>
                <h4 className="font-bold text-stone-900 mb-2">{v.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
          <img
            src="https://images.unsplash.com/photo-1544956291-f1fc9394cca7?w=1200&q=80"
            alt="Wyoming Hand Crafts collection"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* CTA */}
        <div className="text-center py-10 bg-amber-800 rounded-3xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Find Your Perfect Piece
          </h3>
          <p className="text-amber-200 mb-8 text-lg">
            Browse our full collection of handmade Wyoming crafts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-amber-800 hover:bg-amber-50 transition-colors"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
