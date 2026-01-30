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
       
        text: 'Deep hydration with a water-light texture'
      },
      {
        
        text: 'Helps improve skin glow and smoothness'
      },
      {
        
        text: 'Supports skin repair and renewal'
      },
      {
        
        text: 'Enhances skin elasticity and firmness'
      },
      {
        
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
  },
  {
  id: 'remedium-pdrn-ha-complex',
  name: 'ReMedium PDRN + HA Complex',
  subtitle: 'Advanced Polynucleotide Skin Therapy',
  image: '/images/product2.png', // update if needed
  shortDescription:
    'A powerful bioreparant therapy combining PDRN, Niacinamide, and Hyaluronic Acid to deeply rejuvenate skin, improve radiance, and restore collagen structure.',
  fullDescription:
    'Clinical research confirms effective skin regeneration through DNA-level repair, collagen stimulation, hydration, and antioxidant protection with visible results within days and optimal results after 28 days.',
  keyBenefits: [
    {  text: 'Stimulates natural collagen production' },
    {  text: 'Improves skin radiance and turgor within 24 hours' },
    {  text: 'Deep hydration through polynucleotide water-binding' },
    {  text: 'Accelerates tissue regeneration and repair' },
    { text: 'Removes free radicals and supports skin immunity' }
  ],
  keyIngredient: {
    name: 'PDRN + Niacinamide + Hyaluronic Acid',
    description:
      'A clinically proven complex (20mg/ml) where PDRN derived from salmon enzymes acts as a collagen builder, niacinamide enhances whitening and lifting, and hyaluronic acid boosts hydration.'
  },
  texture: {
    title: 'Mechanism & Action',
    features: [
      'Embedded into DNA for targeted regeneration',
      'Immunomodulatory and antioxidant action',
      'Activates natural skin renewal processes'
    ]
  },
  howToUse: [
    'Course of 3 procedures',
    'One session every 14 days',
    'Administered via linear retrograde, papular, tubercular, or hot point techniques'
  ],
  suitableFor: 'All skin types with aesthetic concerns',
  category: 'injectable-therapy',
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

