import { Button, Card } from "@heroui/react";
import type { projectsTableSelect } from "#/db/schema";

interface ProjectCardProps {
  project: projectsTableSelect;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      variant="default"
      className="rounded-xl p-5 shadow-none border bg-background-secondary/20"
    >
      <Card.Header className="gap-3">
        <Card.Title className=" font-medium ">{project.name}</Card.Title>
        <Card.Description className=" text-balance ">
          {project.description}
        </Card.Description>
        {project.tectStackInfo && (
          <span className=" text-sm text-muted flex gap-2">
            <p>Tech stack :</p>
            <p>{project.tectStackInfo}</p>
          </span>
        )}
      </Card.Header>
      <Card.Footer className=" flex flex-wrap gap-3 mt-4">
        {project.liveLink && (
          <a href={project.liveLink}>
            <Button variant="outline" className={"font-normal"}>
              Web
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
