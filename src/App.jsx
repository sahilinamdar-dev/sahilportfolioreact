import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import LinkedBusShowcase from "./components/LinkedBusShowcase";

export default function App() {
  return (
    <>
      <Navbar />

      {/* navbar height = h-16 */}
      <main className="pt-16">
        <Home />
        <About />
        <Skills />
        <Works />
        <LinkedBusShowcase />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
