import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Species Guides",
  description:
    "Saltwater species guides for 37+ gamefish — redfish, snook, tarpon, tuna, mahi, marlin, and more. How to find, rig, and catch every species.",
};

interface Species {
  name: string;
  slug: string;
  category: "Inshore" | "Offshore" | "Reef & Bottom" | "Flats & Backcountry";
  image: string;
}

const SPECIES: Species[] = [
  // Inshore
  { name: "Redfish", slug: "redfish-fishing-guide-how-to-catch-red-drum-inshore", category: "Inshore", image: "/images/sp-redfish.webp" },
  { name: "Speckled Trout", slug: "speckled-trout-fishing-guide-how-to-catch-spotted-seatrout", category: "Inshore", image: "/images/sp-trout.webp" },
  { name: "Snook", slug: "snook-fishing-guide-techniques-tackle-and-where-to-find-them", category: "Inshore", image: "/images/sp-snook.webp" },
  { name: "Flounder", slug: "flounder-fishing-guide-how-to-catch-flounder-inshore-and-nearshore", category: "Inshore", image: "/images/sp-flounder.webp" },
  { name: "Black Drum", slug: "black-drum-fishing-guide-how-to-catch-black-drum-inshore", category: "Inshore", image: "/images/sp-blackdrum.webp" },
  { name: "Jack Crevalle", slug: "jack-crevalle-fishing-guide-how-to-catch-the-hardest-fighting-inshore-fish", category: "Inshore", image: "/images/sp-jack.webp" },
  { name: "Sheepshead", slug: "sheepshead-fishing-guide-best-baits-rigs-where-to-fish", category: "Inshore", image: "/images/sp-sheepshead.webp" },
  { name: "Tripletail", slug: "tripletail-fishing-guide-how-to-sight-fish-for-tripletail", category: "Inshore", image: "/images/sp-tripletail.webp" },
  { name: "Pompano", slug: "pompano-fishing-guide-surf-rigs-bait-seasonal-tactics", category: "Inshore", image: "/images/sp-pompano.webp" },
  { name: "Bluefish", slug: "bluefish-fishing-guide-how-to-catch-blues-from-shore-and-boat", category: "Inshore", image: "/images/sp-bluefish.webp" },
  { name: "Striped Bass", slug: "striped-bass-fishing-guide", category: "Inshore", image: "/images/sp-striper.webp" },
  // Offshore / Pelagic
  { name: "Yellowfin Tuna", slug: "yellowfin-tuna-fishing-guide-techniques-tackle-and-top-spots", category: "Offshore", image: "/images/sp-yellowfin.webp" },
  { name: "Bluefin Tuna", slug: "bluefin-tuna-fishing-guide-tackle-techniques-and-where-to-find-giants", category: "Offshore", image: "/images/sp-bluefin.webp" },
  { name: "Bigeye Tuna", slug: "bigeye-tuna-fishing-guide", category: "Offshore", image: "/images/sp-bigeye.webp" },
  { name: "Blackfin Tuna", slug: "blackfin-tuna-fishing-guide-jigging-trolling-and-live-bait-tactics", category: "Offshore", image: "/images/sp-blackfin.webp" },
  { name: "Mahi-Mahi", slug: "mahi-mahi-fishing-guide-how-to-catch-dolphin-offshore-1", category: "Offshore", image: "/images/sp-mahi.webp" },
  { name: "Wahoo", slug: "wahoo-fishing-guide-high-speed-trolling-and-tactics-for-speed-demons", category: "Offshore", image: "/images/sp-wahoo.webp" },
  { name: "Sailfish", slug: "sailfish-fishing-guide", category: "Offshore", image: "/images/sp-sailfish.webp" },
  { name: "Blue Marlin", slug: "blue-marlin-fishing-guide-tackle-techniques-where-to-find-giants", category: "Offshore", image: "/images/sp-bluemarlin.webp" },
  { name: "White Marlin", slug: "white-marlin-fishing-guide-tackle-techniques-where-to-fish", category: "Offshore", image: "/images/sp-whitemarlin.webp" },
  { name: "Striped Marlin", slug: "striped-marlin-fishing-guide", category: "Offshore", image: "/images/sp-stripedmarlin.webp" },
  { name: "Black Marlin", slug: "black-marlin-fishing-guide", category: "Offshore", image: "/images/sp-blackmarlin.webp" },
  { name: "Swordfish", slug: "swordfish-fishing-guide-deep-drop-tactics-gear-rigging", category: "Offshore", image: "/images/sp-swordfish.webp" },
  { name: "King Mackerel", slug: "king-mackerel-fishing-guide-how-to-catch-smoker-kings", category: "Offshore", image: "/images/sp-kingmack.webp" },
  { name: "Spanish Mackerel", slug: "spanish-mackerel-fishing-guide", category: "Offshore", image: "/images/sp-spanish.webp" },
  { name: "Cobia", slug: "cobia-fishing-guide-how-to-catch-cobia-by-sight-casting-and-live-bait", category: "Offshore", image: "/images/sp-cobia.webp" },
  { name: "Amberjack", slug: "amberjack-fishing-guide", category: "Offshore", image: "/images/sp-amberjack.webp" },
  { name: "Barracuda", slug: "barracuda-fishing-guide", category: "Offshore", image: "/images/sp-barracuda.webp" },
  { name: "Bonito", slug: "bonito-fishing-guide-how-to-catch-bonito-false-albacore", category: "Offshore", image: "/images/sp-bonito.webp" },
  { name: "Roosterfish", slug: "roosterfish-fishing-guide-how-to-catch-this-bucket-list-gamefish", category: "Offshore", image: "/images/sp-roosterfish.webp" },
  // Reef & Bottom
  { name: "Red Snapper", slug: "red-snapper-fishing-guide-how-to-catch-handle-and-release", category: "Reef & Bottom", image: "/images/sp-redsnapper.webp" },
  { name: "Grouper", slug: "grouper-fishing-guide-how-to-catch-gag-red-black-grouper", category: "Reef & Bottom", image: "/images/sp-grouper.webp" },
  { name: "Snapper", slug: "snapper-fishing-guide-red-mangrove-cubera-tactics", category: "Reef & Bottom", image: "/images/sp-snapper.webp" },
  { name: "Tautog", slug: "tautog-fishing-guide-how-to-catch-blackfish-on-structure", category: "Reef & Bottom", image: "/images/sp-tautog.webp" },
  { name: "Sea Bass", slug: "sea-bass-fishing-guide-how-to-catch-black-sea-bass", category: "Reef & Bottom", image: "/images/sp-seabass.webp" },
  { name: "Tilefish", slug: "tilefish-fishing-guide-deep-drop-tactics-for-golden-and-blueline-tiles", category: "Reef & Bottom", image: "/images/sp-tilefish.webp" },
  { name: "Yellowtail", slug: "yellowtail-fishing-guide-techniques-tackle-where-to-find-them", category: "Reef & Bottom", image: "/images/sp-yellowtail.webp" },
  // Flats & Backcountry
  { name: "Tarpon", slug: "tarpon-fishing-guide-how-to-catch-the-silver-king", category: "Flats & Backcountry", image: "/images/sp-tarpon.webp" },
  { name: "Bonefish", slug: "bonefish-fishing-guide", category: "Flats & Backcountry", image: "/images/sp-bonefish.webp" },
  { name: "Permit", slug: "permit-fishing-guide", category: "Flats & Backcountry", image: "/images/sp-permit.webp" },
];

