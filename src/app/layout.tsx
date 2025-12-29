import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LeadModal } from "./components/LeadModal";

export const metadata: Metadata = {
  title: "R.W. Martin Design + Build | Remodeling & Home Improvements",
  description:
    "High-quality home remodeling and improvements. Bathrooms, kitchens, decks, siding, windows/doors, and more. Free consultation.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <Header />
        <LeadModal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
