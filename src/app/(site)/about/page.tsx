import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";

export const metadata: Metadata = {
  title: "About",
  description:
    "TackleRoom Supply is the content arm of The TackleRoom. Saltwater fishing stories, gear reviews, and honest content.",
};

export default function AboutPage() {
  return (
    <>
      <Section spacing="xl">
        <Container size="narrow" className="text-center">
          <Heading as="h1" size="hero">
            Content that
            <br />
            <span className="text-accent">catches fish.</span>
          </Heading>
          <Text variant="secondary" size="lg" className="mt-6 mx-auto">
            TackleRoom Supply is the content and media arm of{" "}
            <a href="https://thetackleroom.com" className="text-accent hover:text-accent-hover">
              The TackleRoom
            </a>
            . We write about saltwater fishing because we do it — not because
            a brand asked us to.
          </Text>
        </Container>
      </Section>

      <Section className="bg-surface-raised">
        <Container size="narrow">
          <Heading as="h2" size="3xl" className="mb-8">
            What we&apos;re about
          </Heading>
          <div className="space-y-8">
            <div>
              <Heading as="h3" size="xl" className="mb-3">
                We sell what we fish
              </Heading>
              <Text variant="secondary">
                The TackleRoom is our tackle shop. TackleRoom Supply is
                where we write about it. Every gear review comes from
                actual use on the water. We don&apos;t recommend tackle we
                wouldn&apos;t stock in our own shop.
              </Text>
            </div>
            <div>
              <Heading as="h3" size="xl" className="mb-3">
                Real fishing reports
              </Heading>
              <Text variant="secondary">
                Not press releases from tourism boards. Our fishing reports
                come from time on the water — what&apos;s biting, what&apos;s
                not, and what the conditions actually look like.
              </Text>
            </div>
            <div>
              <Heading as="h3" size="xl" className="mb-3">
                Built for saltwater anglers
              </Heading>
              <Text variant="secondary">
                Inshore, offshore, surf — we cover all of it. Whether you&apos;re
                sight-casting reds on the flats or running 60 miles for
                yellowfin, this is your content hub.
              </Text>
            </div>
            <div>
              <Heading as="h3" size="xl" className="mb-3">
                An Unhook Outdoors brand
              </Heading>
              <Text variant="secondary">
                TackleRoom Supply is part of the{" "}
                <a href="https://unhookoutdoors.com" className="text-accent hover:text-accent-hover">
                  Unhook Outdoors
                </a>
                {" "}family — a growing collection of outdoor content brands
                focused on quality over quantity.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow" className="text-center">
          <Heading as="h2" size="3xl" className="mb-4">
            The Tight Lines Report
          </Heading>
          <Text variant="secondary" size="lg" className="mx-auto">
            Weekly fishing reports, gear drops, and saltwater content.
            From the water, not a desk.
          </Text>
          <div className="mt-6 flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-border bg-surface-raised px-4 py-3 text-sm text-text-primary placeholder:text-text-muted"
              aria-label="Email for newsletter"
            />
            <button className="rounded-lg bg-accent px-6 py-3 text-sm font-heading font-semibold text-stone-950 hover:bg-accent-hover transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
}
