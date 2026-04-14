import { useState } from "react";
import type { FormEvent } from "react";
import frame1 from "../assets/images/Frame1.png";
import frame3 from "../assets/images/Frame3.png";
import frame4 from "../assets/images/Frame4.png";

interface SectionTitleProps {
  title: string;
}

export default function Boglanish() {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "9efca146-4f86-4c88-b67c-5ba42e2d5e35");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        e.currentTarget.reset();
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      } else {
        alert("Xatolik yuz berdi: " + data.message);
      }
    } catch (error) {
      alert("Tarmoqda xatolik!");
    } finally {
      setLoading(false);
    }
  };

  const SectionTitle = ({ title }: SectionTitleProps) => (
    <div style={{ marginBottom: "35px" }}>
      <h3
        className="section-title-h3"
        style={{ fontWeight: "800", color: "#fff", margin: "0 0 10px" }}
      >
        {title}
      </h3>
      <div
        className="section-title-line"
        style={{
          height: "5px",
          background: "linear-gradient(90deg, #39965F, #4ade80)",
          borderRadius: "10px",
        }}
      />
    </div>
  );

  return (
    <div className="boglanish-container">
      <SectionTitle title="Bog'lanish" />
      <div className="contacts-grid">
        {[
          {
            img: frame1,
            title: "E-pochta",
            link: "mailto:ruziqulovfoziljon8@gmail.com",
            text: "ruziqulovfoziljon8@gmail.com",
          },
          {
            img: frame3,
            title: "Telegram",
            link: "https://t.me/roziqulovv_01",
            text: "@roziqulovv_01",
          },
          {
            img: frame4,
            title: "Telefon",
            link: "tel:+998948170520",
            text: "+998 (94) 817-05-20",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="contact-card-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="contact-card">
              <div className="icon-wrapper">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ height: "30px" }}
                />
              </div>
              <h5>{item.title}</h5>
              <span>{item.text}</span>
            </div>
          </a>
        ))}
      </div>

      <SectionTitle title="So’rov yuborish" />
      <div className="form-wrapper">
        {isSent && (
          <div className="success-alert">
            ✅ So'rov muvaffaqiyatli yuborildi! Tez orada bog'lanamiz.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <div className="form-grid">
            <div className="input-group">
              <label>Ismingiz*</label>
              <input
                name="name"
                required
                type="text"
                placeholder="Ismingizni kiriting"
                className="custom-input"
              />
            </div>
            <div className="input-group">
              <label>Manzilingiz (Email)*</label>
              <input
                name="email"
                required
                type="email"
                placeholder="Email@example.com"
                className="custom-input"
              />
            </div>
          </div>

          <div style={{ marginBottom: "35px" }}>
            <label className="label-text">Izohingiz*</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Xabarlaringizni shu yerga yozing..."
              className="custom-input"
              style={{ resize: "none" }}
            ></textarea>
          </div>

          <div style={{ textAlign: "left" }}>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Yuborilmoqda..." : "Yuborish"}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .boglanish-container {
          width: 100%; min-height: 100vh; background-color: #0A0A0A; color: white;
          padding: 80px 10%; font-family: 'Inter', sans-serif; box-sizing: border-box;
        }
        .section-title-h3 { font-size: 28px; }
        .section-title-line { width: 80px; box-shadow: 0 0 15px rgba(57, 150, 95, 0.4); }
        .contacts-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px; margin-bottom: 80px;
        }
        .contact-card {
          background-color: #141414; border-radius: 20px; padding: 35px;
          display: flex; flex-direction: column; align-items: center;
          border: 1px solid rgba(255,255,255,0.05); transition: 0.4s; height: 100%;
          box-sizing: border-box;
        }
        .contact-card:hover {
          transform: translateY(-10px); border-color: #39965F !important;
          background-color: #1a1a1a !important; box-shadow: 0 15px 30px rgba(57, 150, 95, 0.1);
        }
        .icon-wrapper {
          width: 70px; height: 70px; background-color: rgba(57, 150, 95, 0.1);
          border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
        }
        .contact-card h5 { font-size: 20px; font-weight: 700; margin: 0 0 8px; }
        .contact-card span { color: #39965F; font-size: 14px; font-weight: 500; word-break: break-all; text-align: center; }
        .form-wrapper {
          background-color: #141414; padding: 45px; border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.03); box-shadow: 0 20px 50px rgba(0,0,0,0.5); maxWidth: 1000px;
        }
        .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin-bottom: 25px; }
        .input-group label, .label-text { display: block; margin-bottom: 10px; color: #aaa; font-size: 14px; }
        .custom-input {
          width: 100%; background-color: #1B1B1B; border: 1px solid #222; border-radius: 12px;
          color: white; font-size: 16px; outline: none; transition: 0.3s; box-sizing: border-box; padding: 14px 18px;
        }
        .custom-input:focus { border-color: #39965F; background-color: #222; box-shadow: 0 0 10px rgba(57, 150, 95, 0.2); }
        .submit-btn {
          padding: 15px 50px; background-color: #39965F; color: white; font-weight: 700;
          border-radius: 12px; border: none; cursor: pointer; transition: 0.4s; font-size: 16px;
        }
        .submit-btn:disabled { background-color: #2a6341; cursor: not-allowed; opacity: 0.7; }
        .submit-btn:hover:not(:disabled) { background-color: #4ade80; transform: scale(1.05); }
        .success-alert {
          background-color: #39965F; color: white; padding: 15px; border-radius: 12px;
          text-align: center; margin-bottom: 25px; font-weight: 600; animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1024px) { .boglanish-container { padding: 60px 5%; } }
        @media (max-width: 768px) {
          .form-grid { grid-template-columns: 1fr; }
          .form-wrapper { padding: 30px 20px; }
          .section-title-h3 { font-size: 24px; }
        }
        @media (max-width: 480px) {
          .boglanish-container { padding: 40px 15px; }
          .submit-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}

