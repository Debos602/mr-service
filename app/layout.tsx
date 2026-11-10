import type { Metadata, Viewport } from "next";
import { site } from "@/lib/content";
import "./globals.css";

// Typography is the system UI stack set in globals.css (--font-sans), which is
// what the reference site actually renders, so there is no web font to load.

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/hero_branded.png", width: 1024, height: 1024 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
