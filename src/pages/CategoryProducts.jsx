import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';

// Import data
import { categories, getProductsByCategory } from '../data/categories';
import { products } from '../data/products';

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    // Scroll to top immediately when component loads or category changes
    window.scrollTo(0, 0);

    // Find the category
    const foundCategory = categories.find(cat => cat.id === categoryId);
    setCategory(foundCategory);

    // Get products for this category
    if (foundCategory) {
      const filteredProducts = getProductsByCategory(categoryId, products);
      setCategoryProducts(filteredProducts);
    }
  }, [categoryId]);

  const handleLearnMore = (productId) => {
  navigate(`/product/${productId}`, {
    state: { categoryId }
  });
};


  const handleBackToCategories = () => {
    navigate('/machines');
  };

  if (!category) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-light text-gray-600 mb-2">Category not found</h3>
          <button
            onClick={handleBackToCategories}
            className="mt-4 px-6 py-2 bg-[#1ba9a0] text-white rounded-lg hover:bg-[#16958d] transition-colors"
          >
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section with Category Info */}
      <section className={`py-16 bg-gradient-to-br ${category.gradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackToCategories}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Categories</span>
          </motion.button>

          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-2xl mx-auto mb-2"
            >
              {category.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600"
            >
              {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} available
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">This category doesn't have any products yet</p>
            </div>
          ) : (
            <div className="space-y-0">
              {categoryProducts.map((product, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className={`grid md:grid-cols-2 gap-0 min-h-[600px] ${isEven ? '' : 'md:grid-flow-dense'}`}>
                      
                      {/* Image Side */}
                      <div 
                        className={`relative flex flex-col items-center justify-center p-16 ${
                          isEven 
                            ? 'bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50' 
                            : 'bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100 md:col-start-2'
                        }`}
                      >
                        {/* Product Heading */}
                        {/* <motion.h2
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center"
                        >
                          {product.imageHeading || product.name}
                        </motion.h2> */}
                        
                        {/* Product Image */}
                        <motion.img
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          src={product.mainImage}
                          alt={product.name}
                          className="w-full max-w-md h-96 object-contain drop-shadow-2xl"
                        />
                      </div>

                      {/* Content Side */}
                      <div 
                        className={`flex items-center justify-center p-12 md:p-16 bg-white ${
                          !isEven ? 'md:col-start-1 md:row-start-1' : ''
                        }`}
                      >
                        <div className="max-w-lg space-y-6">
                          <motion.div
                            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-3 leading-tight">
                              {product.name.split(' ')[0]} <span className="font-normal">{product.name.split(' ').slice(1).join(' ')}</span>
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                              {product.title}
                            </p>
                          </motion.div>

                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-gray-700 leading-relaxed"
                          >
                            {product.tagline}
                          </motion.p>

                          {/* Key Points */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="space-y-2"
                          >
                            {product.keyPoints.slice(0, 3).map((point, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-1 h-1 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></div>
                                <p className="text-gray-700 text-sm">{point}</p>
                              </div>
                            ))}
                          </motion.div>

                          {/* Buttons */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center space-x-4 pt-4"
                          >
                            <button
                              onClick={() => handleLearnMore(product.id)}
                              className="px-6 py-3 bg-[#1ba9a0] text-white text-sm font-medium rounded-md hover:bg-[#16958d] transition-colors cursor-pointer"
                            >
                              Learn more
                            </button>
                            <button 
                              onClick={() => handleLearnMore(product.id)}
                              className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              →
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
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
              Ready to Upgrade Your Practice?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us for detailed product information, pricing, and expert consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="tel:+918451088204"
                className="px-8 py-4 bg-[#1ba9a0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#16958d] transition-all duration-300 inline-block"
              >
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

export default CategoryProducts;