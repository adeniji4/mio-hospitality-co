
import Hero from '@/components/Hero';
// import ServiceGrid from '@/components/ServiceGrid';
import AirbnbBooking from '@/components/AirbnbBooking';
import TransportSection from '@/components/TransportSection';
import GallerySection from '@/components/GallerySection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { Gallery4Demo } from '@/components/GalleryDemo';
import ServiceTestimonials from '@/components/ServiceTestimonials';

const Index = () => {
  // Testimonials data for home page
  const homeTestimonials = [
    {
      id: 'home-testimonial-1',
      content: "Working with Mio's has been an absolute game-changer for our property. Their interior design team transformed our Airbnb into a stunning space that guests love, and their management services have increased our bookings by 40%.",
      author: "Sarah Johnson",
      position: "Property Owner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    {
      id: 'home-testimonial-2',
      content: "The luxury car hire service from Mio's exceeded all expectations. From the moment I booked to the final return, everything was seamless. The Porsche 911 was immaculate, and their concierge service is top-notch.",
      author: "Jonathan Reed",
      position: "Business Executive",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
    },
    {
      id: 'home-testimonial-3',
      content: "Mio's videography team created an incredible property showcase video that generated more inquiries in one week than we'd received in the previous month. Their professionalism and creativity are unmatched.",
      author: "Alexandra Reeves",
      position: "Real Estate Agent",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200"
    },
    {
      id: 'home-testimonial-4',
      content: "Since partnering with Mio's for our Airbnb property, our occupancy rate has increased significantly and we consistently receive 5-star reviews. Their attention to detail and guest service is remarkable.",
      author: "Thomas Wilson",
      position: "Property Owner",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    },
    {
      id: 'home-testimonial-5',
      content: "Mio's Private Jet Charter service has transformed how we travel. The time saved and privacy afforded has significantly improved our productivity. Their team handles every detail with precision.",
      author: "Elizabeth Morgan",
      position: "Chief Executive Officer",
      company: "Global Ventures Ltd.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"
    },
    {
      id: 'home-testimonial-6',
      content: "The facility management services from Mio's have reduced our operational costs by 20% while improving building efficiency. Their proactive approach and professional team are exceptional.",
      author: "Jennifer Blackwood",
      position: "Operations Director",
      company: "Global Commerce Center",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <ServiceGrid /> */}
      <Gallery4Demo />
      <AirbnbBooking />
      <TransportSection />
      <ServiceTestimonials testimonials={homeTestimonials} title="What Our Clients Say" darkMode={false} />
      {/* Gallery removed from home page per request */}
      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Index;
