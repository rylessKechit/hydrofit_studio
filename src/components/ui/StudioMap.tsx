"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { STUDIOS } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";
import { brandify } from "@/lib/brandify";

// Fix default marker icon path issue with webpack/next
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

// Custom tiffany marker icon
const tiffanyIcon = new L.DivIcon({
  className: "",
  html: `
    <div style="position:relative;width:36px;height:46px;">
      <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 28 18 28s18-14.5 18-28C36 8.06 27.94 0 18 0z" fill="#81D8D0"/>
        <circle cx="18" cy="18" r="8" fill="#1A1A1A"/>
        <circle cx="18" cy="18" r="4" fill="#81D8D0" opacity="0.8"/>
      </svg>
      <div style="position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);width:12px;height:4px;background:radial-gradient(ellipse,rgba(0,0,0,0.3),transparent);border-radius:50%;"></div>
    </div>
  `,
  iconSize: [36, 46],
  iconAnchor: [18, 46],
  popupAnchor: [0, -42],
});

const UI = {
  fr: {
    openMaps: "Ouvrir dans Google Maps",
    directions: "Itinéraire",
  },
  en: {
    openMaps: "Open in Google Maps",
    directions: "Get Directions",
  },
  ar: {
    openMaps: "فتح في خرائط جوجل",
    directions: "احصل على الاتجاهات",
  },
} as const;

export default function StudioMap() {
  const locale = useLocale();
  const t = UI[locale];

  // Center between both studios
  const center: [number, number] = [
    (STUDIOS[0].lat + STUDIOS[1].lat) / 2,
    (STUDIOS[0].lng + STUDIOS[1].lng) / 2,
  ];

  useEffect(() => {
    // Import Leaflet CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] border border-white/10 overflow-hidden">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
        className="w-full h-full z-0"
        style={{ background: "#1A1A1A" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {STUDIOS.map((studio) => (
          <Marker
            key={studio.name}
            position={[studio.lat, studio.lng]}
            icon={tiffanyIcon}
          >
            <Popup>
              <div style={{ minWidth: 200, fontFamily: "var(--font-sans)" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                    color: "#81D8D0",
                    margin: "0 0 4px",
                    textTransform: "uppercase",
                  }}
                >
                  {brandify("Hydrafit Studio")}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1A1A1A",
                    margin: "0 0 4px",
                  }}
                >
                  {studio.name}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "#666",
                    margin: "0 0 8px",
                    lineHeight: 1.4,
                  }}
                >
                  {studio.address}
                </p>
                <a
                  href={studio.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#fff",
                    background: "#81D8D0",
                    padding: "6px 14px",
                    textDecoration: "none",
                    borderRadius: 0,
                  }}
                >
                  {t.directions} ↗
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
}
