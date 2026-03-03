import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Bahamas Fishing Guide - Bonefish, Blue Marlin, Wahoo & Flats",
  description:
    "The definitive Bahamas saltwater fishing guide. Bonefish flats on Andros, blue marlin in the Tongue of the Ocean, wahoo at San Salvador, reef fishing, and trip planning across the islands.",
};

const SECTIONS = [
  { id: "flats", label: "Flats" },
  { id: "blue-water", label: "Blue Water" },
  { id: "wahoo", label: "Wahoo" },
  { id: "reef", label: "Reef" },
  { id: "calendar", label: "Calendar" },
  { id: "tackle", label: "Tackle" },
  { id: "trip", label: "Plan Your Trip" },
  { id: "regs", label: "Regulations" },
];

const MONTH_DATA = [
  { month: "January", species: "Wahoo (peak), yellowtail snapper, grouper", note: "Peak wahoo season at San Salvador and Long Island. Reef fishing strong. Bonefish present but cooler water pushes them to deeper flats." },
  { month: "February", species: "Wahoo, bonefish (deeper flats), reef fish", note: "Wahoo still running hard. Bonefish feed on deeper flats during warm afternoons. Grouper on structure." },
  { month: "March", species: "Bonefish (peak begins), wahoo (tapering), permit (early)", note: "Water warms and bonefish flood the shallows. Wahoo season winding down. First permit show on Abaco flats." },
  { month: "April", species: "Blue marlin (Abaco begin), bonefish, permit", note: "Blue marlin begin showing at Abaco late April. Bonefish strong across Andros. Permit on the flats at Grand Bahama and Abaco." },
  { month: "May", species: "Blue marlin (peak Abaco), mahi, bonefish, wahoo wrap-up", note: "Peak blue marlin window at Abaco through first week of June. Mahi arrive on weed lines. Last wahoo stragglers." },
  { month: "June", species: "Bonefish (peak), blue marlin, yellowfin tuna, grouper", note: "Bonefish at their best on Andros flats. Blue marlin still pushing. Yellowfin at Bimini. Grouper on the reef." },
  { month: "July", species: "Offshore peaks, yellowfin tuna, mahi, bonefish", note: "Full offshore season. Yellowfin and mahi on the deep side. Bonefish active early and late in the day." },
  { month: "August", species: "Bonefish (most active), reef fish, mahi", note: "Bonefish at peak aggression on warm flats. Reef fishing productive. Mahi on floating debris and weed lines." },
  { month: "September", species: "Bonefish, offshore species, wahoo (early arrivals)", note: "Bonefish still strong. Offshore producing mahi and tuna. First wahoo scouts at San Salvador and Cat Island." },
  { month: "October", species: "Bonefish (strong), wahoo season opens, reef fish", note: "Bonefish reliable across all islands. Wahoo season opens at Long Island and San Salvador. Cooler water triggers feeding." },
  { month: "November", species: "Wahoo (peak begins), sailfish, bonefish", note: "Wahoo peak starts in earnest. Sailfish show up on the deep side. Bonefishing still good on south-facing flats." },
  { month: "December", species: "Wahoo, reef fishing, bonefish", note: "Wahoo in full swing. Yellowtail and grouper on the reef. Bonefish present on warmer days, deeper flats." },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[240px] sm:h-[300px] rounded-xl overflow-hidden mb-8">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

export default function BahamasPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] max-h-[660px]">
        <img
          src="/images/dest-bahamas.webp"
          alt="Turquoise flats water in the Bahamas"
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

      {/* Sticky nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-surface/80 backdrop-blur-md">
        <Container>
          <div className="flex gap-3 py-3 overflow-x-auto no-scrollbar">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 text-sm font-heading font-medium text-accent hover:bg-accent/15 hover:border-accent transition-colors">
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
                  {["Bonefish", "Permit", "Blue Marlin", "Wahoo", "Yellowtail Snapper", "Grouper"].map((sp) => (
                    <Badge key={sp} variant="creek">{sp}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Best Months</Text>
                <Text size="sm">Bonefish: March-October. Blue marlin: April-June. Wahoo: November-March. Reef: year-round.</Text>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Fishing Style</Text>
                <Text size="sm">Flats, offshore trolling, high-speed wahoo, reef, deep drop</Text>
              </div>
            </div>
          </div>
          <div className="max-w-3xl space-y-6 mt-10">
            <Text variant="secondary" size="lg" className="leading-relaxed">
              The Bahamas sit on the edge of the Atlantic in water so clear you can count scales at 40 feet. Seven hundred islands spread across 100,000 square miles of ocean, and most of them are empty. The fishing pressure here is a fraction of what you find in the Keys or along the Gulf Coast.{" "}
              <NextLink href="/food" className="text-accent hover:underline">Bonefish</NextLink> populations are healthy and growing. Blue marlin cruise water that drops from 30 feet to 6,000 in a single boat length. Wahoo run to 200 pounds off islands most anglers have never heard of.
            </Text>
            <Text variant="secondary" className="leading-relaxed">
              What makes the Bahamas special is range. You can wade ankle-deep flats for bonefish at sunrise, run offshore for blue marlin by mid-morning, and drop baits on the reef for yellowtail and grouper in the afternoon. The water is warm year-round, the reefs are intact, and the fish act like fish that have not been educated by a hundred boats a day. This is saltwater fishing with the volume turned down and the quality turned up.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Flats */}
      <Section className="bg-surface-raised" id="flats">
        <Container>
          <div className="max-w-3xl">
            <SectionImage src="/images/gal-turquoise.webp" alt="Wading a turquoise Bahamas bonefish flat" />
            <Heading as="h2" size="4xl" className="mb-4">Flats - Andros and Beyond</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                Andros Island holds more bonefish per square mile than anywhere on Earth. The west side alone has over 2,000 square miles of wadeable flats - hard white sand, turtle grass margins, and tidal creeks that flood and drain with the moon. Fish average 3-5 pounds, but 8-pounders are regular. Double-digit fish show up every season.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                The best wading happens on a falling tide. As water drains off the flats, bonefish concentrate in the remaining channels and deeper pockets. Schools of 50 or more fish push across hard sand bottoms, tailing and mudding as they root for crabs and shrimp. You can see them from 100 yards on a clear day. The approach is everything. Move slow, stay low, and lead the school by 10 feet.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Grand Bahama&apos;s south shore is the most accessible bonefishing in the chain. Freeport has direct flights from the East Coast, and the flats start 20 minutes from the airport. The fish are not as numerous as Andros, but the convenience is unmatched for a long weekend trip. Abaco adds variety - permit cruise the deeper flats, barracuda patrol the edges, and juvenile tarpon hold in the mangrove creeks on the leeward side.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                An 8-weight fly rod is the standard tool. Tan crazy charlie in size 4-6 is the all-time producer on Bahamian flats. Gotcha patterns work when fish are feeding aggressively. For spinning gear, live shrimp or small white jigs on 10-pound braid with a 12-pound fluorocarbon leader. Keep the presentation quiet. These fish feel the impact of a fly line hitting the water from 30 feet away.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                The{" "}
                <NextLink href="/food" className="text-accent hover:underline">bonefish</NextLink> here behave differently than Keys fish. Less pressured, more willing to eat on the first presentation, but spookier at close range because the water is so clear. Stealth matters more than pattern selection.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Blue Water */}
      <Section id="blue-water">
        <Container>
          <div className="max-w-3xl">
            <SectionImage src="/images/gal-offshore-run.webp" alt="Offshore run into deep blue Bahamas water" />
            <Heading as="h2" size="4xl" className="mb-4">Blue Water - Tongue of the Ocean</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                The Tongue of the Ocean is a 6,000-foot deep trench that runs between Andros and Nassau. The bottom drops from 30 feet to thousands in a single boat length. Blue marlin, white marlin, and wahoo cruise this edge where warm deep water meets the shallow bank. It is one of the most dramatic depth changes in the Atlantic, and the fish know it.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Abaco produces blue marlin from late April through the first week of June. This is a defined window - not a vague seasonal suggestion. The Bahamas Billfish Championship runs during this peak, and custom lure fishing is the standard method. Trolling hand-poured resin heads with heavy ballyhoo at 8-10 knots. The lure creates a surface commotion that triggers marlin from depth. Their vision is optimized for prey above them - they are most responsive to surface silhouettes.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                The Atlantic all-tackle record for blue marlin stands at 1,402 pounds 2 ounces. Fish in the 300-600 pound class are realistic targets in the Tongue of the Ocean. Fights can exceed 4 hours on 50-pound tackle. The standard approach is 130-pound class gear, though 80-pound is common for experienced crews who want a longer fight. These are not fish you muscle to the boat. You wear them down.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Bimini adds yellowfin tuna to the mix. The Gulf Stream pushes tight against the island, and yellowfin stack on the edge at first light and again in the late afternoon. Chunking butterfish or slow-trolling ballyhoo produces the most consistent bites. The fish run 30-80 pounds, with occasional specimens over 100.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Wahoo */}
      <Section className="bg-surface-raised" id="wahoo">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2" size="4xl" className="mb-4">Wahoo - The Winter Run</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                San Salvador is a wahoo factory. Fish over 100 pounds are common. The potential ceiling is 200 pounds. The island sits on the eastern edge of the Bahamas bank where deep Atlantic water pushes against the shelf, creating a conveyor belt of bait and current that wahoo exploit from November through March.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Long Island runs a close second, with a wider window from October through mid-March. Cat Island rivals San Salvador for size but sees fewer boats. The pattern is consistent across all three islands - cooler water temperatures trigger feeding activity, and wahoo stack on the drop-offs and ledges where the bottom falls away. Full moon phases peak the bite. Plan your trip around the lunar calendar.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                High-speed trolling is the method. Run lures at 12-16 knots over the drop-offs, targeting the 100-600 foot contour where the shelf breaks. Wire leader is mandatory. Wahoo have razor-sharp teeth that slice through fluorocarbon and mono without hesitation. A single pass through the leader and you lose the fish and the lure.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Dark lure colors produce when the sun is high - purple and black, orange and black. The Ilander lure head paired with a ballyhoo is the staple wahoo rig across the Bahamas. Run a spread of four to six lines at staggered distances. Wahoo hit fast and keep running. Your drag needs to be set before the strike, not after.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Wahoo grow rapidly. A one-year-old fish weighs roughly 15 pounds. By year three, they hit 60 pounds. The world record is 184 pounds, caught off Cabo San Lucas in 2005. The Bahamas consistently produces fish in the 80-130 pound range, with San Salvador and Cat Island the most likely spots for a shot at a record-class fish.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reef */}
      <Section id="reef">
        <Container>
          <div className="max-w-3xl">
            <SectionImage src="/images/gal-tackle-close.webp" alt="Reef fishing tackle rigged and ready" />
            <Heading as="h2" size="4xl" className="mb-4">Reef Fishing</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                Yellowtail snapper in the Bahamas run 3-5 pounds. In the Keys, a 2-pounder is considered large. The difference is pressure. Bahamian reefs see a fraction of the boat traffic, and the fish grow bigger and eat more aggressively. Heavy chumming is mandatory - cut sardines, bread, and oatmeal mixed into a slick that brings fish off the bottom and into the water column.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Grouper have rebounded in several areas following reduced pressure after the 2019 storm season. Nassau grouper, black grouper, and strawberry grouper hold on structure in 40-120 feet. Light tackle and live bait on the reef produce mutton snapper and grouper that would make a Keys angler weep. A 7-foot medium rod with 20-pound braid and a 30-pound fluorocarbon leader handles most reef species.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Long Island offers deep-drop fishing for species you will not find on the shallow reef - queen snapper at 400-800 feet and wreckfish at similar depths. This is specialized fishing that requires electric reels and heavy tackle, but the payoff is fish most anglers never see. The drop-off at Long Island is steep and close to shore, making deep-drop accessible even on half-day trips.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Reef fishing in the Bahamas is year-round. The species rotate slightly with water temperature, but yellowtail, grouper, and mutton snapper are always present. This is the fishery that feeds you between flats sessions and offshore runs. Browse our{" "}
                <NextLink href="/gear" className="text-accent hover:underline">gear guides</NextLink> for recommended reef setups.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Calendar */}
      <Section className="bg-surface-raised" id="calendar">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2" size="4xl" className="mb-6">Month by Month</Heading>
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
          <div className="max-w-3xl">
            <Heading as="h2" size="4xl" className="mb-4">Tackle and Rigging</Heading>
            <Text variant="secondary" className="mb-6 leading-relaxed">
              The Bahamas span everything from 8-weight fly rods to 130-pound stand-up gear. Here are the proven setups by fishery. More{" "}
              <NextLink href="/gear" className="text-accent hover:underline">gear guides</NextLink> on The TackleRoom.
            </Text>
            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Flats - Bonefish</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  Fly: 8-weight, 9-foot rod with quality drag and 150 yards backing. 9-foot leader tapered to 10-12 pound tippet. Patterns: tan crazy charlie (size 4-6), gotcha, christmas island special, EP shrimp in tan and pink. Spinning: 7-foot light rod, 3000 reel, 10-pound braid, 12-pound fluorocarbon leader. Small white jigs (1/8 oz) or live shrimp freelined. Quiet presentations only.
                </Text>
              </div>
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Flats - Permit</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  Fly: 10-weight rod. Crab patterns with lead eyes - tan, olive, brown. Merkin crab and Raghead Crab are standards. Spinning: 7-foot medium rod, 4000 reel, 15-20 pound braid, 20-25 pound fluorocarbon leader. Live crabs on 2/0-3/0 circle hooks. Permit spook harder than bonefish - longer casts and softer presentations required. Fluorocarbon leader is non-negotiable in clear water.
                </Text>
              </div>
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Blue Water</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  Blue marlin: 130-pound class stand-up or 80-pound for experienced crews. Lever-drag reels with 600+ yards capacity. Custom resin lure heads with ballyhoo, trolled at 8-10 knots. For yellowfin tuna: 30-50 class conventional, 50-80 pound braid, wind-on leaders. Chunking butterfish or slow-trolling ballyhoo. Bring a 12-weight fly rod for mahi and smaller tuna on the troll stops.
                </Text>
              </div>
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Wahoo Trolling</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  50-80 pound class rods with high-speed reels. Wire leader mandatory - single-strand #9 or #10, or 90-pound 49-strand cable. Ilander heads with ballyhoo, purple/black and orange/black skirts. Trolling speed 12-16 knots. Spread of 4-6 lines at staggered distances. Pre-set drag at strike - there is no time to adjust when a wahoo hits at speed. Planers and downriggers extend the strike zone.
                </Text>
              </div>
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Reef</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  7-foot medium spinning, 4000 reel, 20-pound braid, 30-pound fluorocarbon leader. Yellowtail: size 1/0 hooks, light wire, small pieces of cut bait on the chum slick. Let the bait drift naturally - no weight. Grouper: heavier leader (40-50 pound fluoro), 3/0-5/0 circle hooks, live pinfish or cut bait on bottom. Deep drop: electric reel, 80-pound braid, multi-hook chicken rig, 6-12 oz lead.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Plan Your Trip */}
      <Section className="bg-surface-raised" id="trip">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2" size="4xl" className="mb-4">Plan Your Trip</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                Nassau (NAS) and Freeport (FPO) have direct flights from most East Coast cities - Miami, Fort Lauderdale, Atlanta, Charlotte, New York. Flight time from South Florida is under an hour. Andros requires a puddle-jumper from Nassau or a ferry, adding half a day to your travel. Plan accordingly.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Guided flats fishing runs $600-800 per day for one to two anglers. That includes the skiff, guide, and local knowledge you cannot replace with a GPS. Offshore charters for blue marlin and wahoo run $1,500-2,500 per day depending on boat size and distance. Half-day reef trips are available at lower rates and worth booking on travel days.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Bring your own tackle. Most lodges provide gear, but having your own rods makes a difference - especially for flats fishing where the rod is an extension of the cast. Pack an 8-weight for bonefish, a 10-weight for permit, and a 12-weight if you want a shot at juvenile tarpon in the mangroves. Polarized sunglasses in amber and copper are essential. Bring a backup pair.
              </Text>
              <div className="p-5 rounded-xl border border-border bg-surface/50">
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-3">Base Camps</Text>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Text className="font-heading font-semibold text-sm mb-1">Andros</Text>
                    <Text variant="secondary" size="sm">Bonefishing capital of the world. Largest flats system in the chain. Dedicated lodges with daily guided wading.</Text>
                  </div>
                  <div>
                    <Text className="font-heading font-semibold text-sm mb-1">Bimini</Text>
                    <Text variant="secondary" size="sm">Wahoo tournaments. Yellowfin tuna on the Gulf Stream edge. Closest Bahamas island to Florida - 50 miles from Miami.</Text>
                  </div>
                  <div>
                    <Text className="font-heading font-semibold text-sm mb-1">Nassau</Text>
                    <Text variant="secondary" size="sm">Gateway to the Tongue of the Ocean. Blue marlin access. Best flight connections and infrastructure.</Text>
                  </div>
                  <div>
                    <Text className="font-heading font-semibold text-sm mb-1">Abaco</Text>
                    <Text variant="secondary" size="sm">Best variety - bonefish, permit, blue marlin, reef fish. Marlin tournament hub from late April through June.</Text>
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
                  The Bahamas take fishery conservation seriously, and the rules are enforced. Foreign visitors must understand the permit requirements before arriving.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Foreign Fishing Permit:</strong> All non-Bahamian visitors must purchase a foreign fishing permit before fishing. Permits are available through the Bahamas Department of Marine Resources. Fishing without a permit carries significant fines. Your lodge or charter captain can usually arrange this, but confirm before you arrive.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Bonefish:</strong> Catch-and-release is required on many flats across the islands. Even where harvest is technically permitted, the lodge and guiding culture is firmly catch-and-release. Handle bonefish with wet hands, keep them in the water, and revive fully before release. The Bahamas National Trust and Bonefish and Tarpon Trust run active tagging programs.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Bag Limits:</strong> Limits vary by island and species. General limits for visitors include 6 reef fish per person per day (combined species), and specific limits on conch and lobster. Nassau grouper has a closed season from December through February to protect spawning aggregations. Spearfishing is prohibited within 200 yards of any shoreline, and the use of spearguns by foreign visitors is heavily restricted.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Marine Protected Areas:</strong> The Bahamas has established multiple no-take marine reserves. The Exuma Cays Land and Sea Park is the oldest marine park in the Caribbean - no fishing or harvesting of any kind is permitted within its boundaries. Check current Bahamas Department of Marine Resources regulations and confirm any local restrictions with your guide.
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
                { title: "Louisiana", href: "/destinations/louisiana", img: "/images/dest-louisiana.webp" },
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
      <Section className="bg-surface-raised">
        <Container>
          <div className="max-w-3xl">
            <div className="p-6 rounded-xl border border-border bg-surface/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <Heading as="h4" size="md" className="mb-1">Gear up for the Bahamas</Heading>
                <Text variant="secondary" size="sm">Find the exact tackle for every Bahamas fishery at The TackleRoom.</Text>
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
