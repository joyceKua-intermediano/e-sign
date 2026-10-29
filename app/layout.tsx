import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getAppConfig } from "./lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Render on each request so runtime env vars (APP_URL, APP_NAME) are applied.
export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  const { appUrl, appName } = getAppConfig();
  return {
    metadataBase: new URL(appUrl),
    title: `${appName} - Digital Contract Signing`,
    description: "Sign contracts digitally with ease and security",
    alternates: { canonical: "/" },
    openGraph: { url: appUrl, siteName: appName },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
