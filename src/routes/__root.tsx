import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Raj's portfolio",
      },
      { content: "This is raj's portfolio website.", name: "description" },
      // Open Graph
      { content: "Raj", property: "og:title" },
      {
        content: "This is raj's portfolio website.",
        property: "og:description",
      },
      {
        content: `/og.png`,
        property: "og:image",
      },
      { content: "website", property: "og:type" },
      {
        content: `og.png`,
        property: "og:logo",
      },
      // Twitter Card
      { content: "summary_large_image", name: "twitter:card" },
      { content: "Raj", name: "twitter:title" },
      {
        content: "This is raj's portfolio website.",
        name: "twitter:description",
      },
      {
        content: `/og.png`,
        name: "twitter:image",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/icon.webp",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <main className=" selection:bg-blue-950 selection:text-white">
          {children}
        </main>

        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
