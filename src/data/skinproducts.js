// Skin Products Data
export const skinProducts = [
  {
    id: 'salmon-dna-essence',
    name: 'Salmon DNA Sodium Essence',
    subtitle: 'Water Light Kinetic Essence',
    image: '/images/product1.png', // Update with your actual image path
    shortDescription: 'A lightweight, fast-absorbing essence enriched with Salmon DNA Sodium (PDRN-inspired) to support skin hydration, repair, and revitalization.',
    fullDescription: 'Designed to improve skin texture, radiance, and overall skin health with regular use.',
    keyBenefits: [
      {
        icon: '💧',
        text: 'Deep hydration with a water-light texture'
      },
      {
        icon: '✨',
        text: 'Helps improve skin glow and smoothness'
      },
      {
        icon: '🔄',
        text: 'Supports skin repair and renewal'
      },
      {
        icon: '🧴',
        text: 'Enhances skin elasticity and firmness'
      },
      {
        icon: '🌿',
        text: 'Suitable for dull, dry, and tired-looking skin'
      }
    ],
    keyIngredient: {
      name: 'Salmon DNA Sodium',
      description: 'Known for its skin-revitalizing and regenerative support properties, helping maintain healthier-looking skin and improve overall texture.'
    },
    texture: {
      title: 'Texture & Absorption',
      features: [
        'Ultra-light, non-greasy essence',
        'Absorbs quickly without residue',
        'Suitable for layering under serums or moisturizers'
      ]
    },
    howToUse: [
      'Cleanse your face thoroughly',
      'Apply a few drops evenly over face and neck',
      'Gently massage until fully absorbed',
      'Follow with moisturizer or sunscreen (AM routine)'
    ],
    suitableFor: 'All skin types',
    category: 'essence',
    featured: true
  }
  
];

// Helper function to get product by ID
export const getProductById = (id) => {
  return skinProducts.find(product => product.id === id);
};

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return skinProducts.filter(product => product.featured);
};

