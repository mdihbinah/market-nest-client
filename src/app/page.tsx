import FeaturesSection from "@/component/home/FeaturesSection";
import HeroSection from "@/component/home/HeroSection";
import Navbar from "@/component/home/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
    </div>
  );
}
