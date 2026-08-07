import type { Metadata } from "next";
import { headers } from "next/headers";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "localhost:3000";
  const protocol =
    headerList.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Silent H | Mexican Flavours, Celebrated in NYC",
    description:
      "Modern Mexican cooking, craft cocktails, reservations and private events in Toronto's King West neighbourhood.",
    icons: {
      icon: [
        { url: "/favicon.ico?v=3", type: "image/x-icon" },
        { url: "/favicon.png?v=3", type: "image/png", sizes: "64x64" },
      ],
      shortcut: "/favicon.ico?v=3",
      apple: "/favicon.png?v=3",
    },
    openGraph: {
      title: "Silent H | Mexican Flavours, Celebrated in NYC",
      description:
        "Modern Mexican flavours, craft cocktails and private dining in Toronto.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Silent H | Mexican Flavours, Celebrated in NYC",
      description: "Modern Mexican flavours, craft cocktails and private dining in Toronto.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Keep an explicit link in the document head for browsers that do not
            materialize Next metadata icons when using the Vite runtime. */}
        <link rel="icon" href="/favicon.ico?v=4" type="image/x-icon" />
        <link rel="icon" href="/favicon.png?v=4" type="image/png" sizes="64x64" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/favicon.png?v=4" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
