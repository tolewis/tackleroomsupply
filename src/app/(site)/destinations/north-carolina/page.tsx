import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "North Carolina Coast Fishing Guide - Red Drum, Bluefin Tuna & Surf Fishing",
  description:
    "Saltwater fishing guide to the North Carolina coast and Outer Banks. Red drum run, bluefin tuna, king mackerel, pier fishing, and inshore from Hatteras to Wrightsville Beach.",
};

const SECTIONS = [
  {
    heading: "The Drum Run - Cape Point and Beyond",
    body: "Every fall, massive red drum - 40 to 60 inches - stack up along the Outer Banks beaches. Cape Point at Hatteras is ground zero. Surf anglers wade out with 12-foot rods, 8oz pyramid sinkers, and cut mullet. The bite happens in the sloughs and cuts where the Atlantic chews into the sand. This is bucket-list surf fishing. You will get pulled into your backing.",
  },
  {
    heading: "Offshore - The Gulf Stream Edge",
    body: "Oregon Inlet and Hatteras Inlet give you access to some of the closest Gulf Stream water on the East Coast - 30 miles out in summer, tighter in winter. Yellowfin and bluefin tuna, wahoo, mahi, billfish - the Outer Banks fleet is world-class. Winter bluefin fishing has exploded, with boats running out of Oregon Inlet for giants in January and February.",
  },
  {
    heading: "Inshore - ICW and Sound Side",
    body: "The Pamlico and Albemarle Sounds are the largest estuarine system on the East Coast. Speckled trout, flounder, and red drum patrol the grass flats and oyster bars year-round. The ICW from Wrightsville Beach to Morehead City is loaded with structure. Soft plastics on jig heads, Z-Man paddle tails, and live shrimp under a popping cork are your go-to rigs.",
  },
  {
    heading: "Pier Fishing - Iconic Atlantic Piers",
    body: "Jennette's Pier, Avalon Pier, and Bogue Inlet Pier are institutions. King mackerel, cobia, spanish mackerel, and pompano run the beach from May through October. Live spot and bluefish on king rigs account for most of the big fish. Pier fishing the Outer Banks is a culture - get there before sunrise.",
  },
];

export default function NorthCarolinaPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] max-h-[660px]">
        <img
          src="/images/dest-nc.webp"
          alt="Outer Banks surf fishing at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <Container>
            <Text variant="secondary" size="sm" className="!text-white/70 uppercase tracking-widest font-heading font-semibold mb-2">
              Destination Guide
            </Text>
            <Heading as="h1" size="hero" className="!text-white mb-2">
              North Carolina Coast
            </Heading>
            <Text size="lg" className="!text-white/80 max-w-xl">
              Where the Gulf Stream meets the Outer Banks
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
                  {["Red Drum", "Bluefin Tuna", "King Mackerel", "Flounder", "Speckled Trout", "Cobia"].map((sp) => (
                    <Badge key={sp} variant="creek">{sp}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Best Months</Text>
                <Text size="sm">Red drum run: Sept-Nov. Bluefin: Jan-March. Inshore: April-November.</Text>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Fishing Style</Text>
                <Text size="sm">Surf, pier, inshore, nearshore, offshore</Text>
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
              The North Carolina coast is the most underrated saltwater fishery on the East Coast. The Outer Banks put you within reach of giant red drum in the fall, bluefin tuna in the winter, and everything in between. From Hatteras to Wrightsville Beach, this coastline delivers.
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
                <Heading as="h4" size="md" className="mb-1">Gear up for North Carolina</Heading>
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
