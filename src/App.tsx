import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SoftBackdrop from "./components/SoftBackdrop";
import Footer from "./components/Footer";
import LenisScroll from "./components/lenis";
import { useState } from "react";
import CTA from "./components/CTA";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <Home />
      <Footer />

      {/* Trigger button */}
      <div className="fixed bottom-10 right-10 z-50">
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
          onClick={() => setModalOpen(true)}
        >
          Build Your Dream
        </button>
      </div>

      {/* Modal CTA */}
      {modalOpen && <CTA setModalOpen={setModalOpen} />}
    </>
  );
}
export default App;
