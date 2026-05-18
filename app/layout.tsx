import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jlrazor",
  description: "Portfolio graphique jlrazor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}