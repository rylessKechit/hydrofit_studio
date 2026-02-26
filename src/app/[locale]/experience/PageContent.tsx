"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Footprints,
  Lock,
  Waves,
  GlassWater,
  Heart,
  Sparkles,
  Calendar,
  Users,
  ArrowRight,
  ChevronDown,
  Citrus,
  Music,
  Leaf,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Car,
  Train,
  Instagram,
  Award,
  Quote,
  Plus,
  Minus,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { brandify } from "@/lib/brandify";
import { useLocale } from "@/lib/i18n";
import { getTranslatedData, STUDIOS } from "@/lib/constants";

const StudioMap = dynamic(() => import("@/components/ui/StudioMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] md:h-[550px] bg-dark border border-white/10 flex items-center justify-center">
      <div className="text-tiffany/30 text-sm uppercase tracking-widest">Loading map...</div>
    </div>
  ),
});

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const lineGrow = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── Translations ─── */
const text = {
  fr: {
    // Hero
    heroTagline: "Plus qu\u2019un Entra\u00eenement",
    heroTitle1: "L\u2019",
    heroTitle2: "Exp\u00e9rience",
    heroDesc: "D\u00e8s votre arriv\u00e9e, chaque d\u00e9tail est pens\u00e9 pour vous offrir un moment d\u2019exception. Ce n\u2019est pas une salle de sport \u2014 c\u2019est un voyage sensoriel.",
    heroCtaBook: "R\u00e9server Votre Exp\u00e9rience",
    // Journey
    journeyTitle: "Votre Parcours",
    journeySubtitle: "Cinq \u00e9tapes. Une exp\u00e9rience inoubliable. Voici ce qui se passe lorsque vous visitez Hydrafit.",
    journeySteps: [
      { number: "01", title: "L\u2019Arriv\u00e9e", description: "Entrez dans un monde de calme. Un \u00e9clairage chaleureux, des accents bleu Tiffany et le parfum subtil de l\u2019eucalyptus vous accueillent. Notre concierge vous salue par votre nom et vous guide \u00e0 travers l\u2019espace.", detail: "Rituel d\u2019accueil premium avec eau infus\u00e9e et serviette chaude." },
      { number: "02", title: "Le Vestiaire", description: "Votre sanctuaire priv\u00e9 avant le cours. \u00c9quipements spa haut de gamme, douches \u00e0 effet pluie, produits de toilette premium, et tout ce dont vous avez besoin \u2014 il vous suffit de venir.", detail: "\u00c9quipements fournis : serviettes, chaussons aquatiques, produits capillaires, soins de la peau." },
      { number: "03", title: "Le Cours en Piscine", description: "Plongez-vous. Les lumi\u00e8res s\u2019estompent, la musique monte, et vous p\u00e9dalez. 45 minutes d\u2019entra\u00eenement haute intensit\u00e9, z\u00e9ro impact dans une eau \u00e0 temp\u00e9rature contr\u00f4l\u00e9e \u2014 guid\u00e9 par des coachs de classe mondiale.", detail: "Aquabike, Aqua Boxing, Aqua Rebound ou Aqua Yoga \u2014 \u00e0 vous de choisir." },
      { number: "04", title: "Le Detox Bar", description: "Votre rituel post-entra\u00eenement offert. Choisissez parmi des jus press\u00e9s \u00e0 froid, des smoothies aux superaliments et des boissons bien-\u00eatre signature \u2014 con\u00e7us pour reconstituer, r\u00e9parer et faire rayonner.", detail: "Chaque cours inclut une boisson d\u00e9tox gratuite. Menu complet disponible." },
      { number: "05", title: "Le Moment Communautaire", description: "Restez un peu plus longtemps. Connectez-vous avec les autres membres dans le lounge, partagez votre exp\u00e9rience et ressentez l\u2019\u00e9nergie d\u2019une communaut\u00e9 qui c\u00e9l\u00e8bre le bien-\u00eatre ensemble.", detail: "Notre lounge est votre espace pour \u00e9changer, vous d\u00e9tendre et vous sentir chez vous." },
    ],
    // Detox Bar
    detoxTitle: "Le Detox Bar",
    detoxSubtitle: "Votre rituel post-entra\u00eenement. Chaque cours inclut une boisson offerte de notre carte bien-\u00eatre.",
    detoxBannerTitle1: "Nourrissez-vous de l\u2019",
    detoxBannerTitle2: "Int\u00e9rieur",
    detoxBannerDesc: "Notre Detox Bar n\u2019est pas un \u00e0-c\u00f4t\u00e9 \u2014 c\u2019est une partie int\u00e9grante de l\u2019exp\u00e9rience Hydrafit. Chaque boisson est \u00e9labor\u00e9e par notre nutritionniste pour compl\u00e9ter votre entra\u00eenement et acc\u00e9l\u00e9rer la r\u00e9cup\u00e9ration.",
    detoxHighlights: [
      { title: "Jus Press\u00e9s \u00e0 Froid", description: "Jus crus, biologiques et riches en nutriments pr\u00e9par\u00e9s frais chaque jour." },
      { title: "Smoothies aux Superaliments", description: "M\u00e9langes puissants \u00e0 base d\u2019a\u00e7a\u00ef, spiruline, collag\u00e8ne et adaptog\u00e8nes." },
      { title: "Shots Bien-\u00catre", description: "Micro-doses concentr\u00e9es de gingembre, curcuma, herbe de bl\u00e9 et plus encore." },
    ],
    menuTitle: "Le Menu",
    menuSubtitle: "Chaque boisson est offerte avec chaque cours. Les upgrades premium et extras sont disponibles s\u00e9par\u00e9ment.",
    partOfExpTagline: "Pas un \u00e0-c\u00f4t\u00e9",
    partOfExpTitle1: "Partie int\u00e9grante de l\u2019",
    partOfExpTitle2: "Exp\u00e9rience",
    partOfExpDesc1: "Chez Hydrafit, le Detox Bar n\u2019est pas une offre s\u00e9par\u00e9e \u2014 c\u2019est une partie int\u00e9grante de votre parcours. Chaque cours inclut une boisson offerte car nous croyons que la r\u00e9cup\u00e9ration commence d\u00e8s que vous descendez du v\u00e9lo.",
    partOfExpDesc2: "Installez-vous dans notre lounge, connectez-vous avec votre communaut\u00e9, et laissez les nutriments faire leur travail.",
    detoxStats: [
      { value: "6", label: "Boissons Signature" },
      { value: "100%", label: "Ingr\u00e9dients Frais" },
      { value: "0", label: "Additifs Artificiels" },
      { value: "1", label: "Offerte \u00e0 Chaque Cours" },
    ],
    // Coaches
    coachesTitle: "Rencontrez Vos Coachs",
    coachesSubtitle: "Chaque s\u00e9ance est guid\u00e9e par un expert passionn\u00e9 de fitness aquatique.",
    certifications: "Certifications",
    // Studios
    studiosTitle: "Nos Studios",
    studiosSubtitle: "D\u00e9couvrez nos deux espaces de pointe \u00e0 travers Dubai.",
    address: "Adresse",
    openingHours: "Horaires d\u2019Ouverture",
    studioPhone: "T\u00e9l\u00e9phone",
    studioWhatsapp: "WhatsApp",
    messageWhatsapp: "Nous \u00e9crire sur WhatsApp",
    bookAt: "R\u00e9server \u00e0 ",
    getDirections: "Itin\u00e9raire",
    galleryTitle: "\u00c0 l\u2019Int\u00e9rieur du Studio",
    gallerySubtitle: "Un aper\u00e7u de l\u2019exp\u00e9rience Hydrafit. Design premium, bassins chauff\u00e9s et chaque d\u00e9tail soign\u00e9.",
    galleryLabels: ["Espace Piscine", "Zone Aquabike", "Vestiaires", "Detox Bar", "Lounge", "R\u00e9ception"],
    findTitle: "Nous Trouver",
    findSubtitle: "Deux emplacements strat\u00e9giques \u00e0 Dubai pour votre confort.",
    parkingTitle: "Parking & Acc\u00e8s",
    parkingSubtitle: "Venir chez Hydrafit est simple. Voici tout ce que vous devez savoir.",
    parkingInfo: [
      { studio: "Palm Jumeirah", icon: "car" as const, directions: ["Parking gratuit disponible au Nakheel Mall \u2013 Niveaux B1 & B2", "Service voiturier disponible \u00e0 l\u2019entr\u00e9e principale (50 AED)", "Studio situ\u00e9 au Niveau 2, pr\u00e8s des ascenseurs aile Ouest", "Suivez les panneaux \u2018Fitness & Wellness\u2019 depuis l\u2019atrium principal"] },
      { studio: "Business Bay", icon: "train" as const, directions: ["Parking souterrain Bay Square \u2013 2 premi\u00e8res heures gratuites avec validation", "Station de m\u00e9tro Business Bay \u2013 5 minutes \u00e0 pied via la passerelle couverte", "Entrez dans le B\u00e2timent 13 depuis la plaza du rez-de-chauss\u00e9e", "Studio au Niveau 1 \u2013 prenez l\u2019ascenseur ou les escaliers depuis le hall"] },
    ],
    amenitiesTitle: "Disponible dans les Deux Studios",
    amenities: [
      { label: "Vestiaires Premium", detail: "\u00c9quipements & produits complets" },
      { label: "Detox Bar", detail: "Jus frais & smoothies" },
      { label: "Espace Lounge", detail: "D\u00e9tente avant & apr\u00e8s le cours" },
      { label: "Service Serviettes", detail: "Offert \u00e0 chaque visite" },
    ],
    // Community & Events
    beyondTitle: "Au-del\u00e0 du Cours",
    beyondSubtitle: "Hydrafit est une communaut\u00e9. Nous cr\u00e9ons des moments qui rassemblent les gens autour du bien-\u00eatre.",
    communityPillars: [
      { title: "\u00c9v\u00e9nements Exclusifs", description: "Soir\u00e9es entre femmes, sessions au lever du soleil et ateliers bien-\u00eatre." },
      { title: "Communaut\u00e9 de Membres", description: "Un cercle de personnes partageant les m\u00eames id\u00e9es, passionn\u00e9es par le bien-\u00eatre." },
      { title: "Atmosph\u00e8re Soign\u00e9e", description: "Chaque d\u00e9tail est intentionnel \u2014 de la playlist \u00e0 l\u2019\u00e9clairage en passant par le parfum." },
    ],
    upcomingEvents1: "\u00c9v\u00e9nements",
    upcomingEvents2: "\u00c0 Venir",
    spots: "places",
    viewAllEvents: "Voir Tous les \u00c9v\u00e9nements",
    // FAQ
    faqTitle: "Questions Fr\u00e9quentes",
    faqSubtitle: "Tout ce que vous devez savoir sur Hydrafit Studio.",
    // CTA
    ctaTitle1: "Vivez l\u2019",
    ctaTitle2: "Exp\u00e9rience",
    ctaDesc: "Votre premi\u00e8re visite est plus qu\u2019un cours \u2014 c\u2019est une d\u00e9couverte. R\u00e9servez votre Pack Exp\u00e9rience et laissez-nous nous occuper de tout.",
    ctaBook: "R\u00e9server Votre Exp\u00e9rience",
    ctaWhatsapp: "WhatsApp",
  },
  en: {
    heroTagline: "More Than a Workout",
    heroTitle1: "The",
    heroTitle2: "Experience",
    heroDesc: "From the moment you walk in to the moment you leave, every detail is designed to make you feel extraordinary. This is not a gym \u2014 this is a journey.",
    heroCtaBook: "Book Your Experience",
    journeyTitle: "Your Journey",
    journeySubtitle: "Five steps. One unforgettable experience. Here\u2019s what happens when you visit Hydrafit.",
    journeySteps: [
      { number: "01", title: "The Arrival", description: "Step into a world of calm. Warm lighting, Tiffany blue accents, and the subtle scent of eucalyptus welcome you. Our concierge greets you by name and guides you through the space.", detail: "Premium welcome ritual with infused water and a warm towel." },
      { number: "02", title: "The Locker Room", description: "Your private sanctuary before class. Spa-grade amenities, rainfall showers, premium toiletries, and everything you need \u2014 so you only have to bring yourself.", detail: "Full amenities provided: towels, water shoes, hair products, skincare." },
      { number: "03", title: "The Pool Class", description: "Immerse yourself. The lights dim, the music rises, and you ride. 45 minutes of high-intensity, zero-impact training in temperature-controlled water \u2014 guided by world-class coaches.", detail: "Aquabike, Aqua Boxing, Aqua Rebound, or Aqua Yoga \u2014 your choice." },
      { number: "04", title: "The Detox Bar", description: "Your complimentary post-workout ritual. Choose from cold-pressed juices, superfood smoothies, and signature wellness drinks \u2014 crafted to replenish, repair, and glow.", detail: "Every class includes a free detox drink. Full menu available." },
      { number: "05", title: "The Community Moment", description: "Linger a little longer. Connect with fellow members in the lounge, share your experience, and feel the energy of a community that celebrates wellness together.", detail: "Our lounge is your space to connect, relax, and belong." },
    ],
    detoxTitle: "The Detox Bar",
    detoxSubtitle: "Your post-workout ritual. Every class includes a complimentary drink from our curated wellness menu.",
    detoxBannerTitle1: "Nourish from ",
    detoxBannerTitle2: "Within",
    detoxBannerDesc: "Our Detox Bar is not an afterthought \u2014 it\u2019s an integral part of the Hydrafit experience. Every drink is crafted by our nutritionist to complement your workout and accelerate recovery.",
    detoxHighlights: [
      { title: "Cold-Pressed Juices", description: "Raw, organic, nutrient-dense juices made fresh daily." },
      { title: "Superfood Smoothies", description: "Power-packed blends with acai, spirulina, collagen, and adaptogens." },
      { title: "Wellness Shots", description: "Concentrated micro-doses of ginger, turmeric, wheatgrass, and more." },
    ],
    menuTitle: "The Menu",
    menuSubtitle: "Each drink is included complimentary with every class. Premium upgrades and extras available separately.",
    partOfExpTagline: "Not an afterthought",
    partOfExpTitle1: "Part of the ",
    partOfExpTitle2: "Experience",
    partOfExpDesc1: "At Hydrafit, the Detox Bar isn\u2019t a separate offering \u2014 it\u2019s an integral part of your journey. Every class includes a complimentary drink because we believe recovery starts the moment you step off the bike.",
    partOfExpDesc2: "Sit in our lounge, connect with your community, and let the nutrients do their work.",
    detoxStats: [
      { value: "6", label: "Signature Drinks" },
      { value: "100%", label: "Fresh Ingredients" },
      { value: "0", label: "Artificial Additives" },
      { value: "1", label: "Free with Every Class" },
    ],
    coachesTitle: "Meet Your Coaches",
    coachesSubtitle: "Every session is led by an expert who lives and breathes aquatic fitness.",
    certifications: "Certifications",
    studiosTitle: "Our Studios",
    studiosSubtitle: "Discover both of our state-of-the-art locations across Dubai.",
    address: "Address",
    openingHours: "Opening Hours",
    studioPhone: "Phone",
    studioWhatsapp: "WhatsApp",
    messageWhatsapp: "Message us on WhatsApp",
    bookAt: "Book at ",
    getDirections: "Get Directions",
    galleryTitle: "Inside the Studio",
    gallerySubtitle: "A glimpse into the Hydrafit experience. Premium design, warm pools, and every detail considered.",
    galleryLabels: ["Pool Area", "Aquabike Zone", "Changing Rooms", "Detox Bar", "Lounge", "Reception"],
    findTitle: "Find Us",
    findSubtitle: "Two strategic locations across Dubai for your convenience.",
    parkingTitle: "Parking & Access",
    parkingSubtitle: "Getting to Hydrafit is easy. Here\u2019s everything you need to know.",
    parkingInfo: [
      { studio: "Palm Jumeirah", icon: "car" as const, directions: ["Free parking available at Nakheel Mall \u2013 Levels B1 & B2", "Valet service available at the main entrance (AED 50)", "Studio located on Level 2, near the West Wing elevators", "Follow signs for \u2018Fitness & Wellness\u2019 from the main atrium"] },
      { studio: "Business Bay", icon: "train" as const, directions: ["Bay Square underground parking \u2013 first 2 hours free with validation", "Business Bay Metro Station \u2013 5 minute walk via covered walkway", "Enter Building 13 from the ground floor plaza", "Studio on Level 1 \u2013 take the elevator or stairs from the lobby"] },
    ],
    amenitiesTitle: "Available at Both Locations",
    amenities: [
      { label: "Premium Changing Rooms", detail: "Full amenities & toiletries" },
      { label: "Detox Bar", detail: "Fresh juices & smoothies" },
      { label: "Lounge Area", detail: "Relax before & after class" },
      { label: "Towel Service", detail: "Complimentary with every visit" },
    ],
    beyondTitle: "Beyond the Class",
    beyondSubtitle: "Hydrafit is a community. We create moments that bring people together around wellness, celebration, and connection.",
    communityPillars: [
      { title: "Exclusive Events", description: "Ladies nights, sunrise sessions, and wellness workshops \u2014 curated experiences that go beyond the workout." },
      { title: "Member Community", description: "A circle of like-minded people who share a passion for wellness, positivity, and living life to the fullest." },
      { title: "Curated Atmosphere", description: "Every detail is intentional \u2014 from the playlist to the lighting to the scent." },
    ],
    upcomingEvents1: "Upcoming",
    upcomingEvents2: "Events",
    spots: "spots",
    viewAllEvents: "View All Events",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about Hydrafit Studio.",
    ctaTitle1: "Live the ",
    ctaTitle2: "Experience",
    ctaDesc: "Your first visit is more than a class \u2014 it\u2019s a discovery. Book your Experience Pack and let us take care of everything.",
    ctaBook: "Book Your Experience",
    ctaWhatsapp: "WhatsApp",
  },
  ar: {
    heroTagline: "\u0623\u0643\u062b\u0631 \u0645\u0646 \u0645\u062c\u0631\u0651\u062f \u062a\u0645\u0631\u064a\u0646",
    heroTitle1: "",
    heroTitle2: "\u0627\u0644\u062a\u062c\u0631\u0628\u0629",
    heroDesc: "\u0645\u0646 \u0644\u062d\u0638\u0629 \u062f\u062e\u0648\u0644\u0643 \u062d\u062a\u0649 \u0644\u062d\u0638\u0629 \u0645\u063a\u0627\u062f\u0631\u062a\u0643\u060c \u0643\u0644 \u062a\u0641\u0635\u064a\u0644 \u0645\u064f\u0635\u0645\u0651\u0645 \u0644\u064a\u0645\u0646\u062d\u0643 \u0634\u0639\u0648\u0631\u0627\u064b \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0627\u064b. \u0647\u0630\u0627 \u0644\u064a\u0633 \u0646\u0627\u062f\u064a\u0627\u064b \u0631\u064a\u0627\u0636\u064a\u0627\u064b \u2014 \u0625\u0646\u0647\u0627 \u0631\u062d\u0644\u0629 \u062d\u0633\u0651\u064a\u0629.",
    heroCtaBook: "\u0627\u062d\u062c\u0632 \u062a\u062c\u0631\u0628\u062a\u0643",
    journeyTitle: "\u0631\u062d\u0644\u062a\u0643",
    journeySubtitle: "\u062e\u0645\u0633 \u0645\u0631\u0627\u062d\u0644. \u062a\u062c\u0631\u0628\u0629 \u0644\u0627 \u062a\u064f\u0646\u0633\u0649. \u0625\u0644\u064a\u0643 \u0645\u0627 \u064a\u062d\u062f\u062b \u0639\u0646\u062f \u0632\u064a\u0627\u0631\u062a\u0643 \u0644\u0640 Hydrafit.",
    journeySteps: [
      { number: "01", title: "\u0627\u0644\u0648\u0635\u0648\u0644", description: "\u0627\u062f\u062e\u0644 \u0625\u0644\u0649 \u0639\u0627\u0644\u0645 \u0645\u0646 \u0627\u0644\u0647\u062f\u0648\u0621. \u0625\u0636\u0627\u0621\u0629 \u062f\u0627\u0641\u0626\u0629\u060c \u0644\u0645\u0633\u0627\u062a \u0628\u0644\u0648\u0646 \u062a\u064a\u0641\u0627\u0646\u064a \u0627\u0644\u0623\u0632\u0631\u0642\u060c \u0648\u0639\u0628\u064a\u0631 \u0627\u0644\u0623\u0648\u0643\u0627\u0644\u0628\u062a\u0648\u0633 \u0627\u0644\u0631\u0642\u064a\u0642 \u064a\u0631\u062d\u0651\u0628\u0648\u0646 \u0628\u0643.", detail: "\u0637\u0642\u0648\u0633 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0641\u0627\u062e\u0631\u0629 \u0645\u0639 \u0645\u064a\u0627\u0647 \u0645\u0646\u0643\u0651\u0647\u0629 \u0648\u0645\u0646\u0634\u0641\u0629 \u062f\u0627\u0641\u0626\u0629." },
      { number: "02", title: "\u063a\u0631\u0641\u0629 \u062a\u0628\u062f\u064a\u0644 \u0627\u0644\u0645\u0644\u0627\u0628\u0633", description: "\u0645\u0644\u0627\u0630\u0643 \u0627\u0644\u062e\u0627\u0635 \u0642\u0628\u0644 \u0627\u0644\u062d\u0635\u0629. \u0645\u0631\u0627\u0641\u0642 \u0628\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0633\u0628\u0627\u060c \u062f\u0634\u0627\u062a \u0628\u062a\u0623\u062b\u064a\u0631 \u0627\u0644\u0645\u0637\u0631\u060c \u0645\u0633\u062a\u062d\u0636\u0631\u0627\u062a \u0639\u0646\u0627\u064a\u0629 \u0641\u0627\u062e\u0631\u0629.", detail: "\u0645\u0631\u0627\u0641\u0642 \u0645\u062a\u0643\u0627\u0645\u0644\u0629: \u0645\u0646\u0627\u0634\u0641\u060c \u0623\u062d\u0630\u064a\u0629 \u0645\u0627\u0626\u064a\u0629\u060c \u0645\u0633\u062a\u062d\u0636\u0631\u0627\u062a \u0634\u0639\u0631." },
      { number: "03", title: "\u062d\u0635\u0629 \u0627\u0644\u0645\u0633\u0628\u062d", description: "\u0627\u0646\u063a\u0645\u0633 \u0641\u064a \u0627\u0644\u062a\u062c\u0631\u0628\u0629. \u062a\u062e\u0641\u062a \u0627\u0644\u0623\u0636\u0648\u0627\u0621\u060c \u064a\u0639\u0644\u0648 \u0635\u0648\u062a \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649\u060c \u0648\u062a\u0628\u062f\u0623 \u0628\u0627\u0644\u062a\u0645\u0631\u064a\u0646. \u0664\u0665 \u062f\u0642\u064a\u0642\u0629 \u0645\u0646 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0639\u0627\u0644\u064a \u0627\u0644\u0643\u062b\u0627\u0641\u0629 \u0628\u062f\u0648\u0646 \u0623\u064a \u062a\u0623\u062b\u064a\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0641\u0627\u0635\u0644.", detail: "\u0623\u0643\u0648\u0627\u0628\u0627\u064a\u0643\u060c \u0623\u0643\u0648\u0627 \u0628\u0648\u0643\u0633\u064a\u0646\u063a\u060c \u0623\u0643\u0648\u0627 \u0631\u064a\u0628\u0627\u0648\u0646\u062f\u060c \u0623\u0648 \u0623\u0643\u0648\u0627 \u064a\u0648\u063a\u0627." },
      { number: "04", title: "\u0628\u0627\u0631 \u0627\u0644\u062f\u064a\u062a\u0648\u0643\u0633", description: "\u0637\u0642\u0648\u0633\u0643 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629 \u0628\u0639\u062f \u0627\u0644\u062a\u0645\u0631\u064a\u0646. \u0627\u062e\u062a\u0631 \u0645\u0646 \u0627\u0644\u0639\u0635\u0627\u0626\u0631 \u0627\u0644\u0645\u0636\u063a\u0648\u0637\u0629 \u0639\u0644\u0649 \u0627\u0644\u0628\u0627\u0631\u062f\u060c \u0648\u0633\u0645\u0648\u0630\u064a \u0627\u0644\u0633\u0648\u0628\u0631\u0641\u0648\u062f\u060c \u0648\u0645\u0634\u0631\u0648\u0628\u0627\u062a \u0627\u0644\u0639\u0627\u0641\u064a\u0629 \u0627\u0644\u0645\u0645\u064a\u0632\u0629.", detail: "\u0643\u0644 \u062d\u0635\u0629 \u062a\u0634\u0645\u0644 \u0645\u0634\u0631\u0648\u0628 \u062f\u064a\u062a\u0648\u0643\u0633 \u0645\u062c\u0627\u0646\u064a." },
      { number: "05", title: "\u0644\u062d\u0638\u0629 \u0627\u0644\u0645\u062c\u062a\u0645\u0639", description: "\u0627\u0628\u0642\u064e \u0644\u0648\u0642\u062a \u0623\u0637\u0648\u0644 \u0642\u0644\u064a\u0644\u0627\u064b. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0622\u062e\u0631\u064a\u0646 \u0641\u064a \u0627\u0644\u0635\u0627\u0644\u0629\u060c \u0634\u0627\u0631\u0643 \u062a\u062c\u0631\u0628\u062a\u0643.", detail: "\u0635\u0627\u0644\u062a\u0646\u0627 \u0647\u064a \u0645\u0633\u0627\u062d\u062a\u0643 \u0644\u0644\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u0631\u062e\u0627\u0621 \u0648\u0627\u0644\u0634\u0639\u0648\u0631 \u0628\u0627\u0644\u0627\u0646\u062a\u0645\u0627\u0621." },
    ],
    detoxTitle: "\u0628\u0627\u0631 \u0627\u0644\u062f\u064a\u062a\u0648\u0643\u0633",
    detoxSubtitle: "\u0637\u0642\u0648\u0633\u0643 \u0628\u0639\u062f \u0627\u0644\u062a\u0645\u0631\u064a\u0646. \u0643\u0644 \u062d\u0635\u0629 \u062a\u0634\u0645\u0644 \u0645\u0634\u0631\u0648\u0628\u0627\u064b \u0645\u062c\u0627\u0646\u064a\u0627\u064b \u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0627\u0641\u064a\u0629.",
    detoxBannerTitle1: "\u063a\u0630\u0651\u0650 \u0646\u0641\u0633\u0643 \u0645\u0646 ",
    detoxBannerTitle2: "\u0627\u0644\u062f\u0627\u062e\u0644",
    detoxBannerDesc: "\u0628\u0627\u0631 \u0627\u0644\u062f\u064a\u062a\u0648\u0643\u0633 \u0644\u064a\u0633 \u0645\u062c\u0631\u0651\u062f \u0625\u0636\u0627\u0641\u0629 \u2014 \u0625\u0646\u0647 \u062c\u0632\u0621 \u0644\u0627 \u064a\u062a\u062c\u0632\u0623 \u0645\u0646 \u062a\u062c\u0631\u0628\u0629 Hydrafit.",
    detoxHighlights: [
      { title: "\u0639\u0635\u0627\u0626\u0631 \u0645\u0636\u063a\u0648\u0637\u0629 \u0639\u0644\u0649 \u0627\u0644\u0628\u0627\u0631\u062f", description: "\u0639\u0635\u0627\u0626\u0631 \u0637\u0627\u0632\u062c\u0629\u060c \u0639\u0636\u0648\u064a\u0629\u060c \u063a\u0646\u064a\u0629 \u0628\u0627\u0644\u0645\u063a\u0630\u064a\u0627\u062a \u062a\u064f\u062d\u0636\u0651\u0631 \u064a\u0648\u0645\u064a\u0627\u064b." },
      { title: "\u0633\u0645\u0648\u0630\u064a \u0627\u0644\u0633\u0648\u0628\u0631\u0641\u0648\u062f", description: "\u0645\u0632\u064a\u062c \u0642\u0648\u064a \u0645\u0646 \u0627\u0644\u0623\u0633\u0627\u064a\u060c \u0627\u0644\u0633\u0628\u064a\u0631\u0648\u0644\u064a\u0646\u0627\u060c \u0627\u0644\u0643\u0648\u0644\u0627\u062c\u064a\u0646\u060c \u0648\u0627\u0644\u0623\u062f\u0627\u0628\u062a\u0648\u062c\u064a\u0646\u0627\u062a." },
      { title: "\u0634\u0648\u062a\u0627\u062a \u0627\u0644\u0639\u0627\u0641\u064a\u0629", description: "\u062c\u0631\u0639\u0627\u062a \u0645\u0631\u0643\u0651\u0632\u0629 \u0645\u0646 \u0627\u0644\u0632\u0646\u062c\u0628\u064a\u0644\u060c \u0627\u0644\u0643\u0631\u0643\u0645\u060c \u0639\u0634\u0628\u0629 \u0627\u0644\u0642\u0645\u062d\u060c \u0648\u0627\u0644\u0645\u0632\u064a\u062f." },
    ],
    menuTitle: "\u0627\u0644\u0642\u0627\u0626\u0645\u0629",
    menuSubtitle: "\u0643\u0644 \u0645\u0634\u0631\u0648\u0628 \u0645\u062c\u0627\u0646\u064a \u0645\u0639 \u0643\u0644 \u062d\u0635\u0629. \u0627\u0644\u062a\u0631\u0642\u064a\u0627\u062a \u0627\u0644\u0645\u0645\u064a\u0632\u0629 \u0645\u062a\u0648\u0641\u0631\u0629 \u0628\u0634\u0643\u0644 \u0645\u0646\u0641\u0635\u0644.",
    partOfExpTagline: "\u0644\u064a\u0633\u062a \u0645\u062c\u0631\u0651\u062f \u0625\u0636\u0627\u0641\u0629",
    partOfExpTitle1: "\u062c\u0632\u0621 \u0645\u0646 ",
    partOfExpTitle2: "\u0627\u0644\u062a\u062c\u0631\u0628\u0629",
    partOfExpDesc1: "\u0641\u064a Hydrafit\u060c \u0628\u0627\u0631 \u0627\u0644\u062f\u064a\u062a\u0648\u0643\u0633 \u0644\u064a\u0633 \u0639\u0631\u0636\u0627\u064b \u0645\u0646\u0641\u0635\u0644\u0627\u064b \u2014 \u0625\u0646\u0647 \u062c\u0632\u0621 \u0644\u0627 \u064a\u062a\u062c\u0632\u0623 \u0645\u0646 \u0631\u062d\u0644\u062a\u0643.",
    partOfExpDesc2: "\u0627\u062c\u0644\u0633 \u0641\u064a \u0635\u0627\u0644\u062a\u0646\u0627\u060c \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0645\u062c\u062a\u0645\u0639\u0643\u060c \u0648\u062f\u0639 \u0627\u0644\u0645\u063a\u0630\u064a\u0627\u062a \u062a\u0642\u0648\u0645 \u0628\u0639\u0645\u0644\u0647\u0627.",
    detoxStats: [
      { value: "6", label: "\u0645\u0634\u0631\u0648\u0628\u0627\u062a \u0645\u0645\u064a\u0632\u0629" },
      { value: "100%", label: "\u0645\u0643\u0648\u0646\u0627\u062a \u0637\u0627\u0632\u062c\u0629" },
      { value: "0", label: "\u0625\u0636\u0627\u0641\u0627\u062a \u0635\u0646\u0627\u0639\u064a\u0629" },
      { value: "1", label: "\u0645\u062c\u0627\u0646\u064a\u0629 \u0645\u0639 \u0643\u0644 \u062d\u0635\u0629" },
    ],
    coachesTitle: "\u062a\u0639\u0631\u0651\u0641\u0648\u0627 \u0639\u0644\u0649 \u0645\u062f\u0631\u0628\u064a\u0643\u0645",
    coachesSubtitle: "\u0643\u0644 \u062c\u0644\u0633\u0629 \u064a\u0642\u0648\u062f\u0647\u0627 \u062e\u0628\u064a\u0631 \u064a\u0639\u064a\u0634 \u0648\u064a\u062a\u0646\u0641\u0633 \u0627\u0644\u0644\u064a\u0627\u0642\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629.",
    certifications: "\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a",
    studiosTitle: "\u0627\u0633\u062a\u0648\u062f\u064a\u0648\u0647\u0627\u062a\u0646\u0627",
    studiosSubtitle: "\u0627\u0643\u062a\u0634\u0641\u0648\u0627 \u0645\u0648\u0642\u0639\u064a\u0646\u0627 \u0627\u0644\u0645\u062a\u0637\u0648\u0631\u064a\u0646 \u0641\u064a \u0623\u0646\u062d\u0627\u0621 \u062f\u0628\u064a.",
    address: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
    openingHours: "\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644",
    studioPhone: "\u0627\u0644\u0647\u0627\u062a\u0641",
    studioWhatsapp: "\u0648\u0627\u062a\u0633\u0627\u0628",
    messageWhatsapp: "\u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628",
    bookAt: "\u0627\u062d\u062c\u0632 \u0641\u064a ",
    getDirections: "\u0627\u0644\u0627\u062a\u062c\u0627\u0647\u0627\u062a",
    galleryTitle: "\u062f\u0627\u062e\u0644 \u0627\u0644\u0627\u0633\u062a\u0648\u062f\u064a\u0648",
    gallerySubtitle: "\u0644\u0645\u062d\u0629 \u0639\u0646 \u062a\u062c\u0631\u0628\u0629 \u0647\u064a\u062f\u0631\u0627\u0641\u064a\u062a. \u062a\u0635\u0645\u064a\u0645 \u0641\u0627\u062e\u0631\u060c \u0623\u062d\u0648\u0627\u0636 \u062f\u0627\u0641\u0626\u0629\u060c \u0648\u0643\u0644 \u062a\u0641\u0635\u064a\u0644 \u0645\u062f\u0631\u0648\u0633.",
    galleryLabels: ["\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u0633\u0628\u062d", "\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062f\u0631\u0627\u062c\u0627\u062a \u0627\u0644\u0645\u0627\u0626\u064a\u0629", "\u063a\u0631\u0641 \u062a\u0628\u062f\u064a\u0644 \u0627\u0644\u0645\u0644\u0627\u0628\u0633", "\u0628\u0627\u0631 \u0627\u0644\u062f\u064a\u062a\u0648\u0643\u0633", "\u0627\u0644\u0635\u0627\u0644\u0629", "\u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644"],
    findTitle: "\u0645\u0648\u0642\u0639\u0646\u0627",
    findSubtitle: "\u0645\u0648\u0642\u0639\u0627\u0646 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0627\u0646 \u0641\u064a \u062f\u0628\u064a \u0644\u0631\u0627\u062d\u062a\u0643\u0645.",
    parkingTitle: "\u0645\u0648\u0627\u0642\u0641 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0648\u0635\u0648\u0644",
    parkingSubtitle: "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0647\u064a\u062f\u0631\u0627\u0641\u064a\u062a \u0633\u0647\u0644.",
    parkingInfo: [
      { studio: "Palm Jumeirah", icon: "car" as const, directions: ["\u0645\u0648\u0627\u0642\u0641 \u0645\u062c\u0627\u0646\u064a\u0629 \u0645\u062a\u0648\u0641\u0631\u0629 \u0641\u064a \u0646\u062e\u064a\u0644 \u0645\u0648\u0644 \u2013 \u0627\u0644\u0637\u0648\u0627\u0628\u0642 B1 \u0648 B2", "\u062e\u062f\u0645\u0629 \u0635\u0641 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u0645\u062a\u0648\u0641\u0631\u0629 \u0639\u0646\u062f \u0627\u0644\u0645\u062f\u062e\u0644 \u0627\u0644\u0631\u0626\u064a\u0633\u064a (50 \u062f\u0631\u0647\u0645)", "\u0627\u0644\u0627\u0633\u062a\u0648\u062f\u064a\u0648 \u0641\u064a \u0627\u0644\u0637\u0627\u0628\u0642 2", "\u0627\u062a\u0628\u0639\u0648\u0627 \u0644\u0627\u0641\u062a\u0627\u062a \u0627\u0644\u0644\u064a\u0627\u0642\u0629 \u0648\u0627\u0644\u0639\u0627\u0641\u064a\u0629"] },
      { studio: "Business Bay", icon: "train" as const, directions: ["\u0645\u0648\u0627\u0642\u0641 \u0628\u0627\u064a \u0633\u0643\u0648\u064a\u0631 \u062a\u062d\u062a \u0627\u0644\u0623\u0631\u0636 \u2013 \u0623\u0648\u0644 \u0633\u0627\u0639\u062a\u064a\u0646 \u0645\u062c\u0627\u0646\u0627\u064b", "\u0645\u062d\u0637\u0629 \u0645\u062a\u0631\u0648 \u0628\u0632\u0646\u0633 \u0628\u0627\u064a \u2013 5 \u062f\u0642\u0627\u0626\u0642 \u0633\u064a\u0631\u0627\u064b", "\u0627\u062f\u062e\u0644\u0648\u0627 \u0627\u0644\u0645\u0628\u0646\u0649 13 \u0645\u0646 \u0633\u0627\u062d\u0629 \u0627\u0644\u0637\u0627\u0628\u0642 \u0627\u0644\u0623\u0631\u0636\u064a", "\u0627\u0644\u0627\u0633\u062a\u0648\u062f\u064a\u0648 \u0641\u064a \u0627\u0644\u0637\u0627\u0628\u0642 1"] },
    ],
    amenitiesTitle: "\u0645\u062a\u0648\u0641\u0631 \u0641\u064a \u0643\u0644\u0627 \u0627\u0644\u0645\u0648\u0642\u0639\u064a\u0646",
    amenities: [
      { label: "\u063a\u0631\u0641 \u062a\u0628\u062f\u064a\u0644 \u0641\u0627\u062e\u0631\u0629", detail: "\u0645\u0631\u0627\u0641\u0642 \u0648\u0645\u0633\u062a\u0644\u0632\u0645\u0627\u062a \u0643\u0627\u0645\u0644\u0629" },
      { label: "\u0628\u0627\u0631 \u0627\u0644\u062f\u064a\u062a\u0648\u0643\u0633", detail: "\u0639\u0635\u0627\u0626\u0631 \u0637\u0627\u0632\u062c\u0629 \u0648\u0633\u0645\u0648\u0630\u064a" },
      { label: "\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062d\u0629", detail: "\u0627\u0633\u062a\u0631\u062e\u0648\u0627 \u0642\u0628\u0644 \u0648\u0628\u0639\u062f \u0627\u0644\u062d\u0635\u0629" },
      { label: "\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0646\u0627\u0634\u0641", detail: "\u0645\u062c\u0627\u0646\u064a\u0629 \u0645\u0639 \u0643\u0644 \u0632\u064a\u0627\u0631\u0629" },
    ],
    beyondTitle: "\u0645\u0627 \u0648\u0631\u0627\u0621 \u0627\u0644\u062d\u0635\u0629",
    beyondSubtitle: "Hydrafit \u0645\u062c\u062a\u0645\u0639. \u0646\u0635\u0646\u0639 \u0644\u062d\u0638\u0627\u062a \u062a\u062c\u0645\u0639 \u0627\u0644\u0646\u0627\u0633 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0641\u064a\u0629 \u0648\u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0644 \u0648\u0627\u0644\u062a\u0648\u0627\u0635\u0644.",
    communityPillars: [
      { title: "\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u062d\u0635\u0631\u064a\u0629", description: "\u0623\u0645\u0633\u064a\u0627\u062a \u0644\u0644\u0633\u064a\u062f\u0627\u062a\u060c \u062c\u0644\u0633\u0627\u062a \u0639\u0646\u062f \u0634\u0631\u0648\u0642 \u0627\u0644\u0634\u0645\u0633\u060c \u0648\u0648\u0631\u0634 \u0639\u0645\u0644 \u0644\u0644\u0639\u0627\u0641\u064a\u0629." },
      { title: "\u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0623\u0639\u0636\u0627\u0621", description: "\u062f\u0627\u0626\u0631\u0629 \u0645\u0646 \u0623\u0634\u062e\u0627\u0635 \u064a\u0634\u0627\u0631\u0643\u0648\u0646\u0643 \u0627\u0644\u0634\u063a\u0641 \u0628\u0627\u0644\u0639\u0627\u0641\u064a\u0629 \u0648\u0627\u0644\u0625\u064a\u062c\u0627\u0628\u064a\u0629." },
      { title: "\u0623\u062c\u0648\u0627\u0621 \u0645\u0646\u0633\u0651\u0642\u0629 \u0628\u0639\u0646\u0627\u064a\u0629", description: "\u0643\u0644 \u062a\u0641\u0635\u064a\u0644 \u0645\u062f\u0631\u0648\u0633 \u2014 \u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0648\u0633\u064a\u0642\u0649 \u0625\u0644\u0649 \u0627\u0644\u0625\u0636\u0627\u0621\u0629 \u0648\u0627\u0644\u0639\u0637\u0631." },
    ],
    upcomingEvents1: "\u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a",
    upcomingEvents2: "\u0627\u0644\u0642\u0627\u062f\u0645\u0629",
    spots: "\u0623\u0645\u0627\u0643\u0646",
    viewAllEvents: "\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a",
    faqTitle: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    faqSubtitle: "\u0643\u0644 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c\u064a\u0646 \u0645\u0639\u0631\u0641\u062a\u0647 \u0639\u0646 \u0647\u0627\u064a\u062f\u0631\u0627\u0641\u064a\u062a \u0633\u062a\u0648\u062f\u064a\u0648.",
    ctaTitle1: "\u0639\u0650\u0634 ",
    ctaTitle2: "\u0627\u0644\u062a\u062c\u0631\u0628\u0629",
    ctaDesc: "\u0632\u064a\u0627\u0631\u062a\u0643 \u0627\u0644\u0623\u0648\u0644\u0649 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0645\u062c\u0631\u0651\u062f \u062d\u0635\u0629 \u2014 \u0625\u0646\u0647\u0627 \u0627\u0643\u062a\u0634\u0627\u0641. \u0627\u062d\u062c\u0632 \u0628\u0627\u0642\u0629 \u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u0648\u062f\u0639\u0646\u0627 \u0646\u0647\u062a\u0645 \u0628\u0643\u0644 \u0634\u064a\u0621.",
    ctaBook: "\u0627\u062d\u062c\u0632 \u062a\u062c\u0631\u0628\u062a\u0643",
    ctaWhatsapp: "WhatsApp",
  },
};

