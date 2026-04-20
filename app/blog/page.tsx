import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { ArrowRight, Rss, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides, tips, and stories for rental operators and experience businesses using ReservKit.",
  alternates: { canonical: "https://reservkit.com/blog" },
};

const articles = [
  {
    id: "first-online-booking",
    tag: "Getting Started",
    date: "April 15, 2026",
    readTime: "5 min read",
    title: "How to take your first online booking with ReservKit",
    intro: "Setting up online bookings for your rental or experience business doesn't have to take a week. Here's how to go from zero to live in under an hour.",
    content: [
      "Most rental operators we talk to spent years taking bookings the hard way — phone calls, DMs, a Google calendar, Venmo requests, and a spreadsheet to try to hold it all together. When something got double-booked or a waiver went unsigned, it caused real problems. ReservKit was built to replace all of that with one system.",
      "The first step is connecting your Stripe account. This is what unlocks online payments — every booking goes straight to your Stripe payout, minus a small platform fee. On the free plan that fee is 4%. If you're processing more volume, the Starter plan ($79/month) drops it to 2%. Go to Settings → Payments and follow the Stripe Connect flow. It takes about 5 minutes.",
      "Next, create your first activity. An activity is a bookable product — \"2-Hour Kayak Rental,\" \"Sunset Paddleboard Tour,\" whatever you offer. Give it a name, description, duration, and price. Under the Availability tab, set the days and times you're open. ReservKit will auto-generate available slots based on your schedule and the activity duration.",
      "Once your activity is live, your booking page is already live at app.reservkit.com/book/[your-org-slug]. Share that URL anywhere — your website, Instagram bio, Google Business profile, in your email signature. Customers pick a time, add guests, pay, and get an automatic confirmation email.",
      "One thing operators tell us often: the first time you see a booking come in while you're out on the water, it changes how you think about your business. You stop being a scheduling service and start focusing on delivering a great experience. That's the whole point.",
      "If you haven't started yet, create your free account and you'll have a 14-day Growth trial — all features unlocked. No credit card required.",
    ],
    relatedLinks: [
      { href: "/docs/getting-started", label: "Full getting started guide" },
      { href: "/docs/payments", label: "Payments & Stripe setup" },
    ],
  },
  {
    id: "fareharbor-vs-reservkit",
    tag: "Comparison",
    date: "April 10, 2026",
    readTime: "7 min read",
    title: "FareHarbor vs ReservKit: an honest comparison",
    intro: "FareHarbor is the dominant player in tour and rental booking software — but it comes with tradeoffs that hurt small operators. Here's how the two platforms compare.",
    content: [
      "FareHarbor has been around since 2013 and has a massive market share in the tours and activities space. They've built a comprehensive platform and have deep integrations with Google Things to Do and other distribution channels. If you're a large operator processing millions in annual revenue with a dedicated ops team, FareHarbor has tools you'll use.",
      "For everyone else, the experience is different. FareHarbor's pricing is opaque — they don't publish their fees publicly, and rates are negotiated. Most operators report fees in the 6%+ range. The platform was designed for enterprise, so the setup process is long and the interface shows its age. Getting access to your own data requires support tickets. The contract terms have historically been a pain point.",
      "ReservKit was designed for a different customer: the independent rental operator or experience business that wants professional-grade software without the enterprise complexity or pricing. The full fee structure is published openly: 4% on the free plan, 2% on Starter ($79/mo), 1% on Growth ($149/mo), 0.5% on Pro ($249/mo).",
      "The core difference in philosophy: FareHarbor makes money by taking a cut of your distribution. ReservKit makes money through subscriptions. That means ReservKit has no incentive to push bookings toward channels that take an extra cut — your direct booking link is always the default.",
      "Where FareHarbor still wins: distribution network. If you want your tours listed on Viator, GetYourGuide, and Google Things to Do automatically, FareHarbor's OTA integrations are more mature. ReservKit is building toward this but it's not there yet.",
      "Where ReservKit wins: price transparency, mobile experience, setup speed, and the booking widget embed. Most operators are live and taking payments within an hour of signup. No sales call required.",
      "If you're currently on FareHarbor and unhappy with fees or the interface, it's worth running a trial of ReservKit side-by-side. Your free trial unlocks every feature — you don't need to make a decision before you've seen the full picture.",
    ],
    relatedLinks: [
      { href: "/fareharbor-alternative", label: "Full FareHarbor comparison page" },
      { href: "/#pricing", label: "ReservKit pricing" },
    ],
  },
  {
    id: "platform-fee-money",
    tag: "Business",
    date: "April 3, 2026",
    readTime: "4 min read",
    title: "5 ways rental operators lose money on platform fees",
    intro: "Platform fees are usually presented as a small percentage — but the actual dollar impact on your business over a season is significant. Here's how to think about it.",
    content: [
      "Let's say you run kayak rentals and gross $120,000 in a season. On a 6% platform fee, that's $7,200 out of your revenue — before accounting for Stripe's own processing fee on top. That's a real number. Enough to cover a part-time employee for a month, a new kayak, or marketing budget for the following season.",
      "The first way operators lose money is by not knowing their actual fee rate. Many platforms — including some major ones in the tours space — don't publish their rates publicly. They negotiate per-operator. If you signed up a few years ago, you may be on a higher rate than newer customers. It's worth asking.",
      "The second way: paying a per-transaction platform fee on deposits. If you collect a $50 deposit on a $200 trip, some platforms charge the full booking fee on $200 at the time of the deposit. You haven't collected $200 yet, but you're paying fees on it. Look at how your platform calculates the fee basis.",
      "The third way: paying platform fees on tips. Tips are gratuity — they shouldn't carry a platform markup. Some systems route tips through the same transaction fee calculation. ReservKit applies no platform fee on tips.",
      "The fourth way: not upgrading when you should. If you're on a per-transaction fee model and your volume justifies a flat monthly plan, the math usually favors upgrading sooner than operators expect. At $5,000/month gross revenue and a 4% fee, you're paying $200/month in fees. The ReservKit Starter plan ($79/month with a 2% fee) would cost $79 + $100 = $179. Even at that volume, upgrading saves money.",
      "The fifth way: transaction fees on refunds. Most platforms keep their fee when you issue a refund to a customer. A no-show or last-minute cancellation costs you the customer's spend AND your platform fee. Build refund costs into your cancellation policy math — not just the face value of the booking.",
      "None of this is meant to scare you — it's meant to help you make informed decisions. If you're processing enough volume, the right platform choice can realistically save you thousands per season.",
    ],
    relatedLinks: [
      { href: "/docs/payments", label: "Payments & fee documentation" },
      { href: "/#pricing", label: "ReservKit pricing tiers" },
    ],
  },
];

