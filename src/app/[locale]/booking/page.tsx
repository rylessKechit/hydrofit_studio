import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/lib/i18n-config";
import PageContent from "./PageContent";

const META = {
  fr: {
    title: "Réserver un Cours",
    description:
      "Réservez votre séance d'aquabike, aqua boxing, aqua yoga ou aqua rebound à Dubai. Consultez le planning et choisissez votre créneau.",
  },
  en: {
    title: "Book a Class",
    description:
      "Book your aquabike, aqua boxing, aqua yoga or aqua rebound session in Dubai. Check the schedule and pick your slot.",
  },
  ar: {
    title: "احجزي حصة",
    description:
      "احجزي حصة أكوابايك أو أكوا بوكسينغ أو أكوا يوغا أو أكوا ريباوند في دبي.",
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
      canonical: `${SITE_URL}/${l}/booking`,
      languages: {
        fr: `${SITE_URL}/fr/booking`,
        en: `${SITE_URL}/en/booking`,
        ar: `${SITE_URL}/ar/booking`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${l}/booking`,
    },
  };
}

export default function BookingPage() {
  return <PageContent />;
}
