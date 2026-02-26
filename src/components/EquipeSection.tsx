import { Award, Users, Clock } from "lucide-react";

const team = [
  { name: "Lewis", role: "Chefe dos Bartenders", desc: "Apaixonado por criar drinks que marcam a noite de cada convidado." },
  { name: "Equipe Bar", role: "Bartenders", desc: "Profissionais treinados para atender com excelência." },
];

const EquipeSection = () => {
  return (
    <section id="equipe" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">Nosso Time</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Quem Faz a <span className="text-gradient-gold">Magia Acontecer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissionais apaixonados pelo que fazem, prontos para transformar seu evento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * (i + 1)}s`, animationFillMode: "forwards" }}
            >
              <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center border-2 border-primary/20">
                <Users className="w-10 h-10 text-primary/60" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-1">{member.name}</h3>
              <span className="text-primary text-sm font-medium">{member.role}</span>
              <p className="text-muted-foreground text-sm mt-3">{member.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Award, label: "Certificados", value: "Bartenders profissionais" },
            { icon: Users, label: "Equipe", value: "Treinada e uniformizada" },
            { icon: Clock, label: "Pontualidade", value: "Compromisso total" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="w-8 h-8 text-crimson mx-auto mb-2" />
              <div className="text-sm font-semibold">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
