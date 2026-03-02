import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Card, CardContent } from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  // Uses layout default title
};

const CATEGORIES = [
  { label: "Inshore", href: "/adventure?category=inshore", variant: "creek" as const, description: "Redfish, trout, flounder, snook — flats, marshes, and backwater" },
  { label: "Offshore", href: "/adventure?category=offshore", variant: "forest" as const, description: "Tuna, mahi, wahoo, billfish — blue water and the deep stuff" },
  { label: "Surf", href: "/adventure?category=surf", variant: "creek" as const, description: "Beach fishing, pompano, drum, stripers from the sand" },
  { label: "Gear Reviews", href: "/gear", variant: "ridge" as const, description: "Rods, reels, line, tackle — tested on the water, not in a lab" },
  { label: "Species Guides", href: "/food", variant: "forest" as const, description: "How to find, target, and land the fish you're after" },
  { label: "Fishing Reports", href: "/adventure?category=reports", variant: "ember" as const, description: "What's biting, where, and on what — updated from the field" },
];

const FEATURED_STORIES = [
  {
    id: 1,
    title: "Chasing Redfish on the Flood Tide",
    excerpt: "Sight-casting to tailing reds on a Carolina marsh flat. The rod, the fly, and the three-second window you get.",
    category: "Inshore",
    image: "/images/inshore-redfish.jpg",
  },
  {
    id: 2,
    title: "The Only 5 Lures You Need for Inshore",
    excerpt: "After a decade of tackle hoarding, here's what actually stays in the box. Everything else is marketing.",
    category: "Gear",
    image: "/images/tackle-lures.jpg",
  },
  {
    id: 3,
    title: "First Light Offshore — Yellowfin on the Troll",
    excerpt: "Running 60 miles out before sunrise. What it takes, what it costs, and why we keep doing it.",
    category: "Offshore",
    image: "/images/offshore-sunrise.jpg",
  },
  {
    id: 4,
    title: "Surf Fishing the Outer Banks in November",
    excerpt: "Drum run, cold fronts, and the best beach fishing on the East Coast. A week on the sand.",
    category: "Surf",
    image: "/images/surf-fishing.jpg",
  },
  {
    id: 5,
    title: "Penn Slammer IV — 12 Months Later",
    excerpt: "We fished it hard for a year. Here's what held up, what didn't, and whether it's worth the money.",
    category: "Gear",
    image: "/images/gear-reel.jpg",
  },
  {
    id: 6,
    title: "How to Read a Tide Chart Like You Mean It",
    excerpt: "Stop guessing. Tide, current, and moon phase — the three things that actually determine whether you catch fish.",
    category: "Guide",
    image: "/images/coastal-tide.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden h-[340px] sm:h-[380px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-coastal.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(/textures/topo-lines.svg)",
            backgroundSize: "400px",
          }}
        />
        <Container className="relative">
          <div className="flex flex-col items-center text-center">
            <Badge variant="creek" className="mb-4">
              Saltwater fishing content
            </Badge>
            <Heading as="h1" size="hero" className="max-w-4xl">
              Fish smarter.
              <br />
              <span className="text-accent">Fish more.</span>
            </Heading>
            <Text
              variant="secondary"
              size="lg"
              className="mt-4 max-w-2xl mx-auto"
            >
              Honest gear reviews, real fishing reports, and saltwater stories
              from anglers who actually fish. Inshore, offshore, and everything
              that bites.
            </Text>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <NextLink href="/adventure">
                <Button variant="primary" size="lg">
                  Read Stories
                </Button>
              </NextLink>
              <NextLink href="/gear">
                <Button variant="outline" size="lg">
                  Browse Gear
                </Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <div className="bg-surface-raised py-4">
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="xl">
            The Tight Lines Report
          </Heading>
          <Text variant="secondary" size="sm" className="mt-1 mx-auto max-w-lg">
            Weekly fishing reports, gear finds, and saltwater content. No spam.
          </Text>
          <div className="mt-3 flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text-primary placeholder:text-text-muted"
              aria-label="Email for newsletter"
            />
            <button className="rounded-lg bg-accent px-6 py-2 text-sm font-heading font-semibold text-stone-950 hover:bg-accent-hover transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </Container>
      </div>

      {/* Featured Stories */}
      <Section>
        <Container>
          <div className="flex items-end justify-between mb-8">
            <Heading as="h2" size="3xl">
              Latest from the water
            </Heading>
            <NextLink
              href="/adventure"
              className="hidden sm:block text-sm font-heading font-medium text-accent hover:text-accent-hover transition-colors"
            >
              View all &rarr;
            </NextLink>
          </div>
          <Grid cols={3}>
            {FEATURED_STORIES.map((story) => (
              <Card key={story.id} hoverable>
                <div className="aspect-[16/10] rounded-lg bg-surface-overlay mb-4 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent>
                  <Badge className="mb-3">{story.category}</Badge>
                  <Heading as="h3" size="lg" className="mb-2">
                    {story.title}
                  </Heading>
                  <Text variant="secondary" size="sm">
                    {story.excerpt}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="bg-surface-raised">
        <Container>
          <div className="text-center mb-10">
            <Heading as="h2" size="3xl">
              What we cover
            </Heading>
            <Text variant="secondary" className="mt-3 mx-auto">
              Everything saltwater. From the flats to the deep blue.
            </Text>
          </div>
          <Grid cols={3} gap="lg">
            {CATEGORIES.map((cat) => (
              <NextLink key={cat.href} href={cat.href}>
                <Card hoverable className="h-full">
                  <CardContent className="text-center py-6">
                    <Badge variant={cat.variant} className="mb-3">
                      {cat.label}
                    </Badge>
                    <Text variant="secondary" size="sm">
                      {cat.description}
                    </Text>
                  </CardContent>
                </Card>
              </NextLink>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* About / Shop Teaser */}
      <Section>
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="3xl">
            Content meets tackle
          </Heading>
          <Text variant="secondary" size="lg" className="mt-4 mx-auto">
            TackleRoom Supply is the content side of{" "}
            <a href="https://thetackleroom.com" className="text-accent hover:text-accent-hover transition-colors">
              The TackleRoom
            </a>
            . We write about the gear we sell, the fish we chase, and the water
            we fish. No sponsored opinions. If it doesn&apos;t catch fish, we
            don&apos;t recommend it.
          </Text>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <NextLink href="/about">
              <Button variant="outline">Our Story &rarr;</Button>
            </NextLink>
            <a href="https://thetackleroom.com">
              <Button variant="outline">Shop TackleRoom &rarr;</Button>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
