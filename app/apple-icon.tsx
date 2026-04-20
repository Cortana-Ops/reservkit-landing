import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0f172a",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 110,
            fontWeight: 900,
            fontFamily: "Arial Black, sans-serif",
            lineHeight: 1,
          }}
        >
          R
        </span>
        <div
          style={{
            position: "absolute",
            bottom: 22,
            right: 22,
            width: 28,
            height: 28,
            background: "#f97316",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
