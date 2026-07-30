import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection/HeroSection";

export const metadata: Metadata = {
  title: "Home | Portfolio Name",
  description: "Welcome — developer and creative portfolio home.",
};

export default function HomePage() {
  return (
    <main className="ib-main-content">
      <HeroSection />
    </main>
  );
}
