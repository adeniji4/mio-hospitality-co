
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, User, Briefcase, Phone } from 'lucide-react';
import { TubelightNav } from '@/components/ui/tubelight-navbar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { 
      name: 'Services',
      url: '#',
      icon: Briefcase,
      subItems: [
        { name: 'Interior Design', url: '/services/interior-design' },
        { name: 'Airbnb Services', url: '/services/airbnb' },
        { name: 'Videography', url: '/services/videography' },
        { name: 'Car Hire', url: '/services/car-hire' },
        { name: 'Private Jet Hire', url: '/services/jet-hire' },
        { name: 'Facility Management', url: '/services/facility-management' }
      ]
    },
    { name: 'Contact', url: '/contact', icon: Phone }
  ];

  const logo = (
    <Link to="/" className="flex items-center">
      <img
        src="/photos/mio small logo.png"
        alt="Mio's Hospitality & Co"
        className={`w-16 sm:w-20 md:w-12 object-contain ${isScrolled ? 'filter-none' : 'brightness-0 invert'}`}
      />
    </Link>
  );

  const galleryButton = (
    <Link to="/gallery">
      <Button size="lg" className="bg-red-950 hover:bg-white hover:text-[#4a1403] border border-transparent hover:border-[#4a1403] text-zinc-50 shadow-md hover:shadow-lg rounded-full px-6 ml-4">
        Gallery
      </Button>
    </Link>
  );

  return (
    <TubelightNav
      items={navItems}
      className={`transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-black/5 shadow-sm py-2' : 'bg-transparent py-2'}`}
      isScrolled={isScrolled}
      logo={logo}
      galleryButton={galleryButton}
    />
  );
};

export default Navbar;
