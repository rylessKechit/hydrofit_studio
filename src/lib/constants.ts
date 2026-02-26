import type { Locale } from "./i18n-config";

/* ═══════════════════════════════════════════════════════
   NON-TRANSLATED DATA (same for all locales)
   ═══════════════════════════════════════════════════════ */

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/hydrafitstudio",
  tiktok: "https://www.tiktok.com/@hydrafitstudio",
  facebook: "https://www.facebook.com/hydrafitstudio",
  youtube: "https://www.youtube.com/@hydrafitstudio",
} as const;

export const STUDIOS = [
  {
    name: "Palm Jumeirah",
    address: "Nakheel Mall, Level 2, Palm Jumeirah, Dubai",
    phone: "+971 4 XXX XXXX",
    whatsapp: "+971501234567",
    hours: "Lun–Sam: 6:00 – 21:00 | Dim: 8:00 – 18:00",
    mapUrl: "https://maps.google.com/?q=Palm+Jumeirah+Dubai",
    lat: 25.1124,
    lng: 55.138,
  },
  {
    name: "Business Bay",
    address: "Bay Square, Building 13, Business Bay, Dubai",
    phone: "+971 4 XXX XXXX",
    whatsapp: "+971501234567",
    hours: "Lun–Sam: 6:00 – 21:00 | Dim: 8:00 – 18:00",
    mapUrl: "https://maps.google.com/?q=Business+Bay+Dubai",
    lat: 25.1866,
    lng: 55.2644,
  },
] as const;

/* ═══════════════════════════════════════════════════════
   BOOKING DATA (same for all locales)
   ═══════════════════════════════════════════════════════ */

export type PoolLocation = {
  id: string;
  name: string;
  type: "municipal" | "hotel";
  address: string;
};

export const POOL_LOCATIONS: PoolLocation[] = [
  { id: "palm", name: "Palm Jumeirah Pool", type: "municipal", address: "Nakheel Mall, Palm Jumeirah" },
  { id: "atlantis", name: "Atlantis Pool", type: "hotel", address: "Atlantis The Royal, Palm Jumeirah" },
  { id: "bay", name: "Business Bay Pool", type: "municipal", address: "Bay Square, Business Bay" },
  { id: "marina", name: "Marina Hotel Pool", type: "hotel", address: "Marina Walk, Dubai Marina" },
];

export const COURSE_COLORS: Record<string, string> = {
  aquabike: "#81D8D0",
  "aqua-rebound": "#A8D84E",
  "aqua-boxing": "#E87461",
  "aqua-yoga": "#C4A7E7",
};

export type ScheduleSlot = {
  day: number; // 0=Mon, 6=Sun
  time: string;
  courseId: string;
  locationId: string;
  spots: number;
  maxSpots: number;
};

export const WEEKLY_SCHEDULE: ScheduleSlot[] = [
  // Monday
  { day: 0, time: "07:00", courseId: "aquabike", locationId: "palm", spots: 8, maxSpots: 12 },
  { day: 0, time: "09:30", courseId: "aqua-rebound", locationId: "bay", spots: 6, maxSpots: 10 },
  { day: 0, time: "12:00", courseId: "aqua-yoga", locationId: "atlantis", spots: 10, maxSpots: 12 },
  { day: 0, time: "17:00", courseId: "aqua-boxing", locationId: "marina", spots: 4, maxSpots: 10 },
  { day: 0, time: "18:30", courseId: "aquabike", locationId: "palm", spots: 3, maxSpots: 12 },
  { day: 0, time: "20:00", courseId: "aqua-rebound", locationId: "bay", spots: 7, maxSpots: 10 },
  // Tuesday
  { day: 1, time: "07:00", courseId: "aqua-boxing", locationId: "bay", spots: 6, maxSpots: 10 },
  { day: 1, time: "09:30", courseId: "aquabike", locationId: "atlantis", spots: 9, maxSpots: 12 },
  { day: 1, time: "12:00", courseId: "aqua-yoga", locationId: "marina", spots: 5, maxSpots: 10 },
  { day: 1, time: "17:00", courseId: "aquabike", locationId: "palm", spots: 2, maxSpots: 12 },
  { day: 1, time: "18:30", courseId: "aqua-boxing", locationId: "bay", spots: 8, maxSpots: 10 },
  // Wednesday
  { day: 2, time: "07:00", courseId: "aquabike", locationId: "palm", spots: 10, maxSpots: 12 },
  { day: 2, time: "09:30", courseId: "aqua-boxing", locationId: "marina", spots: 7, maxSpots: 10 },
  { day: 2, time: "12:00", courseId: "aqua-yoga", locationId: "atlantis", spots: 8, maxSpots: 12 },
  { day: 2, time: "17:00", courseId: "aqua-rebound", locationId: "bay", spots: 5, maxSpots: 10 },
  { day: 2, time: "18:30", courseId: "aquabike", locationId: "palm", spots: 1, maxSpots: 12 },
  { day: 2, time: "20:00", courseId: "aqua-boxing", locationId: "marina", spots: 9, maxSpots: 10 },
  // Thursday
  { day: 3, time: "07:00", courseId: "aqua-boxing", locationId: "marina", spots: 4, maxSpots: 10 },
  { day: 3, time: "09:30", courseId: "aquabike", locationId: "bay", spots: 11, maxSpots: 12 },
  { day: 3, time: "12:00", courseId: "aqua-yoga", locationId: "atlantis", spots: 6, maxSpots: 12 },
  { day: 3, time: "17:00", courseId: "aquabike", locationId: "palm", spots: 5, maxSpots: 12 },
  { day: 3, time: "18:30", courseId: "aqua-rebound", locationId: "bay", spots: 3, maxSpots: 10 },
  // Friday
  { day: 4, time: "07:00", courseId: "aquabike", locationId: "atlantis", spots: 7, maxSpots: 12 },
  { day: 4, time: "09:30", courseId: "aqua-rebound", locationId: "palm", spots: 8, maxSpots: 10 },
  { day: 4, time: "12:00", courseId: "aqua-yoga", locationId: "marina", spots: 4, maxSpots: 10 },
  { day: 4, time: "17:00", courseId: "aqua-boxing", locationId: "bay", spots: 6, maxSpots: 10 },
  { day: 4, time: "18:30", courseId: "aquabike", locationId: "palm", spots: 2, maxSpots: 12 },
  { day: 4, time: "20:00", courseId: "aqua-boxing", locationId: "marina", spots: 10, maxSpots: 10 },
  // Saturday
  { day: 5, time: "08:00", courseId: "aquabike", locationId: "palm", spots: 9, maxSpots: 12 },
  { day: 5, time: "09:30", courseId: "aqua-rebound", locationId: "bay", spots: 5, maxSpots: 10 },
  { day: 5, time: "11:00", courseId: "aqua-boxing", locationId: "atlantis", spots: 8, maxSpots: 12 },
  { day: 5, time: "14:00", courseId: "aqua-yoga", locationId: "marina", spots: 7, maxSpots: 10 },
  { day: 5, time: "16:00", courseId: "aquabike", locationId: "palm", spots: 4, maxSpots: 12 },
  // Sunday
  { day: 6, time: "09:00", courseId: "aqua-yoga", locationId: "atlantis", spots: 12, maxSpots: 12 },
  { day: 6, time: "10:30", courseId: "aquabike", locationId: "palm", spots: 6, maxSpots: 12 },
  { day: 6, time: "12:00", courseId: "aqua-rebound", locationId: "bay", spots: 8, maxSpots: 10 },
  { day: 6, time: "14:00", courseId: "aqua-yoga", locationId: "marina", spots: 10, maxSpots: 10 },
];

