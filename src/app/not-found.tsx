import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Section>
        <Container size="narrow" className="text-center">
          <Heading as="h1" size="hero" className="text-accent">
            404
          </Heading>
          <Heading as="h2" size="2xl" className="mt-4">
            Trail goes cold here.
          </Heading>
          <Text variant="secondary" size="lg" className="mt-4 mx-auto">
            The page you&apos;re looking for has wandered off the beaten path.
            Let&apos;s get you back to camp.
          </Text>
          <div className="mt-8">
            <NextLink href="/">
              <Button variant="primary" size="lg">
                Back to base camp
              </Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </div>
  );
}
