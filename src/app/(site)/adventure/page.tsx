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
    "Saltwater fishing stories, technique guides, and field reports. Sight-casting, trolling, surf fishing, and everything in between.",
};

const FEATURED = {
  title: "Sight-Casting Redfish on the Flats",
  excerpt: "Inshore tactics that actually work — reading the flat, positioning the boat, and making the cast count. The definitive guide to visual redfish fishing.",
  slug: "sight-casting-redfish-on-the-flats-inshore-tactics-that-actually-work",
  image: "/images/story-hero-redfish.jpg",
  category: "Technique",
};

const STORIES = [
  // Technique guides
  {
    title: "Surf Fishing: The Complete Guide",
    excerpt: "Rigs, rods, reading the beach. Everything you need to start catching fish from the sand.",
    slug: "surf-fishing-guide",
    image: "/images/story-surf.jpg",
    category: "Technique",
  },
  {
    title: "Night Fishing in Saltwater",
    excerpt: "Best species, tactics, and gear for fishing after dark. Shadow lines, light selection, and bait choice.",
    slug: "night-fishing-in-saltwater-best-species-tactics-and-gear",
    image: "/images/story-night.jpg",
    category: "Technique",
  },
  {
    title: "Saltwater Fly Fishing Basics",
    excerpt: "Gear, species, and getting started. The honest beginner's guide to fly fishing in salt.",
    slug: "saltwater-fly-fishing-basics-gear-species-and-getting-started",
    image: "/images/story-fly.jpg",
    category: "Technique",
  },
  {
    title: "Kayak Fishing: Inshore & Nearshore",
    excerpt: "You don't need a boat. A complete guide to kayak fishing the saltwater from launch to landing.",
    slug: "kayak-fishing-guide-inshore-and-nearshore-saltwater-from-a-kayak",
    image: "/images/story-kayak.jpg",
    category: "Technique",
  },
  {
    title: "How to Read a Tide Chart",
    excerpt: "Tide, current, and moon phase — the three things that actually determine whether you catch fish.",
    slug: "fall-fishing-on-the-east-coast-where-to-be-and-what-to-target",
    image: "/images/story-tide.jpg",
    category: "Guide",
  },
  {
    title: "Pier Fishing: Rigs, Baits & Species",
    excerpt: "The complete guide to pier fishing. What to throw, where to stand, and which piers produce.",
    slug: "pier-fishing-guide-best-rigs-baits-and-species-from-the-pier",
    image: "/images/story-pier.jpg",
    category: "Technique",
  },
  // Rigging & method
  {
    title: "How to Rig Ballyhoo for Trolling",
    excerpt: "The single most important offshore skill. Step-by-step rigging for swimming and chin-weighted baits.",
    slug: "how-to-rig-ballyhoo-for-saltwater-trolling",
    image: "/images/story-ballyhoo.jpg",
    category: "Rigging",
  },
  {
    title: "How to Fish a Popping Cork",
    excerpt: "Setup, retrieve, and the mistakes that kill your bite. The inshore rig that out-produces everything else.",
    slug: "how-to-fish-a-popping-cork-setup-retrieve-common-mistakes",
    image: "/images/story-cork.jpg",
    category: "Rigging",
  },
  {
    title: "Jigging Guide: Saltwater",
    excerpt: "Vertical jigging, slow pitch, speed jigging — when to use each and what species they target.",
    slug: "jigging-guide-saltwater",
    image: "/images/story-jigging.jpg",
    category: "Technique",
  },
  {
    title: "Bottom Fishing: Rigs, Bait & Technique",
    excerpt: "The most productive method in saltwater. Chicken rigs, knocker rigs, and fish-finder rigs explained.",
    slug: "bottom-fishing-guide",
    image: "/images/story-bottom.jpg",
    category: "Technique",
  },
  {
    title: "Live Bait vs Artificial Lures",
    excerpt: "When to use each in saltwater. The real answer, not the forum argument.",
    slug: "live-bait-vs-artificial-lures-saltwater",
    image: "/images/story-baitvlure.jpg",
    category: "Guide",
  },
  {
    title: "Catch and Release Best Practices",
    excerpt: "How to release fish safely. Handle time, hook removal, revival techniques, and when to keep one.",
    slug: "catch-and-release-best-practices-how-to-release-fish-safely",
    image: "/images/story-release.jpg",
    category: "Guide",
  },
];

const CATEGORY_VARIANTS: Record<string, "default" | "creek" | "ember" | "ridge"> = {
  "Technique": "default",
  "Rigging": "creek",
  "Guide": "ember",
};

export default function StoriesPage() {
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
            <Badge variant="creek" className="mb-3">Featured</Badge>
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

      {/* Stories grid */}
      <Section>
        <Container>
          <div className="mb-10">
            <Heading as="h2" size="3xl">
              Technique & Field Guides
            </Heading>
            <Text variant="secondary" size="lg" className="mt-3 max-w-2xl">
              How to fish, where to fish, and what actually works.
              Every guide lives on{" "}
              <a href="https://thetackleroom.com/blogs/news" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover">
                The TackleRoom
              </a>.
            </Text>
          </div>

          <Grid cols={3}>
            {STORIES.map((story) => (
              <a
                key={story.slug}
                href={`https://thetackleroom.com/blogs/news/${story.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card hoverable>
                  <div className="aspect-[16/10] rounded-lg bg-surface-overlay mb-4 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent>
                    <Badge variant={CATEGORY_VARIANTS[story.category]} className="mb-3">
                      {story.category}
                    </Badge>
                    <Heading as="h3" size="lg" className="mb-2">
                      {story.title}
                    </Heading>
                    <Text variant="secondary" size="sm">
                      {story.excerpt}
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

      {/* Newsletter */}
      <Section className="bg-surface-raised">
        <Container size="narrow" className="text-center">
          <Heading as="h3" size="xl" className="mb-3">
            The Tight Lines Report
          </Heading>
          <Text variant="secondary" size="sm" className="mb-4">
            Weekly fishing content, gear drops, and species intel. From the water, not a desk.
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
        </Container>
      </Section>
    </>
  );
}
