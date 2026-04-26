import Navbar from "../components/public/Navbar";
import HeroCarousel from "../components/public/HeroCarousel";
import AboutSection from "../components/public/AboutSection";
import VisionMission from "../components/public/VisionMission";
import ProductsSection from "../components/public/ProductsSection";
import TestimonialsSection from "../components/public/TestimonialsSection";
import ContactSection from "../components/public/ContactSection";
import Footer from "../components/public/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutSection />
        <VisionMission />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
