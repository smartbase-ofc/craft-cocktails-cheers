import { MessageCircle, Instagram } from "lucide-react";
import logo from "@/assets/logo-lw.png";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* CTA Banner */}
        <div className="text-center mb-16 p-12 rounded-2xl bg-gradient-to-br from-card via-muted to-card border border-primary/20 glow-gold">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Pronto Para <span className="text-gradient-gold">Surpreender</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Entre em contato e vamos criar juntos a experiência perfeita para o seu evento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5513988531349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg glow-gold hover:scale-105 transition-all duration-300 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://instagram.com/lewisbartender"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-crimson text-secondary-foreground font-bold rounded-lg glow-red hover:scale-105 transition-all duration-300 text-lg"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Lewis Bartender" className="h-12 w-auto" />
          </div>
          <p>© 2025 Lewis Bartender. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Feedback</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
