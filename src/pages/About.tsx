import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { FeatureSteps } from '@/components/ui/feature-section';
import { Shield, Award, Check } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  // Team Members Data (limit to 5)
  const teamMembers = [{
    name: "Ms. Maryam Issa",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
    bio: "At the core of M.I.O.S Hospitality & Co. is Ms. Maryam Issa, whose deep passion for interior design, intentional living, and exceptional service has shaped the company's identity. What started as a personal love for creating beautiful spaces evolved into a mission to redefine hospitality in Nigeria and beyond. Guided by the belief that luxury should be effortless, and that comfort and style should go hand in hand, Maryam has built M.I.O.S into more than just a business—it is a lifestyle brand rooted in warmth, elegance, and thoughtful experience, where every guest feels truly at home.",
    highlight: "Visionary founder redefining hospitality with warmth, elegance, and intentional living.",
    socialLinks: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
      facebook: "https://facebook.com/"
    }
  }, {
    name: "Michael Rodriguez",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop",
    bio: "Michael Rodriguez oversees all operational aspects of Mio's Hospitality & Co, ensuring seamless execution of our diverse service offerings. With a background in hotel management and an MBA from INSEAD, Michael brings analytical rigor and operational excellence to our team.\n\nBefore joining Mio's, Michael served as Operations Director for a leading European hotel chain, managing properties across five countries. His expertise in process optimization and team management has been instrumental in scaling our operations while maintaining our commitment to quality.",
    highlight: "Operational leader focused on scalable excellence and seamless execution.",
    socialLinks: {
      linkedin: "https://linkedin.com/"
    }
  }, {
    name: "Ms. Adams Dankaka",
    role: "Legal & Compliance Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop",
    bio: "Aisha Patel leads our award-winning interior design division, bringing spaces to life with her unique blend of contemporary aesthetics and functional design. A graduate of Parsons School of Design, Aisha has over a decade of experience in residential and commercial design.\n\nHer work has been featured in Architectural Digest, Elle Decor, and House Beautiful. At Mio's Hospitality & Co, Aisha has transformed hundreds of properties, creating memorable spaces that enhance the guest experience while maximizing property value.",
    highlight: "Compliance-focused counsel ensuring trust, integrity, and best practices.",
    socialLinks: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/"
    }
  }, {
    name: "David Chen",
    role: "Director of Property Management",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    bio: "David Chen directs our comprehensive property management services, overseeing a portfolio of luxury properties across multiple markets. With a background in real estate and hospitality, David ensures that every property under our management maintains the highest standards.\n\nPrior to joining Mio's, David managed operations for a boutique hotel group and consulted for real estate developers on hospitality projects. His expertise in regulatory compliance, staff training, and property optimization makes him an invaluable asset to our team and clients.",
    highlight: "Property optimization expert driving consistency and premium guest experiences.",
    socialLinks: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/"
    }
  }, {
    name: "Amaka Nwosu",
    role: "Head of Guest Experience",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1374&auto=format&fit=crop",
    bio: "Amaka leads our guest experience initiatives across all services, ensuring every interaction reflects warmth, professionalism, and attention to detail. With over 8 years in hospitality and customer experience, she builds processes that turn first-time guests into loyal clients.",
    highlight: "Championing memorable, guest-first experiences across our services.",
    socialLinks: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/"
    }
  }];

  // Modal state for full executive writings
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? teamMembers[selectedIndex] : null;
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] bg-cover bg-center flex items-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=2532')"
      }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto mobile-container-padding relative z-10 text-white">
            <h1 className="responsive-heading font-bold mb-2 sm:mb-4">About Us</h1>
            <p className="responsive-body max-w-2xl">
              Discover the story behind Mio's Hospitality & Co and our commitment to excellence in hospitality services.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="mobile-section-padding bg-white">
          <div className="container mx-auto mobile-container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="order-2 lg:order-1">
                <h2 className="responsive-subheading font-bold mb-3 sm:mb-6 md:mb-6 text-gray-900">Our Story</h2>
                <p className="text-gray-600 mb-2 sm:mb-3 md:mb-4 responsive-body">
                  Founded in 2015, Mio's Hospitality & Co began with a vision to revolutionize the hospitality industry by offering comprehensive services that go beyond the standard offerings. 
                </p>
                <p className="text-gray-600 mb-2 sm:mb-3 md:mb-4 responsive-body">
                  What started as a small interior design firm quickly expanded into a full-service hospitality company as we recognized the growing demand for integrated solutions that address all aspects of property management and guest experiences.
                </p>
                <p className="text-gray-600 responsive-body">
                  Today, we're proud to offer a diverse range of services including interior design, Airbnb management, videography, luxury transportation, and property maintenance, all delivered with our signature attention to detail and commitment to excellence.
                </p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="order-1 lg:order-2 flex justify-center">
                <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[450px] w-full rounded-lg overflow-hidden shadow-xl bg-red-950 p-4">
                  <img src="/photos/b4196b07-03dc-40ee-a6b4-34e891c1b9bd.png" alt="Mio's Hospitality team" className="w-full h-auto rounded-lg" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <FeatureSteps
          features={[
            {
              step: 'Value 01',
              title: 'Excellence in Every Detail',
              content: "From bespoke interiors to concierge-level hospitality, we obsess over the little things that create unforgettable experiences.",
              image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1920&auto=format&fit=crop'
            },
            {
              step: 'Value 02',
              title: 'Integrity & Trust',
              content: "Transparent processes, trusted partners, and dependable service ensure our clients feel supported at every turn.",
              image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop'
            },
            {
              step: 'Value 03',
              title: 'Innovating Hospitality',
              content: "We blend technology, design, and human touch to reimagine what premium hospitality and property care can be.",
              image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1920&auto=format&fit=crop'
            },
            {
              step: 'Value 04',
              title: 'People-First Experiences',
              content: "Guests, residents, and partners remain at the heart of every service, activation, and journey we deliver.",
              image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop'
            }
          ]}
          autoPlayInterval={4500}
          imageHeight="h-[420px]"
        />

        {/* Meet the Executives */}
        <section className="mobile-section-padding bg-white">
          <div className="container mx-auto mobile-container-padding">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5">Meet the Executives</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl lg:text-1xl leading-relaxed">
                Our leadership team brings together decades of experience in hospitality, design, and property management to deliver exceptional service to our clients.
              </p>
            </motion.div>

            <AnimatedTestimonials
              testimonials={teamMembers.slice(0, 5).map(m => ({
                name: m.name,
                designation: m.role,
                src: m.image,
                quote: m.highlight,
              }))}
              autoplay={false}
              onImageClick={(idx) => setSelectedIndex(idx)}
            />

            <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
              <DialogContent className="mobile-team-modal">
                {selected && (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{selected.name}</DialogTitle>
                      <DialogDescription className="text-mio-orange font-medium text-sm sm:text-base">{selected.role}</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-4">
                      <div className="md:col-span-1 flex justify-center">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-gray-100 shadow-lg">
                          <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-gray-700 whitespace-pre-line text-xs sm:text-sm md:text-base">{selected.bio}</p>
                      </div>
            </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mobile-section-padding bg-red-950">
          <div className="container mx-auto mobile-container-padding">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="responsive-subheading font-bold mb-2 sm:mb-3 md:mb-4 text-slate-50">What Sets Us Apart</h2>
              <p className="max-w-3xl mx-auto text-slate-50 responsive-body">
                We pride ourselves on delivering a level of service that goes beyond the ordinary. Here's what makes Mio's Hospitality & Co different.
              </p>
            </motion.div>

            <div className="mobile-mission-grid max-w-6xl mx-auto">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0
            }} viewport={{
              once: true
            }} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md flex flex-col">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <Shield className="text-mio-orange h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mr-2 sm:mr-3" />
                  <h3 className="responsive-body font-bold text-gray-900">Certified Professionals</h3>
                </div>
                <p className="text-gray-600 flex-grow mobile-text-sm">
                  Our team comprises certified hospitality professionals with extensive training and experience in their respective fields, ensuring the highest standards of service delivery.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md flex flex-col">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <Award className="text-mio-orange h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mr-2 sm:mr-3" />
                  <h3 className="responsive-body font-bold text-gray-900">End-to-End Solutions</h3>
                </div>
                <p className="text-gray-600 flex-grow mobile-text-sm">
                  From initial concept to ongoing management, we provide comprehensive hospitality solutions under one roof, eliminating the need for multiple service providers.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md flex flex-col">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <Check className="text-mio-orange h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mr-2 sm:mr-3" />
                  <h3 className="responsive-body font-bold text-gray-900">Personalized Approach</h3>
                </div>
                <p className="text-gray-600 flex-grow mobile-text-sm">
                  We recognize that each client and property is unique. Our tailored approach ensures that our services align perfectly with your specific needs and objectives.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default About;
