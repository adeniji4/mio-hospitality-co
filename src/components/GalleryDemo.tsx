import { Gallery4 } from "@/components/ui/gallery4"
import type { Gallery4Props } from "@/components/ui/gallery4"

const demoData: Gallery4Props = {
  title: "Our Services",
  description:
    "Discover our comprehensive range of hospitality and lifestyle services tailored to meet your needs.",
  items: [
     {
      id: 'interior-design',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Interior Design',
      description: 'Transform your space with our expert interior design services.',
      href: '/services/interior-design'
}, 
 {
      id: 'Airbnb',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Airbnb Services',
      description: 'accommodation management and booking services.',
      href: '/services/airbnb'
}, 
     {
      id: 'Videography',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Videography',
      description: 'Professional video production for your property or event.',
      href: '/services/videography'
}, 
     {
      id: 'car-hire',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Car Hire',
      description: 'Luxury vehicle rentals for any occasion or requirement.',
      href: '/services/car-hire'
}, 
     {
      id: 'jet-hire',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Private Jet Hire',
      description: 'Exclusive private jet charter services for seamless travel.',
      href: '/services/jet-hire'
}, 
     {
      id: 'facility-management',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Facility Management',
      description: 'maintenance, management, and facility support.',
      href: '/services/facility-management'
}, 
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
