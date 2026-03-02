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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TackleRoom Supply",
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
