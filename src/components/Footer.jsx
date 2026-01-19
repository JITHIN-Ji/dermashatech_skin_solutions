import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center mb-4">
                <h3 className="text-2xl font-bold bg-[#1ba9a0] bg-clip-text text-transparent">
                  DERMASHATECH
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4">
                Delivering exceptional aesthetic solutions that combine cutting-edge technology with professional expertise.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 ${social.color} transition-colors duration-200`}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Shop No 16, Oshiwara Adarsh BLDG. No. 1<br />
                    Jogeshwari West, Mumbai 400102
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <div className="flex flex-col">
                    <a 
                      href="tel:+918451088204" 
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                    >
                      +91 84510 88204
                    </a>
                    <a 
                      href="tel:+918303620636" 
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                    >
                      +91 83036 20636
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  <a 
                    href="mailto:info@dermashatech.com" 
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm break-all"
                  >
                    info@dermashatech.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Office Hours */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-600 text-sm">
                    <div>Monday - Saturday</div>
                    <div>10:00 AM - 7:00 PM</div>
                    <div className="mt-2">Sunday: By Appointment</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-200 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} DERMASHATECH. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-purple-600 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-purple-600 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;