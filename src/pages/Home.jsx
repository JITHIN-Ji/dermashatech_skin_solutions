import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Shield, Headphones, MapPin, Phone, Mail, Check, Zap, Users, TrendingUp } from 'lucide-react';

// Components
import HeroSection from '../components/HeroSection';

// Data
import { featuredProducts } from '../data/products';

// ProductCard Component
const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* NEW Badge */}
      <div className="absolute top-4 right-4 z-10 bg-[#1ba9a0] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        NEW
      </div>

      {/* Image Container - WHITE BACKGROUND & 4:3 ASPECT RATIO */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content - Title Only */}
      <div className="p-6">
        <h3 className="font-bold text-gray-900 text-lg text-center group-hover:text-purple-600 transition-colors">{product.title}</h3>
      </div>
    </motion.div>
  );
};

const Home = () => {
  // Why Choose Us features
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "FDA & CE Certified",
      description: "All machines meet highest international safety and quality standards"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Warranty & Support",
      description: "Comprehensive warranty coverage with dedicated maintenance support"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Expert Service Network",
      description: "Quick and efficient support across India whenever you need us"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Mumbai Based",
      description: "Proudly delivering advanced technology across India from Mumbai"
    }
  ];

  // Company Stats
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Product Range" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "100%", label: "Certified Equipment" },
    { icon: <Zap className="w-6 h-6" />, number: "24/7", label: "Support Available" }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Dr. Shashank Kharabanda",
      clinic: "Chairman AngelLife Group & CEO AngelLife Cosmetology & Wellness",
      text: "We have been purchasing equipment from Mr. Naushad Khan for our multiple centers regularly. His professionalism and friendly approach make every interaction smooth. Not only does he provide high-quality equipment, but the after-sales service and technical support are equally excellent."
    },
    {
      name: "Dr. Dhruv Gadhvi",
      clinic: "SKNIQUE - Skin, Hair & Aesthetic Clinic, Rajkot",
      text: "I am extremely satisfied with both the machine quality and after-sales service from Dermashatech. The results have been consistent and reliable. Mr. Nawsad has been very supportive throughout the process - professional, trustworthy, and ensures every concern is addressed promptly."
    },
    {
      name: "Dr. Nadeer Ahmed",
      clinic: "Aesthetic Practitioner",
      text: "Dermashatech's cosmetic machines deliver exceptional performance and versatility. With intuitive controls and customizable settings, results are noticeable within just a few sessions. The advanced cooling system and safety features make it a truly all-in-one solution."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Product Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <div className="w-16 h-16 bg-[#1ba9a0] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">D</span>
                </div>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advanced Aesthetic Technology
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <span className="font-semibold bg-[#1ba9a0] bg-clip-text text-transparent">DERMASHATECH</span> offers a comprehensive range of laser aesthetic machines designed for modern dermatology and cosmetic clinics.
                </p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Laser Hair Removal Systems</h3>
                      <p className="text-sm text-gray-600">Diode lasers with multiple wavelengths (755nm, 808nm, 940nm, 1064nm) for all skin types</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Skin Rejuvenation Solutions</h3>
                      <p className="text-sm text-gray-600">CO2 fractional lasers, Nd:YAG lasers, and picosecond technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Body Contouring Equipment</h3>
                      <p className="text-sm text-gray-600">HIFU machines, cryolipolysis systems, and RF microneedling devices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Diagnostic Tools</h3>
                      <p className="text-sm text-gray-600">AI skin analyzers with 15-17 testing indicators for comprehensive analysis</p>
                    </div>
                  </div>
                </div>

                <p className="text-base mt-6 font-medium text-#1ba9a0">
                  All equipment is FDA & CE certified with comprehensive warranty and support
                </p>
              </div>

              {/* Company Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-purple-600">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Product Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image - Top Left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img
                    src="/images/22.jpg"
                    alt="Laser Equipment"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-semibold">Q-Switch Laser Systems</p>
                  </div>
                </motion.div>

                {/* Small Image - Bottom Left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                    alt="Diode Laser"
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                    <p className="text-white text-sm font-semibold">Diode Hair Removal</p>
                  </div>
                </motion.div>

                {/* Small Image - Bottom Right */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80"
                    alt="HIFU Machine"
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                    <p className="text-white text-sm font-semibold">HIFU Technology</p>
                  </div>
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-4 -right-4 bg-[#1ba9a0] text-white rounded-full p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs">Products</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose DERMASHATECH?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer comprehensive post-sale service, maintenance support, and warranty coverage designed to give you complete peace of mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-white text-black border border-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Featured Products
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Wide range of laser aesthetic machines with advanced technology for dermatology and aesthetic treatments
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#1ba9a0] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto inline-flex"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </motion.a>

          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Doctors Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by leading dermatologists and aesthetic practitioners across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="flex text-purple-600 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.clinic}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-100 via-pink-10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Ready to Upgrade Your Clinic?
            </h2>

            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Partner with a team that values your success. Together, we can help create the beauty you envision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.a
                href="tel:+918451088204"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-[#1ba9a0] text-white font-semibold py-4 px-8 rounded-xl hover:bg-purple-700 transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+91 84510 88204</span>
              </motion.a>

              <motion.a
                href="mailto:info@dermashatech.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-purple-500 text-purple-600 font-semibold py-4 px-8 rounded-xl hover:bg-purple-50 transition"
              >
                <Mail className="w-5 h-5" />
                <span>Get a Quote</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;