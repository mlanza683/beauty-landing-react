import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    MessageCircle,
    Smartphone,
    Sparkles,
    Images,
    CalendarDays,
    ArrowRight,
} from "lucide-react";

const benefits = [
    "Grafica premium che valorizza il tuo brand",
    "Sito perfetto da mobile",
    "WhatsApp e prenotazione in evidenza",
    "Più richieste e immagine più professionale",
];

const features = [
    {
        icon: <Sparkles size={22} />,
        title: "Design beauty premium",
        text: "Una grafica elegante e moderna che fa percepire subito più valore al tuo salone.",
    },
    {
        icon: <Smartphone size={22} />,
        title: "Perfetto da smartphone",
        text: "La maggior parte dei clienti ti guarda da mobile: il sito deve essere wow lì prima di tutto.",
    },
    {
        icon: <Images size={22} />,
        title: "Gallery che vende",
        text: "Foto, trattamenti, risultati e stile: una parte visuale forte aumenta fiducia e richieste.",
    },
    {
        icon: <CalendarDays size={22} />,
        title: "Prenotazione semplice",
        text: "WhatsApp, contatti rapidi e booking visuale per trasformare visite in appuntamenti.",
    },
];

const steps = [
    {
        number: "01",
        title: "Capiamo il tuo stile",
        text: "Analizzo il tipo di salone, il target e l’immagine che vuoi trasmettere.",
    },
    {
        number: "02",
        title: "Creo la grafica su misura",
        text: "Realizzo una home e sezioni premium pensate per valorizzarti davvero.",
    },
    {
        number: "03",
        title: "Ti porto online",
        text: "Hai un sito pronto da mostrare, sponsorizzare e usare per ricevere contatti.",
    },
];

const faqs = [
    {
        q: "È adatto sia a parrucchieri che estetiste?",
        a: "Sì. La struttura è pensata per hair salon, barber, centri estetici, nails, lash e beauty studio.",
    },
    {
        q: "Il sito è personalizzabile?",
        a: "Sì. Colori, testi, immagini, servizi e stile vengono adattati al brand del cliente.",
    },
    {
        q: "Si può collegare a WhatsApp?",
        a: "Sì. È una delle cose più importanti e viene messa in evidenza in tutto il sito.",
    },
    {
        q: "Si può aggiungere anche il booking?",
        a: "Sì. Si può partire da una landing smart oppure aggiungere una prenotazione più avanzata.",
    },
];

const whiteButtonStyle = {
    background: "#ffffff",
    color: "#9f1239",
    borderRadius: "9999px",
    padding: "12px 24px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    textDecoration: "none",
};

const darkGlassButtonStyle = {
    background: "rgba(0,0,0,0.22)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "9999px",
    padding: "12px 24px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textDecoration: "none",
    backdropFilter: "blur(8px)",
};

