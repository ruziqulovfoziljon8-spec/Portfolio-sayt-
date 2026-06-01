import { useNavigate, useLocation } from "react-router-dom";

type NavbarProps = {
  toggleSidebar: () => void;
};

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Bosh sahifa",
      path: "/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "22px", height: "22px" }}
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: "Haqida",
      path: "/haqida",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "22px", height: "22px" }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
    },
    {
      name: "Loyihalar",
      path: "/loyihalar",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "22px", height: "22px" }}
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      name: "Bog'lanish",
      path: "/boglanish",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "22px", height: "22px" }}
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="top-header">
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <button className="menu-btn" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>

          <div className="nav-logo" onClick={() => navigate("/")}>
            FOZILJON<span style={{ color: "#00d2ff" }}>.UZ</span>
          </div>
        </div>

        <div className="nav-links-desktop">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className={`nav-item ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.name}
              <span className="line"></span>
            </button>
          ))}
        </div>
      </div>

      <div className="bottom-nav-mobile">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className={`mobile-nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="mobile-icon">{item.icon}</span>
            <span className="mobile-text">{item.name}</span>
          </button>
        ))}
      </div>

      <style>{`
        .top-header {
          height: 70px; width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; background: rgba(27, 27, 27, 0.95); backdrop-filter: blur(10px);
          position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid rgba(255,255,255,0.1);
          box-sizing: border-box;
        }
        .nav-logo { font-size: 20px; font-weight: 800; color: #fff; cursor: pointer; }
        
        .nav-links-desktop { display: flex; gap: 20px; }
        .nav-item { 
          background: none; border: none; color: #fff; cursor: pointer; position: relative; 
          font-size: 14px; padding: 5px 0; transition: 0.3s;
        }
        .nav-item.active { color: #00d2ff; }
        .line { 
          position: absolute; bottom: 0; left: 0; height: 2px; background: #00d2ff; 
          width: 0; transition: 0.3s; 
        }
        .nav-item.active .line, .nav-item:hover .line { width: 100%; }

        .menu-btn {
          display: none; background: none; border: none; cursor: pointer; padding: 5px;
          flex-direction: column; gap: 4px;
        }
        .bar { width: 20px; height: 2px; background: white; transition: 0.3s; }

        .bottom-nav-mobile { display: none; }

        @media (max-width: 1024px) {
          .menu-btn { display: flex; }
          .top-header { padding: 0 20px; }
          .nav-links-desktop { display: none; } 
        }

        @media (max-width: 600px) {
          .top-header {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            height: 60px !important;
            width: 100% !important;
            padding: 0 20px !important;
            background: #111111 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            z-index: 1000 !important;
            display: flex !important;
            justify-content: flex-start !important;
          }
          .menu-btn { display: flex !important; margin-right: 5px; }
          .nav-logo { font-size: 18px !important; }

          .bottom-nav-mobile { 
            display: flex !important; 
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 65px !important;
            background: #111111 !important;
            border-top: 1px solid #222222 !important;
            justify-content: space-around !important;
            align-items: center !important;
            padding: 5px 0 !important;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.6) !important;
            z-index: 9999 !important;
            box-sizing: border-box;
          }

          .mobile-nav-item {
            background: none; border: none; color: #888888; cursor: pointer;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            font-size: 11px; gap: 4px; flex: 1; padding: 0; transition: 0.2s;
          }
          .mobile-icon { color: #888888; transition: 0.2s; }

          .mobile-nav-item.active { color: #00d2ff !important; }
          .mobile-nav-item.active .mobile-icon { color: #00d2ff !important; }
        }
      `}</style>
    </>
  );
}
