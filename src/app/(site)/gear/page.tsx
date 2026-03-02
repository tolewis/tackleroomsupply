import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Card, CardContent } from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Gear Guides",
  description:
    "Saltwater fishing gear guides — braided line, hooks, leaders, rods, reels, and tackle breakdowns from The TackleRoom.",
};

const FEATURED = {
  title: "Braided Fishing Line Guide",
  excerpt: "When to use braid, diameter charts, and our top picks. The most comprehensive braid guide on the internet.",
  slug: "braided-fishing-line-guide-when-to-use-braid-diameter-charts-and-top-picks",
  image: "/images/gear-hero-braid.webp",
};

const GEAR_ARTICLES = [
  // Reference / Charts
  {
    title: "Hook Size Chart — Complete Saltwater Guide",
    excerpt: "Every hook size, type, and application for saltwater. Circle, J-hook, treble — the definitive reference.",
    slug: "hook-size-chart",
    category: "Reference",
    image: "/images/gear-hooks.webp",
  },
  {
    title: "Leader Weight Chart",
    excerpt: "How to match leaders to target species. Fluoro, mono, and wire — diameters, breaking strengths, and when to size up.",
    slug: "leader-weight-chart-match-leaders-to-target-species",
    category: "Reference",
    image: "/images/gear-leaders.webp",
  },
  {
    title: "Trolling Speed Chart",
    excerpt: "Optimal speeds by species and lure type. The chart every offshore angler should have on the console.",
    slug: "trolling-speed-chart-optimal-speeds-by-species-and-lure-type",
    category: "Reference",
    image: "/images/gear-trolling.webp",
  },
  {
    title: "Snap Swivel Size Chart",
    excerpt: "Complete guide to choosing the right size. Breaking strengths, applications, and when to skip the swivel entirely.",
    slug: "snap-swivel-size-chart-complete-guide-to-choosing-the-right-size",
    category: "Reference",
    image: "/images/gear-swivels.webp",
  },
  // Comparisons
  {
    title: "Mono vs Fluoro vs Braid",
    excerpt: "Which fishing line should you use? The real answer, with actual test data and on-water experience.",
    slug: "mono-vs-fluorocarbon-vs-braid-which-fishing-line-should-you-use",
    category: "Comparison",
    image: "/images/gear-line-compare.webp",
  },
  {
    title: "Circle Hooks vs J-Hooks",
    excerpt: "Choosing the right hook for saltwater. When circles outperform J-hooks and vice versa.",
    slug: "circle-hooks-vs-j-hooks-choosing-the-right-hook-for-fishing",
    category: "Comparison",
    image: "/images/gear-circle-j.webp",
  },
  {
    title: "Spinning vs Conventional Reels",
    excerpt: "Which is right for saltwater? Pros, cons, and the specific applications where each dominates.",
    slug: "spinning-vs-conventional-reels-which-is-right-for-saltwater",
    category: "Comparison",
    image: "/images/gear-reels-compare.webp",
  },
  {
    title: "Wire vs Mono Leaders",
    excerpt: "When to use each for saltwater. Bite-offs, abrasion, visibility — the trade-offs explained.",
    slug: "wire-vs-mono-leaders-when-to-use-each-for-saltwater-fishing",
    category: "Comparison",
    image: "/images/gear-wire-mono.webp",
  },
  // Guides
  {
    title: "Rod Action Explained",
    excerpt: "Fast, moderate, and slow action rods. What the specs actually mean and which action fits your fishing.",
    slug: "rod-action-explained",
    category: "Guide",
    image: "/images/gear-rod-action.webp",
  },
  {
    title: "Saltwater Fishing Gear: 10 Essentials",
    excerpt: "The starter kit. Everything you need to get on the water and actually catch fish, without overbuying.",
    slug: "saltwater-fishing-gear-10-essentials-to-get-outdoors",
    category: "Guide",
    image: "/images/gear-essentials.webp",
  },
  {
    title: "Tackle Maintenance Guide",
    excerpt: "Clean, store, and protect your gear. Salt kills everything — here's how to fight back.",
    slug: "tackle-maintenance-guide-clean-store-and-protect-your-gear",
    category: "Guide",
    image: "/images/gear-maintenance.webp",
  },
  {
    title: "Types of Saltwater Fishing Lures",
    excerpt: "A complete guide to every lure category. Plugs, soft plastics, jigs, spoons, and when to throw each.",
    slug: "types-of-saltwater-fishing-lures",
    category: "Guide",
    image: "/images/gear-lure-types.webp",
  },
];

