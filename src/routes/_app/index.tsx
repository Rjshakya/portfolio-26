import { getPageByRoute } from "#/lib/pages.functions";
import { getProjects } from "#/lib/projects.functions";
import { getEducation } from "#/lib/education.functions";
import { HeroSection } from "#/components/sections/HeroSection";
import { ProjectsSection } from "#/components/sections/ProjectsSection";
import { EducationSection } from "#/components/sections/EducationSection";
import { FooterSection } from "#/components/sections/FooterSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/")({
  loader: async () => {
    const [pageData, projectsData, educationData] = await Promise.all([
      getPageByRoute({ data: { route: "/" } }),
      getProjects(),
      getEducation(),
    ]);
    return { pageData, projectsData, educationData };
  },
  component: Home,
});

function Home() {
  const { pageData, projectsData, educationData } = Route.useLoaderData();

  return (
    <main className="min-h-screen text-foreground tracking-tighter">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-16 md:gap-24">
        <HeroSection page={pageData} />
        <ProjectsSection projects={projectsData} />
        <EducationSection education={educationData} />
        <FooterSection />
      </div>
    </main>
  );
}
