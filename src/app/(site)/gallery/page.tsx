import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from the water. Saltwater fishing, coastal sunrises, tight lines, and the moments between bites.",
};

const GALLERY_IMAGES = [
  { id: 1, src: "/images/gal-dawn-boat.webp", alt: "Fishing boat at dawn heading offshore", aspect: "aspect-[4/5]" },
  { id: 2, src: "/images/gal-flats-cast.webp", alt: "Fly casting on crystal clear saltwater flats", aspect: "aspect-square" },
  { id: 3, src: "/images/gal-catch-fish.webp", alt: "Angler holding a redfish on the flats", aspect: "aspect-[5/4]" },
  { id: 4, src: "/images/gal-marsh-gold.webp", alt: "Marsh creek at golden hour", aspect: "aspect-[4/5]" },
  { id: 5, src: "/images/gal-tackle-close.webp", alt: "Saltwater fishing reel and rod closeup", aspect: "aspect-square" },
  { id: 6, src: "/images/gal-offshore-run.webp", alt: "Offshore fishing boat cutting through blue water", aspect: "aspect-[5/4]" },
  { id: 7, src: "/images/gal-sunset-boat.webp", alt: "Fishing boat silhouetted at sunset", aspect: "aspect-[4/5]" },
  { id: 8, src: "/images/gal-turquoise.webp", alt: "Turquoise Bahamas water from above", aspect: "aspect-square" },
  { id: 9, src: "/images/gal-birds-dive.webp", alt: "Pelicans diving on baitfish at sunrise", aspect: "aspect-[5/4]" },
  { id: 10, src: "/images/gal-kayak.webp", alt: "Kayak fishing on calm coastal water at dawn", aspect: "aspect-[4/5]" },
  { id: 11, src: "/images/gal-pier-sunset.webp", alt: "Pier fishing silhouette at sunset", aspect: "aspect-square" },
  { id: 12, src: "/images/gal-coast-rocks.webp", alt: "Rocky coastline with crashing waves at dawn", aspect: "aspect-[5/4]" },
  { id: 13, src: "/images/gal-fly-line.webp", alt: "Fly line unrolling against a blue sky", aspect: "aspect-[4/5]" },
  { id: 14, src: "/images/gal-bridge-night.webp", alt: "Bridge lights reflecting on night water", aspect: "aspect-square" },
  { id: 15, src: "/images/gal-wave-break.webp", alt: "Wave breaking with morning light behind it", aspect: "aspect-[5/4]" },
];

export default function GalleryPage() {
  return (
    <>
      <Section spacing="xl">
        <Container size="narrow" className="text-center">
          <Heading as="h1" size="hero">
            From the
            <br />
            <span className="text-accent">water.</span>
          </Heading>
          <Text variant="secondary" size="lg" className="mt-6 mx-auto">
            Saltwater scenes, tight lines, and the moments between bites.
          </Text>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.id}
                className={`${img.aspect} rounded-xl overflow-hidden break-inside-avoid group`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
