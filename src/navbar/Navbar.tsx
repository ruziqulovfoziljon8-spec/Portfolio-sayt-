import { useNavigate, useLocation } from "react-router-dom";

type NavbarProps = {
  toggleSidebar: () => void;
};

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { name: "Bosh sahifa", path: "/" },
    { name: "Haqida", path: "/haqida" },
    { name: "Loyihalar", path: "/loyihalar" },
    { name: "Bog'lanish", path: "/boglanish" },
  ];

  return (
    <nav className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Hamburger Menu Tugmasi */}
        <button className="menu-btn" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className="nav-logo" onClick={() => navigate("/")}>
          FOZILJON<span style={{ color: "#00d2ff" }}>.UZ</span>
        </div>
      </div>

      <div className="nav-links">
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

      <style>{`
        .navbar {
          height: 70px; width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; background: rgba(27, 27, 27, 0.95); backdrop-filter: blur(10px);
          position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .menu-btn {
          display: none;
          background: none; border: none; cursor: pointer; padding: 5px;
          flex-direction: column; gap: 4px;
        }
        .bar {
          width: 20px; height: 2px; background: white; transition: 0.3s;
        }
        .nav-logo { font-size: 20px; font-weight: 800; color: #fff; cursor: pointer; }
        .nav-links { display: flex; gap: 20px; }
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
        
        @media (max-width: 1024px) {
          .menu-btn { display: flex; }
          .navbar { padding: 0 20px; }
          .nav-links { display: none; } 
        }

        @media (max-width: 600px) {
          .nav-logo { font-size: 16px; }
          .nav-links { display: flex; gap: 10px; }
          .nav-item { font-size: 11px; }
        }
      `}</style>
    </nav>
  );
}
