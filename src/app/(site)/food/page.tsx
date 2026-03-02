import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Card, CardContent } from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Species Guides",
  description:
    "Saltwater species guides — how to find, target, and land redfish, snook, trout, tuna, mahi, and more.",
};

const SPECIES_GUIDES = [
  {
    id: 1,
    title: "Redfish — The Complete Guide",
    excerpt: "Habitat, tackle, techniques, and seasonal patterns. Everything you need to consistently find and catch reds.",
    image: "/images/species-redfish.jpg",
    tag: "Inshore",
  },
  {
    id: 2,
    title: "Speckled Trout — Flats to Channels",
    excerpt: "From spring flats to deep winter holes. How specks move through the seasons and how to follow them.",
    image: "/images/species-trout.jpg",
    tag: "Inshore",
  },
  {
    id: 3,
    title: "Yellowfin Tuna — Offshore Playbook",
    excerpt: "Trolling, chunking, and popping. What works, what doesn't, and why your spread matters more than your lures.",
    image: "/images/species-tuna.jpg",
    tag: "Offshore",
  },
  {
    id: 4,
    title: "Snook — Bridges, Beaches, and Backwater",
    excerpt: "The most addictive inshore game fish. Where to find them in every season and what to throw at them.",
    image: "/images/species-snook.jpg",
    tag: "Inshore",
  },
];

export default function SpeciesPage() {
  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Heading as="h1" size="4xl">
            Species Guides
          </Heading>
          <Text variant="secondary" size="lg" className="mt-3">
            How to find, target, and land the saltwater fish you&apos;re
            after. Written by anglers, not marketers.
          </Text>
        </div>

        <Grid cols={2}>
          {SPECIES_GUIDES.map((guide) => (
            <Card key={guide.id} hoverable>
              <div className="aspect-[16/9] rounded-lg bg-surface-overlay mb-4 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent>
                <Badge variant="creek" className="mb-3">{guide.tag}</Badge>
                <Heading as="h3" size="lg" className="mb-2">
                  {guide.title}
                </Heading>
                <Text variant="secondary" size="sm">
                  {guide.excerpt}
                </Text>
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Text variant="muted" className="mt-12 text-center">
          More species guides on the way.
        </Text>
      </Container>
    </Section>
  );
}
