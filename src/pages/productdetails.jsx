import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Phone, Mail } from 'lucide-react';

// Data
import { productDetailsData } from '../data/productDetails';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the category from location state (if coming from category page)
  const categoryId = location.state?.categoryId;
  
  // Find product by ID from URL parameter
  const product = productDetailsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  
  const handleBackClick = () => {
    if (categoryId) {
      // If we have a categoryId, go back to that category's products page
      navigate(`/category/${categoryId}`);
    } else {
      // Otherwise, go back to machines (categories) page
      navigate('/machines');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Hero Section with Product Image */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            whileHover={{ x: -3 }}
            onClick={handleBackClick} 
            className="inline-flex items-center gap-2 px-0 py-2 mb-8
                      text-gray-700 dark:text-gray-300 
                      hover:text-black dark:hover:text-white
                      transition-all text-sm font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{categoryId ? 'Back to Products' : 'Back to Categories'}</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={product.mainImage}
              alt={product.name}
              className="w-full max-w-2xl h-[500px] object-contain mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-4">
              {product.name.split(' ')[0]} <span className="font-normal">{product.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">{product.title}</p>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 text-center">
              Key Features
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-6 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              >
                <Check className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section - Flipkart Style */}
      <section className="py-16 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 text-center">
              Technical Specifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-dark-900 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto"
          >
            <div className="divide-y divide-gray-200 dark:divide-dark-700">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid grid-cols-3 hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors"
                >
                  <div className="col-span-1 px-6 py-4 bg-gray-50 dark:bg-dark-800">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{key}</p>
                  </div>
                  <div className="col-span-2 px-6 py-4">
                    <p className="text-sm text-gray-900 dark:text-gray-100">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 text-center">
              Applications & Uses
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {product.applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                <p className="text-gray-800 dark:text-gray-200">{application}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      {product.hasResults && product.resultImages && product.resultImages.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 text-center">
                {product.resultsHeading}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {product.resultImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-dark-800">
                    <img
                      src={image}
                      alt={`Result ${index + 1}`}
                      className="w-full h-56 object-contain p-2 transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8 italic"
            >
              *Results may vary based on individual conditions and treatment protocols
            </motion.p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Interested in {product.name}?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Contact us for pricing, demonstrations, and expert consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+918451088204"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#1ba9a0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#16958d] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call: +91 84510 88204</span>
              </a>
              <a
                href="mailto:info@dermashatech.com"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white dark:bg-dark-800 text-purple-500 dark:text-purple-400 font-semibold rounded-xl border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-dark-700 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;