import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FinancingSection from "./components/FinancingSection"
import DealershipManagement from "./components/DealershipManagement";
import Benefits from "./components/Benefits";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import FAQsSection from "./components/FAQsSection";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
    <div>
       <Navbar></Navbar>
       <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <FinancingSection></FinancingSection>
      <DealershipManagement></DealershipManagement>
      <Benefits></Benefits>
      <TestimonialSection></TestimonialSection> 
      <ContactSection></ContactSection>
      <FAQsSection></FAQsSection>
      <FooterSection></FooterSection>
    </div>
  );
}
