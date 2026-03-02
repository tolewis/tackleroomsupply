import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from the water. Saltwater fishing, coastal sunrises, and the moments between bites.",
};

const GALLERY_IMAGES = [
  { id: 1, src: "/images/gallery-sunrise.jpg", alt: "Sunrise over the ocean from a boat", aspect: "aspect-[4/5]" },
  { id: 2, src: "/images/gallery-flats.jpg", alt: "Shallow water flats at low tide", aspect: "aspect-square" },
  { id: 3, src: "/images/gallery-catch.jpg", alt: "Angler holding a redfish", aspect: "aspect-[5/4]" },
  { id: 4, src: "/images/gallery-marsh.jpg", alt: "Marsh creek at golden hour", aspect: "aspect-[4/5]" },
  { id: 5, src: "/images/gallery-tackle.jpg", alt: "Tackle box and rods on deck", aspect: "aspect-square" },
  { id: 6, src: "/images/gallery-waves.jpg", alt: "Waves breaking on the beach", aspect: "aspect-[5/4]" },
  { id: 7, src: "/images/gallery-dock.jpg", alt: "Fishing dock at dawn", aspect: "aspect-[4/5]" },
  { id: 8, src: "/images/gallery-bluewater.jpg", alt: "Deep blue offshore water", aspect: "aspect-square" },
  { id: 9, src: "/images/gallery-birds.jpg", alt: "Pelicans diving on baitfish", aspect: "aspect-[5/4]" },
  { id: 10, src: "/images/gallery-kayak.jpg", alt: "Kayak on calm coastal water", aspect: "aspect-[4/5]" },
  { id: 11, src: "/images/gallery-pier.jpg", alt: "Pier fishing at sunset", aspect: "aspect-square" },
  { id: 12, src: "/images/gallery-coast.jpg", alt: "Rocky coastline at dawn", aspect: "aspect-[5/4]" },
];

export default function GalleryPage() {
  return (
    <Section>
      <Container>
        <div className="mb-10">
          <Heading as="h1" size="4xl">
            Gallery
          </Heading>
          <Text variant="secondary" size="lg" className="mt-3">
            From the water. Saltwater scenes, tight lines, and the
            moments between bites.
          </Text>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className={`${img.aspect} rounded-lg overflow-hidden break-inside-avoid`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
