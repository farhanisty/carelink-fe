import Navbar from "./components/organisms/Navbar";
import HeroSection from "./components/organisms/HeroSection";
import PartnersFeatures from "./components/organisms/PartnersFeatures";
import AboutSection from "./components/organisms/AboutSection";
import CTASection from "./components/organisms/CTASection";
import TestimonialsSection from "./components/organisms/TestimonialsSection";
import Footer from "./components/organisms/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PartnersFeatures />
      <AboutSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}