import { Metadata } from "next/types";

export const MetadataSeed: Metadata = {
  category: "Portfolio, Personal Website, Product Design, Web Development",
  generator: "Next.js",
  applicationName: "Mark Noya's Design Portfolio",
  keywords: [
    "mark noya",
    "mark noya resume",
    "mark noya linkedin",
    "mark noya website",
    "mark noya portfolio",
    "mark noya developer",
    "mark noya design",
    "mark noya ui/ux",
    "mark noya ux",
    "web design",
    "ux design",
    "experienced designer",
    "web designer figma",
    "frontend developer react",
    "frontend developer nextjs",
    "product designer near me",
    "product designer montreal",
    "product designer canada",
    "web designer near me",
    "web designer montreal",
    "web designer canada",
    "web developer near me",
    "web developer montreal",
    "web developer canada",
    "design engineer canada",
    "design engineer montreal",
    "design system lead",
  ],
  authors: [
    { name: "Mark Noya", url: "https://www.linkedin.com/in/mark-noya/" },
  ],
  creator: "Mark Noya",
  publisher: "Mark Noya",
  metadataBase: new URL("https://www.marknoya.me"),
  formatDetection: {
    email: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": 300,
    },
  },
};
