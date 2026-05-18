import type { projectsTableSelect } from "#/db/schema";
import { ProjectCard } from "#/components/ui/ProjectCard";
import { Card } from "@heroui/react";

interface ProjectsSectionProps {
  projects: { rows: projectsTableSelect[] } | undefined;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const rows = projects?.rows ?? [];
  if (rows.length === 0) return null;

  return (
    <section className="w-full">
      <Card className="gap-8 " variant="transparent">
        <Card.Title className="text-lg">Work</Card.Title>
        <Card.Content className="gap-10 p-0">
          {rows.map((project, idx) => (
            <ProjectCard key={project.id} index={idx} project={project} />
          ))}
        </Card.Content>
      </Card>
    </section>
  );
}
