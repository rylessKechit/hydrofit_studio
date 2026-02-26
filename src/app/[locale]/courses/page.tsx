import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/lib/i18n-config";
import PageContent from "./PageContent";

const META = {
  fr: {
    title: "Nos Cours",
    description:
      "Aquabike, Aqua Boxing, Aqua Rebound, Aqua Yoga \u2014 d\u00e9couvrez nos cours de fitness aquatique \u00e0 Dubai.",
  },
  en: {
    title: "Our Classes",
    description:
      "Aquabike, Aqua Boxing, Aqua Rebound, Aqua Yoga \u2014 discover our aquatic fitness classes in Dubai.",
  },
  ar: {
    title: "دروسنا",
    description:
      "أكوابايك، أكوا بوكسينغ، أكوا ريباوند، أكوا يوغا — اكتشفي دروس اللياقة المائية في دبي.",
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
      canonical: `${SITE_URL}/${l}/courses`,
      languages: {
        fr: `${SITE_URL}/fr/courses`,
        en: `${SITE_URL}/en/courses`,
        ar: `${SITE_URL}/ar/courses`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${l}/courses`,
    },
  };
}

export default function CoursesPage() {
  return <PageContent />;
}
