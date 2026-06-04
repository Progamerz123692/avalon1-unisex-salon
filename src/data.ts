import { Service, Review, BusinessHour, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'eyebrow-threading',
    title: 'Eyebrow Threading',
    description: 'Precision threading for perfectly sculpted brows that enhance your natural features.',
    icon: 'Scissors',
  },
  {
    id: 'eyebrow-beautification',
    title: 'Eyebrow Beautification',
    description: 'Comprehensive brow styling including tinting and laminating for a bolder look.',
    icon: 'Sparkles',
  },
  {
    id: 'eyelashes',
    title: 'Eyelashes',
    description: 'Premium lash extensions and lifts for a dramatic, maintenance-free gaze.',
    icon: 'Eye',
  },
  {
    id: 'tanning',
    title: 'Tanning',
    description: 'Even, golden glow with our professional spray tanning and UV session options.',
    icon: 'Sun',
  },
  {
    id: 'permanent-makeup',
    title: 'Permanent Makeup',
    description: 'Expert microblading and lip blushing for long-lasting, effortless beauty.',
    icon: 'Palette',
  },
  {
    id: 'blow-dry',
    title: 'Blow Dry',
    description: 'Red-carpet ready hair styling and blowouts for any occasion.',
    icon: 'Wind',
  },
  {
    id: 'hair-extensions',
    title: 'Hair Extensions',
    description: 'High-quality human hair extensions for length, volume, and seamless blending.',
    icon: 'User',
  },
  {
    id: 'brazilian-waxing',
    title: 'Brazilian Waxing',
    description: 'Professional, hygienic waxing services for smooth and long-lasting results.',
    icon: 'Flame',
  },
  {
    id: 'massage',
    title: 'Massage',
    description: 'Therapeutic body treatments to rejuvenate your mind and de-stress your body.',
    icon: 'Cloud',
  },
  {
    id: 'acne-treatments',
    title: 'Acne Treatments',
    description: 'Advanced facials and clinical treatments designed to clear and heal blemish-prone skin.',
    icon: 'ShieldCheck',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Anjali Sharma',
    rating: 5,
    text: 'The best salon experience in Chandigarh! The staff is so professional and the ambiance is truly luxurious. Highly recommended for bridal makeup.',
  },
  {
    id: '2',
    name: 'Rohan Mehta',
    rating: 5,
    text: 'Avalon is my go-to for hair styling. Their attention to detail is unmatched. 5 stars all the way!',
  },
  {
    id: '3',
    name: 'Priya Kapoor',
    rating: 4,
    text: 'Exquisite services and premium products. The permanent makeup session was fantastic. Very happy with the results.',
  },
];

export const BUSINESS_HOURS: BusinessHour[] = [
  { day: 'Monday', hours: '10 AM – 9 PM' },
  { day: 'Tuesday', hours: '10 AM – 9 PM' },
  { day: 'Wednesday', hours: '10 AM – 9 PM' },
  { day: 'Thursday', hours: '10 AM – 9 PM' },
  { day: 'Friday', hours: '10 AM – 9 PM' },
  { day: 'Saturday', hours: '10 AM – 9 PM' },
  { day: 'Sunday', hours: '10 AM – 9 PM' },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment via our website form, call us directly, or message us on WhatsApp for instant confirmation.',
  },
  {
    question: 'What bridal packages do you offer?',
    answer: 'We offer customized bridal packages including makeup, hair styling, skin treatments, and pre-wedding grooming. Contact us for a consultation.',
  },
  {
    question: 'Do you use premium products?',
    answer: 'Yes, we only use internationally recognized premium beauty brands to ensure the best results and safety for our clients.',
  },
  {
    question: 'Are walk-ins welcome?',
    answer: 'While we prefer appointments to ensure minimal wait times, we do accommodate walk-ins based on availability.',
  },
];
