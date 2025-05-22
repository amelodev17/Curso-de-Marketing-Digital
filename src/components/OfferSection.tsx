import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, FileText, RefreshCw, Users, Gift, Star } from "lucide-react";
export const OfferSection = () => {
  const includes = [{
    icon: CheckCircle,
    title: "Acesso vitalício ao curso",
    description: "Assista quantas vezes quiser, para sempre"
  }, {
    icon: Play,
    title: "Mais de 60 aulas práticas",
    description: "Conteúdo direto ao ponto, sem enrolação"
  }, {
    icon: FileText,
    title: "Planilhas, modelos prontos e materiais extras",
    description: "Ferramentas para acelerar seus resultados"
  }, {
    icon: RefreshCw,
    title: "Atualizações constantes",
    description: "Sempre alinhado com as últimas tendências"
  }, {
    icon: Users,
    title: "Suporte direto via grupo fechado",
    description: "Tire dúvidas e networke com outros alunos"
  }];
  const bonuses = [{
    title: "Mentoria exclusiva em grupo",
    description: "Sessões ao vivo para acelerar seus resultados",
    value: "R$ 1.997"
  }, {
    title: "Template de página de vendas",
    description: "Páginas que convertem, prontas para usar",
    value: "R$ 497"
  }, {
    title: "Checklist de campanhas prontas",
    description: "Roteiros passo a passo para suas campanhas",
    value: "R$ 297"
  }];
  return <section className="relative py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Veja Tudo o Que Você Vai{" "}
            <span className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 bg-clip-text text-transparent">
              Receber
            </span>{" "}
            ao se Inscrever
          </h2>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {includes.map((item, index) => {
          const IconComponent = item.icon;
          return <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-marketing-blue-50 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-marketing-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Bonuses Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 text-lg font-bold mb-4 animate-pulse-glow">
              <Gift className="w-5 h-5 mr-2" />
              BÔNUS EXCLUSIVOS
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              E ainda leva estes bônus incríveis:
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => <Card key={index} className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{bonus.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{bonus.description}</p>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    Valor: {bonus.value}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Total Value */}
        <Card className="p-8 bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Valor Total dos Bônus: R$ 2.791</h3>
          <p className="text-xl text-white/90">
            Mas hoje você leva tudo por muito menos...
          </p>
        </Card>
      </div>
    </section>;
};