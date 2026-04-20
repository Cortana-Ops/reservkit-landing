import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="h-7 w-7 rounded-lg bg-slate-900 flex items-center justify-center">
            <CalendarDays className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-slate-700">ReservKit</span>
        </Link>
      </header>
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms of Service</h1>
        <p className="text-slate-600 mb-4">Last updated: April 2026</p>
        <p className="text-slate-600 leading-relaxed mb-4">
          By using ReservKit, you agree to use the platform in accordance with applicable laws and these terms. You are responsible for the content you publish and the bookings you manage through the platform.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          ReservKit provides software as a service and is not responsible for the activities, services, or obligations of operators using the platform.
        </p>
        <p className="text-slate-600 leading-relaxed">
          For questions, contact us at <a href="mailto:hello@reservkit.com" className="text-slate-900 underline">hello@reservkit.com</a>.
        </p>
      </main>
    </div>
  );
}
