"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Mail,
  Camera,
  Flame,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLocale } from "@/lib/i18n";
import { getTranslatedData } from "@/lib/constants";
import { brandify } from "@/lib/brandify";

const eventImages: Record<string, string> = {
  "soiree-femmes-mars": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop",
  "ladies-night-march": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop",
  "session-sunrise-rooftop": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
  "sunrise-session-rooftop": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
  "atelier-wellness-nutrition": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
  "wellness-workshop-nutrition": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
};

const pastEventImages = [
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
];

/* ───────── animation variants ───────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ───────── helpers ───────── */

const localeMap: Record<string, string> = { fr: "fr-FR", en: "en-US", ar: "ar-AE" };

function formatEventDate(dateStr: string, locale: "fr" | "en" | "ar") {
  const date = new Date(dateStr + "T00:00:00");
  const day = date.getDate();
  const intl = localeMap[locale] || "en-US";
  const month = date
    .toLocaleDateString(intl, { month: "short" })
    .toUpperCase();
  const weekday = date.toLocaleDateString(intl, {
    weekday: "long",
  });
  return { day, month, weekday };
}

const text = {
  fr: {
    heroTagline: "Rendez-vous Exclusifs & Expériences",
    heroTitle1: "Événements & ",
    heroTitleAccent: "Communauté",
    heroDesc:
      "Plus que du fitness — Hydrafit est une communauté. Rejoignez nos événements exclusifs, ateliers et sessions spéciales qui rassemblent nos membres.",
    upcomingTitle: "Événements à Venir",
    upcomingSubtitle:
      "Réservez votre place avant qu'il ne soit trop tard. Nos événements affichent toujours complet.",
    almostFull: "Presque Complet",
    fillingFast: "Se Remplit Vite",
    available: "Disponible",
    spotsLeft: "places restantes",
    spotsRemaining: "places restantes",
    price: "Prix",
    registerNow: "S'inscrire",
    exclusivityNotice:
      "Tous les événements sont exclusifs à la communauté Hydrafit.",
    exclusivityHighlight:
      "Les membres bénéficient d'un accès prioritaire et de tarifs spéciaux.",
    howTitle: "Comment ça Marche",
    howSubtitle: "Trois étapes simples pour rejoindre l'expérience.",
    howSteps: [
      {
        step: "01",
        title: "Choisissez Votre Événement",
        text: "Parcourez les événements à venir et trouvez l'expérience qui vous parle.",
      },
      {
        step: "02",
        title: "Réservez Votre Place",
        text: "Inscrivez-vous et payez en ligne. Les places sont limitées et partent vite.",
      },
      {
        step: "03",
        title: "Venez & Brillez",
        text: "Rendez-vous au studio, connectez-vous avec la communauté et profitez de l'instant.",
      },
    ],
    pastTitle: "Événements Passés",
    pastSubtitle:
      "Des moments forts de nos événements. Chaque rencontre est un souvenir.",
    pastEvents: [
      "Soirée de Lancement 2025",
      "Aquabike Pleine Lune",
      "Wellness Ramadan",
      "Summer Splash Party",
      "Community 500",
      "Christmas Glow",
    ],
    viewGallery: "Voir la Galerie",
    newsletterTitle1: "Ne Manquez ",
    newsletterTitleAccent: "Aucun Événement",
    newsletterDesc:
      "Rejoignez notre cercle privilégié et soyez la première informée des événements à venir, ateliers exclusifs et expériences réservées aux membres.",
    emailPlaceholder: "Votre adresse e-mail",
    subscribe: "S'abonner",
    newsletterNote:
      "Rejoignez 2 000+ membres. Pas de spam, que du positif. Désabonnement à tout moment.",
    badges: [
      { label: "Événements Mensuels" },
      { label: "Accès Exclusif" },
      { label: "Avantages VIP" },
    ],
    ctaTitle1: "Faites Partie de ",
    ctaTitleAccent: "Quelque Chose",
    ctaDesc:
      "Hydrafit, c'est plus que du sport. C'est un cercle de personnes partageant un mode de vie de bien-être, de positivité et de croissance.",
    ctaJoin: "Rejoindre Hydrafit",
    ctaContact: "WhatsApp",
  },
  en: {
    heroTagline: "Exclusive Gatherings & Experiences",
    heroTitle1: "Events & ",
    heroTitleAccent: "Community",
    heroDesc:
      "More than fitness — Hydrafit is a community. Join our exclusive events, workshops, and special sessions that bring our members together.",
    upcomingTitle: "Upcoming Events",
    upcomingSubtitle:
      "Secure your spot before it's gone. Our events always sell out.",
    almostFull: "Almost Full",
    fillingFast: "Filling Fast",
    available: "Available",
    spotsLeft: "spots left",
    spotsRemaining: "spots remaining",
    price: "Price",
    registerNow: "Register Now",
    exclusivityNotice:
      "All events are exclusive to the Hydrafit community.",
    exclusivityHighlight:
      "Members get priority access and special pricing.",
    howTitle: "How Events Work",
    howSubtitle: "Three simple steps to join the experience.",
    howSteps: [
      {
        step: "01",
        title: "Choose Your Event",
        text: "Browse upcoming events and find the experience that speaks to you.",
      },
      {
        step: "02",
        title: "Secure Your Spot",
        text: "Register and pay online. Spots are limited and fill up fast.",
      },
      {
        step: "03",
        title: "Show Up & Shine",
        text: "Arrive at the studio, connect with the community, and enjoy the moment.",
      },
    ],
    pastTitle: "Past Events",
    pastSubtitle:
      "Moments from our community gatherings. Every event is a memory.",
    pastEvents: [
      "Launch Night 2025",
      "Full Moon Aquabike",
      "Ramadan Wellness",
      "Summer Splash Party",
      "Community 500",
      "Christmas Glow",
    ],
    viewGallery: "View Gallery",
    newsletterTitle1: "Never Miss ",
    newsletterTitleAccent: "an Event",
    newsletterDesc:
      "Join our inner circle and be the first to know about upcoming events, exclusive workshops, and members-only experiences.",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    newsletterNote:
      "Join 2,000+ members. No spam, only good vibes. Unsubscribe anytime.",
    badges: [
      { label: "Monthly Events" },
      { label: "Exclusive Access" },
      { label: "VIP Perks" },
    ],
    ctaTitle1: "Be Part of ",
    ctaTitleAccent: "Something",
    ctaDesc:
      "Hydrafit is more than workouts. It's a circle of like-minded people sharing a lifestyle of wellness, positivity, and growth.",
    ctaJoin: "Join Hydrafit",
    ctaContact: "WhatsApp",
  },
  ar: {
    heroTagline: "لقاءات حصرية وتجارب فريدة",
    heroTitle1: "الفعاليات و",
    heroTitleAccent: "المجتمع",
    heroDesc:
      "أكثر من مجرد لياقة بدنية — هيدرافيت مجتمع. انضموا إلى فعالياتنا الحصرية وورش العمل والجلسات الخاصة التي تجمع أعضاءنا معاً.",
    upcomingTitle: "الفعاليات القادمة",
    upcomingSubtitle:
      "احجزوا مقعدكم قبل فوات الأوان. فعالياتنا تنفد دائماً بالكامل.",
    almostFull: "شبه ممتلئ",
    fillingFast: "يمتلئ بسرعة",
    available: "متاح",
    spotsLeft: "أماكن متبقية",
    spotsRemaining: "أماكن متبقية",
    price: "السعر",
    registerNow: "سجّل الآن",
    exclusivityNotice:
      "جميع الفعاليات حصرية لمجتمع هيدرافيت.",
    exclusivityHighlight:
      "يحظى الأعضاء بأولوية الوصول وأسعار خاصة.",
    howTitle: "كيف تعمل الفعاليات",
    howSubtitle: "ثلاث خطوات بسيطة للانضمام إلى التجربة.",
    howSteps: [
      {
        step: "01",
        title: "اختر فعاليتك",
        text: "تصفّح الفعاليات القادمة وابحث عن التجربة التي تناسبك.",
      },
      {
        step: "02",
        title: "احجز مقعدك",
        text: "سجّل وادفع عبر الإنترنت. الأماكن محدودة وتنفد بسرعة.",
      },
      {
        step: "03",
        title: "احضر وتألّق",
        text: "توجّه إلى الاستوديو، تواصل مع المجتمع، واستمتع باللحظة.",
      },
    ],
    pastTitle: "فعاليات سابقة",
    pastSubtitle:
      "لحظات من تجمعات مجتمعنا. كل فعالية هي ذكرى جميلة.",
    pastEvents: [
      "حفل الافتتاح 2025",
      "أكوابايك البدر",
      "عافية رمضان",
      "حفلة سبلاش الصيف",
      "مجتمع الـ 500",
      "توهّج الكريسماس",
    ],
    viewGallery: "عرض المعرض",
    newsletterTitle1: "لا تفوّت ",
    newsletterTitleAccent: "أي فعالية",
    newsletterDesc:
      "انضم إلى دائرتنا الخاصة وكن أول من يعلم بالفعاليات القادمة وورش العمل الحصرية والتجارب المخصصة للأعضاء.",
    emailPlaceholder: "عنوان بريدك الإلكتروني",
    subscribe: "اشترك",
    newsletterNote:
      "انضم إلى أكثر من 2,000 عضو. لا رسائل مزعجة، فقط أجواء إيجابية. يمكنك إلغاء الاشتراك في أي وقت.",
    badges: [
      { label: "فعاليات شهرية" },
      { label: "وصول حصري" },
      { label: "امتيازات VIP" },
    ],
    ctaTitle1: "كن جزءاً من ",
    ctaTitleAccent: "شيء مميز",
    ctaDesc:
      "هيدرافيت أكثر من مجرد تمارين. إنه مجتمع من أشخاص يتشاركون نمط حياة من العافية والإيجابية والنمو.",
    ctaJoin: "انضم إلى هيدرافيت",
    ctaContact: "WhatsApp",
  },
};

