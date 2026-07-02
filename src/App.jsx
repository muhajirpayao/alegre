import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import DualIdentity from "./components/DualIdentity";
import Menu from "./components/Menu";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-body">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <DualIdentity />
        <Menu />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
