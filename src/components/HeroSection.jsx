import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const desktopImages = [
  "/images/4.png",
];

const mobileImages = [
  "/images/5.png",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  // Auto-slide (only matters if multiple images exist)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Reset index if switching between mobile/desktop with different array lengths
  useEffect(() => {
    setCurrent(0);
  }, [isMobile]);

  const scrollToNextSection = () => {
    const heroSection = document.querySelector("section");
    const navbarHeight = 80;
    if (heroSection) {
      window.scrollTo({
        top: heroSection.offsetHeight - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        className="relative overflow-hidden bg-slate-900"
        style={{ height: "100vh", minHeight: "500px" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={`${isMobile ? "mobile" : "desktop"}-${current}`}
              className="absolute inset-0"
              initial={{ opacity: current === 0 ? 1 : 0, scale: current === 0 ? 1 : 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img
                src={images[current]}
                alt="Dermashatech"
                className="w-full h-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                  touchAction: "none",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                }}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Full-screen clickable overlay — scrolls to next section on click/tap */}
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={scrollToNextSection}
          onTouchEnd={scrollToNextSection}
          aria-label="Tap to scroll to next section"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") scrollToNextSection(); }}
        />
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918451088204"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors duration-300"
        >
          <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </motion.div>
        <span className="absolute right-16 sm:right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Chat with us
        </span>
      </a>
    </>
  );
};

export default HeroSection;