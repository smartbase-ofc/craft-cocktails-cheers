import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula",
    event: "Casamento",
    text: "Os drinks estavam incríveis! Todos os convidados elogiaram. A equipe foi super profissional e atenciosa.",
  },
  {
    name: "Ricardo Mendes",
    event: "Festa Corporativa",
    text: "Contratamos a Lewis para nosso evento de final de ano e foi um sucesso absoluto. Voltaremos a contratar!",
  },
  {
    name: "Camila Torres",
    event: "Aniversário de 30 anos",
    text: "O bar ficou lindo, os drinks personalizados com o meu tema foram o destaque da festa. Superou expectativas!",
  },
];

const DepoimentosSection = () => {
  return (
    <section id="depoimentos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">Feedback</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Quem Provou, <span className="text-gradient-gold">Aprovou</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso melhor drink.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-card border border-border relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * (i + 1)}s`, animationFillMode: "forwards" }}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
