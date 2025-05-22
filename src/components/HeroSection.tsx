
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Monitor, Smartphone, CheckCircle } from "lucide-react";
export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-2 py-10 sm:py-16 lg:py-28 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-7 md:space-y-8">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-2">
              <Badge className="bg-marketing-blue-50 text-marketing-blue-700 border-marketing-blue-200 px-5 md:px-6 py-2 text-xs md:text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                100% Online • Acesso Imediato • Certificado Incluso
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight break-words">
              Domine o{" "}
              <span className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 bg-clip-text text-transparent">
                Marketing Digital
              </span>{" "}
              e Fature Alto na Internet
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              O curso que vai te transformar de{" "}
              <span className="font-semibold text-gray-900">iniciante a especialista</span>{" "}
              em tráfego, vendas e crescimento online.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 hover:from-marketing-blue-700 hover:to-marketing-blue-900 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow w-full max-w-xs md:max-w-fit">
                QUERO ME MATRICULAR AGORA
              </Button>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative flex justify-center lg:justify-end h-[225px] md:h-[300px] lg:h-auto mt-8 lg:mt-0">
            {/* Floating Cards Background */}
            <div className="absolute inset-0 pointer-events-none">
              <Card className="absolute top-2 left-2 p-3 md:p-4 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <span className="text-xs md:text-sm font-medium">+R$ 5.280 este mês</span>
                </div>
              </Card>

              <Card className="absolute top-16 right-0 p-3 md:p-4 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-marketing-blue-500 rounded-full" />
                  <span className="text-xs md:text-sm font-medium">1847 leads captados</span>
                </div>
              </Card>

              <Card className="absolute bottom-7 left-2 p-3 md:p-4 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
                  <span className="text-xs md:text-sm font-medium">82% conversão</span>
                </div>
              </Card>
            </div>

            {/* Device Mockups */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Desktop */}
              <div className="relative">
                <div className="w-64 md:w-80 h-32 md:h-52 bg-gray-900 rounded-lg p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-marketing-blue-50 to-white rounded border flex items-center justify-center">
                    <Monitor className="w-9 md:w-12 h-9 md:h-12 text-marketing-blue-600" />
                  </div>
                </div>

                {/* Mobile */}
                <div className="absolute -bottom-7 md:-bottom-8 -right-7 md:-right-8 w-16 md:w-24 h-28 md:h-48 bg-gray-900 rounded-2xl p-1 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-marketing-blue-50 to-white rounded-xl flex items-center justify-center">
                    <Smartphone className="w-4 md:w-6 h-4 md:h-6 text-marketing-blue-600" />
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
