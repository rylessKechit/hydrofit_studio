import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hydrafit Studio – Premium Aquabike Experience in Dubai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1A1A1A 60%, #0D0D0D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Tiffany accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#81D8D0",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "0.1em",
            marginBottom: 16,
            display: "flex",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>HYDRA</span>
          <span style={{ color: "#81D8D0" }}>FIT.</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#81D8D0",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Premium Aquabike Experience
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.15em",
          }}
        >
          PALM JUMEIRAH &bull; BUSINESS BAY &bull; DUBAI
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #81D8D0, #A8D84E)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
