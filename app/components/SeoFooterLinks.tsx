import Link from "next/link";
import { industryLinks, solutionLinks } from "../lib/seoNavigation";

export function SeoFooterLinks() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 border-b border-current/15 pb-8 mb-8 sm:grid-cols-2">
      {[{ title: "Industries", links: industryLinks }, { title: "Solutions", links: solutionLinks }].map((group) => (
        <nav key={group.title} aria-label={group.title + " footer"}>
          <h2 className="mb-3 text-sm font-semibold">{group.title}</h2>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            {group.links.map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:underline underline-offset-4">{link.label}</Link></li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}
