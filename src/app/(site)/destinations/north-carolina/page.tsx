import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "North Carolina Coast Fishing Guide - Red Drum, Bluefin Tuna & Surf",
  description:
    "The definitive NC coast saltwater fishing guide. Outer Banks drum run, bluefin tuna, king mackerel, pier fishing, and inshore from Hatteras to Wrightsville Beach.",
};

const SECTIONS = [
  { id: "drum-run", label: "Drum Run" },
  { id: "offshore", label: "Offshore" },
  { id: "inshore", label: "Inshore" },
  { id: "pier", label: "Pier Fishing" },
  { id: "calendar", label: "Calendar" },
  { id: "tackle", label: "Tackle" },
  { id: "trip", label: "Plan Your Trip" },
  { id: "regs", label: "Regulations" },
];

const MONTH_DATA = [
  { month: "January", species: "Bluefin tuna (giants), striped bass, black drum", note: "The unique NC winter bluefin fishery out of Oregon Inlet. Giants in January and February. Cold-water surf stripers." },
  { month: "February", species: "Bluefin tuna, speckled trout (peak), black drum", note: "Bluefin still running. Winter speckled trout at their best - NC record was caught February 9." },
  { month: "March", species: "Bluefin tuna (late), sheepshead, black drum, early flounder", note: "Last chance for bluefin. Sheepshead around structure. Black drum on full/new moons. Spring transition begins." },
  { month: "April", species: "Speckled trout (spawn), flounder, red drum (inshore), cobia (early)", note: "Specks spawn on shallow flats. Flounder return as water hits 68-78 F. Red drum active inshore." },
  { month: "May", species: "Cobia, king mackerel (early), red drum, flounder, bluefish", note: "Cobia sight-fishing near menhaden schools begins. Kings start showing. Red drum on the flats and sounds." },
  { month: "June", species: "King mackerel, cobia, mahi, red drum, speckled trout", note: "Kings running off the piers. Cobia following leatherback turtles at Cape Point. Offshore heats up." },
  { month: "July", species: "King mackerel, mahi, wahoo, yellowfin tuna, red drum", note: "Full offshore season. Kings thick from piers to nearshore wrecks. Gulf Stream producing mahi and yellowfin." },
  { month: "August", species: "King mackerel, mahi, wahoo, red drum, flounder", note: "Offshore peaks. Red drum on the sounds. Flounder on structure in the ICW." },
  { month: "September", species: "Red drum (bull run begins), king mackerel (peak), false albacore", note: "The drum run starts. Massive reds stack at Cape Point. Kings peak at Crystal Coast. False albacore appear." },
  { month: "October", species: "Red drum (peak bulls), king mackerel, false albacore, speckled trout", note: "Peak drum run - 40-60 inch fish at Cape Point and along OBX beaches. Outstanding variety month." },
  { month: "November", species: "Red drum (late bulls), speckled trout, striped bass, bluefish", note: "Late drum run. Fall mullet run brings specks and blues. Stripers start showing in the sounds." },
  { month: "December", species: "Speckled trout (winter peak begins), striped bass, bluefin (early)", note: "Winter speck fishing begins. Trophy trout in deep creek holes. First bluefin scouts arrive." },
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[240px] sm:h-[300px] rounded-xl overflow-hidden mb-8">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

export default function NorthCarolinaPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[440px] max-h-[660px]">
        <img src="/images/dest-nc.webp" alt="Outer Banks surf fishing at sunrise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <Container>
            <Text variant="secondary" size="sm" className="!text-white/70 uppercase tracking-widest font-heading font-semibold mb-2">Destination Guide</Text>
            <Heading as="h1" size="hero" className="!text-white mb-2">North Carolina Coast</Heading>
            <Text size="lg" className="!text-white/80 max-w-xl">Where the Gulf Stream meets the Outer Banks</Text>
          </Container>
        </div>
      </div>

      {/* Sticky nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-surface/80 backdrop-blur-md">
        <Container>
          <div className="flex gap-3 py-3 overflow-x-auto no-scrollbar">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 text-sm font-heading font-medium text-accent hover:bg-accent/15 hover:border-accent transition-colors">{s.label}</a>
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
                  {["Red Drum", "Bluefin Tuna", "King Mackerel", "Speckled Trout", "Cobia", "Flounder"].map((sp) => (
                    <Badge key={sp} variant="creek">{sp}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Best Months</Text>
                <Text size="sm">Red drum run: Sept-Nov. Bluefin: Jan-March. Inshore: April-November. Specks: Dec-Feb.</Text>
              </div>
              <div>
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-1">Fishing Style</Text>
                <Text size="sm">Surf, pier, inshore sounds, nearshore wrecks, offshore</Text>
              </div>
            </div>
          </div>
          <div className="max-w-3xl space-y-6 mt-10">
            <Text variant="secondary" size="lg" className="leading-relaxed">
              The North Carolina coast is the most underrated saltwater fishery on the East Coast. The Outer Banks put you within reach of giant{" "}
              <NextLink href="/food" className="text-accent hover:underline">red drum</NextLink> in the fall, bluefin tuna in the winter, and everything in between. From Hatteras to Wrightsville Beach, this coastline delivers world-class fishing across every style - surf, pier, inshore, and offshore.
            </Text>
            <Text variant="secondary" className="leading-relaxed">
              What makes North Carolina special is geography. The Outer Banks jut out into the Atlantic like a fist, creating the closest Gulf Stream access on the East Coast - sometimes as tight as 20 miles. Behind the barrier islands, the Pamlico and Albemarle Sounds form the largest estuarine system on the Atlantic seaboard. And the piers stretching off the beaches create a culture of fishing that runs deeper than anywhere else on the coast.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Drum Run */}
      <Section className="bg-surface-raised" id="drum-run">
        <Container>
          <div className="max-w-3xl">
            <SectionImage src="/images/story-surf.webp" alt="Surf fishing at dawn on the Outer Banks" />
            <Heading as="h2" size="4xl" className="mb-4">The Drum Run - Cape Point and Beyond</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                Every fall, massive red drum - 40 to 60 inches - stack up along the Outer Banks beaches. Cape Point at Hatteras is ground zero. This is bucket-list surf fishing. Anglers wade out at first light with 12-foot rods, 8-ounce pyramid sinkers, and fresh cut mullet, casting into the sloughs and cuts where the Atlantic chews into the sand.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                The numbers are staggering. Schools of up to 2,000 fish have been documented over Diamond Shoals. Fish at the Chesapeake Bay mouth and Virginia Eastern Shore routinely measure 44-53 inches. Fishing improves during high winds and rough conditions - target the breaking waves on shallow shoals behind the islands. These fish feed in the chaos.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                The run starts in September and peaks in October, with bull reds pushing south along the beaches. Late November can still produce, especially on warm-water days. For surf bulls, rig with medium-heavy spinning, 30-40 pound braid, and 40-60 pound leader. The standard rig is a fish-finder setup with 8-10 ounce lead, 9/0 circle hook, and 1-3 feet of 50-pound mono leader. Whole or half hard crabs on a 9/0 hook with 50-pound leader are devastating. Cut mullet works, but crab is king when the big schools are in.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Watch the water. Mud balls on the surface mean bull reds are attacking bait on the bottom. Fish that push significantly more water than mullet are your targets. And when dolphins start feeding - menhaden are present, and large redfish are not far behind.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Offshore */}
      <Section id="offshore">
        <Container>
          <div className="max-w-3xl">
            <SectionImage src="/images/gal-dawn-boat.webp" alt="Fishing boat heading offshore at dawn" />
            <Heading as="h2" size="4xl" className="mb-4">Offshore - The Gulf Stream Edge</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                Oregon Inlet and Hatteras Inlet give you access to some of the closest Gulf Stream water on the East Coast - 30 miles out in summer, tighter in winter. The Outer Banks fleet is world-class. Yellowfin and{" "}
                <NextLink href="/food" className="text-accent hover:underline">bluefin tuna</NextLink>, wahoo, mahi, billfish - this is a full-service offshore fishery.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Winter bluefin fishing has exploded. North Carolina has a unique January fishery - boats run out of Oregon Inlet for giant bluefin in January and February. The IGFA all-tackle record stands at nearly 1,500 pounds (Nova Scotia), but NC waters consistently produce school bluefin (27-47 inches), large school (47-59 inches), and medium-class fish (59-73 inches). A 60-inch fish typically weighs 130-140 pounds. They are warm-blooded and feed comfortably in cold water where other tunas are absent. The best bite comes during incoming-to-slack high tide, in the couple hours after sunrise and sunset. Full moon days produce peaks.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Summer and fall bring yellowfin tuna, wahoo, and mahi on the Gulf Stream edge. King mackerel run thick from May through October. Larger mahi arrive off North Carolina in April and May. Billfish tournaments run through the summer. The offshore season here is not a two-month window - it is a rotating calendar from January through December.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                A standard NC trolling spread runs 5-7 lines. Long riggers carry skirted ballyhoo or large Ilander lures for billfish and wahoo. Short riggers run smaller skirted ballyhoo for mahi and yellowfin. Flat lines pull diving plugs like the Rapala CD 18 or Halco Laser Pro 190 just under the surface wash. A shotgun line far back off the center rigger with a cedar plug or naked ballyhoo picks up wahoo that shy away from the spread. For yellowfin specifically, chunking butterfish or cut sardines creates a chum slick that holds schools behind the boat once you locate them on the temperature break. Slow-trolling live mackerel on 1.5-ounce jigheads with 8-inch soft plastic split-tails produces big yellowfin when the fish are feeding deep along the edge.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Inshore */}
      <Section className="bg-surface-raised" id="inshore">
        <Container>
          <div className="max-w-3xl">
            <SectionImage src="/images/gal-kayak.webp" alt="Kayak fishing on calm coastal water at dawn" />
            <Heading as="h2" size="4xl" className="mb-4">Inshore - ICW and Sound Side</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                The Pamlico and Albemarle Sounds are the largest estuarine system on the East Coast.{" "}
                <NextLink href="/food" className="text-accent hover:underline">Speckled trout</NextLink>, flounder, and red drum patrol the grass flats and oyster bars year-round. The ICW from Wrightsville Beach to Morehead City is loaded with structure.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                The NC state record speckled trout weighed 12 pounds 8 ounces at 33.5 inches - caught February 9 in the lower Neuse River. That is not a fluke. Winter (December through February) is the best bite for trophy specks. Big trout ride out cold snaps in deep creek holes and channels where temperatures stay stable, then scatter to shallow flats during warm-up days. The average Baffin Bay trout in Texas runs 28 inches. NC fish compete with that - 4-pounders are caught daily in winter.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Specks spawn late April through early May, moving into shallow waters with tidal flow near inlets. The best moon fishing happens a few days around new and full moons, especially May through June with light winds. Right before sunrise is the money window in spring and summer. In winter with clear water, night fishing can be exceptional.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Standard inshore rig: 7.5-foot medium spinning rod, extra-fast action, 4000 reel, 10-pound braid with 30-40 pound fluorocarbon leader. Soft plastics on jig heads, Z-Man paddle tails, and live shrimp under a popping cork are your go-to presentations. For trophy specks, Zara Super Spook or jumbo Savage 3D Shrimp topwater at first light.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Red drum hold in 2-3 feet of water near shell and sand spits, tidal sloughs, and channel edges. Inshore reds respond to gold spinners, 1/4-ounce jig heads with paddletails, and popping corks in 3-6 foot stained water. For marsh fishing: 7-foot medium rod, 10-pound braid, 20-pound fluoro leader. In winter, slow your retrieve - reds will not chase fast-moving bait in cold water.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Wade fishing for red drum in the sounds is outstanding and underrated. The Pamlico and Neuse River flats are wadeable at low tide, with firm sand and shell bottom in 1-3 feet of water. Work the edges of oyster bars and grass beds where reds push up to feed on falling water. Gold spoons and soft plastics on 1/4-ounce jig heads are the standard wade tools. Move slow, watch for wakes and tails, and cast ahead of moving fish. Wade-accessible flats around Oriental and Minnesott Beach produce slot reds consistently from April through November.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Fly fishing the North Carolina sounds is exceptional. The Pamlico Sound flats hold speckled trout that respond well to Clouser Minnows and EP baitfish patterns on a 7-8 weight fly rod. False albacore arrive in the fall and provide the best saltwater fly fishing on the East Coast - schools of albies blitz bait along the beaches from Cape Lookout to Ocracoke from late September through November. A 9-weight rod with an intermediate sink-tip line and small white Clouser or Surf Candy is the standard setup. Red drum sight-casting on fly is possible on the sound-side flats when conditions are calm and clear. An 8-weight rod with weedless crab and shrimp patterns in copper and tan covers most inshore fly situations.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pier Fishing */}
      <Section id="pier">
        <Container>
          <div className="max-w-3xl">
            <SectionImage src="/images/gal-pier-sunset.webp" alt="Pier fishing silhouette at sunset" />
            <Heading as="h2" size="4xl" className="mb-4">Pier Fishing - Iconic Atlantic Piers</Heading>
            <div className="space-y-4">
              <Text variant="secondary" className="leading-relaxed">
                Jennette&apos;s Pier, Avalon Pier, and Bogue Inlet Pier are institutions. King mackerel, cobia, Spanish mackerel, and pompano run the beach from May through October. Live spot and bluefish on king rigs account for most of the big fish. Pier fishing the Outer Banks is a culture - get there before sunrise.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                King mackerel are most abundant on the Crystal Coast in September and October, with fish commonly found in 45-85 feet of water. Slow-trolling live blue runners produces the biggest fish. Standard pier king rig: drag set under 5 pounds to prevent pulling hooks from their soft mouths. Double-pogy rig gives a larger profile that attracts attention.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Cobia sight-fishing from piers is underrated. After 7:30 AM when the sun gets high enough to see into the water, watch for dark shapes cruising near menhaden schools. They follow leatherback turtles and manta rays along the beach. Classic bucktail jig in pink or orange is the standard presentation - quick retrieve past the fish, dead stop to let the jig fall, which triggers hesitant bites. North Carolina sits at the southern edge of cobia&apos;s expanding range, with fish now reaching New York.
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
              NC fishing covers everything from ultra-light inshore to heavy offshore. Here are the proven setups by fishery. More{" "}
              <NextLink href="/gear" className="text-accent hover:underline">gear guides</NextLink> on The TackleRoom.
            </Text>
            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Surf - Bull Red Drum</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  12-foot surf rod, medium-heavy action. 6000+ reel with 50+ pound braid. Fish-finder rig: 8-10 oz pyramid sinker, 9/0 circle hook, 1-3 feet of 50-lb mono leader. Bait: whole or half hard crabs, cut mullet, ladyfish chunks. For lighter surf: 30-40 lb braid, 40-60 lb leader, 5/0-7/0 circle hooks. Keep rod in a sand spike - the hit is violent.
                </Text>
              </div>
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Inshore - Specks & Slot Reds</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  7.5-foot medium spinning, extra-fast action, 4000 reel. 10-lb braid to 30-40 lb fluorocarbon leader. Lures: Z-Man paddle tails on 1/4 oz jig heads, popping corks with live shrimp, MirrOlure MR 17 subsurface. Topwater: Zara Super Spook for trophy specks at first light. Color rule: bright in clear water, dark in muddy.
                </Text>
              </div>
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Pier - Kings & Cobia</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  King mackerel: drag under 5 lbs, double-pogy rig, live blue runners or spot. Cobia: 2-5 oz bucktail jig in pink/orange/chartreuse, 7-foot medium-heavy rod. Quick retrieve past the fish, dead stop to let jig fall. Spanish mackerel: fast-moving spoons and shiny plugs, fast steady surface retrieve.
                </Text>
              </div>
              <div className="p-5 rounded-xl border border-border bg-surface-raised/50">
                <Heading as="h3" size="xl" className="mb-3">Offshore - Bluefin & Pelagics</Heading>
                <Text variant="secondary" size="sm" className="leading-relaxed">
                  Bluefin: chunking butterfish, slow-trolled mackerel, casting 1.5 oz jigheads with 8-inch soft plastic split-tails. Yellowfin and mahi: standard trolling spread with ballyhoo, cedar plugs, skirted lures. 30-50 class conventional. Wahoo: high-speed trolling 12-16 knots, wire leader mandatory.
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
                The Outer Banks are accessible via Norfolk International (ORF) or Raleigh-Durham (RDU). ORF is about 2 hours to Nags Head, 3.5 hours to Hatteras. RDU is roughly 4 hours to the central OBX. Morehead City and Wrightsville Beach are closer to RDU - about 2.5-3 hours.
              </Text>
              <Text variant="secondary" className="leading-relaxed">
                Guided inshore trips run $400-600 per day. Offshore charters from Oregon Inlet or Hatteras run $1,200-2,000+ depending on distance and boat. Pier fishing is the most affordable option - daily pier passes run $10-25. Surf fishing is free everywhere, but you need a beach driving permit ($50/10 days) for Cape Point access.
              </Text>
              <div className="p-5 rounded-xl border border-border bg-surface/50">
                <Text variant="muted" size="xs" className="uppercase tracking-widest font-heading font-semibold mb-3">Base Camps</Text>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Text className="font-heading font-semibold text-sm mb-1">Hatteras / Avon</Text>
                    <Text variant="secondary" size="sm">Ground zero for the drum run. Cape Point access. Oregon Inlet fleet nearby.</Text>
                  </div>
                  <div>
                    <Text className="font-heading font-semibold text-sm mb-1">Nags Head / Kill Devil Hills</Text>
                    <Text variant="secondary" size="sm">Most amenities. Good pier access. Oregon Inlet 30 minutes south.</Text>
                  </div>
                  <div>
                    <Text className="font-heading font-semibold text-sm mb-1">Morehead City</Text>
                    <Text variant="secondary" size="sm">Crystal Coast hub. Best access to nearshore kings and inshore sounds.</Text>
                  </div>
                  <div>
                    <Text className="font-heading font-semibold text-sm mb-1">Wrightsville Beach</Text>
                    <Text variant="secondary" size="sm">ICW inshore fishing. Closest major beach to Raleigh. Year-round fishery.</Text>
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
                  North Carolina has strong fishery management backed by active conservation organizations. Know the rules before you hit the water.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Red Drum:</strong> Slot limit is 18 to 27 inches in most NC waters, with a daily bag limit of 1 fish. In some areas the slot extends to 18-27 inches with catch-and-release required for all oversized fish. Large drum over 27 inches must be released immediately. The Outer Banks drum run is almost entirely catch-and-release given the size of the fish. CCA North Carolina and the NC Division of Marine Fisheries actively manage the red drum population through tagging programs and season adjustments.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Speckled Trout:</strong> Daily bag limit is 4 fish, minimum 14 inches. The limit was reduced from 6 to 4 in recent years to protect the breeding population. Trophy trout over 20 inches are disproportionately important to reproduction. Many experienced anglers practice catch-and-release on fish over 5 pounds.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Flounder:</strong> Season dates and limits change frequently. Check NCDMF regulations before every trip. The fishery has been under increasing management pressure. Minimum size is 15 inches with a daily limit that varies by season.
                </Text>
                <Text variant="secondary" className="leading-relaxed">
                  <strong>Offshore:</strong> Federal regulations apply beyond 3 nautical miles. Circle hooks are required when fishing with natural bait for reef fish in South Atlantic federal waters. Bluefin tuna are managed under strict NOAA quotas with catch reporting requirements. Always check current NC Division of Marine Fisheries regulations before your trip - season dates and bag limits change annually.
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
                <Heading as="h4" size="md" className="mb-1">Gear up for North Carolina</Heading>
                <Text variant="secondary" size="sm">Find the exact tackle for every NC fishery at The TackleRoom.</Text>
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
