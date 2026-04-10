"use client";

import Link from "next/link";

const posts = [
  {
    slug: "future-of-ai-marketing",
    title: "The Future of AI in Marketing: What Smart Brands Are Doing Now",
    excerpt:
      "AI isn't replacing marketers — it's making the best ones unstoppable. Here's how leading brands are using AI to create better campaigns, faster.",
    category: "Strategy",
    date: "March 28, 2026",
    readTime: "8 min read",
    gradient: "from-violet-600 to-indigo-600",
    featured: true,
  },
  {
    slug: "brand-positioning-guide",
    title: "Brand Positioning 101: How to Stand Out in a Crowded Market",
    excerpt:
      "In a world where everyone is competing for attention, the brands that win are the ones with crystal-clear positioning. Here's the framework we use.",
    category: "Branding",
    date: "March 14, 2026",
    readTime: "12 min read",
    gradient: "from-pink-500 to-rose-500",
    featured: false,
  },
  {
    slug: "seo-strategy-2026",
    title: "SEO in 2026: What Actually Works (and What to Stop Doing)",
    excerpt:
      "Search has changed dramatically. Here's our data-backed guide to SEO strategies that drive real traffic and revenue this year.",
    category: "SEO",
    date: "February 22, 2026",
    readTime: "10 min read",
    gradient: "from-amber-500 to-orange-500",
    featured: false,
  },
  {
    slug: "conversion-rate-optimization",
    title: "The CRO Playbook: 15 High-Impact Tests We Run for Every Client",
    excerpt:
      "Small conversion improvements compound into massive revenue gains. These are the 15 tests we run first for every new client.",
    category: "Growth",
    date: "February 8, 2026",
    readTime: "14 min read",
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
  },
  {
    slug: "social-media-strategy",
    title: "How to Build a Social Media Strategy That Actually Drives Revenue",
    excerpt:
      "Followers are nice, but revenue is better. Here's how to connect your social media efforts directly to business outcomes.",
    category: "Social",
    date: "January 18, 2026",
    readTime: "9 min read",
    gradient: "from-sky-500 to-blue-500",
    featured: false,
  },
  {
    slug: "b2b-content-marketing",
    title: "B2B Content Marketing: The Complete Guide for 2026",
    excerpt:
      "B2B buyers consume 13 pieces of content before talking to sales. Here's how to make sure your content is in that stack.",
    category: "Content",
    date: "January 5, 2026",
    readTime: "16 min read",
    gradient: "from-fuchsia-500 to-purple-500",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute -top-40 right-20 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:pt-44">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Blog
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Marketing insights that{" "}
            <span className="gradient-text">move the needle.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Actionable strategies, industry analysis, and lessons from the
            front lines of digital marketing. No fluff, just substance.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href={`/blog/${featured.slug}`}
              className="card-hover group grid overflow-hidden rounded-2xl border border-gray-200 md:grid-cols-2"
            >
              <div
                className={`flex aspect-[3/2] items-center justify-center bg-gradient-to-br ${featured.gradient} p-12 md:aspect-auto`}
              >
                <span className="text-5xl font-black text-white/20">FEATURED</span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400">{featured.date}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-hover group rounded-2xl border border-gray-200 overflow-hidden"
              >
                <div
                  className={`flex aspect-[2/1] items-center justify-center bg-gradient-to-br ${post.gradient}`}
                >
                  <span className="text-3xl font-black text-white/15">NEXUS</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-violet-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-gray-400">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-bold">Stay ahead of the curve.</h2>
          <p className="mt-3 text-sm text-gray-500">
            Get our best marketing insights delivered to your inbox every
            week. No spam, unsubscribe anytime.
          </p>
          <form className="mt-6 flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
            <button
              type="submit"
              className="btn-shine rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
