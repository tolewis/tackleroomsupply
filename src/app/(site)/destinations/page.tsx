import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Destination Guides",
  description:
    "Definitive saltwater fishing destination guides — Florida Keys, North Carolina coast, Bahamas, Louisiana marsh, and the Gulf Coast.",
};

interface Destination {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  topSpecies: string[];
  bestMonths: string;
  style: string;
  sections: { heading: string; body: string }[];
}

const DESTINATIONS: Destination[] = [
  {
    id: "florida-keys",
    title: "Florida Keys",
    subtitle: "The flats fishing capital of the world",
    heroImage: "/images/dest-keys.jpg",
    description: "From Key Largo to Key West, the Florida Keys offer the most diverse saltwater fishing on Earth. Crystal-clear flats, deep channels, offshore humps, and bridge pilings hold everything from bonefish to blue marlin — all within a day's run.",
    topSpecies: ["Tarpon", "Bonefish", "Permit", "Snook", "Mahi-Mahi", "Sailfish"],
    bestMonths: "Year-round. Peak tarpon: April–July. Peak bonefish: March–November.",
    style: "Flats, backcountry, bridge, reef, offshore",
    sections: [
      {
        heading: "The Flats — World-Class Sight Fishing",
        body: "The Keys backcountry is where saltwater fly fishing was born. Miles of turtle grass flats hold tailing bonefish, cruising permit, and laid-up tarpon. The best flats fishing happens on the Atlantic side from Islamorada south, with Bahia Honda and the Content Keys producing consistently. Wade or pole — either way, you need stealth, a good push pole, and polarized lenses that cut the glare."
      },
      {
        heading: "Bridge Fishing — The Night Bite",
        body: "Every bridge in the Keys is a fish magnet. The Seven Mile Bridge, Bahia Honda Bridge, and Channel Five produce tarpon, snook, and snapper after dark. The shadow line where light meets darkness is the strike zone. Drop live pilchards, pinfish, or crabs downcurrent and hold on. The biggest tarpon in the Keys are caught within casting distance of the road."
      },
      {
        heading: "Offshore — The Humps and Beyond",
        body: "The Keys sit on the edge of the Gulf Stream. Run 15 miles out and you're in 600 feet of cobalt blue water. The Marathon Hump, Islamorada Hump, and 409 Hump hold yellowfin tuna, blackfin, wahoo, and mahi. Winter sailfish run thick from November through March. Swordfishing at night on the deep drop has become the hottest bite in the Keys — 1,000+ feet down, 200-pound fish."
      },
      {
        heading: "Tackle & Setup",
        body: "Flats fishing: 8-weight fly rod or medium-light spinning with 10lb braid and 12lb fluoro. Bridges: medium-heavy spinning, 20lb braid, 30lb fluoro leader. Offshore: 30–50 class conventional, 65lb braid, wind-on leaders. The Keys are a multi-rod destination — bring everything."
      }
    ]
  },
  {
    id: "north-carolina",
    title: "North Carolina Coast",
    subtitle: "Where the Gulf Stream meets the Outer Banks",
    heroImage: "/images/dest-nc.jpg",
    description: "The North Carolina coast is the most underrated saltwater fishery on the East Coast. The Outer Banks put you within reach of giant red drum in the fall, bluefin tuna in the winter, and everything in between. From Hatteras to Wrightsville Beach, this coastline delivers.",
    topSpecies: ["Red Drum", "Bluefin Tuna", "King Mackerel", "Flounder", "Speckled Trout", "Cobia"],
    bestMonths: "Red drum run: Sept–Nov. Bluefin: Jan–March. Inshore: April–November.",
    style: "Surf, pier, inshore, nearshore, offshore",
    sections: [
      {
        heading: "The Drum Run — Cape Point and Beyond",
        body: "Every fall, massive red drum — 40 to 60 inches — stack up along the Outer Banks beaches. Cape Point at Hatteras is ground zero. Surf anglers wade out with 12-foot rods, 8oz pyramid sinkers, and cut mullet. The bite happens in the sloughs and cuts where the Atlantic chews into the sand. This is bucket-list surf fishing. You will get pulled into your backing."
      },
      {
        heading: "Offshore — The Gulf Stream Edge",
        body: "Oregon Inlet and Hatteras Inlet give you access to some of the closest Gulf Stream water on the East Coast — 30 miles out in summer, tighter in winter. Yellowfin and bluefin tuna, wahoo, mahi, billfish — the Outer Banks fleet is world-class. Winter bluefin fishing has exploded, with boats running out of Oregon Inlet for giants in January and February."
      },
      {
        heading: "Inshore — ICW and Sound Side",
        body: "The Pamlico and Albemarle Sounds are the largest estuarine system on the East Coast. Speckled trout, flounder, and red drum patrol the grass flats and oyster bars year-round. The ICW from Wrightsville Beach to Morehead City is loaded with structure. Soft plastics on jig heads, Z-Man paddle tails, and live shrimp under a popping cork are your go-to rigs."
      },
      {
        heading: "Pier Fishing — Iconic Atlantic Piers",
        body: "Jennette's Pier, Avalon Pier, and Bogue Inlet Pier are institutions. King mackerel, cobia, spanish mackerel, and pompano run the beach from May through October. Live spot and bluefish on king rigs account for most of the big fish. Pier fishing the Outer Banks is a culture — get there before sunrise."
      }
    ]
  },
  {
    id: "bahamas",
    title: "The Bahamas",
    subtitle: "Turquoise flats and deep blue offshore",
    heroImage: "/images/dest-bahamas.jpg",
    description: "The Bahamas are where you go when you want to see the fish before you cast. From the bonefish flats of Andros and Grand Bahama to the deep blue tongue-of-the-ocean marlin grounds, the Bahamas offer fishing that's hard to replicate anywhere else. Clear water, healthy fish populations, and minimal pressure.",
    topSpecies: ["Bonefish", "Permit", "Tarpon", "Blue Marlin", "Wahoo", "Yellowfin Tuna"],
    bestMonths: "Bonefishing: Oct–June. Offshore: April–September. Wahoo: Nov–Feb.",
    style: "Flats, reef, deep sea, blue water",
    sections: [
      {
        heading: "Andros — The Bonefishing Capital",
        body: "Andros Island has more bonefish per square mile of flat than anywhere on Earth. The west side is a labyrinth of creeks, flats, and mangrove-lined channels. Average bonefish run 3–5 pounds with regular shots at 8-pounders. Wade the hard sand flats on a falling tide and you'll see schools of 50+ fish pushing water. An 8-weight fly rod, tan crazy charlie, and a good guide — that's all you need."
      },
      {
        heading: "Grand Bahama & Abaco — Variety",
        body: "Grand Bahama's south shore flats are some of the most accessible bonefishing in the islands. Abaco adds permit, barracuda, and juvenile tarpon to the mix. The reef fishing is outstanding — yellowtail snapper, mutton snapper, and grouper on light tackle. These islands give you the full Bahamas experience without the Andros price tag."
      },
      {
        heading: "Tongue of the Ocean — Big Game",
        body: "The Tongue of the Ocean is a 6,000-foot deep trench between Andros and Nassau. Blue marlin, white marlin, and wahoo patrol the edges. The drop-off from 30 feet to thousands happens in a boat length. Troll the edge with ballyhoo and skirted lures for shots at fish that have never seen a spread. This is expedition-level fishing, 30 minutes from Nassau."
      },
      {
        heading: "Getting There & Logistics",
        body: "Nassau and Freeport have direct flights from most East Coast cities. Andros requires a short puddle-jumper or ferry. Guided flats fishing runs $600–800/day. Bring your own tackle — 8-weight for bones, 10-weight for permit, 12-weight for tarpon. Offshore charters run $1,500–2,500/day. The Bahamas are closer than you think and fish better than you expect."
      }
    ]
  },
  {
    id: "louisiana",
    title: "Louisiana Marsh",
    subtitle: "America's greatest redfish fishery",
    heroImage: "/images/dest-louisiana.jpg",
    description: "The Louisiana marsh is where redfish live. Thousands of miles of grass-lined bayous, shallow ponds, and mudflats hold the densest population of red drum in the country. Venice, Hopedale, Cocodrie, and Delacroix — every launch point puts you on fish. This is sight-fishing heaven if you know where to look.",
    topSpecies: ["Redfish", "Speckled Trout", "Black Drum", "Sheepshead", "Flounder", "Jack Crevalle"],
    bestMonths: "Redfish: Year-round. Peak: Sept–Nov (bull reds). Specks: Oct–March.",
    style: "Marsh, sight-casting, poling, wade fishing",
    sections: [
      {
        heading: "Sight-Casting the Marsh",
        body: "Louisiana marsh fishing is about reading water. Wakes, pushes, tails, and muds — the fish tell you where they are. Pole a skiff through ankle-deep ponds and throw gold spoons, soft plastics, or topwater at fish you can see. Fall is the peak — bull reds push into the marsh to spawn, and schools of 100+ fish are common. A single slot red on a popping cork is a good day anywhere else. Here, it's the first cast."
      },
      {
        heading: "Venice — The End of the Road",
        body: "Venice, Louisiana sits at the mouth of the Mississippi River. It's the most productive fishing town in the Gulf. Inshore marsh redfish and trout. Nearshore cobia and jack crevalle on the rigs. Offshore yellowfin tuna, wahoo, and blue marlin on the oil platforms. You can catch 20 species in a weekend without running more than 30 miles. It's the fishing capital of America and it's not close."
      },
      {
        heading: "Tackle That Works Here",
        body: "Medium-light to medium spinning rods, 10–15lb braid, 20lb fluoro leaders. Gold spoons (Johnson Sprite or Redfish Magic), Z-Man paddle tails on 1/4oz jig heads, and Heddon Super Spooks for topwater. Popping corks with live shrimp for specks. The marsh doesn't require fancy tackle — it requires the right tackle, rigged right, presented to fish you can actually see."
      },
      {
        heading: "Planning Your Trip",
        body: "Fly into New Orleans, drive 90 minutes south to Venice or east to Hopedale. Guided trips run $500–700/day for 1–2 anglers. Bring bug spray, rain gear, and sunscreen — the marsh gives you all three weather conditions in a single morning. Best DIY option: rent a skiff from a local marina and run the ICW. Bring a trolling motor and a push pole."
      }
    ]
  },
  {
    id: "gulf-coast",
    title: "Gulf Coast",
    subtitle: "From Texas to the Florida Panhandle",
    heroImage: "/images/dest-gulf.jpg",
    description: "The Gulf of Mexico is the largest fishery in America. From the flats of Mosquito Lagoon to the oil rigs off Port Aransas, the Gulf Coast delivers year-round saltwater fishing at every level. Inshore, nearshore, and offshore — the Gulf has it all, and most of it is within a tank of gas.",
    topSpecies: ["Redfish", "Speckled Trout", "Red Snapper", "King Mackerel", "Tarpon", "Cobia"],
    bestMonths: "Inshore: Year-round. Red snapper: June–July (federal season). Tarpon: May–August.",
    style: "Bay, flats, nearshore, reef, offshore, oil rigs",
    sections: [
      {
        heading: "Texas Coast — Galveston to Port Aransas",
        body: "The Texas coast is wade fishing country. Anglers park on the shoreline and walk the flats for speckled trout and redfish. Baffin Bay is legendary for trophy trout over 8 pounds. Port Aransas gives you access to nearshore kingfish and offshore snapper. The Texas two-step: topwater at first light for specks, then switch to soft plastics for reds as the sun gets up."
      },
      {
        heading: "Florida Panhandle — Destin to Pensacola",
        body: "The Panhandle is where red snapper lives. When federal season opens in June, it's a frenzy of happy anglers pulling up limits of 15-pound snappers. Destin's fleet is one of the largest on the Gulf. Inshore, Choctawhatchee Bay and Pensacola Bay hold redfish, trout, and flounder on the grass flats. The Panhandle is the most affordable Gulf Coast fishing destination — period."
      },
      {
        heading: "Alabama & Mississippi — The Rigs",
        body: "The oil and gas platforms off Alabama and Mississippi are floating reefs. Red snapper, amberjack, cobia, and king mackerel stack around the structure. A 20-mile run from Orange Beach puts you on hundreds of platforms. The inshore scene is underrated too — Mobile Bay and the Mississippi Sound hold solid redfish and trout populations with very little pressure compared to Florida or Louisiana."
      },
      {
        heading: "Mosquito Lagoon & Indian River — Florida's Space Coast",
        body: "The Space Coast is where you sight-cast to tailing redfish on glass-calm flats with the Kennedy Space Center in the background. Mosquito Lagoon is the best sight-fishing for redfish in Florida. Indian River Lagoon adds snook, trout, and tarpon. This is light-tackle paradise — 7-weight fly rods, 10lb spinning gear, and fish that will eat a well-placed fly or lure on every cast."
      }
    ]
  }
];

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="xl">
        <Container size="narrow" className="text-center">
          <Heading as="h1" size="hero">
            Fish the best water
            <br />
            <span className="text-accent">on the coast.</span>
          </Heading>
          <Text variant="secondary" size="lg" className="mt-6 mx-auto max-w-2xl">
            Definitive destination guides for America&apos;s top saltwater fisheries.
            Where to go, what to throw, and what it actually costs.
          </Text>
        </Container>
      </Section>

      {/* Destination quick nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-surface/80 backdrop-blur-md">
        <Container>
          <div className="flex gap-3 py-3 overflow-x-auto no-scrollbar">
            {DESTINATIONS.map((dest) => (
              <a
                key={dest.id}
                href={`#${dest.id}`}
                className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm font-heading font-medium text-text-secondary hover:text-accent hover:border-accent transition-colors"
              >
                {dest.title}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Destinations */}
      {DESTINATIONS.map((dest, i) => (
        <div key={dest.id} id={dest.id}>
          {/* Full-width hero image */}
          <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
            <img
              src={dest.heroImage}
              alt={dest.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <Container>
                <Text variant="secondary" size="sm" className="!text-white/70 uppercase tracking-widest font-heading font-semibold mb-2">
                  Destination Guide
                </Text>
                <Heading as="h2" size="4xl" className="!text-white mb-2">
                  {dest.title}
                </Heading>
                <Text size="lg" className="!text-white/80 max-w-xl">
                  {dest.subtitle}
                </Text>
              </Container>
            </div>
          </div>

          {/* Content */}
          <Section className={i % 2 === 1 ? "bg-surface-raised" : ""}>
            <Container>
              <div className="max-w-3xl">
                <Text variant="secondary" size="lg" className="mb-8">
                  {dest.description}
                </Text>

                {/* Quick facts */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-6 rounded-xl border border-border bg-surface-raised/50">
                  <div>
                    <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">
                      Top Species
                    </Text>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.topSpecies.map((sp) => (
                        <Badge key={sp} variant="creek">{sp}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">
                      Best Months
                    </Text>
                    <Text size="sm">{dest.bestMonths}</Text>
                  </div>
                  <div>
                    <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">
                      Fishing Style
                    </Text>
                    <Text size="sm">{dest.style}</Text>
                  </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                  {dest.sections.map((section) => (
                    <div key={section.heading}>
                      <Heading as="h3" size="xl" className="mb-3">
                        {section.heading}
                      </Heading>
                      <Text variant="secondary" className="leading-relaxed">
                        {section.body}
                      </Text>
                    </div>
                  ))}
                </div>

                {/* Shop CTA */}
                <div className="mt-10 p-6 rounded-xl border border-border bg-surface-raised/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <Heading as="h4" size="md" className="mb-1">
                      Gear up for {dest.title}
                    </Heading>
                    <Text variant="secondary" size="sm">
                      Find the exact tackle for this fishery at The TackleRoom.
                    </Text>
                  </div>
                  <a
                    href="https://thetackleroom.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-accent px-6 py-2.5 font-heading font-semibold text-sm text-stone-950 hover:bg-accent-hover transition-colors whitespace-nowrap"
                  >
                    Shop Tackle &rarr;
                  </a>
                </div>
              </div>
            </Container>
          </Section>
        </div>
      ))}
    </>
  );
}
