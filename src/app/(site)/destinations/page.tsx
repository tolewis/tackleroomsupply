import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Saltwater Fishing Destination Guides",
  description:
    "Definitive saltwater fishing destination guides for the Florida Keys, North Carolina coast, Bahamas, Louisiana marsh, and Gulf Coast. Where to go, what to throw, and when to fish.",
};

const DESTINATIONS = [
  {
    slug: "florida-keys",
    title: "Florida Keys",
    subtitle: "The flats fishing capital of the world",
    heroImage: "/images/dest-keys.webp",
    description:
      "From Key Largo to Key West, the Keys offer the most diverse saltwater fishing on Earth. Flats, bridges, reef, and blue water - all within a day's run. Home of the Grand Slam.",
    topSpecies: ["Tarpon", "Bonefish", "Permit", "Sailfish", "Mahi-Mahi"],
  },
  {
    slug: "north-carolina",
    title: "North Carolina Coast",
    subtitle: "Where the Gulf Stream meets the Outer Banks",
    heroImage: "/images/dest-nc.webp",
    description:
      "The most underrated saltwater fishery on the East Coast. Giant red drum in the fall surf, bluefin tuna in winter, and the closest Gulf Stream access on the Atlantic seaboard.",
    topSpecies: ["Red Drum", "Bluefin Tuna", "King Mackerel", "Cobia"],
  },
  {
    slug: "bahamas",
    title: "The Bahamas",
    subtitle: "Turquoise flats and deep blue offshore",
    heroImage: "/images/dest-bahamas.webp",
    description:
      "See the fish before you cast. From the bonefish flats of Andros to the Tongue of the Ocean marlin grounds, the Bahamas deliver clear water, healthy populations, and minimal pressure.",
    topSpecies: ["Bonefish", "Permit", "Blue Marlin", "Wahoo"],
  },
  {
    slug: "louisiana",
    title: "Louisiana Marsh",
    subtitle: "America's greatest redfish fishery",
    heroImage: "/images/dest-louisiana.webp",
    description:
      "Thousands of miles of grass-lined bayous and mudflats hold the densest population of red drum in the country. Sight-casting heaven from Venice to Hopedale.",
    topSpecies: ["Redfish", "Speckled Trout", "Black Drum", "Jack Crevalle"],
  },
  {
    slug: "gulf-coast",
    title: "Gulf Coast",
    subtitle: "From Texas to the Florida Panhandle",
    heroImage: "/images/dest-gulf.webp",
    description:
      "The largest fishery in America. Wade the Texas flats for trout, pull red snapper off the Panhandle, or sight-cast Mosquito Lagoon. Year-round fishing at every level.",
    topSpecies: ["Redfish", "Speckled Trout", "Red Snapper", "Tarpon"],
  },
];

export default function DestinationsPage() {
  return (
    <>
      <Section spacing="xl">
        <Container size="narrow" className="text-center">
          <Heading as="h1" size="hero">
            Fish the best water
            <br />
            <span className="text-accent">on the coast.</span>
          </Heading>
          <Text variant="secondary" size="lg" className="mt-6 mx-auto max-w-2xl">
            Definitive destination guides for America&apos;s top saltwater
            fisheries. Where to go, what to throw, and what it actually costs.
          </Text>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8">
            {DESTINATIONS.map((dest, i) => (
              <NextLink
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group block"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border hover:border-accent/40 transition-colors">
                  <div className="relative h-[280px] sm:h-[340px]">
                    <img
                      src={dest.heroImage}
                      alt={dest.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <Text
                        variant="secondary"
                        size="xs"
                        className="!text-white/60 uppercase tracking-widest font-heading font-semibold mb-1"
                      >
                        Destination Guide
                      </Text>
                      <Heading as="h2" size="4xl" className="!text-white mb-1">
                        {dest.title}
                      </Heading>
                      <Text size="sm" className="!text-white/70">
                        {dest.subtitle}
                      </Text>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 bg-surface">
                    <Text variant="secondary" className="mb-4 max-w-2xl">
                      {dest.description}
                    </Text>
                    <div className="flex flex-wrap items-center gap-2">
                      {dest.topSpecies.map((sp) => (
                        <Badge key={sp} variant="creek">
                          {sp}
                        </Badge>
                      ))}
                      <span className="ml-auto font-heading text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
                        Read the guide &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </NextLink>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
