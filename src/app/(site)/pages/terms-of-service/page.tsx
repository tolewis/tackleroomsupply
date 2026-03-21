import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";

export const metadata: Metadata = {
  title: "Terms of Service — Saltwater Tides & Forecast",
  description:
    "Terms of service for the Saltwater Tides & Forecast iOS app by The Tackle Room.",
};

export default function TermsOfServicePage() {
  return (
    <Section spacing="xl">
      <Container size="narrow">
        <Heading as="h1" size="3xl" className="mb-2">
          Terms of Service
        </Heading>
        <Text variant="secondary" className="mb-10">
          Saltwater Tides &amp; Forecast — Last updated March 20, 2026
        </Text>

        <div className="space-y-8 text-text-secondary text-sm leading-relaxed">
          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Acceptance of terms
            </Heading>
            <Text variant="secondary">
              By downloading or using Saltwater Tides &amp; Forecast, you agree
              to these terms. If you do not agree, do not use the app.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Description of service
            </Heading>
            <Text variant="secondary">
              Saltwater Tides &amp; Forecast provides tide predictions, weather
              data, solunar feeding windows, and fishing condition ratings for
              saltwater anglers. All data is provided for{" "}
              <strong className="text-text-primary">informational purposes only</strong>.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Disclaimer
            </Heading>
            <Text variant="secondary">
              Tide predictions and weather data come from NOAA, the National
              Weather Service, and Open-Meteo. We do not guarantee the accuracy,
              completeness, or timeliness of any data displayed in the app.
            </Text>
            <Text variant="secondary" className="mt-3">
              <strong className="text-text-primary">
                Do not use this app as your sole source for marine safety
                decisions.
              </strong>{" "}
              Always check official NOAA forecasts, marine weather warnings, and
              local conditions before going on the water.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Subscriptions
            </Heading>
            <Text variant="secondary">
              The app offers a free tier and a Pro subscription:
            </Text>
            <ul className="mt-3 list-disc list-inside space-y-1 text-text-secondary">
              <li>Pro Annual: $79.99/year (includes a 7-day free trial)</li>
            </ul>
            <Text variant="secondary" className="mt-3">
              Payment is charged to your Apple ID account at confirmation of
              purchase. Subscriptions auto-renew unless canceled at least 24
              hours before the end of the current period. You can manage or
              cancel your subscription in iOS Settings &gt; Apple ID &gt;
              Subscriptions.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Refunds
            </Heading>
            <Text variant="secondary">
              All purchases are processed by Apple. Refund requests are handled
              by Apple per their{" "}
              <a
                href="https://support.apple.com/en-us/HT204084"
                className="text-accent hover:text-accent-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                refund policy
              </a>
              .
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Intellectual property
            </Heading>
            <Text variant="secondary">
              The app, its design, and original content are the property of The
              Tackle Room. Tide and weather data sourced from NOAA, NWS, and
              Open-Meteo is public domain or open data and is not claimed as our
              own.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Limitation of liability
            </Heading>
            <Text variant="secondary">
              The Tackle Room is not liable for any decisions made based on data
              displayed in this app, including but not limited to fishing trip
              planning, marine navigation, or safety decisions. Use the app at
              your own risk.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Termination
            </Heading>
            <Text variant="secondary">
              We reserve the right to terminate or suspend access to the service
              at any time, without prior notice, for any reason.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Governing law
            </Heading>
            <Text variant="secondary">
              These terms are governed by the laws of the State of North
              Carolina, United States.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Contact
            </Heading>
            <Text variant="secondary">
              Questions about these terms? Email{" "}
              <a
                href="mailto:tim@tolewis.com"
                className="text-accent hover:text-accent-hover"
              >
                tim@tolewis.com
              </a>
              .
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
