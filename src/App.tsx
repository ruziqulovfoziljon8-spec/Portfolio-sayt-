import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Boshsahifa from "./bosh sahifa/Boshsahifa";
import Haqida from "./bosh sahifa/Haqida";
import Boglanish from "./bosh sahifa/Boglanish";
import Loyihalar from "./bosh sahifa/Loyihalar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#121212",
        position: "relative",
      }}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1001,
          }}
        />
      )}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <Navbar toggleSidebar={toggleSidebar} />

        <main
          style={{
            flex: 1,
            padding: "20px",
            paddingTop: "90px", 
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Boshsahifa />} />
            <Route path="/haqida" element={<Haqida />} />
            <Route path="/loyihalar" element={<Loyihalar />} />
            <Route path="/boglanish" element={<Boglanish />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
