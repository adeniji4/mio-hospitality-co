import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PortfolioModal from './PortfolioModal';

type ServiceGalleryImage = {
  id: string;
  src?: string;
  video?: string;
  alt?: string;
  caption?: string;
};

type ServiceGalleryProps = {
  title: string;
  subtitle?: string;
  images: ServiceGalleryImage[];
};

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ title, subtitle, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  
  // Limit to 9 images for mobile 3x3 grid
  const displayImages = images.slice(0, 9);

  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="portfolio-section" className="mobile-section-padding bg-white">
        <div className="container mx-auto mobile-container-padding">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="responsive-heading font-bold text-gray-900 mb-2 sm:mb-4"
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="responsive-body text-gray-600 max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          
          <div className="mobile-portfolio-grid">
            {displayImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(index)}
                onMouseEnter={e => {
                  if (image.video && videoRefs.current[index]) {
                    videoRefs.current[index].play();
                  }
                }}
                onMouseLeave={e => {
                  if (image.video && videoRefs.current[index]) {
                    videoRefs.current[index].pause();
                    videoRefs.current[index].currentTime = 0;
                  }
                }}
              >
                <div className="aspect-[3/2.5] overflow-hidden">
                  {image.video ? (
                    <video
                      ref={el => (videoRefs.current[index] = el!)}
                      src={image.video}
                      className="w-full h-full object-cover"
                      poster={image.src || undefined}
                      muted
                      preload="metadata"
                      controls={false}
                      playsInline
                    />
                  ) : (
                    image.src && (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    )
                  )}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                  <div className="w-full p-2 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption && (
                      <p className="text-xs sm:text-sm font-medium line-clamp-2">{image.caption}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        initialImageIndex={selectedImageIndex}
        serviceTitle={title}
      />
    </>
  );
};

export default ServiceGallery;
