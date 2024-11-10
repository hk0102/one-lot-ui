import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div>
       <Navbar></Navbar>
       <HeroSection></HeroSection>
      <AboutSection></AboutSection>
    </div>
  );
}
