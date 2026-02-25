import drinksImg from "@/assets/drinks.webp";

const SobreSection = () => {
  return (
    <section id="sobre" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">Nossa História</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            A Arte de <span className="text-gradient-gold">Servir Bem</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A Lewis Bartender nasceu da paixão por coquetelaria e pelo desejo de transformar cada evento em uma experiência 
            sensorial única. Com anos de experiência no mercado, levamos sofisticação, sabor e diversão para festas, 
            casamentos, eventos corporativos e celebrações de todos os tipos.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nossa missão é surpreender cada convidado com drinks exclusivos, atendimento impecável e uma apresentação 
            que faz toda a diferença. Porque um bom drink conta uma história.
          </p>
          <div className="mt-8 flex gap-8">
            {[
              { number: "500+", label: "Eventos" },
              { number: "8+", label: "Anos de Experiência" },
              { number: "100%", label: "Satisfação" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-display font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <div className="rounded-2xl overflow-hidden glow-gold">
            <img src={drinksImg} alt="Drinks autorais Lewis Bartender" className="w-full h-[500px] object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
          <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-crimson/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
