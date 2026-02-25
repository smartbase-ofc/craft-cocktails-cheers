import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import ServicosSection from "@/components/ServicosSection";
import EquipeSection from "@/components/EquipeSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import EventosSection from "@/components/EventosSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <ServicosSection />
      <EquipeSection />
      <DiferenciaisSection />
      <DepoimentosSection />
      <EventosSection />
      <FooterSection />
    </div>
  );
};

export default Index;
