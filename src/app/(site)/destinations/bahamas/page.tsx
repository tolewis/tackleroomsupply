import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Bahamas Fishing Guide - Bonefish, Permit & Blue Water",
  description:
    "Saltwater fishing guide to the Bahamas. Bonefish flats on Andros and Grand Bahama, permit, blue marlin in the Tongue of the Ocean, and trip planning.",
};

const SECTIONS = [
  {
    heading: "Andros - The Bonefishing Capital",
    body: "Andros Island has more bonefish per square mile of flat than anywhere on Earth. The west side is a labyrinth of creeks, flats, and mangrove-lined channels. Average bonefish run 3-5 pounds with regular shots at 8-pounders. Wade the hard sand flats on a falling tide and you'll see schools of 50+ fish pushing water. An 8-weight fly rod, tan crazy charlie, and a good guide - that's all you need.",
  },
  {
    heading: "Grand Bahama & Abaco - Variety",
    body: "Grand Bahama's south shore flats are some of the most accessible bonefishing in the islands. Abaco adds permit, barracuda, and juvenile tarpon to the mix. The reef fishing is outstanding - yellowtail snapper, mutton snapper, and grouper on light tackle. These islands give you the full Bahamas experience without the Andros price tag.",
  },
  {
    heading: "Tongue of the Ocean - Big Game",
    body: "The Tongue of the Ocean is a 6,000-foot deep trench between Andros and Nassau. Blue marlin, white marlin, and wahoo patrol the edges. The drop-off from 30 feet to thousands happens in a boat length. Troll the edge with ballyhoo and skirted lures for shots at fish that have never seen a spread. This is expedition-level fishing, 30 minutes from Nassau.",
  },
  {
    heading: "Getting There & Logistics",
    body: "Nassau and Freeport have direct flights from most East Coast cities. Andros requires a short puddle-jumper or ferry. Guided flats fishing runs $600-800/day. Bring your own tackle - 8-weight for bones, 10-weight for permit, 12-weight for tarpon. Offshore charters run $1,500-2,500/day. The Bahamas are closer than you think and fish better than you expect.",
  },
];

export default function BahamasPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] max-h-[660px]">
        <img
          src="/images/dest-bahamas.webp"
          alt="Turquoise Bahamas water from above"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <Container>
            <Text variant="secondary" size="sm" className="!text-white/70 uppercase tracking-widest font-heading font-semibold mb-2">
              Destination Guide
            </Text>
            <Heading as="h1" size="hero" className="!text-white mb-2">
              The Bahamas
            </Heading>
            <Text size="lg" className="!text-white/80 max-w-xl">
              Turquoise flats and deep blue offshore
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
                  {["Bonefish", "Permit", "Tarpon", "Blue Marlin", "Wahoo", "Yellowfin Tuna"].map((sp) => (
                    <Badge key={sp} variant="creek">{sp}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Best Months</Text>
                <Text size="sm">Bonefishing: Oct-June. Offshore: April-September. Wahoo: Nov-Feb.</Text>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Fishing Style</Text>
                <Text size="sm">Flats, reef, deep sea, blue water</Text>
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
              The Bahamas are where you go when you want to see the fish before you cast. From the bonefish flats of Andros and Grand Bahama to the deep blue Tongue of the Ocean marlin grounds, the Bahamas offer fishing that is hard to replicate anywhere else. Clear water, healthy fish populations, and minimal pressure.
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
                <Heading as="h4" size="md" className="mb-1">Gear up for the Bahamas</Heading>
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
