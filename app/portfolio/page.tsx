import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Wahaj Ansari",
  description: "Selected work and project gallery.",
};

export default function PortfolioPage() {
  return (
    <main className="ib-main-content">
      <PortfolioGrid />
    </main>
  );
}
