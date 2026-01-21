export const categories = [
  {
    id: 'pico-ndyag',
    name: 'Pico Nd:YAG',
    description: 'Advanced picosecond laser technology for tattoo removal and pigmentation',
    image: '/images/1.png',
    productIds: [1, 2, 19], // ULTRA Q, GENELUX-3, PICO SECOND Q-SWITCH
    gradient: 'from-purple-100 via-pink-50 to-purple-50'
  },
  {
    id: 'diode',
    name: 'Diode Laser',
    description: 'Professional hair removal systems for all skin types',
    image: '/images/3.png',
    productIds: [3, 20, 21], // DIODE HAIR REMOVAL products
    gradient: 'from-blue-100 via-cyan-50 to-blue-50'
  },
  {
    id: 'co2-laser',
    name: 'CO2 Laser',
    description: 'Fractional CO2 technology for skin resurfacing',
    image: '/images/5.png',
    productIds: [5, 6], // ULTRAFRAX CO2 products
    gradient: 'from-emerald-100 via-teal-50 to-emerald-50'
  },
  {
    id: 'hydrafacial',
    name: 'Hydrafacial',
    description: 'Deep cleansing and hydration systems',
    image: '/images/6.png',
    productIds: [7, 8, 18], // OXYGEN JET PEEL, ALLICE BUBBLE, 9-IN-1
    gradient: 'from-sky-100 via-blue-50 to-sky-50'
  },
  {
    id: 'mnrf',
    name: 'MNRF',
    description: 'Microneedling RF for anti-aging and skin rejuvenation',
    image: '/images/33.png',
    productIds: [9, 10], // 2 IN 1 ADVANCED ANTI-AGING RF, PRO MNRF
    gradient: 'from-violet-100 via-purple-50 to-violet-50'
  },
  {
    id: 'cryotherapy',
    name: 'Cryotherapy',
    description: 'Fat freezing and body contouring solutions',
    image: '/images/35.png',
    productIds: [11], // ULTRAFRAX PRO CO2, 360 CRYO SLIMMING
    gradient: 'from-indigo-100 via-blue-50 to-indigo-50'
  },
  {
    id: 'energy-based',
    name: 'Energy Based Devices',
    description: 'HIFU and RF technologies for lifting and tightening',
    image: '/images/4.png',
    productIds: [4], // MEDI LIFT HIFU, EMSLIM NEO RF, EM SCULPT
    gradient: 'from-rose-100 via-pink-50 to-rose-50'
  },
  {
    id: 'cautery',
    name: 'Cautery',
    description: 'Precision RF cautery for surgical procedures',
    image: '/images/41.png',
    productIds: [17], // RADIO FREQUENCY CAUTERY
    gradient: 'from-amber-100 via-yellow-50 to-amber-50'
  },
  {
    id: 'hair-regrowth',
    name: 'Hair Regrowth',
    description: 'Laser therapy systems for hair restoration',
    image: '/images/36.png',
    productIds: [12], // 650NM HAIR REGROWTH PANEL
    gradient: 'from-lime-100 via-green-50 to-lime-50'
  },
  {
    id: 'skin-analyser',
    name: 'Skin Analyser',
    description: 'AI-powered skin diagnostic systems',
    image: '/images/37.png',
    productIds: [13, 14], // A5 PLUS, A3 AI SKIN ANALYSER
    gradient: 'from-fuchsia-100 via-purple-50 to-fuchsia-50'
  },
  {
    id: 'body-toning',
    name: 'Body Toning',
    description: 'EMS technology for muscle building and fat reduction',
    image: '/images/40.png',
    productIds: [15, 16], // EMSLIM NEO RF, EM SCULPT
    gradient: 'from-orange-100 via-amber-50 to-orange-50'
  }
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId, allProducts) => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  return allProducts.filter(product => 
    category.productIds.includes(product.id)
  );
};