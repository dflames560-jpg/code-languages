import { ImageResponse } from "next/og";

export const alt = "Storecraft — learn to build a better online store";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "84px", background: "#f5f5ef", color: "#20251f", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "#315c45", fontSize: "27px", fontWeight: 800 }}><span style={{ width: "38px", height: "38px", display: "flex", border: "2px solid #213b2d", borderRadius: "10px", background: "#315c45" }} /> Storecraft</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "42px", fontSize: "66px", lineHeight: 1.06, fontWeight: 700 }}><span style={{ display: "flex" }}>Build a store</span><span style={{ display: "flex", color: "#315c45" }}>people come back to.</span></div>
      <div style={{ display: "flex", marginTop: "25px", color: "#687066", fontSize: "23px" }}>Practical learning for independent store builders.</div>
      <div style={{ position: "absolute", right: "95px", top: "70px", width: "430px", height: "430px", display: "flex", border: "1px solid #e1e3d9", borderRadius: "50%", boxShadow: "0 0 0 34px #f0f1e9, 0 0 0 70px #fafaf7" }} />
      <div style={{ position: "absolute", right: "185px", bottom: "74px", width: "12px", height: "12px", display: "flex", borderRadius: "50%", background: "#d57751" }} />
    </div>,
    { ...size },
  );
}
