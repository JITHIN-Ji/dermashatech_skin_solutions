import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Machines from './pages/Machines'; 
import CategoryProducts from './pages/CategoryProducts'; 
import ProductDetails from './pages/productdetails';
import Contact from './pages/Contact';
import Reviews from './pages/reviews';
import SkinProducts from './pages/skinproducts';
import SkinProductDetails from './pages/SkinProductDetails';
import HairProducts from './pages/hairproducts';
import HairProductDetails from './pages/hairproductdetails';
import Microneedling from './pages/microneedling';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-200">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Home />
              </motion.div>
            } />
            
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <About />
              </motion.div>
            } />
            
            {/* Machines Route - Shows all categories */}
            <Route path="/machines" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Machines />
              </motion.div>
            } />

            {/* Category Products Route - Shows products in a category */}
            <Route path="/category/:categoryId" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CategoryProducts />
              </motion.div>
            } />

            {/* Product Details Route */}
            <Route path="/product/:id" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductDetails />
              </motion.div>
            } />

            {/* Skin Products Routes */}
            <Route path="/skinproducts" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <SkinProducts />
              </motion.div>
            } />

            {/* Backwards-compatible alias for "Products" links */}
            <Route path="/products" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <SkinProducts />
              </motion.div>
            } />

            {/* Skin Product Details Route */}
            <Route path="/skinproduct/:id" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <SkinProductDetails />
              </motion.div>
            } />

            {/* Hair Products Routes */}
            <Route path="/hairproducts" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <HairProducts />
              </motion.div>
            } />

            {/* Hair Product Details Route */}
            <Route path="/hairproduct/:id" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <HairProductDetails />
              </motion.div>
            } />

            {/* Microneedling Devices */}
            <Route path="/microneedling" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Microneedling />
              </motion.div>
            } />

            {/* detail page removed per request */}

            <Route path="/reviews" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Reviews />
              </motion.div>
            } />
           
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Contact />
              </motion.div>
            } />
            
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;