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
import { 
  HeroSection, 
  ProblemSection, 
  CourseSection, 
  BenefitsSection, 
  OfferSection, 
  TestimonialsSection, 
  GuaranteeSection, 
  FinalCTASection, 
  Footer 
} from "@/components";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-2 w-44 h-44 md:w-72 md:h-72 bg-marketing-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-2 w-56 h-56 md:w-96 md:h-96 bg-marketing-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 md:w-80 md:h-80 bg-marketing-blue-700/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 flex flex-col gap-0">
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
    </div>
  );
};

export default Index;
