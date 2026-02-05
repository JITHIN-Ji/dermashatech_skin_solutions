import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Import skin products data
import { skinProducts } from '../data/skinproducts';

const SkinProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gridCols, setGridCols] = useState(3);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = skinProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (productId) => {
    navigate(`/skinproduct/${productId}`);
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section - matches "Our Machine Categories" style */}
      <section className="py-16 bg-gradient-to-br from-[#FFF8F0] via-[#FFF5EB] to-[#FFE8D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Skin Care
            <span className="block bg-gradient-to-r from-[#D4A574] via-[#C9915C] to-[#B8956A] bg-clip-text text-transparent">
              Products
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Discover our premium collection of skincare essentials designed for radiant,
            healthy, and glowing skin
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section id="products" className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative flex items-center bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="pl-4 pr-2 py-3">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
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
                Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </motion.p>
            )}
          </motion.div>

          {/* Products Grid - Simplified */}
          {filteredProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-gray-600 mb-2">No products found</h3>
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

              {/* Products Grid with Dynamic Columns */}
              <div className={`grid gap-6 ${
                gridCols === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                gridCols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                gridCols === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                gridCols === 5 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5' :
                'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
              }`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x400?text=Product+Image';
                      }}
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                      {product.name}
                    </h3>

                    {/* View Details Button */}
                    <button
                      onClick={() => handleViewDetails(product.id)}
                      className="w-full px-6 py-3 bg-[#1ba9a0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#16958d] transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-5 h-5 transition-all duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* NEW SECTION - Try New Skincare Beauty */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Image 1 - Large */}
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl h-80">
                  <img
                    src="/images/skinimage3.png"
                    alt="Woman applying skincare"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 2 - Small */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                  <img
                    src="/images/skinimage2.png"
                    alt="Beautiful skin"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image 3 - Small */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                  <img
                    src="/images/skinimage1.png"
                    alt="Skincare routine"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
            </motion.div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#FFF5EB] rounded-full">
                <p className="text-sm font-semibold text-[#C9915C]">Why Choose Us</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Experience the Power of Premium Skincare
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our carefully curated collection of skincare products is designed to transform your daily routine into a luxurious self-care ritual. Each product is formulated with the finest ingredients to deliver visible results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F5E6D3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#C9915C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Clinically Tested</h3>
                    <p className="text-gray-600">All products undergo rigorous testing for safety and efficacy</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F5E6D3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#C9915C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Natural Ingredients</h3>
                    <p className="text-gray-600">Infused with botanical extracts and premium active ingredients</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F5E6D3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#C9915C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visible Results</h3>
                    <p className="text-gray-600">Experience noticeable improvements in skin texture and radiance</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="tel:+918451088204"
                  className="inline-block px-8 py-4 bg-[#F5E6D3] text-gray-800 font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#E8D4BD] transition-all duration-300"
                >
                  Get Expert Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Need Skincare Advice?
            </h2>
            <p className="text-xl text-gray-600">
              Contact our skincare experts for personalized product recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+918451088204"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
              >
                Call to Order
              </a>
              <a
                href="mailto:info@dermashatech.com"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300"
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

export default SkinProducts;