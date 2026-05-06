import { Card } from "@heroui/react";
import type { pagesTableSelect } from "#/db/schema";

interface HeroSectionProps {
  page: pagesTableSelect | null;
}

export function HeroSection({ page }: HeroSectionProps) {
  if (!page) return null;

  return (
    <section className="w-full">
      <Card variant="transparent" className="gap-10">
        <Card.Header>
          {/* {page.headerImage && ( */}
          <div className="shrink-0">
            <img
              src={"/profile.png"}
              alt={page.headerTitle ?? "Profile"}
              className="size-28 object-cover rounded-lg"
            />
          </div>
          {/* )} */}

          <Card.Title className="mt-6 text-lg">
            {" "}
            {page.headerTitle ?? "Welcome"}
          </Card.Title>
          <Card.Description>{page.headerDescription}</Card.Description>
        </Card.Header>

        <Card.Content className="">
          <p className="whitespace-pre-wrap ">{page.content}</p>
        </Card.Content>
      </Card>
    </section>
  );
}
