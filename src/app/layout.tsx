import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SkipLink } from "@/components/primitives";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TackleRoom Supply — Saltwater Fishing Content",
    template: "%s | TackleRoom Supply",
  },
  description:
    "Saltwater fishing content, honest gear reviews, and coastal stories. Inshore, offshore, and everything that bites.",
  metadataBase: new URL("https://tackleroomsupply.com"),
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎣</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TackleRoom Supply",
    images: [
      {
        url: "/images/hero-coastal.webp",
        width: 1600,
        height: 900,
        alt: "TackleRoom Supply — Saltwater Fishing Content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SkipLink />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
