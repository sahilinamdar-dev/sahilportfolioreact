import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import LinkedBusShowcase from "./components/LinkedBusShowcase";

// secondary routes split out of the main bundle
const LinkedBusCaseStudy = lazy(() => import("./pages/LinkedBusCaseStudy"));
const InamDesk = lazy(() => import("./pages/InamDesk"));
const Jivandan = lazy(() => import("./pages/Jivandan"));

/* single-page scroll home */
function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Works />
      <LinkedBusShowcase />
      <Contact />
    </>
  );
}

/* jump to top on every route change */
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
      <Navbar />
      <ScrollToTop />

      {/* navbar height = h-16 */}
      <main className="pt-16">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
              Loading…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works/linkedbus" element={<LinkedBusCaseStudy />} />
            <Route path="/projects/inamdesk" element={<InamDesk />} />
            <Route path="/projects/jivandan" element={<Jivandan />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
