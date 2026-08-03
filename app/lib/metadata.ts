import type { Metadata } from "next";

const siteUrl = "https://reservkit.com";
const siteName = "ReservKit";
const twitterImage = `${siteUrl}/opengraph-image.png`;

interface MarketingMetadataInput {
  title: string;
  description: string;
  path: `/${string}`;
  keywords?: string[];
}

function socialTitle(title: string) {
  return title.includes(siteName) ? title : `${title} — ${siteName}`;
}

export function createMarketingMetadata({
  title,
  description,
  path,
  keywords,
}: MarketingMetadataInput): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const sharedTitle = socialTitle(title);

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: sharedTitle,
      description,
      url: canonical,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: sharedTitle,
      description,
      images: [twitterImage],
    },
  };
}
