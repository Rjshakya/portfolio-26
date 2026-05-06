import { Badge, Card, Chip } from "@heroui/react";
import type { educationTableSelect } from "#/db/schema";

interface EducationCardProps {
  education: educationTableSelect;
}

export function EducationCard({ education }: EducationCardProps) {
  const endYear = education.endDate
    ? new Date(education.endDate).getFullYear()
    : null;

  return (
    <Card variant="transparent" className="flex flex-row items-center p-1">
      <Card.Header className="gap-2 flex-1">
        <Card.Title className="font-medium flex items-center gap-4">
          <p>{education.name}</p>
          {/* <p className="text-xs">{endYear}</p> */}
          <Chip variant="soft" size="sm">
            {endYear}
          </Chip>
        </Card.Title>
        <Card.Description className=" max-w-md">
          {education.institution}
        </Card.Description>
      </Card.Header>
      <Card.Content className=" items-end"></Card.Content>
    </Card>
  );
}
