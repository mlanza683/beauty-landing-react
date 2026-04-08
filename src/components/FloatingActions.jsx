import { Link } from "react-router-dom";
import { MessageCircle, CalendarDays } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/391234567890"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-white shadow-[0_14px_28px_rgba(225,29,72,0.28)] transition hover:-translate-y-1 hover:bg-[var(--accent-dark)]"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>

   <Link
  to="/booking"
  className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:bg-gray-800"
>
  <CalendarDays size={18} color="white" />
  <span>Prenota</span>
</Link>
</Link>
    </div>
  );
}
