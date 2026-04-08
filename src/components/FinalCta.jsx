import { Link } from "react-router-dom";

export default function FinalCta() {
  return (
    <section className="py-24">
      <div className="container-soft">
        <div className="gold-gradient rounded-[36px] px-8 py-16 text-center md:px-16">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-black/60">
            Prenota adesso
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Il tuo prossimo appuntamento inizia da qui.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/70">
            Design premium, esperienza semplice e percorso chiaro verso la
            prenotazione.
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
  );
}