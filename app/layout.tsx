import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raj Gautam | Software • Data • Technology",
  description:
    "Raj Gautam — ECE student, developer and technology enthusiast building intelligent dashboards, data-driven applications and embedded systems.",
  keywords: [
    "Raj Gautam",
    "Developer",
    "Software Developer",
    "ECE Student",
    "Next.js",
    "React",
    "Python",
    "Data Analytics",
    "Embedded Systems",
    "AI Bharat",
    "SkyPulse",
  ],
  authors: [{ name: "Raj Gautam" }],
  creator: "Raj Gautam",
  metadataBase: new URL("https://raj-portfolio-sable-chi.vercel.app"),
  openGraph: {
    title: "Raj Gautam | Software • Data • Technology",
    description:
      "Portfolio of Raj Gautam — projects in software, data analytics, AI and embedded systems.",
    url: "https://raj-portfolio-sable-chi.vercel.app",
    siteName: "Raj Gautam Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}