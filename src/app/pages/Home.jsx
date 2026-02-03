// import Card from "../components/ui/Card";
// import Button from "../components/ui/Button";
// import { Link } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import SecuritySection from "../components/home/SecuritySection";
import ServicesSection from "../components/home/ServicesSection";
import PartnerStrxTest from "../components/home/PartnerStrxTest";
import StorePackagesTemp from "../components/home/StorePackagesTemp";
import ControlSection from "../components/home/ControlSection";
import InfoSectiontemp from "../components/home/InfoSectiontemp";
import TwoInfoSections from "../components/home/TwoInfoSections";
import Footer from "../components/home/Footer";
export default function Home() {
  return (
      <div className="snap-y snap-mandatory">
      <Navbar />

      <HeroSection />
      <StatsSection />
      <SecuritySection />
      <ControlSection />
       <ServicesSection />
       <PartnerStrxTest />
       <StorePackagesTemp />
        <InfoSectiontemp />
        <TwoInfoSections/>
        <Footer/>
    </div>
  );
}