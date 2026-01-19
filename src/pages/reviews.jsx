import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Reviews = () => {
  // Reviews data
  const reviews = [
    {
      id: 1,
      customerName: "Priya",
      product: "ULTRA Q",
      rating: 5,
      review: "The ULTRA Q has transformed our clinic's capabilities. The results on pigmentation and tattoo removal are outstanding. Clients are extremely satisfied with the machine's reliability."
    },
    {
      id: 2,
      customerName: "Rajesh",
      product: "GENELUX-3",
      rating: 5,
      review: "GENELUX-3 is a game-changer for hair removal treatments. The quad wavelength technology works perfectly on all skin types. Patient satisfaction has increased significantly."
    },
    {
      id: 3,
      customerName: "Anjali",
      product: "MEDI LIFT HIFU",
      rating: 5,
      review: "The HIFU machine delivers incredible non-surgical facelift results. Clients love the natural-looking lifting effect. The technology is advanced yet easy to operate."
    },
    {
      id: 4,
      customerName: "Vikram",
      product: "ULTRAFRAX CO2",
      rating: 5,
      review: "Exceptional results on acne scars and skin resurfacing. The fractional CO2 laser is precise and effective. Patients see visible improvements after just 2-3 sessions."
    },
    {
      id: 5,
      customerName: "Meera",
      product: "DIODE HAIR REMOVAL",
      rating: 5,
      review: "This diode laser system is incredibly efficient. The combination of laser and picosecond technology provides comprehensive treatment options. Very satisfied with the results."
    },
    {
      id: 6,
      customerName: "Sanjay",
      product: "HYDRA FACIAL",
      rating: 5,
      review: "The multi-functional capabilities of this hydrafacial machine are impressive. Deep cleansing, exfoliation, and hydration all in one. Clients love the immediate glow."
    },
    {
      id: 7,
      customerName: "Kavita",
      product: "ULTRA Q",
      rating: 5,
      review: "Amazing machine for pigmentation treatment! The wavelengths work wonders. Minimal downtime for patients and remarkable results. Training support was very helpful."
    },
    {
      id: 8,
      customerName: "Arjun",
      product: "GENELUX-3",
      rating: 5,
      review: "The multiple wavelengths make this perfect for all skin tones. Fast treatments, comfortable for patients, and long-lasting results. Clients are booking repeat sessions."
    },
    {
      id: 9,
      customerName: "Neha",
      product: "MEDI LIFT HIFU",
      rating: 5,
      review: "Outstanding results for facial lifting and skin tightening. No surgery, no downtime, and clients see visible improvements immediately. This has become our most popular treatment."
    },
    {
      id: 10,
      customerName: "Suresh",
      product: "ULTRAFRAX CO2",
      rating: 5,
      review: "Best CO2 laser for skin resurfacing. Treats everything from acne scars to wrinkles effectively. The precision and control are excellent. Highly satisfied with this purchase."
    },
    {
      id: 11,
      customerName: "Deepa",
      product: "DIODE HAIR REMOVAL",
      rating: 5,
      review: "Excellent machine for permanent hair reduction. Works beautifully on all areas. Clients are thrilled with the painless treatment and quick results."
    },
    {
      id: 12,
      customerName: "Anil",
      product: "HYDRA FACIAL",
      rating: 5,
      review: "This hydrafacial system is a must-have for any aesthetic clinic. Clients see instant results and keep coming back. The multiple functions make it very versatile."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      
      

      {/* Reviews Animation Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Continuous Scrolling Reviews Container */}
          <div className="relative h-[500px] overflow-hidden">
            <div className="absolute inset-0">
              {/* First set of reviews */}
              <motion.div
                animate={{
                  y: [0, -2400] // Move up by total height of all reviews
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="space-y-6"
              >
                {reviews.map((review) => (
                  <div
                    key={`first-${review.id}`}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mx-4"
                  >
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Product Name */}
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 font-semibold rounded-full text-sm">
                        {review.product}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-base leading-relaxed text-center mb-6">
                      "{review.review}"
                    </p>

                    {/* Customer Name */}
                    <p className="font-bold text-gray-900 text-center text-lg">
                      - {review.customerName}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Duplicate set for seamless loop */}
              <motion.div
                animate={{
                  y: [0, -2400]
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="space-y-6"
                style={{ position: 'absolute', top: '2400px' }}
              >
                {reviews.map((review) => (
                  <div
                    key={`second-${review.id}`}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mx-4"
                  >
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Product Name */}
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 font-semibold rounded-full text-sm">
                        {review.product}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-base leading-relaxed text-center mb-6">
                      "{review.review}"
                    </p>

                    {/* Customer Name */}
                    <p className="font-bold text-gray-900 text-center text-lg">
                      - {review.customerName}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient Overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
          </div>
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