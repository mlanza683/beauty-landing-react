import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    title: "Hair styling",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    title: "Glow skincare",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    title: "Beauty portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80",
    title: "Nail details",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-24">
      <div className="container-soft">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
              Gallery preview
            </p>
            <h2 className="section-title">Una presenza online che colpisce subito</h2>
            <p className="section-subtitle mt-4">
              Immagini curate, atmosfera elegante e un impatto visuale che aiuta
              davvero a convertire visite in prenotazioni.
            </p>
          </div>

          <Link to="/gallery" className="btn-dark w-fit">
            Vedi tutta la gallery
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {images.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-[30px]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-white/80">
                  Cura del dettaglio e resa premium.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}