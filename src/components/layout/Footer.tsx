"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube, Send } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { brandify } from "@/lib/brandify";
import { getTranslatedData, SOCIAL_LINKS, STUDIOS } from "@/lib/constants";

const UI = {
  fr: {
    joinTitle: "Rejoignez la Communauté Hydrafit",
    joinSubtitle: "Recevez des offres exclusives, des conseils bien-être et des invitations événements.",
    emailPlaceholder: "Votre email",
    brandDescription:
      "Expérience Aquabike Premium à Dubai. Plus qu'un entraînement — une expérience qui transforme votre corps et vous connecte à une communauté inspirante.",
    quickLinks: "Liens Rapides",
    getDirections: "Itinéraire →",
    copyright: "Hydrafit Studio. Tous droits réservés.",
    faq: "FAQ",
    legal: "Mentions Légales",
    privacy: "Politique de Confidentialité",
  },
  en: {
    joinTitle: "Join the Hydrafit Community",
    joinSubtitle: "Get exclusive offers, wellness tips, and event invitations.",
    emailPlaceholder: "Your email",
    brandDescription:
      "Premium Aquabike Experience in Dubai. More than a workout — an experience that transforms your body and connects you to an inspiring community.",
    quickLinks: "Quick Links",
    getDirections: "Get Directions →",
    copyright: "Hydrafit Studio. All rights reserved.",
    faq: "FAQ",
    legal: "Legal Notice",
    privacy: "Privacy Policy",
  },
  ar: {
    joinTitle: "انضم إلى مجتمع هايدرافيت",
    joinSubtitle: "احصل على عروض حصرية ونصائح صحية ودعوات للفعاليات.",
    emailPlaceholder: "بريدك الإلكتروني",
    brandDescription:
      "تجربة أكوابايك فاخرة في دبي. أكثر من مجرد تمرين — تجربة تحوّل جسمك وتربطك بمجتمع ملهم.",
    quickLinks: "روابط سريعة",
    getDirections: "← احصل على الاتجاهات",
    copyright: "استوديو هايدرافيت. جميع الحقوق محفوظة.",
    faq: "الأسئلة الشائعة",
    legal: "إشعار قانوني",
    privacy: "سياسة الخصوصية",
  },
} as const;

export default function Footer() {
  const locale = useLocale();
  const { navLinks } = getTranslatedData(locale);
  const t = UI[locale];

  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <footer className="bg-dark border-t border-white/5">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl tracking-wide">
                {brandify(t.joinTitle)}
              </h3>
              <p className="text-gray text-sm mt-1">
                {t.joinSubtitle}
              </p>
            </div>
            <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 md:w-72 px-4 py-3 bg-black border border-white/10 text-white text-sm placeholder:text-gray focus:border-tiffany focus:outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-6 py-3 bg-tiffany text-black font-semibold text-sm uppercase tracking-wider hover:bg-tiffany-dark transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href={localizedHref("/")} className="font-display text-3xl tracking-wider">
              HYDRA<span className="text-tiffany">FIT</span><span className="text-tiffany">.</span>
            </Link>
            <p className="mt-4 text-gray text-sm leading-relaxed">
              {t.brandDescription}
            </p>
            <div className="flex gap-4 mt-6">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-tiffany transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-tiffany transition-colors">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/50 hover:text-tiffany transition-colors">
                <Youtube size={20} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/50 hover:text-tiffany transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.15a8.16 8.16 0 005.58 2.17v-3.45a4.85 4.85 0 01-2-.56z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl tracking-wide mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link href={localizedHref(link.href)} className="text-gray text-sm hover:text-tiffany transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studios */}
          {STUDIOS.map((studio) => (
            <div key={studio.name}>
              <h4 className="font-display text-xl tracking-wide mb-4">{studio.name}</h4>
              <div className="space-y-2 text-gray text-sm">
                <p>{studio.address}</p>
                <p>{studio.phone}</p>
                <p className="text-xs">{studio.hours}</p>
                <a href={studio.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-tiffany text-xs uppercase tracking-widest hover:underline">
                  {t.getDirections}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray text-xs">
              © {new Date().getFullYear()} {brandify(t.copyright)}
            </p>
            <div className="flex gap-6 text-gray text-xs">
              <Link href={localizedHref("/legal")} className="hover:text-tiffany transition-colors">{t.legal}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
