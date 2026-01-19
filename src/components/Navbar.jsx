import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    
    { name: 'Products', path: '/products' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 cursor-pointer -ml-2"
            >
              <div className="w-12 h-12 bg-[#1ba9a0] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  DERMASHATECH
                </h1>
                <p className="text-xs bg-gradient-to-r from-[#1ba9a0] to-[#1ba9a0] bg-clip-text text-transparent font-medium">
                  Skin Aesthetic Solutions
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <a
              href="tel:+918451088204"
              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 84510 88204</span>
            </a> */}
            <a
              href="mailto:info@dermashatech.com"
              className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 bg-white rounded-lg shadow-lg mb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-gray-900 bg-gray-100 font-semibold'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="border-t border-gray-200 pt-4 px-4 space-y-3">
                  <a
                    href="tel:+918451088204"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">+91 84510 88204</span>
                  </a>
                  <a
                    href="tel:+918303620636"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">+91 83036 20636</span>
                  </a>
                  <a
                    href="mailto:info@dermashatech.com"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">Get Quote</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;