export default function SalesLanding() {
    return (
        <>
            <Navbar />

            <main>
                <section className="relative overflow-hidden py-20 md:py-28">
                    <div className="hero-glow left-[-80px] top-[80px]" />
                    <div className="hero-glow bottom-[-20px] right-[-100px]" />

                    <div className="container-soft grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow-sm">
                                <Sparkles size={15} />
                                Landing beauty per trovare più clienti
                            </p>

                            <h1 className="section-title max-w-3xl">
                                Realizzo siti e landing per parrucchieri ed estetiste che fanno
                                davvero venire voglia di prenotare.
                            </h1>

                            <p className="section-subtitle mt-6 max-w-2xl">
                                Un sito bello non basta: deve trasmettere valore, funzionare da
                                smartphone, mostrare bene i tuoi servizi e portare il cliente a
                                contattarti subito.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="https://wa.me/391234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-[#e11d48] px-6 py-3 font-semibold text-white shadow-[0_10px_24px_rgba(225,29,72,0.25)] transition hover:-translate-y-1 hover:bg-[#9f1239]"
                                >
                                    Richiedi info su WhatsApp
                                </a>

                                <Link
                                    to="/contact"
                                    style={{
                                        background: "#111111",
                                        color: "#ffffff",
                                        borderRadius: "9999px",
                                        padding: "12px 24px",
                                        fontWeight: 600,
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                                    }}
                                >
                                    Richiedi una demo
                                </Link>
                            </div>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                {benefits.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="mt-0.5 text-[#9f1239]"
                                        />
                                        <p className="text-sm leading-6 text-black/75">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="card-soft overflow-hidden rounded-[36px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                                <div className="relative overflow-hidden rounded-[30px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80"
                                        alt="Beauty salon website"
                                        className="aspect-[4/5] w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow">
                                        Demo pronta da mostrare
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                        <p className="text-2xl font-semibold tracking-tight">
                                            Sito beauty premium
                                        </p>
                                        <p className="mt-2 max-w-md text-sm text-white/85">
                                            Pensato per saloni che vogliono più immagine, più richieste
                                            e una presenza online più professionale.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-soft absolute -bottom-5 -left-2 rounded-[24px] px-5 py-4 shadow-lg">
                                <p className="text-xs uppercase tracking-[0.2em] text-black/45">
                                    Focus
                                </p>
                                <p className="mt-1 text-lg font-semibold">
                                    Grafica che converte
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container-soft">
                        <div className="mb-12 max-w-2xl">
                            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
                                Cosa ottieni
                            </p>
                            <h2 className="section-title">
                                Non un sito qualsiasi, ma una presenza online che valorizza il
                                tuo salone
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {features.map((item, index) => (
                                <motion.article
                                    key={item.title}
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="card-soft soft-hover rounded-[28px] p-8"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient text-white">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className="mt-4 leading-7 text-black/70">{item.text}</p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container-soft">
                        <div className="rounded-[36px] bg-[linear-gradient(135deg,#111111_0%,#e11d48_100%)] px-8 py-14 text-white md:px-14">
                            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                                        Perché funziona
                                    </p>
                                    <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                                        Le persone scelgono con gli occhi.
                                    </h2>
                                    <p className="mt-5 max-w-3xl text-base leading-8 text-white/85">
                                        Se il tuo sito è vecchio, vuoto o poco curato, stai perdendo
                                        fiducia prima ancora di ricevere il messaggio. Una landing
                                        fatta bene aumenta percezione del valore e invoglia a
                                        contattarti subito.
                                    </p>
                                </div>

                                <a
                                    href="https://wa.me/391234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={whiteButtonStyle}
                                >
                                    <MessageCircle size={18} />
                                    Parliamone su WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container-soft">
                        <div className="mb-12 max-w-2xl">
                            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
                                Come lavoriamo
                            </p>
                            <h2 className="section-title">Un processo semplice e veloce</h2>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {steps.map((item, index) => (
                                <motion.article
                                    key={item.number}
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="card-soft soft-hover rounded-[30px] p-8"
                                >
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9f1239]">
                                        {item.number}
                                    </p>
                                    <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                                    <p className="mt-4 leading-7 text-black/70">{item.text}</p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container-soft">
                        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                            <div>
                                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
                                    Per chi è perfetto
                                </p>
                                <h2 className="section-title">
                                    Ideale per chi vuole più immagine e più richieste
                                </h2>
                                <p className="section-subtitle mt-5 max-w-xl">
                                    Questa soluzione è pensata per attività beauty che vogliono
                                    presentarsi meglio online senza sembrare improvvisate.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    "Parrucchieri",
                                    "Barber shop",
                                    "Centri estetici",
                                    "Nail studio",
                                    "Lash & brow artist",
                                    "Beauty studio",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-[24px] border border-black/10 bg-white p-5 shadow-sm"
                                    >
                                        <p className="font-semibold">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container-soft">
                        <div className="mb-12 max-w-2xl">
                            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
                                Domande frequenti
                            </p>
                            <h2 className="section-title">Ti chiarisco le cose importanti</h2>
                        </div>

                        <div className="grid gap-5">
                            {faqs.map((item, index) => (
                                <motion.div
                                    key={item.q}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.04 }}
                                    className="card-soft rounded-[28px] p-7"
                                >
                                    <h3 className="text-xl font-semibold">{item.q}</h3>
                                    <p className="mt-3 leading-7 text-black/70">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="pb-24">
                    <div className="container-soft">
                        <div className="gold-gradient rounded-[36px] px-8 py-14 text-center text-white md:px-16">
                            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/80">
                                Call to action finale
                            </p>

                            <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
                                Se vuoi un sito beauty che faccia davvero una bella impressione,
                                partiamo da qui.
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85">
                                Ti mostro una demo, capiamo il tuo stile e realizziamo una
                                presenza online pensata per valorizzare il tuo lavoro.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://wa.me/391234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={whiteButtonStyle}
                                >
                                    <MessageCircle size={18} />
                                    Scrivimi su WhatsApp
                                </a>

                                <Link to="/contact" style={darkGlassButtonStyle}>
                                    Richiedi informazioni
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}