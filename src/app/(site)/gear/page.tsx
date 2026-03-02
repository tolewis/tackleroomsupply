import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Card, CardContent } from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Gear",
  description:
    "Saltwater fishing gear reviews — rods, reels, tackle, and accessories tested on the water.",
};

const GEAR_REVIEWS = [
  {
    id: 1,
    title: "Penn Slammer IV 4500",
    excerpt: "The workhorse spinning reel for inshore and nearshore. IPX5 sealed, full metal body. We fished it for 12 months straight.",
    category: "Reels",
    type: "Spinning",
    image: "/images/gear-reel.jpg",
  },
  {
    id: 2,
    title: "St. Croix Mojo Inshore 7'",
    excerpt: "Medium-heavy fast action rod that handles reds, trout, and snook without feeling like a broomstick.",
    category: "Rods",
    type: "Inshore",
    image: "/images/gear-rod.jpg",
  },
  {
    id: 3,
    title: "Daiwa BG MQ 4000",
    excerpt: "Monocoque body, Mag Sealed, and under $200. The best value saltwater spinning reel on the market right now.",
    category: "Reels",
    type: "Spinning",
    image: "/images/gear-reel-2.jpg",
  },
  {
    id: 4,
    title: "Z-Man TRD MinnowZ",
    excerpt: "ElaZtech durability meets a perfect paddletail profile. The lure that stays in our box when everything else rotates out.",
    category: "Lures",
    type: "Soft Plastic",
    image: "/images/tackle-lures.jpg",
  },
  {
    id: 5,
    title: "Power-Pro Super 8 Slick V2",
    excerpt: "Smoother casting, better knot strength, and the coating actually lasts. Our go-to braided line.",
    category: "Line",
    type: "Braided",
    image: "/images/fishing-line.jpg",
  },
  {
    id: 6,
    title: "Simms Challenger Deck Boot",
    excerpt: "Non-marking, drainage ports, and they actually stay comfortable on a 12-hour day. Best deck boot we've worn.",
    category: "Apparel",
    type: "Footwear",
    image: "/images/gear-boots.jpg",
  },
];

export default function GearPage() {
  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Heading as="h1" size="4xl">
            Gear
          </Heading>
          <Text variant="secondary" size="lg" className="mt-3 max-w-2xl">
            Tested on the water, not in a lab. Every piece of tackle here
            has been fished hard before it made this page.
          </Text>
        </div>

        <div className="mb-12 rounded-xl border border-border bg-surface-raised p-6 sm:p-8">
          <Heading as="h2" size="xl" className="mb-3">
            How we review gear
          </Heading>
          <Text variant="secondary" size="sm">
            We buy it, fish it, and report back. No free samples shaping our
            opinions. If a reel seizes after 6 months of salt, you&apos;ll hear
            about it. If a rod blank snaps on a 30-inch red, that goes in the
            review too. We sell tackle at{" "}
            <a href="https://thetackleroom.com" className="text-accent hover:text-accent-hover">
              The TackleRoom
            </a>
            {" "}— which means we only stock what we&apos;d actually fish.
          </Text>
        </div>

        <Grid cols={3}>
          {GEAR_REVIEWS.map((item) => (
            <Card key={item.id} hoverable>
              <div className="aspect-square rounded-lg bg-surface-overlay mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent>
                <div className="flex gap-2 mb-3">
                  <Badge>{item.category}</Badge>
                  <Badge variant="creek">{item.type}</Badge>
                </div>
                <Heading as="h3" size="md" className="mb-1">
                  {item.title}
                </Heading>
                <Text variant="secondary" size="sm">
                  {item.excerpt}
                </Text>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
