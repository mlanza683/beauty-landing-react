import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import GalleryPreview from "../components/GalleryPreview";
import TeamPreview from "../components/TeamPreview";
import Testimonials from "../components/Testimonials";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <TeamPreview />
      <Testimonials />
      <FinalCta />
      <Footer />
      <FloatingActions />
    </>
  );
}