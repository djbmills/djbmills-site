import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";
import CorporateEvents from "./pages/CorporateEvents";
import Availability from "./pages/Availability"; // <-- Added this
import Navbar from "./components/Navbar";

// Helper to ensure the page starts at the top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      {/* PRESTIGE FADE-IN */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "hsl(36, 33%, 97%)", 
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-events" element={<CorporateEvents />} />
          
          {/* Availability Pillar: The new frictionless booking engine */}
          <Route path="/availability" element={<Availability />} /> 
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}
