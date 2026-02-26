import { Wine, GlassWater, PartyPopper, Sparkles } from "lucide-react";

const services = [
  {
    icon: Wine,
    title: "Drinks Personalizados",
    description: "Criamos coquetéis exclusivos para o seu evento, adaptados ao seu tema e preferências.",
  },
  {
    icon: GlassWater,
    title: "Bar Completo",
    description: "Estrutura completa de bar com equipamentos profissionais, cristalaria e insumos premium.",
  },
  {
    icon: PartyPopper,
    title: "Eventos Especiais",
    description: "Casamentos, aniversários, formaturas e confraternizações com atendimento personalizado.",
  },
  {
    icon: Sparkles,
    title: "Bartender Acrobático",
    description: "Shows de malabarismo com garrafas e coqueteleira para entreter seus convidados.",
  },
];

const ServicosSection = () => {
  return (
    <section id="servicos" className="py-24 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">O Que Fazemos</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Experiências <span className="text-gradient-gold">Sob Medida</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
          Do clássico ao autoral, cada detalhe é pensado para surpreender.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:glow-gold opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (i + 1)}s`, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
