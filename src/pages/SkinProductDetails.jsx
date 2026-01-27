import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Sparkles, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

// Import skin products data
import { getProductById } from '../data/skinproducts';

const SkinProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/skinproducts')}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/skinproducts')}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Products</span>
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-50 to-purple-50 p-8">
                  {product.featured && (
                    <div className="absolute top-6 right-6 z-10">
                      
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain rounded-xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x600?text=Product+Image';
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <p className="text-pink-600 font-semibold text-lg mb-2">
                  {product.subtitle}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {product.shortDescription}
                </p>
                <p className="text-lg text-gray-600 mt-3">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                  Key Benefits
                </h2>
                <div className="space-y-3">
                  {product.keyBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl"
                    >
                      <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                      <span className="text-gray-800 font-medium">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Ingredient */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-blue-500" />
                  Key Ingredient
                </h2>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.keyIngredient.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.keyIngredient.description}
                </p>
              </div>

              {/* Texture & Absorption */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.texture.title}
                </h2>
                <div className="space-y-2">
                  {product.texture.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Use */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How to Use
                </h2>
                <ol className="space-y-3">
                  {product.howToUse.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Suitable For */}
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-pink-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Suitable For
                </h2>
                <p className="text-lg text-gray-800 font-medium">
                  {product.suitableFor}
                </p>
              </div>

              {/* CTA Buttons - Pink Gradient */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+918451088204"
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-center"
                >
                  Call to Order
                </a>
                <a
                  href="mailto:info@dermashatech.com"
                  className="flex-1 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300 text-center"
                >
                  Email Inquiry
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore More Products
          </h2>
          <p className="text-gray-600 mb-8">
            Discover our complete range of premium skincare solutions
          </p>
          <button
            onClick={() => navigate('/skinproducts')}
            className="px-8 py-4 bg-[#1ba9a0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#16958d] transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SkinProductDetails;