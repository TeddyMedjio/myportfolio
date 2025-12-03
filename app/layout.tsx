import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  metadataBase: new URL("https://medjio.me"),
  title: {
    default: "N. Jean Claude • Freelance Designer & Developer",
    template: "%s | N. Jean Claude",
  },
  description:
    "Designer UX/UI et développeur frontend freelance avec 8+ ans d'expérience. Spécialisé en Next.js, React, et Tailwind CSS. Plus de 100 projets réalisés et 150+ clients satisfaits.",
  authors: [{ name: "Nganmedjio Jean Claude" }],
  creator: "Nganmedjio Jean Claude",
  keywords: [
    "Nganmedjio Jean Claude",
    "Designer UX/UI",
    "Développeur Frontend",
    "Freelance Designer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Web Developer",
    "UI Designer",
    "UX Designer",
    "Figma Designer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Freelance Cameroun",
    "Web Design",
    "Développement Web",
  ],
  openGraph: {
    title: "N. Jean Claude • Freelance Designer & Developer",
    description:
      "Designer UX/UI et développeur frontend freelance avec 8+ ans d'expérience. Spécialisé en Next.js, React, et Tailwind CSS. Plus de 100 projets réalisés et 150+ clients satisfaits.",
    url: "https://medjio.me",
    images: [
      {
        url: "https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704556507/zewudixqzlomjvhiwkmm.jpg",
        width: 1200,
        height: 630,
        alt: "N. Jean Claude - Freelance Designer & Developer",
      },
    ],
    siteName: "N. Jean Claude Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N. Jean Claude • Freelance Designer & Developer",
    description:
      "Designer UX/UI et développeur frontend freelance avec 8+ ans d'expérience. Spécialisé en Next.js, React, et Tailwind CSS.",
    images: [
      "https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704556507/zewudixqzlomjvhiwkmm.jpg",
    ],
    creator: "@nganmedjio_jean",
    site: "@nganmedjio_jean",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <StructuredData />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics
            measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        )}
        {children}
      </body>
    </html>
  );
}
