import { HeroSection } from "@/components/home/HeroSection";
import { WhyMeSection } from "@/components/home/WhyMeSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyMeSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
