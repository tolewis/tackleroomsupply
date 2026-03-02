import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Gulf Coast Fishing Guide - Texas to the Florida Panhandle",
  description:
    "Saltwater fishing guide to the Gulf Coast. Texas wade fishing, Florida Panhandle red snapper, Alabama rigs, Mosquito Lagoon sight fishing, and trip planning.",
};

const SECTIONS = [
  {
    heading: "Texas Coast - Galveston to Port Aransas",
    body: "The Texas coast is wade fishing country. Anglers park on the shoreline and walk the flats for speckled trout and redfish. Baffin Bay is legendary for trophy trout over 8 pounds. Port Aransas gives you access to nearshore kingfish and offshore snapper. The Texas two-step: topwater at first light for specks, then switch to soft plastics for reds as the sun gets up.",
  },
  {
    heading: "Florida Panhandle - Destin to Pensacola",
    body: "The Panhandle is where red snapper lives. When federal season opens in June, it's a frenzy of happy anglers pulling up limits of 15-pound snappers. Destin's fleet is one of the largest on the Gulf. Inshore, Choctawhatchee Bay and Pensacola Bay hold redfish, trout, and flounder on the grass flats. The Panhandle is the most affordable Gulf Coast fishing destination - period.",
  },
  {
    heading: "Alabama & Mississippi - The Rigs",
    body: "The oil and gas platforms off Alabama and Mississippi are floating reefs. Red snapper, amberjack, cobia, and king mackerel stack around the structure. A 20-mile run from Orange Beach puts you on hundreds of platforms. The inshore scene is underrated too - Mobile Bay and the Mississippi Sound hold solid redfish and trout populations with very little pressure compared to Florida or Louisiana.",
  },
  {
    heading: "Mosquito Lagoon & Indian River - Florida's Space Coast",
    body: "The Space Coast is where you sight-cast to tailing redfish on glass-calm flats with the Kennedy Space Center in the background. Mosquito Lagoon is the best sight-fishing for redfish in Florida. Indian River Lagoon adds snook, trout, and tarpon. This is light-tackle paradise - 7-weight fly rods, 10lb spinning gear, and fish that will eat a well-placed fly or lure on every cast.",
  },
];

export default function GulfCoastPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] max-h-[660px]">
        <img
          src="/images/dest-gulf.webp"
          alt="Gulf Coast offshore fishing at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <Container>
            <Text variant="secondary" size="sm" className="!text-white/70 uppercase tracking-widest font-heading font-semibold mb-2">
              Destination Guide
            </Text>
            <Heading as="h1" size="hero" className="!text-white mb-2">
              Gulf Coast
            </Heading>
            <Text size="lg" className="!text-white/80 max-w-xl">
              From Texas to the Florida Panhandle
            </Text>
          </Container>
        </div>
      </div>

      {/* Quick facts */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-xl border border-border bg-surface-raised/50">
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Top Species</Text>
                <div className="flex flex-wrap gap-1.5">
                  {["Redfish", "Speckled Trout", "Red Snapper", "King Mackerel", "Tarpon", "Cobia"].map((sp) => (
                    <Badge key={sp} variant="creek">{sp}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Best Months</Text>
                <Text size="sm">Inshore: Year-round. Red snapper: June-July (federal season). Tarpon: May-August.</Text>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Fishing Style</Text>
                <Text size="sm">Bay, flats, nearshore, reef, offshore, oil rigs</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Intro */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Text variant="secondary" size="lg" className="leading-relaxed">
              The Gulf of Mexico is the largest fishery in America. From the flats of Mosquito Lagoon to the oil rigs off Port Aransas, the Gulf Coast delivers year-round saltwater fishing at every level. Inshore, nearshore, and offshore - the Gulf has it all, and most of it is within a tank of gas.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Sections */}
      {SECTIONS.map((section, i) => (
        <Section key={section.heading} className={i % 2 === 0 ? "bg-surface-raised" : ""}>
          <Container>
            <div className="max-w-3xl">
              <Heading as="h2" size="4xl" className="mb-4">
                {section.heading}
              </Heading>
              <Text variant="secondary" className="leading-relaxed">
                {section.body}
              </Text>
            </div>
          </Container>
        </Section>
      ))}

      {/* Shop CTA */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <div className="p-6 rounded-xl border border-border bg-surface-raised/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <Heading as="h4" size="md" className="mb-1">Gear up for the Gulf</Heading>
                <Text variant="secondary" size="sm">Find the exact tackle for this fishery at The TackleRoom.</Text>
              </div>
              <a href="https://thetackleroom.com" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-6 py-2.5 font-heading font-semibold text-sm text-stone-950 hover:bg-accent-hover transition-colors whitespace-nowrap">
                Shop Tackle &rarr;
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