function getSpotsUrgency(
  spots: number,
  locale: "fr" | "en" | "ar"
): { label: string; color: string } {
  const t = text[locale];
  if (spots <= 5) return { label: t.almostFull, color: "text-red-400" };
  if (spots <= 15) return { label: t.fillingFast, color: "text-amber-400" };
  return { label: t.available, color: "text-tiffany" };
}

const badgeIcons = [CalendarDays, Users, Sparkles];

export default function EventsPageContent() {
  const locale = useLocale();
  const t = text[locale];
  const { events } = getTranslatedData(locale);
  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.08)_0%,_transparent_70%)]" />
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E\")",
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-tiffany text-xs uppercase tracking-[0.3em] mb-6"
          >
            {t.heroTagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide leading-none"
          >
            {t.heroTitle1}{" "}
            <span className="text-tiffany">{t.heroTitleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            {brandify(t.heroDesc)}
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="text-tiffany" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* ====== UPCOMING EVENTS ====== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title={t.upcomingTitle}
            subtitle={t.upcomingSubtitle}
          />

          <div className="space-y-8 mt-8">
            {events.map((event, i) => {
              const { day, month, weekday } = formatEventDate(event.date, locale);
              const urgency = getSpotsUrgency(event.spots, locale);

              return (
                <motion.div
                  key={event.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="group relative overflow-hidden bg-dark border border-white/5 hover:border-tiffany/30 transition-all duration-500"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tiffany/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Event image banner */}
                  {eventImages[event.slug] && (
                    <div className="relative h-48 lg:h-56 overflow-hidden">
                      <Image
                        src={eventImages[event.slug]}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 80vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                      {/* Date badge overlay */}
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-tiffany/30 px-4 py-3 flex items-center gap-3">
                        <CalendarDays size={16} className="text-tiffany" />
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-2xl text-white leading-none">{day}</span>
                          <span className="text-tiffany text-xs uppercase tracking-[0.15em] font-semibold">{month}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row">
                    {/* Date block */}
                    <div className={`lg:w-48 shrink-0 bg-black/50 flex flex-row lg:flex-col items-center justify-center gap-3 lg:gap-1 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/5 ${eventImages[event.slug] ? "lg:hidden" : ""}`}>
                      <span className="text-tiffany text-xs uppercase tracking-[0.2em] font-semibold">
                        {month}
                      </span>
                      <span className="font-display text-5xl lg:text-6xl text-white leading-none">
                        {day}
                      </span>
                      <span className="text-gray text-xs uppercase tracking-widest">
                        {weekday}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 lg:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          {/* Limited spots badge */}
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              animate={{ scale: [1, 1.15, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1"
                            >
                              <Flame size={12} className={urgency.color} />
                              <span className={`text-[10px] uppercase tracking-[0.15em] font-bold ${urgency.color}`}>
                                {urgency.label} &mdash; {event.spots} {t.spotsLeft}
                              </span>
                            </motion.div>
                          </div>

                          <h3 className="font-display text-3xl md:text-4xl tracking-wide text-white group-hover:text-tiffany transition-colors duration-300">
                            {event.title}
                          </h3>

                          <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-2xl">
                            {event.description}
                          </p>

                          {/* Meta info */}
                          <div className="mt-5 flex flex-wrap gap-5">
                            <div className="flex items-center gap-2">
                              <Clock size={14} className="text-tiffany" />
                              <span className="text-white/70 text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={14} className="text-tiffany" />
                              <span className="text-white/70 text-sm">{event.studio}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users size={14} className="text-tiffany" />
                              <span className="text-white/70 text-sm">
                                {event.spots} {t.spotsRemaining}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="flex flex-col items-end gap-4 shrink-0">
                          <div className="text-right">
                            <p className="text-gray text-xs uppercase tracking-widest">{t.price}</p>
                            <p className="font-display text-3xl text-white">
                              {event.price}{" "}
                              <span className="text-sm text-gray font-sans font-normal">AED</span>
                            </p>
                          </div>
                          <Button href={localizedHref(`/events/${event.slug}`)} size="md">
                            {t.registerNow}
                            <ArrowRight size={14} className="ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Exclusivity notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-3 text-center"
          >
            <Sparkles size={16} className="text-tiffany" />
            <p className="text-gray text-sm">
              {brandify(t.exclusivityNotice)}{" "}
              <span className="text-tiffany">{t.exclusivityHighlight}</span>
            </p>
            <Sparkles size={16} className="text-tiffany" />
          </motion.div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,216,208,0.05)_0%,_transparent_60%)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle
            title={t.howTitle}
            subtitle={t.howSubtitle}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          >
            {t.howSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={item}
                className="relative p-8 border border-white/5 hover:border-tiffany/20 transition-all duration-300 group"
              >
                <span className="font-display text-6xl text-tiffany/10 group-hover:text-tiffany/20 transition-colors duration-300 absolute top-4 right-6">
                  {step.step}
                </span>
                <h3 className="font-display text-2xl tracking-wide text-white mt-8 relative z-10">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray text-sm leading-relaxed relative z-10">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====== PAST EVENTS GALLERY ====== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title={t.pastTitle}
            subtitle={t.pastSubtitle}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8"
          >
            {t.pastEvents.map((label, i) => (
              <motion.div
                key={label}
                variants={item}
                className="relative aspect-[4/3] overflow-hidden bg-dark border border-white/5 hover:border-tiffany/30 transition-all duration-500 cursor-pointer group"
              >
                {pastEventImages[i] ? (
                  <Image
                    src={pastEventImages[i]}
                    alt={label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-dark to-black" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera
                        className="text-tiffany/10 group-hover:text-tiffany/25 transition-colors duration-500"
                        size={36}
                      />
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-tiffany text-xs mt-1">{t.viewGallery}</p>
                  </div>
                </div>

                {/* Event label always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-white/60 text-xs font-semibold">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====== NEWSLETTER CTA ====== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(129,216,208,0.08)_0%,_transparent_60%)]" />

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-tiffany/10 border border-tiffany/20 mb-8">
              <Mail className="text-tiffany" size={28} />
            </div>

            <h2 className="font-display text-5xl md:text-7xl tracking-wide">
              {t.newsletterTitle1}<span className="text-tiffany">{t.newsletterTitleAccent}</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              {t.newsletterDesc}
            </p>

            {/* Newsletter form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 bg-black/50 border border-white/10 focus:border-tiffany/50 focus:outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray transition-colors duration-300"
                required
              />
              <Button type="submit" size="md">
                {t.subscribe}
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </motion.form>

            <p className="mt-4 text-xs text-gray">
              {t.newsletterNote}
            </p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6"
            >
              {t.badges.map((badge, i) => {
                const Icon = badgeIcons[i];
                return (
                  <div key={badge.label} className="flex items-center gap-2">
                    <Icon size={14} className="text-tiffany" />
                    <span className="text-white/50 text-xs uppercase tracking-widest">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(129,216,208,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl tracking-wide">
              {t.ctaTitle1}<span className="text-tiffany">{t.ctaTitleAccent}</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              {brandify(t.ctaDesc)}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={localizedHref("/booking")} size="lg">
                {brandify(t.ctaJoin)}
              </Button>
              <Button href="https://wa.me/971501234567" variant="ghost" size="lg">
                {t.ctaContact}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
