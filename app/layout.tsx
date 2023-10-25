import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "N. Jean Claude",
  description: "My beautifull portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
