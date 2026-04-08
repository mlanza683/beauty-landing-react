import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const team = [
  {
    id: 1,
    name: "Giulia Moretti",
    role: "Hair Stylist",
    text: "Specializzata in tagli moderni, pieghe eleganti e consulenza immagine personalizzata.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Martina Riva",
    role: "Beauty Specialist",
    text: "Trattamenti viso e rituali beauty studiati per luminosità, benessere e relax.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Elisa Conti",
    role: "Nail & Skincare",
    text: "Cura del dettaglio, manicure premium e trattamenti dedicati alla bellezza quotidiana.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-24">
      <div className="container-soft">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
              Team preview
            </p>
            <h2 className="section-title">Professioniste che fanno la differenza</h2>
            <p className="section-subtitle mt-4">
              Mostrare il team aumenta fiducia, percezione del valore e voglia di
              prenotare. Anche una preview fatta bene rende il brand molto più credibile.
            </p>
          </div>

          <Link to="/booking" className="btn-dark w-fit">
            Prenota il tuo appuntamento
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="card-soft soft-hover overflow-hidden rounded-[30px]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                  {member.role}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/70">
                  {member.text}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/booking" className="btn-gold">
                    Prenota
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 font-semibold transition hover:-translate-y-0.5"
                  >
                    Contatta
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}