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
      <Navbar setModalOpen={setModalOpen} />
      <Home />
      <Footer />
      {modalOpen && <CTA />}
    </>
  );
}
export default App;
