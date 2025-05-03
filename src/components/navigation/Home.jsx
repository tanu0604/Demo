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
    </>
  );
}
