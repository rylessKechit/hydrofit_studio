"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Gift,
  Filter,
  Sparkles,
  ArrowRight,
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
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -20 },
};

const text = {
  fr: {
    heroTagline: "E-Boutique Hydrafit",
    heroTitle: "Boutique",
    heroDesc:
      "Accessoires premium, essentiels détox & cartes cadeaux pour sublimer votre expérience Hydrafit.",
    categories: ["Tous", "Accessoires", "Détox", "Cartes Cadeaux"] as const,
    allCategory: "Tous",
    giftCardsCategory: "Cartes Cadeaux",
    addToCart: "Ajouter au Panier",
    giftCardLabel: "Carte Cadeau",
    giftSectionTitle: "Offrez l'Expérience",
    giftSectionSubtitle:
      "Offrez le cadeau du bien-être. Nos cartes cadeaux sont utilisables pour les cours, le detox bar et les articles de la boutique.",
    purchase: "Acheter",
    needHelpTitle1: "Besoin d'",
    needHelpTitle2: "Aide",
    needHelpDesc:
      "Notre équipe est là pour vous aider à trouver le produit ou le cadeau parfait. Contactez-nous via WhatsApp ou rendez-nous visite en studio.",
    contactUs: "Nous Contacter",
    viewPricing: "Voir les Tarifs",
  },
  en: {
    heroTagline: "Hydrafit E-Shop",
    heroTitle: "Shop",
    heroDesc:
      "Premium accessories, detox essentials & gift cards to elevate your Hydrafit experience.",
    categories: ["All", "Accessories", "Detox", "Gift Cards"] as const,
    allCategory: "All",
    giftCardsCategory: "Gift Cards",
    addToCart: "Add to Cart",
    giftCardLabel: "Gift Card",
    giftSectionTitle: "Gift the Experience",
    giftSectionSubtitle:
      "Give someone the gift of wellness. Our gift cards are redeemable for classes, detox bar, and shop items.",
    purchase: "Purchase",
    needHelpTitle1: "Need ",
    needHelpTitle2: "Help",
    needHelpDesc:
      "Our team is here to help you find the perfect product or gift. Reach out via WhatsApp or visit us in studio.",
    contactUs: "Contact Us",
    viewPricing: "View Pricing",
  },
  ar: {
    heroTagline: "متجر هايدرافيت الإلكتروني",
    heroTitle: "المتجر",
    heroDesc:
      "إكسسوارات فاخرة، مستلزمات ديتوكس وبطاقات هدايا لتعزيز تجربتك مع هايدرافيت.",
    categories: ["الكل", "إكسسوارات", "ديتوكس", "بطاقات هدايا"] as const,
    allCategory: "الكل",
    giftCardsCategory: "بطاقات هدايا",
    addToCart: "أضيفي إلى السلة",
    giftCardLabel: "بطاقة هدية",
    giftSectionTitle: "أهدي التجربة",
    giftSectionSubtitle:
      "قدّمي هدية العافية لمن تحبين. بطاقات الهدايا صالحة للحصص وبار الديتوكس ومنتجات المتجر.",
    purchase: "شراء",
    needHelpTitle1: "تحتاجين ",
    needHelpTitle2: "مساعدة",
    needHelpDesc:
      "فريقنا هنا لمساعدتك في العثور على المنتج أو الهدية المثالية. تواصلي معنا عبر واتساب أو زورينا في الاستوديو.",
    contactUs: "تواصلي معنا",
    viewPricing: "عرض الأسعار",
  },
} as const;

/**
 * Map a translated category back to the data-level category string.
 * FR data uses "Accessoires", "Détox", "Cartes Cadeaux"
 * EN data uses "Accessories", "Detox", "Gift Cards"
 */
function mapCategoryToData(displayCategory: string, locale: string): string {
  if (locale === "fr") {
    const map: Record<string, string> = {
      Tous: "All",
      Accessoires: "Accessoires",
      Détox: "Détox",
      "Cartes Cadeaux": "Cartes Cadeaux",
    };
    return map[displayCategory] ?? displayCategory;
  }
  return displayCategory;
}

