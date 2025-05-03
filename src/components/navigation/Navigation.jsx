import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/headingImgs/logo.jpg";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    {path:"/",label:"Home"},
    { path: "/services", label: "Services" },
    { path: "/pricing", label: "Pricing" },
    { path: "/book", label: "Book a Ride" },
    { path: "/contact", label: "Terms&Conditions" }
  ];

  return (
    <>
    <header className="sticky w-full top-0 z-50 bg-yellow-500 text-black border-b p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <span className="font-bold text-lg hidden md:block">One Cab Service</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-yellow-700 transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md bg-gray-300 hover:bg-gray-400 transition" onClick={toggleMenu}>
          {menuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full left-0 bg-yellow-300 text-black p-4 flex flex-col space-y-4 shadow-md transition-transform duration-300 ${menuOpen ? "top-16" : "-top-96"}`}>
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="hover:text-yellow-700 transition-colors duration-300 text-center" onClick={toggleMenu}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
   
    </>
  );
}
