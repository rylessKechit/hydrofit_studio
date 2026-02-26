import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/lib/i18n-config";
import PageContent from "./PageContent";

const META = {
  fr: {
    title: "Blog & Bien-Être",
    description:
      "Articles, conseils et guides sur l'aquabike, la nutrition, le lipœdème et le mode de vie bien-être à Dubai.",
  },
  en: {
    title: "Blog & Wellness",
    description:
      "Articles, tips and guides on aquabike, nutrition, lipoedema and the wellness lifestyle in Dubai.",
  },
  ar: {
    title: "المدوّنة",
    description:
      "مقالات عن العافية والأكوابايك والتغذية وأسلوب الحياة في دبي.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (locale === "en" ? "en" : locale === "ar" ? "ar" : "fr") as Locale;
  const m = META[l];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${SITE_URL}/${l}/blog`,
      languages: { fr: `${SITE_URL}/fr/blog`, en: `${SITE_URL}/en/blog`, ar: `${SITE_URL}/ar/blog` },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${l}/blog`,
    },
  };
}

export default function BlogPage() {
  return <PageContent />;
}
