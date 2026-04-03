import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";
import CorporateEvents from "./pages/CorporateEvents";

export default function App() {
  return (
    <>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-events" element={<CorporateEvents />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}
