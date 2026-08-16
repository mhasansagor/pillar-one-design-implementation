import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenny - Product Designer",
  description: "Portfolio landing page for Jenny, Product Designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
