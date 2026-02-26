import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/lib/i18n-config";
import PageContent from "./PageContent";

const META = {
  fr: {
    title: "Mentions Légales",
    description:
      "Mentions légales et conditions d'utilisation de Hydrafit Studio Dubai.",
  },
  en: {
    title: "Legal Notice",
    description:
      "Legal notice and terms of use for Hydrafit Studio Dubai.",
  },
  ar: {
    title: "إشعار قانوني",
    description:
      "الشروط والأحكام وسياسة الخصوصية لهايدرافيت ستوديو دبي.",
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
      canonical: `${SITE_URL}/${l}/legal`,
      languages: {
        fr: `${SITE_URL}/fr/legal`,
        en: `${SITE_URL}/en/legal`,
        ar: `${SITE_URL}/ar/legal`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${l}/legal`,
    },
  };
}

export default function LegalPage() {
  return <PageContent />;
}
