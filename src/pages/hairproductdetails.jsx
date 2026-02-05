import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Sparkles, Droplets, Package } from 'lucide-react';
import { motion } from 'framer-motion';

// Import hair products data
import { getProductById } from '../data/hairproducts';

const HairProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/hairproducts')}
            className="px-6 py-3 bg-[#E8D5C4] text-gray-800 font-semibold rounded-xl hover:bg-[#D4C4B0] transition-all duration-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Product Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 flex items-center justify-center"
              >
                <div className="relative max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative w-full h-auto object-contain"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/500x500?text=Product+Image';
                    }}
                  />
                </div>
              </motion.div>

              {/* Right - Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8"
              >
                <div className="inline-block px-4 py-1.5 bg-[#FFE8D6] rounded-full mb-4">
                  <p className="text-sm font-semibold text-[#C2734A]">
                    {product.subtitle}
                  </p>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {product.shortDescription}
                </p>
                
                

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href="tel:+918451088204"
                    className="flex-1 px-8 py-4 bg-[#E8D5C4] text-gray-800 font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#D4C4B0] transition-all duration-300 text-center"
                  >
                    Call to Order
                  </a>
                  <a
                    href="mailto:info@dermashatech.com"
                    className="flex-1 px-8 py-4 bg-[#FFF5EB] text-gray-800 font-semibold rounded-xl border-2 border-[#E8D5C4] hover:bg-[#FFE8D6] transition-all duration-300 text-center"
                  >
                    Email Inquiry
                  </a>
                </div>

                {/* Suitable For Tag */}
                {product.suitableFor && (
                  <div className="bg-gradient-to-r from-[#FFF5EB] to-[#FFE8D6] rounded-xl p-4 border border-[#E8D5C4]">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Suitable For:</p>
                    <p className="text-base text-gray-900 font-medium">{product.suitableFor}</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Benefits Card */}
            {product.keyBenefits && product.keyBenefits.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Key Benefits</h2>
                </div>
                <div className="space-y-3">
                  {product.keyBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-[#FFF8F0] hover:bg-[#FFF5EB] rounded-xl transition-colors"
                    >
                      <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                      <span className="text-gray-800 font-medium pt-1">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Key Ingredient Card */}
            {product.keyIngredient && product.keyIngredient.name && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Key Ingredient</h2>
                </div>
                <h3 className="text-xl font-bold text-[#C2734A] mb-3">
                  {product.keyIngredient.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.keyIngredient.description}
                </p>
              </motion.div>
            )}

            {/* Texture & Absorption Card */}
            {product.texture && product.texture.features && product.texture.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{product.texture.title}</h2>
                </div>
                <div className="space-y-3">
                  {product.texture.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* How to Use Card */}
            {product.howToUse && product.howToUse.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use</h2>
                <ol className="space-y-4">
                  {product.howToUse.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-200 to-orange-200 text-gray-800 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Explore More Products */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore More Products
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Discover our complete range of premium hair care solutions
            </p>
            <button
              onClick={() => navigate('/hairproducts')}
              className="px-8 py-4 bg-[#C2734A] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#A6603B] transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HairProductDetails;