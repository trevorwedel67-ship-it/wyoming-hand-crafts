import Link from "next/link";

const blogData: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: { name: string; role: string; initials: string };
    gradient: string;
    content: string[];
  }
> = {
  "future-of-ai-marketing": {
    title: "The Future of AI in Marketing: What Smart Brands Are Doing Now",
    category: "Strategy",
    date: "March 28, 2026",
    readTime: "8 min read",
    author: { name: "Alexandra Rivera", role: "Founder & CEO", initials: "AR" },
    gradient: "from-violet-600 to-indigo-600",
    content: [
      "Artificial intelligence isn't some far-off future for marketing — it's here, and the brands that are leveraging it effectively are pulling away from those that aren't. But here's the thing: AI in marketing isn't about replacing human creativity. It's about amplifying it.",
      "At Nexus, we've been integrating AI into our workflows for over two years now, and the results have been transformative. Our content team produces 3x more output at higher quality. Our media buying is 40% more efficient. Our analytics surface insights that would take a human analyst weeks to uncover.",
      "The key insight is that AI excels at pattern recognition, data processing, and optimization — the tasks that are necessary but don't require creative judgment. This frees up our strategists and creatives to focus on what humans do best: understanding emotions, crafting narratives, and making strategic leaps that no algorithm can replicate.",
      "Here's what the smartest brands are doing with AI right now:\n\n**1. Predictive Audience Modeling** — Using AI to identify high-value customer segments before they convert. We've seen this improve ROAS by 35-50% for our clients.\n\n**2. Dynamic Content Personalization** — Serving different creative variations based on real-time signals. Not just A/B testing — true multivariate optimization at scale.\n\n**3. Automated Performance Optimization** — AI-powered bid management and budget allocation that reacts to performance signals in real-time, not after weekly reports.\n\n**4. Content Intelligence** — Using AI to analyze what content drives engagement and conversions, then feeding those insights back into content strategy.",
      "The brands that will win aren't the ones using the most AI — they're the ones using it most strategically. Start with the highest-leverage use cases for your specific situation, build internal capability, and iterate from there.",
      "The future of marketing isn't AI vs. human. It's AI-augmented humans outperforming everyone else. And that future is already here.",
    ],
  },
  "brand-positioning-guide": {
    title: "Brand Positioning 101: How to Stand Out in a Crowded Market",
    category: "Branding",
    date: "March 14, 2026",
    readTime: "12 min read",
    author: { name: "Marcus Thompson", role: "Chief Strategy Officer", initials: "MT" },
    gradient: "from-pink-500 to-rose-500",
    content: [
      "Every market is crowded. Every category has incumbents. Every customer is overwhelmed with choices. So how do you stand out? The answer is brand positioning — and most companies get it wrong.",
      "Brand positioning isn't your tagline. It's not your mission statement. It's the specific, defensible space your brand occupies in your customer's mind. It's the answer to the question: 'Why should I choose you over every alternative, including doing nothing?'",
      "After helping over 200 brands develop their positioning, here's the framework we use at Nexus:\n\n**Step 1: Define Your Arena** — What category are you competing in? Be specific. 'We're a project management tool' is too broad. 'We're the project management tool for creative agencies' is a positioning.\n\n**Step 2: Identify Your Uncommon Advantage** — What do you do differently that matters to your target customer? This needs to be true, relevant, and hard to copy.\n\n**Step 3: Articulate the Payoff** — What does the customer get that they can't get elsewhere? Frame it in their language, not yours.\n\n**Step 4: Prove It** — Every claim needs evidence. Case studies, data, testimonials, demonstrations.",
      "The biggest mistake we see is trying to be everything to everyone. Strong positioning requires sacrifice — deliberately choosing not to serve certain audiences or meet certain needs. That feels scary, but it's the only way to matter deeply to anyone.",
      "A well-positioned brand doesn't need to outspend competitors. It doesn't need to be the loudest voice in the room. It just needs to be the obvious choice for a specific audience with a specific need. And that clarity is worth more than any ad budget.",
    ],
  },
  "seo-strategy-2026": {
    title: "SEO in 2026: What Actually Works (and What to Stop Doing)",
    category: "SEO",
    date: "February 22, 2026",
    readTime: "10 min read",
    author: { name: "Sofia Martinez", role: "Head of Content", initials: "SM" },
    gradient: "from-amber-500 to-orange-500",
    content: [
      "SEO has changed more in the past two years than in the previous decade. AI overviews, zero-click searches, and evolving E-E-A-T standards have fundamentally altered what it takes to rank. Here's what we're seeing work — and not work — in 2026.",
      "**What's working:**\n\n**Original research and data** — Google increasingly rewards content that adds new information to the conversation. If you're just rewriting what already ranks, you're fighting a losing battle. Invest in original surveys, data analysis, and proprietary insights.\n\n**Topical authority** — Depth beats breadth. Building comprehensive content hubs around specific topics signals expertise far more effectively than scattered, keyword-targeted articles.\n\n**User experience signals** — Core Web Vitals, engagement metrics, and click-through rates all matter. A fast, well-designed site with compelling title tags has a significant ranking advantage.",
      "**What to stop doing:**\n\n**Thin, keyword-stuffed content** — This should be obvious, but we still see it constantly. Write for humans first, optimize for search second.\n\n**Ignoring search intent** — Ranking for a keyword means nothing if the content doesn't match what the searcher actually wants. Study the SERP before writing anything.\n\n**Building links at scale** — Quality has always mattered more than quantity for links, and Google's spam detection has gotten remarkably good. Focus on earning links through great content and genuine relationships.",
      "The north star hasn't changed: create the best, most useful content for your target audience. The tactics evolve, but that fundamental principle remains constant. The brands that commit to being genuinely helpful will always win in organic search.",
    ],
  },
  "conversion-rate-optimization": {
    title: "The CRO Playbook: 15 High-Impact Tests We Run for Every Client",
    category: "Growth",
    date: "February 8, 2026",
    readTime: "14 min read",
    author: { name: "David Okafor", role: "VP of Digital", initials: "DO" },
    gradient: "from-emerald-500 to-teal-500",
    content: [
      "A 1% improvement in conversion rate might not sound like much, but for a business doing $10M in revenue, that's $100K in additional revenue — with zero additional ad spend. CRO is the highest-ROI marketing activity most businesses aren't doing.",
      "After running thousands of tests across hundreds of clients, we've identified the 15 tests that most consistently produce wins. Here are the top ones:\n\n**1. Hero Section Clarity Test** — Replace clever headlines with clear value propositions. We see a 15-30% lift almost every time.\n\n**2. Social Proof Placement** — Move testimonials and logos above the fold. Trust signals near the top of the page reduce bounce rates by 20-40%.\n\n**3. CTA Button Copy** — 'Get Started' vs 'Start Free Trial' vs 'See How It Works' — the right CTA copy depends on your audience's stage of awareness.\n\n**4. Form Field Reduction** — Every additional form field reduces conversions by 7-10%. Ask only for what you absolutely need.\n\n**5. Page Speed Optimization** — Every 100ms of latency costs 1% of conversions. This is the highest-leverage technical investment you can make.",
      "The key to successful CRO isn't running random tests — it's having a systematic framework for identifying the highest-impact opportunities, designing rigorous experiments, and learning from every result. Even 'failed' tests teach you something valuable about your audience.",
      "Start with the low-hanging fruit: clarity, speed, and trust. Those three elements account for 80% of the conversion improvements we see. Then move to more nuanced tests around pricing presentation, feature comparison, and onboarding flows.",
    ],
  },
  "social-media-strategy": {
    title: "How to Build a Social Media Strategy That Actually Drives Revenue",
    category: "Social",
    date: "January 18, 2026",
    readTime: "9 min read",
    author: { name: "Emily Nakamura", role: "Creative Director", initials: "EN" },
    gradient: "from-sky-500 to-blue-500",
    content: [
      "Most social media strategies fail because they optimize for the wrong metrics. Followers, likes, and impressions feel good but don't pay the bills. Here's how to build a social strategy that actually drives revenue.",
      "**Start with your business objectives.** Before you post anything, be clear on what social media needs to accomplish. Brand awareness? Lead generation? Direct sales? Community building? Each objective requires a fundamentally different approach.\n\n**Choose platforms strategically.** You don't need to be everywhere. Be exceptional on 2-3 platforms rather than mediocre on 7. Choose based on where your target audience actually spends time and where the platform's format matches your strengths.",
      "**Create a content system, not random posts.** The most successful brands on social media have a documented content system:\n\n- **Pillar content (20%)** — High-value, educational content that showcases expertise\n- **Community content (30%)** — Engagement-focused content that builds relationships\n- **Culture content (30%)** — Behind-the-scenes, personality, and values-driven content\n- **Promotional content (20%)** — Direct calls to action and offers",
      "**Measure what matters.** Track these metrics: click-through rate to your site, leads generated from social, revenue attributed to social channels, and engagement rate (as a proxy for content quality). Stop tracking vanity metrics that make you feel good but don't impact the business.",
      "The brands winning on social in 2026 aren't the ones posting the most — they're the ones posting with the most purpose. Quality, consistency, and strategic intent will outperform volume every single time.",
    ],
  },
  "b2b-content-marketing": {
    title: "B2B Content Marketing: The Complete Guide for 2026",
    category: "Content",
    date: "January 5, 2026",
    readTime: "16 min read",
    author: { name: "Sofia Martinez", role: "Head of Content", initials: "SM" },
    gradient: "from-fuchsia-500 to-purple-500",
    content: [
      "B2B buyers consume an average of 13 pieces of content before engaging with a sales representative. That means your content isn't just supporting the sales process — it IS the sales process for the majority of the buyer journey.",
      "Yet most B2B content marketing falls into one of two traps: it's either so focused on keywords that it's generic and unhelpful, or it's so focused on thought leadership that it never drives any measurable business outcomes. The best B2B content does both.",
      "**The B2B Content Framework We Use:**\n\n**Top of Funnel (Awareness)** — Educational content that addresses your audience's biggest challenges. Blog posts, industry reports, podcast episodes. Goal: build trust and email subscribers.\n\n**Middle of Funnel (Consideration)** — Content that positions your solution as the best option. Case studies, comparison guides, webinars, ROI calculators. Goal: generate marketing-qualified leads.\n\n**Bottom of Funnel (Decision)** — Content that removes final objections. Detailed product documentation, implementation guides, customer stories, free trials. Goal: convert leads to customers.",
      "**Distribution is half the battle.** Creating great content is necessary but not sufficient. You need a distribution strategy: SEO for long-term organic traffic, email for your existing audience, LinkedIn for social reach, and potentially paid promotion for your highest-value pieces.",
      "The companies that invest in B2B content marketing consistently outperform those that don't. It takes time — typically 6-12 months to see significant results — but the compounding returns are worth the patience. Every piece of content you create is an asset that continues to generate value over time.",
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Post Not Found</h1>
          <Link href="/blog" className="mt-4 inline-block text-violet-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute -top-40 right-20 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-36 md:pt-44">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">
              {post.date} &middot; {post.readTime}
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              {post.author.initials}
            </div>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6">
            {post.content.map((block, i) => (
              <div
                key={i}
                className="prose-custom text-gray-600 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: block
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                    .replace(/\n\n/g, '</p><p class="mt-4">')
                }}
              />
            ))}
          </div>
        </div>
      </article>

      {/* Share / CTA */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="text-xl font-bold">Enjoyed this article?</h3>
          <p className="mt-2 text-sm text-gray-500">
            Subscribe to our newsletter for weekly marketing insights.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:underline"
          >
            Read more articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
