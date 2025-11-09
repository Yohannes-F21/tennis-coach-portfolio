"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Coach Abenezer Tsegaye. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <button
              onClick={scrollToTop}
              className="hover:text-primary transition-colors"
            >
              Back to Top
            </button>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="text-center mt-4 text-xs text-white/60">
          Designed by Yohannes Fantahun (Web Developer)
        </div>
        <div className="text-center mt-4 text-xs text-white/60">
          email: yohannesfantahun.m@gmail.com
        </div>
        <div className="text-center mt-4 text-xs text-white/60">
          phone: +251910594289{" "}
        </div>
      </div>
    </footer>
  );
}
