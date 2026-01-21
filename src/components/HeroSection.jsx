import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Demo images - replace with your actual images
const images = [
  "/images/30.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Image Slider with Overlay */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img
                src={images[current]}
                alt="Dermashatech Equipment"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Container - FIXED MOBILE ALIGNMENT */}
        <div className="relative z-10 h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="max-w-3xl">
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  DERMASHATECH
                </h1>
                <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-purple-500 to-pink-500 mb-4 sm:mb-6" />
              </motion.div>

              {/* Tagline */}
              {/* <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-200 font-light mb-6 sm:mb-8"
              >
                Skin Aesthetic Solutions
              </motion.h2> */}

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
              >
                High-quality, FDA & CE certified laser machines for dermatology
                and aesthetics. Advanced technology backed by expert support
                across India.
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10"
              >
                {["FDA Certified", "CE Approved", "Expert Support", "Mumbai Based"].map(
                  (feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium"
                    >
                      {feature}
                    </span>
                  )
                )}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <a href="/products">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                  Explore Products
                </button>
              </a>

              <a href="/contact">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
                  Contact Us
                </button>
              </a>
            </motion.div>

            </div>
          </div>
        </div>

        {/* Slide Indicators - Only show if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  idx === current ? "w-8 sm:w-12 bg-white" : "w-1.5 sm:w-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Scroll Down Arrow */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </motion.div>
        </button>
      </section>

      {/* WhatsApp Floating Button */}
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