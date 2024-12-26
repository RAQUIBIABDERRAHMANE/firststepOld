import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "First Step",
  description: "is a web development company that specializes in data management for stock management, car rental, restaurants, and hotels.",
  authors: [{ name: "Abderrahmane Raquibi" }],
  keywords: "nextjs, react, app, web development, data management, stock management, cars, car rental, restaurants, hotels, frontend, backend, fullstack, javascript, typescript, programming, coding, software development, database, SQL, NoSQL, inventory, logistics, vehicle, automobile, transportation, travel, dining, food service, hospitality, booking, reservation, ecommerce, business, technology, innovation, cloud computing, API, microservices, UX, UI, design, responsive design, SEO, performance, security, testing, deployment, CI/CD, DevOps, agile, scrum, project management",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "First Step",
    description: "",
    url: "https://firststep.uno",
    type: "website",
    images: [
      {
        url: "https://firststep.uno",
        width: 800,
        height: 600,
        alt: "First Step",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
};

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
