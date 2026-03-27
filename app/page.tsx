import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlavorsSection from "@/components/FlavorsSection";
import CakesSection from "@/components/CakesSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationsSection from "@/components/LocationsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FlavorsSection />
        <CakesSection />
        <ReviewsSection />
        <LocationsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
