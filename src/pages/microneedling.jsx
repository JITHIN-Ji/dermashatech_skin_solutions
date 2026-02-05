import React, { useState, useEffect } from 'react';
import { Search, X, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Import microneedling devices data
import { microneedlingDevices } from '../data/microneedling';

const Microneedling = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gridCols, setGridCols] = useState(3);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredDevices = microneedlingDevices.filter(device =>
    device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section - matches "Our Machine Categories" style with different light color */}
      <section className="py-16 bg-gradient-to-br from-[#E0F7FA] via-[#B2EBF2] to-[#80DEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Microneedling
            <span className="block bg-gradient-to-r from-[#00838F] via-[#00695C] to-[#004D40] bg-clip-text text-transparent">
              Devices
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Discover our professional collection of microneedling devices designed for
            advanced skin rejuvenation and aesthetic treatments
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section id="devices" className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-200 to-teal-200 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative flex items-center bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="pl-4 pr-2 py-3">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search devices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 py-3 pr-4 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="pr-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
            {searchQuery && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-gray-600 text-sm text-center"
              >
                Found {filteredDevices.length} device{filteredDevices.length !== 1 ? 's' : ''}
              </motion.p>
            )}
          </motion.div>

          {/* Devices Grid - Simplified */}
          {filteredDevices.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-gray-600 mb-2">No devices found</h3>
              <p className="text-gray-500">Try adjusting your search query</p>
            </motion.div>
          ) : (
            <>
              {/* Grid Layout Switcher Dots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center gap-2 mb-8"
              >
                {[2, 3, 4, 5, 6].map((cols) => (
                  <button
                    key={cols}
                    onClick={() => setGridCols(cols)}
                    className={`group relative px-2 py-1 rounded-md transition-all duration-300 border border-gray-300 ${
                      gridCols === cols
                        ? 'bg-white shadow-md'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    title={`${cols} columns`}
                  >
                    <div className="flex gap-0.5">
                      {Array(cols).fill(0).map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            gridCols === cols ? 'bg-black' : 'bg-gray-400 group-hover:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </motion.div>

              {/* Devices Grid with Dynamic Columns */}
              <div className={`grid gap-6 ${
                gridCols === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                gridCols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                gridCols === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                gridCols === 5 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5' :
                'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
              }`}>
              {filteredDevices.map((device, index) => (
                <motion.div
                  key={device.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  {/* Device Image */}
                  <div className="relative h-64 bg-gradient-to-br from-cyan-50 to-teal-50 overflow-hidden">
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x400?text=Device+Image';
                      }}
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Device Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {device.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {device.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              </div>
            </>
          )}
        </div>
      </section>

      
      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Sparkles className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Need Device Advice?
            </h2>
            <p className="text-xl text-gray-600">
              Contact our equipment specialists for personalized microneedling device recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+918451088204"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
              >
                Call to Order
              </a>
              <a
                href="mailto:info@dermashatech.com"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl border-2 border-cyan-300 hover:bg-cyan-50 transition-all duration-300"
              >
                Email Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Microneedling;