export default function ShopPageContent() {
  const locale = useLocale();
  const t = text[locale];
  const { shopProducts } = getTranslatedData(locale);
  const localizedHref = (href: string) => `/${locale}${href}`;

  const categories = t.categories;
  const [activeCategory, setActiveCategory] = useState<string>(t.allCategory);

  const dataGiftCardsCategory = t.giftCardsCategory;

  const filteredProducts = shopProducts.filter((product) => {
    if (activeCategory === t.allCategory)
      return product.category !== dataGiftCardsCategory;
    return product.category === activeCategory;
  });

  const giftCards = shopProducts.filter(
    (product) => product.category === dataGiftCardsCategory
  );

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
            <span className="inline-flex items-center gap-2 text-tiffany text-xs uppercase tracking-[0.3em] mb-6">
              <ShoppingBag size={14} />
              {brandify(t.heroTagline)}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl tracking-wide leading-none"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            {brandify(t.heroDesc)}
          </motion.p>
        </div>
      </section>

      {/* ====== CATEGORY FILTER + PRODUCT GRID ====== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <Filter size={16} className="text-gray mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 border ${
                  activeCategory === category
                    ? "border-tiffany bg-tiffany text-black"
                    : "border-white/10 text-gray hover:border-tiffany/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeCategory === t.giftCardsCategory
                ? giftCards
                : filteredProducts
              ).map((product, i) => (
                <motion.div
                  key={product.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeUp}
                >
                  <div className="group bg-dark border border-white/5 hover:border-tiffany/30 transition-all duration-500 overflow-hidden">
                    {/* Product Image Placeholder */}
                    <div className="relative aspect-square bg-gradient-to-br from-dark to-black overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.06)_0%,_transparent_70%)] group-hover:from-tiffany/10 transition-all duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {product.category === dataGiftCardsCategory ? (
                          <Gift
                            className="text-tiffany/30 group-hover:text-tiffany/50 transition-colors duration-500"
                            size={80}
                          />
                        ) : (
                          <ShoppingBag
                            className="text-white/10 group-hover:text-white/20 transition-colors duration-500"
                            size={80}
                          />
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest font-semibold bg-black/60 text-tiffany border border-tiffany/20 backdrop-blur-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="font-display text-xl tracking-wide group-hover:text-tiffany transition-colors duration-300">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-sm text-gray leading-relaxed line-clamp-2">
                        {product.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-display text-2xl text-tiffany tracking-wide">
                          {product.price}{" "}
                          <span className="text-sm text-gray">AED</span>
                        </span>

                        <Button variant="outline" size="sm">
                          {t.addToCart}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ====== GIFT CARDS HIGHLIGHT ====== */}
      {activeCategory !== t.giftCardsCategory && (
        <section className="py-24 bg-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(129,216,208,0.08)_0%,_transparent_60%)]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <SectionTitle
              title={t.giftSectionTitle}
              subtitle={t.giftSectionSubtitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {giftCards.map((card, i) => (
                <motion.div
                  key={card.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeUp}
                >
                  <div className="group relative bg-black border border-tiffany/20 hover:border-tiffany/50 transition-all duration-500 overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-tiffany/5 via-transparent to-tiffany/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center border border-tiffany/20 bg-tiffany/5">
                        <Gift
                          className="text-tiffany group-hover:scale-110 transition-transform duration-300"
                          size={40}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-2">
                          <Sparkles size={14} className="text-tiffany" />
                          <span className="text-[10px] uppercase tracking-widest text-tiffany font-semibold">
                            {t.giftCardLabel}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl tracking-wide">
                          {card.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      {/* Price + CTA */}
                      <div className="flex-shrink-0 text-center">
                        <div className="font-display text-4xl text-tiffany tracking-wide">
                          {card.price}
                        </div>
                        <div className="text-xs text-gray uppercase tracking-wider mt-1">
                          AED
                        </div>
                        <div className="mt-4">
                          <Button variant="primary" size="sm">
                            {t.purchase}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== CTA SECTION ====== */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(129,216,208,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl tracking-wide">
              {t.needHelpTitle1}<span className="text-tiffany">{t.needHelpTitle2}</span>?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              {t.needHelpDesc}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="https://wa.me/971501234567" size="lg">
                {t.contactUs}
              </Button>
              <Button href={localizedHref("/booking")} variant="outline" size="lg">
                {t.viewPricing}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
