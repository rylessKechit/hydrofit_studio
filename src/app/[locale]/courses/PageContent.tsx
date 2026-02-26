"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Flame,
  Signal,
  Check,
  ArrowRight,
  ChevronDown,
  Droplets,
} from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLocale } from "@/lib/i18n";
import { getTranslatedData } from "@/lib/constants";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.97,
    transition: { duration: 0.3 },
  },
};

/* ─── Translations ─── */
const text = {
  fr: {
    heroTagline: "Le Fitness Aquatique R\u00e9invent\u00e9",
    heroTitle1: "Nos ",
    heroTitle2: "Cours",
    heroDesc:
      "Des entra\u00eenements haute intensit\u00e9, z\u00e9ro impact dans l\u2019eau. Choisissez votre discipline, fixez votre rythme, et laissez l\u2019eau faire le reste.",

    findFlowTitle: "Trouvez Votre Flow",
    findFlowSubtitle:
      "Chaque corps est diff\u00e9rent. Chaque cours est con\u00e7u pour vous d\u00e9fier, vous transformer et vous renforcer \u2014 peu importe votre niveau de d\u00e9part.",

    filterAll: "Tous les Cours",
    filterAquatic: "Aquatique",
    filterWellness: "Bien-\u00catre",

    keyBenefits: "Bienfaits Cl\u00e9s",
    bookThisClass: "R\u00e9server ce Cours",
    noClassesFound: "Aucun cours trouv\u00e9 dans cette cat\u00e9gorie.",
    cal: "cal",

    whyWaterTitle1: "Pourquoi S\u2019Entra\u00eener dans l\u2019",
    whyWaterTitle2: "Eau",
    whyWaterSubtitle:
      "L\u2019eau cr\u00e9e l\u2019environnement d\u2019entra\u00eenement parfait \u2014 amplifiant chaque mouvement tout en prot\u00e9geant votre corps. Ce n\u2019est pas plus facile. C\u2019est plus intelligent.",
    waterStats: [
      {
        stat: "12x",
        label: "Plus de R\u00e9sistance",
        description:
          "L\u2019eau est 12 fois plus dense que l\u2019air, rendant chaque coup de p\u00e9dale exponentiellement plus efficace.",
      },
      {
        stat: "800+",
        label: "Calories Br\u00fbl\u00e9es",
        description:
          "Une seule s\u00e9ance de 45 minutes peut br\u00fbler jusqu\u2019\u00e0 800 calories \u2014 plus que la course \u00e0 pied ou le v\u00e9lo traditionnel.",
      },
      {
        stat: "80%",
        label: "Moins d\u2019Impact",
        description:
          "La flottabilit\u00e9 \u00e9limine 80% du stress li\u00e9 au poids corporel, prot\u00e9geant genoux, hanches et articulations.",
      },
      {
        stat: "360\u00b0",
        label: "Effet Massage",
        description:
          "La pression de l\u2019eau offre un hydro-massage naturel, stimulant la circulation et le drainage lymphatique.",
      },
    ],

    ctaTitle1: "Pr\u00eat\u00b7e \u00e0 ",
    ctaTitle2: "P\u00e9daler",
    ctaDesc:
      "Votre premier cours inclut une boisson d\u00e9tox offerte, tous les \u00e9quipements, et l\u2019\u00e9nergie d\u2019une communaut\u00e9 qui vous donnera envie de revenir.",
    ctaPricing: "Voir les Tarifs & R\u00e9server",
    ctaExperience: "D\u00e9couvrir l\u2019Exp\u00e9rience",
  },
  en: {
    heroTagline: "Aquatic Fitness Redefined",
    heroTitle1: "Our ",
    heroTitle2: "Classes",
    heroDesc:
      "High-intensity, zero-impact workouts in water. Choose your discipline, set your pace, and let the water do the rest.",

    findFlowTitle: "Find Your Flow",
    findFlowSubtitle:
      "Every body is different. Every class is designed to challenge, transform, and empower \u2014 no matter where you start.",

    filterAll: "All Classes",
    filterAquatic: "Aquatic",
    filterWellness: "Wellness",

    keyBenefits: "Key Benefits",
    bookThisClass: "Book This Class",
    noClassesFound: "No classes found in this category.",
    cal: "cal",

    whyWaterTitle1: "Why Train in ",
    whyWaterTitle2: "Water",
    whyWaterSubtitle:
      "Water creates the perfect training environment \u2014 amplifying every movement while protecting your body. It\u2019s not easier. It\u2019s smarter.",
    waterStats: [
      {
        stat: "12x",
        label: "More Resistance",
        description:
          "Water is 12 times denser than air, making every pedal stroke exponentially more effective.",
      },
      {
        stat: "800+",
        label: "Calories Burned",
        description:
          "A single 45-minute session can burn up to 800 calories \u2014 more than running or traditional cycling.",
      },
      {
        stat: "80%",
        label: "Less Impact",
        description:
          "Buoyancy eliminates 80% of body weight stress, protecting knees, hips, and joints.",
      },
      {
        stat: "360\u00b0",
        label: "Massage Effect",
        description:
          "Water pressure provides a natural hydro-massage, stimulating circulation and lymphatic drainage.",
      },
    ],

    ctaTitle1: "Ready to ",
    ctaTitle2: "Ride",
    ctaDesc:
      "Your first class comes with a complimentary detox drink, full amenities, and the energy of a community that will keep you coming back.",
    ctaPricing: "View Pricing & Book",
    ctaExperience: "Discover the Experience",
  },
  ar: {
    heroTagline: "اللياقة المائية بمفهوم جديد",
    heroTitle1: "",
    heroTitle2: "حصصنا",
    heroDesc:
      "تمارين عالية الكثافة بدون أي تأثير على المفاصل في الماء. اختر نوع التمرين، حدّد إيقاعك، ودع الماء يتكفّل بالباقي.",

    findFlowTitle: "اعثر على إيقاعك",
    findFlowSubtitle:
      "كل جسم مختلف. كل حصة مُصمّمة لتتحدّاك وتحوّلك وتمنحك القوة — بغض النظر عن مستواك.",

    filterAll: "جميع الحصص",
    filterAquatic: "مائية",
    filterWellness: "عافية",

    keyBenefits: "الفوائد الرئيسية",
    bookThisClass: "احجز هذه الحصة",
    noClassesFound: "لم يتم العثور على حصص في هذه الفئة.",
    cal: "سعرة",

    whyWaterTitle1: "لماذا التمرين في ",
    whyWaterTitle2: "الماء",
    whyWaterSubtitle:
      "يوفّر الماء بيئة التدريب المثالية — يضاعف فعالية كل حركة مع حماية جسمك. ليس أسهل. بل أذكى.",
    waterStats: [
      {
        stat: "12x",
        label: "مقاومة أكبر",
        description:
          "الماء أكثر كثافة من الهواء بـ ١٢ مرة، مما يجعل كل ضغطة على الدواسة أكثر فعالية بشكل مضاعف.",
      },
      {
        stat: "800+",
        label: "سعرة حرارية محروقة",
        description:
          "يمكن لجلسة واحدة مدتها ٤٥ دقيقة حرق ما يصل إلى ٨٠٠ سعرة حرارية — أكثر من الجري أو ركوب الدراجة التقليدي.",
      },
      {
        stat: "80%",
        label: "تأثير أقل",
        description:
          "تُزيل الطفو ٨٠٪ من ضغط وزن الجسم، مما يحمي الركبتين والوركين والمفاصل.",
      },
      {
        stat: "360°",
        label: "تأثير التدليك",
        description:
          "يوفّر ضغط الماء تدليكاً مائياً طبيعياً، يحفّز الدورة الدموية والتصريف اللمفاوي.",
      },
    ],

    ctaTitle1: "مستعد لـ",
    ctaTitle2: "الانطلاق",
    ctaDesc:
      "حصتك الأولى تشمل مشروب ديتوكس مجاني، وجميع المرافق، وطاقة مجتمع ستجعلك تعود مراراً.",
    ctaPricing: "عرض الأسعار والحجز",
    ctaExperience: "اكتشف التجربة",
  },
} as const;

