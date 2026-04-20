import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ReservKit — Booking Software for Rental & Experience Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://reservkit.com/logo.png"
          alt="ReservKit"
          style={{ height: 80, marginBottom: 32 }}
        />
        {/* Tagline */}
        <p
          style={{
            color: "#ff9f00",
            fontSize: 36,
            fontWeight: 700,
            textAlign: "center",
            margin: 0,
            lineHeight: 1.3,
            maxWidth: 800,
          }}
        >
          Booking Software for Rental &amp; Experience Businesses
        </p>
        {/* Sub */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: 22,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Online booking · Payments · Waivers · Staff · Reports
        </p>
        {/* URL */}
        <p
          style={{
            color: "#475569",
            fontSize: 18,
            marginTop: 40,
            letterSpacing: "0.05em",
          }}
        >
          reservkit.com
        </p>
      </div>
    ),
    { ...size }
  );
}
