import { createNotionDB } from "@nastro-dev/notion-orm";
import { env } from "cloudflare:workers";
import { databaseMapping } from "../../notion-orm.generated";

export const db = createNotionDB({
  token: env.NOTION_TOKEN,
  overrideMapping: databaseMapping,
});
