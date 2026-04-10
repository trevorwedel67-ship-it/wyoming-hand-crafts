'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function ParallaxStorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect: background moves slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Text content fades and slides in
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-stone-900 py-24 md:py-32"
    >
      {/* Parallax Background Container */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
            alt="Wyoming landscape"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/90" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center z-10"
        style={{ opacity: textOpacity, y: textY }}
      >
        <motion.p
          className="text-sm font-semibold uppercase tracking-widest text-amber-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Our Story
        </motion.p>

        <motion.h2
          className="mt-4 text-3xl font-bold text-white md:text-5xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Made in the Heart of Wyoming
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-stone-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Wyoming Hand Crafts was born from a love of the land and a commitment to
          preserving traditional craftsmanship. Based in Lagrange, Wyoming, every piece
          we create celebrates the rugged beauty and spirit of the Cowboy State.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/story"
            className="inline-flex items-center gap-2 rounded-full bg-amber-700 px-8 py-4 text-sm font-semibold text-white hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Read Our Story <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative element: subtle shine effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
