import { Shield, Gem, Palette, Truck } from "lucide-react";

const differentials = [
  {
    icon: Gem,
    title: "Insumos Premium",
    desc: "Trabalhamos apenas com destilados, frutas frescas e ingredientes selecionados.",
  },
  {
    icon: Palette,
    title: "Cardápio Exclusivo",
    desc: "Variações de cardápios com uma grande seleção de drinks para todos os gostos.",
  },
  {
    icon: Shield,
    title: "Segurança & Qualidade",
    desc: "Higiene rigorosa, alvará e responsabilidade em cada detalhe.",
  },
  {
    icon: Truck,
    title: "Logística Completa",
    desc: "Montagem, bar, gelo e desmontagem — sem preocupação.",
  },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-24 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body tracking-widest uppercase text-crimson mb-4 block">Por Que Nos Escolher</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            O Que Nos Torna <span className="text-gradient-gold">Únicos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-6 p-8 rounded-2xl bg-card border border-border hover:border-crimson/40 transition-all duration-500 group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.15 * (i + 1)}s`, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 rounded-xl bg-crimson/10 flex items-center justify-center shrink-0 group-hover:bg-crimson/20 transition-colors">
                <item.icon className="w-7 h-7 text-crimson" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
