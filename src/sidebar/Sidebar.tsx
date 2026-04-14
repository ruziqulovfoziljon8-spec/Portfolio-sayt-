import frame1 from "../assets/images/Frame1.png";
import frame2 from "../assets/images/Frame2.png";
import frame3 from "../assets/images/Frame3.png";
import frame4 from "../assets/images/Frame4.png";
import ozim from "../assets/images/ozim.png";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

type ContactItemProps = {
  icon: string;
  label: string;
  value: string;
  link: string;
};

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <aside
      className={`sidebar-container ${isOpen ? "open" : ""}`}
      style={{
        width: "340px",
        height: "100vh",
        backgroundColor: "#121212",
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
        overflowY: "auto",
        flexShrink: 0,
        borderRight: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: "10px 0 30px rgba(0, 0, 0, 0.4)",
        zIndex: 1002,
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px 20px",
          gap: "25px",
          position: "relative",
        }}
      >
        <button
          onClick={toggleSidebar}
          className="close-sidebar-btn"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
            display: "none",
            lineHeight: "1",
          }}
        >
          &times;
        </button>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              position: "relative",
              width: "240px",
              height: "240px",
              margin: "0 auto 25px",
            }}
          >
            <img
              className="profile-avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "30px",
                border: "4px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 20px 40px rgba(0, 210, 255, 0.2)",
                transition: "all 0.4s ease",
              }}
              src={ozim}
              alt="Foziljon Ro'ziqulov"
            />
            <div
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                width: "20px",
                height: "20px",
                backgroundColor: "#4ade80",
                borderRadius: "50%",
                border: "4px solid #121212",
                boxShadow: "0 0 15px #4ade80",
              }}
            />
          </div>

          <h3
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "800",
              margin: "0 0 5px",
              letterSpacing: "0.5px",
            }}
          >
            Foziljon Ro'ziqulov
          </h3>
          <p
            style={{
              color: "#00d2ff",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              margin: 0,
            }}
          >
            Fullstack Developer
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          {["React", "Node.js", "Frontend", "N1 Bot", "UI/UX"].map((text) => (
            <span
              key={text}
              style={{
                padding: "5px 14px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                color: "#a1a1aa",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "500",
                border: "1px solid rgba(255, 255, 255, 0.07)",
              }}
            >
              {text}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <ContactItem
            icon={frame1}
            label="Email"
            value="foziljon@gmail.com"
            link="mailto:ruziqulovfoziljon8@gmail.com"
          />
          <ContactItem
            icon={frame2}
            label="Github"
            value="foziljon-spec"
            link="https://github.com/ruziqulovfoziljon8-spec"
          />
          <ContactItem
            icon={frame3}
            label="Telegram"
            value="@roziqulovv_01"
            link="https://t.me/roziqulovv_01"
          />
          <ContactItem
            icon={frame4}
            label="Phone"
            value="+998 94 817 05 20"
            link="tel:+998948170520"
          />
        </div>
      </div>

      <style>{`
        .profile-avatar:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 210, 255, 0.35);
        }
        .contact-link:hover {
          background-color: rgba(0, 210, 255, 0.08) !important;
          transform: translateX(8px);
          border-color: rgba(0, 210, 255, 0.2) !important;
        }

        @media (max-width: 1024px) {
          .sidebar-container {
            position: fixed !important;
            transform: translateX(-100%);
            left: 0;
          }
          .sidebar-container.open {
            transform: translateX(0);
          }
          .close-sidebar-btn {
            display: block !important; 
          }
        }
      `}</style>
    </aside>
  );
}

function ContactItem({ icon, label, value, link }: ContactItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="contact-link"
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        padding: "12px 15px",
        borderRadius: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        textDecoration: "none",
        transition: "all 0.3s ease",
        border: "1px solid transparent",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          backgroundColor: "rgba(0, 210, 255, 0.12)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <img src={icon} alt={label} style={{ width: "22px", height: "22px" }} />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      >
        <span
          style={{
            color: "#52525b",
            fontSize: "11px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span
          style={{
            color: "#f4f4f5",
            fontSize: "13px",
            fontWeight: "500",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value}
        </span>
      </div>
    </a>
  );
}
