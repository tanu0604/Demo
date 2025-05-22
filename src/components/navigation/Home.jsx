import React, { useEffect } from "react";
import headingImg from "../../assets/headingImgs/headingImg.jpg";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "../services/Services";
import Pricing from "../pricing/Pricing";
import Booking from "../booking/Booking";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section
        className="relative w-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
        id="home"
      >
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src={headingImg}
            alt="Taxi service background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container relative h-full p-4">
          <div className="grid lg:grid-cols-2 gap-8 h-full min-h-[500px] lg:min-h-[600px] items-center">
            {/* Right - Text & Button Section */}
            <div className="pt-20 lg:pt-0 space-y-6 text-right">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-yellow-400">Reliable Car Service</span> At
                Your Doorstep
              </motion.h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl ml-auto">
                Experience premium taxi service with professional drivers and
                comfortable rides.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full text-lg px-8 py-3"
                  href="/book"
                >
                  Book Your Cab
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <Services />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Pricing />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <Booking />
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916391557778"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.52 3.48A11.935 11.935 0 0 0 12 0C5.372 0 0 5.372 0 12c0 2.118.553 4.173 1.6 6.015L0 24l6.258-1.593A11.94 11.94 0 0 0 12 24c6.628 0 12-5.372 12-12 0-3.193-1.248-6.2-3.48-8.52zM12 22a9.952 9.952 0 0 1-5.095-1.401l-.365-.215-3.712.944.99-3.618-.237-.372A9.949 9.949 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.238-7.543c-.272-.137-1.61-.793-1.86-.884-.25-.09-.43-.137-.61.138s-.698.884-.855 1.067c-.157.183-.315.205-.587.068-.272-.138-1.147-.422-2.185-1.345-.81-.723-1.36-1.614-1.52-1.886-.157-.273-.017-.42.12-.557.123-.123.273-.318.41-.477.138-.16.183-.273.273-.455.092-.183.046-.34-.022-.478-.068-.136-.61-1.472-.837-2.014-.22-.53-.446-.456-.61-.464l-.522-.01c-.183 0-.48.07-.733.34-.25.273-.967.945-.967 2.305 0 1.36.99 2.672 1.127 2.855.137.183 1.948 2.973 4.73 4.165.662.285 1.177.456 1.578.583.662.21 1.265.18 1.74.11.53-.08 1.61-.658 1.837-1.293.227-.637.227-1.184.16-1.293-.068-.11-.25-.183-.522-.32z" />
        </svg>
      </a>
    </>
  );
}
