import { ImageResponse } from "next/og";

export const alt = "Code Languages: the free, fun way to learn to code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "82px", background: "#101412", color: "#f0f2e9", fontFamily: "sans-serif" }}>
      <div style={{ position: "absolute", right: "105px", top: "65px", width: "440px", height: "440px", border: "1px solid #c5f66b33", borderRadius: "50%", display: "flex" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "780px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "13px", color: "#c5f66b", fontSize: "23px", fontWeight: 700 }}><span style={{ width: "32px", height: "29px", borderRadius: "45%", background: "#c5f66b", display: "flex" }} /> Code Languages</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: "69px", lineHeight: 1.03, fontWeight: 700 }}><span style={{ display: "flex" }}>The free, fun way</span><span style={{ display: "flex" }}>to learn to code.</span></div>
        <div style={{ color: "#a0aaa0", fontSize: "22px", lineHeight: 1.5 }}>Real skills. Little lessons. Big momentum.</div>
      </div>
      <div style={{ position: "absolute", right: "185px", bottom: "80px", width: "150px", height: "135px", borderRadius: "48% 45% 43% 49%", background: "#c5f66b", boxShadow: "0 12px 0 #8cac48", display: "flex", alignItems: "center", justifyContent: "center", gap: "37px" }}><i style={{ width: "10px", height: "14px", borderRadius: "50%", background: "#25351b" }} /><i style={{ width: "10px", height: "14px", borderRadius: "50%", background: "#25351b" }} /></div>
    </div>,
    { ...size },
  );
}