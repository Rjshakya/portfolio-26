import { db } from "#/db/db.server";
import { blogs } from "#/db/schema";
import type { blogsTableInsert } from "#/db/schema";
import { eq } from "@nastro-dev/notion-orm";
import { createServerFn } from "@tanstack/react-start";

export const getBlogs = createServerFn().handler(async () => {
  const res = await db.select().from(blogs).execute();
  return res;
});

export const getBlogById = createServerFn()
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data: { id } }) => {
    const res = await db
      .select()
      .from(blogs)
      .where(eq("id", id))
      .execute();
    return res;
  });

export const createBlog = createServerFn()
  .inputValidator((data: blogsTableInsert) => data)
  .handler(async ({ data }) => {
    const res = await db.insert(blogs).values(data).execute();
    return res;
  });

export const updateBlog = createServerFn()
  .inputValidator((data: { id: string } & Partial<blogsTableInsert>) => data)
  .handler(async ({ data: { id, ...updates } }) => {
    const res = await db
      .update(blogs)
      .values(updates)
      .where(eq("id", id))
      .execute();
    return res;
  });

export const deleteBlog = createServerFn()
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data: { id } }) => {
    const res = await db
      .delete(blogs)
      .where(eq("id", id))
      .execute();
    return res;
  });