/* ─── Static image arrays ─── */
const eventImages: Record<string, string> = {
  "soiree-femmes-mars": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop",
  "ladies-night-march": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop",
  "session-sunrise-rooftop": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
  "sunrise-session-rooftop": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
  "atelier-wellness-nutrition": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
  "wellness-workshop-nutrition": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
};

const journeyImages = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
];

const journeyIcons = [Footprints, Lock, Waves, GlassWater, Heart];
const detoxHighlightIcons = [Citrus, Leaf, Sparkles];
const communityIcons = [Calendar, Users, Music];
const philosophyIcons = [Leaf, Heart, Sparkles];

const teamPhotos = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
];

const studioCardImages = [
  "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=500&fit=crop",
];

const parkingIcons = { car: Car, train: Train };

/* ─── FAQ Item component ─── */
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} variants={fadeUp} className="border-b border-white/10 last:border-b-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-6 text-left group cursor-pointer" aria-expanded={isOpen}>
        <span className="text-lg md:text-xl font-semibold pr-8 group-hover:text-tiffany transition-colors duration-300">{question}</span>
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-white/20 group-hover:border-tiffany/50 transition-colors duration-300">
          {isOpen ? <Minus size={16} className="text-tiffany" /> : <Plus size={16} className="text-white/60 group-hover:text-tiffany transition-colors duration-300" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <p className="pb-6 text-gray leading-relaxed max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main component ─── */
export default function ExperiencePageContent() {
  const locale = useLocale();
  const t = text[locale];
  const { events, detoxMenu, teamMembers, faqItems } = getTranslatedData(locale);
  const localizedHref = (href: string) => `/${locale}${href}`;
  const whatsappUrl = `https://wa.me/${STUDIOS[0].whatsapp.replace(/\+/g, "")}`;

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1600&h=900&fit=crop" alt="" fill className="object-cover opacity-30" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.08)_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block text-tiffany text-xs uppercase tracking-[0.3em] mb-6">{t.heroTagline}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide leading-none">
            {t.heroTitle1}<br /><span className="text-tiffany">{t.heroTitle2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">{t.heroDesc}</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-10">
            <Button href={localizedHref("/booking")} size="lg">{t.heroCtaBook}</Button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ChevronDown className="text-tiffany" size={24} /></motion.div>
        </motion.div>
      </section>

      {/* ====== YOUR JOURNEY ====== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(129,216,208,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle title={t.journeyTitle} subtitle={brandify(t.journeySubtitle)} />
          <div className="relative mt-16">
            {t.journeySteps.map((step, i) => {
              const Icon = journeyIcons[i];
              return (
                <motion.div key={step.number} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="relative flex gap-6 md:gap-10 mb-16 last:mb-0">
                  <div className="flex flex-col items-center">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }} className="relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-2 border-tiffany bg-dark shrink-0">
                      <Icon className="text-tiffany" size={24} />
                    </motion.div>
                    {i < t.journeySteps.length - 1 && (
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={lineGrow} className="w-[2px] flex-1 bg-gradient-to-b from-tiffany/40 to-transparent origin-top mt-2" />
                    )}
                  </div>
                  <div className="pb-2 pt-2 md:pt-3 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-tiffany font-display text-3xl md:text-4xl tracking-wide">{step.number}</span>
                      <h3 className="font-display text-2xl md:text-3xl tracking-wide">{step.title}</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed max-w-xl">{step.description}</p>
                    <p className="mt-3 text-sm text-tiffany/80 flex items-center gap-2"><Sparkles size={14} className="text-tiffany" />{step.detail}</p>
                    <div className="relative mt-4 h-40 md:h-48 w-full max-w-md overflow-hidden border border-white/5">
                      <Image src={journeyImages[i]} alt={step.title} fill className="object-cover opacity-60" sizes="(max-width: 768px) 100vw, 400px" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== DETOX BAR (full) ====== */}
      <section id="detox-bar" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(129,216,208,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle title={t.detoxTitle} subtitle={t.detoxSubtitle} />

          {/* Detox banner */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative mt-4 mb-16 overflow-hidden border border-white/5">
            <div className="relative bg-gradient-to-r from-dark via-black to-dark p-12 md:p-16">
              <Image src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1200&h=600&fit=crop" alt="" fill className="object-cover opacity-15" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark via-black/80 to-dark" />
              <div className="relative z-10 text-center">
                <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                  <GlassWater className="text-tiffany mx-auto mb-6" size={48} />
                </motion.div>
                <h3 className="font-display text-3xl md:text-4xl tracking-wide mb-4">{t.detoxBannerTitle1}<span className="text-tiffany">{t.detoxBannerTitle2}</span></h3>
                <p className="text-white/60 max-w-xl mx-auto leading-relaxed">{brandify(t.detoxBannerDesc)}</p>
              </div>
            </div>
          </motion.div>

          {/* Detox highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.detoxHighlights.map((item, i) => {
              const Icon = detoxHighlightIcons[i];
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} variants={fadeUp} className="group p-8 bg-dark border border-white/5 hover:border-tiffany/20 transition-all duration-500">
                  <Icon className="text-tiffany mb-5 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="font-display text-xl tracking-wide mb-3">{item.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Full menu grid */}
          <div id="detox-menu" className="mt-16">
            <SectionTitle title={t.menuTitle} subtitle={t.menuSubtitle} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {detoxMenu.map((drink, i) => (
                <motion.div key={drink.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.3 } }} className="group relative bg-dark border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5" style={{ backgroundColor: drink.color }} />
                  <div className="absolute top-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl" style={{ backgroundColor: drink.color }} />
                  <div className="relative p-6 pl-8">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-2xl tracking-wide">{drink.name}</h3>
                      <span className="text-sm font-semibold px-3 py-1 shrink-0 ml-4" style={{ color: drink.color, backgroundColor: `${drink.color}15` }}>{drink.price} AED</span>
                    </div>
                    <span className="inline-block text-xs uppercase tracking-widest mb-4" style={{ color: drink.color }}>{drink.benefit}</span>
                    <p className="text-sm text-gray leading-relaxed">{drink.ingredients}</p>
                    <div className="mt-6 h-px w-12 opacity-30 group-hover:w-full transition-all duration-500" style={{ backgroundColor: drink.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Part of the experience */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative aspect-square bg-black/50 border border-white/5 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&h=800&fit=crop" alt="" fill className="object-cover opacity-50" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-br from-dark/60 via-transparent to-dark/40" />
              <div className="absolute top-6 right-6 flex gap-2 z-10">
                {detoxMenu.map((drink) => (<div key={drink.name} className="w-3 h-3 rounded-full" style={{ backgroundColor: drink.color }} />))}
              </div>
              <div className="absolute bottom-6 left-6 z-10"><GlassWater className="text-tiffany/40" size={48} /></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="text-tiffany text-xs uppercase tracking-[0.3em] mb-4 block">{t.partOfExpTagline}</span>
              <h2 className="font-display text-5xl md:text-6xl tracking-wide leading-none">{t.partOfExpTitle1}<span className="text-tiffany">{t.partOfExpTitle2}</span></h2>
              <p className="mt-6 text-white/60 leading-relaxed">{brandify(t.partOfExpDesc1)}</p>
              <p className="mt-4 text-white/60 leading-relaxed">{t.partOfExpDesc2}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {t.detoxStats.map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }} className="py-3">
                    <p className="font-display text-3xl text-tiffany">{stat.value}</p>
                    <p className="text-xs text-gray uppercase tracking-wider mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== COACHES ====== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,216,208,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle title={t.coachesTitle} subtitle={t.coachesSubtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="group">
                <div className="relative bg-black border border-white/5 hover:border-tiffany/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tiffany/0 to-tiffany/0 group-hover:from-tiffany/5 group-hover:to-transparent transition-all duration-700" />
                  <div className="relative z-10 p-8 sm:p-10">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-tiffany/20 group-hover:border-tiffany/50 transition-all duration-300 flex-shrink-0">
                        <Image src={teamPhotos[i]} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-3xl tracking-wide group-hover:text-tiffany transition-colors duration-300">{member.name}</h3>
                        <p className="text-tiffany text-sm uppercase tracking-widest mt-1">{member.role}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-white/70 text-sm leading-relaxed">{member.bio}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {member.certifications.map((cert) => (
                        <span key={cert} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-tiffany/10 border border-tiffany/20 text-tiffany text-xs tracking-wide"><Award size={12} />{cert}</span>
                      ))}
                    </div>
                    <div className="mt-6 pl-4 border-l-2 border-tiffany/30">
                      <div className="flex items-start gap-2">
                        <Quote size={16} className="text-tiffany/40 flex-shrink-0 mt-0.5" />
                        <p className="text-white/50 text-sm italic leading-relaxed">&ldquo;{member.quote}&rdquo;</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <a href={`https://instagram.com/${member.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray hover:text-tiffany transition-colors duration-300 text-sm">
                        <Instagram size={16} /><span>{member.instagram}</span><ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STUDIOS ====== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title={t.studiosTitle} subtitle={t.studiosSubtitle} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {STUDIOS.map((studio, i) => (
              <motion.div key={studio.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="group relative overflow-hidden bg-dark border border-white/5 hover:border-tiffany/30 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tiffany to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image src={studioCardImages[i]} alt={studio.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm border border-tiffany/30 px-4 py-2">
                    <span className="text-tiffany text-xs uppercase tracking-[0.2em] font-semibold">{brandify("Hydrafit Studio")}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-4xl md:text-5xl tracking-wide text-white">{studio.name}</h3>
                  <div className="mt-8 space-y-5">
                    <div className="flex items-start gap-4"><MapPin className="text-tiffany shrink-0 mt-0.5" size={18} /><div><p className="text-xs text-gray uppercase tracking-widest mb-1">{t.address}</p><p className="text-white/80 text-sm">{studio.address}</p></div></div>
                    <div className="flex items-start gap-4"><Clock className="text-tiffany shrink-0 mt-0.5" size={18} /><div><p className="text-xs text-gray uppercase tracking-widest mb-1">{t.openingHours}</p><p className="text-white/80 text-sm">{studio.hours}</p></div></div>
                    <div className="flex items-start gap-4"><Phone className="text-tiffany shrink-0 mt-0.5" size={18} /><div><p className="text-xs text-gray uppercase tracking-widest mb-1">{t.studioPhone}</p><p className="text-white/80 text-sm">{studio.phone}</p></div></div>
                    <div className="flex items-start gap-4"><MessageCircle className="text-tiffany shrink-0 mt-0.5" size={18} /><div><p className="text-xs text-gray uppercase tracking-widest mb-1">{t.studioWhatsapp}</p><a href={`https://wa.me/${studio.whatsapp.replace(/\+/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-tiffany text-sm hover:underline underline-offset-4">{t.messageWhatsapp}</a></div></div>
                  </div>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button href={localizedHref("/booking")} size="md">{t.bookAt}{studio.name}</Button>
                    <Button href={studio.mapUrl} variant="outline" size="md"><Navigation size={14} className="mr-2" />{t.getDirections}</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== GALLERY ====== */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title={t.galleryTitle} subtitle={brandify(t.gallerySubtitle)} />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8">
            {t.galleryLabels.map((label, i) => (
              <motion.div key={label} variants={staggerItem} className={`relative overflow-hidden border border-white/5 hover:border-tiffany/30 transition-all duration-500 cursor-pointer group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <div className={`relative ${i === 0 ? "aspect-square md:aspect-auto md:h-full min-h-[200px]" : "aspect-square"}`}>
                  <Image src={galleryImages[i]} alt={label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes={i === 0 ? "(max-width: 768px) 50vw, 66vw" : "(max-width: 768px) 50vw, 33vw"} />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-tiffany text-xs uppercase tracking-[0.2em] font-semibold">{label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-white/70 text-xs font-semibold">{label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====== MAP ====== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title={t.findTitle} subtitle={t.findSubtitle} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="mt-8">
            <StudioMap />
          </motion.div>
        </div>
      </section>

      {/* ====== PARKING & ACCESS ====== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,216,208,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle title={t.parkingTitle} subtitle={brandify(t.parkingSubtitle)} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {t.parkingInfo.map((info, i) => {
              const Icon = parkingIcons[info.icon];
              return (
                <motion.div key={info.studio} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="p-8 md:p-10 bg-black/50 border border-white/5 hover:border-tiffany/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-tiffany/10 border border-tiffany/20"><Icon className="text-tiffany" size={22} /></div>
                    <div>
                      <p className="text-xs text-tiffany uppercase tracking-[0.2em] font-semibold">{brandify("Hydrafit Studio")}</p>
                      <h3 className="font-display text-3xl tracking-wide text-white">{info.studio}</h3>
                    </div>
                  </div>
                  <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
                    {info.directions.map((direction, j) => (
                      <motion.li key={j} variants={staggerItem} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-tiffany shrink-0" />
                        <p className="text-white/70 text-sm leading-relaxed">{direction}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-12 p-8 border border-white/5 bg-black/30">
            <h4 className="font-display text-2xl tracking-wide text-white text-center mb-8">{t.amenitiesTitle}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.amenities.map((amenity, i) => (
                <motion.div key={amenity.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                  <p className="text-white text-sm font-semibold">{amenity.label}</p>
                  <p className="text-gray text-xs mt-1">{amenity.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== COMMUNITY & EVENTS ====== */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.04)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle title={t.beyondTitle} subtitle={brandify(t.beyondSubtitle)} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {t.communityPillars.map((pillar, i) => {
              const Icon = communityIcons[i];
              return (
                <motion.div key={pillar.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} variants={fadeUp} className="p-8 border border-white/5 hover:border-tiffany/20 transition-colors duration-300">
                  <Icon className="text-tiffany mb-4" size={28} />
                  <h3 className="font-display text-xl tracking-wide mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-16">
            <h3 className="font-display text-3xl md:text-4xl tracking-wide text-center mb-10">{t.upcomingEvents1}{" "}<span className="text-tiffany">{t.upcomingEvents2}</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <motion.div key={event.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} variants={fadeUp} className="group bg-dark border border-white/5 hover:border-tiffany/20 transition-all duration-500 overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-dark to-black overflow-hidden">
                    {eventImages[event.slug] ? (
                      <Image src={eventImages[event.slug]} alt={event.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(129,216,208,0.1)_0%,_transparent_70%)]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-tiffany text-black px-3 py-1 text-xs font-bold uppercase tracking-wider z-10">
                      {new Date(event.date).toLocaleDateString(locale === "fr" ? "fr-FR" : locale === "ar" ? "ar-AE" : "en-US", { month: "short", day: "numeric" })}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-xl tracking-wide mb-2 group-hover:text-tiffany transition-colors duration-300">{event.title}</h4>
                    <p className="text-xs text-tiffany uppercase tracking-wider mb-3">{event.time} &mdash; {event.studio}</p>
                    <p className="text-sm text-gray leading-relaxed">{event.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-white/50">{event.spots} {t.spots} &middot; {event.price} AED</span>
                      <ArrowRight size={16} className="text-tiffany opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button href={localizedHref("/events")} variant="outline">{t.viewAllEvents}<ArrowRight size={16} className="ml-2" /></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,216,208,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle title={t.faqTitle} subtitle={brandify(t.faqSubtitle)} />
          <div className="border-t border-white/10 mt-8">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(129,216,208,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-7xl tracking-wide">{t.ctaTitle1}<span className="text-tiffany">{t.ctaTitle2}</span></h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">{t.ctaDesc}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={localizedHref("/booking")} size="lg">{t.ctaBook}</Button>
              <Button href={whatsappUrl} variant="ghost" size="lg">{t.ctaWhatsapp}</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
