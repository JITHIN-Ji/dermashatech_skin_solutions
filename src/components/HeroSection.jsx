import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { featuredProducts } from "../data/home_machines";

const desktopImages = [
  "/images/hero5.png",
  
];

const mobileImages = [
  "/images/hero7.png",
  
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Detect mobile vs desktop
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Reset index if switching between mobile/desktop
  useEffect(() => {
    setCurrent(0);
  }, [isMobile]);

  const navigateToMachines = () => {
    navigate("/machines");
  };

  return (
    <>
      <section
        className="relative overflow-hidden bg-white"
        style={{ height: "100vh", minHeight: "500px" }}
      >
        {/* Background Image Container - starts below fixed navbar */}
        <div className="absolute left-0 right-0 top-16 bottom-0 w-full h-full">
          <AnimatePresence initial={false}>
            {images.map((img, index) => (
              index === current && (
                <motion.div
                  key={`${isMobile ? "mobile" : "desktop"}-${index}`}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={img}
                    alt={`Dermashatech Slide ${index + 1}`}
                    className="w-full h-full pointer-events-none"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                    draggable={false}
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Clickable center overlay - only center portion is clickable */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div
            className="w-2/3 h-2/3 cursor-pointer pointer-events-auto"
            onClick={navigateToMachines}
            onTouchEnd={(e) => {
              e.preventDefault();
              navigateToMachines();
            }}
            aria-label="Click to view machines"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigateToMachines();
              }
            }}
          />
        </div>

        {/* Slide Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* White Separation between Hero and Skin Products */}
      <div className="w-full h-6 md:h-8 bg-white"></div>

      {/* Skin Products Section with White Partition */}
      <section className="w-full bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <img
              src="/images/hero1.png"
              alt="Cosderma New Beauty - Sunscreens, Moisturizers, Serum"
              className="w-full md:w-1/2 h-64 md:h-80 lg:h-96 object-cover"
            />
            {/* White Partition - horizontal on mobile, vertical on desktop */}
            <div className="w-full md:w-8 h-6 md:h-auto bg-white"></div>
            <img
              src="/images/hero2.png"
              alt="Discover Powerful Meso Solutions for Flawless Skin"
              className="w-full md:w-1/2 h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Machines Section with Pure White Background */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Machines</h2>
            <Link to="/machines" className="text-sm text-teal-600 font-medium hover:underline">View all</Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {featuredProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <button
                  onClick={() => navigate("/machines")}
                  className="w-full h-full text-left"
                >
                  <img src={p.image} alt={p.title} className="w-full h-36 sm:h-40 object-contain bg-white p-3" />
                  <div className="p-3 bg-white">
                    <h3 className="text-sm font-semibold text-gray-900">{p.title}</h3>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
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
        <span className="absolute right-16 sm:right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block shadow-lg">
          Chat with us
        </span>
      </a>
    </>
  );
};

export default HeroSection;