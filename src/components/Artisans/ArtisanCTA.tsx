
import React from 'react';
import ServiceCta from '@/components/ServiceCta';

interface ArtisanCTAProps {
  onNavigate: (path: string) => void;
}

const ArtisanCTA: React.FC<ArtisanCTAProps> = ({ onNavigate }) => {
  return (

      <ServiceCta
        title="Need a Custom Solution?"
        description="Our team can help you find the right professionals for your specific facility management needs, whether it's a one-time project or ongoing support."
        description2=''
        primaryButtonText="contact us"
        secondaryButtonText="Book a Service"
        primaryButtonLink="/contact"
        secondaryButtonLink="/book?service=facility-management"
        backgroundImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070"
      />
  );
};

export default ArtisanCTA;
