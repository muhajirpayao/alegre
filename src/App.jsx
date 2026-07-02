import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import VideoFeature from "./components/VideoFeature";
import FeatureGrid from "./components/FeatureGrid";
import DualIdentity from "./components/DualIdentity";
import Regulars from "./components/Regulars";
import Menu from "./components/Menu";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import PromoPopup from "./components/PromoPopup";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-canvas text-ink font-body"
    >
      <PromoPopup />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <VideoFeature />
        <FeatureGrid />
        <DualIdentity />
        <Regulars />
        <Menu />
        <Visit />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
