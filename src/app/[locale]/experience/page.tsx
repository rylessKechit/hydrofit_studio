import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/lib/i18n-config";
import PageContent from "./PageContent";

const META = {
  fr: {
    title: "L'Exp\u00e9rience Hydrafit — Studios, Detox Bar, Coachs & FAQ",
    description:
      "D\u00e9couvrez l'exp\u00e9rience Hydrafit \u00e0 Dubai : parcours aquabike, detox bar bio, nos coachs certifi\u00e9s, studios premium et FAQ. Tout pour votre bien-\u00eatre aquatique.",
  },
  en: {
    title: "The Hydrafit Experience — Studios, Detox Bar, Coaches & FAQ",
    description:
      "Discover the full Hydrafit experience in Dubai: aquabike journey, organic detox bar, certified coaches, premium studios and FAQ. Everything for your aquatic wellness.",
  },
  ar: {
    title: "تجربة هايدرافيت — الاستوديوهات، بار الديتوكس، المدربات والأسئلة الشائعة",
    description:
      "اكتشفي تجربة هايدرافيت الكاملة في دبي: رحلة الأكوابايك، بار الديتوكس العضوي، المدربات المعتمدات، الاستوديوهات الفاخرة والأسئلة الشائعة.",
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
      canonical: `${SITE_URL}/${l}/experience`,
      languages: {
        fr: `${SITE_URL}/fr/experience`,
        en: `${SITE_URL}/en/experience`,
        ar: `${SITE_URL}/ar/experience`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${l}/experience`,
    },
  };
}

export default function ExperiencePage() {
  return <PageContent />;
}
