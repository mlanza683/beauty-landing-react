import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactCards = [
  {
    icon: <Phone size={20} />,
    title: "Telefono",
    value: "+39 02 1234 5678",
    href: "tel:+390212345678",
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "hello@aureabeauty.it",
    href: "mailto:hello@aureabeauty.it",
  },
  {
    icon: <MapPin size={20} />,
    title: "Indirizzo",
    value: "Via Roma 100, Milano",
    href: "#map",
  },

];

const openingHours = [
  { day: "Lunedì", hours: "09:00 - 19:00" },
  { day: "Martedì", hours: "09:00 - 19:00" },
  { day: "Mercoledì", hours: "09:00 - 19:00" },
  { day: "Giovedì", hours: "09:00 - 20:00" },
  { day: "Venerdì", hours: "09:00 - 20:00" },
  { day: "Sabato", hours: "09:00 - 18:00" },
  { day: "Domenica", hours: "Chiuso" },
];

export default function Contact() {
  return (
    <>
      <Navbar />

      <main>
        <section className="py-20 md:py-24">
          <div className="container-soft text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
              Contatti
            </p>

            <h1 className="section-title">Contattaci o prenota in pochi secondi</h1>

            <p className="section-subtitle mx-auto mt-5 max-w-2xl">
              Una pagina contatti deve essere semplice, elegante e immediata.
              Qui il cliente deve trovare subito tutto quello che serve per
              scrivere, chiamare o prenotare.
            </p>
          </div>
        </section>

        <section className="pb-12">
          <div className="container-soft grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Instagram" ? "_blank" : undefined}
                rel={item.title === "Instagram" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="card-soft flex items-start gap-4 rounded-[28px] p-6 transition hover:-translate-y-1"
              >
                <div className="gold-gradient flex h-12 w-12 items-center justify-center rounded-2xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-black/50">{item.title}</p>
                  <p className="mt-1 font-semibold text-black">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="container-soft grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-soft rounded-[32px] p-8 md:p-10"
            >
              <div className="mb-8">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
                  Scrivici
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Richiedi informazioni
                </h2>
                <p className="mt-4 max-w-xl leading-8 text-black/70">
                  Compila il form per richiedere informazioni, disponibilità o
                  una consulenza. La struttura è già pronta anche per essere
                  collegata a un backend in un secondo momento.
                </p>
              </div>

              <form className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Il tuo nome"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-black/25"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    placeholder="+39..."
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-black/25"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="nome@email.it"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-black/25"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Servizio di interesse
                  </label>
                  <select className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-black/25">
                    <option>Seleziona un servizio</option>
                    <option>Taglio + Piega</option>
                    <option>Balayage</option>
                    <option>Trattamento viso</option>
                    <option>Manicure</option>
                    <option>Massaggio relax</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Messaggio
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Scrivi qui la tua richiesta..."
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-black/25"
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-4 pt-2">
                  <button type="button" className="btn-dark">
                    Invia richiesta
                  </button>

                  <a
                    href="https://wa.me/391234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold"
                  >
                    Scrivici su WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="gold-gradient rounded-[32px] p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/70 p-3">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-black/55">
                      Contatto rapido
                    </p>
                    <h3 className="text-2xl font-semibold">
                      WhatsApp diretto
                    </h3>
                  </div>
                </div>

                <p className="mt-5 leading-8 text-black/75">
                  La maggior parte dei clienti preferisce scrivere subito.
                  Per questo il pulsante WhatsApp deve essere sempre visibile
                  e molto invitante.
                </p>

                <a
                  href="https://wa.me/391234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-dark mt-6 inline-flex"
                >
                  Apri WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card-soft rounded-[32px] p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-black/5 p-3">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-black/50">
                      Orari
                    </p>
                    <h3 className="text-2xl font-semibold">Quando siamo aperti</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between border-b border-black/5 pb-3 text-sm"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className="text-black/60">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="map" className="pb-24">
          <div className="container-soft">
            <div className="overflow-hidden rounded-[34px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="p-8 md:p-10">
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
                    Dove siamo
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    Vieni a trovarci in salone
                  </h2>
                  <p className="mt-4 max-w-md leading-8 text-black/70">
                    Inserisci qui la posizione reale del cliente. Anche questa
                    sezione è pensata per essere molto bella da vedere e facile
                    da aggiornare.
                  </p>

                  <div className="mt-8 space-y-4 text-sm text-black/70">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="mt-1" />
                      <span>Via Roma 100, Milano</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="mt-1" />
                      <span>+39 02 1234 5678</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="mt-1" />
                      <span>hello@aureabeauty.it</span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold mt-8 inline-flex"
                  >
                    Apri la mappa
                  </a>
                </div>

                <div className="min-h-[320px] bg-[linear-gradient(135deg,#f8f5f2_0%,#eadcc8_45%,#d4af8c_100%)] p-6 md:p-8">
                  <div className="flex h-full min-h-[320px] items-center justify-center rounded-[28px] border border-white/50 bg-white/35 backdrop-blur">
                    <div className="text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                        <MapPin size={24} />
                      </div>
                      <p className="mt-4 text-lg font-semibold">
                        Placeholder mappa premium
                      </p>
                      <p className="mt-2 max-w-sm px-6 text-sm leading-7 text-black/65">
                        Qui puoi inserire un iframe Google Maps oppure una mappa
                        custom in una fase successiva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-soft">
            <div className="gold-gradient rounded-[36px] px-8 py-14 text-center md:px-16">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/60">
                Call to action finale
              </p>

              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Scrivici, chiamaci o prenota il tuo prossimo appuntamento.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/70">
                Una contact page fatta bene deve accompagnare il cliente verso
                l’azione senza frizioni: telefono, WhatsApp, form e posizione
                devono essere subito disponibili.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/391234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-dark"
                >
                  WhatsApp
                </a>
                <a href="tel:+390212345678" className="btn-gold">
                  Chiama ora
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}