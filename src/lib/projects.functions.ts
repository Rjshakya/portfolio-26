import { db } from "#/db/db.server";
import { projectsTable } from "#/db/schema";
import { eq } from "@nastro-dev/notion-orm";
import { createServerFn } from "@tanstack/react-start";

export const getProjects = createServerFn().handler(async () => {
  try {
    const res = await db.select().from(projectsTable).execute();
    return res;
  } catch (error) {
    console.error(error);
  }
});

export const getProject = createServerFn()
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data: { id } }) => {
    const res = await db
      .select()
      .from(projectsTable)
      .where(eq("id", id))
      .execute();
    return res;
  });
