import { useNavigate } from "react-router-dom";

export default function Boshsahifa() {
  const navigate = useNavigate();

  return (
    <div
      className="home-wrapper"
      style={{
        width: "100%",
        minHeight: "calc(100vh - 75px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        padding: "20px", 
      }}
    >
      <div
        className="hero-card"
        style={{
          textAlign: "center",
          padding: "50px 30px",
          borderRadius: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
          maxWidth: "700px",
          width: "100%",
          animation: "fadeInUp 1s ease-out",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            borderRadius: "30px",
            backgroundColor: "rgba(0, 210, 255, 0.08)",
            color: "#00d2ff",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            marginBottom: "25px",
            border: "1px solid rgba(0, 210, 255, 0.15)",
            backdropFilter: "blur(5px)",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "flex",
              width: "10px",
              height: "10px",
            }}
          >
            <span className="ping-animation"></span>
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                backgroundColor: "#00d2ff",
              }}
            ></span>
          </span>
          Portfolio saytimga xush kelibsiz
        </div>

        <h1
          className="hero-title"
          style={{
            color: "white",
            fontSize: "42px",
            fontWeight: "800",
            margin: "0 0 15px",
            lineHeight: "1.2",
          }}
        >
          Assalomu alaykum, Men <br />
          <span className="glow-text" style={{ color: "#00d2ff" }}>
            Foziljonman
          </span>
        </h1>

        <p
          className="hero-desc"
          style={{
            color: "#a1a1aa",
            fontSize: "16px",
            lineHeight: "1.6",
            margin: "0 auto 35px",
            maxWidth: "500px",
          }}
        >
          Veb-saytlar va raqamli mahsulotlar yaratish orqali{" "}
          <br className="br-desktop" />
          foydalanuvchilar muammolariga zamonaviy <br className="br-desktop" />
          yechimlar taqdim etaman.
        </p>

        <div
          className="btn-group"
          style={{ display: "flex", gap: "15px", justifyContent: "center" }}
        >
          <button
            onClick={() => navigate("/loyihalar")}
            className="action-btn"
            style={{
              padding: "14px 30px",
              borderRadius: "12px",
              backgroundColor: "#00d2ff",
              color: "#121212",
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(0, 210, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Loyihalarim
          </button>

          <button
            onClick={() => navigate("/boglanish")}
            className="outline-btn"
            style={{
              padding: "14px 30px",
              borderRadius: "12px",
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Bog'lanish
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ping-animation {
          position: absolute;
          display: inline-flex;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #00d2ff;
          opacity: 0.75;
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(0, 210, 255, 0.5);
          display: inline-block;
          animation: pulse 2s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .action-btn:hover {
          transform: translateY(-3px);
          background-color: #fff !important;
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.3) !important;
        }
        .action-btn:active {
          transform: translateY(-1px) scale(0.96);
        }

        .outline-btn:hover {
          background-color: #00d2ff !important;
          color: #121212 !important;
          border-color: #00d2ff !important;
          box-shadow: 0 0 25px rgba(0, 210, 255, 0.4);
          transform: translateY(-3px);
        }
        .outline-btn:active {
          transform: translateY(-1px) scale(0.96);
        }

        .hero-card:hover {
          border-color: rgba(0, 210, 255, 0.4);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 210, 255, 0.1);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px !important;
          }
          .hero-desc {
            font-size: 14px !important;
          }
          .br-desktop {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-card {
            padding: 40px 20px !important;
          }
          .hero-title {
            font-size: 28px !important;
          }
          .btn-group {
            flex-direction: column;
            width: 100%;
          }
          .action-btn, .outline-btn {
            width: 100%;
            padding: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
