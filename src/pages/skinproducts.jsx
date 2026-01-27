import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Import skin products data
import { skinProducts } from '../data/skinproducts';

const SkinProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles className="w-10 h-10 text-pink-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Skin Care Products
            </h1>
            <Sparkles className="w-10 h-10 text-purple-500" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our premium collection of skincare essentials for radiant, healthy skin
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
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

          {/* Products Grid */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      
                    </div>
                  )}

                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative p-6 flex flex-col h-full">
                    {/* Image Container */}
                    <div className="mb-6 flex items-center justify-center h-56 rounded-xl bg-white/50 backdrop-blur-sm p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400?text=Product+Image';
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow">
                      <div className="mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm font-medium text-pink-600 mb-3">
                          {product.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                        {product.shortDescription}
                      </p>

                      {/* Quick Benefits Preview */}
                      <div className="mb-4 space-y-1">
                        {product.keyBenefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-base">{benefit.icon}</span>
                            <span className="line-clamp-1">{benefit.text}</span>
                          </div>
                        ))}
                        {product.keyBenefits.length > 3 && (
                          <p className="text-xs text-gray-500 italic pl-6">
                            +{product.keyBenefits.length - 3} more benefits
                          </p>
                        )}
                      </div>
                    </div>

                    {/* View Details Button - Teal Color */}
                    <button
                      onClick={() => handleViewDetails(product.id)}
                      className="w-full mt-4 px-6 py-3 bg-[#1ba9a0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#16958d] transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-br-full"></div>
                </motion.div>
              ))}
            </div>
          )}
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