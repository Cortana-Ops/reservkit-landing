import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0f172a",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 900,
            fontFamily: "Arial Black, sans-serif",
            lineHeight: 1,
            marginBottom: 2,
          }}
        >
          R
        </span>
        <div
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            width: 7,
            height: 7,
            background: "#f97316",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
