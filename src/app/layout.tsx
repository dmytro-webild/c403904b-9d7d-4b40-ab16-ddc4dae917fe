import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'TKD Tournaments | Taekwondo Tournament Registration Platform',
  description: 'Streamline Taekwondo tournament management and participant registration for state and national level competitions with our secure and scalable platform.',
  keywords: ["Taekwondo tournament registration, martial arts competition management, online tournament platform, Kyorugi, Poomsae, administrator dashboard, secure event registration, sports event tech"],
  openGraph: {
    "title": "TKD Tournaments | Taekwondo Tournament Registration Platform",
    "description": "Streamline Taekwondo tournament management and participant registration for state and national level competitions with our secure and scalable platform.",
    "url": "https://www.tkd-tournaments.com",
    "siteName": "TKD Tournaments",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/karate-fighters_654080-1330.jpg",
        "alt": "Taekwondo athletes in action"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "TKD Tournaments | Taekwondo Tournament Registration Platform",
    "description": "Streamline Taekwondo tournament management and participant registration for state and national level competitions with our secure and scalable platform.",
    "images": [
      "http://img.b2bpic.net/free-photo/karate-fighters_654080-1330.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
