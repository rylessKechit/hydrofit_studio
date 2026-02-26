import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/lib/i18n-config";
import HomeContent from "./HomeContent";

const META = {
  fr: {
    title: "Hydrafit Studio | Expérience Aquabike Premium – Dubai",
    description:
      "Découvrez l'expérience aquabike et wellness la plus exclusive de Dubai. Cours, Detox Bar, Communauté & Événements — tout en un lieu. Palm Jumeirah & Business Bay.",
  },
  en: {
    title: "Hydrafit Studio | Premium Aquabike Experience – Dubai",
    description:
      "Discover Dubai's most exclusive aquatic wellness experience. Classes, Detox Bar, Community & Events — all in one place. Palm Jumeirah & Business Bay.",
  },
  ar: {
    title: "هايدرافيت ستوديو | تجربة أكوابايك فاخرة – دبي",
    description:
      "تجربة الأكوابايك والعافية المائية الفاخرة في دبي. موقعان: نخلة جميرا والخليج التجاري.",
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
      canonical: `${SITE_URL}/${l}`,
      languages: { fr: `${SITE_URL}/fr`, en: `${SITE_URL}/en`, ar: `${SITE_URL}/ar` },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${l}`,
    },
  };
}

export default function HomePage() {
  return <HomeContent />;
}
