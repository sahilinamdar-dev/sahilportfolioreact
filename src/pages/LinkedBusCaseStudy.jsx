import { Link } from "react-router-dom";
import LinkedBusShowcase from "../components/LinkedBusShowcase";

export default function LinkedBusCaseStudy() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to portfolio
        </Link>
      </div>

      <LinkedBusShowcase />

      {/* DETAIL SECTION */}
      <section className="max-w-4xl mx-auto px-6 pb-32 -mt-32">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <p className="text-gray-400 leading-relaxed">
          LinkedBus is an online bus booking platform that lets passengers search
          routes, view real-time seat availability, and book securely. An admin
          dashboard handles bus, route, and schedule management.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {["React", "Spring Boot", "Java", "MySQL", "REST API"].map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-4">Key Features</h3>
        <ul className="space-y-3 text-gray-300">
          <li>• Real-time seat availability and locking</li>
          <li>• Secure payment integration</li>
          <li>• User-friendly booking flow</li>
          <li>• Admin dashboard for bus & route management</li>
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://linkedbus-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            View Live Product
          </a>
          <a
            href="https://github.com/sahilinamdar-dev/LinkedBus-Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/30 rounded-full hover:border-white transition"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