const CATEGORIES = ["Inshore", "Offshore", "Reef & Bottom", "Flats & Backcountry"] as const;

const CATEGORY_VARIANTS: Record<string, "default" | "creek" | "ember" | "ridge"> = {
  "Inshore": "creek",
  "Offshore": "default",
  "Reef & Bottom": "ember",
  "Flats & Backcountry": "ridge",
};

export default function SpeciesPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="xl">
        <Container size="narrow" className="text-center">
          <Heading as="h1" size="hero">
            Every saltwater species.
            <br />
            <span className="text-accent">One playbook.</span>
          </Heading>
          <Text variant="secondary" size="lg" className="mt-6 mx-auto max-w-2xl">
            40 species guides covering inshore, offshore, reef, and flats.
            Tackle, technique, seasonal patterns, and where to find them.
            Written by anglers who fish these waters.
          </Text>
        </Container>
      </Section>

      {/* Destination cross-links */}
      <Section spacing="sm">
        <Container>
          <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-3">Where to fish these species</Text>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { title: "Florida Keys", sub: "Tarpon, permit, bonefish, snook, mahi", href: "/destinations/florida-keys", img: "/images/dest-keys.webp" },
              { title: "North Carolina", sub: "Red drum, bluefin, king mackerel, cobia", href: "/destinations/north-carolina", img: "/images/dest-nc.webp" },
              { title: "The Bahamas", sub: "Bonefish, blue marlin, wahoo, yellowtail", href: "/destinations/bahamas", img: "/images/dest-bahamas.webp" },
              { title: "Louisiana Marsh", sub: "Redfish, speckled trout, black drum", href: "/destinations/louisiana", img: "/images/dest-louisiana.webp" },
              { title: "Gulf Coast", sub: "Red snapper, cobia, king mackerel, tarpon", href: "/destinations/gulf-coast", img: "/images/dest-gulf.webp" },
            ].map((d) => (
              <NextLink key={d.href} href={d.href} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="block text-sm font-heading font-semibold text-white drop-shadow-lg">{d.title}</span>
                  <span className="block text-xs text-white/70 mt-0.5">{d.sub}</span>
                </div>
              </NextLink>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-surface/80 backdrop-blur-md">
        <Container>
          <div className="flex gap-3 py-3 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm font-heading font-medium text-text-secondary hover:text-accent hover:border-accent transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Species by category */}
      {CATEGORIES.map((category) => {
        const species = SPECIES.filter((s) => s.category === category);
        return (
          <Section key={category} id={category.toLowerCase().replace(/[^a-z]/g, "-")}>
            <Container>
              <div className="mb-8">
                <Badge variant={CATEGORY_VARIANTS[category]} className="mb-3">
                  {category}
                </Badge>
                <Heading as="h2" size="3xl">
                  {category === "Inshore" && "Inshore Gamefish"}
                  {category === "Offshore" && "Offshore & Pelagic"}
                  {category === "Reef & Bottom" && "Reef & Bottom Species"}
                  {category === "Flats & Backcountry" && "Flats & Backcountry"}
                </Heading>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {species.map((sp) => (
                  <a
                    key={sp.name}
                    href={`https://thetackleroom.com/blogs/news/${sp.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden"
                  >
                    <img
                      src={sp.image}
                      alt={sp.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="font-heading font-bold text-white text-lg leading-tight drop-shadow-lg">
                        {sp.name}
                      </span>
                      <span className="block text-xs text-white/70 mt-0.5 font-medium">
                        Full guide on TackleRoom &rarr;
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* CTA */}
      <Section className="bg-surface-raised">
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="3xl" className="mb-4">
            Shop the tackle
          </Heading>
          <Text variant="secondary" size="lg" className="mx-auto mb-6">
            Every species guide links to the exact gear you need.
            Rods, reels, line, and terminal tackle — all at The TackleRoom.
          </Text>
          <a
            href="https://thetackleroom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent px-8 py-3 font-heading font-semibold text-stone-950 hover:bg-accent-hover transition-colors"
          >
            Shop TackleRoom
          </a>
        </Container>
      </Section>
    </>
  );
}
