import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Louisiana Marsh Fishing Guide - Redfish, Speckled Trout & Venice",
  description:
    "Complete guide to Louisiana marsh fishing. Sight-cast redfish on shallow flats, chase speckled trout through winding bayous, and fish Venice for offshore yellowfin tuna and blue marlin. Tackle, calendar, and trip-planning details.",
};

const SECTIONS = [
  { id: "sight-casting", label: "Sight-Casting" },
  { id: "venice", label: "Venice" },
  { id: "speckled-trout", label: "Speckled Trout" },
  { id: "black-drum", label: "Black Drum" },
  { id: "calendar", label: "Calendar" },
  { id: "tackle", label: "Tackle" },
  { id: "trip", label: "Plan Your Trip" },
  { id: "regs", label: "Regulations" },
];

const MONTH_DATA = [
  { month: "January", species: "Trophy speckled trout, redfish, black drum, sheepshead", note: "Trophy specks in deep channels and basins. Redfish stacking in residential canals and warm-water drains. Black drum staging nearshore. Sheepshead thick on bridge pilings and jetties." },
  { month: "February", species: "Black drum (peak), speckled trout, redfish, flounder", note: "Black drum peak on full and new moon tides. Big specks in 6 inches of water chasing mullet on warm afternoons. Redfish transitioning from winter pattern to open marsh." },
  { month: "March", species: "Speckled trout (spring run), black drum, redfish, sheepshead", note: "Speckled trout spring run kicks off March 1. Black drum peak continues. Redfish active across open marsh and bayou mouths. Sheepshead spawn nearshore." },
  { month: "April", species: "Speckled trout (most productive), redfish, cobia", note: "Most productive month for specks. Trout schooling on ledge walls in winding bayous at 10-20 ft. Redfish spreading across interior marsh ponds. Cobia showing on Venice nearshore wrecks." },
  { month: "May", species: "Speckled trout, redfish, yellowfin tuna (Venice), jack crevalle", note: "Specks bite remains strong. Redfish sight-casting improving as water clears. Venice offshore yellowfin tuna in full swing. Jacks pushing into passes and bayou mouths." },
  { month: "June", species: "Redfish (topwater peak), speckled trout, yellowfin tuna, wahoo", note: "Best month for topwater redfish before mullet get too dense. Specks sunrise bite on shell reefs. Venice yellowfin and wahoo on oil platforms. Flounder on mud bottoms near marsh drains." },
  { month: "July", species: "Redfish, speckled trout, blue marlin (Venice), flounder", note: "Last window for topwater redfish on open flats. Early morning and evening specks on popping corks. Venice blue marlin season heating up. Water temps stabilize in low-to-mid 70s." },
  { month: "August", species: "Bull redfish (early), speckled trout, yellowfin tuna, tarpon", note: "Bull reds beginning to push toward passes. Specks moving to deeper structure midday. Venice offshore at peak for yellowfin, wahoo, and marlin. Tarpon in passes and nearshore Gulf." },
  { month: "September", species: "Bull red drum (run begins), speckled trout, cobia, jack crevalle", note: "Bull red run begins in earnest. Schools of 100+ bulls on open beaches and passes. Specks picking up on fall cooling. Venice nearshore cobia and jack crevalle." },
  { month: "October", species: "Bull redfish (peak), speckled trout, flounder", note: "Peak bull red season - fish pushing 30 inches at 12-13 lbs. Specks fall bite heating up in bayous. Flounder run to open Gulf begins. Best month for sheer variety." },
  { month: "November", species: "Bull redfish, speckled trout, black drum", note: "Bulls still thick on spawning grounds. Specks transitioning to winter deep-water pattern. Black drum moving inshore on first cold fronts. Reds schooling in residential canals." },
  { month: "December", species: "Trophy speckled trout, redfish, sheepshead, black drum", note: "Trophy specks in deep channels and warm drains. Redfish concentrated in warm-water outflows and canals. Sheepshead stacking on pilings and jetties. Black drum pre-staging for February peak." },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[240px] sm:h-[300px] rounded-xl overflow-hidden mb-8">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

export default function LouisianaPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] max-h-[660px]">
        <img
          src="/images/dest-louisiana.webp"
          alt="Louisiana marsh flat with redfish tailing at sunrise"
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

      {/* Sticky section nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-surface/80 backdrop-blur-md">
        <Container>
          <div className="flex gap-3 py-3 overflow-x-auto no-scrollbar">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm font-heading font-medium text-text-secondary hover:text-accent hover:border-accent transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Quick facts */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-xl border border-border bg-surface-raised/50">
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Top Species</Text>
                <div className="flex flex-wrap gap-1.5">
                  {["Redfish", "Speckled Trout", "Black Drum", "Sheepshead", "Yellowfin Tuna", "Blue Marlin"].map((sp) => (
                    <Badge key={sp} variant="creek">{sp}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Best Months</Text>
                <Text size="sm">Year-round. Bull reds: Sept-Nov. Specks: March-June. Venice offshore: May-August.</Text>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Fishing Style</Text>
                <Text size="sm">Sight-casting, marsh poling, popping corks, offshore trolling, nearshore</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Intro */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <Text variant="secondary" size="lg" className="leading-relaxed">
              Louisiana holds thousands of miles of bayous, cuts, pipeline canals, and flooded grass flats that together form the densest red drum population on the planet. The Mississippi River dumps nutrient-rich sediment into a labyrinth of brackish marsh that feeds everything from juvenile shrimp to 40-lb bull redfish. This is not a fishery you visit once. It is a fishery that ruins every other fishery for you.
            </Text>
            <Text variant="secondary" className="leading-relaxed">
              The launch points read like a greatest-hits album: Venice at the mouth of the Mississippi, Hopedale on the eastern marsh, Cocodrie in the south-central delta, and Delacroix tucked into the southeast marsh. Each one puts you within minutes of world-class inshore fishing. Venice adds offshore yellowfin tuna, blue marlin, and wahoo on top of that. No other region in the country stacks this much variety into such a small footprint.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Sight-Casting the Marsh */}
      <Section className="bg-surface-raised" id="sight-casting">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <SectionImage src="/images/gal-flats-cast.webp" alt="Angler sight-casting to redfish tailing on a Louisiana marsh flat" />
              <Heading as="h2" size="4xl" className="mb-4">Sight-Casting the Marsh</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  Reading water in the Louisiana marsh is a full-body discipline. You stand on the bow of a poled skiff in ankle-deep water and look for wakes, pushes, tails, and muds. A wake is a V-shaped disturbance moving across a flat. A push is a subtle bulge of water ahead of a moving fish. Tails are the obvious giveaway: bronze-orange fins breaking the surface as a redfish roots through mud for crabs and shrimp. Muds are discolored plumes of silt that reveal a feeding school even when you cannot see individual fish.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Redfish utilize depth changes as small as 1-2 ft. Shallow grass flats adjacent to deeper bayous and pipeline cuts are the prime zones. Fish cruise the flat to feed and slide into the deeper water when spooked or resting. Tidal movement is the engine. On falling tides, redfish congregate at marsh drains to ambush shrimp and baitfish funneling out of flooded grass. On rising tides, they push onto the flats and spread out. Tailing is most visible in clear glass-calm conditions, which is why early morning before the wind picks up is the money window.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The 18-22 inch range dominates much of the marsh, fish from the 2021 spawn class that have grown into solid slot reds. Thirty-inch fish run 12-13 lbs and pull like a truck in knee-deep water. Activity improves when water temps stabilize in the low-to-mid 70s F, which typically happens by late April and holds through October. June and July are the best months for topwater before mullet populations become too dense and give the redfish too many easy meals.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Fall is the headline event. Bull reds push into passes and along open beaches to spawn from September through November. Schools of 100+ fish are not exaggeration. They are a regular occurrence on the right tide and wind. You pole into position, make a long cast with a gold spoon or a Z-Man paddletail on a 1/4 oz jighead, and strip it through the school. If the spoon gets ignored, switch to a soft plastic. If both get ignored, tie on a Heddon Super Spook and work topwater. These fish are aggressive. The problem is not getting a bite. The problem is choosing which fish in the school to cast to.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Understanding what redfish eat and when they eat it is half the game. Shrimp, crabs, mullet, and small croakers make up the bulk of the diet. Matching the{" "}
                  <NextLink href="/food" className="text-accent hover:underline">forage species</NextLink>{" "}
                  in your area will consistently outproduce a random lure selection.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Fly fishing the Louisiana marsh is world-class. An 8-weight fly rod is the standard tool for marsh redfish. Gold spoon patterns, EP shrimp in chartreuse/white, and Clouser Minnows in chartreuse and white are the proven flies. Weedless patterns are essential when working grass-lined drains and ponds. Poling skinny water for tailing reds on fly is as good as it gets anywhere on Earth. When a school of tailing redfish pushes across an open flat, strip a weedless fly 2-3 feet ahead of the lead fish and let it sink. The eat is visual and violent. Use a stripping basket to manage loose line in the wind.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Venice */}
      <Section id="venice">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <SectionImage src="/images/gal-dawn-boat.webp" alt="Charter boat leaving Venice marina at dawn heading to the Gulf" />
              <Heading as="h2" size="4xl" className="mb-4">Venice - The End of the Road</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  Venice sits at the mouth of the Mississippi River, the last town before the road literally ends and the land dissolves into open Gulf. It is the most productive fishing town in the Gulf of Mexico and has a legitimate claim to the title of fishing capital of America. No other single location on the Gulf Coast puts anglers within striking distance of this many species in this many environments.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Inshore, the marsh around Venice holds redfish and speckled trout on every tide. Run 10 minutes in any direction from the marina and you are in fishable water. Nearshore, the rigs and wrecks within sight of land produce cobia, jack crevalle, and tripletail on any given day. Offshore, the oil platforms scattered across the Gulf shelf concentrate yellowfin tuna, wahoo, and blue marlin in numbers that offshore-only towns in other states would kill for.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The math is simple. You can target 20 species in a single weekend without running 30 miles from the dock. A morning inshore redfish trip, an afternoon nearshore cobia run, and a next-day offshore tuna slam are all possible from the same marina. That kind of versatility does not exist anywhere else in the lower 48.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Yellowfin tuna trolling out of Venice revolves around the oil platforms. The rigs create artificial reef systems that concentrate baitfish, which stack yellowfin in predictable patterns. Standard trolling spreads run skirted ballyhoo on the long riggers, cedar plugs on the short riggers, and diving plugs on the flat lines. Run 6-8 knots between platforms, targeting the up-current side where bait concentrates. When you find tuna busting on the surface, switch to chunk fishing - cut skipjack or blackfin into fist-sized pieces and create a chum slick that holds the school behind the boat. Popping corks rigged with large live bait are surprisingly effective for yellowfin when fish are feeding mid-column around the rigs.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The platform pattern is the key to Venice offshore. Fish the up-current rig first at dawn, then work down-current through a string of platforms as the morning progresses. Yellowfin stack at the thermocline, typically 80-150 feet down on the deeper platforms. Vertical jigging with 6-8 oz butterfly jigs produces when trolling goes quiet. Blue marlin cruise the edges of the shelf break south of the rigs from June through September. The Venice fleet runs shorter distances to quality blue water than any other Gulf port.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Speckled Trout */}
      <Section className="bg-surface-raised" id="speckled-trout">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">Speckled Trout</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  The Louisiana spring speckled trout bite starts March 1 and runs strong through the summer solstice. April is the most productive month. Spring fish congregate on ledge walls in winding bayous at 10-20 ft depth, feeding on juvenile croakers that are flushing out of interior marsh. The average fish runs 18 inches, but schools routinely contain 20-24 inch fish, and fish up to 10 lbs are taken every season. The IGFA all-tackle world record is 17 lbs 7 oz, caught in Fort Pierce, Florida in 1995.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Trout have two prominent spiked teeth in the upper jaw. They strike hard and shake violently. Aggressive hook sets are not optional. Set the drag up to 9 lbs on big fish and do not baby them. A loose drag on a speckled trout is a lost fish. The standard rig is a 7.5-ft medium spinning rod with 10-lb braid and a 30-40 lb fluorocarbon leader. Popping corks with live shrimp underneath account for more speckled trout than any other presentation in Louisiana.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The winter pattern is where trophy hunters focus. Gulf Coast winter pushes big trout, 8 lbs and up, into 6 inches of water where mullet seek shallow muddy warmth on sunny afternoons. These fish are sluggish but feed aggressively in short windows. Big trout also ride out cold snaps in channels and deep basins during late winter, stacking up in predictable locations that local anglers guard like state secrets.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Best time on the water varies by season. Spring and summer, get there right before sunrise and fish the first two hours hard. Winter, the bite often fires at night in clear water over shell bottoms. Glow-colored soft plastics under a rattle cork produce well after dark. If you have never fished for speckled trout at night in Louisiana, you are missing one of the most underrated bites in inshore fishing.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Black Drum */}
      <Section id="black-drum">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">Black Drum</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  Black drum are the heavyweight of the Louisiana marsh. The IGFA all-tackle world record stands at 113 lbs 1 oz, set in 1975. Louisiana fish run up to 35-40 lbs, which is more than enough to snap a light rod in half if you are not paying attention. They are most abundant inshore during February and March, with the prime fishing window centered on the 3 days around each full and new moon.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Black drum are nocturnal feeders. The peak bite runs from about 5 PM through sunset. They use their barbels and inferior mouth to root through mud and shell for crustaceans. Fresh clams, mussels, sand fleas, and half or quarter blue crab are the top baits. Artificials work, but natural bait outperforms everything else for drum by a wide margin.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  You will find black drum on spring ledge walls alongside flounder, working the same depth transitions that hold speckled trout during the day. The key to hooking them is patience. When you feel the first tap, do nothing. Wait 5-7 counts for a steady pull, then engage the circle hook by reeling tight and lifting the rod. Setting the hook early on a black drum means pulling the bait out of its mouth before it commits.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Month by Month */}
      <Section className="bg-surface-raised" id="calendar">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2" size="4xl" className="mb-6">Month by Month</Heading>
            <Text variant="secondary" className="mb-8 leading-relaxed">
              Louisiana fishes year-round. The species rotate with water temperature and migration patterns, but there is no off season. Here is what to expect each month.
            </Text>
            <div className="space-y-4">
              {MONTH_DATA.map((m) => (
                <div key={m.month} className="p-4 rounded-xl border border-border bg-surface/50">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <Text className="font-heading font-semibold min-w-[100px]">{m.month}</Text>
                    <div className="flex-1">
                      <Text size="sm" className="font-medium mb-1">{m.species}</Text>
                      <Text variant="secondary" size="sm">{m.note}</Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Tackle */}
      <Section id="tackle">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <SectionImage src="/images/gal-tackle-close.webp" alt="Saltwater fishing reel and rod closeup" />
              <Heading as="h2" size="4xl" className="mb-4">Tackle and Rigging</Heading>
              <Text variant="secondary" className="mb-6 leading-relaxed">
                Louisiana fishing spans ultra-light marsh setups to heavy offshore conventional. Here are the proven rigs by fishery. More{" "}
                <NextLink href="/gear" className="text-accent hover:underline">gear guides</NextLink> on The TackleRoom.
              </Text>
              <div className="space-y-6">
                <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                  <Heading as="h3" size="xl" className="mb-3">Marsh Redfish</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    Spinning: 7-ft medium or 6.5-7 ft medium-light baitcaster. 10-lb braid with 20-lb fluorocarbon leader. Lures: gold spoons, Z-Man paddletails on 1/4 oz jighead, Heddon Super Spooks for topwater. Live bait: popping corks with live shrimp. Fly: 8-weight rod, floating line, gold spoon patterns, EP shrimp in chartreuse/white, Clouser Minnows, weedless flies for grass-lined drains. Stripping basket in wind.
                  </Text>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                  <Heading as="h3" size="xl" className="mb-3">Speckled Trout</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    Standard: 7.5-ft medium spinning, 10-lb braid + 30-40 lb fluoro. Lures: soft plastics on 1/8-1/4 oz jigheads, MirrOlure MR17 and 52M, glow colors at night. Live bait: popping cork or rattle cork with live shrimp or croaker. Trophy setup: 7-ft medium baitcaster, 20-lb braid double-uni to 30-lb fluoro.
                  </Text>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                  <Heading as="h3" size="xl" className="mb-3">Bull Reds</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    7-ft heavy power spinning or conventional. 6000+ size reel with 50+ lb braid. 3-way swivel rig with 60-80 lb fluorocarbon leader, 5/0-7/0 circle hook. Bait: fresh cut mullet, live pogies, or large soft plastics.
                  </Text>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                  <Heading as="h3" size="xl" className="mb-3">Black Drum</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    7-ft medium-heavy spinning or conventional. 20-30 lb braid with 40-50 lb fluorocarbon leader. 5/0-7/0 circle hook, always. Bait: fresh clams, mussels, sand fleas, half or quarter blue crab.
                  </Text>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                  <Heading as="h3" size="xl" className="mb-3">Venice Offshore</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    Yellowfin trolling: 30-50 class conventional, 50-80 lb braid, wind-on leaders. Skirted ballyhoo on long riggers, cedar plugs short, diving plugs on flat lines. Chunking: cut skipjack in chum slick. Vertical jigging: 6-8 oz butterfly jigs. Blue marlin: 80-130 lb class stand-up, lever-drag reels with 600+ yards capacity.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Plan Your Trip */}
      <Section className="bg-surface-raised" id="trip">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">Plan Your Trip</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  Fly into New Orleans. Venice is 90 minutes south on Highway 23. Hopedale is about 60 minutes east. Both drives are flat, easy, and scenic once you hit the marsh. Rental car is mandatory. There is no ride-share or public transit south of the city.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Guided trips run $500-700 per day for 1-2 anglers. That includes the boat, tackle, bait, and a captain who knows every drain and cut in the marsh. Worth it for your first trip. For DIY, rent a skiff, run the Intracoastal Waterway, and bring a trolling motor and push pole. The marsh is navigable if you stay in marked channels until you learn the area. Running blind through unmarked shallow cuts will put you on an oyster reef.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Bug spray is not optional. Louisiana marsh mosquitoes are legendary and they do not take days off. Bring rain gear even if the forecast is clear. Afternoon thunderstorms roll through fast and without much warning from May through October. High-SPF sunscreen is critical. There is zero shade on a marsh flat. Buff-style face covers and long sleeves will save you from a brutal sunburn.
                </Text>
                <div className="p-5 rounded-xl border border-border bg-surface/50">
                  <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-3">Base Camps</Text>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Text className="font-heading font-semibold text-sm mb-1">Venice</Text>
                      <Text variant="secondary" size="sm">Most productive overall. Inshore marsh plus full offshore access. Mouth of the Mississippi.</Text>
                    </div>
                    <div>
                      <Text className="font-heading font-semibold text-sm mb-1">Hopedale</Text>
                      <Text variant="secondary" size="sm">Eastern marsh, closest to New Orleans. Excellent redfish and speckled trout access.</Text>
                    </div>
                    <div>
                      <Text className="font-heading font-semibold text-sm mb-1">Cocodrie</Text>
                      <Text variant="secondary" size="sm">South-central marsh. Quieter, less pressure. Strong speckled trout fishery.</Text>
                    </div>
                    <div>
                      <Text className="font-heading font-semibold text-sm mb-1">Delacroix</Text>
                      <Text variant="secondary" size="sm">Southeast marsh. Local feel, solid redfish and drum fishing year-round.</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Conservation and Regulations */}
      <Section id="regs">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">Conservation and Regulations</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  Louisiana&apos;s fishery is healthy because of strict management and a culture that takes limits seriously. Know the rules before you launch.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Redfish:</strong> Slot limit is 16 to 27 inches, 5 fish per person per day. Only one fish per day may exceed 27 inches (bull red). Bull red drum over the slot should be handled carefully and released quickly. In practice, most anglers release bulls voluntarily - the spawning stock is what keeps this fishery world-class.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Speckled Trout:</strong> Daily limit is 25 fish per person, minimum 12 inches. That is one of the most generous trout limits in the Gulf, but it comes with responsibility. Large trout over 5 lbs are disproportionately valuable to the breeding population. Many experienced anglers release anything over 20 inches.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Black Drum:</strong> No minimum size. Daily limit is 5 fish per person, only one may exceed 27 inches. Large drum over 15 lbs are often full of parasitic worms (spaghetti worms) that are harmless when cooked but unappetizing. Smaller drum in the 2-8 lb range are far better table fare.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Venice Offshore:</strong> Federal waters regulations apply beyond 9 nautical miles. Red snapper season dates are set annually by NOAA. Yellowfin tuna have a 3-fish daily bag limit with a 27-inch minimum. Circle hooks are required when fishing with natural bait for reef fish in Gulf federal waters. Always check current Louisiana Department of Wildlife and Fisheries regulations before your trip - season dates and limits change.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* More destinations */}
      <Section className="bg-surface-raised">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2" size="4xl" className="mb-6">More Destinations</Heading>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { title: "Florida Keys", href: "/destinations/florida-keys", img: "/images/dest-keys.webp" },
                { title: "North Carolina", href: "/destinations/north-carolina", img: "/images/dest-nc.webp" },
                { title: "Bahamas", href: "/destinations/bahamas", img: "/images/dest-bahamas.webp" },
                { title: "Gulf Coast", href: "/destinations/gulf-coast", img: "/images/dest-gulf.webp" },
              ].map((d) => (
                <NextLink key={d.href} href={d.href} className="group relative rounded-xl overflow-hidden aspect-[3/4]">
                  <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <Text size="sm" className="!text-white font-heading font-semibold">{d.title}</Text>
                  </div>
                </NextLink>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Shop CTA */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <div className="p-6 rounded-xl border border-border bg-surface/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <Heading as="h4" size="md" className="mb-1">Gear up for Louisiana</Heading>
                <Text variant="secondary" size="sm">Gold spoons, paddletails, popping corks, heavy leaders. Everything you need for the marsh.</Text>
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
