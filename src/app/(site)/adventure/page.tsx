import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Card, CardContent } from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Saltwater fishing stories — inshore, offshore, surf fishing, gear reviews, and fishing reports from the field.",
};

const STORIES = [
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
    excerpt: "After a decade of tackle hoarding, here's what actually stays in the box.",
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
    excerpt: "Drum run, cold fronts, and the best beach fishing on the East Coast.",
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
    excerpt: "Tide, current, and moon phase — the three things that determine whether you catch fish.",
    category: "Guide",
    image: "/images/coastal-tide.jpg",
  },
  {
    id: 7,
    title: "Night Fishing for Snook Under the Lights",
    excerpt: "Bridge lights, dock lights, and the shadow line. Everything you need to know about snook after dark.",
    category: "Inshore",
    image: "/images/night-fishing.jpg",
  },
  {
    id: 8,
    title: "Braid vs Mono vs Fluoro — The Real Answer",
    excerpt: "Stop asking forums. Here's when to use each, why, and the one thing most anglers get wrong.",
    category: "Gear",
    image: "/images/fishing-line.jpg",
  },
  {
    id: 9,
    title: "Kayak Fishing the ICW — A Beginner's Map",
    excerpt: "You don't need a boat to catch fish. An honest guide to kayak fishing the Intracoastal.",
    category: "Inshore",
    image: "/images/kayak-fishing.jpg",
  },
];

export default function StoriesPage() {
  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Heading as="h1" size="4xl">
            Stories
          </Heading>
          <Text variant="secondary" size="lg" className="mt-3">
            Fishing reports, gear reviews, and saltwater stories from the water.
          </Text>
        </div>

        <Grid cols={3}>
          {STORIES.map((story) => (
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

        <div className="mt-16 text-center">
          <Heading as="h3" size="xl" className="mb-3">
            Get the report
          </Heading>
          <Text variant="secondary" size="sm" className="mb-4">
            The Tight Lines Report — weekly fishing content, delivered.
          </Text>
          <div className="flex gap-2 max-w-sm mx-auto">
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
        </div>
      </Container>
    </Section>
  );
}
