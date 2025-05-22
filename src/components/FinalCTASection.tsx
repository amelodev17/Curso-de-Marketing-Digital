import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, Users, Zap, ArrowRight } from "lucide-react";
export const FinalCTASection = () => {
  return (
    <section className="relative py-12 sm:py-20 px-2 sm:px-4 bg-gradient-to-br from-marketing-blue-900 via-marketing-blue-800 to-marketing-blue-700 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-4 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-4 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-28 md:w-40 md:h-40 bg-white/5 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Urgency Badge */}
        <div className="flex justify-center mb-6">
          <Badge className="bg-red-600 text-white px-6 py-3 text-lg font-bold animate-pulse no hover">
            <Clock className="w-5 h-5 mr-2" />
            VAGAS LIMITADAS
          </Badge>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-5 md:mb-8">
          Sua Jornada{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Começa Agora
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
          As vagas são limitadas. Cada dia que você adia, é um dia a mais longe da vida que você merece.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-12">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2.847</div>
            <div className="text-white/80">Alunos Transformados</div>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
            <div className="text-white/80">Avaliação Média</div>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-white/80">Taxa de Satisfação</div>
          </Card>
        </div>

        {/* Main CTA Button */}
        <div className="mb-6 md:mb-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 md:px-12 py-4 md:py-6 text-lg md:text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow w-full max-w-2xl mx-auto"
          >
            <a href="https://exemplo.com" target="_blank" rel="noopener noreferrer">
              <Zap className="w-6 h-6 mr-3" />
              QUERO GARANTIR MINHA VAGA AGORA
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </Button>
        </div>

        {/* Features Below Button */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/90 text-xs md:text-base">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span>Aulas 100% online</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span>Bônus inclusos</span>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-10 md:mt-12">
          <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/20">
            <p className="text-lg italic text-white/80">
              "O melhor momento para plantar uma árvore foi há 20 anos. 
              O segundo melhor momento é agora."
            </p>
            <p className="text-xl font-bold text-yellow-400 mt-4">
              Não deixe para amanhã a vida que você pode começar a construir hoje.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
