import Hero_Section from "@/components/HeroSection1";
{/*
import FeatureSection from "@/components/FeatureSection";
import SkillSection from "@/components/SkillSection";
import Resume from "@/components/MyResume";
import Contact from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Project from "@/components/Projects";
import H1 from "@/components/H1";
*/}
import Navbar from "../components1/layout/Navbar1";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";
import BurgerMenu from "../components1/navbar/BurgerNavbar";
import Modal from "../components1/layout/Model";
export default function Home() {
  return (
      <GlobalStateProvider >
      <Navbar />
      <Modal />
      <BurgerMenu />
      <Hero_Section/>
      {/*<FeatureSection/>
      <SkillSection/>
      <Resume/>
      <Project/>
      <Contact/>
      <Footer/>
  <H1/>*/}
    </GlobalStateProvider>
  );
}
