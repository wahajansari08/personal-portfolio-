import type { PortfolioFilterTab, Project } from "@/types";

export function projectsForPortfolioGrid(
  activeFilter: PortfolioFilterTab,
  all: Project[],
): Project[] {
  if (activeFilter === "all") return all;
  return all.filter((p) => p.filterCategory === activeFilter);
}
