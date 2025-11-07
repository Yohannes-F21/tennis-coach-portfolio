"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Coach Abenezer transformed my game completely!",
    author: "Yohannes F.",
  },
  { quote: "Best tennis coach I've ever worked with.", author: "Mulugeta R." },
  { quote: "My confidence on court has skyrocketed!", author: "Nahome T." },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  // { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/tennis-hero2.jpeg"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Hi, I'm Coach Abenezer Tsegaye
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Certified Tennis Instructor helping players elevate their game
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
                        px-8 py-3 
                        bg-[#1A1A1A] 
                        hover:bg-[#2A2A2A] 
                        text-white text-lg font-medium 
                        rounded-full 
                        border border-[#D4AF37] 
                        hover:border-white 
                        transition-all duration-300 
                        shadow-lg hover:shadow-xl
                      "
          >
            Contact Me
          </motion.a>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </div>

          {/* Testimonial Carousel */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-white/90 italic mb-2">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <p className="text-white/70 font-medium">
              — {testimonials[currentTestimonial].author}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
