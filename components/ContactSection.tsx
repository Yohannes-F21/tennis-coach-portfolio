"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Instagram,
  Youtube,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Music2,
} from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/abel_tesgaye?utm_source=qr&igsh=M2lvdjNzaTFuMzZh",
    label: "Instagram",
    color: "hover:text-pink-600",
  },
  {
    icon: Send,
    href: "@Abeltesgaye",
    label: "Telegram",
    color: "hover:text-blue-600",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/qr/TSK2G2JCLS6IG1",
    label: "WhatsApp",
    color: "hover:text-green-600",
  },

  {
    icon: Mail,
    href: "mailto:abenzer.tesgaye1224@gmail.com",
    label: "Email",
    color: "hover:text-primary",
  },
  {
    icon: Music2,
    href: "https://www.tiktok.com/@abela_tag168?_r=1&_t=ZM-923bUKkpY7A",
    label: "TikTok",
    color: "hover:text-primary",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });

    // Auto-hide after 4 seconds
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("subject", formData.subject);
      fd.append("message", formData.message);

      // Required for FormSubmit to NOT redirect
      fd.append("_redirect", "false");

      const response = await fetch(
        "https://formsubmit.co/yohannesfantahun88@gmail.com",
        {
          method: "POST",
          body: fd, // ❗ No headers needed
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Try again later.");
      }

      showToast("Message sent successfully!", "success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      {toast.show && (
        <div
          className={`fixed top-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white z-50 
      ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Ready to take your game to the next level? Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full bg-primary text-white px-6 py-4 rounded-xl font-semibold shadow-md 
                             hover:shadow-lg transition-all flex items-center justify-center gap-2
                ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`p-4 bg-secondary rounded-xl shadow-md hover:shadow-lg transition-all ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <div className="bg-secondary p-6 rounded-2xl shadow-md">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Training Location
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Shalla Tennis Club
                      <br />
                      Addis Ababa, Ethiopia
                      <br />
                      woreda 03, Bole
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.7095702676977!2d38.78359989253635!3d9.004075344695863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85fa862a93d5%3A0xa57cdf3e4d54ffe9!2sShalla%20Ground%20Tennis%20Court!5e1!3m2!1sen!2set!4v1765285416019!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Training Location Map"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
