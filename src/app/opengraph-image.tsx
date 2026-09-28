import { ImageResponse } from "next/og";

export const alt = "Code Languages: learn to code and make your ideas real with Byte";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "78px", background: "#f3f7ff", color: "#182947", fontFamily: "sans-serif" }}>
      <div style={{ position: "absolute", right: "85px", top: "55px", width: "470px", height: "470px", border: "1px solid #cbd7f4", borderRadius: "50%", display: "flex" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "780px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "13px", color: "#385de8", fontSize: "23px", fontWeight: 700 }}><span style={{ width: "36px", height: "39px", borderRadius: "8px", background: "#4e6fe9", border: "3px solid #1b2c49", display: "flex" }} /> Code Languages</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: "67px", lineHeight: 1.04, fontWeight: 700 }}><span style={{ display: "flex" }}>Learn to code.</span><span style={{ display: "flex", color: "#385de8" }}>Make your ideas real.</span></div>
        <div style={{ color: "#52647f", fontSize: "21px", lineHeight: 1.5 }}>Tiny lessons. Hands-on missions. Big ideas.</div>
      </div>
      <div style={{ position: "absolute", right: "190px", bottom: "95px", width: "162px", height: "145px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", top: "15px", width: "124px", height: "91px", display: "flex", alignItems: "center", justifyContent: "center", border: "5px solid #1b2c49", borderRadius: "18px", background: "#4e6fe9", boxShadow: "0 8px 0 #2d48b7" }}>
          <div style={{ width: "82px", height: "51px", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", border: "4px solid #1b2c49", borderRadius: "10px", background: "#eef5ff" }}><i style={{ width: "8px", height: "12px", borderRadius: "3px", background: "#203455" }} /><i style={{ width: "8px", height: "12px", borderRadius: "3px", background: "#203455" }} /></div>
        </div>
        <div style={{ position: "absolute", top: "5px", left: "77px", width: "9px", height: "19px", display: "flex", borderRadius: "8px", background: "#ff9b67", border: "3px solid #1b2c49" }} />
        <div style={{ position: "absolute", bottom: "5px", width: "91px", height: "47px", display: "flex", alignItems: "center", justifyContent: "center", border: "4px solid #1b2c49", borderRadius: "13px", background: "#ff9b67" }}><span style={{ color: "#3154dc", fontSize: "17px", fontWeight: 700 }}>&lt;/&gt;</span></div>
      </div>
    </div>,
    { ...size },
  );
}