const CATEGORY_VARIANTS: Record<string, "default" | "creek" | "ember" | "ridge"> = {
  "Reference": "creek",
  "Comparison": "ember",
  "Guide": "default",
};

export default function GearPage() {
  return (
    <>
      {/* Hero feature */}
      <a
        href={`https://thetackleroom.com/blogs/news/${FEATURED.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-[50vh] min-h-[400px] max-h-[550px]"
      >
        <img
          src={FEATURED.image}
          alt={FEATURED.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <Container>
            <Badge variant="creek" className="mb-3">Featured Guide</Badge>
            <Heading as="h1" size="4xl" className="!text-white mb-3 max-w-2xl">
              {FEATURED.title}
            </Heading>
            <Text size="lg" className="!text-white/80 max-w-xl">
              {FEATURED.excerpt}
            </Text>
            <Text size="sm" className="!text-accent mt-3 font-heading font-semibold">
              Read on TackleRoom &rarr;
            </Text>
          </Container>
        </div>
      </a>

      {/* How we review callout */}
      <Section>
        <Container>
          <div className="rounded-xl border border-border bg-surface-raised p-6 sm:p-8 mb-12">
            <Heading as="h2" size="xl" className="mb-3">
              Gear guides from the shop floor
            </Heading>
            <Text variant="secondary" size="sm">
              These aren&apos;t affiliate roundups. Every gear guide on TackleRoom Supply
              is written by the same team that stocks and sells tackle at{" "}
              <a href="https://thetackleroom.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover">
                The TackleRoom
              </a>
              . We test it, fish it, sell it — in that order. If we wouldn&apos;t
              put it on the shelf, it doesn&apos;t make the guide.
            </Text>
          </div>

          {/* Gear by destination */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
            {[
              { title: "Florida Keys Tackle", href: "/destinations/florida-keys#tackle", img: "/images/dest-keys.webp" },
              { title: "NC Coast Tackle", href: "/destinations/north-carolina#tackle", img: "/images/dest-nc.webp" },
              { title: "Bahamas Tackle", href: "/destinations/bahamas#tackle", img: "/images/dest-bahamas.webp" },
              { title: "Louisiana Tackle", href: "/destinations/louisiana#tackle", img: "/images/dest-louisiana.webp" },
              { title: "Gulf Coast Tackle", href: "/destinations/gulf-coast#tackle", img: "/images/dest-gulf.webp" },
            ].map((d) => (
              <NextLink key={d.href} href={d.href} className="group relative rounded-xl overflow-hidden aspect-[3/2]">
                <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-xs font-heading font-semibold text-white drop-shadow-lg">{d.title}</span>
                </div>
              </NextLink>
            ))}
          </div>

          <div className="mb-10">
            <Heading as="h2" size="3xl">
              Reference &amp; Gear Guides
            </Heading>
            <Text variant="secondary" size="lg" className="mt-3 max-w-2xl">
              Charts, comparisons, and deep dives on the tackle that matters.
            </Text>
          </div>

          <Grid cols={3}>
            {GEAR_ARTICLES.map((item) => (
              <a
                key={item.slug}
                href={`https://thetackleroom.com/blogs/news/${item.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card hoverable>
                  <div className="aspect-[16/10] rounded-lg bg-surface-overlay mb-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent>
                    <Badge variant={CATEGORY_VARIANTS[item.category]} className="mb-3">
                      {item.category}
                    </Badge>
                    <Heading as="h3" size="md" className="mb-1">
                      {item.title}
                    </Heading>
                    <Text variant="secondary" size="sm">
                      {item.excerpt}
                    </Text>
                    <Text size="xs" className="text-accent mt-3 font-heading font-semibold">
                      Read full guide &rarr;
                    </Text>
                  </CardContent>
                </Card>
              </a>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Shop CTA */}
      <Section className="bg-surface-raised">
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="3xl" className="mb-4">
            Buy the tackle
          </Heading>
          <Text variant="secondary" size="lg" className="mx-auto mb-6 max-w-lg">
            Every guide links to the gear. Rods, reels, line, hooks, leaders,
            and lures — all in stock at The TackleRoom.
          </Text>
          <a
            href="https://thetackleroom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent px-8 py-3 font-heading font-semibold text-stone-950 hover:bg-accent-hover transition-colors"
          >
            Shop TackleRoom &rarr;
          </a>
        </Container>
      </Section>
    </>
  );
}
