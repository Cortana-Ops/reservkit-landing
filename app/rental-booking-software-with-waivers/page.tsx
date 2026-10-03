import { SeoProductPage, type SeoProductPageConfig } from "../components/SeoProductPage";
import { createMarketingMetadata } from "../lib/metadata";

export const metadata = createMarketingMetadata({
  title: "Rental Booking Software with Digital Waivers",
  description: "Rental booking software that connects required digital waiver evidence, guest signer status, Stripe checkout, and day-of check-in to each booking.",
  keywords: ["rental booking software with waivers", "digital waiver booking system", "rental waiver software"],
  path: "/rental-booking-software-with-waivers",
});

const config: SeoProductPageConfig = {
  eventKey: "waiver_booking",
  eyebrow: "Bookings with digital waivers",
  title: "Rental booking software that keeps waiver evidence with the booking",
  intro: "Assign required waiver templates by activity, collect guest signer evidence, and give staff a clear view of which bookings are ready before customers arrive.",
  image: { src: "/product-clearwake-light-waiver-status.png", alt: "ReservKit Waiver Templates settings with configurable signer fields" },
  bestFitTitle: "A fit when your operation needs",
  bestFit: ["One or more required waiver templates by activity", "Signer records for individual guests", "Verification and signature evidence tied to the booking", "Day-of visibility into missing waiver steps"],
  problemTitle: "A separate waiver tool leaves staff reconciling two lists",
  problemBody: "When booking records and waiver records live apart, staff have to match names under time pressure. ReservKit associates waiver requirements and signer evidence with the activity booking so the operator can review readiness in context.",
  workflowTitle: "Keep the waiver path connected from setup through check-in",
  workflow: [
    { title: "Assign templates", body: "Create waiver templates and attach the required set to the activities where they apply." },
    { title: "Collect signer evidence", body: "Guests verify by email and complete required signatures, with evidence recorded against the booking." },
    { title: "Review readiness", body: "Operators and permitted staff can see signer status and identify bookings that still need attention." },
  ],
  featureTitle: "Current digital waiver capabilities",
  features: ["Multiple waiver templates per activity", "Per-guest signer records", "Email verification", "Signature evidence and acceptance timestamps", "IP and device context", "Exact accepted waiver text retained with evidence", "Shareable post-booking waiver hub", "Browser print and save-as-PDF workflow"],
  proofTitle: "Test the waiver as a guest, not only as an administrator",
  proofBody: "The launch test should include a real activity, a customer booking, the guest waiver hub, signer completion, and the operator-side status. That proves the full handoff before customers depend on it.",
  faqs: [
    { title: "Can an activity require more than one waiver?", body: "Yes. Operators can assign one or more waiver templates to an activity when the booking requires multiple agreements." },
    { title: "Does ReservKit store waiver audit details?", body: "Yes. Current evidence includes signer identity details, verification and acceptance timestamps, signature evidence, IP and device context, and the accepted waiver text." },
    { title: "Can staff see whether guests have finished?", body: "Yes. Waiver status is visible with the booking and in day-of workflows for roles that have the appropriate access." },
    { title: "Does ReservKit provide legal advice or waiver language?", body: "No. Operators are responsible for their waiver language and should use qualified legal counsel for their business and jurisdiction." },
  ],
  related: [
    { href: "/docs/waivers", label: "Waiver documentation", description: "Review the current setup and signer workflow in detail." },
    { href: "/boat-rental-software", label: "Boat rental software", description: "See waivers in a dockside rental workflow." },
    { href: "/stripe-booking-software-for-rentals", label: "Stripe booking software", description: "Connect checkout and booking records through Stripe." },
  ],
  ctaTitle: "Test a booking and waiver flow together",
  ctaBody: "Start on Free, then use an eligible plan when your live operation needs the waiver tools.",
};

export default function RentalBookingSoftwareWithWaivers() { return <SeoProductPage config={config} />; }
