import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const CorporateEvents = lazy(() => import("./pages/CorporateEvents"));
const CorporateNJ = lazy(() => import("./pages/CorporateNJ"));
const BrandActivations = lazy(() => import("./pages/BrandActivations"));
const Afterparties = lazy(() => import("./pages/Afterparties"));
const Availability = lazy(() => import("./pages/Availability"));

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
        transition={{
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.05,
        }}
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

        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/corporate-events"
              element={<CorporateEvents />}
            />

            <Route
              path="/corporate-events-nj"
              element={<CorporateNJ />}
            />

            <Route
              path="/afterparties"
              element={<Afterparties />}
            />

            <Route
              path="/brand-activations"
              element={<BrandActivations />}
            />

            <Route
              path="/availability"
              element={<Availability />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>

        <Toaster />
      </Router>
    </>
  );
}
