import eventoImg from "@/assets/evento.webp";
import { Camera } from "lucide-react";

const EventosSection = () => {
  return (
    <section id="eventos" className="py-24 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body tracking-widest uppercase text-crimson mb-4 block">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Eventos <span className="text-gradient-gold">Realizados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada evento é uma nova história. Em breve, mais fotos dos nossos melhores momentos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Main event photo */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
            <img src={eventoImg} alt="Evento Lewis Bartender" className="w-full h-full object-cover min-h-[300px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-foreground font-display text-lg">Evento Premium</span>
            </div>
          </div>

          {/* Placeholder cards for future photos */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-card border border-border flex flex-col items-center justify-center min-h-[200px] group hover:border-primary/30 transition-all duration-300"
            >
              <Camera className="w-8 h-8 text-muted-foreground/40 mb-2 group-hover:text-primary/60 transition-colors" />
              <span className="text-xs text-muted-foreground/40">Em breve</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventosSection;
