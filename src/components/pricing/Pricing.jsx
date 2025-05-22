import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const routes = [
  { from: "Prayagraj", to: "Lucknow", oldPrice: "₹4500", newPrice: "₹3200" },
  { from: "Prayagraj", to: "Kanpur", oldPrice: "₹4000", newPrice: "₹3200" },
  { from: "Varanasi", to: "Prayagraj", oldPrice: "₹3000", newPrice: "₹2500" },
  { from: "Prayagraj", to: "Ayodhya", oldPrice: "₹3500", newPrice: "₹2700" },
  { from: "Lucknow", to: "Varanasi", oldPrice: "₹5000", newPrice: "₹4500" },
  { from: "Prayagraj", to: "Vrindavan", oldPrice: "₹11000", newPrice: "₹8000" },
];

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="w-full py-12 bg-gray-100 text-center" id="pricing">
      <h2
        className="text-3xl font-bold text-yellow-500 mb-6"
        data-aos="fade-up"
      >
        One-Way Dropping Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {routes.map((route, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Slight delay for staggered effect
          >
            <p className="text-lg text-gray-700">
              {route.from} ➝ {route.to}{" "}
            </p>
            <p className="text-lg text-gray-700">
              {route.to} ➝ {route.from}{" "}
            </p>

            <div className="flex items-center justify-center mt-4 text-xl font-bold">
              <span className="line-through text-gray-500 text-lg mr-2">
                {route.oldPrice}
              </span>
              <motion.span
                className="text-green-500 text-2xl font-bold"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                ⭐ {route.newPrice} ⭐
              </motion.span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
