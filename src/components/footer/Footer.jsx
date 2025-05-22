import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Booking", path: "/book" },
    { name: "Contact", path: "/contact" },
    { name: "Terms & Conditions", path: "/contact" },
  ];

  return (
    <footer
      className="bg-yellow-400 text-black p-8 mt-12 border-t shadow-md text-center w-full"
      data-aos="fade-up"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Address & Contact Info */}
        <div
          className="flex flex-col items-start text-left"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-bold mb-2">One Cab Service</h2>
          <p className="text-sm flex items-center gap-2">
            <MapPin size={16} /> Shiv Ganga Puram Colony, Umarpur Neewa,
            Dhoomanganj, Prayagraj - 211011
          </p>
          <p className="text-sm flex items-center gap-2">
            <MapPin size={16} /> Lane 109, Madhav Green City, Lucknow
          </p>
          <p className="text-sm flex items-center gap-2">
            <Phone size={16} /> +91 6391557778 , +91 9956876045
          </p>
          <p className="text-sm flex items-center gap-2">
            <Mail size={16} /> support@onecabs.com
          </p>
        </div>

        {/* Navigation Links (Mapped) */}
        <nav
          className="grid grid-cols-2 gap-4 text-sm font-medium"
          data-aos="fade-up"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-green-700 transition-colors duration-300 text-center"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Copyright Section */}
        <div className="flex flex-col items-center" data-aos="fade-left">
          <p className="text-xs font-medium">
            © {new Date().getFullYear()} One Cab Service
          </p>
          <p className="text-xs font-medium">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
