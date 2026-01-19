import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Headphones, MapPin, TrendingUp, Users, Zap, Check, Heart, Target, Lightbulb } from 'lucide-react';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Excellence',
      description: 'FDA & CE certified machines meeting the highest international standards of safety and performance'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'Constantly updating our technology to stay ahead in the ever-evolving aesthetic industry'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Client Partnership',
      description: 'Building long-term relationships by growing alongside our clients and their success'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Reliability & Durability',
      description: 'Delivering high-quality, reliable machines built to withstand years of professional use'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'International Certifications',
      description: 'All our machines are FDA, CE, and internationally certified for safety and quality assurance'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Latest Technology',
      description: 'Constantly updated product line ensuring you have access to the most advanced aesthetic solutions'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Pan-India Presence',
      description: 'Based in Mumbai with strong service network delivering quick support across India'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Complete Peace of Mind',
      description: 'Comprehensive warranty coverage with dedicated post-sale service and maintenance support'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Efficient technical assistance and maintenance wherever you are, whenever you need'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Wide Product Range',
      description: 'Extensive selection of laser aesthetic machines for every dermatology and aesthetic need'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Product Range" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "100%", label: "Certified Equipment" },
    { icon: <MapPin className="w-6 h-6" />, number: "Pan India", label: "Service Network" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
<section
  className="relative py-20 bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/images/products-hero.jpg')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Animated Background Text */}
  <div className="absolute inset-0 flex items-center justify-start overflow-hidden opacity-10">
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="whitespace-nowrap text-9xl font-bold text-white"
    >
      DERMASHATECH • INNOVATION • QUALITY • EXCELLENCE • 
    </motion.div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
      {/* LEFT SIDE – LOGOS WITH ANIMATION */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center lg:justify-start gap-6"
      >
        <div className="flex items-center justify-center lg:justify-start gap-8 mt-2">

          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            src="/images/24.png"
            alt="CE Certified"
            className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            src="/images/25.png"
            alt="FDA Approved"
            className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Animated Certification Badge */}
        
      </motion.div>

      {/* RIGHT SIDE – TEXT */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center lg:text-left"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          About{" "}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent"
          >
            Us
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-xl text-gray-200 max-w-2xl mb-6 leading-relaxed"
        >
          Your Trusted Partner in Advanced Aesthetic Technology
        </motion.p>

        {/* Animated Stats Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-3 justify-center lg:justify-start"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <span className="text-white text-sm font-semibold">15+ Years Experience</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <span className="text-white text-sm font-semibold">500+ Happy Clients</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <span className="text-white text-sm font-semibold">Pan India Service</span>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>

      {/* Who We Are Section - With Image on Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-2">Who We Are</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Empowering Beauty Through Innovation
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  At <span className="font-semibold bg-[#1ba9a0] bg-clip-text text-transparent">DERMASHATECH</span>, we are committed to delivering high-quality, reliable, and durable laser machines for the dermatology and aesthetic industry.
                </p>
                
                <p className="text-lg">
                  Our technology is constantly updated to stay ahead in this ever-evolving field, ensuring that you always have access to the most advanced solutions. All our machines are <span className="font-semibold text-purple-600">FDA, CE, and internationally certified</span>, meeting the highest standards of safety, quality, and durability.
                </p>
                
                <p className="text-lg">
                  Based in <span className="font-semibold text-purple-600">Mumbai</span>, we proudly deliver across India, with a strong service network that ensures quick and efficient support wherever you are. We offer a wide range of laser aesthetic machines and believe in building long-term relationships by growing alongside our clients.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 mt-6">
                  <p className="text-base font-medium text-gray-800 leading-relaxed">
                    <span className="text-purple-600 font-bold">Our Commitment:</span> Post-sale service, maintenance support, and warranty coverage designed to give you complete peace of mind. With DERMASHATECH, you're partnering with a team that values your success. Together, we can help create the beauty you envision.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">FDA & CE Certified</h4>
                    <p className="text-sm text-gray-600">International standards</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Mumbai Based</h4>
                    <p className="text-sm text-gray-600">Pan-India delivery</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Latest Technology</h4>
                    <p className="text-sm text-gray-600">Constantly updated</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Full Support</h4>
                    <p className="text-sm text-gray-600">Warranty & service</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative space-y-6"
>

  {/* TOP FULL IMAGE (26.png) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100"
              >
                <img
                  src="/images/26.jpg"
                  alt="DERMASHATECH Technology"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Main Image Grid */}
              <div className="grid grid-cols-2 gap-4">

                
                {/* Left Column - about.png */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-100">
                    <img 
                      src="/images/about.png" 
                      alt="DERMASHATECH - Advanced Aesthetic Technology"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.log('Image failed to load:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Small decorative badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6" />
                      <div>
                        <p className="font-bold text-sm">FDA & CE</p>
                        <p className="text-xs text-purple-100">Certified</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Column - about1.png */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-4 pt-8"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-100">
                    <img 
                      src="/images/about1.png" 
                      alt="DERMASHATECH - Professional Equipment"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.log('Image failed to load:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Stats badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-white rounded-xl p-4 shadow-lg border border-purple-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-purple-600 text-sm">500+</p>
                        <p className="text-xs text-gray-600">Happy Clients</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Years Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                className="absolute -top-6 -right-6 bg-[#1ba9a0] text-white rounded-2xl p-6 shadow-2xl z-10"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-xs text-purple-100">Years Expertise</div>
                </div>
              </motion.div>

              {/* Decorative floating element */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Pan India</p>
                    <p className="text-xs text-gray-600">Service</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-2">Our Foundation</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at DERMASHATECH
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#1ba9a0] to-pink-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-purple-600 font-semibold mb-2">Why Partner With Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              The DERMASHATECH Advantage
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive support and cutting-edge technology to help your practice thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-white text-purple-600 border-2 border-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 text-lg">
              Trusted by professionals across India
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md text-purple-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-[#1ba9a0] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1ba9a0] to-pink-600 text-white mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To empower dermatologists and aesthetic practitioners across India with world-class technology, exceptional support, and innovative solutions that help them deliver outstanding results to their patients.
            </p>
            <div className="pt-6">
              <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border border-purple-100">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">Innovation • Quality • Partnership</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Elevate Your Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with DERMASHATECH and experience the difference that quality equipment and exceptional support can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 bg-[#1ba9a0] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/products'}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                View Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;