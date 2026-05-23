"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  currentBookingTool: string;
  monthlyBookingVolume: string;
  website: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  businessName: "",
  businessType: "",
  currentBookingTool: "",
  monthlyBookingVolume: "",
  website: "",
  notes: "",
};

const businessTypes = [
  "Boat or watersports rental",
  "Tour or guided experience",
  "Equipment rental",
  "Event or party venue",
  "Other rental/experience business",
];

const volumeOptions = [
  "Under 10 bookings/month",
  "10 to 50 bookings per month",
  "51 to 100 bookings per month",
  "101 to 300 bookings per month",
  "More than 300 bookings per month",
];

export function BetaRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: "" }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    setErrors({});

    try {
      const response = await fetch("/api/beta-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors ?? {});
        throw new Error(result.error ?? "Please check the form and try again.");
      }

      posthog.capture("beta_access_request_submitted", {
        business_type: form.businessType,
        monthly_booking_volume: form.monthlyBookingVolume,
      });
      setStatus("success");
      setForm(initialState);
    } catch (error) {
      posthog.capture("beta_access_request_failed", {
        reason: error instanceof Error ? error.message : "unknown",
      });
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950">
        <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold">Beta request received</h2>
        <p className="mt-2 text-sm leading-relaxed text-emerald-800">
          Thanks. We will review your business and follow up with onboarding next steps by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-xl sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" error={errors.name}>
          <input value={form.name} onChange={(event) => update("name", event.target.value)} className="form-input" autoComplete="name" />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input value={form.email} onChange={(event) => update("email", event.target.value)} className="form-input" autoComplete="email" inputMode="email" />
        </Field>
        <Field label="Business name" error={errors.businessName}>
          <input value={form.businessName} onChange={(event) => update("businessName", event.target.value)} className="form-input" autoComplete="organization" />
        </Field>
        <Field label="Business type" error={errors.businessType}>
          <select value={form.businessType} onChange={(event) => update("businessType", event.target.value)} className="form-input">
            <option value="">Choose one</option>
            {businessTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </Field>
        <Field label="Current booking tool">
          <input value={form.currentBookingTool} onChange={(event) => update("currentBookingTool", event.target.value)} className="form-input" placeholder="Phone, spreadsheets, FareHarbor, Rezdy..." />
        </Field>
        <Field label="Monthly booking volume">
          <select value={form.monthlyBookingVolume} onChange={(event) => update("monthlyBookingVolume", event.target.value)} className="form-input">
            <option value="">Choose one</option>
            {volumeOptions.map((volume) => <option key={volume}>{volume}</option>)}
          </select>
        </Field>
        <Field label="Website or social link" error={errors.website} className="sm:col-span-2">
          <input value={form.website} onChange={(event) => update("website", event.target.value)} className="form-input" placeholder="https://..." />
        </Field>
        <Field label="Anything we should know before your first setup session?" error={errors.notes} className="sm:col-span-2">
          <textarea value={form.notes} onChange={(event) => update("notes", event.target.value)} className="form-input min-h-28 resize-y" placeholder="Tell us what you rent, how bookings work today, and what the first booking flow should support." />
        </Field>
      </div>

      {status === "error" && message && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-navy shadow-lg shadow-amber/20 transition-colors hover:bg-amber-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        Submit my application
        {status !== "submitting" ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
        We review every application and reply within one business day. Limited spots.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-navy">{label}</span>
      <span className="mt-1 block">{children}</span>
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
