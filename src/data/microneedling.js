// Microneedling Devices Data
export const microneedlingDevices = [
  {
    id: 'dr-pen-a6',
    name: 'Dr. Pen A6 Ultima Microneedling Pen',
    image: '/images/micro/1.png',
    description: '5-speed microneedling pen with adjustable depth, up to 15,000 RPM. Professional-grade device offering adjustable needle depth and high-speed performance for targeted skin rejuvenation.'
  },
  {
    id: 'dr-pen-a6s',
    name: 'Dr. Pen A6S (A6-S / A6S Ultima)',
    image: '/images/micro/2.png',
    description: 'Professional A6S pen with 6 speed levels (8,000–16,000 RPM) and bayonet-style cartridge compatibility. Versatile device compatible with multiple cartridge types for customized treatments.'
  },
  {
    id: 'hydra-pen-h2',
    name: 'HYDRA PEN [SUPER] H2',
    image: '/images/micro/3.png',
    description: 'Automatic serum delivery microneedling pen with fixed cartridge needle sizes and 5-level speed control. Advanced device featuring automatic serum delivery technology for optimal product penetration.'
  },
  {
    id: 'hydra-pen-h3',
    name: 'HYDRA PEN [PREMIUM] H3',
    image: '/images/micro/4.png',
    description: 'Premium fully automatic serum delivery pen with adjustable needle depth (0.1mm-1mm) and single universal cartridge. Cost-effective single cartridge system for all needle sizes with 5 speed levels.'
  },
  {
    id: 'dr-pen-a11-ultima-pro',
    name: 'Dr. Pen A11 Ultima Pro Microneedling Pen',
    image: '/images/micro/5.png',
    description: 'NEW 2024 professional microneedling pen with LED display, 6 speed levels, adjustable depth (0-2.5mm), and smart stand with auto-pause. Latest professional-grade device with advanced technology for superior treatments.'
  },
  {
    id: 'bio-pen-q2',
    name: 'The Bio Pen Q2',
    image: '/images/micro/6.png',
    description: '3-in-1 microneedling pen with LED light therapy and microcurrent for comprehensive skin rejuvenation. Revolutionary device combining microneedling, EMS Electroporation, and LED light therapy in one treatment.'
  }
];

export const getMicroneedlingById = (id) =>
  microneedlingDevices.find((d) => d.id === id);

export default microneedlingDevices;
