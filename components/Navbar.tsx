"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const navbarHeight = 64; // h-16 = 64px
    let ticking = false;

    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        ticking = false;
        return;
      }

      const rect = hero.getBoundingClientRect();
      const heroBottom = rect.bottom;

      // You are past the hero when its bottom is above the navbar
      setPastHero(heroBottom <= navbarHeight);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        pastHero ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          {/* <a
            href="#home"
            className={`text-xl font-bold transition-colors duration-300 ${
              pastHero ? "text-primary" : "text-white"
            }`}
          >
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
          </a> */}

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`font-medium transition-colors duration-200 ${
                  pastHero
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              pastHero ? "hover:bg-secondary" : "hover:bg-white/20"
            }`}
          >
            {isOpen ? (
              <X
                size={24}
                className={pastHero ? "text-foreground" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={pastHero ? "text-foreground" : "text-white"}
              />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
