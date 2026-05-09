import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    projectType: 'Residential Interior',
    quote: 'HomeShine transformed our house into a dream home. Their attention to detail and understanding of our needs was exceptional. The team was professional, delivered on time, and the quality exceeded our expectations.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rajesh Patel',
    projectType: 'Modular Kitchen',
    quote: 'We absolutely love our new kitchen! The design is both beautiful and functional. The storage solutions they created are genius. Highly recommend HomeShine for anyone looking for premium kitchen design in Pune.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Neha & Amit Deshmukh',
    projectType: 'Complete Home Renovation',
    quote: 'Working with HomeShine was a pleasure from start to finish. They took care of everything - from design to execution. The project was completed within the timeline and budget. Our home looks stunning!',
    rating: 5,
  },
  {
    id: '4',
    name: 'TechVista Solutions',
    projectType: 'Commercial Office',
    quote: 'HomeShine designed our new office space beautifully. They understood our company culture and created a workspace that our team loves. The collaborative zones and meeting rooms have significantly improved our productivity.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Sandeep Kulkarni',
    projectType: 'Residential Interior',
    quote: 'The minimalist design they created for our apartment is exactly what we wanted. Clean, functional, and elegant. The team was responsive to our feedback and made the entire process stress-free.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Kavita Joshi',
    projectType: 'Modular Kitchen & Wardrobes',
    quote: 'Exceptional craftsmanship and service! Our kitchen and wardrobes are not just beautiful but incredibly practical. The German hardware and premium finishes they used are worth every penny. Thank you HomeShine!',
    rating: 5,
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}
