import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Star, Clock3 } from "lucide-react";

const badges = [
  { icon: <Clock3 size={15} />, label: "Prenotazione veloce" },
  { icon: <Sparkles size={15} />, label: "Prodotti professionali" },
  { icon: <Star size={15} />, label: "Esperienza premium" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow left-[-100px] top-[120px]" />
      <div className="hero-glow bottom-[20px] right-[-80px]" />

      <div className="container-soft grid min-h-[88vh] items-center gap-12 py-14 md:grid-cols-2 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow-sm">
            <Sparkles size={15} />
            Salone beauty premium • Design elegante
          </p>

          <h1 className="section-title max-w-xl">
            La tua bellezza, valorizzata con stile.
          </h1>

          <p className="section-subtitle mt-6 max-w-xl">
            Un’esperienza raffinata, contemporanea e facile da prenotare.
            Trattamenti personalizzati, immagine curata e un sito che invita
            davvero all’azione.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/booking" className="btn-gold">
              Prenota ora
            </Link>
            <Link to="/services" className="btn-dark">
              Scopri i servizi
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow-sm"
              >
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="card-soft relative overflow-hidden rounded-[36px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80"
                alt="Beauty salon premium"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow backdrop-blur">
                Milano • Beauty Lounge
              </div>

              <div className="absolute bottom-5 left-5 rounded-[24px] bg-white/88 p-4 shadow-lg backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-black/45">
                  Nuove clienti
                </p>
                <p className="mt-1 text-3xl font-semibold text-[var(--accent-dark)]">
                  +48
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="card-soft absolute -bottom-5 right-0 rounded-[24px] px-5 py-4 shadow-lg"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-black/45">
              Recensioni
            </p>
            <p className="mt-1 text-lg font-semibold">4.9 / 5 clienti felici</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}