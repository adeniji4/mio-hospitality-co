
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const carouselItems = [{
  id: 1,
  image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070',
  title: 'Luxury Interior Design',
  subtitle: 'Transform your space with our expert design services',
  showLogo: true
}, {
  id: 2,
  image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070',
  title: 'Premium Airbnb',
  subtitle: 'Experience comfort and style in our curated accommodations',
  showLogo: true
}, {
  id: 3,
  image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
  title: 'Exclusive Car & Jet Hire',
  subtitle: 'Travel in luxury with our premium transportation options',
  showLogo: true
}];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === carouselItems.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {carouselItems.map((item, index) => (
        <div 
          key={item.id} 
          className={`carousel-item absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`} 
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-5 sm:p-6 pb-12 sm:pb-16 md:pb-8">
            {item.showLogo && (
              <div className="mb-4 sm:mb-6 md:mb-0 animate-fade-in">
                <img 
                  src="/photos/b4196b07-03dc-40ee-a6b4-34e891c1b9bd.png" 
                  alt="Mio's Hospitality & Co" 
                  className="h-64 sm:h-72 md:h-80 lg:h-96 w-auto object-contain filter brightness-125 drop-shadow-2xl" 
                />
              </div>
            )}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-center max-w-3xl animate-fade-in px-4 leading-tight">
              {item.title}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-7 text-center max-w-2xl animate-fade-in px-6 text-white/90">
              {item.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in px-6 w-full max-w-xl justify-center">
              <Link to="/contact" className="flex-1">
                <Button 
                  size="custom" 
                  variant="default" 
                  className="w-full text-sm sm:text-base md:text-lg py-3 sm:py-3.5 rounded-full min-h-[48px] bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/book" className="flex-1">
                <Button 
                  size="custom" 
                  variant="default" 
                  className="w-full text-sm sm:text-base md:text-lg py-3 sm:py-3.5 rounded-full min-h-[48px] bg-gradient-to-r from-mio-orange to-mio-red hover:from-mio-red hover:to-mio-orange text-white shadow-[0_8px_24px_rgba(212,175,55,0.35)]"
                >
                  Book a Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
