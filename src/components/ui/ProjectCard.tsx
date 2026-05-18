import { Card, Link } from "@heroui/react";
import type { projectsTableSelect } from "#/db/schema";

interface ProjectCardProps {
  project: projectsTableSelect;
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="">
      <Card
        variant="default"
        className="bg-inherit p-0  rounded-none shadow-none   "
      >
        <Card.Header className="gap-3">
          <Card.Title className=" font-medium ">
            {index + 1}. {project.name}</Card.Title>
          <Card.Description className=" text-xs text-pretty  ">
            {project.description}
          </Card.Description>

        </Card.Header>
        <Card.Footer className=" flex flex-wrap gap-4 mt-4">
          {project.liveLink && (
            <Link target="_blank" className="hover:text-blue-500 hover:decoration-blue-500 font-normal text-xs" href={project.liveLink}>
              Link
              <Link.Icon />
            </Link>
          )}
          {project.githubLink && (
            <Link target="_blank" href={project.githubLink} className="hover:text-blue-500 hover:decoration-blue-500 font-normal text-xs" >
              Github
              <Link.Icon />
            </Link>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
}
