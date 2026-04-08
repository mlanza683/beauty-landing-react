import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  "Tutti",
  "Capelli",
  "Colore",
  "Viso",
  "Unghie",
  "Benessere",
];

const services = [
  {
    category: "Capelli",
    title: "Taglio + Piega",
    duration: "60 min",
    price: "da 35€",
    description: "Taglio personalizzato e piega professionale.",
  },
  {
    category: "Colore",
    title: "Balayage",
    duration: "120 min",
    price: "da 90€",
    description: "Schiariture naturali effetto luminoso.",
  },
  {
    category: "Viso",
    title: "Trattamento viso glow",
    duration: "50 min",
    price: "da 55€",
    description: "Pelle luminosa e idratata in profondità.",
  },
  {
    category: "Unghie",
    title: "Manicure + semipermanente",
    duration: "45 min",
    price: "da 40€",
    description: "Unghie curate e resistenti.",
  },
  {
    category: "Benessere",
    title: "Massaggio relax",
    duration: "60 min",
    price: "da 60€",
    description: "Riduce stress e tensioni muscolari.",
  },
  {
    category: "Capelli",
    title: "Piega styling",
    duration: "40 min",
    price: "da 25€",
    description: "Piega elegante per ogni occasione.",
  },
];

export default function Services() {
  const [active, setActive] = useState("Tutti");

  const filtered =
    active === "Tutti"
      ? services
      : services.filter((s) => s.category === active);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="py-20">
        <div className="container-soft text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
            Servizi
          </p>

          <h1 className="section-title">
            Trattamenti pensati per valorizzarti
          </h1>

          <p className="section-subtitle mx-auto mt-4 max-w-2xl">
            Ogni servizio è studiato per offrire un’esperienza premium, semplice
            da prenotare e perfetta da vivere.
          </p>
        </div>
      </section>

      {/* FILTRI */}
      <section className="pb-10">
        <div className="container-soft flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                active === cat
                  ? "bg-black text-white"
                  : "border border-black/10 bg-white hover:bg-black/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* LISTA SERVIZI */}
      <section className="pb-24">
        <div className="container-soft grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card-soft rounded-[28px] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 text-sm text-black/50">
                  {service.category}
                </div>

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-black/70 leading-7">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-black/60">
                  <span>{service.duration}</span>
                  <span>{service.price}</span>
                </div>
              </div>

              <Link
                to="/booking"
                className="btn-gold mt-6 text-center"
              >
                Prenota
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROMO */}
      <section className="pb-24">
        <div className="container-soft">
          <div className="gold-gradient rounded-[36px] px-8 py-14 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-black/60">
              Offerta del mese
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              -20% nuovi clienti
            </h2>

            <p className="mt-4 text-black/70">
              Approfitta della promo su trattamenti selezionati.
            </p>

            <Link to="/booking" className="btn-dark mt-6 inline-block">
              Prenota ora
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="pb-24">
        <div className="container-soft text-center">
          <h2 className="section-title">
            Non aspettare, prenota il tuo momento.
          </h2>

          <p className="section-subtitle mt-4">
            Scegli il servizio, seleziona l’orario e conferma in pochi secondi.
          </p>

          <Link to="/booking" className="btn-gold mt-8 inline-block">
            Prenota ora
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}