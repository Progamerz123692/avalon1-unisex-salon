export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
