// Microneedling Devices Data
export const microneedlingDevices = [
  {
    id: 'dr-pen-a6',
    name: 'Dr. Pen A6 Ultima Microneedling Pen',
    image: '/images/micro/1.png',
    description: '5-speed pen with adjustable depth up to 15,000 RPM.'
  },
  {
    id: 'dr-pen-a6s',
    name: 'Dr. Pen A6S (A6-S / A6S Ultima)',
    image: '/images/micro/2.png',
    description: '6 speed levels (8,000–16,000 RPM) with bayonet-style cartridge for customized treatments.'
  },
  {
    id: 'hydra-pen-h2',
    name: 'HYDRA PEN [SUPER] H2',
    image: '/images/micro/3.png',
    description: 'Automatic serum delivery pen with fixed cartridge and 5-level speed control.'
  },
  {
    id: 'hydra-pen-h3',
    name: 'HYDRA PEN [PREMIUM] H3',
    image: '/images/micro/4.png',
    description: 'Fully automatic serum delivery pen with adjustable depth (0.1mm-1mm) and universal cartridge.'
  },
  {
    id: 'dr-pen-a11-ultima-pro',
    name: 'Dr. Pen A11 Ultima Pro Microneedling Pen',
    image: '/images/micro/5.png',
    description: 'NEW 2024 professional pen with LED display, 6 speed levels, and adjustable depth (0-2.5mm).'
  },
  {
    id: 'bio-pen-q2',
    name: 'The Bio Pen Q2',
    image: '/images/micro/6.png',
    description: '3-in-1 pen combining microneedling, LED light therapy, and microcurrent.'
  }
  ,
  {
    id: 'dr-pen-a1-w',
    name: 'Dr. Pen A1-W',
    image: '/images/micro/7.png',
    description: 'Compact portable pen for home and professional use with adjustable speed.'
  },
  {
    id: 'dr-pen-m8',
    name: 'Dr. Pen M8',
    image: '/images/micro/8.png',
    description: 'Cordless pen with high-speed motor and multiple speed settings.'
  },
  {
    id: 'dr-pen-n2',
    name: 'Dr. Pen N2',
    image: '/images/micro/9.png',
    description: 'Versatile pen for delicate areas with fine-depth control and low-noise motor.'
  },
  {
    id: 'pmu-pen',
    name: 'PMU Pen',
    image: '/images/micro/10.png',
    description: 'Permanent makeup pen for eyebrow and cosmetic tattooing.'
  },
  {
    id: 'mym-dr-pen',
    name: 'MYM Dr Pen',
    image: '/images/micro/11.png',
    description: 'Affordable pen kit with cartridges and charger for salon and home use.'
  },
  {
    id: 'neatcell-pen-red',
    name: 'NeatCell Pen - Red Light',
    image: '/images/micro/12.png',
    description: 'Pen with integrated red LED for healing and collagen stimulation.'
  },
  {
    id: 'neatcell-pen-blue',
    name: 'NeatCell Pen - Blue Light',
    image: '/images/micro/13.png',
    description: 'Pen with integrated blue LED for antibacterial action.'
  },
  {
    id: 'charment-pen-2',
    name: 'Charment Pen 2',
    image: '/images/micro/14.png',
    description: 'Second-generation pen with ergonomic grip and improved cartridge compatibility.'
  }
  
];

export const getMicroneedlingById = (id) =>
  microneedlingDevices.find((d) => d.id === id);

export default microneedlingDevices;
