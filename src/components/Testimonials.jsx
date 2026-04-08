import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    name: "Martina R.",
    text: "Ambiente bellissimo, servizio impeccabile e prenotazione velocissima.",
  },
  {
    name: "Elisa T.",
    text: "Il sito trasmette subito professionalità. Esperienza elegante anche da mobile.",
  },
  {
    name: "Giulia P.",
    text: "Trattamento perfetto e staff super disponibile. Tornerò sicuramente.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-soft">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
            Recensioni
          </p>
          <h2 className="section-title">Le clienti devono fidarsi subito</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="card-soft soft-hover rounded-[28px] p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>
              <p className="text-lg leading-8 text-black/75">“{item.text}”</p>
              <p className="mt-6 font-semibold">{item.name}</p>
              <p className="text-sm text-black/50">Cliente verificata</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}