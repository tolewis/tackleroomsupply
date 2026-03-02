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
];

const MONTH_DATA = [
  {
    month: "January",
    highlights: [
      "Trophy speckled trout in deep channels and basins",
      "Redfish stacking up in residential canals and warm-water drains",
      "Black drum staging nearshore ahead of spring run",
      "Sheepshead thick around bridge pilings and jetties",
    ],
  },
  {
    month: "February",
    highlights: [
      "Black drum peak begins on full and new moon tides",
      "Big speckled trout in 6 inches of water chasing mullet on warm afternoons",
      "Redfish transition from winter patterns to open marsh",
      "Flounder moving shallow on ledge walls",
    ],
  },
  {
    month: "March",
    highlights: [
      "Speckled trout spring run kicks off March 1",
      "Black drum peak continues through month",
      "Redfish active across open marsh and bayou mouths",
      "Sheepshead spawn around nearshore structure",
    ],
  },
  {
    month: "April",
    highlights: [
      "Most productive month for speckled trout",
      "Trout schooling on ledge walls in winding bayous at 10-20 ft",
      "Redfish spreading across interior marsh ponds",
      "Cobia showing on Venice nearshore wrecks",
    ],
  },
  {
    month: "May",
    highlights: [
      "Speckled trout bite remains strong through spring",
      "Redfish sight-casting improving as water clears",
      "Venice offshore yellowfin tuna season in full swing",
      "Jack crevalle pushing into passes and bayou mouths",
    ],
  },
  {
    month: "June",
    highlights: [
      "Best month for topwater redfish before mullet get too dense",
      "Speckled trout sunrise bite on shell reefs",
      "Venice yellowfin and wahoo on oil platforms",
      "Flounder on mud bottoms near marsh drains",
    ],
  },
  {
    month: "July",
    highlights: [
      "Last window for topwater redfish on open flats",
      "Early morning and late evening specks on popping corks",
      "Venice blue marlin season heating up",
      "Water temps stabilize in low-to-mid 70s, fish activity peaks",
    ],
  },
  {
    month: "August",
    highlights: [
      "Bull redfish beginning to push toward passes",
      "Speckled trout moving to deeper structure midday",
      "Venice offshore at peak for yellowfin, wahoo, and marlin",
      "Tarpon showing in passes and nearshore Gulf",
    ],
  },
  {
    month: "September",
    highlights: [
      "Bull red drum run begins in earnest",
      "Schools of 100+ bull reds on open beaches and passes",
      "Speckled trout picking up on fall cooling",
      "Venice nearshore cobia and jack crevalle",
    ],
  },
  {
    month: "October",
    highlights: [
      "Peak bull red season, fish pushing 30 inches at 12-13 lbs",
      "Speckled trout fall bite heating up in bayous",
      "Flounder run to open Gulf begins",
      "Best month for sheer variety across the marsh",
    ],
  },
  {
    month: "November",
    highlights: [
      "Bull reds still thick on spawning grounds",
      "Speckled trout transitioning to winter deep-water pattern",
      "Black drum moving inshore on first cold fronts",
      "Redfish schooling in residential canals as water cools",
    ],
  },
  {
    month: "December",
    highlights: [
      "Trophy speckled trout in deep channels and warm drains",
      "Redfish concentrated in warm-water outflows and canals",
      "Sheepshead stacking on pilings and jetties",
      "Black drum pre-staging for February peak",
    ],
  },
];

function SectionImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mb-8 h-[240px] overflow-hidden rounded-xl md:h-[300px]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default function LouisianaPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[420px] w-full overflow-hidden md:h-[520px]">
        <img
          src="/images/destinations/dest-louisiana.webp"
          alt="Louisiana marsh flat with redfish tailing at sunrise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <Container className="absolute inset-0 flex flex-col justify-end pb-12">
          <Badge className="mb-3 w-fit">Destination Guide</Badge>
          <Heading as="h1" size="4xl" className="text-white">
            Louisiana Marsh
          </Heading>
          <Text size="xl" className="mt-2 max-w-2xl text-white/90">
            America&apos;s greatest redfish fishery
          </Text>
        </Container>
      </div>

      {/* Sticky Nav */}
      <div className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
        <Container>
          <nav className="scrollbar-hide flex gap-1 overflow-x-auto py-2">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Quick Facts */}
      <Section>
        <Container>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
            <Heading as="h2" size="lg" className="mb-4">
              Quick Facts
            </Heading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Location
                </Text>
                <Text className="text-zinc-600 dark:text-zinc-400">
                  Southeast Louisiana, Mississippi River Delta
                </Text>
              </div>
              <div>
                <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Primary Species
                </Text>
                <Text className="text-zinc-600 dark:text-zinc-400">
                  Redfish, Speckled Trout, Black Drum
                </Text>
              </div>
              <div>
                <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Other Species
                </Text>
                <Text className="text-zinc-600 dark:text-zinc-400">
                  Sheepshead, Flounder, Jack Crevalle
                </Text>
              </div>
              <div>
                <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Peak Season
                </Text>
                <Text className="text-zinc-600 dark:text-zinc-400">
                  Year-round. Bull reds Sep-Nov, specks Mar-Jun
                </Text>
              </div>
              <div>
                <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Water Type
                </Text>
                <Text className="text-zinc-600 dark:text-zinc-400">
                  Brackish marsh, inshore bays, Gulf nearshore and offshore
                </Text>
              </div>
              <div>
                <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Access
                </Text>
                <Text className="text-zinc-600 dark:text-zinc-400">
                  Fly into New Orleans, 60-90 min drive to launch
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Intro */}
      <Section>
        <Container className="max-w-3xl">
          <Text size="lg" className="text-zinc-700 dark:text-zinc-300">
            Louisiana holds thousands of miles of bayous, cuts, pipeline canals,
            and flooded grass flats that together form the densest red drum
            population on the planet. The Mississippi River dumps nutrient-rich
            sediment into a labyrinth of brackish marsh that feeds everything
            from juvenile shrimp to 40-lb bull redfish. This is not a fishery you
            visit once. It is a fishery that ruins every other fishery for you.
          </Text>
          <Text
            size="lg"
            className="mt-4 text-zinc-700 dark:text-zinc-300"
          >
            The launch points read like a greatest-hits album: Venice at the
            mouth of the Mississippi, Hopedale on the eastern marsh, Cocodrie in
            the south-central delta, and Delacroix tucked into the southeast
            marsh. Each one puts you within minutes of world-class inshore
            fishing. Venice adds offshore yellowfin tuna, blue marlin, and wahoo
            on top of that. No other region in the country stacks this much
            variety into such a small footprint.
          </Text>
        </Container>
      </Section>

      {/* Sight-Casting the Marsh */}
      <Section id="sight-casting">
        <Container className="max-w-3xl">
          <SectionImage
            src="/images/gallery/gal-catch-fish.webp"
            alt="Angler sight-casting to redfish tailing on a Louisiana marsh flat"
          />
          <Heading as="h2" size="2xl" className="mb-4">
            Sight-Casting the Marsh
          </Heading>
          <Text className="text-zinc-700 dark:text-zinc-300">
            Reading water in the Louisiana marsh is a full-body discipline. You
            stand on the bow of a poled skiff in ankle-deep water and look for
            wakes, pushes, tails, and muds. A wake is a V-shaped disturbance
            moving across a flat. A push is a subtle bulge of water ahead of a
            moving fish. Tails are the obvious giveaway: bronze-orange fins
            breaking the surface as a redfish roots through mud for crabs and
            shrimp. Muds are discolored plumes of silt that reveal a feeding
            school even when you cannot see individual fish.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            Redfish utilize depth changes as small as 1-2 ft. Shallow grass
            flats adjacent to deeper bayous and pipeline cuts are the prime
            zones. Fish cruise the flat to feed and slide into the deeper water
            when spooked or resting. Tidal movement is the engine. On falling
            tides, redfish congregate at marsh drains to ambush shrimp and
            baitfish funneling out of flooded grass. On rising tides, they push
            onto the flats and spread out. Tailing is most visible in clear
            glass-calm conditions, which is why early morning before the wind
            picks up is the money window.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            The 18-22 inch range dominates much of the marsh, fish from the 2021
            spawn class that have grown into solid slot reds. Thirty-inch fish
            run 12-13 lbs and pull like a truck in knee-deep water. Activity
            improves when water temps stabilize in the low-to-mid 70s F, which
            typically happens by late April and holds through October. June and
            July are the best months for topwater before mullet populations
            become too dense and give the redfish too many easy meals.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            Fall is the headline event. Bull reds push into passes and along
            open beaches to spawn from September through November. Schools of
            100+ fish are not exaggeration. They are a regular occurrence on
            the right tide and wind. You pole into position, make a long cast
            with a gold spoon or a Z-Man paddletail on a 1/4 oz jighead, and
            strip it through the school. If the spoon gets ignored, switch to a
            soft plastic. If both get ignored, tie on a Heddon Super Spook and
            work topwater. These fish are aggressive. The problem is not getting
            a bite. The problem is choosing which fish in the school to cast to.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            Understanding what redfish eat and when they eat it is half the game.
            Shrimp, crabs, mullet, and small croakers make up the bulk of the
            diet. Matching the{" "}
            <NextLink
              href="/food"
              className="font-medium text-blue-600 underline underline-offset-2 dark:text-blue-400"
            >
              forage species
            </NextLink>{" "}
            in your area will consistently outproduce a random lure selection.
          </Text>
        </Container>
      </Section>

      {/* Venice */}
      <Section id="venice">
        <Container className="max-w-3xl">
          <SectionImage
            src="/images/gallery/gal-dawn-boat.webp"
            alt="Charter boat leaving Venice marina at dawn heading to the Gulf"
          />
          <Heading as="h2" size="2xl" className="mb-4">
            Venice - The End of the Road
          </Heading>
          <Text className="text-zinc-700 dark:text-zinc-300">
            Venice sits at the mouth of the Mississippi River, the last town
            before the road literally ends and the land dissolves into open
            Gulf. It is the most productive fishing town in the Gulf of Mexico
            and has a legitimate claim to the title of fishing capital of
            America. No other single location on the Gulf Coast puts anglers
            within striking distance of this many species in this many
            environments.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            Inshore, the marsh around Venice holds redfish and speckled trout on
            every tide. Run 10 minutes in any direction from the marina and
            you are in fishable water. Nearshore, the rigs and wrecks within
            sight of land produce cobia, jack crevalle, and tripletail on any
            given day. Offshore, the oil platforms scattered across the Gulf
            shelf concentrate yellowfin tuna, wahoo, and blue marlin in numbers
            that offshore-only towns in other states would kill for.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            The math is simple. You can target 20 species in a single weekend
            without running 30 miles from the dock. A morning inshore redfish
            trip, an afternoon nearshore cobia run, and a next-day offshore tuna
            slam are all possible from the same marina. That kind of versatility
            does not exist anywhere else in the lower 48.
          </Text>
        </Container>
      </Section>

      {/* Speckled Trout */}
      <Section id="speckled-trout">
        <Container className="max-w-3xl">
          <Heading as="h2" size="2xl" className="mb-4">
            Speckled Trout
          </Heading>
          <Text className="text-zinc-700 dark:text-zinc-300">
            The Louisiana spring speckled trout bite starts March 1 and runs
            strong through the summer solstice. April is the most productive
            month. Spring fish congregate on ledge walls in winding bayous at
            10-20 ft depth, feeding on juvenile croakers that are flushing out
            of interior marsh. The average fish runs 18 inches, but schools
            routinely contain 20-24 inch fish, and fish up to 10 lbs are taken
            every season. The IGFA all-tackle world record is 17 lbs 7 oz,
            caught in Fort Pierce, Florida in 1995.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            Trout have two prominent spiked teeth in the upper jaw. They strike
            hard and shake violently. Aggressive hook sets are not optional.
            Set the drag up to 9 lbs on big fish and do not baby them. A loose
            drag on a speckled trout is a lost fish. The standard rig is a
            7.5-ft medium spinning rod with 10-lb braid and a 30-40 lb
            fluorocarbon leader. Popping corks with live shrimp underneath
            account for more speckled trout than any other presentation in
            Louisiana.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            The winter pattern is where trophy hunters focus. Gulf Coast winter
            pushes big trout, 8 lbs and up, into 6 inches of water where mullet
            seek shallow muddy warmth on sunny afternoons. These fish are
            sluggish but feed aggressively in short windows. Big trout also ride
            out cold snaps in channels and deep basins during late winter,
            stacking up in predictable locations that local anglers guard like
            state secrets.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            Best time on the water varies by season. Spring and summer, get
            there right before sunrise and fish the first two hours hard. Winter,
            the bite often fires at night in clear water over shell bottoms.
            Glow-colored soft plastics under a rattle cork produce well after
            dark. If you have never fished for speckled trout at night in
            Louisiana, you are missing one of the most underrated bites in
            inshore fishing.
          </Text>
        </Container>
      </Section>

      {/* Black Drum */}
      <Section id="black-drum">
        <Container className="max-w-3xl">
          <Heading as="h2" size="2xl" className="mb-4">
            Black Drum
          </Heading>
          <Text className="text-zinc-700 dark:text-zinc-300">
            Black drum are the heavyweight of the Louisiana marsh. The IGFA
            all-tackle world record stands at 113 lbs 1 oz, set in 1975.
            Louisiana fish run up to 35-40 lbs, which is more than enough to
            snap a light rod in half if you are not paying attention. They are
            most abundant inshore during February and March, with the prime
            fishing window centered on the 3 days around each full and new moon.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            Black drum are nocturnal feeders. The peak bite runs from about 5 PM
            through sunset. They use their barbels and inferior mouth to root
            through mud and shell for crustaceans. Fresh clams, mussels, sand
            fleas, and half or quarter blue crab are the top baits. Artificials
            work, but natural bait outperforms everything else for drum by a
            wide margin.
          </Text>
          <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
            You will find black drum on spring ledge walls alongside flounder,
            working the same depth transitions that hold speckled trout during
            the day. The key to hooking them is patience. When you feel the
            first tap, do nothing. Wait 5-7 counts for a steady pull, then
            engage the circle hook by reeling tight and lifting the rod. Setting
            the hook early on a black drum means pulling the bait out of its
            mouth before it commits.
          </Text>
        </Container>
      </Section>

      {/* Calendar */}
      <Section id="calendar">
        <Container>
          <Heading as="h2" size="2xl" className="mb-6 text-center">
            Month-by-Month Calendar
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MONTH_DATA.map((m) => (
              <div
                key={m.month}
                className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <Heading as="h3" size="md" className="mb-3">
                  {m.month}
                </Heading>
                <ul className="space-y-1.5">
                  {m.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                        {h}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tackle */}
      <Section id="tackle">
        <Container>
          <Heading as="h2" size="2xl" className="mb-6 text-center">
            Tackle Recommendations
          </Heading>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Marsh Redfish */}
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <Heading as="h3" size="lg" className="mb-3">
                Marsh Redfish
              </Heading>
              <ul className="space-y-2">
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Rod:
                    </span>{" "}
                    7-ft medium spinning or 6.5-7 ft medium-light baitcaster
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Line:
                    </span>{" "}
                    10-lb braid with 20-lb fluorocarbon leader
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Lures:
                    </span>{" "}
                    Gold spoons, Z-Man paddletails on 1/4 oz jighead, Heddon
                    Super Spooks for topwater
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Live bait:
                    </span>{" "}
                    Popping corks with live shrimp (also deadly on specks)
                  </Text>
                </li>
              </ul>
            </div>

            {/* Speckled Trout */}
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <Heading as="h3" size="lg" className="mb-3">
                Speckled Trout
              </Heading>
              <ul className="space-y-2">
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Rod:
                    </span>{" "}
                    7.5-ft medium spinning (standard) or 7-ft medium baitcaster
                    (trophy)
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Line:
                    </span>{" "}
                    10-lb braid + 30-40 lb fluoro (standard), 20-lb braid
                    double-uni to 30-lb fluoro (trophy)
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Lures:
                    </span>{" "}
                    Soft plastics on 1/8-1/4 oz jigheads, MirrOlure MR17 and
                    52M, glow colors at night
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Live bait:
                    </span>{" "}
                    Popping cork or rattle cork with live shrimp or croaker
                  </Text>
                </li>
              </ul>
            </div>

            {/* Bull Reds */}
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <Heading as="h3" size="lg" className="mb-3">
                Bull Reds
              </Heading>
              <ul className="space-y-2">
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Rod:
                    </span>{" "}
                    7-ft heavy power spinning or conventional
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Reel:
                    </span>{" "}
                    6000+ size spinning or medium conventional with 50+ lb braid
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Rig:
                    </span>{" "}
                    3-way swivel rig with 60-80 lb fluorocarbon leader, 5/0-7/0
                    circle hook
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Bait:
                    </span>{" "}
                    Fresh cut mullet, live pogies, or large soft plastics
                  </Text>
                </li>
              </ul>
            </div>

            {/* Black Drum */}
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <Heading as="h3" size="lg" className="mb-3">
                Black Drum
              </Heading>
              <ul className="space-y-2">
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Rod:
                    </span>{" "}
                    7-ft medium-heavy spinning or conventional
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Line:
                    </span>{" "}
                    20-30 lb braid with 40-50 lb fluorocarbon leader
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Hook:
                    </span>{" "}
                    5/0-7/0 circle hook, always
                  </Text>
                </li>
                <li>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Bait:
                    </span>{" "}
                    Fresh clams, mussels, sand fleas, half or quarter blue crab
                  </Text>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <NextLink
              href="/gear"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Browse All Tackle
            </NextLink>
          </div>
        </Container>
      </Section>

      {/* Plan Your Trip */}
      <Section id="trip">
        <Container className="max-w-3xl">
          <Heading as="h2" size="2xl" className="mb-6">
            Plan Your Trip
          </Heading>

          <div className="space-y-6">
            <div>
              <Heading as="h3" size="lg" className="mb-2">
                Getting There
              </Heading>
              <Text className="text-zinc-700 dark:text-zinc-300">
                Fly into New Orleans. Venice is 90 minutes south on Highway 23.
                Hopedale is about 60 minutes east. Both drives are flat, easy,
                and scenic once you hit the marsh. Rental car is mandatory.
                There is no ride-share or public transit south of the city.
              </Text>
            </div>

            <div>
              <Heading as="h3" size="lg" className="mb-2">
                Base Camps
              </Heading>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                  <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Venice
                  </Text>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    Most productive overall. Inshore marsh plus full offshore
                    access. Mouth of the Mississippi.
                  </Text>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                  <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Hopedale
                  </Text>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    Eastern marsh, closest to New Orleans. Excellent redfish and
                    speckled trout access.
                  </Text>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                  <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Cocodrie
                  </Text>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    South-central marsh. Quieter, less pressure. Strong speckled
                    trout fishery.
                  </Text>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                  <Text className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Delacroix
                  </Text>
                  <Text size="sm" className="text-zinc-600 dark:text-zinc-400">
                    Southeast marsh. Local feel, solid redfish and drum fishing
                    year-round.
                  </Text>
                </div>
              </div>
            </div>

            <div>
              <Heading as="h3" size="lg" className="mb-2">
                Guided vs. DIY
              </Heading>
              <Text className="text-zinc-700 dark:text-zinc-300">
                Guided trips run $500-700 per day for 1-2 anglers. That includes
                the boat, tackle, bait, and a captain who knows every drain and
                cut in the marsh. Worth it for your first trip. For DIY, rent a
                skiff, run the Intracoastal Waterway, and bring a trolling motor
                and push pole. The marsh is navigable if you stay in marked
                channels until you learn the area. Running blind through
                unmarked shallow cuts will put you on an oyster reef.
              </Text>
            </div>

            <div>
              <Heading as="h3" size="lg" className="mb-2">
                What to Bring
              </Heading>
              <Text className="text-zinc-700 dark:text-zinc-300">
                Bug spray is not optional. Louisiana marsh mosquitoes are
                legendary and they do not take days off. Bring rain gear even if
                the forecast is clear. Afternoon thunderstorms roll through fast
                and without much warning from May through October. High-SPF
                sunscreen is critical. There is zero shade on a marsh flat.
                Buff-style face covers and long sleeves will save you from a
                brutal sunburn.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* More Destinations */}
      <Section>
        <Container>
          <Heading as="h2" size="2xl" className="mb-6 text-center">
            More Destinations
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <NextLink
              href="/destinations/florida-keys"
              className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-zinc-800 dark:hover:border-blue-800 dark:hover:bg-blue-950"
            >
              <Heading
                as="h3"
                size="md"
                className="group-hover:text-blue-600 dark:group-hover:text-blue-400"
              >
                Florida Keys
              </Heading>
              <Text size="sm" className="mt-1 text-zinc-600 dark:text-zinc-400">
                Tarpon, permit, and bonefish on crystal-clear flats
              </Text>
            </NextLink>
            <NextLink
              href="/destinations/north-carolina"
              className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-zinc-800 dark:hover:border-blue-800 dark:hover:bg-blue-950"
            >
              <Heading
                as="h3"
                size="md"
                className="group-hover:text-blue-600 dark:group-hover:text-blue-400"
              >
                North Carolina
              </Heading>
              <Text size="sm" className="mt-1 text-zinc-600 dark:text-zinc-400">
                Red drum, false albacore, and Gulf Stream blue water
              </Text>
            </NextLink>
            <NextLink
              href="/destinations/bahamas"
              className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-zinc-800 dark:hover:border-blue-800 dark:hover:bg-blue-950"
            >
              <Heading
                as="h3"
                size="md"
                className="group-hover:text-blue-600 dark:group-hover:text-blue-400"
              >
                Bahamas
              </Heading>
              <Text size="sm" className="mt-1 text-zinc-600 dark:text-zinc-400">
                Bonefish flats, deep-water wahoo, and blue marlin
              </Text>
            </NextLink>
            <NextLink
              href="/destinations/gulf-coast"
              className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-zinc-800 dark:hover:border-blue-800 dark:hover:bg-blue-950"
            >
              <Heading
                as="h3"
                size="md"
                className="group-hover:text-blue-600 dark:group-hover:text-blue-400"
              >
                Gulf Coast
              </Heading>
              <Text size="sm" className="mt-1 text-zinc-600 dark:text-zinc-400">
                Redfish, snook, and tarpon from Texas to the Panhandle
              </Text>
            </NextLink>
          </div>
        </Container>
      </Section>

      {/* Shop CTA */}
      <Section>
        <Container>
          <div className="rounded-2xl bg-blue-600 px-8 py-12 text-center dark:bg-blue-700">
            <Heading as="h2" size="2xl" className="text-white">
              Gear Up for Louisiana
            </Heading>
            <Text size="lg" className="mx-auto mt-3 max-w-xl text-blue-100">
              Gold spoons, paddletails, popping corks, heavy leaders. Everything
              you need for the marsh, the passes, and the offshore rigs.
            </Text>
            <NextLink
              href="/gear"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              Shop Louisiana Tackle
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
