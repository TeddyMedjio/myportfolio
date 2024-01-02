import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <meta name="author" content="Nganmedjio Jean Claude" />
      <meta
        name="title"
        content="Nganmedjio Jean Claude - Visual designer & front-end dev"
      />
      <meta
        name="keywords"
        content="Nganmedjio Jean Claude, web developer, software engineer, Next.Js, React.js, Front-end, Visual designer, JavaScript, UX.designer, Tailwind CSS, Graphic.designer, freelancer"
      />
      <meta name="description" content="I'am UI/UX Designer & Frontend dev" />
      <meta property="og:language" content="fr" />
      <meta property="og:site_name" content="medjio.me" />
      <meta name="twitter:author" content="@nganmedjio_jean" />
      <meta name="twitter:site" content="@nganmedjio_jean" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://medjio.me/images/meta-banner.png"
      />
      <title>N. Jean Claude</title>
      <body className="antialiased">{children}</body>
    </html>
  );
}
