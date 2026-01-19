import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumber1 = '918451088204'; // WhatsApp format

  const handleWhatsAppClick = (number) => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/products-hero.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Animated Background Shapes */}
        

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0 
              }}
              animate={{ 
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
                x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get in {" "}
            <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Have questions about our aesthetic solutions or want to discuss your requirements? We'd love to hear from you. Reach out and let's transform your practice.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Company Info */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Office Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold mb-2">DERMASHATECH</p>
                      <p className="text-gray-600 leading-relaxed">
                        Skin Aesthetic Solutions<br />
                        Shop No 16, Oshiwara Adarsh BLDG. No. 1<br />
                        SRA, CHS LTD, Near City INT School<br />
                        Jogeshwari West, Mumbai 400102
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold mb-2">Phone</p>
                      <div className="space-y-1">
                        <a 
                          href="tel:+918451088204" 
                          className="block text-gray-600 hover:text-purple-500 transition-colors duration-200"
                        >
                          +91 84510 88204
                        </a>
                        <a 
                          href="tel:+918303620636" 
                          className="block text-gray-600 hover:text-purple-500 transition-colors duration-200"
                        >
                          +91 83036 20636
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-purple-500 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold mb-2">Email</p>
                      <a 
                        href="mailto:info@dermashatech.com" 
                        className="text-gray-600 hover:text-purple-500 transition-colors duration-200"
                      >
                        info@dermashatech.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold mb-2">Office Hours</p>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+918451088204"
                    className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200"
                  >
                    <Phone className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-900 font-medium">Call: +91 84510 88204</span>
                  </a>
                  
                  <a
                    href="tel:+918303620636"
                    className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200"
                  >
                    <Phone className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-900 font-medium">Call: +91 83036 20636</span>
                  </a>
                  
                  <a
                    href="mailto:info@dermashatech.com"
                    className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-900 font-medium">Email Us</span>
                  </a>
                  
                  <button
                    onClick={() => handleWhatsAppClick(phoneNumber1)}
                    className="w-full flex items-center space-x-3 p-4 bg-green-600 rounded-xl hover:bg-green-700 transition-colors duration-200"
                  >
                    <MessageCircle className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">WhatsApp Us</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Map and Social QR */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Find Us
                </h3>
                <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center border border-purple-100">
                  <div className="text-center p-6">
                    <MapPin className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <p className="text-gray-900 font-semibold mb-1">Jogeshwari West, Mumbai</p>
                    <p className="text-gray-600 text-sm">Near City INT School</p>
                    <p className="text-gray-500 text-sm mt-2">Shop No 16, Oshiwara Adarsh BLDG</p>
                  </div>
                </div>
              </div>

              {/* Social Media QR Codes */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {/* Instagram QR Code */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <div className="text-center">
                      <div className="inline-block p-4 bg-white rounded-xl shadow-lg mb-3">
                        <img 
                          src="/images/instagram-qr.png" 
                          alt="Instagram QR Code" 
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                      <p className="text-gray-900 font-semibold mb-1 text-sm">Instagram</p>
                      <p className="text-gray-600 text-xs">
                        Follow us for updates
                      </p>
                    </div>
                  </div>

                  {/* Facebook QR Code */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <div className="text-center">
                      <div className="inline-block p-4 bg-white rounded-xl shadow-lg mb-3">
                        <img 
                          src="/images/facebook-qr.png" 
                          alt="Facebook QR Code" 
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                      <p className="text-gray-900 font-semibold mb-1 text-sm">Facebook</p>
                      <p className="text-gray-600 text-xs">
                        Like our page
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center mt-4">
                  Scan to connect and stay updated with our latest products and offers
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Us
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">
                    We are committed to delivering exceptional aesthetic solutions that combine 
                    cutting-edge technology with professional expertise.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span>Premium quality products from trusted manufacturers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span>Expert consultation and training support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span>Comprehensive after-sales service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">✓</span>
                      <span>Competitive pricing and flexible payment options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our products and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What products do you offer?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer a comprehensive range of aesthetic equipment including laser machines, 
                HIFU systems, CO2 fractional lasers, diode hair removal systems, and advanced 
                skin treatment devices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you provide training?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, we provide comprehensive training for all our equipment. Our expert team 
                ensures you're fully equipped to operate the machines safely and effectively 
                for optimal results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is your warranty policy?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All our products come with manufacturer warranties. We also provide extended 
                warranty options and comprehensive after-sales support including maintenance 
                and spare parts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer installation services?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, we provide complete installation services for all equipment. Our technical 
                team will set up the machines at your facility and ensure everything is working 
                perfectly before handover.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What payment options are available?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer flexible payment options including upfront payment, installment plans, 
                and financing options. Contact us to discuss the best payment plan for your 
                practice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I see a demo before purchasing?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! We encourage potential clients to see our equipment in action. 
                Visit our showroom in Mumbai or schedule an appointment for a personalized 
                demonstration of our products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today for expert consultation and competitive pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+918451088204"
                className="
  px-8 py-4
  bg-[#1ba9a0]
  text-white font-semibold
  rounded-xl
  shadow-md hover:shadow-lg
  hover:bg-[#16958d]
  transition-all duration-300
  inline-block
"              >
                Call: +91 84510 88204
              </a>
              <a
                href="mailto:info@dermashatech.com"
                className="px-8 py-4 bg-white text-purple-500 font-semibold rounded-xl border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300 inline-block"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;