import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

export type PortfolioImage = {
  id: string;
  src?: string;      // Make optional
  video?: string;    // Add this
  alt?: string;
  caption?: string;
};

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: PortfolioImage[];
  initialImageIndex?: number;
  serviceTitle?: string;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  images,
  initialImageIndex = 0,
  serviceTitle = "Portfolio"
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  // Reset to initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(initialImageIndex);
    }
  }, [isOpen, initialImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'Escape':
          event.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex]);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[currentImageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
      <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-transparent border-none shadow-none overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 sm:p-6 bg-gradient-to-b from-black/50 to-transparent">
            <div className="text-white">
              <h2 className="text-lg sm:text-xl font-semibold">{serviceTitle}</h2>
              <p className="text-sm text-white/80">
                {currentImageIndex + 1} of {images.length}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image Container */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {images[currentImageIndex].video ? (
                  <video
                    src={images[currentImageIndex].video}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                    poster={images[currentImageIndex].src || undefined}
                  />
                ) : (
                  images[currentImageIndex].src && (
                    <img
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      className="w-full h-full object-contain"
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white z-40"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white z-40"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Image Caption */}
          {currentImage.caption && (
            <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent">
              <motion.p
                key={currentImageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-white text-sm sm:text-base text-center max-w-4xl mx-auto"
              >
                {currentImage.caption}
              </motion.p>
            </div>
          )}

          {/* Thumbnail Navigation - Smaller dots positioned lower */}
          {images.length > 1 && (
            <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-black/30 rounded-full px-2 py-1.5 sm:px-3 sm:py-2 backdrop-blur-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
