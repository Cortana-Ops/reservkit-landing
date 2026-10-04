import type { ReactNode } from "react";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";

type RelatedGuide = {
  href: string;
  title: string;
  description: string;
};

type OperatorGuideProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
  related?: RelatedGuide[];
};

export function OperatorGuide({ title, description, path, children, related = [] }: OperatorGuideProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ReservKit", item: "https://reservkit.com" },
      { "@type": "ListItem", position: 2, name: "Documentation", item: "https://reservkit.com/docs" },
      { "@type": "ListItem", position: 3, name: title, item: `https://reservkit.com${path}` },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/docs" className="transition-colors hover:text-navy">Documentation</Link>
          <span>/</span>
          <span className="font-medium text-navy">{title}</span>
        </nav>

        <header className="mb-12">
          <h1 className="mb-3 text-3xl font-bold text-navy">{title}</h1>
          <p className="text-lg leading-relaxed text-slate-600">{description}</p>
        </header>

        <div className="space-y-12">{children}</div>

        <footer className="mt-16 border-t border-[var(--color-border)] pt-10">
          {related.length > 0 ? (
            <>
              <h2 className="mb-5 text-lg font-bold text-navy">Related guides</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group rounded-xl border border-[var(--color-border)] p-5 transition-all hover:border-amber/40 hover:shadow-sm"
                  >
                    <p className="mb-1 font-semibold text-navy transition-colors group-hover:text-amber">
                      {guide.title} &rarr;
                    </p>
                    <p className="text-sm text-slate-500">{guide.description}</p>
                  </Link>
                ))}
              </div>
            </>
          ) : null}
          <div className="mt-6">
            <Link href="/docs" className="text-sm text-slate-500 transition-colors hover:text-navy">
              &larr; Back to all documentation
            </Link>
          </div>
        </footer>
      </main>
    </PageShell>
  );
}

export function GuideSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-navy">{title}</h2>
      <div className="space-y-3 leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3 pl-5">
      {items.map((item, index) => (
        <li key={item} className="list-decimal pl-1">
          <span className="font-medium text-navy">Step {index + 1}.</span> {item}
        </li>
      ))}
    </ol>
  );
}

export function SupportNote({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-4 border-amber bg-amber-light px-4 py-3 text-sm text-slate-700">
      {children}
    </div>
  );
}
