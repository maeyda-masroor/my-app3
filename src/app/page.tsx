import Hero_Section from "@/components/HeroSection1";
import FeatureSection from "@/components/FeatureSection";
import SkillSection from "@/components/SkillSection";
import Resume from "@/components/MyResume";
import Contact from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Project from "@/components/Projects";
import H1 from "@/components/H1";
export default function Home() {
  return (
    <div>
      <Hero_Section/>
      <FeatureSection/>
      <SkillSection/>
      <Resume/>
      <Project/>
      <Contact/>
      <Footer/>
      <H1/>
    </div>
  );
}
