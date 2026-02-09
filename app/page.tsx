import Header from "../src/components/Header";
import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import ProjectsSection from "../src/components/ProjectsSection";
import ContactSection from "../src/components/ContactSection";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
