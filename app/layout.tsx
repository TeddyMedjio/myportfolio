import "./globals.css";

export const metadata = {
  title: {
    default: "N. Jean Claude",
    template: "%s | N. Jean Claude",
  },
  description:
    "Aider les marques à prospérer dans le monde numérique. Proposer des conceptions numériques sur mesure et créer des sites Web interactifs à partir de zéro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <meta name="author" content="Nganmedjio Jean Claude" />
      <meta
        property="og:title"
        content="Nganmedjio Jean Claude • Freelance Designer &amp; Developer"
      />
      <meta
        property="og:description"
        content="Aider les marques à prospérer dans le monde numérique. Proposer des conceptions numériques sur mesure et créer des sites Web interactifs à partir de zéro. © Code by Medjio"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704556507/zewudixqzlomjvhiwkmm.jpg"
      />
      <meta property="og:site_name" content="N. Jean Claude" />
      <meta property="og:locale" content="fr" />
      <meta property="og:type" content="website" />
      <meta
        property="twitter:title"
        content="Nganmedjio Jean Claude • Freelance Designer &amp; Developer"
      />
      <meta
        property="twitter:description"
        content="Aider les marques à prospérer dans le monde numérique. Proposer des conceptions numériques sur mesure et créer des sites Web interactifs à partir de zéro. © Code by Medjio"
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704556507/zewudixqzlomjvhiwkmm.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="keywords"
        content="Nganmedjio Jean Claude, web developer, Next.Js, React.js, Front-end, Visual designer, JavaScript, UX.designer, Tailwind CSS, Graphic.designer, freelancer"
      />

      <meta name="twitter:author" content="@nganmedjio_jean" />
      <meta name="twitter:site" content="@nganmedjio_jean" />
      <body className="antialiased">{children}</body>
    </html>
  );
}
