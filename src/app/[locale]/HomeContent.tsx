"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Leaf,
  GlassWater,
  Users,
  Calendar,
  Star,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLocale } from "@/lib/i18n";
import { brandify } from "@/lib/brandify";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const text = {
  fr: {
    heroTagline: "Expérience Wellness Premium — Dubai",
    heroTitle1: "Votre Corps",
    heroTitle2: "Mérite",
    heroTitle3: "Le Bien-Être",
    heroDesc: "Plongez dans le rituel aquatique le plus exclusif de Dubai. Un sanctuaire où l'eau guérit, la communauté vous élève, et prendre soin de soi devient un art.",
    heroCta1: "Commencer Votre Parcours",
    heroCta2: "Découvrir",
    pillarsTitle: "Le Rituel Hydrafit",
    pillarsSubtitle: "Plus qu'une séance. Une expérience holistique. Découvrez les quatre piliers qui font d'Hydrafit un sanctuaire.",
    pillars: [
      { title: "Les Cours", description: "Aquabike, Aqua Boxing, Rebound — doux pour votre corps, puissant pour votre bien-être.", href: "/courses" },
      { title: "Le Detox Bar", description: "Jus pressés à froid, smoothies & élixirs bien-être pour nourrir votre corps de l'intérieur.", href: "/experience#detox-bar" },
      { title: "Les Événements", description: "Ateliers bien-être, rencontres inspirantes & célébrations communautaires pour l'âme.", href: "/events" },
      { title: "La Communauté", description: "Un cercle de femmes partageant un mode de vie d'équilibre, de soin et de positivité.", href: "/experience" },
    ],
    explore: "Explorer",
    waterTitle: "La Force de l'Eau",
    waterSubtitle: "Le guérisseur le plus doux de la nature. Découvrez pourquoi l'eau améliore tout pour votre corps et votre esprit.",
    stats: [
      { label: "Calories par Séance" },
      { label: "Plus Doux qu'au Sol" },
      { label: "Moins d'Impact Articulaire" },
    ],
    waterCards: [
      { title: "Harmonie Lymphatique", text: "La pression de l'eau stimule naturellement la circulation lymphatique, aidant votre corps à retrouver son équilibre." },
      { title: "Force Douce", text: "L'eau offre une résistance naturelle qui sculpte et tonifie en douceur — votre corps bouge en harmonie." },
      { title: "Doux pour les Articulations", text: "La flottabilité berce votre corps, réduisant la pression de 80%. Du mouvement pur, zéro inconfort." },
    ],
    lipoTagline: "Une Solution en Douceur",
    lipoTitle1: "Vous Vivez avec un",
    lipoTitle2: "Lipœdème",
    lipoTitle3: "ou des Jambes Lourdes ?",
    lipoDesc1: "Des millions de femmes vivent avec un lipœdème, des jambes lourdes ou une mauvaise circulation — souvent sans savoir que le bien-être aquatique est l'un des moyens les plus efficaces de trouver un soulagement naturel.",
    lipoCta1: "Découvrir Nos Séances",
    lipoCta2: "En Savoir Plus",
    ctaTagline: "Votre parcours bien-être commence ici",
    ctaTitle1: "Prête à",
    ctaTitle2: "Plonger",
    ctaDesc: "Réservez votre première expérience et découvrez pourquoi Hydrafit est le sanctuaire bien-être le plus apprécié de Dubai.",
    ctaCta1: "Commencer Votre Parcours",
    ctaCta2: "WhatsApp",
  },
  en: {
    heroTagline: "Premium Wellness Experience — Dubai",
    heroTitle1: "Your Body",
    heroTitle2: "Deserves",
    heroTitle3: "Wellness",
    heroDesc: "Immerse yourself in Dubai's most exclusive aquatic wellness ritual. A sanctuary where water heals, community uplifts, and self-care becomes an art.",
    heroCta1: "Begin Your Journey",
    heroCta2: "Discover More",
    pillarsTitle: "The Hydrafit Ritual",
    pillarsSubtitle: "More than a session. A holistic experience. Discover the four pillars that make Hydrafit a sanctuary.",
    pillars: [
      { title: "The Classes", description: "Aquabike, Aqua Boxing, Rebound — gentle on your body, powerful for your wellbeing.", href: "/courses" },
      { title: "The Detox Bar", description: "Cold-pressed juices, smoothies & wellness elixirs to nourish your body from within.", href: "/experience#detox-bar" },
      { title: "The Events", description: "Wellness workshops, mindful gatherings & community celebrations for the soul.", href: "/events" },
      { title: "The Community", description: "A circle of like-minded women sharing a lifestyle of balance, care and positivity.", href: "/experience" },
    ],
    explore: "Explore",
    waterTitle: "The Power of Water",
    waterSubtitle: "Nature's most gentle healer. Discover why water makes everything better for your body and mind.",
    stats: [
      { label: "Calories Per Session" },
      { label: "Gentler Than Land Exercise" },
      { label: "Less Pressure on Joints" },
    ],
    waterCards: [
      { title: "Lymphatic Harmony", text: "Water pressure naturally stimulates lymphatic circulation, helping your body find its natural balance." },
      { title: "Gentle Strength", text: "Water provides natural resistance that sculpts and tones without straining — your body moves in harmony." },
      { title: "Joint-Kind", text: "Buoyancy cradles your body, reducing pressure by 80%. Pure movement, zero discomfort." },
    ],
    lipoTagline: "A Gentle Solution",
    lipoTitle1: "Living with",
    lipoTitle2: "Lipoedema",
    lipoTitle3: "or Heavy Legs?",
    lipoDesc1: "Millions of women live with lipoedema, heavy legs, or poor circulation — often without knowing that aquatic wellness is one of the most effective ways to find relief naturally.",
    lipoCta1: "Discover Our Sessions",
    lipoCta2: "Learn More",
    ctaTagline: "Your wellness journey starts here",
    ctaTitle1: "Ready to",
    ctaTitle2: "Dive In",
    ctaDesc: "Book your first experience and discover why Hydrafit is Dubai's most cherished wellness sanctuary.",
    ctaCta1: "Begin Your Journey",
    ctaCta2: "WhatsApp",
  },
  ar: {
    heroTagline: "تجربة عافية فاخرة — دبي",
    heroTitle1: "جسمك",
    heroTitle2: "يستحق",
    heroTitle3: "العافية",
    heroDesc: "انغمسي في أكثر طقوس العافية المائية حصرية في دبي. ملاذ حيث الماء يشفي، والمجتمع يرفعك، والعناية بالنفس تصبح فناً.",
    heroCta1: "ابدئي رحلتك",
    heroCta2: "اكتشفي المزيد",
    pillarsTitle: "طقوس هايدرافيت",
    pillarsSubtitle: "أكثر من حصة. تجربة شاملة. اكتشفي الأركان الأربعة التي تجعل من هايدرافيت ملاذاً.",
    pillars: [
      { title: "الدروس", description: "أكوابايك، أكوا بوكسينغ، ريباوند — لطيفة على جسمك، قوية لعافيتك.", href: "/courses" },
      { title: "بار ديتوكس", description: "عصائر مضغوطة على البارد، سموذي وإكسيرات عافية لتغذية جسمك من الداخل.", href: "/experience#detox-bar" },
      { title: "الفعاليات", description: "ورش عمل صحية، لقاءات ملهمة واحتفالات مجتمعية للروح.", href: "/events" },
      { title: "المجتمع", description: "دائرة من النساء يتشاركن أسلوب حياة من التوازن والرعاية والإيجابية.", href: "/experience" },
    ],
    explore: "اكتشفي",
    waterTitle: "قوة الماء",
    waterSubtitle: "أرقّ معالج في الطبيعة. اكتشفي لماذا يحسّن الماء كل شيء لجسمك وعقلك.",
    stats: [
      { label: "سعرة حرارية في الحصة" },
      { label: "ألطف من التمارين الأرضية" },
      { label: "ضغط أقل على المفاصل" },
    ],
    waterCards: [
      { title: "انسجام لمفاوي", text: "ضغط الماء يحفز الدورة اللمفاوية بشكل طبيعي، مساعداً جسمك على إيجاد توازنه الطبيعي." },
      { title: "قوة لطيفة", text: "الماء يوفر مقاومة طبيعية تنحت وتشد بدون إجهاد — جسمك يتحرك بانسجام." },
      { title: "لطيف على المفاصل", text: "الطفو يحتضن جسمك، مقللاً الضغط بنسبة ٨٠٪. حركة نقية، صفر انزعاج." },
    ],
    lipoTagline: "حل لطيف",
    lipoTitle1: "تعيشين مع",
    lipoTitle2: "الوذمة الشحمية",
    lipoTitle3: "أو ثقل الساقين؟",
    lipoDesc1: "ملايين النساء يعشن مع الوذمة الشحمية أو ثقل الساقين أو ضعف الدورة الدموية — غالباً دون معرفة أن العافية المائية هي واحدة من أكثر الطرق فعالية لإيجاد راحة طبيعية.",
    lipoCta1: "اكتشفي حصصنا",
    lipoCta2: "اعرفي المزيد",
    ctaTagline: "رحلة عافيتك تبدأ هنا",
    ctaTitle1: "مستعدة",
    ctaTitle2: "للغوص",
    ctaDesc: "احجزي تجربتك الأولى واكتشفي لماذا هايدرافيت هو ملاذ العافية الأكثر تقديراً في دبي.",
    ctaCta1: "ابدئي رحلتك",
    ctaCta2: "WhatsApp",
  },
};

