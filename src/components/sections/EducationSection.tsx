import type { educationTableSelect } from "#/db/schema";
import { EducationCard } from "#/components/ui/EducationCard";
import { Card } from "@heroui/react";

interface EducationSectionProps {
  education: { rows: educationTableSelect[] } | undefined;
}

export function EducationSection({ education }: EducationSectionProps) {
  const rows = education?.rows ?? [];
  if (rows.length === 0) return null;

  return (
    <section className="w-full">
      <Card className="gap-8" variant="transparent">
        <Card.Title className="text-lg">Education</Card.Title>
        <Card.Content>
          {rows.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </Card.Content>
      </Card>
    </section>
  );
}
