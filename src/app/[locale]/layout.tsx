import type { Metadata } from "next";
import { LOCALES, SITE_URL, type Locale } from "@/lib/i18n-config";
import { LocaleProvider } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const META = {
  fr: {
    title: {
      default: "Hydrafit Studio | Expérience Aquabike Premium – Dubai",
      template: "%s | Hydrafit Studio Dubai",
    },
    description:
      "Hydrafit Studio est l'expérience aquabike et wellness aquatique premium de Dubai. Deux studios : Palm Jumeirah & Business Bay. Réservez votre expérience bien-être dès aujourd'hui.",
    keywords: [
      "aquabike dubai",
      "aquacycling dubai",
      "fitness aquatique dubai",
      "vélo aquatique dubai",
      "aquabike palm jumeirah",
      "aquabike business bay",
      "detox bar dubai",
      "lipœdème aquabike",
      "jambes lourdes exercice",
      "bien-être dubai",
      "wellness studio dubai",
    ],
    ogLocale: "fr_FR",
    ogTitle: "Hydrafit Studio | Expérience Aquabike Premium – Dubai",
    ogDescription:
      "Plus qu'un entraînement. Une expérience. Aquabike, Detox Bar, Communauté & Événements à Dubai.",
  },
  en: {
    title: {
      default: "Hydrafit Studio | Premium Aquabike Experience – Dubai",
      template: "%s | Hydrafit Studio Dubai",
    },
    description:
      "Hydrafit Studio is Dubai's premier aquabike and aquatic wellness experience. Two locations: Palm Jumeirah & Business Bay. Book your premium wellness experience today.",
    keywords: [
      "aquabike dubai",
      "aquacycling dubai",
      "aquatic fitness dubai",
      "premium fitness dubai",
      "aquabike palm jumeirah",
      "aquabike business bay",
      "detox bar dubai",
      "lipoedema aquabike",
      "heavy legs exercise",
      "wellness dubai",
      "wellness studio dubai",
    ],
    ogLocale: "en_AE",
    ogTitle: "Hydrafit Studio | Premium Aquabike Experience – Dubai",
    ogDescription:
      "More than a workout. An experience. Aquabike, Detox Bar, Community & Events in Dubai.",
  },
  ar: {
    title: {
      default: "هايدرافيت ستوديو | تجربة أكوابايك فاخرة – دبي",
      template: "%s | هايدرافيت ستوديو دبي",
    },
    description:
      "هايدرافيت ستوديو هو تجربة الأكوابايك والعافية المائية الفاخرة في دبي. موقعان: نخلة جميرا والخليج التجاري. احجز تجربتك الصحية اليوم.",
    keywords: [
      "أكوابايك دبي",
      "دراجة مائية دبي",
      "لياقة مائية دبي",
      "أكوابايك نخلة جميرا",
      "أكوابايك الخليج التجاري",
      "بار ديتوكس دبي",
      "الوذمة الشحمية",
      "ثقل الساقين",
      "عافية دبي",
      "استوديو عافية دبي",
    ],
    ogLocale: "ar_AE",
    ogTitle: "هايدرافيت ستوديو | تجربة أكوابايك فاخرة – دبي",
    ogDescription:
      "أكثر من مجرد تمرين. تجربة. أكوابايك، بار ديتوكس، مجتمع وفعاليات في دبي.",
  },
} as const;

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

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
    keywords: [...m.keywords],
    alternates: {
      canonical: `${SITE_URL}/${l}`,
      languages: {
        fr: `${SITE_URL}/fr`,
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
      },
    },
    openGraph: {
      type: "website",
      locale: m.ogLocale,
      url: `${SITE_URL}/${l}`,
      siteName: "Hydrafit Studio",
      title: m.ogTitle,
      description: m.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// JSON-LD Structured Data
function StructuredData({ locale }: { locale: Locale }) {
  const descriptions: Record<Locale, string> = {
    fr: "Studio aquabike et bien-être premium à Dubai avec deux emplacements.",
    en: "Premium aquabike and wellness studio in Dubai with two locations.",
    ar: "استوديو أكوابايك وعافية فاخر في دبي مع موقعين.",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Hydrafit Studio",
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/icon`,
    image: `${SITE_URL}/${locale}/opengraph-image`,
    description: descriptions[locale],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Nakheel Mall, Level 2",
        addressLocality: "Palm Jumeirah, Dubai",
        addressCountry: "AE",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Bay Square, Building 13",
        addressLocality: "Business Bay, Dubai",
        addressCountry: "AE",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "AED 150 – 1800",
    sameAs: [
      "https://www.instagram.com/hydrafitstudio",
      "https://www.facebook.com/hydrafitstudio",
      "https://www.tiktok.com/@hydrafitstudio",
      "https://www.youtube.com/@hydrafitstudio",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = (locale === "en" ? "en" : locale === "ar" ? "ar" : "fr") as Locale;

  return (
    <LocaleProvider locale={l}>
      <StructuredData locale={l} />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </LocaleProvider>
  );
}
