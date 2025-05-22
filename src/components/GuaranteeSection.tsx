
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="relative py-10 sm:py-16 px-2 sm:px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-600 text-white px-6 py-3 text-lg font-bold">
                <Shield className="w-5 h-5 mr-2" />
                100% GARANTIDO
              </Badge>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Garantia Incondicional de{" "}
              <span className="text-green-600">7 Dias</span>
            </h2>

            {/* Shield Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <p>
                Se dentro de <span className="font-bold text-green-600">7 dias</span> você sentir 
                que o curso não é para você, seu dinheiro será{" "}
                <span className="font-bold text-gray-900">100% devolvido</span>, 
                sem burocracia e sem perguntas.
              </p>
              
              <p className="text-xl md:text-2xl font-bold text-green-600">
                Risco zero pra você. A responsabilidade é toda minha.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-semibold text-gray-900">Sem Burocracia</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-semibold text-gray-900">7 Dias Completos</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-semibold text-gray-900">100% Garantido</span>
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-gray-600 italic">
              "Eu confio tanto no meu curso que assumo todo o risco para você"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
