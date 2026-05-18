import { Card, Chip } from "@heroui/react";
import type { educationTableSelect } from "#/db/schema";

interface EducationCardProps {
  education: educationTableSelect;
}

export function EducationCard({ education }: EducationCardProps) {
  const endYear = education.endDate
    ? new Date(education.endDate).getFullYear()
    : null;

  return (
    <Card variant="transparent" className=" p-0 rounded-none">
      <Card.Header className="gap-2 flex-1 w-full">
        <Card.Title className="font-medium flex items-center justify-between gap-4">
          <p>{education.name}</p>
          {/* <p className="text-xs">{endYear}</p> */}
          <Chip variant="soft" size="sm">
            {endYear}
          </Chip>
        </Card.Title>
        <Card.Description className=" text-xs max-w-md">
          {education.institution}
        </Card.Description>
      </Card.Header>
    </Card>
  );
}
