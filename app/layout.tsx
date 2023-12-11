import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <meta property="og:site_name" content="medjio.me" />
      <meta property="og:language" content="fr" />
      <meta name="twitter:author" content="@nganmedjio_jean" />
      <meta name="twitter:site" content="@nganmedjio_jean" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://medjio.me/public/meta-banner.png"
      />
      <title>N. Jean Claude</title>
      <body className="antialiased">{children}</body>
    </html>
  );
}
