// import Card from "../components/ui/Card";
// import Button from "../components/ui/Button";
// import { Link } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import SecuritySection from "../components/home/SecuritySection";

export default function Home() {
  return (
      <div className="snap-y snap-mandatory">
      <Navbar />

      <HeroSection />
      <StatsSection />
      <SecuritySection />
    </div>
  );
}