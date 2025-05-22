import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import cab1 from "../../assets/CabImages/cab1.jpg";
import cab2 from "../../assets/CabImages/cab2.jpg";
import cab3 from "../../assets/CabImages/cab3.jpg";
import cab4 from "../../assets/CabImages/cab4.jpg";
import cab5 from "../../assets/CabImages/cab5.jpg";

const images = [cab1, cab2, cab3, cab4, cab5];

export default function Services() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="flex flex-col md:flex-row items-center justify-center px-8 py-12 bg-gray-100"
        id="services"
      >
        {/* Left - Image Slider */}
        <div
          className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg"
          data-aos="fade-right"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Cab Service"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100 z-10" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Right - About Content */}
        <div
          className="md:w-1/2 md:ml-10 text-center md:text-left mt-6 md:mt-0"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold text-yellow-500">
            Your Ride, Your Way
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            🚖 Experience seamless travel with us! Whether it's a quick one-way
            ride, a round trip, or a special event, we prioritize your comfort,
            security, and trust. Our well-maintained fleet and professional
            drivers ensure a smooth and reliable journey every time.
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {[
              "Comfort",
              "Trust",
              "Security",
              "Reliability",
              "Professionalism",
              "Safety",
            ].map((feature, index) => (
              <motion.span
                key={index}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
