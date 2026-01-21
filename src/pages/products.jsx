// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { Search, X } from 'lucide-react';

// // Data
// import { products } from '../data/products';

// const PortfolioProducts = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product.tagline.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleLearnMore = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   return (
//     <div className="pt-16 min-h-screen bg-white">
//       {/* Products Section with Search and Logos */}
//       <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Top Bar - Search and Logos */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
//             {/* Search Bar */}
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="w-full md:w-auto md:flex-1 max-w-md"
//             >
//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
//                 <div className="relative flex items-center bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
//                   <div className="pl-4 pr-2 py-3">
//                     <Search className="w-5 h-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Search products..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="flex-1 py-3 pr-4 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-base"
//                   />
//                   {searchQuery && (
//                     <button
//                       onClick={() => setSearchQuery('')}
//                       className="pr-4 text-gray-400 hover:text-gray-600 transition-colors"
//                     >
//                       <X className="w-5 h-5" />
//                     </button>
//                   )}
//                 </div>
//               </div>
//               {searchQuery && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="mt-2 text-gray-600 text-sm pl-1"
//                 >
//                   Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
//                 </motion.p>
//               )}
//             </motion.div>
//           </div>

//           {/* Products Grid */}
//           <div className="space-y-0">
//             {filteredProducts.length === 0 ? (
//               <div className="text-center py-20">
//                 <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                 <h3 className="text-2xl font-light text-gray-600 mb-2">No products found</h3>
//                 <p className="text-gray-500">Try adjusting your search query</p>
//               </div>
//             ) : (
//               filteredProducts.map((product, index) => {
//                 const isEven = index % 2 === 0;
                
//                 return (
//                   <motion.div
//                     key={product.id}
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-50px" }}
//                     transition={{ duration: 0.8 }}
//                     className="relative"
//                   >
//                     <div className={`grid md:grid-cols-2 gap-0 min-h-[600px] ${isEven ? '' : 'md:grid-flow-dense'}`}>
                      
//                       {/* Image Side */}
//                       <div 
//                         className={`relative flex flex-col items-center justify-center p-16 ${
//                           isEven 
//                             ? 'bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50' 
//                             : 'bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100 md:col-start-2'
//                         }`}
//                       >
//                         {/* Product Heading */}
//                         <motion.h2
//                           initial={{ opacity: 0, y: -20 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.5, delay: 0.1 }}
//                           className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center"
//                         >
//                           {product.imageHeading || product.name}
//                         </motion.h2>
                        
//                         {/* Product Image */}
//                         <motion.img
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.6, delay: 0.2 }}
//                           src={product.mainImage}
//                           alt={product.name}
//                           className="w-full max-w-md h-96 object-contain drop-shadow-2xl"
//                         />
//                       </div>

//                       {/* Content Side */}
//                       <div 
//                         className={`flex items-center justify-center p-12 md:p-16 bg-white ${
//                           !isEven ? 'md:col-start-1 md:row-start-1' : ''
//                         }`}
//                       >
//                         <div className="max-w-lg space-y-6">
//                           <motion.div
//                             initial={{ opacity: 0, x: isEven ? -30 : 30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6, delay: 0.3 }}
//                           >
//                             <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-3 leading-tight">
//                               {product.name.split(' ')[0]} <span className="font-normal">{product.name.split(' ').slice(1).join(' ')}</span>
//                             </h3>
//                             <p className="text-lg text-gray-600 mb-6">
//                               {product.title}
//                             </p>
//                           </motion.div>

//                           <motion.p
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6, delay: 0.4 }}
//                             className="text-gray-700 leading-relaxed"
//                           >
//                             {product.tagline}
//                           </motion.p>

//                           {/* Key Points */}
//                           <motion.div
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6, delay: 0.5 }}
//                             className="space-y-2"
//                           >
//                             {product.keyPoints.slice(0, 3).map((point, idx) => (
//                               <div key={idx} className="flex items-start space-x-3">
//                                 <div className="w-1 h-1 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></div>
//                                 <p className="text-gray-700 text-sm">{point}</p>
//                               </div>
//                             ))}
//                           </motion.div>

//                           {/* Buttons */}
//                           <motion.div
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6, delay: 0.6 }}
//                             className="flex items-center space-x-4 pt-4"
//                           >
//                             <button
//                               onClick={() => handleLearnMore(product.id)}
//                               className="px-6 py-3 bg-[#1ba9a0] text-white text-sm font-medium rounded-md hover:bg-[#16958d] transition-colors cursor-pointer"
//                             >
//                               Learn more
//                             </button>
//                             <button 
//                               onClick={() => handleLearnMore(product.id)}
//                               className="text-gray-600 hover:text-gray-900 transition-colors"
//                             >
//                               →
//                             </button>
//                           </motion.div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Ready to Upgrade Your Practice?
//             </h2>
//             <p className="text-xl text-gray-600">
//               Contact us for detailed product information, pricing, and expert consultation
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              
//                  <a href="tel:+918451088204"
//                 className="px-8 py-4 bg-[#1ba9a0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#16958d] transition-all duration-300 inline-block"
//               >
//                 Call: +91 84510 88204
//               </a>
              
//                 <a href="mailto:info@dermashatech.com"
//                 className="px-8 py-4 bg-white text-purple-500 font-semibold rounded-xl border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300 inline-block"
//               >
//                 Email Us
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PortfolioProducts;