const courseImages: Record<string, string> = {
  aquabike:
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=500&fit=crop",
  "aqua-rebound":
    "https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&h=500&fit=crop",
  "aqua-boxing":
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=500&fit=crop",
  "aqua-yoga":
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
};

type CategoryKey = "all" | "aquatic" | "wellness";

export default function CoursesPageContent() {
  const locale = useLocale();
  const t = text[locale];
  const { courses } = getTranslatedData(locale);
  const localizedHref = (href: string) => `/${locale}${href}`;

  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all");

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "all", label: t.filterAll },
    { key: "aquatic", label: t.filterAquatic },
    { key: "wellness", label: t.filterWellness },
  ];

  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.08)_0%,_transparent_70%)]" />
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E\")",
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-tiffany text-xs uppercase tracking-[0.3em] mb-6">
              {t.heroTagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide leading-none"
          >
            {t.heroTitle1}
            <span className="text-tiffany">{t.heroTitle2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            {t.heroDesc}
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-tiffany" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* ====== FILTER + COURSE GRID ====== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,216,208,0.04)_0%,_transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle
            title={t.findFlowTitle}
            subtitle={t.findFlowSubtitle}
          />

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`
                  px-6 py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-300 border
                  ${
                    activeFilter === cat.key
                      ? "bg-tiffany text-black border-tiffany"
                      : "bg-transparent text-white/60 border-white/10 hover:border-tiffany/40 hover:text-white"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Course grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className="group bg-black border border-white/5 hover:border-tiffany/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Card header — visual area */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={courseImages[course.slug]}
                      alt={course.name}
                      fill
                      className="object-cover opacity-50"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-tiffany/10 text-tiffany text-[10px] uppercase tracking-widest px-3 py-1.5 border border-tiffany/20">
                        {course.category}
                      </span>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <h3 className="font-display text-3xl md:text-4xl tracking-wide group-hover:text-tiffany transition-colors duration-300">
                        {course.name}
                      </h3>
                      <p className="text-tiffany/80 text-sm mt-1 italic">
                        {course.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 md:p-8">
                    {/* Stats row */}
                    <div className="flex items-center gap-6 mb-6 pb-6 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-tiffany" />
                        <span className="text-sm text-white/70">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Signal size={16} className="text-tiffany" />
                        <span className="text-sm text-white/70">
                          {course.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Flame size={16} className="text-tiffany" />
                        <span className="text-sm text-white/70">
                          {course.calories} {t.cal}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-widest text-tiffany mb-3">
                        {t.keyBenefits}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-sm text-white/50"
                          >
                            <Check
                              size={14}
                              className="text-tiffany shrink-0 mt-0.5"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button
                      href={localizedHref("/booking")}
                      variant="outline"
                      size="sm"
                    >
                      {t.bookThisClass}
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Droplets className="text-tiffany/30 mx-auto mb-4" size={48} />
              <p className="text-gray text-lg">{t.noClassesFound}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ====== WHY WATER SECTION ====== */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(129,216,208,0.06)_0%,_transparent_60%)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-6xl tracking-wide mb-6">
              {t.whyWaterTitle1}
              <span className="text-tiffany">{t.whyWaterTitle2}</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
              {t.whyWaterSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.waterStats.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                className="text-center p-6 border border-white/5 hover:border-tiffany/20 transition-colors duration-300"
              >
                <span className="font-display text-4xl md:text-5xl text-tiffany">
                  {item.stat}
                </span>
                <h4 className="font-display text-lg tracking-wide mt-2 mb-2">
                  {item.label}
                </h4>
                <p className="text-xs text-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(129,216,208,0.1)_0%,_transparent_60%)]" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl tracking-wide">
              {t.ctaTitle1}
              <span className="text-tiffany">{t.ctaTitle2}</span>?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={localizedHref("/booking")} size="lg">
                {t.ctaPricing}
              </Button>
              <Button
                href={localizedHref("/experience")}
                variant="ghost"
                size="lg"
              >
                {t.ctaExperience}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
