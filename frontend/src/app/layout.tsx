import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PledgeRun — Run with Real Stakes",
  description: "Set running goals, put money on the line. Miss your goal? The money goes to a charity you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
