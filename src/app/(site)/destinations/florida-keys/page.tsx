import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Florida Keys Fishing Guide - Tarpon, Bonefish, Permit & Offshore",
  description:
    "The definitive Florida Keys saltwater fishing guide. Flats, bridges, offshore, and backcountry - species, seasons, tackle, and trip planning from Key Largo to Key West.",
};

const SECTIONS = [
  { id: "flats", label: "The Flats" },
  { id: "grand-slam", label: "Grand Slam" },
  { id: "tarpon", label: "Tarpon" },
  { id: "permit", label: "Permit" },
  { id: "bridges", label: "Bridges" },
  { id: "offshore", label: "Offshore" },
  { id: "backcountry", label: "Backcountry" },
  { id: "calendar", label: "Calendar" },
  { id: "tackle", label: "Tackle" },
  { id: "gear", label: "Gear" },
  { id: "trip", label: "Plan Your Trip" },
  { id: "regs", label: "Regulations" },
];

const MONTH_DATA = [
  { month: "January", species: "Sailfish, swordfish (deep drop), yellowtail snapper, sheepshead", note: "Winter pattern. Sailfish run thick. Swordfishing at night on the deep drop is the hottest winter bite." },
  { month: "February", species: "Tarpon (early arrivals), sailfish, bonefish, permit (pre-spawn)", note: "Tarpon begin pushing into Keys channels. Sailfish still running. Bonefish on deeper flats when sun breaks through." },
  { month: "March", species: "Tarpon, bonefish, permit (spawning runs begin), mahi (early)", note: "Permit spawning runs start reliably at end of March. Marathon tarpon congregations begin. Grand Slam attempts start." },
  { month: "April", species: "Tarpon (100+ lbs), permit, bonefish, mahi, cobia", note: "Peak tarpon month. Fish over 100 lbs on the flats and in channels. Grand Slam sweet spot begins. Mahi showing on the humps." },
  { month: "May", species: "Tarpon (peak), permit, bonefish, mahi (schools), snook (spawn)", note: "Peak tarpon and permit overlap. Live crab density peaks. Mahi schools arrive offshore. Grand Slam prime window." },
  { month: "June", species: "Tarpon, permit (last month before harvest closure ends), mahi (peak)", note: "Late tarpon still strong. Mahi fishing peaks. Offshore heats up across the board. Permit flats fishing at Marquesas." },
  { month: "July", species: "Mahi, wahoo (early), yellowfin tuna, mangrove snapper", note: "Offshore dominates. Mahi on every weed line and lobster pot. Mangrove snapper on the reef. Lobster mini-season." },
  { month: "August", species: "Bonefish (most active), mahi (second migration begins), mutton snapper", note: "Bonefish are at their most aggressive. Second mahi migration starts - these fish often exceed 30 lbs." },
  { month: "September", species: "Tarpon (fall run at Marathon), mahi (30+ lbs), yellowfin", note: "Marathon tarpon congregations return (Sep-Nov window). Second mahi migration producing larger fish." },
  { month: "October", species: "Bonefish (peak fall), mahi, kingfish, blackfin tuna", note: "Bonefish peak on cooling flats. Blackfin tuna at the Hump. Kingfish on the reef. Outstanding variety month." },
  { month: "November", species: "Sailfish (season opens), wahoo, kingfish, blackfin tuna", note: "Sailfish return. Wahoo start running. Blackfin on/off at the Hump depending on current. Bridge fishing picks up." },
  { month: "December", species: "Sailfish, swordfish, yellowtail snapper, snook (canals)", note: "Full winter pattern. Sailfish and swordfishing offshore. Snook stack in residential canals. Yellowtail on the reef." },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[240px] sm:h-[300px] rounded-xl overflow-hidden mb-8">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

function ProductCard({ name, handle, desc }: { name: string; handle: string; desc: string }) {
  return (
    <a href={`https://thetackleroom.com/products/${handle}`} target="_blank" rel="noopener noreferrer" className="group block p-4 rounded-xl border border-border bg-surface-raised/50 hover:border-accent/60 hover:bg-accent/5 transition-colors">
      <Text className="font-heading font-semibold text-sm group-hover:text-accent transition-colors">{name}</Text>
      <Text variant="muted" size="xs" className="mt-1">{desc}</Text>
    </a>
  );
}

function CollectionCard({ name, handle, desc }: { name: string; handle: string; desc: string }) {
  return (
    <a href={`https://thetackleroom.com/collections/${handle}`} target="_blank" rel="noopener noreferrer" className="block p-5 rounded-xl border-2 border-accent/30 bg-accent/5 hover:border-accent/60 hover:bg-accent/10 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <Text className="font-heading font-semibold">{name}</Text>
          <Text variant="muted" size="sm" className="mt-1">{desc}</Text>
        </div>
        <Text className="font-heading font-semibold text-accent text-sm whitespace-nowrap ml-4">Browse &rarr;</Text>
      </div>
    </a>
  );
}

export default function FloridaKeysPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] max-h-[660px]">
        <img
          src="/images/dest-keys.webp"
          alt="Crystal clear water on the Florida Keys flats"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <Container>
            <Text variant="secondary" size="sm" className="!text-white/70 uppercase tracking-widest font-heading font-semibold mb-2">
              Destination Guide
            </Text>
            <Heading as="h1" size="hero" className="!text-white mb-2">
              Florida Keys
            </Heading>
            <Text size="lg" className="!text-white/80 max-w-xl">
              The flats fishing capital of the world
            </Text>
          </Container>
        </div>
      </div>

      {/* Sticky section nav */}
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
                  {["Tarpon", "Bonefish", "Permit", "Snook", "Mahi-Mahi", "Sailfish", "Swordfish", "Yellowfin Tuna"].map((sp) => (
                    <Badge key={sp} variant="creek">{sp}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Best Months</Text>
                <Text size="sm">Year-round. Peak tarpon: April-July. Bonefish: March-November. Sailfish: November-March.</Text>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Fishing Style</Text>
                <Text size="sm">Flats, backcountry, bridge, reef, offshore, deep drop</Text>
              </div>
            </div>
          </div>
          <div className="max-w-3xl space-y-6 mt-10">
            <Text variant="secondary" size="lg" className="leading-relaxed">
              From Key Largo to Key West, the Florida Keys offer the most diverse saltwater fishing on Earth. That is not marketing copy. Within a single day&apos;s run you can sight-cast to tailing{" "}
              <NextLink href="/food" className="text-accent hover:underline">bonefish</NextLink> on ankle-deep turtle grass, drift live crabs to 150-pound tarpon rolling in a channel, drop a swordfish bait 1,000 feet into the abyss, and troll ballyhoo along a weed line stacked with mahi. Trolling for{" "}
              <a href="https://thetackleroom.com/blogs/news/king-mackerel-fishing-guide-how-to-catch-kings-from-the-beach-to-the-ledge" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">king mackerel</a> on the reef is another Keys staple that produces year-round. No other fishery in the Western Hemisphere puts that range within reach of one dock.
            </Text>
            <Text variant="secondary" className="leading-relaxed">
              The Keys sit on the edge of the Gulf Stream. The warm current pushes north along the reef line, carrying pelagic species within 15 miles of shore. Behind the islands, Florida Bay and the Everglades backcountry create a labyrinth of mangrove creeks, shallow ponds, and grass flats that hold snook, juvenile tarpon, and redfish year-round. The bridges connecting the island chain are fish magnets after dark - tarpon, snook, and snapper stack in the shadow lines where light meets darkness. And the reef system running parallel to the Keys from Key Largo to the Dry Tortugas holds yellowtail snapper, mutton snapper, grouper, and everything else that eats on structure.
            </Text>
            <Text variant="secondary" className="leading-relaxed">
              The Florida Keys are where saltwater fly fishing was born, where the Albright Knot was invented (by Keys guide Jimmy Albright in the 1950s), and where the IGFA Grand Slam - tarpon, bonefish, and permit in the same day - remains the highest achievement in flats fishing. This guide covers every fishery the Keys offer, with{" "}
              <NextLink href="/gear" className="text-accent hover:underline">tackle specs</NextLink>, seasonal timing, and trip planning backed by data from over 7,000 source articles and video transcripts.
            </Text>
          </div>
        </Container>
      </Section>

      {/* The Flats */}
      <Section className="bg-surface-raised" id="flats">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <SectionImage src="/images/gal-flats-cast.webp" alt="Fly casting on crystal clear saltwater flats" />
              <Heading as="h2" size="4xl" className="mb-4">The Flats - World-Class Sight Fishing</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  The Keys backcountry holds miles of turtle grass flats where you can see the fish before you cast. Tailing bonefish pushing water across a white sand flat. A string of permit shadows drifting over a pothole. A dark torpedo shape that turns out to be a 120-pound tarpon laid up in 18 inches of water. This is what people come here for.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The best flats fishing happens on the Atlantic side from Islamorada south. The Content Keys, Bahia Honda, and the Marquesas Islands produce consistently for bonefish and permit. Wade or pole a skiff - either way, you need stealth, a good push pole, and polarized lenses that cut the glare. Amber or vermilion lenses work best in normal light. Switch to yellow for overcast or low-light conditions.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Bonefish in the Keys can reach 12 pounds or more, with verified catches of 9.5 and 12 pounds. That is big for a fish that typically tops out around 10. Research from the Bonefish and Tarpon Trust shows that 70% of tagged bonefish are recaptured within 1 kilometer of their original tagging location - they rarely leave their home flats outside of spawning season. When they do spawn, they form aggregations of thousands and dive to depths of 450 feet (13 times the atmospheric pressure of the flats) to release eggs and sperm. Genetic studies confirmed that bonefish larvae spawned as far away as Belize and Mexico can settle in the Florida Keys.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The population has rebounded significantly since 2010. Daily catch rates went from 4-5 fish to 20-30 fish per day on guided trips. Each individual bonefish is estimated to generate roughly $75,000 in economic value over its lifetime through guided fishing tourism - which is why catch-and-release is not just ethical here, it is economic policy.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Disable your depth finder when sight fishing. The clicking sound it emits underwater spooks bonefish. Kill the aerated livewell too. These fish feel everything.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Grand Slam */}
      <Section id="grand-slam">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">The Grand Slam</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  The IGFA Florida Flats Grand Slam is catching tarpon, bonefish, and permit on the same day. The Middle and Lower Keys - Marathon to Key West - are the only place in the world where all three species overlap consistently on the same shallow flats.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The overlap sweet spot is April through June, when tarpon are peaking (fish over 100 pounds are common), bonefish are on the flats, and permit spawning runs are active. Permit is always the bottleneck. It is widely considered the most difficult fish to catch in the Florida Keys - often requiring multiple days of dedicated effort. Plan your Grand Slam day around permit opportunities first, then fill in tarpon and bonefish.
                </Text>
                <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                  <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-3">Grand Slam Windows</Text>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 pr-4 font-heading font-semibold text-text-primary">Species</th>
                          <th className="text-left py-2 pr-4 font-heading font-semibold text-text-primary">Peak Keys Window</th>
                          <th className="text-left py-2 font-heading font-semibold text-text-primary">Limiting Factor</th>
                        </tr>
                      </thead>
                      <tbody className="text-text-secondary">
                        <tr className="border-b border-border/50">
                          <td className="py-2 pr-4">Tarpon</td>
                          <td className="py-2 pr-4">Feb-Jul (100+ lbs Apr-May)</td>
                          <td className="py-2">Water temp, migration timing</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-2 pr-4">Bonefish</td>
                          <td className="py-2 pr-4">Year-round (peak Aug, fall mornings)</td>
                          <td className="py-2">Cold fronts push to channels</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Permit</td>
                          <td className="py-2 pr-4">Mar-Jul (spawning end of Mar)</td>
                          <td className="py-2">Hardest to catch; requires crabs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tarpon */}
      <Section className="bg-surface-raised" id="tarpon">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">Tarpon - The Silver King</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  The Florida state record tarpon weighed 243 pounds, caught in Key West in 1975. A near-record specimen measured 86 inches long with a 44-inch girth at 238 pounds. Keys tarpon commonly run 100-130 pounds, and Marathon schools regularly produce fish over 100. These are not novelty catches. This is the baseline.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Tarpon are active in Keys channels from February through July, with April and May the peak months for fish over 100 pounds. Marathon sees two distinct congregation windows: March through June and September through November. The three hours before sunset through after dark is the most productive daily window. Outgoing tide is preferred. Fish moving into the current are far more likely to eat - tarpon swimming with the current (&quot;grey-hounding&quot;) generally refuse bait unless you lead them significantly.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Most effective depth in the Keys is 4 to 20 feet. When anchoring, position up-current of a deep hole or channel bend, about 50 yards away. Current speeds in Key West Harbor during tarpon season run 1.5 to 2 knots - enough to sweep a live crab bait naturally through the strike zone.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Live crabs are the preferred bait over live finfish for one simple reason: crabs don&apos;t attract barracuda. Use the suspended crab technique - stop your drift every 30 seconds, let the crab rise to the surface, then free-spool 30 seconds to simulate natural swimming. Pass crabs and blue crabs both work. For artificials, chartreuse and white fly patterns are proven producers.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  A word on the crowd: during peak season, 44 or more boats can fish the same area simultaneously. The Keys tarpon fishery is not wilderness fishing. It is world-class fishing with world-class company. Book your guide early and respect the rotation.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Tarpon have vision approximately 5,000 times stronger than humans and possess olfactory glands on the side of their heads. They can detect chum from a distance. They are prodigious leapers - fish in the 25-45 pound range jump more frequently than larger migratory tarpon. Fights on giant fish can exceed two hours. When a tarpon does not jump, it fights to exhaustion - a different and more dangerous battle for the fish.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Permit */}
      <Section id="permit">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">Permit - The Holy Grail</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  Permit are widely considered the most difficult fish to catch in the Florida Keys. Many experienced anglers spend multiple dedicated days before landing one. The all-tackle world record stands at 60 pounds (41.34 inches long, 37-inch girth). The heaviest caught on fly with an 8-pound tippet weighed 41 pounds 8 ounces. On the Keys flats, expect 5-10 pound fish. Larger permit in the 25-45 pound range hold on wrecks and reefs further offshore.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Permit spawning runs begin reliably at the end of March. Schools aggregate offshore in April, May, and June to spawn over reefs at 33-100 feet. The optimal months for flats fishing at the Marquesas Keys and Key West area are March, June, and July. Wind actually helps - conditions of 25-30 mph can drive fish into shallower staging areas where they are more accessible.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The Marquesas Islands, about 30 miles west of Key West, offer world-class permit fishing where deep water and constant current create ideal conditions. Western Dry Rocks near Key West holds permit on wrecks. On the flats, permit stage in deeper white sand potholes before moving up as the tide rises. Spot them by their tails popping up in big waves while feeding, or by their tendency to bob up and down on the surface over humps.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Live crabs are the gold standard. Crabs are &quot;permit candy.&quot; Male crabs hold up better on the hook than females after multiple casts. Medium-sized crabs are optimal for sight casting. Blue crabs work when fish are not responding to other presentations. DOA shrimp lures and crab-pattern flies are effective alternatives. Float crabs back to the fish from a drifting boat, or punch a fly into the wind and correct distance by stripping rather than chasing.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Permit have large forward-facing eyes with excellent vision. Wait for the fish to turn its back before casting - throwing while it faces you is a guaranteed spook. Use fluorocarbon leader (25-30 pound test), which increases strikes during daylight. They have no front teeth but crushing plates at the back of the throat - their nickname is &quot;rubber lips.&quot;
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  In Islamorada and all of Monroe County, all caught permit must be released immediately. Florida harvest is closed April through June statewide. Always check current regulations before your trip.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bridge Fishing */}
      <Section className="bg-surface-raised" id="bridges">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <SectionImage src="/images/gal-bridge-night.webp" alt="Bridge lights reflecting on night water" />
              <Heading as="h2" size="4xl" className="mb-4">Bridge Fishing - The Night Bite</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  Every bridge in the Keys is a fish magnet. The Seven Mile Bridge, Bahia Honda Bridge, and Channel Five produce tarpon, snook, and snapper after dark. The strike zone is the shadow line where light meets darkness. Drop live pilchards, pinfish, or crabs downcurrent and hold on.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  The biggest tarpon in the Keys are caught within casting distance of the road. Bridge tarpon fishing is a drift fishery - position up-current and let the tide work your bait through the strike zone.{" "}
                  <NextLink href="/food" className="text-accent hover:underline">Snook</NextLink> stack in the mangrove-lined moats around bridge abutments and are most productive from 30 minutes before sunset through a few hours after dark.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Snook in the Keys and Ten Thousand Islands spawn during full moons from May through August. Large specimens migrate into the Everglades backcountry in November and December. Night fishing with heavy jigs is the primary method for giants. Use a 7-8 foot rod with 20-40 pound braid and 60-80 pound fluorocarbon leader for bite-off and abrasion resistance around structure.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Yellowtail snapper fishing at the bridges and reef is outstanding in 30-35 feet of water using 12-pound mono and chum. Cero mackerel mix in regularly. Spanish mackerel run close to the Yacht Channel boundary. This is not glamorous fishing, but it fills coolers and feeds families.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Offshore */}
      <Section id="offshore">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <SectionImage src="/images/gal-offshore-run.webp" alt="Offshore fishing boat cutting through blue water" />
              <Heading as="h2" size="4xl" className="mb-4">Offshore - The Humps and the Stream</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  The Keys sit on the edge of the Gulf Stream. Run 15 miles out from Marathon or Islamorada and you are in 600 feet of cobalt blue water. The Marathon Hump, Islamorada Hump, and 409 Hump are subsurface mountains that concentrate baitfish and everything that eats them - yellowfin tuna, blackfin tuna, wahoo, and{" "}
                  <NextLink href="/food" className="text-accent hover:underline">mahi</NextLink>.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Mahi fishing peaks in late May through early June during the first migration, with schools of smaller fish and larger solitary bulls working weed lines, lobster pot buoys, and floating debris. The second migration from August through October often produces the bigger fish - specimens exceeding 30 pounds are common. Follow the frigate birds. In the Keys and Bahamas, frigates are a better indicator of mahi than of blue marlin.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Mahi congregate around any floating structure - lobster pots, high-flyers, weather buoys, sargassum mats, even dead sea turtles. Approach with engines off and drift toward the structure. Keep hooked fish in the water to attract more bites from the school. When the school goes deep, switch to a 350-grain sink tip. Trolling rigs: ballyhoo with chugger heads, cedar plugs far back from center rigger, Rapala CD 18 or Halco Laser Pro 190 on flat lines.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Winter sailfish run from November through March, with the heaviest action off Islamorada. Swordfishing at night on the deep drop has become the hottest bite in the Keys - dropping baits 1,000 feet or more into the abyss for fish that can top 200 pounds. Read our{" "}
                  <a href="https://thetackleroom.com/blogs/news/swordfish-fishing-guide-how-to-deep-drop-night-fish-and-rig-for-broadbills" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">swordfish guide</a> for rigging details and techniques. This is expedition-level fishing, but it happens 30 minutes from the dock.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Blackfin tuna run on and off at the Hump depending on current direction. Pilchards and chum produce larger fish when they are biting. King mackerel and mutton snapper hold on the reef year-round. The Keys offshore fishery is not seasonal - it is a year-round rotation of species as water temperatures and currents shift.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Backcountry */}
      <Section className="bg-surface-raised" id="backcountry">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <SectionImage src="/images/gal-marsh-gold.webp" alt="Marsh creek at golden hour" />
              <Heading as="h2" size="4xl" className="mb-4">Backcountry and the Everglades</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  Behind the Keys, Florida Bay and the Everglades backcountry hold a different fishery entirely. Mangrove islands on the flats are circumscribed by deeper moats that harbor snook and tarpon. The Ten Thousand Islands stretch from Everglades City south, offering some of the best snook fishing in the state - fish to 45-46 inches holding in the shadows of rock piles and dead wood left by Hurricane Wilma.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Juvenile tarpon hold where small inland creeks empty into larger bays. The Tamiami Trail canals connected to saltwater hold both juvenile tarpon and snook. Resident Everglades tarpon arrive from the Keys around mid-March and stay through summer into November, feeding near the outer edges of rivers among red mangroves. Early morning is topwater time in the Everglades - first hour after sunrise produces the best surface action.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Skip lures under dock pilings and mangrove roots to cover territory. In clear shallow water, avoid paddletails and topwater (too much vibration) - use jerk shads and artificial shrimp instead. DOA Glow Shrimp is effective in dock environments. White-colored jerk shads work best in clear water. For snook, a 30-pound fluorocarbon leader is the minimum - their gill plates will cut anything lighter.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Month by Month */}
      <Section id="calendar">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2" size="4xl" className="mb-6">Month by Month</Heading>
            <Text variant="secondary" className="mb-8 leading-relaxed">
              The Keys fish year-round. The species rotate, but the fishing never stops. Here is what to expect each month.
            </Text>
            <div className="space-y-4">
              {MONTH_DATA.map((m) => (
                <div key={m.month} className="p-4 rounded-xl border border-border bg-surface-raised/50">
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
      <Section className="bg-surface-raised" id="tackle">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <SectionImage src="/images/gal-tackle-close.webp" alt="Saltwater fishing reel and rod closeup" />
              <Heading as="h2" size="4xl" className="mb-4">Tackle and Rigging</Heading>
              <Text variant="secondary" className="mb-6 leading-relaxed">
                The Keys are a multi-rod destination. Each fishery demands different{" "}
                <NextLink href="/gear" className="text-accent hover:underline">gear</NextLink>. Here are the proven setups, verified against what working guides actually use.
              </Text>
              <div className="space-y-6">
                <div className="p-5 rounded-xl border border-border bg-surface/50">
                  <Heading as="h3" size="xl" className="mb-3">Flats - Bonefish</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    Fly: 9-foot, 7-9 weight rod. Reel with smooth drag and 150 yards backing. Leaders 9-12 feet, 8-12 pound tippet. Bead chain or small lead eyes on size 4 flies. Effective patterns: Borski Bonefish Slider, Gotcha, EP Spawning Shrimp, Veverka&apos;s Mantis Shrimp. Spinning: light outfit, 10-12 pound main line (braid or mono). Live shrimp rigged tail-first with the tail broken off, entire hook concealed. Place bait on the edge of grass and sand. 2/0 Gamakatsu Offset Worm EWG hook to prevent swallowing.
                  </Text>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface/50">
                  <Heading as="h3" size="xl" className="mb-3">Flats - Tarpon</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    Fly: 10-weight standard, 12-weight for large migratory fish. Chartreuse and white patterns. Spinning: 8-foot rod, reel holding 250-300 yards line, 50-80 pound braid, 60-80 pound fluorocarbon leader. Hook: 7/0 Owner Mutu Circle Hook. Circle hooks are mandatory for tarpon in Florida. Live crab rig: DOA float + 5 feet 60-pound fluoro + 3 feet 60-pound leader + 7/0 circle hook. Beach tarpon: heavy-action 8.5-foot spinning rod or 7.5-foot conventional, 65-pound braid, 60-pound fluoro leader.
                  </Text>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface/50">
                  <Heading as="h3" size="xl" className="mb-3">Flats - Permit</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    Fly: 9-weight. Crab-pattern flies are the standard. Spinning: 7-foot, 15-30 pound class rod with smooth drag reel (permit rub against the bottom as a defense mechanism). Shimano Saragosa 10000 or similar. 25-30 pound fluorocarbon leader for abrasion resistance. Sight casting: 3/0 circle hooks with 30-pound leader. Live crabs - male crabs preferred (hold up better after multiple casts). Medium-sized crabs for sight casting; larger crabs for tarpon.
                  </Text>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface/50">
                  <Heading as="h3" size="xl" className="mb-3">Bridge Fishing</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    Medium-heavy spinning, 20-pound braid, 30-60 pound fluorocarbon leader depending on target. Snook require 60-80 pound fluoro for gill plate abrasion resistance. Live pilchards, pinfish, or crabs drifted downcurrent through the shadow line. Rapala Loop Knot for topwater lures to heavy fluoro. 7-8 foot rod, 20-40 pound braid for snook and tarpon around structure.
                  </Text>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface/50">
                  <Heading as="h3" size="xl" className="mb-3">Offshore</Heading>
                  <Text variant="secondary" size="sm" className="leading-relaxed">
                    30-50 class conventional, 65-pound braid, wind-on leaders. Mahi trolling: 20-pound rods, lever-drag reels, 30-pound mono. Ballyhoo rigged with chugger heads. Cedar plugs far back from center rigger. Rapala CD 18 or Halco Laser Pro 190 on flat lines. Light tackle mahi: 7-foot rod, 30-pound braid, 4-5 foot fluoro leader (15-20 pound test). Fly rod for mahi: 9-10 weight. Effective patterns: Tutti Frutti (pink/chartreuse), Electric Chicken.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Recommended Gear */}
      <Section id="gear">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">Recommended Gear</Heading>
              <Text variant="secondary" className="mb-6 leading-relaxed">
                Proven terminal tackle and lures for Keys species. Every product here is something guides actually tie on.
              </Text>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <ProductCard name="E-Shield Piano Wire" handle="piano-wire" desc="Premium stainless leader wire for Keys species" />
                <ProductCard name="Ballyhoo Pin Rig" handle="ballyhoo-rig-wire-mono-or-fluoro" desc="Pre-rigged ballyhoo for trolling mahi and sailfish" />
                <ProductCard name="Eagle Claw Circle Hooks" handle="eagle-claw-l2004el-circle-hooks" desc="Mandatory for Florida tarpon fishing" />
                <ProductCard name="Gotcha Plug" handle="gotcha-plug" desc="Classic Keys pier and reef lure" />
                <ProductCard name="Fluorocarbon Leader Material" handle="diamond-illusion-fluorocarbon-leader-material" desc="Invisible leader for permit and bonefish" />
                <ProductCard name="Spro Prime Bucktail Jig" handle="spro-prime-bucktail-jig" desc="Proven on yellowtail snapper and cobia" />
              </div>
              <CollectionCard name="Shop Circle Hooks" handle="circle-hooks" desc="Required for tarpon, recommended for all Keys species" />
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
                  Key West International Airport (EYW) has direct flights from Miami, Fort Lauderdale, Atlanta, Charlotte, Dallas, and several other cities. Miami International (MIA) is 3.5 hours from Key West by car, with fishing options at every stop along US-1. Islamorada is about 90 minutes from Miami. Marathon is two hours.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Guided flats fishing runs $600-800 per day for one to two anglers. That includes the skiff, push pole, tackle, and a guide who knows the water. Offshore charters run $1,500-2,500 per day depending on boat size and distance. Half-day trips are available for reef and bridge fishing at lower rates. Book at least 2-3 months in advance for peak tarpon season (April through June) - the best guides book out early.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Bring your own tackle if you are particular about rods and reels. Most guides provide everything, but having your own 8-weight fly rod or favorite spinning setup makes a difference. Bring polarized sunglasses (two pairs - different lens colors for different light). Bring sun protection rated for all-day water exposure. Bring a rain jacket. Afternoon thunderstorms are common May through October.
                </Text>
                <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                  <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-3">Base Camps</Text>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Text className="font-heading font-semibold text-sm mb-1">Islamorada</Text>
                      <Text variant="secondary" size="sm">Sport fishing capital. Highest density of guides and tackle shops.</Text>
                    </div>
                    <div>
                      <Text className="font-heading font-semibold text-sm mb-1">Marathon</Text>
                      <Text variant="secondary" size="sm">Central location with good access to backcountry and offshore.</Text>
                    </div>
                    <div>
                      <Text className="font-heading font-semibold text-sm mb-1">Key West</Text>
                      <Text variant="secondary" size="sm">Best Marquesas access (permit/tarpon), closest deep water for swordfishing.</Text>
                    </div>
                    <div>
                      <Text className="font-heading font-semibold text-sm mb-1">Key Largo</Text>
                      <Text variant="secondary" size="sm">Gateway to the Keys. Best base for reef fishing and Everglades backcountry.</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Conservation */}
      <Section id="regs">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div>
              <Heading as="h2" size="4xl" className="mb-4">Conservation and Regulations</Heading>
              <div className="space-y-4">
                <Text variant="secondary" className="leading-relaxed">
                  The Keys fishery is healthy because people take conservation seriously. Here are the rules that matter most.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Tarpon:</strong> Fish over 40 inches cannot be removed from the water in Florida. Circle hooks are mandatory. Fish under 130 pounds can be brought in the boat to unhook; larger fish must stay in the water. Handle tarpon with wet hands. Support the fish horizontally. Never gill or gaff a tarpon.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Permit:</strong> All caught permit must be released immediately in Islamorada and Monroe County. Florida harvest is closed April through June statewide. Even outside the closed season, most Keys anglers practice catch-and-release.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Bonefish:</strong> Catch-and-release in Florida. The Bonefish and Tarpon Trust, partnered with the Lower Keys Guides Association, runs active tagging programs through the University of Miami. The &quot;Save the Slime&quot; campaign promotes safe handling practices.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Snook:</strong> Hold horizontally with one hand on the bottom lip and the other fully supporting the belly. Never hold vertically by the lip - it causes vertebral separation up to 2mm and connective tissue damage. Survival rates drop to roughly 40% when fish are oxygen-deprived during extended fights.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  Always check current Florida Fish and Wildlife Conservation Commission (FWC) regulations before your trip. Season dates, bag limits, and slot limits change. What was legal last year may not be legal this year.
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
                { title: "North Carolina", href: "/destinations/north-carolina", img: "/images/dest-nc.webp" },
                { title: "Bahamas", href: "/destinations/bahamas", img: "/images/dest-bahamas.webp" },
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
                <Heading as="h4" size="md" className="mb-1">Gear up for the Keys</Heading>
                <Text variant="secondary" size="sm">Find the exact tackle for every Keys fishery at The TackleRoom.</Text>
              </div>
              <a href="https://thetackleroom.com/collections/circle-hooks" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-accent px-6 py-2.5 font-heading font-semibold text-sm text-stone-950 hover:bg-accent-hover transition-colors whitespace-nowrap">
                Shop Tackle &rarr;
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