export default function Blog() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-10 w-10 rounded-xl bg-[var(--color-surface)] flex items-center justify-center">
            <Rss className="h-5 w-5 text-navy" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-navy">ReservKit Blog</h1>
            <p className="text-sm text-slate-500 mt-0.5">Guides and insights for rental operators</p>
          </div>
        </div>

        <div className="space-y-16">
          {articles.map((article, index) => (
            <article key={article.id} id={article.id} className={index > 0 ? "border-t border-[var(--color-border)] pt-16" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber">{article.tag}</span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {article.readTime}
                </div>
                <span className="text-xs text-slate-400">{article.date}</span>
              </div>

              <h2 className="text-2xl font-bold text-navy mb-3">{article.title}</h2>
              <p className="text-base text-slate-700 leading-relaxed font-medium mb-6">{article.intro}</p>

              <div className="space-y-4">
                {article.content.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--color-border)] flex flex-wrap gap-4">
                {article.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:underline"
                  >
                    {link.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-navy p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to try ReservKit?</h2>
          <p className="text-slate-400 text-sm mb-5">
            Free plan — 50 bookings/month, 4% fee. 14-day Growth trial included.
          </p>
          <Link
            href="https://app.reservkit.com/login?signup=true"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-2.5 text-sm font-semibold text-navy hover:bg-amber-dark transition-colors"
          >
            Start for free <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
