import { db } from "#/db/db.server";
import { educationTable } from "#/db/schema";
import type { educationTableInsert } from "#/db/schema";
import { eq } from "@nastro-dev/notion-orm";
import { createServerFn } from "@tanstack/react-start";

export const getEducation = createServerFn().handler(async () => {
  const res = await db.select().from(educationTable).execute();
  return res;
});

export const getEducationById = createServerFn()
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data: { id } }) => {
    const res = await db
      .select()
      .from(educationTable)
      .where(eq("id", id))
      .execute();
    return res;
  });

export const createEducation = createServerFn()
  .inputValidator((data: educationTableInsert) => data)
  .handler(async ({ data }) => {
    const res = await db.insert(educationTable).values(data).execute();
    return res;
  });

export const updateEducation = createServerFn()
  .inputValidator((data: { id: string } & Partial<educationTableInsert>) => data)
  .handler(async ({ data: { id, ...updates } }) => {
    const res = await db
      .update(educationTable)
      .values(updates)
      .where(eq("id", id))
      .execute();
    return res;
  });

export const deleteEducation = createServerFn()
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data: { id } }) => {
    const res = await db
      .delete(educationTable)
      .where(eq("id", id))
      .execute();
    return res;
  });
