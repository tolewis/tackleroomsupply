import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Louisiana Marsh Fishing Guide - Redfish, Speckled Trout & Venice",
  description:
    "Saltwater fishing guide to the Louisiana marsh. Sight-casting redfish, speckled trout, Venice offshore, and trip planning from Hopedale to Cocodrie.",
};

const SECTIONS = [
  {
    heading: "Sight-Casting the Marsh",
    body: "Louisiana marsh fishing is about reading water. Wakes, pushes, tails, and muds - the fish tell you where they are. Pole a skiff through ankle-deep ponds and throw gold spoons, soft plastics, or topwater at fish you can see. Fall is the peak - bull reds push into the marsh to spawn, and schools of 100+ fish are common. A single slot red on a popping cork is a good day anywhere else. Here, it's the first cast.",
  },
  {
    heading: "Venice - The End of the Road",
    body: "Venice, Louisiana sits at the mouth of the Mississippi River. It's the most productive fishing town in the Gulf. Inshore marsh redfish and trout. Nearshore cobia and jack crevalle on the rigs. Offshore yellowfin tuna, wahoo, and blue marlin on the oil platforms. You can catch 20 species in a weekend without running more than 30 miles. It's the fishing capital of America and it's not close.",
  },
  {
    heading: "Tackle That Works Here",
    body: "Medium-light to medium spinning rods, 10-15lb braid, 20lb fluoro leaders. Gold spoons (Johnson Sprite or Redfish Magic), Z-Man paddle tails on 1/4oz jig heads, and Heddon Super Spooks for topwater. Popping corks with live shrimp for specks. The marsh doesn't require fancy tackle - it requires the right tackle, rigged right, presented to fish you can actually see.",
  },
  {
    heading: "Planning Your Trip",
    body: "Fly into New Orleans, drive 90 minutes south to Venice or east to Hopedale. Guided trips run $500-700/day for 1-2 anglers. Bring bug spray, rain gear, and sunscreen - the marsh gives you all three weather conditions in a single morning. Best DIY option: rent a skiff from a local marina and run the ICW. Bring a trolling motor and a push pole.",
  },
];

export default function LouisianaPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] max-h-[660px]">
        <img
          src="/images/dest-louisiana.webp"
          alt="Louisiana marsh creek at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <Container>
            <Text variant="secondary" size="sm" className="!text-white/70 uppercase tracking-widest font-heading font-semibold mb-2">
              Destination Guide
            </Text>
            <Heading as="h1" size="hero" className="!text-white mb-2">
              Louisiana Marsh
            </Heading>
            <Text size="lg" className="!text-white/80 max-w-xl">
              America&apos;s greatest redfish fishery
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
                  {["Redfish", "Speckled Trout", "Black Drum", "Sheepshead", "Flounder", "Jack Crevalle"].map((sp) => (
                    <Badge key={sp} variant="creek">{sp}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Best Months</Text>
                <Text size="sm">Redfish: Year-round. Peak: Sept-Nov (bull reds). Specks: Oct-March.</Text>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Fishing Style</Text>
                <Text size="sm">Marsh, sight-casting, poling, wade fishing</Text>
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
              The Louisiana marsh is where redfish live. Thousands of miles of grass-lined bayous, shallow ponds, and mudflats hold the densest population of red drum in the country. Venice, Hopedale, Cocodrie, and Delacroix - every launch point puts you on fish. This is sight-fishing heaven if you know where to look.
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
                <Heading as="h4" size="md" className="mb-1">Gear up for Louisiana</Heading>
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
