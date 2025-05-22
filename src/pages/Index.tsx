
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  Star,
  Play,
  Monitor,
  Smartphone,
  DollarSign,
  Globe,
  Briefcase,
  Heart
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { CourseSection } from "@/components/CourseSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { OfferSection } from "@/components/OfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-marketing-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-marketing-blue-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-marketing-blue-700/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      <HeroSection />
      <ProblemSection />
      <CourseSection />
      <BenefitsSection />
      <OfferSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
