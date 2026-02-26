"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Tag,
  Send,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLocale } from "@/lib/i18n";
import { getTranslatedData } from "@/lib/constants";
import { brandify } from "@/lib/brandify";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const blogImages: Record<string, string> = {
  "bienfaits-aquabike-guide-complet": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
  "aquabike-benefits-complete-guide": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
  "lipoedeme-exercice-fitness-aquatique": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop",
  "lipoedema-exercise-aquatic-fitness": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop",
  "meilleurs-studios-fitness-dubai-2026": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=400&fit=crop",
  "best-fitness-studios-dubai-2026": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=400&fit=crop",
  "recettes-smoothie-detox-post-entrainement": "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=400&fit=crop",
  "detox-smoothie-recipes-post-workout": "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=400&fit=crop",
};

const categoryColors: Record<string, string> = {
  "Wellness & Health": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Bien-Être & Santé": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Lifestyle Dubai": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "Nutrition & Detox": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Nutrition & Détox": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Testimonials: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Témoignages: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "العافية والصحة": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "نمط حياة دبي": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "التغذية والديتوكس": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "شهادات": "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

const text = {
  fr: {
    heroTagline: "Histoires, Science & Inspiration",
    heroTitle1: "Blog & ",
    heroTitle2: "Inspirations",
    heroDesc:
      "Plongez dans nos conseils bien-être, la science du fitness aquatique, les guides lifestyle à Dubai et les histoires inspirantes de notre communauté.",
    articlesTitle: "Derniers Articles",
    articlesSubtitle:
      "Conseils d'experts sur le fitness aquatique, le bien-être et le lifestyle à Dubai.",
    categories: [
      "Tous",
      "Bien-Être & Santé",
      "Lifestyle Dubai",
      "Nutrition & Détox",
      "Témoignages",
    ],
    allCategory: "Tous",
    readMore: "Lire la Suite",
    noArticles: "Aucun article dans cette catégorie pour le moment. Restez connecté !",
    stayInspiredTitle1: "Restez ",
    stayInspiredTitle2: "Inspiré",
    stayInspiredDesc:
      "Abonnez-vous à notre newsletter et recevez des conseils bien-être, des offres exclusives et les dernières nouvelles d'Hydrafit Studio directement dans votre boîte mail.",
    emailPlaceholder: "Entrez votre adresse e-mail",
    subscribe: "S'abonner",
    noSpam:
      "Pas de spam, jamais. Désabonnement à tout moment. Nous respectons votre vie privée.",
  },
  en: {
    heroTagline: "Stories, Science & Inspiration",
    heroTitle1: "Blog & ",
    heroTitle2: "Insights",
    heroDesc:
      "Dive into wellness tips, aquatic fitness science, Dubai lifestyle guides, and inspiring stories from our community.",
    articlesTitle: "Latest Articles",
    articlesSubtitle:
      "Expert insights on aquatic fitness, wellness, and the Dubai lifestyle.",
    categories: [
      "All",
      "Wellness & Health",
      "Lifestyle Dubai",
      "Nutrition & Detox",
      "Testimonials",
    ],
    allCategory: "All",
    readMore: "Read More",
    noArticles: "No articles in this category yet. Stay tuned!",
    stayInspiredTitle1: "Stay ",
    stayInspiredTitle2: "Inspired",
    stayInspiredDesc:
      "Subscribe to our newsletter and receive wellness tips, exclusive offers, and the latest from Hydrafit Studio directly in your inbox.",
    emailPlaceholder: "Enter your email address",
    subscribe: "Subscribe",
    noSpam:
      "No spam, ever. Unsubscribe anytime. We respect your privacy.",
  },
  ar: {
    heroTagline: "قصص وعلوم وإلهام",
    heroTitle1: "المدونة و",
    heroTitle2: "الإلهام",
    heroDesc:
      "اغمروا أنفسكم في نصائح العافية وعلوم اللياقة المائية وأدلة نمط الحياة في دبي وقصص ملهمة من مجتمعنا.",
    articlesTitle: "أحدث المقالات",
    articlesSubtitle:
      "رؤى خبراء حول اللياقة المائية والعافية ونمط الحياة في دبي.",
    categories: [
      "الكل",
      "العافية والصحة",
      "نمط حياة دبي",
      "التغذية والديتوكس",
      "شهادات",
    ],
    allCategory: "الكل",
    readMore: "اقرأ المزيد",
    noArticles: "لا توجد مقالات في هذه الفئة حالياً. ترقّبوا المزيد!",
    stayInspiredTitle1: "ابقَ ",
    stayInspiredTitle2: "مُلهَماً",
    stayInspiredDesc:
      "اشترك في نشرتنا الإخبارية واحصل على نصائح العافية والعروض الحصرية وآخر أخبار استوديو هيدرافيت مباشرة في بريدك الإلكتروني.",
    emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
    subscribe: "اشترك",
    noSpam:
      "لا رسائل مزعجة أبداً. يمكنك إلغاء الاشتراك في أي وقت. نحن نحترم خصوصيتك.",
  },
} as const;

export default function BlogPageContent() {
  const locale = useLocale();
  const t = text[locale];
  const { blogPosts } = getTranslatedData(locale);
  const localizedHref = (href: string) => `/${locale}${href}`;

  const categories = t.categories;
  const [activeCategory, setActiveCategory] = useState<string>(t.allCategory);

  const filteredPosts =
    activeCategory === t.allCategory
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const intlLocale: Record<string, string> = { fr: "fr-FR", en: "en-US", ar: "ar-AE" };

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(intlLocale[locale] || "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.08)_0%,_transparent_70%)]" />
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
            {t.heroTitle1}<span className="text-tiffany">{t.heroTitle2}</span>
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
      </section>

      {/* ====== CATEGORY FILTERS + BLOG GRID ====== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,216,208,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle
            title={t.articlesTitle}
            subtitle={t.articlesSubtitle}
          />

          {/* Category filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-tiffany text-black border-tiffany"
                    : "bg-transparent text-gray border-white/10 hover:border-tiffany/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog post grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    variants={fadeUp}
                    className="group"
                  >
                    <Link href={localizedHref(`/blog/${post.slug}`)} className="block">
                      <div className="relative bg-black border border-white/5 hover:border-tiffany/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                        {/* Image area */}
                        <div className="relative h-52 overflow-hidden">
                          {blogImages[post.slug] ? (
                            <Image
                              src={blogImages[post.slug]}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-dark to-black" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

                          {/* Category badge */}
                          <div className="absolute top-4 left-4 z-10">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold border backdrop-blur-sm ${
                                categoryColors[post.category] ||
                                "bg-tiffany/10 text-tiffany border-tiffany/20"
                              }`}
                            >
                              <Tag size={10} />
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          {/* Date + Read time */}
                          <div className="flex items-center gap-4 text-xs text-gray mb-4">
                            <span>{formatDate(post.date)}</span>
                            <span className="inline-flex items-center gap-1">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-display text-2xl tracking-wide group-hover:text-tiffany transition-colors duration-300 leading-snug">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="mt-3 text-sm text-white/50 leading-relaxed flex-1">
                            {post.excerpt}
                          </p>

                          {/* Read More */}
                          <div className="mt-6 pt-4 border-t border-white/5">
                            <span className="inline-flex items-center gap-2 text-tiffany text-xs uppercase tracking-widest font-semibold group-hover:gap-3 transition-all duration-300">
                              {t.readMore}
                              <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <BookOpen size={48} className="text-tiffany/20 mx-auto mb-4" />
                  <p className="text-gray text-lg">
                    {t.noArticles}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ====== NEWSLETTER SIGNUP ====== */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(129,216,208,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tiffany/10 border border-tiffany/20 mb-8">
              <Sparkles className="text-tiffany" size={28} />
            </div>

            <h2 className="font-display text-5xl md:text-7xl tracking-wide">
              {t.stayInspiredTitle1}<span className="text-tiffany">{t.stayInspiredTitle2}</span>
            </h2>

            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
              {brandify(t.stayInspiredDesc)}
            </p>

            {/* Newsletter form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 max-w-lg mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="flex-1 px-6 py-4 bg-dark border border-white/10 text-white text-sm placeholder:text-gray focus:outline-none focus:border-tiffany/50 transition-colors duration-300"
                  required
                />
                <Button type="submit">
                  <Send size={16} className="mr-2" />
                  {t.subscribe}
                </Button>
              </div>
              <p className="mt-4 text-xs text-gray">
                {t.noSpam}
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
