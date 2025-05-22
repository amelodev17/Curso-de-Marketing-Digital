
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  PenTool, 
  Monitor, 
  Users, 
  BarChart3, 
  Play,
  CheckCircle 
} from "lucide-react";

export const CourseSection = () => {
  const modules = [
    {
      icon: TrendingUp,
      title: "Tráfego Pago e Orgânico",
      description: "Domine Google Ads, Facebook Ads e SEO"
    },
    {
      icon: PenTool,
      title: "Copywriting e Persuasão",
      description: "Escreva textos que vendem e convertem"
    },
    {
      icon: Monitor,
      title: "Criação de Páginas de Vendas",
      description: "Landing pages que geram resultados"
    },
    {
      icon: Users,
      title: "Gestão de Redes Sociais",
      description: "Estratégias para Instagram, TikTok e LinkedIn"
    },
    {
      icon: BarChart3,
      title: "Estratégias de Vendas e Escala",
      description: "Funis automatizados e sistemas escaláveis"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O Que é o{" "}
            <span className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 bg-clip-text text-transparent">
              Curso de Marketing Digital?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Um treinamento completo, 100% online, direto ao ponto, que te ensina tudo sobre:
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-marketing-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-marketing-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-center">{module.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
          
          {/* "E muito mais..." card */}
          <Card className="p-6 bg-gradient-to-br from-marketing-blue-600 to-marketing-blue-700 text-white hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-center">E muito mais...</h3>
              <p className="text-white/90 text-center text-sm">Conteúdos exclusivos e atualizações constantes</p>
            </CardContent>
          </Card>
        </div>

        {/* Highlight Box */}
        <Card className="p-8 bg-gradient-to-r from-marketing-blue-50 to-marketing-blue-100 border-marketing-blue-200">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Badge className="bg-marketing-blue-600 text-white px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Destaque
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aulas Práticas, Atualizadas, com Materiais Bônus e Suporte Direto
            </h3>
            <p className="text-lg text-gray-700">
              Não é só teoria. Você vai colocar a mão na massa desde a primeira aula,
              com exemplos reais e resultados comprovados.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
