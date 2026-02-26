"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLocale, LOCALES } from "@/lib/i18n";
import { getTranslatedData } from "@/lib/constants";
import type { Locale } from "@/lib/i18n-config";
import Button from "@/components/ui/Button";

const UI = {
  fr: { bookNow: "Réserver", bookExperience: "Réserver Votre Expérience", more: "Plus" },
  en: { bookNow: "Book Now", bookExperience: "Book Your Experience", more: "More" },
  ar: { bookNow: "احجز الآن", bookExperience: "احجز تجربتك", more: "المزيد" },
} as const;

const LOCALE_LABELS: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  ar: "ع",
};

const LOCALE_NAMES: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { navLinks } = getTranslatedData(locale);
  const t = UI[locale];

  const switchPath = (target: Locale) =>
    pathname.replace(/^\/(fr|en|ar)/, `/${target}`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href={localizedHref("/")} className="flex-shrink-0">
              <span className="font-display text-2xl md:text-3xl tracking-wider text-white">
                HYDRA<span className="text-tiffany">FIT</span>
                <span className="text-tiffany">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(link.href)}
                  className="text-xs uppercase tracking-widest text-white/70 hover:text-tiffany transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Lang Switch + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/50 hover:text-tiffany transition-colors duration-300"
                >
                  <Globe size={14} />
                  <span>{LOCALE_LABELS[locale]}</span>
                </button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="absolute top-full right-0 mt-2 w-32 py-1 bg-dark border border-white/10"
                    >
                      {LOCALES.filter((l) => l !== locale).map((l) => (
                        <Link
                          key={l}
                          href={switchPath(l)}
                          onClick={() => setIsLangOpen(false)}
                          className="block px-4 py-2 text-xs uppercase tracking-widest text-white/70 hover:text-tiffany hover:bg-white/5 transition-colors"
                        >
                          {LOCALE_NAMES[l]}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden md:block">
                <Button href={localizedHref("/booking")} size="sm">
                  {t.bookNow}
                </Button>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-6 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={localizedHref(link.href)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-3xl tracking-wider text-white hover:text-tiffany transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Language links in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navLinks.length }}
                className="flex items-center gap-4"
              >
                {LOCALES.filter((l) => l !== locale).map((l) => (
                  <Link
                    key={l}
                    href={switchPath(l)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 font-display text-xl tracking-wider text-tiffany"
                  >
                    <Globe size={18} />
                    {LOCALE_NAMES[l]}
                  </Link>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Button
                  href={localizedHref("/booking")}
                  size="lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.bookExperience}
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
