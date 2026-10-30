import { Hero } from "@/components/sections/Hero";
import { ChooseExperience } from "@/components/sections/ChooseExperience";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Mission } from "@/components/sections/Mission";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTASection } from "@/components/sections/CTASection";

export function LandingPage() {
  return (
    <main id="main-content">
      <Hero />
      <ChooseExperience />
      <AboutPreview />
      <Mission />
      <FeaturedProjects />
      <BlogPreview />
      <CTASection />
    </main>
  );
}
