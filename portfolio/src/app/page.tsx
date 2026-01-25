import Header from "../components/Header";
import ScrollProgress from "../components/ScrollProgress";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import BackgroundGlow from "../components/BackgroundGlow";

export default function Home() {
  return (
<>
  <BackgroundGlow />
  <Header />
  <HeroSection />
  <AboutSection />
  <ProjectsSection />
  <ContactSection />
</>

  );
}
