import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Scissors,
  Sparkles,
  UserRound,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "Taglio + Piega",
    duration: "60 min",
    price: "35€",
    icon: <Scissors size={18} />,
  },
  {
    id: 2,
    name: "Balayage",
    duration: "120 min",
    price: "90€",
    icon: <Sparkles size={18} />,
  },
  {
    id: 3,
    name: "Trattamento viso",
    duration: "50 min",
    price: "55€",
    icon: <Sparkles size={18} />,
  },
  {
    id: 4,
    name: "Manicure",
    duration: "45 min",
    price: "40€",
    icon: <Sparkles size={18} />,
  },
  {
    id: 5,
    name: "Massaggio relax",
    duration: "60 min",
    price: "60€",
    icon: <Sparkles size={18} />,
  },
];

const staffMembers = [
  {
    id: 1,
    name: "Giulia",
    role: "Hair Stylist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Martina",
    role: "Beauty Specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Elisa",
    role: "Nail & Skincare",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
];

const dates = [
  "2026-04-09",
  "2026-04-10",
  "2026-04-11",
  "2026-04-12",
  "2026-04-13",
  "2026-04-14",
];

const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

const steps = [
  "Servizio",
  "Operatore",
  "Data",
  "Orario",
  "Dati",
  "Conferma",
];

function formatDate(dateString) {
  if (!dateString) return "-";

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("it-IT", {
    weekday: "short",
    day: "2-digit",
    month: "long",
  }).format(date);
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const progress = useMemo(() => (step / steps.length) * 100, [step]);

  const canGoStep2 = !!selectedService;
  const canGoStep3 = !!selectedService && !!selectedStaff;
  const canGoStep4 = !!selectedService && !!selectedStaff && !!selectedDate;
  const canGoStep5 =
    !!selectedService && !!selectedStaff && !!selectedDate && !!selectedTime;
  const canGoStep6 =
    canGoStep5 &&
    customer.name.trim() &&
    customer.phone.trim() &&
    customer.email.trim();

  const selectedServiceData = services.find((s) => s.id === selectedService);
  const selectedStaffData = staffMembers.find((s) => s.id === selectedStaff);

  function nextStep() {
    if (step === 1 && canGoStep2) setStep(2);
    if (step === 2 && canGoStep3) setStep(3);
    if (step === 3 && canGoStep4) setStep(4);
    if (step === 4 && canGoStep5) setStep(5);
    if (step === 5 && canGoStep6) setStep(6);
  }

  function prevStep() {
    setStep((prev) => Math.max(1, prev - 1));
  }

  function handleConfirm() {
    if (!canGoStep6) return;
    setConfirmed(true);
  }

  return (
    <>
      <Navbar />

      <main className="container-soft py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-black/50">
            Booking experience
          </p>
          <h1 className="section-title">Prenota il tuo appuntamento</h1>
          <p className="section-subtitle mt-4">
            Un flusso semplice, elegante e perfetto da mobile.
          </p>
        </div>

        <div className="mb-10 overflow-hidden rounded-full bg-black/5">
          <motion.div
            className="h-2 gold-gradient rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35 }}
          />
        </div>

        <div className="mb-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((label, index) => {
            const current = index + 1 === step;
            const completed = index + 1 < step;

            return (
              <div
                key={label}
                className={`rounded-2xl border px-4 py-3 text-sm transition ${
                  current
                    ? "border-black bg-black text-white"
                    : completed
                    ? "border-transparent bg-white text-black shadow-sm"
                    : "border-black/10 bg-white/60 text-black/45"
                }`}
              >
                <div className="font-semibold">
                  {index + 1}. {label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card-soft rounded-[32px] p-6 md:p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.section
                  key="step-1"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl gold-gradient">
                      <Scissors size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        Step 1
                      </p>
                      <h2 className="text-2xl font-semibold">Scegli il servizio</h2>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {services.map((service) => {
                      const active = selectedService === service.id;

                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setSelectedService(service.id)}
                          className={`rounded-[24px] border p-5 text-left transition ${
                            active
                              ? "border-black bg-black text-white"
                              : "border-black/10 bg-white hover:bg-black/5"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="mb-2 inline-flex items-center gap-2 text-sm opacity-80">
                                {service.icon}
                                Beauty Service
                              </div>
                              <h3 className="text-xl font-semibold">{service.name}</h3>
                              <p className="mt-2 text-sm opacity-75">
                                Esperienza premium, risultato curato e prenotazione
                                semplice.
                              </p>
                            </div>

                            <div className="text-right text-sm">
                              <p className="font-semibold">{service.price}</p>
                              <p className="mt-1 opacity-70">{service.duration}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {step === 2 && (
                <motion.section
                  key="step-2"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl gold-gradient">
                      <UserRound size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        Step 2
                      </p>
                      <h2 className="text-2xl font-semibold">Scegli l’operatore</h2>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {staffMembers.map((member) => {
                      const active = selectedStaff === member.id;

                      return (
                        <button
                          key={member.id}
                          type="button"
                          onClick={() => setSelectedStaff(member.id)}
                          className={`overflow-hidden rounded-[24px] border text-left transition ${
                            active
                              ? "border-black bg-black text-white"
                              : "border-black/10 bg-white hover:bg-black/5"
                          }`}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-52 w-full object-cover"
                          />

                          <div className="p-5">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="mt-1 text-sm opacity-75">{member.role}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {step === 3 && (
                <motion.section
                  key="step-3"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl gold-gradient">
                      <CalendarDays size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        Step 3
                      </p>
                      <h2 className="text-2xl font-semibold">Scegli la data</h2>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {dates.map((date) => {
                      const active = selectedDate === date;

                      return (
                        <button
                          key={date}
                          type="button"
                          onClick={() => setSelectedDate(date)}
                          className={`rounded-[24px] border p-5 text-left transition ${
                            active
                              ? "border-black bg-black text-white"
                              : "border-black/10 bg-white hover:bg-black/5"
                          }`}
                        >
                          <p className="text-sm uppercase tracking-[0.15em] opacity-70">
                            Disponibile
                          </p>
                          <p className="mt-2 text-lg font-semibold">
                            {formatDate(date)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {step === 4 && (
                <motion.section
                  key="step-4"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl gold-gradient">
                      <Clock3 size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        Step 4
                      </p>
                      <h2 className="text-2xl font-semibold">Scegli l’orario</h2>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {times.map((time) => {
                      const active = selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`rounded-[24px] border p-5 text-left transition ${
                            active
                              ? "border-black bg-black text-white"
                              : "border-black/10 bg-white hover:bg-black/5"
                          }`}
                        >
                          <p className="text-sm uppercase tracking-[0.15em] opacity-70">
                            Slot
                          </p>
                          <p className="mt-2 text-lg font-semibold">{time}</p>
                        </button>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {step === 5 && (
                <motion.section
                  key="step-5"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl gold-gradient">
                      <UserRound size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        Step 5
                      </p>
                      <h2 className="text-2xl font-semibold">Inserisci i tuoi dati</h2>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-black/70">
                        Nome e cognome
                      </label>
                      <input
                        type="text"
                        value={customer.name}
                        onChange={(e) =>
                          setCustomer({ ...customer, name: e.target.value })
                        }
                        placeholder="Il tuo nome"
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-black/25"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-black/70">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        value={customer.phone}
                        onChange={(e) =>
                          setCustomer({ ...customer, phone: e.target.value })
                        }
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
                        value={customer.email}
                        onChange={(e) =>
                          setCustomer({ ...customer, email: e.target.value })
                        }
                        placeholder="nome@email.it"
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-black/25"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-black/70">
                        Note
                      </label>
                      <textarea
                        rows="5"
                        value={customer.notes}
                        onChange={(e) =>
                          setCustomer({ ...customer, notes: e.target.value })
                        }
                        placeholder="Scrivi eventuali preferenze o richieste..."
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-black/25"
                      />
                    </div>
                  </div>
                </motion.section>
              )}

              {step === 6 && (
                <motion.section
                  key="step-6"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl gold-gradient">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        Step 6
                      </p>
                      <h2 className="text-2xl font-semibold">Controlla e conferma</h2>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-black/10 bg-white p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <InfoRow label="Servizio" value={selectedServiceData?.name} />
                      <InfoRow label="Operatore" value={selectedStaffData?.name} />
                      <InfoRow label="Data" value={formatDate(selectedDate)} />
                      <InfoRow label="Orario" value={selectedTime} />
                      <InfoRow label="Telefono" value={customer.phone} />
                      <InfoRow label="Email" value={customer.email} />
                      <div className="md:col-span-2">
                        <p className="text-sm text-black/45">Note</p>
                        <p className="mt-1 font-medium text-black">
                          {customer.notes || "-"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {confirmed && (
                      <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-6 rounded-[28px] border border-green-200 bg-green-50 p-5"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5" size={20} />
                          <div>
                            <p className="font-semibold">Prenotazione demo confermata</p>
                            <p className="mt-1 text-sm text-black/70">
                              Questa è una demo frontend: il flusso è pronto da mostrare
                              e poi collegare a backend o WhatsApp.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.section>
              )}
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`rounded-full px-5 py-3 font-semibold transition ${
                  step === 1
                    ? "cursor-not-allowed bg-black/5 text-black/30"
                    : "bg-white shadow-sm hover:-translate-y-0.5"
                }`}
              >
                Indietro
              </button>

              <div className="flex gap-3">
                {step < 6 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (step === 1 && !canGoStep2) ||
                      (step === 2 && !canGoStep3) ||
                      (step === 3 && !canGoStep4) ||
                      (step === 4 && !canGoStep5) ||
                      (step === 5 && !canGoStep6)
                    }
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${
                      (step === 1 && !canGoStep2) ||
                      (step === 2 && !canGoStep3) ||
                      (step === 3 && !canGoStep4) ||
                      (step === 4 && !canGoStep5) ||
                      (step === 5 && !canGoStep6)
                        ? "cursor-not-allowed bg-black/10 text-black/35"
                        : "btn-dark"
                    }`}
                  >
                    Continua
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="btn-gold"
                  >
                    Conferma prenotazione
                  </button>
                )}
              </div>
            </div>
          </div>

          <aside className="card-soft h-fit rounded-[32px] p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-black/45">
              Riepilogo
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Il tuo appuntamento
            </h3>

            <div className="mt-6 space-y-5">
              <SummaryCard
                label="Servizio"
                value={selectedServiceData?.name || "-"}
                extra={
                  selectedServiceData
                    ? `${selectedServiceData.duration} • ${selectedServiceData.price}`
                    : ""
                }
              />

              <SummaryCard
                label="Operatore"
                value={selectedStaffData?.name || "-"}
                extra={selectedStaffData?.role || ""}
              />

              <SummaryCard
                label="Data"
                value={selectedDate ? formatDate(selectedDate) : "-"}
              />

              <SummaryCard
                label="Orario"
                value={selectedTime || "-"}
              />
            </div>

            <div className="my-8 border-t border-black/10" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-black/60">Servizio</span>
                <span className="font-medium">
                  {selectedServiceData?.price || "-"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-black/60">Commissioni</span>
                <span className="font-medium">0€</span>
              </div>
              <div className="flex items-center justify-between text-base">
                <span className="font-semibold">Totale</span>
                <span className="font-semibold">
                  {selectedServiceData?.price || "-"}
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] gold-gradient p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-black/55">
                Nota
              </p>
              <p className="mt-2 text-sm leading-7 text-black/75">
                Questa pagina è già perfetta per demo commerciali. In seguito si
                può collegare a WhatsApp, email o backend reale.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}

function InfoRow({ label, value }) {
  return (
    <div>
      <p className="text-sm text-black/45">{label}</p>
      <p className="mt-1 font-medium text-black">{value || "-"}</p>
    </div>
  );
}

function SummaryCard({ label, value, extra }) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-white p-4">
      <p className="text-sm text-black/45">{label}</p>
      <p className="mt-1 text-base font-semibold text-black">{value}</p>
      {extra ? <p className="mt-1 text-sm text-black/55">{extra}</p> : null}
    </div>
  );
}