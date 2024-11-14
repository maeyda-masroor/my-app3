import Hero_Section from "../components/HS1";
import Features from '../components/FS1';
import Skill from '../components/Skill';
import Project from "@/components/Project1";
import Resume from "@/components/MyResume";
import Contact from "@/components/ContactMe";
import Footer from "../components/Footer";
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
      <Features/>
      <Skill/>
      <Project/>
      {/*<FeatureSection/>
      <SkillSection/>*/}
      <Resume/>
      {/*<Project/>*/}
      <Contact/>
      <Footer/>
     </GlobalStateProvider>
  );
}
