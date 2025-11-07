
import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '@/components/ServiceLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceIntroduction from '@/components/ServiceIntroduction';
import ServiceFeatures from '@/components/ServiceFeatures';
import ServiceGallery from '@/components/ServiceGallery';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import ServiceCta from '@/components/ServiceCta';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const InteriorDesign = () => {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: 'Personalized Design',
      description: 'Custom design solutions tailored to your unique style, needs, and lifestyle to create spaces that truly reflect who you are.',
    },
    {
      id: 'feature-2',
      title: 'Comprehensive Planning',
      description: 'Detailed floor plans, 3D renderings, and material selections to ensure every aspect of your space is perfectly designed.',
    },
    {
      id: 'feature-3',
      title: 'Project Management',
      description: 'Full oversight of your renovation or design project, coordinating contractors and ensuring timely, high-quality execution.',
    },
    {
      id: 'feature-4',
      title: 'Luxury Materials',
      description: 'Access to exclusive, high-end materials and finishes that elevate your space and create a lasting impression.',
    },
    {
      id: 'feature-5',
      title: 'Sustainable Options',
      description: 'Eco-friendly design solutions and sustainable material choices that reduce environmental impact without sacrificing style.',
    },
    {
      id: 'feature-6',
      title: 'Smart Home Integration',
      description: 'Seamless incorporation of technology into your living spaces for enhanced comfort, convenience, and energy efficiency.',
    },
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932',
      alt: 'Modern minimalist living room design',
      caption: 'Modern minimalist living room with natural lighting'
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      alt: 'Luxury bedroom with panoramic views',
      caption: 'Luxury master bedroom with custom headboard and lighting'
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=2080',
      alt: 'Designer kitchen with island',
      caption: 'Contemporary kitchen with custom cabinetry and marble countertops'
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074',
      alt: 'Modern bathroom design',
      caption: 'Spa-inspired bathroom with freestanding tub and heated floors'
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2070',
      alt: 'Dining room with chandelier',
      caption: 'Elegant dining space with custom lighting and furniture'
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070',
      alt: 'Home office space',
      caption: 'Functional yet stylish home office with custom shelving'
    },
    {
      id: 'gallery-7',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158',
      alt: 'Outdoor living space',
      caption: 'Luxury outdoor entertainment area with firepit and comfortable seating'
    },
    {
      id: 'gallery-8',
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      alt: 'Open concept living',
      caption: 'Open concept living space with seamless transitions between areas'
    },
    {
      id: 'gallery-9',
      src: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=2070',
      alt: 'Luxury apartment design',
      caption: 'High-end apartment with custom millwork and designer furniture'
    },
    {
      id: 'gallery-10',
      src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992',
      alt: 'Minimalist entryway',
      caption: 'Welcoming entryway with statement lighting and custom console'
    },
    {
      id: 'gallery-11',
      src: 'https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2070',
      alt: 'Luxury hotel-inspired bedroom',
      caption: 'Hotel-inspired bedroom with luxurious textiles and mood lighting'
    },
    {
      id: 'gallery-12',
      src: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=2070',
      alt: 'Designer walk-in closet',
      caption: 'Custom walk-in closet with integrated lighting and organization'
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 'testimonial-1',
      content: "Working with Mio's Interior Design team was an absolute pleasure. They transformed our home into a stunning, functional space that perfectly reflects our style and needs. Their attention to detail is impeccable.",
      author: "Sarah Johnson",
      position: "Homeowner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    {
      id: 'testimonial-2',
      content: "The team at Mio's understood our vision immediately and delivered beyond our expectations. Their ability to balance aesthetics with functionality created a space that's both beautiful and practical for our family.",
      author: "Michael Chen",
      position: "Property Developer",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200"
    },
    {
      id: 'testimonial-3',
      content: "I've worked with many interior designers over the years, but Mio's stands out for their creativity, professionalism, and ability to stay within budget while delivering luxury results.",
      author: "Amanda Rodriguez",
      position: "CEO",
      company: "Luxury Homes Inc.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200"
    },
    {
      id: 'testimonial-4',
      content: "Our office redesign by Mio's has completely transformed our workspace. Employee satisfaction has increased, and clients are always impressed when they visit. It was an investment that has paid for itself.",
      author: "David Thompson",
      position: "Managing Director",
      company: "Thompson Enterprises",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
  ];

  return (
    <ServiceLayout>
      <ServiceHero
        title="Interior Design"
        subtitle="Transform your space with our expert interior design services"
        backgroundImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932"
      />
      
      <ServiceIntroduction
        description={
          <>
            <h2 className="responsive-subheading font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900">Style That Feels Like You</h2>
            <p className="text-gray-600 mb-4">
              We design homes, rentals, and spaces that feel both beautiful and personal. From cozy to classy, we make it work for your lifestyle-or your guests
            </p>
            <p className="font-bold text-gray-900">
              What we do
              <ul className="font-light list-disc ml-5 text-gray-600">
                <li>interior design for homes and Airbnb</li>
                <li>Furniture sourcing & layout planning</li>
                <li>Full space makeovers</li>
                <li>Mood boards & design concept development</li>
                <li>Property maintenance</li>
              </ul>
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
        imageAlt="Interior designer working on floor plans"
        primaryButtonText="View Interior Projects"
        primaryButtonLink="#portfolio-section"
        secondaryButtonText="Book Interior Design"
        secondaryButtonLink="/book?service=interior-design"
      />
      
      <ServiceFeatures
        title="Our Design Services"
        subtitle="We offer a comprehensive range of interior design services tailored to your unique needs and vision"
        features={features}
        darkMode={true}
      />
      
      <ServiceGallery
        title="Our Portfolio"
        subtitle="Explore our collection of beautifully designed spaces across residential and commercial projects"
        images={galleryImages}
      />
      
      <ServiceTestimonials
        testimonials={testimonials}
        darkMode={true}
      />
      
      <ServiceCta
        title="Ready to Transform Your Space?"
        description="Contact us today to schedule a consultation with one of our expert interior designers."
        description2=''
        primaryButtonText="Book a Consultation"
        primaryButtonLink="/book"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080"
      />
      
      <WhatsAppCTA />
    </ServiceLayout>
  );
};

export default InteriorDesign;
