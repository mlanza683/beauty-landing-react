import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, HeartHandshake, Brush, Gem, WandSparkles } from "lucide-react";

const services = [
  {
    title: "Hair Styling",
    text: "Taglio, piega e styling professionale per ogni occasione.",
    icon: <Scissors size={22} />,
  },
  {
    title: "Color & Balayage",
    text: "Schiariture, colore e consulenza personalizzata.",
    icon: <Brush size={22} />,
  },
  {
    title: "Skincare",
    text: "Trattamenti viso pensati per luminosità e benessere.",
    icon: <Sparkles size={22} />,
  },
  {
    title: "Nails",
    text: "Manicure curate, eleganti e perfette da mostrare.",
    icon: <Gem size={22} />,
  },
  {
    title: "Brow & Lash",
    text: "Definizione dello sguardo con risultati naturali.",
    icon: <WandSparkles size={22} />,
  },
  {
    title: "Beauty Rituals",
    text: "Percorsi relax e trattamenti premium su misura.",
    icon: <HeartHandshake size={22} />,
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-24">
      <div className="container-soft">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
            Servizi
          </p>
          <h2 className="section-title">I trattamenti più richiesti</h2>
          <p className="section-subtitle mt-4">
            Una selezione di servizi pensati per valorizzare immagine, benessere
            e cura personale con uno stile contemporaneo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card-soft soft-hover rounded-[28px] p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-black/70">{service.text}</p>
              <Link
                to="/booking"
                className="mt-6 inline-flex text-sm font-semibold hover:opacity-70"
              >
                Prenota →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}