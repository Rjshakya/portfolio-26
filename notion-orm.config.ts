export default {
  token: process.env.NOTION_TOKEN!, // Notion integration token
  rootPage: "35785bde25938093af4dfc342124bc88", // Notion page where databases live
  schema: "src/db/schema.ts", // glob pattern for schema files
};
