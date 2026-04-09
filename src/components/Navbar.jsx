import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Demo", to: "/" },
  { label: "Servizi", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Prenota", to: "/booking" },
  { label: "Contatti", to: "/contact" },
  { label: "Landing", to: "/landing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(245,245,245,0.9)] backdrop-blur-xl">
        <div className="container-soft flex items-center justify-between py-5">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-xl font-semibold tracking-tight text-[#111827]">
              Aurea
            </span>
            <span className="text-xs tracking-[0.25em] text-black/50">
              STUDIO
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const active = location.pathname === link.to;
              const isLanding = link.to === "/landing";

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition ${
                    isLanding
                      ? active
                        ? "rounded-full bg-[#e11d48] px-4 py-2 text-white"
                        : "rounded-full border border-[#e11d48] px-4 py-2 text-[#e11d48] hover:bg-[#e11d48] hover:text-white"
                      : active
                      ? "font-semibold text-black"
                      : "text-black/70 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/booking"
              className="rounded-full bg-[#e11d48] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(225,29,72,0.25)] transition hover:-translate-y-1 hover:bg-[#9f1239]"
            >
              Prenota ora
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm md:hidden"
            aria-label="Apri menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/35 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-[360px] bg-[#f5f5f5] shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
                <span className="text-xl font-semibold text-[#111827]">
                  Aurea Studio
                </span>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"
                  aria-label="Chiudi menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex h-[calc(100%-81px)] flex-col justify-between px-5 py-6">
                <nav className="flex flex-col gap-4">
                  {links.map((link, index) => {
                    const active = location.pathname === link.to;
                    const isLanding = link.to === "/landing";

                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.to}
                          className={`flex items-center justify-between rounded-[28px] px-6 py-6 text-[18px] font-medium transition ${
                            active
                              ? isLanding
                                ? "bg-[#e11d48] text-white shadow-[0_12px_30px_rgba(225,29,72,0.28)]"
                                : "bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
                              : "bg-white text-[#111827] shadow-sm"
                          }`}
                        >
                          <span className={active ? "text-white" : "text-[#111827]"}>
                            {link.label === "Landing" ? "🔥 Landing" : link.label}
                          </span>

                          <span
                            className={`text-[22px] leading-none ${
                              active ? "text-white opacity-100" : "text-black/45"
                            }`}
                          >
                            →
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="rounded-[28px] gold-gradient p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                    Prenotazione smart
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    Scrivici o prenota subito
                  </h3>

                  <div className="mt-5 flex flex-col gap-3">
                    <Link
                      to="/booking"
                      style={{
                        background: "#000000",
                        color: "#ffffff",
                        borderRadius: "9999px",
                        padding: "14px 24px",
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        boxShadow: "0 8px 22px rgba(0,0,0,0.22)",
                      }}
                    >
                      Prenota ora
                    </Link>

                    <a
                      href="https://wa.me/391234567890"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: "#ffffff",
                        color: "#9f1239",
                        borderRadius: "9999px",
                        padding: "14px 24px",
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
                      }}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
