import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";
import CorporateEvents from "./pages/CorporateEvents";
import Navbar from "./components/Navbar";

// Helper to ensure the page starts at the top on route changes (UX for Luxury Browsing)
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
      {/* PRESTIGE FADE-IN 
        This handles the elegant transition as the site loads.
      */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "hsl(36, 33%, 97%)", // Your brand's signature cream/off-white
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Main Landing: Focuses on B.MILLS Sonic Identity */}
          <Route path="/" element={<Home />} />
          
          {/* Corporate Pillar: Targeted at Marketing Directors */}
          <Route path="/corporate-events" element={<CorporateEvents />} />
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}
