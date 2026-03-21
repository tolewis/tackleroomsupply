import NextLink from "next/link";
import { Container } from "./Container";

const footerNav = [
  {
    title: "Explore",
    links: [
      { label: "Stories", href: "/adventure" },
      { label: "Gear", href: "/gear" },
      { label: "Species", href: "/food" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Shop at TackleRoom", href: "https://thetackleroom.com" },
      { label: "Privacy Policy", href: "/pages/privacy-policy" },
      { label: "Terms of Service", href: "/pages/terms-of-service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <NextLink
              href="/"
              className="font-heading text-xl font-bold tracking-tight text-text-primary"
            >
              TackleRoom<span className="text-accent"> Supply</span>
            </NextLink>
            <p className="mt-3 max-w-md text-sm text-text-secondary">
              Saltwater fishing content for anglers who want honest gear reviews,
              real fishing reports, and stories from the water.
            </p>
            <div className="mt-6">
              <p className="text-sm font-heading font-medium text-text-secondary mb-2">
                The Tight Lines Report
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm text-text-primary placeholder:text-text-muted"
                  aria-label="Email for newsletter"
                />
                <button className="rounded-lg bg-accent px-4 py-2 text-sm font-heading font-semibold text-stone-950 hover:bg-accent-hover transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-xs text-text-muted">
                Weekly fishing reports, gear finds, and no spam.
              </p>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-semibold text-text-primary mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <NextLink
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} TackleRoom Supply. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>An Unhook Outdoors brand</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
