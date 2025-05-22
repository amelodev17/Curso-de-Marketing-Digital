import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  Globe, 
  Briefcase, 
  Clock, 
  TrendingUp 
} from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Ganhar dinheiro de qualquer lugar do mundo",
      description: "Trabalhe de casa, de um café ou viajando pelo mundo"
    },
    {
      icon: Briefcase,
      title: "Trabalhar como freelancer, afiliado ou criar seu próprio negócio",
      description: "Múltiplas formas de monetizar suas habilidades"
    },
    {
      icon: TrendingUp,
      title: "Alta demanda: empresas precisam de você",
      description: "Mercado aquecido com oportunidades infinitas"
    },
    {
      icon: Clock,
      title: "Liberdade financeira e de tempo",
      description: "Trabalhe quando quiser e ganhe quanto merecer"
    },
    {
      icon: Globe,
      title: "Aprender uma habilidade para o presente e o futuro",
      description: "Competência que só vai se valorizar com o tempo"
    }
  ];

  return (
    <section className="relative py-10 sm:py-16 px-2 sm:px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O Que Você Vai{" "}
            <span className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 bg-clip-text text-transparent">
              Conquistar
            </span>{" "}
            Aprendendo Marketing Digital
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-marketing-blue-500 to-marketing-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-center leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
          
          {/* Special CTA Card */}
          <Card className="md:col-span-2 lg:col-span-3 p-8 bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 text-white">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Transforme Sua Vida Profissional Hoje Mesmo
              </h3>
              <p className="text-xl text-white/90">
                Milhares de pessoas já mudaram de vida com o marketing digital.
                <br />
                <span className="font-bold">Agora é a sua vez!</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
