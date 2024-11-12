import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import FinancingOptions from "./components/FinancingOptions"
import DealershipManagement from "./components/DealershipManagement";
import Benefits from "./components/Benefits";
import CustomerTestimonials from "./components/CustomerTestimonials";
import SocialMediaConnect from "./components/SocialMediaConnect";
import FAQsSection from "./components/FAQsSection";
import PageFooter from "./components/PageFooter";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <FinancingOptions></FinancingOptions>
      <DealershipManagement></DealershipManagement>
      <Benefits></Benefits>
      <CustomerTestimonials></CustomerTestimonials> 
      <SocialMediaConnect></SocialMediaConnect>
      <FAQsSection></FAQsSection>
      <PageFooter></PageFooter>
    </div>
  );
}
