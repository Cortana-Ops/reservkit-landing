export function UnverifiedCheckoutNote() {
  return (
    <div className="rounded-xl border border-amber/40 bg-amber/10 px-4 py-3 text-sm leading-relaxed text-slate-700">
      <strong className="text-navy">Checkout is not verified.</strong> Checkout, refunds, and payouts on this page
      are not verified working behavior. A real test payment has not been run. Treat those steps as the intended
      flow until that charge has been completed.
    </div>
  );
}
