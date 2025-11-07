import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export const FeatureSteps: React.FC<FeatureStepsProps> = ({
  features,
  className,
  title = 'Mission & Value',
  autoPlayInterval = 4500,
  imageHeight = 'h-[420px]',
}) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    if (isUserInteracting) return;
    const timer = setInterval(() => {
      setCurrentFeature(feature => (feature + 1) % features.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, features.length, isUserInteracting]);

  const handleSelect = (index: number) => {
    setCurrentFeature(index);
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), autoPlayInterval * 2);
  };

  return (
    <div className={cn('px-4 py-12 sm:py-16 md:py-18 bg-white', className)}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center text-[#1f140e] mb-8 md:mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.button
                type="button"
                key={feature.step}
                className={cn(
                  'flex w-full items-start gap-5 rounded-2xl border px-5 py-5 text-left transition-all focus:outline-none focus:ring-2 focus:ring-[#4a1403] focus:ring-offset-2',
                  index === currentFeature
                    ? 'border-[#4a1403] bg-[#4a1403]/5 shadow-sm'
                    : 'border-[#e6d9d0] hover:border-[#4a1403]/40'
                )}
                onClick={() => handleSelect(index)}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.55 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-base font-semibold transition-all',
                    index === currentFeature
                      ? 'bg-[#4a1403] border-[#4a1403] text-white scale-110'
                      : 'bg-white border-[#d8c4b9] text-[#4a1403]'
                  )}
                >
                  {index <= currentFeature ? '✓' : index + 1}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-[#4a1403]">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-base text-[#5f4d43] leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className={cn('relative overflow-hidden rounded-[32px] shadow-xl bg-white', imageHeight)}>
            <AnimatePresence mode="wait">
              {features.map((feature, index) =>
                index === currentFeature ? (
                  <motion.div
                    key={feature.step}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title || feature.step}
                      className="w-full h-full object-cover"
                      loading={index === currentFeature ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h4 className="text-lg md:text-xl font-semibold">{feature.title}</h4>
                      <p className="text-sm md:text-base text-white/80">{feature.content}</p>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
