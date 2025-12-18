import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

// IMPORTANT: case study component
import LinkedBusShowcase from "./components/LinkedBusShowcase";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* HERO */}
        <section id="home">
          <Home />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* SKILLS */}
        <section id="skills">
          <Skills />
        </section>

        {/* WORKS OVERVIEW (horizontal scroll) */}
        <section id="work">
          <Works />
        </section>

        {/* CASE STUDY — MUST COME AFTER WORKS */}
        <LinkedBusShowcase />

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
