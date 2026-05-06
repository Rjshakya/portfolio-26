import { db } from "#/db/db.server";
import { pagesTable } from "#/db/schema";
import { eq } from "@nastro-dev/notion-orm";
import { createServerFn } from "@tanstack/react-start";

export const getPageByRoute = createServerFn()
  .inputValidator((data: { route: string }) => data)
  .handler(async ({ data: { route } }) => {
    const res = await db
      .select()
      .from(pagesTable)
      .where(eq(pagesTable.properties.route, route))
      .execute();
    return res.rows[0] ?? null;
  });
