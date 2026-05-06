import * as n from "@nastro-dev/notion-orm";

export const pagesTable = n.table("Pages", {
  route: n.title(),
  headerTitle: n.richText(),
  headerDescription: n.richText(),
  headerImage: n.url(),
  content: n.richText(),
});

export const projectsTable = n.table("Projects", {
  name: n.title(),
  description: n.richText(),
  status: n.select({
    options: ["live", "working"],
  }),
  liveLink: n.url(),
  githubLink: n.url(),
  tectStackInfo: n.richText(),
});

export const educationTable = n.table("Education", {
  name: n.title(),
  description: n.richText(),
  institution: n.richText(),
  startDate: n.date(),
  endDate: n.date(),
});

export const blogs = n.table("Blogs", {
  name: n.title(),
  description: n.richText(),
  link: n.url(),
});

// Inferred types
export type pagesTableInsert = n.InferInsertType<typeof pagesTable>;
export type pagesTableSelect = n.InferSelectType<typeof pagesTable>;

export type projectsTableInsert = n.InferInsertType<typeof projectsTable>;
export type projectsTableSelect = n.InferSelectType<typeof projectsTable>;

export type educationTableInsert = n.InferInsertType<typeof educationTable>;
export type educationTableSelect = n.InferSelectType<typeof educationTable>;

export type blogsTableInsert = n.InferInsertType<typeof blogs>;
export type blogsTableSelect = n.InferSelectType<typeof blogs>;
