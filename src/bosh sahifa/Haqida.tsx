import { useState } from "react";
import { useNavigate } from "react-router-dom";

import html from "../assets/images/html.png";
import scc from "../assets/images/css.svg";
import js from "../assets/images/js.png";
import figma from "../assets/images/figma.png";
import vector from "../assets/images/Vector.png";
import talwind from "../assets/images/tailwind.png";
import swiper from "../assets/images/swiper.png";
import sss from "../assets/images/222.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import dowloa1 from "../assets/images/download 1.png";
import dowload2 from "../assets/images/dowload2.png";

const tools = [
  { name: "HTML", img: html },
  { name: "CSS", img: scc },
  { name: "JS", img: js },
  { name: "Figma", img: figma },
  { name: "Vector", img: vector },
  { name: "Tailwind", img: talwind },
  { name: "Swiper", img: swiper },
  { name: "Other", img: sss },
];

export default function Haqida() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);

  const SectionTitle = ({ title }: { title: string }) => (
    <div style={{ marginBottom: "40px", position: "relative" }}>
      <h2
        className="section-h2"
        style={{ fontWeight: "900", color: "#fff", margin: "0 0 10px" }}
      >
        {title}
      </h2>
      <div
        className="title-line"
        style={{
          height: "6px",
          background: "linear-gradient(90deg, #39965F, #4ade80)",
          borderRadius: "10px",
        }}
      />
    </div>
  );

  return (
    <div className="haqida-container">
      <div className="bg-blur" />

      <section className="about-section">
        <SectionTitle title="Men haqimda" />
        <div style={{ maxWidth: "900px" }}>
          <p className="about-text">
            Men{" "}
            <span style={{ color: "#39965F", fontWeight: "700" }}>
              Ro'ziqulov Foziljon
            </span>{" "}
            veb dasturchisiman. Yoshim 21 da, Buxoro viloyati Qorakol tumanida
            tug'ilganman. Qiziqarli, ko’p funksionallika ega bo’lgan va kuchli
            dizaynga ega bo’lgan dasturlar yaratishga qiziqaman.
          </p>
          <p className="about-text">
            Mening vazifam veb saytni foydalanuvchilarga qulay, sayt dizayni
            foydalanuvchilarga jalb qiluvchi lekin ayni paytda tezkor bo'lishini
            taminlashdir!
          </p>
          <button onClick={() => navigate("/boglanish")} className="main-btn">
            Bog'lanish
          </button>
        </div>
      </section>

      <section className="tools-section">
        <SectionTitle title="Asbob-uskunalar" />
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="tool-card"
            >
              {hovered === index ? (
                <span className="tool-name">{tool.name}</span>
              ) : (
                <img src={tool.img} alt={tool.name} className="tool-img" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="abilities-section">
        <SectionTitle title="Nimalar qila olaman" />
        <div className="abilities-grid">
          {[
            {
              t: "SEO",
              d: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash",
              i: image1,
            },
            {
              t: "Dizayn",
              d: "Kuchli dizayn va kichik detallargacha e’tibor berish",
              i: image2,
            },
            {
              t: "Sifat",
              d: "Yuqori darajada saytlarni sifatli ishlab chiqish",
              i: image3,
            },
            {
              t: "Tezkorlik",
              d: "Qisqa muddat ichida tezkor sayt ishlab chiqish",
              i: image4,
            },
          ].map((item, index) => (
            <div key={index} className="ability-card">
              <img src={item.i} alt={item.t} className="ability-icon" />
              <div>
                <h5 className="ability-title">{item.t}</h5>
                <p className="ability-desc">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="clients-section">
        <SectionTitle title="Mijozlar" />
        <div className="clients-flex">
          {[dowloa1, dowload2, null, null].map((img, idx) => (
            <div key={idx} className="client-card">
              {img && <img src={img} alt="client" className="client-img" />}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .haqida-container {
          width: 100%; min-height: 100vh; background-color: #0A0A0A; color: white;
          padding: 80px 10%; font-family: 'Inter', sans-serif; position: relative; overflow: hidden;
        }

        .bg-blur {
          position: absolute; top: 5%; left: -5%; width: 400px; height: 400px;
          background: rgba(57, 150, 95, 0.1); border-radius: 50%; filter: blur(100px); z-index: 0;
        }

        section { margin-bottom: 100px; position: relative; z-index: 1; }

        .section-h2 { font-size: 36px; }
        .title-line { width: 100px; box-shadow: 0 0 15px rgba(57, 150, 95, 0.5); }

        .about-text { color: #a1a1aa; fontSize: 19px; line-height: 1.8; margin-bottom: 25px; }

        .main-btn {
          padding: 16px 45px; background-color: #39965F; color: white; border-radius: 15px;
          border: none; fontWeight: 800; cursor: pointer; transition: 0.4s; fontSize: 16px;
          boxShadow: 0 10px 30px rgba(57, 150, 95, 0.3);
        }

        .tools-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px;
        }
        .tool-card {
          height: 110px; border-radius: 20px; backgroundColor: #141414;
          display: flex; align-items: center; justify-content: center;
          transition: 0.4s; cursor: pointer; border: 1px solid rgba(255,255,255,0.05);
        }
        .tool-img { width: 50px; height: 50px; object-fit: contain; filter: grayscale(100%); opacity: 0.7; }
        .tool-name { color: #39965F; font-size: 18px; font-weight: 900; text-shadow: 0 0 10px rgba(57, 150, 95, 0.5); }

        .abilities-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 25px;
        }
        .ability-card {
          background-color: #141414; padding: 30px; border-radius: 25px;
          display: flex; align-items: center; gap: 20px; border: 1px solid rgba(255,255,255,0.03); transition: 0.4s;
        }
        .ability-icon { width: 50px; height: 50px; }
        .ability-title { fontSize: 22px; margin: 0 0 8px; color: #fff; }
        .ability-desc { color: #888; margin: 0; font-size: 15px; line-height: 1.5; }

        .clients-flex { display: flex; gap: 20px; flex-wrap: wrap; }
        .client-card {
          width: 200px; height: 100px; border-radius: 20px; background-color: #141414;
          display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.03); transition: 0.3s;
        }
        .client-img { width: 90px; filter: grayscale(100%); opacity: 0.4; }

        .main-btn:hover { background-color: #4ade80 !important; transform: scale(1.05); box-shadow: 0 15px 40px rgba(57, 150, 95, 0.5); }
        .tool-card:hover { border-color: #39965F !important; transform: translateY(-8px); background-color: #1a1a1a !important; }
        .tool-card:hover .tool-img { filter: grayscale(0%) !important; opacity: 1 !important; }
        .ability-card:hover { border-color: rgba(57, 150, 95, 0.4) !important; transform: translateX(8px); }

        @media (max-width: 1200px) {
          .haqida-container { padding: 60px 5%; }
        }

        @media (max-width: 1024px) {
          .abilities-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .section-h2 { font-size: 28px; }
          .about-text { font-size: 16px; }
          .haqida-container { padding: 40px 20px; }
          section { margin-bottom: 60px; }
          .tools-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
        }

        @media (max-width: 480px) {
          .section-h2 { font-size: 24px; }
          .about-text { font-size: 15px; text-align: left; }
          .tool-card { height: 90px; }
          .tools-grid { grid-template-columns: repeat(2, 1fr); }
          .ability-card { flex-direction: column; text-align: center; padding: 20px; }
          .client-card { width: 100%; height: 80px; }
          .main-btn { width: 100%; padding: 14px; }
        }
      `}</style>
    </div>
  );
}
