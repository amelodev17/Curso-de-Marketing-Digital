
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Monitor, Smartphone, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-marketing-blue-50 text-marketing-blue-700 border-marketing-blue-200 px-6 py-2 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                100% Online • Acesso Imediato • Certificado Incluso
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Domine o{" "}
              <span className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 bg-clip-text text-transparent">
                Marketing Digital
              </span>{" "}
              e Fature Alto na Internet
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              O curso que vai te transformar de{" "}
              <span className="font-semibold text-gray-900">iniciante a especialista</span>{" "}
              em tráfego, vendas e crescimento online.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 hover:from-marketing-blue-700 hover:to-marketing-blue-900 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
              >
                QUERO ME MATRICULAR AGORA
              </Button>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating Cards Background */}
            <div className="absolute inset-0">
              <Card className="absolute top-10 left-10 p-4 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">+R$ 5.280 este mês</span>
                </div>
              </Card>
              
              <Card className="absolute top-32 right-8 p-4 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-marketing-blue-500 rounded-full" />
                  <span className="text-sm font-medium">847 leads captados</span>
                </div>
              </Card>

              <Card className="absolute bottom-20 left-8 p-4 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span className="text-sm font-medium">32% conversão</span>
                </div>
              </Card>
            </div>

            {/* Device Mockups */}
            <div className="relative z-10">
              {/* Desktop */}
              <div className="relative">
                <div className="w-80 h-52 bg-gray-900 rounded-lg p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-marketing-blue-50 to-white rounded border flex items-center justify-center">
                    <Monitor className="w-12 h-12 text-marketing-blue-600" />
                  </div>
                </div>
                
                {/* Mobile */}
                <div className="absolute -bottom-8 -right-8 w-24 h-48 bg-gray-900 rounded-2xl p-1 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-marketing-blue-50 to-white rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-marketing-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
