import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Card, CardContent } from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {};

const FEATURED_GUIDES = [
  {
    title: "Redfish — The Complete Guide",
    excerpt: "Habitat, tackle, techniques, and seasonal patterns. The definitive red drum playbook.",
    href: "https://thetackleroom.com/blogs/news/redfish-fishing-guide-how-to-catch-red-drum-inshore",
    image: "/images/home-redfish.jpg",
    badge: "Species Guide",
  },
  {
    title: "Florida Keys Destination Guide",
    excerpt: "Flats, bridges, offshore — the most diverse saltwater fishery on Earth.",
    href: "/destinations#florida-keys",
    image: "/images/home-keys.jpg",
    badge: "Destination",
  },
  {
    title: "Braided Line Guide",
    excerpt: "When to use braid, diameter charts, and our top picks for every application.",
    href: "https://thetackleroom.com/blogs/news/braided-fishing-line-guide-when-to-use-braid-diameter-charts-and-top-picks",
    image: "/images/home-braid.jpg",
    badge: "Gear Guide",
  },
];

const SPECIES_PREVIEW = [
  { name: "Tarpon", image: "/images/sp-tarpon.jpg", href: "https://thetackleroom.com/blogs/news/tarpon-fishing-guide-how-to-catch-the-silver-king" },
  { name: "Yellowfin Tuna", image: "/images/sp-yellowfin.jpg", href: "https://thetackleroom.com/blogs/news/yellowfin-tuna-fishing-guide-techniques-tackle-and-top-spots" },
  { name: "Snook", image: "/images/sp-snook.jpg", href: "https://thetackleroom.com/blogs/news/snook-fishing-guide-techniques-tackle-and-where-to-find-them" },
  { name: "Mahi-Mahi", image: "/images/sp-mahi.jpg", href: "https://thetackleroom.com/blogs/news/mahi-mahi-fishing-guide-how-to-catch-dolphin-offshore-1" },
  { name: "Red Snapper", image: "/images/sp-redsnapper.jpg", href: "https://thetackleroom.com/blogs/news/red-snapper-fishing-guide-how-to-catch-handle-and-release" },
  { name: "Sailfish", image: "/images/sp-sailfish.jpg", href: "https://thetackleroom.com/blogs/news/sailfish-fishing-guide" },
];

const DESTINATIONS_PREVIEW = [
  { name: "Florida Keys", image: "/images/dest-keys.jpg", href: "/destinations#florida-keys" },
  { name: "North Carolina", image: "/images/dest-nc.jpg", href: "/destinations#north-carolina" },
  { name: "The Bahamas", image: "/images/dest-bahamas.jpg", href: "/destinations#bahamas" },
  { name: "Louisiana Marsh", image: "/images/dest-louisiana.jpg", href: "/destinations#louisiana" },
  { name: "Gulf Coast", image: "/images/dest-gulf.jpg", href: "/destinations#gulf-coast" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[380px] sm:h-[440px] flex items-end">
        <img
          src="/images/hero-coastal.jpg"
          alt="Saltwater fishing at dawn"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <Container className="relative pb-10 sm:pb-14">
          <Heading as="h1" size="hero" className="!text-white mb-3 max-w-2xl">
            Fish smarter.
            <br />
            Fish more.
          </Heading>
          <Text size="lg" className="!text-white/80 max-w-lg mb-6">
            Saltwater fishing content, species guides, and destination intel.
            From the team behind{" "}
            <a href="https://thetackleroom.com" className="text-accent hover:text-accent-hover">
              The TackleRoom
            </a>.
          </Text>
          <div className="flex gap-3">
            <a
              href="/food"
              className="rounded-lg bg-accent px-6 py-2.5 font-heading font-semibold text-sm text-stone-950 hover:bg-accent-hover transition-colors"
            >
              Species Guides
            </a>
            <a
              href="/destinations"
              className="rounded-lg border border-white/30 px-6 py-2.5 font-heading font-semibold text-sm text-white hover:border-white/60 transition-colors"
            >
              Destinations
            </a>
          </div>
        </Container>
      </div>

      {/* Featured content */}
      <Section>
        <Container>
          <Heading as="h2" size="3xl" className="mb-8">
            Featured
          </Heading>
          <Grid cols={3}>
            {FEATURED_GUIDES.map((guide) => (
              <a
                key={guide.title}
                href={guide.href}
                target={guide.href.startsWith("http") ? "_blank" : undefined}
                rel={guide.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group"
              >
                <Card hoverable>
                  <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent>
                    <Badge variant="creek" className="mb-3">{guide.badge}</Badge>
                    <Heading as="h3" size="lg" className="mb-2">
                      {guide.title}
                    </Heading>
                    <Text variant="secondary" size="sm">
                      {guide.excerpt}
                    </Text>
                  </CardContent>
                </Card>
              </a>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Species strip */}
      <Section className="bg-surface-raised">
        <Container>
          <div className="flex items-end justify-between mb-8">
            <div>
              <Heading as="h2" size="3xl">
                Species Guides
              </Heading>
              <Text variant="secondary" className="mt-2">
                40+ species. Tackle, technique, and where to find them.
              </Text>
            </div>
            <a href="/food" className="text-accent hover:text-accent-hover text-sm font-heading font-semibold whitespace-nowrap">
              View all &rarr;
            </a>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {SPECIES_PREVIEW.map((sp) => (
              <a
                key={sp.name}
                href={sp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                <img
                  src={sp.image}
                  alt={sp.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 font-heading font-bold text-white text-sm drop-shadow-lg">
                  {sp.name}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Destinations strip */}
      <Section>
        <Container>
          <div className="flex items-end justify-between mb-8">
            <div>
              <Heading as="h2" size="3xl">
                Destination Guides
              </Heading>
              <Text variant="secondary" className="mt-2">
                Where to fish and what to throw when you get there.
              </Text>
            </div>
            <a href="/destinations" className="text-accent hover:text-accent-hover text-sm font-heading font-semibold whitespace-nowrap">
              View all &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DESTINATIONS_PREVIEW.map((dest) => (
              <a
                key={dest.name}
                href={dest.href}
                className="group relative aspect-[4/3] lg:aspect-[3/4] rounded-xl overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-heading font-bold text-white text-lg drop-shadow-lg">
                    {dest.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Shop teaser */}
      <div className="relative h-[300px] flex items-center">
        <img
          src="/images/home-shop.jpg"
          alt="Tackle and gear"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <Container className="relative text-center">
          <Heading as="h2" size="3xl" className="!text-white mb-3">
            Read the content. Shop the tackle.
          </Heading>
          <Text className="!text-white/70 mb-6 max-w-lg mx-auto">
            Every guide, species page, and gear review links directly to
            the tackle you need at The TackleRoom.
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
      </div>

      {/* Newsletter */}
      <Section spacing="sm" className="py-8">
        <Container size="narrow" className="text-center">
          <Heading as="h3" size="xl" className="mb-2">
            The Tight Lines Report
          </Heading>
          <Text variant="secondary" size="sm" className="mb-4">
            Weekly species intel, gear drops, and destination guides. From the water.
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
