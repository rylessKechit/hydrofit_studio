"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock, Users, X } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import {
  POOL_LOCATIONS,
  COURSE_COLORS,
  WEEKLY_SCHEDULE,
  getTranslatedData,
} from "@/lib/constants";

/* ─── Translations ─── */

const UI = {
  fr: {
    heroTagline: "Planifiez Votre Bien-Être",
    heroTitle1: "Réservez",
    heroTitle2: "Votre Séance",
    heroSubtitle:
      "Choisissez votre cours, votre créneau et votre piscine partenaire.",
    weekOf: "Semaine du",
    allCourses: "Tous les Cours",
    allLocations: "Tous les Lieux",
    spots: "places",
    full: "Complet",
    book: "Réserver",
    modalTitle: "Bientôt Disponible",
    modalDesc:
      "Le système de réservation en ligne arrive bientôt. En attendant, contactez-nous via WhatsApp pour réserver votre créneau.",
    modalWhatsapp: "Réserver via WhatsApp",
    close: "Fermer",
    days: ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"],
    daysLong: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ],
    municipal: "Piscine Municipale",
    hotel: "Piscine d'Hôtel",
    noSlots: "Aucun cours prévu ce jour.",
  },
  en: {
    heroTagline: "Plan Your Wellness",
    heroTitle1: "Book",
    heroTitle2: "Your Session",
    heroSubtitle:
      "Choose your class, time slot and partner pool location.",
    weekOf: "Week of",
    allCourses: "All Classes",
    allLocations: "All Locations",
    spots: "spots",
    full: "Full",
    book: "Book",
    modalTitle: "Coming Soon",
    modalDesc:
      "Online booking is coming soon. In the meantime, contact us via WhatsApp to reserve your slot.",
    modalWhatsapp: "Book via WhatsApp",
    close: "Close",
    days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    daysLong: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    municipal: "Municipal Pool",
    hotel: "Hotel Pool",
    noSlots: "No classes scheduled for this day.",
  },
  ar: {
    heroTagline: "خطّط لعافيتك",
    heroTitle1: "احجز",
    heroTitle2: "جلستك",
    heroSubtitle:
      "اختر حصتك، وموعدك، وموقع المسبح الشريك.",
    weekOf: "أسبوع",
    allCourses: "جميع الحصص",
    allLocations: "جميع المواقع",
    spots: "أماكن",
    full: "مكتمل",
    book: "احجز",
    modalTitle: "قريباً",
    modalDesc:
      "نظام الحجز الإلكتروني قادم قريباً. في الوقت الحالي، تواصل معنا عبر واتساب لحجز موعدك.",
    modalWhatsapp: "احجز عبر واتساب",
    close: "إغلاق",
    days: ["اث", "ثل", "أر", "خم", "جم", "سب", "أح"],
    daysLong: [
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
      "الأحد",
    ],
    municipal: "مسبح بلدي",
    hotel: "مسبح فندقي",
    noSlots: "لا توجد حصص مجدولة لهذا اليوم.",
  },
} as const;

/* ─── Helpers ─── */

