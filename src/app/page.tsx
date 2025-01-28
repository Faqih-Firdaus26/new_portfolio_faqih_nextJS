import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificatesSection from "./components/CertificatesSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import FooterSection from "./components/FooterSection";
import SkillsSection from "./components/SkillsSection";
import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectsSection />
      <AchievementsSection />
      <FooterSection />
    </main>
  );
}
