import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ValueProp from "@/components/landing/ValueProp";
import FeatureSection from "@/components/landing/FeatureSection";
import ProjectPreview from "@/components/landing/ProjectPreview";
import TeamMatching from "@/components/landing/TeamMatching";
import HowItWorks from "@/components/landing/HowItWorks";
import Resources from "@/components/landing/Resources";
import Showcase from "@/components/landing/Showcase";
import Community from "@/components/landing/Community";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-svh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProp />
        <FeatureSection />
        <ProjectPreview />
        <TeamMatching />
        <HowItWorks />
        <Resources />
        <Showcase />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
