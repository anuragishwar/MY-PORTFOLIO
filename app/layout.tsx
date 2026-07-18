import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anurag Kumar Ishwar | CSE AI & ML Developer ",
  description: "Advance Portfolio of Anurag Kumar Ishwar - Software Developer & CSE AI Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