function getMonday(d: Date): Date {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  date.setDate(diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

function addDays(d: Date, n: number): Date {
  const date = new Date(d);
  date.setDate(date.getDate() + n);
  return date;
}

function formatDate(d: Date, locale: string): string {
  const localeMap: Record<string, string> = { fr: "fr-FR", en: "en-US", ar: "ar-AE" };
  return d.toLocaleDateString(localeMap[locale] ?? "en-US", {
    day: "numeric",
    month: "long",
  });
}

function formatDateShort(d: Date): string {
  return d.getDate().toString().padStart(2, "0");
}

/* ─── Course name lookup ─── */

const COURSE_NAMES: Record<string, string> = {
  aquabike: "Aquabike",
  "aqua-rebound": "Aqua Rebound",
  "aqua-boxing": "Aqua Boxing",
  "aqua-yoga": "Aqua Yoga",
};

/* ─── Component ─── */

export default function BookingPageContent() {
  const locale = useLocale();
  const t = UI[locale];
  const { courses } = getTranslatedData(locale);

  const [weekStart, setWeekStart] = useState(() => getMonday(new Date()));
  const [selectedDay, setSelectedDay] = useState(0); // for mobile: 0-6
  const [courseFilter, setCourseFilter] = useState<string | null>(null);
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredSlots = useMemo(() => {
    return WEEKLY_SCHEDULE.filter((slot) => {
      if (courseFilter && slot.courseId !== courseFilter) return false;
      if (locationFilter && slot.locationId !== locationFilter) return false;
      return true;
    });
  }, [courseFilter, locationFilter]);

  const slotsByDay = useMemo(() => {
    const map: Record<number, typeof filteredSlots> = {};
    for (let i = 0; i < 7; i++) map[i] = [];
    filteredSlots.forEach((s) => map[s.day].push(s));
    Object.values(map).forEach((arr) =>
      arr.sort((a, b) => a.time.localeCompare(b.time))
    );
    return map;
  }, [filteredSlots]);

  const prevWeek = () => setWeekStart((d) => addDays(d, -7));
  const nextWeek = () => setWeekStart((d) => addDays(d, 7));

  const courseIds = [...new Set(WEEKLY_SCHEDULE.map((s) => s.courseId))];

  return (
    <div className="bg-dark min-h-screen">
      {/* ─── Hero ─── */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,216,208,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-tiffany text-xs uppercase tracking-[0.3em] mb-4 inline-block">
              {t.heroTagline}
            </span>
            <h1 className="font-display text-5xl md:text-7xl tracking-wide">
              {t.heroTitle1}{" "}
              <span className="text-tiffany">{t.heroTitle2}</span>
            </h1>
            <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
              {t.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filters ─── */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {/* Course filters */}
            <button
              onClick={() => setCourseFilter(null)}
              className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-200 ${
                !courseFilter
                  ? "bg-tiffany text-black border-tiffany"
                  : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
              }`}
            >
              {t.allCourses}
            </button>
            {courseIds.map((id) => (
              <button
                key={id}
                onClick={() =>
                  setCourseFilter(courseFilter === id ? null : id)
                }
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${
                  courseFilter === id
                    ? "text-black border-transparent"
                    : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
                }`}
                style={
                  courseFilter === id
                    ? { background: COURSE_COLORS[id] }
                    : undefined
                }
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: COURSE_COLORS[id] }}
                />
                {COURSE_NAMES[id]}
              </button>
            ))}

            <div className="w-px h-8 bg-white/10 self-center mx-1 hidden sm:block" />

            {/* Location filters */}
            <button
              onClick={() => setLocationFilter(null)}
              className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-200 ${
                !locationFilter
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
              }`}
            >
              {t.allLocations}
            </button>
            {POOL_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() =>
                  setLocationFilter(locationFilter === loc.id ? null : loc.id)
                }
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-200 ${
                  locationFilter === loc.id
                    ? "bg-white/10 text-white border-white/20"
                    : "bg-transparent text-white/60 border-white/10 hover:border-white/30"
                }`}
              >
                {loc.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Week Navigation ─── */}
      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevWeek}
              className="p-2 text-white/50 hover:text-tiffany transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <h2 className="font-display text-2xl md:text-3xl tracking-wide text-center min-w-[280px]">
              {t.weekOf} {formatDate(weekStart, locale)}{" "}
            </h2>
            <button
              onClick={nextWeek}
              className="p-2 text-white/50 hover:text-tiffany transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── Desktop Calendar (≥md) ─── */}
      <section className="hidden md:block pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-7 gap-2"
          >
            {/* Day headers */}
            {t.days.map((day, i) => {
              const date = addDays(weekStart, i);
              return (
                <div
                  key={day}
                  className="text-center pb-3 border-b border-white/10"
                >
                  <span className="text-xs uppercase tracking-widest text-white/40">
                    {day}
                  </span>
                  <span className="block font-display text-2xl mt-1">
                    {formatDateShort(date)}
                  </span>
                </div>
              );
            })}

            {/* Slots per day */}
            {Array.from({ length: 7 }).map((_, dayIndex) => (
              <div key={dayIndex} className="space-y-2 pt-2 min-h-[200px]">
                {slotsByDay[dayIndex]?.map((slot, i) => {
                  const pool = POOL_LOCATIONS.find(
                    (p) => p.id === slot.locationId
                  );
                  const color = COURSE_COLORS[slot.courseId] ?? "#81D8D0";
                  const isFull = slot.spots === 0;
                  return (
                    <motion.div
                      key={`${slot.time}-${slot.courseId}-${i}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className={`relative p-3 border border-white/5 hover:border-white/15 transition-all duration-200 group cursor-pointer ${
                        isFull ? "opacity-40" : ""
                      }`}
                      style={{ borderLeftWidth: 3, borderLeftColor: color }}
                      onClick={() => !isFull && setShowModal(true)}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Clock size={11} className="text-white/30" />
                        <span className="text-xs font-semibold text-white/80">
                          {slot.time}
                        </span>
                      </div>
                      <p
                        className="text-sm font-semibold leading-tight"
                        style={{ color }}
                      >
                        {COURSE_NAMES[slot.courseId]}
                      </p>
                      <div className="flex items-center gap-1 mt-1.5">
                        <MapPin size={10} className="text-white/30" />
                        <span className="text-[10px] text-white/40 truncate">
                          {pool?.name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                          <Users size={10} className="text-white/30" />
                          <span
                            className={`text-[10px] font-medium ${
                              isFull
                                ? "text-red-400"
                                : slot.spots <= 3
                                ? "text-orange-400"
                                : "text-white/50"
                            }`}
                          >
                            {isFull
                              ? t.full
                              : `${slot.spots}/${slot.maxSpots}`}
                          </span>
                        </div>
                        {!isFull && (
                          <span className="text-[10px] text-tiffany uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                            {t.book} →
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
                {slotsByDay[dayIndex]?.length === 0 && (
                  <p className="text-xs text-white/20 text-center pt-8">—</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Mobile Calendar (<md) ─── */}
      <section className="md:hidden pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Day dots */}
          <div className="flex justify-center gap-3 mb-6">
            {t.days.map((day, i) => (
              <button
                key={day}
                onClick={() => setSelectedDay(i)}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  {day}
                </span>
                <span
                  className={`w-9 h-9 flex items-center justify-center font-display text-lg transition-all ${
                    selectedDay === i
                      ? "bg-tiffany text-black"
                      : "text-white/60"
                  }`}
                >
                  {formatDateShort(addDays(weekStart, i))}
                </span>
              </button>
            ))}
          </div>

          {/* Day title */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() =>
                setSelectedDay((d) => (d === 0 ? 6 : d - 1))
              }
              className="p-2 text-white/50"
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="font-display text-xl tracking-wide">
              {t.daysLong[selectedDay]}{" "}
              {formatDateShort(addDays(weekStart, selectedDay))}
            </h3>
            <button
              onClick={() =>
                setSelectedDay((d) => (d === 6 ? 0 : d + 1))
              }
              className="p-2 text-white/50"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slots */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {slotsByDay[selectedDay]?.length === 0 && (
                <p className="text-center text-white/30 py-12 text-sm">
                  {t.noSlots}
                </p>
              )}
              {slotsByDay[selectedDay]?.map((slot, i) => {
                const pool = POOL_LOCATIONS.find(
                  (p) => p.id === slot.locationId
                );
                const color = COURSE_COLORS[slot.courseId] ?? "#81D8D0";
                const isFull = slot.spots === 0;
                return (
                  <motion.div
                    key={`${slot.time}-${slot.courseId}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`p-4 border border-white/5 ${
                      isFull ? "opacity-40" : ""
                    }`}
                    style={{ borderLeftWidth: 4, borderLeftColor: color }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-white/40" />
                        <span className="text-sm font-semibold">
                          {slot.time}
                        </span>
                        <span className="text-xs text-white/30">—</span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color }}
                        >
                          {COURSE_NAMES[slot.courseId]}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} className="text-white/40" />
                        <span
                          className={`text-xs font-medium ${
                            isFull
                              ? "text-red-400"
                              : slot.spots <= 3
                              ? "text-orange-400"
                              : "text-white/50"
                          }`}
                        >
                          {isFull
                            ? t.full
                            : `${slot.spots}/${slot.maxSpots}`}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <MapPin size={12} className="text-white/30" />
                      <span className="text-xs text-white/40">
                        {pool?.name}
                      </span>
                      <span className="text-[10px] text-white/20 ml-1">
                        ({pool?.type === "hotel" ? t.hotel : t.municipal})
                      </span>
                    </div>
                    {!isFull && (
                      <button
                        onClick={() => setShowModal(true)}
                        className="mt-3 w-full py-2.5 text-xs uppercase tracking-widest font-semibold border border-tiffany/30 text-tiffany hover:bg-tiffany hover:text-black transition-all duration-200"
                      >
                        {t.book}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Modal ─── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-dark border border-white/10 p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="font-display text-3xl tracking-wide text-tiffany mb-2">
                {t.modalTitle}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                {t.modalDesc}
              </p>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-tiffany text-black text-center text-sm uppercase tracking-widest font-semibold hover:bg-tiffany-dark transition-colors"
              >
                {t.modalWhatsapp}
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="block w-full py-3 mt-2 border border-white/10 text-white/50 text-center text-sm uppercase tracking-widest hover:text-white hover:border-white/30 transition-all"
              >
                {t.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
