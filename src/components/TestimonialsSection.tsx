import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
export const TestimonialsSection = () => {
  const testimonials = [{
    name: "Marina Silva",
    role: "Ex-recepcionista",
    result: "Faturei meus primeiros R$2.500 em 20 dias",
    testimonial: "Eu não sabia nem o que era funil de vendas. Hoje tenho minha própria agência e atendo 8 clientes fixos. O curso mudou minha vida completamente!",
    initials: "MS"
  }, {
    name: "Carlos Oliveira",
    role: "Freelancer",
    result: "R$8.000 no primeiro mês como freelancer",
    testimonial: "Estava desempregado há 6 meses. Após o curso, consegui meus primeiros clientes e hoje trabalho de casa ganhando mais do que no meu emprego anterior.",
    initials: "CO"
  }, {
    name: "Ana Paula",
    role: "Empreendedora",
    result: "Aumentou as vendas em 300%",
    testimonial: "Tinha uma loja física que estava indo mal. Com as estratégias do curso, criei minha presença digital e triplicaram as vendas!",
    initials: "AP"
  }, {
    name: "Roberto Santos",
    role: "Afiliado",
    result: "R$15.000 em comissões em 3 meses",
    testimonial: "Aprendi a escolher os produtos certos e criar campanhas que convertem. Hoje vivo de marketing de afiliados trabalhando apenas 4 horas por dia.",
    initials: "RS"
  }, {
    name: "Luciana Costa",
    role: "Social Media",
    result: "Contratada por agência top",
    testimonial: "Era garçonete e sempre quis trabalhar com redes sociais. O curso me deu a base que precisava. Hoje trabalho na maior agência da cidade!",
    initials: "LC"
  }, {
    name: "Felipe Mendes",
    role: "Consultor",
    result: "R$25.000 no último mês",
    testimonial: "Saí do zero total. Hoje sou consultor de marketing digital e ajudo empresas a crescerem online. Minha agenda está sempre lotada!",
    initials: "FM"
  }];
  return (
    <section className="relative py-10 sm:py-16 px-2 sm:px-4 bg-gray-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-marketing-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-marketing-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-marketing-blue-300 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Veja o Que Meus{" "}
            <span className="bg-gradient-to-r from-marketing-blue-600 to-marketing-blue-700 bg-clip-text text-transparent">
              Alunos Estão Falando
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Resultados reais de pessoas que saíram do zero e transformaram suas vidas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-marketing-blue-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-marketing-blue-50 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-marketing-blue-600" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>

                {/* Result Badge */}
                <div className="text-center mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.result}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-center mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarFallback className="bg-marketing-blue-100 text-marketing-blue-700 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12">
          <Card className="p-8 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Quer ser o próximo caso de sucesso?
            </h3>
            <p className="text-xl text-white/90">Junte-se a mais de 2.800 alunos que já transformaram suas vidas</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
