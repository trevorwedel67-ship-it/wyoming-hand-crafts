import Link from "next/link";

const footerLinks = {
  Agency: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Our Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#brand-strategy", label: "Brand Strategy" },
    { href: "/services#digital-marketing", label: "Digital Marketing" },
    { href: "/services#web-development", label: "Web Development" },
    { href: "/services#content-creation", label: "Content Creation" },
    { href: "/services#analytics", label: "Analytics & Insights" },
  ],
  Resources: [
    { href: "/blog", label: "Marketing Blog" },
    { href: "/work", label: "Case Studies" },
    { href: "/contact", label: "Free Consultation" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-700 text-sm font-bold text-white">
                N
              </div>
              <span className="text-lg font-bold tracking-tight">Nexus</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              We craft digital experiences that transform brands and drive
              measurable growth. From strategy to execution, we are your
              full-service marketing partner.
            </p>
            <div className="mt-6 flex gap-4">
              {["X", "Li", "Ig", "Fb"].map((label) => (
                <span
                  key={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500 transition-colors hover:bg-violet-100 hover:text-violet-700 cursor-pointer"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-500 transition-colors hover:text-violet-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Nexus Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-gray-400 hover:text-gray-600">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-gray-400 hover:text-gray-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
