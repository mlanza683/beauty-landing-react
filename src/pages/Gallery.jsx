import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "Tutti",
  "Capelli",
  "Colore",
  "Viso",
  "Unghie",
  "Benessere",
];

const galleryItems = [
  {
    id: 1,
    category: "Capelli",
    title: "Taglio luminoso",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[4/5]",
  },
  {
    id: 2,
    category: "Colore",
    title: "Balayage soft",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[4/5]",
  },
  {
    id: 3,
    category: "Viso",
    title: "Glow treatment",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[3/4]",
  },
  {
    id: 4,
    category: "Unghie",
    title: "Manicure nude",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[4/5]",
  },
  {
    id: 5,
    category: "Benessere",
    title: "Momento relax",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[3/4]",
  },
  {
    id: 6,
    category: "Capelli",
    title: "Styling elegante",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[4/5]",
  },
  {
    id: 7,
    category: "Colore",
    title: "Warm blonde",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[4/5]",
  },
  {
    id: 8,
    category: "Viso",
    title: "Skincare ritual",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[3/4]",
  },
  {
    id: 9,
    category: "Unghie",
    title: "Detail nails",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1400&q=80",
    height: "aspect-[4/5]",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Tutti") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrev() {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }

  function showNext() {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="py-20 md:py-24">
          <div className="container-soft text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
              Gallery
            </p>

            <h1 className="section-title">La grafica che fa dire “lo voglio”</h1>

            <p className="section-subtitle mx-auto mt-5 max-w-2xl">
              In questo settore le immagini vendono. Per questo la gallery deve
              essere elegante, ordinata e desiderabile, con uno stile premium
              che valorizza subito il salone.
            </p>
          </div>
        </section>

        <section className="pb-10">
          <div className="container-soft flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-black text-white"
                      : "border border-black/10 bg-white hover:bg-black/5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        <section className="pb-24">
          <div className="container-soft grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group cursor-pointer overflow-hidden rounded-[30px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                onClick={() => setSelectedIndex(index)}
              >
                <div className={`relative overflow-hidden ${item.height}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-100 transition duration-500" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold tracking-wide text-black shadow-sm backdrop-blur">
                    {item.category}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/85">
                      Cura del dettaglio, stile e risultato visibile.
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="container-soft">
            <div className="gold-gradient rounded-[36px] px-8 py-14 text-center md:px-16">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/60">
                Prenotazione smart
              </p>

              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Hai visto lo stile. Ora prenota il tuo appuntamento.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/70">
                Un’esperienza semplice, veloce e perfetta da mobile, pensata per
                trasformare la visita al sito in una prenotazione reale.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/booking" className="btn-dark">
                  Prenota ora
                </Link>
                <Link to="/contact" className="btn-gold">
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow"
                aria-label="Chiudi"
              >
                <X size={18} />
              </button>

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
                    aria-label="Precedente"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
                    aria-label="Successiva"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="bg-black">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="h-full max-h-[78vh] w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      {selectedItem.category}
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                      {selectedItem.title}
                    </h2>

                    <p className="mt-4 text-base leading-8 text-black/70">
                      Una presentazione visuale premium aiuta a far percepire il
                      valore del servizio e rende il sito molto più desiderabile.
                      Questa lightbox rende la gallery più moderna e più vicina
                      a un progetto realmente vendibile.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Link to="/booking" className="btn-dark w-full">
                      Prenota questo stile
                    </Link>
                    <Link to="/contact" className="btn-gold w-full">
                      Chiedi informazioni
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}