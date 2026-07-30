import Image from "next/image";
import { Project } from "@/types";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <li>
      <figure>
        <Image
          src={project.image}
          alt="Portfolio Image"
          width={400}
          height={300}
        />
        <div>
          <span>{project.title}</span>
        </div>
      </figure>
    </li>
  );
}
