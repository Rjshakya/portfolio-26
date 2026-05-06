import { Button, Card } from "@heroui/react";
import type { projectsTableSelect } from "#/db/schema";

interface ProjectCardProps {
  project: projectsTableSelect;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card variant="transparent" className="p-1">
      <Card.Header className="gap-2">
        <Card.Title className=" font-medium ">{project.name}</Card.Title>
        <Card.Description className=" max-w-md">
          {project.description}
        </Card.Description>
        {project.tectStackInfo && (
          <span className=" text-sm text-muted flex gap-2">
            <p>Tech stack :</p>
            <p>{project.tectStackInfo}</p>
          </span>
        )}
      </Card.Header>
      <Card.Footer className=" flex flex-wrap gap-3">
        {project.liveLink && (
          <a href={project.liveLink}>
            <Button variant="outline" className={"font-normal"}>
              open
            </Button>
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink}>
            <Button variant="outline" className={"font-normal"}>
              Github
            </Button>
          </a>
        )}
      </Card.Footer>
    </Card>
  );
}
