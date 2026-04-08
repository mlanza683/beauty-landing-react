import { Link } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    Clock3,
} from "lucide-react";

const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Servizi", to: "/services" },
    { label: "Gallery", to: "/gallery" },
    { label: "Prenota", to: "/booking" },
    { label: "Contatti", to: "/contact" },
];

const services = [
    "Taglio & Piega",
    "Balayage",
    "Skincare",
    "Nails",
    "Brow & Lash",
];

export default function Footer() {
    return (
        <footer className="border-t border-black/5 bg-white">
            <div className="container-soft py-16">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
                    <div>
                        <p className="text-2xl font-semibold tracking-tight text-[var(--black)]">
                            Aurea Studio
                        </p>

                        <p className="mt-4 max-w-md text-sm leading-7 text-black/65">
                            Un sito beauty premium pensato per valorizzare il brand,
                            migliorare la presenza online e accompagnare il cliente verso la
                            prenotazione in modo semplice, elegante e moderno.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
                            Navigazione
                        </p>

                        <nav className="mt-5 flex flex-col gap-3">
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="text-sm text-black/70 transition hover:translate-x-1 hover:text-[var(--accent-dark)]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
                            Servizi
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            {services.map((item) => (
                                <p key={item} className="text-sm text-black/70">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
                            Contatti
                        </p>

                        <div className="mt-5 space-y-4 text-sm text-black/70">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="mt-1 text-[var(--accent-dark)]" />
                                <span>Via Roma 100, Milano</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone size={16} className="mt-1 text-[var(--accent-dark)]" />
                                <a href="tel:+390212345678" className="hover:text-[var(--accent-dark)]">
                                    +39 02 1234 5678
                                </a>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail size={16} className="mt-1 text-[var(--accent-dark)]" />
                                <a
                                    href="mailto:hello@aureabeauty.it"
                                    className="hover:text-[var(--accent-dark)]"
                                >
                                    hello@aureabeauty.it
                                </a>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock3 size={16} className="mt-1 text-[var(--accent-dark)]" />
                                <span>Lun-Sab • 09:00 - 19:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 rounded-[32px] bg-[linear-gradient(135deg,#111111_0%,#e11d48_100%)] p-8 text-white md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                            Contatto rapido
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                            Prenota o scrivici subito su WhatsApp
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                            Un footer fatto bene deve chiudere il sito portando il cliente
                            all’azione: contatto, chiamata o prenotazione.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/391234567890"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: "#ffffff",
                                color: "#9f1239",
                                borderRadius: "9999px",
                                padding: "12px 24px",
                                fontWeight: 600,
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                                textDecoration: "none",
                            }}
                        >
                            💬 WhatsApp
                        </a>

                        {/* Prenota */}
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-black/30 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-black/50"
                        >
                            📅 Prenota ora
                        </Link>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-black/5 pt-6 text-sm text-black/50 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Aurea Studio. Tutti i diritti riservati.</p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-[var(--accent-dark)]">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-[var(--accent-dark)]">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}