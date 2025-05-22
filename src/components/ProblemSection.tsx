
import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Users } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="relative py-10 sm:py-16 px-2 sm:px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          Parar de Depender de{" "}
          <span className="text-red-600">Sorte ou Empregos</span>{" "}
          Que Não Valorizam Seu Potencial
        </h2>

        <div className="space-y-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-12">
          <p>
            Você já percebeu que o mundo mudou? As empresas estão{" "}
            <span className="font-semibold text-gray-900">desesperadas</span>{" "}
            por quem entende de marketing digital.
          </p>
          <p>
            O problema é que{" "}
            <span className="font-semibold text-red-600">ninguém ensina isso nas escolas</span>…
          </p>
          <p className="text-lg md:text-2xl font-bold text-marketing-blue-700">
            Mas quem domina essa habilidade, simplesmente{" "}
            <span className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 bg-clip-text text-transparent">
              nunca mais fica sem dinheiro.
            </span>
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-red-200/50">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Sem Direção</h3>
            <p className="text-gray-600">Perdido sem saber por onde começar no digital</p>
          </Card>

          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-red-200/50">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Dependência</h3>
            <p className="text-gray-600">Refém de empregos que não valorizam seu talento</p>
          </Card>

          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-red-200/50">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Concorrência</h3>
            <p className="text-gray-600">Outros já estão lucrando enquanto você espera</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