/* ═══════════════════════════════════════════════════════
   TRANSLATED DATA — Organised per locale
   ═══════════════════════════════════════════════════════ */

// ---------- Types ----------

export type NavLink = { label: string; href: string };
export type Course = {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  level: string;
  calories: string;
  description: string;
  benefits: string[];
  category: "aquatic" | "wellness";
};
export type DetoxItem = {
  name: string;
  ingredients: string;
  benefit: string;
  color: string;
  price: number;
};
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  certifications: string[];
  instagram: string;
  quote: string;
};
export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  location: string;
};
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};
export type ShopProduct = {
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
};
export type EventItem = {
  slug: string;
  title: string;
  date: string;
  time: string;
  studio: string;
  description: string;
  spots: number;
  price: number;
};
export type FaqItem = { question: string; answer: string };

type TranslatedData = {
  navLinks: NavLink[];
  courses: Course[];
  detoxMenu: DetoxItem[];
  teamMembers: TeamMember[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  shopProducts: ShopProduct[];
  events: EventItem[];
  faqItems: FaqItem[];
};

/* ══════════════════════════════════════════════════
   FRENCH (default)
   ══════════════════════════════════════════════════ */

const FR: TranslatedData = {
  navLinks: [
    { label: "L'Expérience", href: "/experience" },
    { label: "Les Cours", href: "/courses" },
    { label: "Réserver", href: "/booking" },
    { label: "Événements", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Boutique", href: "/shop" },
  ],
  courses: [
    {
      slug: "aquabike",
      name: "Aquabike",
      tagline: "Le cours signature",
      duration: "45 min",
      level: "Tous Niveaux",
      calories: "800",
      description:
        "Notre cours signature d'aquabike associe un pédalage intensif dans l'eau pour un maximum d'efficacité avec zéro impact articulaire. Sculptez vos jambes, stimulez la circulation et profitez des bienfaits naturels du drainage lymphatique aquatique. Particulièrement recommandé pour les femmes souffrant de lipœdème ou de jambes lourdes — la pression hydrostatique agit comme une compression naturelle, réduisant les gonflements dès la première séance.",
      benefits: [
        "Jusqu'à 800 calories par séance",
        "Zéro impact articulaire",
        "Drainage lymphatique naturel",
        "Soulage le lipœdème et les jambes lourdes",
        "Améliore la circulation sanguine",
        "Tonifie jambes et fessiers",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-rebound",
      name: "Aqua Rebound",
      tagline: "Rebondissez. Éclaboussez. Transformez-vous.",
      duration: "45 min",
      level: "Intermédiaire",
      calories: "600",
      description:
        "Le fitness sur trampoline rencontre la résistance de l'eau. Un entraînement explosif et fun qui sollicite l'ensemble du corps tandis que l'eau apporte un amorti naturel pour vos articulations.",
      benefits: [
        "Entraînement complet du corps",
        "Endurance cardiovasculaire",
        "Renforcement des abdominaux",
        "Amélioration de l'équilibre",
        "Libération du stress",
        "Fun et énergisant",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-boxing",
      name: "Aqua Boxing",
      tagline: "Frappez. Glissez. Dépassez-vous.",
      duration: "45 min",
      level: "Tous Niveaux",
      calories: "700",
      description:
        "Libérez votre énergie avec des mouvements de boxe contre la résistance de l'eau. Un entraînement complet qui développe force, agilité et confiance en soi — tout en douceur pour votre corps.",
      benefits: [
        "Tonification du haut du corps",
        "Libération du stress",
        "Meilleure coordination",
        "Condition cardiovasculaire",
        "Confiance en soi",
        "Définition musculaire",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-yoga",
      name: "Aqua Yoga",
      tagline: "Flottez. Respirez. Ressourcez-vous.",
      duration: "50 min",
      level: "Tous Niveaux",
      calories: "300",
      description:
        "Une pratique de yoga sereine sublimée par les propriétés apaisantes de l'eau. Idéal pour les étirements profonds, la pleine conscience et la récupération. Parfait pour celles qui recherchent équilibre et sérénité.",
      benefits: [
        "Souplesse profonde",
        "Clarté mentale",
        "Réduction du stress",
        "Mobilité articulaire",
        "Récupération musculaire",
        "Paix intérieure",
      ],
      category: "wellness",
    },
  ],
  detoxMenu: [
    {
      name: "Green Goddess",
      ingredients: "Épinards, concombre, pomme verte, gingembre, citron",
      benefit: "Détox & Énergie",
      color: "#4CAF50",
      price: 45,
    },
    {
      name: "Berry Blast",
      ingredients: "Fruits rouges, banane, açaï, lait d'amande",
      benefit: "Boost Antioxydant",
      color: "#9C27B0",
      price: 48,
    },
    {
      name: "Golden Recovery",
      ingredients: "Curcuma, mangue, eau de coco, poivre noir",
      benefit: "Anti-inflammatoire",
      color: "#FF9800",
      price: 42,
    },
    {
      name: "Circulation Boost",
      ingredients: "Betterave, carotte, orange, gingembre",
      benefit: "Circulation & Drainage",
      color: "#E91E63",
      price: 45,
    },
    {
      name: "Protein Power",
      ingredients: "Banane, beurre de cacahuète, lait d'avoine, protéine végétale, cacao",
      benefit: "Récupération Musculaire",
      color: "#795548",
      price: 52,
    },
    {
      name: "Hydra Glow",
      ingredients: "Eau de coco, ananas, menthe, collagène",
      benefit: "Peau & Hydratation",
      color: "#81D8D0",
      price: 50,
    },
  ],
  teamMembers: [
    {
      name: "Sarah Al-Maktoum",
      role: "Fondatrice & Coach Principale",
      bio: "Avec 15 ans d'expérience en fitness aquatique et une passion pour le bien-être holistique, Sarah a créé Hydrafit pour apporter une approche révolutionnaire du wellness à Dubai.",
      certifications: ["Certifiée ACE", "Professionnelle Fitness Aquatique", "Coach Nutrition"],
      instagram: "@sarah_hydrafit",
      quote: "Votre corps est composé à 70% d'eau. Entraînez-vous dans votre élément.",
    },
    {
      name: "Marc Dubois",
      role: "Instructeur Senior Aquabike",
      bio: "Ancien cycliste de compétition devenu spécialiste de l'aquabike. Marc apporte énergie et précision à chaque cours, aidant chaque membre à se dépasser en toute sécurité.",
      certifications: ["Certifié Les Mills", "Spécialiste Aquabike", "MSc Sciences du Sport"],
      instagram: "@marc_aquabike",
      quote: "Dans l'eau, chaque mouvement devient plus puissant.",
    },
    {
      name: "Priya Sharma",
      role: "Coach Yoga & Bien-Être",
      bio: "Thérapeute de yoga certifiée avec une spécialisation en yoga aquatique. Priya combine philosophie orientale et science du fitness moderne pour une expérience transformatrice.",
      certifications: ["RYT-500", "Certifiée Yoga Aquatique", "Praticienne Ayurvédique"],
      instagram: "@priya_aquayoga",
      quote: "L'eau nous apprend à lâcher prise et à nous laisser porter.",
    },
    {
      name: "James Carter",
      role: "Instructeur Boxing & HIIT",
      bio: "Ex-boxeur professionnel qui a découvert la puissance de l'entraînement aquatique pour la rééducation. Il canalise désormais cette énergie dans des cours d'aqua-boxing explosifs.",
      certifications: ["Coach Boxe Niveau 3", "Spécialiste HIIT", "Spécialiste en Rééducation"],
      instagram: "@james_aquabox",
      quote: "L'eau ne rend pas les coups — mais elle vous rend plus fort.",
    },
  ],
  testimonials: [
    {
      name: "Emma T.",
      text: "Hydrafit a changé ma vie. Je suis venue pour l'aquabike et je suis restée pour la communauté. Le detox bar après le cours est mon rituel préféré. Ce n'est pas juste du sport — c'est mon havre de paix.",
      rating: 5,
      location: "Dubai Marina",
    },
    {
      name: "Fatima K.",
      text: "Après ma grossesse, je cherchais un exercice doux. L'aquabike chez Hydrafit m'a donné des résultats incroyables sans aucune douleur articulaire. Les coachs sont formidables !",
      rating: 5,
      location: "Palm Jumeirah",
    },
    {
      name: "David R.",
      text: "En tant que professionnel très occupé, j'avais besoin de quelque chose d'efficace. 45 minutes d'aquabike brûlent plus que mes séances d'1h30 en salle. Le studio de Business Bay est idéal.",
      rating: 5,
      location: "Business Bay",
    },
    {
      name: "Lisa M.",
      text: "Je souffre de lipœdème et Hydrafit a tout changé pour moi. La pression de l'eau aide au drainage et j'ai vu des améliorations visibles en seulement 2 mois. Pour la première fois, j'ai trouvé un exercice qui m'aide vraiment au lieu d'aggraver les choses.",
      rating: 5,
      location: "JBR",
    },
    {
      name: "Sophie L.",
      text: "L'ensemble de l'expérience est premium — des magnifiques studios au detox bar. J'amène toutes mes amies ici. C'est notre rituel hebdomadaire !",
      rating: 5,
      location: "Downtown Dubai",
    },
    {
      name: "Ahmed N.",
      text: "J'étais sceptique sur l'aquabike en tant qu'homme, mais l'intensité n'est pas une blague. Le meilleur entraînement cardio que j'ai jamais eu, et mes genoux me remercient chaque jour.",
      rating: 5,
      location: "Business Bay",
    },
  ],
  blogPosts: [
    {
      slug: "bienfaits-aquabike-guide-complet",
      title: "Le Guide Complet des Bienfaits de l'Aquabike",
      excerpt:
        "Découvrez pourquoi l'aquabike est l'entraînement à faible impact le plus efficace et comment il peut transformer votre corps et votre esprit.",
      category: "Bien-Être & Santé",
      date: "2026-02-20",
      readTime: "8 min de lecture",
    },
    {
      slug: "lipoedeme-exercice-fitness-aquatique",
      title: "Lipœdème & Exercice : Pourquoi le Fitness Aquatique Est la Réponse",
      excerpt:
        "Comment l'exercice en milieu aquatique peut aider à gérer les symptômes du lipœdème et améliorer la qualité de vie.",
      category: "Bien-Être & Santé",
      date: "2026-02-15",
      readTime: "10 min de lecture",
    },
    {
      slug: "meilleurs-studios-fitness-dubai-2026",
      title: "Les Meilleurs Studios de Fitness Premium à Dubai en 2026",
      excerpt:
        "Un guide des expériences fitness les plus exclusives de Dubai — de l'aquabike au yoga sur les toits.",
      category: "Lifestyle Dubai",
      date: "2026-02-10",
      readTime: "6 min de lecture",
    },
    {
      slug: "recettes-smoothie-detox-post-entrainement",
      title: "5 Recettes de Smoothies Détox pour la Récupération",
      excerpt:
        "Boostez votre récupération avec ces recettes de smoothies riches en nutriments, inspirées du menu de notre Detox Bar.",
      category: "Nutrition & Détox",
      date: "2026-02-05",
      readTime: "5 min de lecture",
    },
  ],
  shopProducts: [
    {
      slug: "hydrafit-gourde",
      name: "Gourde Premium Hydrafit",
      price: 120,
      category: "Accessoires",
      description: "Gourde en acier inoxydable isotherme avec le branding Hydrafit. Garde vos boissons fraîches 24h.",
    },
    {
      slug: "pack-jus-detox-5",
      name: "Pack Jus Détox (5 bouteilles)",
      price: 200,
      category: "Détox",
      description: "Une sélection de 5 jus pressés à froid de notre Detox Bar, livrés frais.",
    },
    {
      slug: "set-serviettes-aquabike",
      name: "Set Serviettes Aquabike",
      price: 180,
      category: "Accessoires",
      description: "Set de serviettes en microfibre séchage rapide bleu Tiffany signature. Inclut serviette sport et serviette cheveux.",
    },
    {
      slug: "carte-cadeau-500",
      name: "Carte Cadeau – 500 AED",
      price: 500,
      category: "Cartes Cadeaux",
      description: "Offrez le cadeau du bien-être. Utilisable pour les cours, le detox bar et la boutique.",
    },
    {
      slug: "carte-cadeau-1000",
      name: "Carte Cadeau – 1000 AED",
      price: 1000,
      category: "Cartes Cadeaux",
      description: "Le cadeau bien-être ultime. Couvre les cours, les packs et les articles de la boutique.",
    },
    {
      slug: "hydrafit-sac-sport",
      name: "Sac de Sport Hydrafit",
      price: 350,
      category: "Accessoires",
      description: "Sac de sport étanche avec compartiment humide. Parfait pour votre équipement aquabike.",
    },
  ],
  events: [
    {
      slug: "soiree-femmes-mars",
      title: "Soirée Ladies : Glow & Flow",
      date: "2026-03-08",
      time: "19h00 – 22h00",
      studio: "Palm Jumeirah",
      description:
        "Célébrez la Journée Internationale des Femmes avec une soirée exclusive de fitness aquatique, cocktails détox et moments de partage.",
      spots: 30,
      price: 200,
    },
    {
      slug: "session-sunrise-rooftop",
      title: "Session Aqua au Lever du Soleil",
      date: "2026-03-15",
      time: "06h00 – 08h00",
      studio: "Business Bay",
      description:
        "Commencez votre week-end par une session d'aquabike au lever du soleil avec vue sur la skyline de Dubai, suivie d'un petit-déjeuner bien-être.",
      spots: 20,
      price: 180,
    },
    {
      slug: "atelier-wellness-nutrition",
      title: "Atelier Nutrition & Bien-Être",
      date: "2026-03-22",
      time: "10h00 – 12h00",
      studio: "Palm Jumeirah",
      description:
        "Rejoignez notre experte en nutrition pour un atelier sur l'alimentation anti-inflammatoire, les stratégies détox et les plans bien-être personnalisés.",
      spots: 25,
      price: 150,
    },
  ],
  faqItems: [
    {
      question: "Que dois-je apporter pour mon premier cours ?",
      answer:
        "Juste vous-même et un maillot de bain ! Nous fournissons serviettes, chaussons aquatiques, casiers et tous les équipements. Nos vestiaires sont entièrement équipés avec produits de douche, sèche-cheveux et articles de toilette premium.",
    },
    {
      question: "Faut-il savoir nager ?",
      answer:
        "Pas du tout ! L'eau dans nos bassins arrive à la taille (environ 1,30 m). Vous serez debout et pédalerez pendant toute la séance. Aucune compétence en natation n'est requise.",
    },
    {
      question: "L'aquabike est-il bénéfique pour le lipœdème et les jambes lourdes ?",
      answer:
        "Oui — l'aquabike est l'un des exercices les plus recommandés pour les femmes souffrant de lipœdème ou de jambes lourdes. La pression hydrostatique de l'eau agit comme une compression naturelle, stimulant le drainage lymphatique et réduisant les gonflements. Beaucoup de nos membres atteintes de lipœdème constatent des améliorations visibles en quelques semaines. L'absence d'impact signifie aucune douleur ni aggravation des symptômes.",
    },
    {
      question: "L'aquabike convient-il aux personnes ayant des problèmes articulaires ?",
      answer:
        "Absolument ! L'aquabike est l'un des meilleurs exercices pour les personnes souffrant de problèmes articulaires. La flottabilité de l'eau réduit l'impact du poids corporel jusqu'à 80%, ce qui le rend doux pour les genoux, les hanches et les chevilles tout en offrant un entraînement intense.",
    },
    {
      question: "Combien de calories brûle une séance d'aquabike ?",
      answer:
        "Une séance moyenne de 45 minutes brûle entre 600 et 800 calories, selon l'intensité. La résistance de l'eau rend chaque mouvement 12 fois plus efficace que sur terre.",
    },
    {
      question: "Les hommes peuvent-ils aussi participer ?",
      answer:
        "Bien sûr ! Bien que notre communauté ait une forte énergie féminine, tous nos cours sont ouverts à tous. Beaucoup d'hommes ont découvert l'aquabike comme une alternative supérieure aux entraînements en salle traditionnels.",
    },
    {
      question: "Quelle est la politique d'annulation ?",
      answer:
        "Vous pouvez annuler ou reprogrammer jusqu'à 6 heures avant votre cours sans pénalité. Les annulations tardives ou absences entraîneront une déduction de cours de votre pack.",
    },
    {
      question: "Le Detox Bar est-il inclus avec mon cours ?",
      answer:
        "Oui ! Chaque cours inclut une boisson détox offerte de votre choix. Notre menu complet de jus et smoothies premium est également disponible à l'achat séparément.",
    },
    {
      question: "Proposez-vous des séances privées ?",
      answer:
        "Oui, nous proposons des séances privées et semi-privées pour les individus ou petits groupes. Contactez-nous via WhatsApp pour organiser une expérience personnalisée.",
    },
  ],
};

/* ══════════════════════════════════════════════════
   ENGLISH
   ══════════════════════════════════════════════════ */

const EN: TranslatedData = {
  navLinks: [
    { label: "The Experience", href: "/experience" },
    { label: "Classes", href: "/courses" },
    { label: "Book", href: "/booking" },
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Shop", href: "/shop" },
  ],
  courses: [
    {
      slug: "aquabike",
      name: "Aquabike",
      tagline: "The signature ride",
      duration: "45 min",
      level: "All Levels",
      calories: "800",
      description:
        "Our signature aquabike class combines high-intensity cycling in water for maximum calorie burn with zero joint impact. Sculpt your legs, boost circulation, and experience the natural lymphatic drainage benefits of aquatic fitness. Particularly recommended for women with lipoedema or heavy legs — the hydrostatic pressure acts as a natural compression, reducing swelling from the very first session.",
      benefits: [
        "Burns up to 800 calories per session",
        "Zero joint impact",
        "Natural lymphatic drainage",
        "Relieves lipoedema & heavy legs symptoms",
        "Improves blood circulation",
        "Tones legs and glutes",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-rebound",
      name: "Aqua Rebound",
      tagline: "Bounce. Splash. Transform.",
      duration: "45 min",
      level: "Intermediate",
      calories: "600",
      description:
        "High-energy trampoline fitness meets water resistance. An explosive, fun workout that engages your entire body while the water provides natural cushioning for your joints.",
      benefits: [
        "Full body workout",
        "Cardiovascular endurance",
        "Core strengthening",
        "Balance improvement",
        "Stress relief",
        "Fun and energizing",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-boxing",
      name: "Aqua Boxing",
      tagline: "Fight. Flow. Empower.",
      duration: "45 min",
      level: "All Levels",
      calories: "700",
      description:
        "Unleash your power with boxing moves against water resistance. A full-body combat workout that builds strength, agility, and confidence — all while being gentle on your body.",
      benefits: [
        "Upper body toning",
        "Stress release",
        "Improved coordination",
        "Cardiovascular fitness",
        "Self-confidence boost",
        "Muscle definition",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-yoga",
      name: "Aqua Yoga",
      tagline: "Float. Breathe. Restore.",
      duration: "50 min",
      level: "All Levels",
      calories: "300",
      description:
        "A serene yoga practice enhanced by the soothing properties of water. Perfect for deep stretching, mindfulness, and recovery. Ideal for those seeking balance and relaxation.",
      benefits: [
        "Deep flexibility",
        "Mental clarity",
        "Stress reduction",
        "Joint mobility",
        "Muscle recovery",
        "Inner peace",
      ],
      category: "wellness",
    },
  ],
  detoxMenu: [
    {
      name: "Green Goddess",
      ingredients: "Spinach, cucumber, green apple, ginger, lemon",
      benefit: "Detox & Energy",
      color: "#4CAF50",
      price: 45,
    },
    {
      name: "Berry Blast",
      ingredients: "Mixed berries, banana, acai, almond milk",
      benefit: "Antioxidant Boost",
      color: "#9C27B0",
      price: 48,
    },
    {
      name: "Golden Recovery",
      ingredients: "Turmeric, mango, coconut water, black pepper",
      benefit: "Anti-inflammatory",
      color: "#FF9800",
      price: 42,
    },
    {
      name: "Circulation Boost",
      ingredients: "Beetroot, carrot, orange, ginger",
      benefit: "Blood Flow & Drainage",
      color: "#E91E63",
      price: 45,
    },
    {
      name: "Protein Power",
      ingredients: "Banana, peanut butter, oat milk, plant protein, cacao",
      benefit: "Muscle Recovery",
      color: "#795548",
      price: 52,
    },
    {
      name: "Hydra Glow",
      ingredients: "Coconut water, pineapple, mint, collagen",
      benefit: "Skin & Hydration",
      color: "#81D8D0",
      price: 50,
    },
  ],
  teamMembers: [
    {
      name: "Sarah Al-Maktoum",
      role: "Founder & Head Coach",
      bio: "With 15 years in aquatic fitness and a passion for holistic wellness, Sarah created Hydrafit to bring a revolutionary approach to fitness in Dubai.",
      certifications: ["ACE Certified", "Aquatic Fitness Professional", "Nutrition Coach"],
      instagram: "@sarah_hydrafit",
      quote: "Your body is 70% water. Train in your element.",
    },
    {
      name: "Marc Dubois",
      role: "Senior Aquabike Instructor",
      bio: "Former competitive cyclist turned aquabike specialist. Marc brings high energy and precision to every class, helping clients push their limits safely.",
      certifications: ["Les Mills Certified", "Aquabike Specialist", "Sports Science MSc"],
      instagram: "@marc_aquabike",
      quote: "In water, every movement becomes more powerful.",
    },
    {
      name: "Priya Sharma",
      role: "Yoga & Wellness Coach",
      bio: "A certified yoga therapist with a special focus on aquatic yoga. Priya combines Eastern philosophy with modern fitness science for a transformative experience.",
      certifications: ["RYT-500", "Aquatic Yoga Certified", "Ayurvedic Practitioner"],
      instagram: "@priya_aquayoga",
      quote: "Water teaches us to let go and flow.",
    },
    {
      name: "James Carter",
      role: "Boxing & HIIT Instructor",
      bio: "Ex-professional boxer who discovered the power of aquatic training for rehabilitation. Now he channels that energy into explosive aqua-boxing classes.",
      certifications: ["Boxing Coach Level 3", "HIIT Specialist", "Rehab Trainer"],
      instagram: "@james_aquabox",
      quote: "The water doesn't fight back — but it makes you stronger.",
    },
  ],
  testimonials: [
    {
      name: "Emma T.",
      text: "Hydrafit changed my life. I came for the aquabike and stayed for the community. The detox bar after class is my favorite ritual. This isn't just fitness — it's my happy place.",
      rating: 5,
      location: "Dubai Marina",
    },
    {
      name: "Fatima K.",
      text: "After my pregnancy, I was looking for low-impact exercise. Aquabike at Hydrafit gave me incredible results without any joint pain. The coaches are amazing!",
      rating: 5,
      location: "Palm Jumeirah",
    },
    {
      name: "David R.",
      text: "As a busy professional, I needed something efficient. 45 minutes of aquabike burns more than my 1.5-hour gym sessions. The Business Bay studio is so convenient.",
      rating: 5,
      location: "Business Bay",
    },
    {
      name: "Lisa M.",
      text: "I suffer from lipoedema and Hydrafit has been a game-changer. The water pressure helps with drainage and I've seen visible improvements in just 2 months. For the first time, I found an exercise that actually helps instead of making things worse.",
      rating: 5,
      location: "JBR",
    },
    {
      name: "Sophie L.",
      text: "The whole experience is premium — from the beautiful studios to the detox bar. I bring all my friends here. It's our weekly ritual!",
      rating: 5,
      location: "Downtown Dubai",
    },
    {
      name: "Ahmed N.",
      text: "I was skeptical about aquabike as a man, but the intensity is no joke. Best cardio workout I've ever had, and my knees thank me every day.",
      rating: 5,
      location: "Business Bay",
    },
  ],
  blogPosts: [
    {
      slug: "aquabike-benefits-complete-guide",
      title: "The Complete Guide to Aquabike Benefits",
      excerpt:
        "Discover why aquabike is the most efficient low-impact workout and how it can transform your body and mind.",
      category: "Wellness & Health",
      date: "2026-02-20",
      readTime: "8 min read",
    },
    {
      slug: "lipoedema-exercise-aquatic-fitness",
      title: "Lipoedema & Exercise: Why Aquatic Fitness Is the Answer",
      excerpt:
        "How water-based exercise can help manage lipoedema symptoms and improve quality of life.",
      category: "Wellness & Health",
      date: "2026-02-15",
      readTime: "10 min read",
    },
    {
      slug: "best-fitness-studios-dubai-2026",
      title: "Best Premium Fitness Studios in Dubai 2026",
      excerpt:
        "A curated guide to Dubai's most exclusive fitness experiences — from aquabike to rooftop yoga.",
      category: "Lifestyle Dubai",
      date: "2026-02-10",
      readTime: "6 min read",
    },
    {
      slug: "detox-smoothie-recipes-post-workout",
      title: "5 Detox Smoothie Recipes for Post-Workout Recovery",
      excerpt:
        "Fuel your recovery with these nutrient-packed smoothie recipes inspired by our Detox Bar menu.",
      category: "Nutrition & Detox",
      date: "2026-02-05",
      readTime: "5 min read",
    },
  ],
  shopProducts: [
    {
      slug: "hydrafit-water-bottle",
      name: "Hydrafit Premium Water Bottle",
      price: 120,
      category: "Accessories",
      description: "Insulated stainless steel bottle with Hydrafit branding. Keeps drinks cold for 24h.",
    },
    {
      slug: "detox-juice-pack-5",
      name: "Detox Juice Pack (5 bottles)",
      price: 200,
      category: "Detox",
      description: "A curated selection of 5 cold-pressed juices from our Detox Bar, delivered fresh.",
    },
    {
      slug: "aquabike-towel-set",
      name: "Aquabike Towel Set",
      price: 180,
      category: "Accessories",
      description: "Quick-dry microfiber towel set in signature Tiffany blue. Includes gym and hair towel.",
    },
    {
      slug: "gift-card-500",
      name: "Gift Card – 500 AED",
      price: 500,
      category: "Gift Cards",
      description: "Give the gift of wellness. Redeemable for classes, detox bar, and shop items.",
    },
    {
      slug: "gift-card-1000",
      name: "Gift Card – 1000 AED",
      price: 1000,
      category: "Gift Cards",
      description: "The ultimate wellness gift. Covers classes, packs, and shop items.",
    },
    {
      slug: "hydrafit-sports-bag",
      name: "Hydrafit Sports Bag",
      price: 350,
      category: "Accessories",
      description: "Waterproof sports bag with wet compartment. Perfect for your aquabike gear.",
    },
  ],
  events: [
    {
      slug: "ladies-night-march",
      title: "Ladies Night: Glow & Flow",
      date: "2026-03-08",
      time: "7:00 PM – 10:00 PM",
      studio: "Palm Jumeirah",
      description:
        "Celebrate International Women's Day with an exclusive evening of aqua fitness, detox cocktails, and community connection.",
      spots: 30,
      price: 200,
    },
    {
      slug: "sunrise-session-rooftop",
      title: "Sunrise Aqua Session",
      date: "2026-03-15",
      time: "6:00 AM – 8:00 AM",
      studio: "Business Bay",
      description:
        "Start your weekend with a sunrise aquabike session overlooking the Dubai skyline, followed by a wellness breakfast.",
      spots: 20,
      price: 180,
    },
    {
      slug: "wellness-workshop-nutrition",
      title: "Nutrition & Wellness Workshop",
      date: "2026-03-22",
      time: "10:00 AM – 12:00 PM",
      studio: "Palm Jumeirah",
      description:
        "Join our nutrition expert for a deep dive into anti-inflammatory eating, detox strategies, and personalized wellness plans.",
      spots: 25,
      price: 150,
    },
  ],
  faqItems: [
    {
      question: "What should I bring to my first class?",
      answer:
        "Just bring yourself and a swimsuit! We provide towels, water shoes, lockers, and all amenities. Our changing rooms are fully equipped with shower products, hairdryers, and premium toiletries.",
    },
    {
      question: "Do I need to know how to swim?",
      answer:
        "Not at all! The water in our pools is waist-deep (about 1.3m). You'll be standing and cycling the entire time. No swimming skills required.",
    },
    {
      question: "Is aquabike good for lipoedema and heavy legs?",
      answer:
        "Yes — aquabike is one of the most recommended exercises for women with lipoedema or heavy legs. The hydrostatic pressure of the water acts as natural compression, stimulating lymphatic drainage and reducing swelling. Many of our members with lipoedema report visible improvements within weeks. The zero-impact nature means no pain or aggravation of symptoms.",
    },
    {
      question: "Is aquabike suitable for people with joint problems?",
      answer:
        "Absolutely! Aquabike is one of the best exercises for people with joint issues. The water buoyancy reduces body weight impact by up to 80%, making it gentle on knees, hips, and ankles while still providing an intense workout.",
    },
    {
      question: "How many calories does an aquabike session burn?",
      answer:
        "An average 45-minute aquabike session burns between 600-800 calories, depending on intensity. The water resistance makes every movement 12x more effective than on land.",
    },
    {
      question: "Can men attend classes too?",
      answer:
        "Of course! While our community has a strong feminine energy, all our classes are open to everyone. Many men have discovered aquabike as a superior alternative to traditional gym workouts.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "You can cancel or reschedule up to 6 hours before your class with no penalty. Late cancellations or no-shows will result in a class deduction from your pack.",
    },
    {
      question: "Is the Detox Bar included with my class?",
      answer:
        "Yes! Every class includes a complimentary detox drink of your choice. Our full menu of premium juices and smoothies is available for separate purchase as well.",
    },
    {
      question: "Do you offer private sessions?",
      answer:
        "Yes, we offer private and semi-private sessions for individuals or small groups. Contact us via WhatsApp to arrange a personalized experience.",
    },
  ],
};

/* ══════════════════════════════════════════════════
   ARABIC
   ══════════════════════════════════════════════════ */

const AR: TranslatedData = {
  navLinks: [
    { label: "التجربة", href: "/experience" },
    { label: "الدروس", href: "/courses" },
    { label: "احجز", href: "/booking" },
    { label: "الفعاليات", href: "/events" },
    { label: "المدوّنة", href: "/blog" },
    { label: "المتجر", href: "/shop" },
  ],
  courses: [
    {
      slug: "aquabike",
      name: "أكوابايك",
      tagline: "الحصة المميزة",
      duration: "٤٥ دقيقة",
      level: "جميع المستويات",
      calories: "٨٠٠",
      description:
        "حصة الأكوابايك المميزة تجمع بين ركوب الدراجة عالي الكثافة في الماء لحرق أقصى للسعرات بدون أي تأثير على المفاصل. انحتي ساقيك، عززي الدورة الدموية واستمتعي بفوائد التصريف اللمفاوي الطبيعي. موصى بها بشكل خاص للنساء اللواتي يعانين من الوذمة الشحمية أو ثقل الساقين.",
      benefits: [
        "حرق حتى ٨٠٠ سعرة حرارية في الحصة",
        "بدون أي تأثير على المفاصل",
        "تصريف لمفاوي طبيعي",
        "تخفيف أعراض الوذمة الشحمية",
        "تحسين الدورة الدموية",
        "شد الساقين والأرداف",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-rebound",
      name: "أكوا ريباوند",
      tagline: "اقفزي. تألقي. تحوّلي.",
      duration: "٤٥ دقيقة",
      level: "متوسط",
      calories: "٦٠٠",
      description:
        "لياقة الترامبولين عالية الطاقة تلتقي بمقاومة الماء. تمرين ممتع وقوي يشغل جسمك بالكامل بينما يوفر الماء وسادة طبيعية لمفاصلك.",
      benefits: [
        "تمرين لكامل الجسم",
        "تحمّل القلب والأوعية الدموية",
        "تقوية عضلات البطن",
        "تحسين التوازن",
        "تخفيف التوتر",
        "ممتع ومنشّط",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-boxing",
      name: "أكوا بوكسينغ",
      tagline: "قاتلي. تدفّقي. تمكّني.",
      duration: "٤٥ دقيقة",
      level: "جميع المستويات",
      calories: "٧٠٠",
      description:
        "أطلقي قوتك مع حركات الملاكمة ضد مقاومة الماء. تمرين قتالي لكامل الجسم يبني القوة والرشاقة والثقة بالنفس — مع لطف على جسمك.",
      benefits: [
        "شد الجزء العلوي من الجسم",
        "تحرير التوتر",
        "تحسين التنسيق",
        "لياقة القلب والأوعية الدموية",
        "تعزيز الثقة بالنفس",
        "تحديد العضلات",
      ],
      category: "aquatic",
    },
    {
      slug: "aqua-yoga",
      name: "أكوا يوغا",
      tagline: "تطفّي. تنفّسي. تجدّدي.",
      duration: "٥٠ دقيقة",
      level: "جميع المستويات",
      calories: "٣٠٠",
      description:
        "ممارسة يوغا هادئة معزّزة بخصائص الماء المهدّئة. مثالية للتمدد العميق واليقظة الذهنية والتعافي. مثالية لمن يبحثن عن التوازن والاسترخاء.",
      benefits: [
        "مرونة عميقة",
        "صفاء ذهني",
        "تخفيف التوتر",
        "حركة المفاصل",
        "تعافي العضلات",
        "سلام داخلي",
      ],
      category: "wellness",
    },
  ],
  detoxMenu: [
    {
      name: "Green Goddess",
      ingredients: "سبانخ، خيار، تفاح أخضر، زنجبيل، ليمون",
      benefit: "ديتوكس وطاقة",
      color: "#4CAF50",
      price: 45,
    },
    {
      name: "Berry Blast",
      ingredients: "توت مشكّل، موز، أساي، حليب لوز",
      benefit: "مضادات أكسدة",
      color: "#9C27B0",
      price: 48,
    },
    {
      name: "Golden Recovery",
      ingredients: "كركم، مانجو، ماء جوز الهند، فلفل أسود",
      benefit: "مضاد للالتهابات",
      color: "#FF9800",
      price: 42,
    },
    {
      name: "Circulation Boost",
      ingredients: "شمندر، جزر، برتقال، زنجبيل",
      benefit: "دورة دموية وتصريف",
      color: "#E91E63",
      price: 45,
    },
    {
      name: "Protein Power",
      ingredients: "موز، زبدة فول سوداني، حليب شوفان، بروتين نباتي، كاكاو",
      benefit: "تعافي العضلات",
      color: "#795548",
      price: 52,
    },
    {
      name: "Hydra Glow",
      ingredients: "ماء جوز الهند، أناناس، نعناع، كولاجين",
      benefit: "بشرة وترطيب",
      color: "#81D8D0",
      price: 50,
    },
  ],
  teamMembers: [
    {
      name: "سارة المكتوم",
      role: "المؤسسة والمدربة الرئيسية",
      bio: "مع ١٥ عاماً من الخبرة في اللياقة المائية وشغف بالعافية الشاملة، أسست سارة هايدرافيت لتقديم نهج ثوري للياقة في دبي.",
      certifications: ["معتمدة ACE", "محترفة لياقة مائية", "مدربة تغذية"],
      instagram: "@sarah_hydrafit",
      quote: "جسمك ٧٠٪ ماء. تدرّبي في عنصرك.",
    },
    {
      name: "مارك دوبوا",
      role: "مدرب أكوابايك أول",
      bio: "دراج سابق محترف تحوّل إلى متخصص أكوابايك. يجلب مارك طاقة عالية ودقة لكل حصة.",
      certifications: ["معتمد Les Mills", "متخصص أكوابايك", "ماجستير علوم الرياضة"],
      instagram: "@marc_aquabike",
      quote: "في الماء، كل حركة تصبح أقوى.",
    },
    {
      name: "بريا شارما",
      role: "مدربة يوغا وعافية",
      bio: "معالجة يوغا معتمدة متخصصة في اليوغا المائية. تجمع بريا بين الفلسفة الشرقية وعلم اللياقة الحديث.",
      certifications: ["RYT-500", "يوغا مائية معتمدة", "ممارسة أيورفيدية"],
      instagram: "@priya_aquayoga",
      quote: "الماء يعلّمنا أن نترك ونتدفق.",
    },
    {
      name: "جيمس كارتر",
      role: "مدرب ملاكمة وتمارين مكثفة",
      bio: "ملاكم محترف سابق اكتشف قوة التدريب المائي. يوجّه الآن تلك الطاقة في حصص أكوا بوكسينغ متفجرة.",
      certifications: ["مدرب ملاكمة مستوى ٣", "متخصص HIIT", "مدرب إعادة تأهيل"],
      instagram: "@james_aquabox",
      quote: "الماء لا يرد اللكمات — لكنه يجعلك أقوى.",
    },
  ],
  testimonials: [
    {
      name: "إيما ت.",
      text: "هايدرافيت غيّر حياتي. جئت من أجل الأكوابايك وبقيت من أجل المجتمع. بار الديتوكس بعد الحصة هو طقسي المفضل.",
      rating: 5,
      location: "دبي مارينا",
    },
    {
      name: "فاطمة ك.",
      text: "بعد حملي، كنت أبحث عن تمرين لطيف. الأكوابايك في هايدرافيت أعطاني نتائج مذهلة بدون أي ألم في المفاصل.",
      rating: 5,
      location: "نخلة جميرا",
    },
    {
      name: "ديفيد ر.",
      text: "كمحترف مشغول، كنت أحتاج شيئاً فعالاً. ٤٥ دقيقة أكوابايك تحرق أكثر من حصتي في النادي لمدة ساعة ونصف.",
      rating: 5,
      location: "الخليج التجاري",
    },
    {
      name: "ليزا م.",
      text: "أعاني من الوذمة الشحمية وهايدرافيت غيّر كل شيء. ضغط الماء يساعد في التصريف ولاحظت تحسناً واضحاً خلال شهرين فقط.",
      rating: 5,
      location: "جي بي آر",
    },
    {
      name: "صوفي ل.",
      text: "التجربة بأكملها فاخرة — من الاستوديوهات الجميلة إلى بار الديتوكس. أحضر كل صديقاتي هنا. إنه طقسنا الأسبوعي!",
      rating: 5,
      location: "وسط دبي",
    },
    {
      name: "أحمد ن.",
      text: "كنت متشككاً في الأكوابايك كرجل، لكن الشدة ليست مزحة. أفضل تمرين كارديو حصلت عليه، وركبتيّ تشكرانني كل يوم.",
      rating: 5,
      location: "الخليج التجاري",
    },
  ],
  blogPosts: [
    {
      slug: "فوائد-الاكوابايك-دليل-شامل",
      title: "الدليل الشامل لفوائد الأكوابايك",
      excerpt:
        "اكتشفي لماذا الأكوابايك هو التمرين الأكثر فعالية منخفض التأثير وكيف يمكنه تحويل جسمك وعقلك.",
      category: "عافية وصحة",
      date: "2026-02-20",
      readTime: "٨ دقائق قراءة",
    },
    {
      slug: "الوذمة-الشحمية-واللياقة-المائية",
      title: "الوذمة الشحمية والتمارين: لماذا اللياقة المائية هي الحل",
      excerpt:
        "كيف يمكن للتمارين المائية أن تساعد في إدارة أعراض الوذمة الشحمية وتحسين جودة الحياة.",
      category: "عافية وصحة",
      date: "2026-02-15",
      readTime: "١٠ دقائق قراءة",
    },
    {
      slug: "افضل-استوديوهات-لياقة-دبي-٢٠٢٦",
      title: "أفضل استوديوهات اللياقة الفاخرة في دبي ٢٠٢٦",
      excerpt:
        "دليل مختار لأكثر تجارب اللياقة حصرية في دبي — من الأكوابايك إلى يوغا الأسطح.",
      category: "أسلوب حياة دبي",
      date: "2026-02-10",
      readTime: "٦ دقائق قراءة",
    },
    {
      slug: "وصفات-سموذي-ديتوكس-بعد-التمرين",
      title: "٥ وصفات سموذي ديتوكس للتعافي بعد التمرين",
      excerpt:
        "عززي تعافيك مع وصفات السموذي الغنية بالعناصر الغذائية المستوحاة من قائمة بار الديتوكس.",
      category: "تغذية وديتوكس",
      date: "2026-02-05",
      readTime: "٥ دقائق قراءة",
    },
  ],
  shopProducts: [
    {
      slug: "hydrafit-water-bottle",
      name: "زجاجة ماء هايدرافيت الفاخرة",
      price: 120,
      category: "إكسسوارات",
      description: "زجاجة من الفولاذ المقاوم للصدأ معزولة بشعار هايدرافيت. تحافظ على المشروبات باردة ٢٤ ساعة.",
    },
    {
      slug: "detox-juice-pack-5",
      name: "عبوة عصائر ديتوكس (٥ زجاجات)",
      price: 200,
      category: "ديتوكس",
      description: "مجموعة مختارة من ٥ عصائر مضغوطة على البارد من بار الديتوكس، تُوصل طازجة.",
    },
    {
      slug: "aquabike-towel-set",
      name: "طقم مناشف أكوابايك",
      price: 180,
      category: "إكسسوارات",
      description: "طقم مناشف ميكروفايبر سريعة الجفاف بلون تيفاني المميز. يشمل منشفة رياضية ومنشفة شعر.",
    },
    {
      slug: "gift-card-500",
      name: "بطاقة هدية – ٥٠٠ درهم",
      price: 500,
      category: "بطاقات هدايا",
      description: "قدّمي هدية العافية. صالحة للحصص وبار الديتوكس والمتجر.",
    },
    {
      slug: "gift-card-1000",
      name: "بطاقة هدية – ١٠٠٠ درهم",
      price: 1000,
      category: "بطاقات هدايا",
      description: "هدية العافية المثالية. تغطي الحصص والباقات ومنتجات المتجر.",
    },
    {
      slug: "hydrafit-sports-bag",
      name: "حقيبة رياضية هايدرافيت",
      price: 350,
      category: "إكسسوارات",
      description: "حقيبة رياضية مقاومة للماء مع جيب للملابس المبللة. مثالية لمعدات الأكوابايك.",
    },
  ],
  events: [
    {
      slug: "ladies-night-march",
      title: "ليلة السيدات: توهّج وانسياب",
      date: "2026-03-08",
      time: "٧:٠٠ مساءً – ١٠:٠٠ مساءً",
      studio: "نخلة جميرا",
      description:
        "احتفلي بيوم المرأة العالمي مع أمسية حصرية من اللياقة المائية وكوكتيلات الديتوكس والتواصل المجتمعي.",
      spots: 30,
      price: 200,
    },
    {
      slug: "sunrise-session-rooftop",
      title: "حصة أكوا عند شروق الشمس",
      date: "2026-03-15",
      time: "٦:٠٠ صباحاً – ٨:٠٠ صباحاً",
      studio: "الخليج التجاري",
      description:
        "ابدئي عطلتك بحصة أكوابايك عند شروق الشمس مع إطلالة على أفق دبي، تليها فطور صحي.",
      spots: 20,
      price: 180,
    },
    {
      slug: "wellness-workshop-nutrition",
      title: "ورشة التغذية والعافية",
      date: "2026-03-22",
      time: "١٠:٠٠ صباحاً – ١٢:٠٠ ظهراً",
      studio: "نخلة جميرا",
      description:
        "انضمي لخبيرة التغذية لدينا في ورشة عن التغذية المضادة للالتهابات واستراتيجيات الديتوكس وخطط العافية الشخصية.",
      spots: 25,
      price: 150,
    },
  ],
  faqItems: [
    {
      question: "ماذا يجب أن أحضر لحصتي الأولى؟",
      answer:
        "فقط نفسك ومايوه! نوفر المناشف والأحذية المائية والخزائن وجميع المستلزمات. غرف تبديل الملابس مجهزة بالكامل بمنتجات الاستحمام ومجففات الشعر ومستلزمات النظافة الفاخرة.",
    },
    {
      question: "هل يجب أن أعرف السباحة؟",
      answer:
        "لا على الإطلاق! الماء في أحواضنا يصل إلى الخصر (حوالي ١.٣ م). ستكونين واقفة وتركبين الدراجة طوال الوقت. لا تحتاجين أي مهارات سباحة.",
    },
    {
      question: "هل الأكوابايك مفيد للوذمة الشحمية وثقل الساقين؟",
      answer:
        "نعم — الأكوابايك من أكثر التمارين الموصى بها للنساء اللواتي يعانين من الوذمة الشحمية أو ثقل الساقين. الضغط الهيدروستاتيكي للماء يعمل كضغط طبيعي، يحفز التصريف اللمفاوي ويقلل التورم. كثير من عضواتنا يلاحظن تحسناً واضحاً خلال أسابيع.",
    },
    {
      question: "هل الأكوابايك مناسب لمن يعانون من مشاكل المفاصل؟",
      answer:
        "بالتأكيد! الأكوابايك من أفضل التمارين لمن يعانون من مشاكل المفاصل. طفو الماء يقلل تأثير وزن الجسم حتى ٨٠٪، مما يجعله لطيفاً على الركبتين والوركين والكاحلين.",
    },
    {
      question: "كم سعرة حرارية تحرقها حصة أكوابايك؟",
      answer:
        "حصة أكوابايك متوسطة من ٤٥ دقيقة تحرق بين ٦٠٠ و٨٠٠ سعرة حرارية حسب الشدة. مقاومة الماء تجعل كل حركة أكثر فعالية بـ ١٢ مرة من التمرين على الأرض.",
    },
    {
      question: "هل يمكن للرجال المشاركة أيضاً؟",
      answer:
        "بالطبع! بينما مجتمعنا يتميز بطاقة نسائية قوية، جميع حصصنا مفتوحة للجميع. كثير من الرجال اكتشفوا الأكوابايك كبديل أفضل لتمارين الصالة التقليدية.",
    },
    {
      question: "ما هي سياسة الإلغاء؟",
      answer:
        "يمكنك الإلغاء أو إعادة الجدولة قبل ٦ ساعات من حصتك بدون رسوم. الإلغاءات المتأخرة أو عدم الحضور ستؤدي لخصم حصة من باقتك.",
    },
    {
      question: "هل بار الديتوكس مشمول مع حصتي؟",
      answer:
        "نعم! كل حصة تشمل مشروب ديتوكس مجاني من اختيارك. قائمتنا الكاملة من العصائر والسموذي الفاخرة متاحة أيضاً للشراء بشكل منفصل.",
    },
    {
      question: "هل تقدمون حصصاً خاصة؟",
      answer:
        "نعم، نقدم حصصاً خاصة وشبه خاصة للأفراد أو المجموعات الصغيرة. تواصلي معنا عبر واتساب لترتيب تجربة شخصية.",
    },
  ],
};

/* ══════════════════════════════════════════════════
   ACCESSOR
   ══════════════════════════════════════════════════ */

const DATA: Record<Locale, TranslatedData> = { fr: FR, en: EN, ar: AR };

export function getTranslatedData(locale: Locale): TranslatedData {
  return DATA[locale] ?? DATA.fr;
}

// For backwards compatibility — legacy named exports (English defaults, used by old page files during migration)
export const NAV_LINKS = EN.navLinks;
export const COURSES = EN.courses;
export const DETOX_MENU = EN.detoxMenu;
export const TEAM_MEMBERS = EN.teamMembers;
export const TESTIMONIALS = EN.testimonials;
export const BLOG_POSTS = EN.blogPosts;
export const SHOP_PRODUCTS = EN.shopProducts;
export const EVENTS = EN.events;
export const FAQ_ITEMS = EN.faqItems;
