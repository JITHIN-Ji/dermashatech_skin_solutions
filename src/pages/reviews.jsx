import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews } from '../data/reviews';

const Reviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <div className="pt-16 min-h-screen bg-white">
      
      

      {/* Reviews Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real feedback from satisfied customers
            </p>
          </motion.div>

          {/* Grid Layout for Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {(showAllReviews ? reviews : reviews.slice(0, 9)).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col h-full"
              >
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Category Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 font-semibold rounded-full text-xs mb-2">
                    {review.category}
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full text-xs">
                    {review.product}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  "{review.review}"
                </p>

                {/* Customer Name */}
                <p className="font-bold text-gray-900 text-center text-lg">
                  - {review.customerName}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {!showAllReviews && reviews.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <button
                onClick={() => setShowAllReviews(true)}
                className="px-8 py-3 bg-[#1ba9a0] text-white font-semibold rounded-lg hover:bg-[#16958d] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Load More Reviews
              </button>
            </motion.div>
          )}

          {/* Show Less Button */}
          {showAllReviews && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <button
                onClick={() => setShowAllReviews(false)}
                className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Show Less
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-purple-50 rounded-2xl border border-purple-100"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-pink-50 rounded-2xl border border-pink-100"
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Premium Products</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-purple-50 rounded-2xl border border-purple-100"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">5★</div>
              <div className="text-gray-700 font-medium">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-xl text-gray-700">
              Contact us today to learn more about our products
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
                href="/contact"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300 inline-block"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;