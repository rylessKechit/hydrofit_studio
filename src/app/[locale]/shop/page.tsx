import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/lib/i18n-config";
import PageContent from "./PageContent";

const META = {
  fr: {
    title: "Boutique",
    description:
      "Gourdes, serviettes, packs jus détox et cartes cadeaux Hydrafit. Le wellness à emporter.",
  },
  en: {
    title: "Shop",
    description:
      "Water bottles, towels, detox juice packs and Hydrafit gift cards. Wellness to go.",
  },
  ar: {
    title: "المتجر",
    description:
      "زجاجات مياه ومناشف وعصائر ديتوكس وبطاقات هدايا هايدرافيت.",
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
      canonical: `${SITE_URL}/${l}/shop`,
      languages: { fr: `${SITE_URL}/fr/shop`, en: `${SITE_URL}/en/shop`, ar: `${SITE_URL}/ar/shop` },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${l}/shop`,
    },
  };
}

export default function ShopPage() {
  return <PageContent />;
}
