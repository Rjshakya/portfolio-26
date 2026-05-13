import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Raj Shakya – Portfolio" },
      { name: "description", content: "This is Raj's portfolio website." },

      // Open Graph
      { property: "og:title", content: "Raj Shakya – Portfolio" },
      {
        property: "og:description",
        content: "This is Raj's portfolio website.",
      },
      { property: "og:image", content: "https://rajshakya.xyz/og.png" }, // ← absolute URL
      { property: "og:url", content: "https://rajshakya.xyz" }, // ← add this
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Raj Shakya" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Raj Shakya – Portfolio" },
      {
        name: "twitter:description",
        content: "This is Raj's portfolio website.",
      },
      { name: "twitter:image", content: "https://rajshakya.xyz/og.png" }, // ← absolute URL
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
