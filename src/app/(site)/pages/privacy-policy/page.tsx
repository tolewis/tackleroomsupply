import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";

export const metadata: Metadata = {
  title: "Privacy Policy — Saltwater Tides & Forecast",
  description:
    "Privacy policy for the Saltwater Tides & Forecast iOS app by The Tackle Room.",
};

export default function PrivacyPolicyPage() {
  return (
    <Section spacing="xl">
      <Container size="narrow">
        <Heading as="h1" size="3xl" className="mb-2">
          Privacy Policy
        </Heading>
        <Text variant="secondary" className="mb-10">
          Saltwater Tides &amp; Forecast — Last updated March 20, 2026
        </Text>

        <div className="space-y-8 text-text-secondary text-sm leading-relaxed">
          <div>
            <Heading as="h2" size="xl" className="mb-3">
              What this app does
            </Heading>
            <Text variant="secondary">
              Saltwater Tides &amp; Forecast is an iOS app for saltwater fishing.
              It provides tide predictions, weather forecasts, solunar feeding
              windows, and fishing condition ratings. The app is published by The
              Tackle Room.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Data we collect
            </Heading>
            <Text variant="secondary">
              <strong className="text-text-primary">Location:</strong> The app
              uses your location (when in use only) to find the nearest NOAA tide
              station and to fetch local weather data. Your coordinates are sent
              to weather.gov and Open-Meteo to retrieve forecasts. Location data
              is not stored on our servers. We have no servers.
            </Text>
            <Text variant="secondary" className="mt-3">
              <strong className="text-text-primary">Favorites and preferences:</strong>{" "}
              Your saved stations, notification settings, and preferences are
              stored on your device only using SwiftData and App Group
              UserDefaults. None of this data leaves your device.
            </Text>
            <Text variant="secondary" className="mt-3">
              <strong className="text-text-primary">Subscription status:</strong>{" "}
              If you subscribe to Pro, Apple handles all payment processing.
              RevenueCat manages subscription entitlements through Apple&apos;s
              StoreKit framework. RevenueCat receives anonymized transaction data
              from Apple. See{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                className="text-accent hover:text-accent-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                RevenueCat&apos;s privacy policy
              </a>{" "}
              for details.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Data we do not collect
            </Heading>
            <Text variant="secondary">
              We do not collect your name, email address, phone number, or any
              personal information. There are no user accounts, no login, no
              analytics SDKs, no ad networks, and no third-party tracking. We do
              not sell, share, or transmit any personal data to anyone.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Third-party services
            </Heading>
            <Text variant="secondary">
              The app connects to the following services to fetch public data:
            </Text>
            <ul className="mt-3 list-disc list-inside space-y-1 text-text-secondary">
              <li>NOAA CO-OPS — tide predictions (public API)</li>
              <li>weather.gov / National Weather Service — marine weather (public API)</li>
              <li>Open-Meteo — wave height, sea surface temperature (open API)</li>
              <li>RevenueCat — subscription management via Apple StoreKit</li>
            </ul>
            <Text variant="secondary" className="mt-3">
              The only user data sent to these services is your approximate
              coordinates for location-based weather lookups. No personal
              information is transmitted.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Data storage
            </Heading>
            <Text variant="secondary">
              All user data — saved stations, preferences, notification
              settings — is stored on your device only. There is no cloud
              sync, no server-side storage, and no remote database.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Children&apos;s privacy
            </Heading>
            <Text variant="secondary">
              This app is not directed at children under 13. We do not knowingly
              collect any data from children or anyone else.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Changes to this policy
            </Heading>
            <Text variant="secondary">
              We may update this privacy policy from time to time. The &ldquo;last
              updated&rdquo; date at the top of this page reflects the most recent
              revision.
            </Text>
          </div>

          <div>
            <Heading as="h2" size="xl" className="mb-3">
              Contact
            </Heading>
            <Text variant="secondary">
              Questions about this policy? Email{" "}
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
