import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
  ssr: true,
});

function RouteComponent() {
  return <Outlet />;
}
