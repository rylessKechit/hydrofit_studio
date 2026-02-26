import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/lib/i18n-config";
import PageContent from "./PageContent";

const META = {
  fr: {
    title: "Événements",
    description:
      "Soirées exclusives, sessions sunrise et ateliers bien-être. Rejoignez nos événements communautaires à Dubai.",
  },
  en: {
    title: "Events",
    description:
      "Exclusive ladies nights, sunrise sessions and wellness workshops. Join our community events in Dubai.",
  },
  ar: {
    title: "الفعاليات",
    description:
      "ورش عمل صحية، ليالي السيدات وفعاليات المجتمع في هايدرافيت دبي.",
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
      canonical: `${SITE_URL}/${l}/events`,
      languages: { fr: `${SITE_URL}/fr/events`, en: `${SITE_URL}/en/events`, ar: `${SITE_URL}/ar/events` },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${l}/events`,
    },
  };
}

export default function EventsPage() {
  return <PageContent />;
}