const statValues = [
  { end: 800, suffix: "+" },
  { end: 12, suffix: "x" },
  { end: 80, suffix: "%" },
];

const pillarIcons = [Sparkles, GlassWater, Calendar, Users];

const pillarImages = [
  "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop",
];

export default function HomeContent() {
  const locale = useLocale();
  const t = text[locale];
  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #050505 15%, #0D0D0D 28%, #1A1A1A 40%, #444444 55%, #888888 68%, #CCCCCC 80%, #FFFFFF 92%)",
      }}
    >
      {/* ====== HERO — Black ====== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="hero-animate">
            <span className="inline-block text-tiffany text-xs uppercase tracking-[0.3em] mb-6">{t.heroTagline}</span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide leading-none">
            {t.heroTitle1}<br />{t.heroTitle2}<br /><span className="text-tiffany">{t.heroTitle3}</span>
          </h1>

          <p className="hero-animate hero-animate-d2 mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            {t.heroDesc}
          </p>

          <div className="hero-animate hero-animate-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={localizedHref("/booking")} size="lg">{t.heroCta1}</Button>
            <Button href={localizedHref("/experience")} variant="outline" size="lg">{t.heroCta2}</Button>
          </div>
        </div>

        <div className="hero-animate hero-animate-d4 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-bounce-down">
            <ChevronDown className="text-tiffany" size={24} />
          </div>
        </div>
      </section>

      {/* ====== PILLARS — Dark ====== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title={brandify(t.pillarsTitle)} subtitle={brandify(t.pillarsSubtitle)} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {t.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <motion.div key={pillar.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <Link href={localizedHref(pillar.href)} className="group block">
                    <div className="relative h-80 overflow-hidden bg-black/40 border border-white/5 group-hover:border-tiffany/30 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                      <Image src={pillarImages[i]} alt={pillar.title} fill className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" sizes="(max-width: 768px) 100vw, 25vw" />
                      <div className="relative z-20 h-full flex flex-col justify-end p-6">
                        <Icon className="text-tiffany mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                        <h3 className="font-display text-2xl tracking-wide">{pillar.title}</h3>
                        <p className="mt-2 text-sm text-gray leading-relaxed">{pillar.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-tiffany text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {t.explore} <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== POWER OF WATER — Transition ====== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,216,208,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle title={t.waterTitle} subtitle={t.waterSubtitle} />
          <div className="grid grid-cols-3 gap-8 mt-8">
            {statValues.map((stat, i) => (
              <AnimatedCounter key={i} end={stat.end} suffix={stat.suffix} label={t.stats[i].label} />
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.waterCards.map((card, i) => {
              const icons = [Droplets, Leaf, Star];
              const Icon = icons[i];
              return (
                <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 border border-white/10 hover:border-tiffany/20 bg-white/5 transition-colors duration-300">
                  <Icon className={`mb-4 ${i === 1 ? "text-lime" : "text-tiffany"}`} size={28} />
                  <h3 className="font-display text-xl tracking-wide mb-2 text-white">{card.title}</h3>
                  <p className="text-sm text-white leading-relaxed">{card.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ====== LIPOEDEMA — Mid transition ====== */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* Dark backdrop so white text is readable on grey gradient */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.06)_0%,_transparent_60%)]" />
        {/* Decorative side lines */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-tiffany/30 to-transparent origin-top hidden lg:block"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
          className="absolute right-8 md:right-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-tiffany/30 to-transparent origin-top hidden lg:block"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 text-tiffany text-sm font-semibold uppercase tracking-[0.3em] mb-6">
              <Leaf size={16} className="text-lime" /> {t.lipoTagline}
            </span>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide leading-none text-white font-bold">
              {t.lipoTitle1}<br />
              <span className="text-tiffany">{t.lipoTitle2}</span><br />
              {t.lipoTitle3}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto"
            >
              {t.lipoDesc1}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href={localizedHref("/courses")} size="lg">{t.lipoCta1}</Button>
              <Button href={localizedHref("/blog")} variant="ghost" size="lg">{t.lipoCta2}</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== CTA — White ====== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_rgba(168,216,78,0.08)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(circle,_rgba(129,216,208,0.08)_0%,_transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-tiffany text-sm font-semibold uppercase tracking-[0.3em] mb-6">
              <Leaf size={16} className="text-lime" /> {t.ctaTagline}
            </span>
            <h2 className="font-display text-6xl md:text-8xl tracking-wide text-black font-bold">
              {t.ctaTitle1} <span className="text-tiffany">{t.ctaTitle2}</span> ?
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-medium text-black/60 max-w-xl mx-auto">{brandify(t.ctaDesc)}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={localizedHref("/booking")} size="lg">{t.ctaCta1}</Button>
              <Button href="https://wa.me/971501234567" variant="outline" size="lg">{t.ctaCta2}</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
