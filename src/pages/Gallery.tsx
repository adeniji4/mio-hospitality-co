import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import ServiceCta from '@/components/ServiceCta';
import ServiceHero from '@/components/ServiceHero';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <ServiceHero
          title="Gallery"
          subtitle="Explore highlights from our interior designs, hospitality projects, transport fleet, and more."
          backgroundImage="/photos/b4196b07-03dc-40ee-a6b4-34e891c1b9bd.png"
        />

        {/* Full gallery */}
        <section className="pt-6">
          <GallerySection title="Our Gallery" limit={24} showHeader={false} />
        </section>

        {/* CTA section */}
        <ServiceCta
          title="Inspired by Our Work?"
          description="Let’s help you create beautiful spaces, seamless stays, and premium experiences."
          description2="From interiors to Airbnb, transport and more—we’ve got you covered."
          primaryButtonText="Book a Service"
          primaryButtonLink="/book"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
          backgroundImage="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;


