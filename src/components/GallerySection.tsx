import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  fullSize?: string;
  videoUrl?: string;
  caption: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'interior-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932',
    fullSize: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932',
    caption: 'Modern minimalist living room design',
    category: 'Interior Design'
  },
  {
    id: 'interior-2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    fullSize: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    caption: 'Luxury bedroom with panoramic views',
    category: 'Interior Design'
  },
  {
    id: 'airbnb-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    fullSize: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    caption: 'Elegant apartment in downtown',
    category: 'Airbnb'
  },
  {
    id: 'car-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025',
    fullSize: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025',
    caption: 'Luxury sports car available for rent',
    category: 'Car Hire'
  },
  {
    id: 'video-1',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1974',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    caption: 'Promotional video for luxury property',
    category: 'Videography'
  },
  {
    id: 'jet-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
    fullSize: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070',
    caption: 'Private jet interior - luxury travel',
    category: 'Jet Hire'
  },
  {
    id: 'property-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    fullSize: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    caption: 'Exclusive property under our management',
    category: 'Property Management'
  },
  {
    id: 'maintenance-1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069',
    fullSize: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069',
    caption: 'Professional maintenance services',
    category: 'Maintenance'
  },
  {
    id: 'interior-3',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2064',
    caption: 'Warm and elegant living area',
    category: 'Interior Design'
  },
  {
    id: 'interior-4',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2064',
    caption: 'Cozy bedroom with natural light',
    category: 'Interior Design'
  },
  {
    id: 'airbnb-2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d90?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d90?q=80&w=2064',
    caption: 'Stylish serviced apartment',
    category: 'Airbnb'
  },
  {
    id: 'airbnb-3',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2064',
    caption: 'Scandinavian-inspired rental',
    category: 'Airbnb'
  },
  {
    id: 'car-2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2064',
    caption: 'Executive sedan for hire',
    category: 'Car Hire'
  },
  {
    id: 'car-3',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2064',
    caption: 'Luxury SUV airport transfer',
    category: 'Car Hire'
  },
  {
    id: 'jet-2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=2064',
    caption: 'Runway-ready private jet',
    category: 'Jet Hire'
  },
  {
    id: 'jet-3',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2064',
    caption: 'Onboard luxury seating',
    category: 'Jet Hire'
  },
  {
    id: 'video-2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2064',
    caption: 'Behind the scenes shoot',
    category: 'Videography'
  },
  {
    id: 'property-2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d90?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d90?q=80&w=2064',
    caption: 'Premium managed residence',
    category: 'Property Management'
  },
  {
    id: 'property-3',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2064',
    caption: 'Modern communal space',
    category: 'Property Management'
  },
  {
    id: 'maintenance-2',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2064',
    caption: 'On-site technical support',
    category: 'Maintenance'
  },
  {
    id: 'interior-5',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2064',
    caption: 'Open-plan luxury kitchen',
    category: 'Interior Design'
  },
  {
    id: 'airbnb-4',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2064',
    caption: 'City-view serviced suite',
    category: 'Airbnb'
  },
  {
    id: 'car-4',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2064',
    caption: 'Chauffeur-driven luxury',
    category: 'Car Hire'
  },
  {
    id: 'property-4',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2064',
    fullSize: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2064',
    caption: 'Premium lobby experience',
    category: 'Property Management'
  }
];

interface GallerySectionProps {
  title?: string;
  limit?: number; // number of items to show; if undefined, show all
  showHeader?: boolean; // controls title/description rendering
}

const GallerySection = ({ title = 'Our Gallery', limit, showHeader = true }: GallerySectionProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const itemsToShow = typeof limit === 'number' ? (filter === 'All' ? galleryItems.slice(0, limit) : galleryItems.filter(item => item.category === filter).slice(0, limit)) : (filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter));

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {showHeader && (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">{title}</h2>
            <p className="text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Explore our previous projects and experiences through our curated gallery.
            </p>
          </>
        )}
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10 px-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors min-h-[36px] ${
                filter === category 
                  ? 'bg-mio-orange text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery grid - denser layout: 3 cols mobile, 4 cols tablet, 6 cols desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {itemsToShow.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3 md:p-4">
                <p className="text-white font-medium text-xs sm:text-sm">{item.category}</p>
                <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-2">{item.caption}</h3>
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl md:max-w-5xl p-0 bg-black overflow-hidden max-h-[90vh]">
          <div className="w-full h-full">
            {selectedItem?.type === 'image' ? (
              <img
                src={selectedItem.fullSize || selectedItem.thumbnail}
                alt={selectedItem.caption}
                className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] object-contain"
              />
            ) : selectedItem?.type === 'video' && selectedItem.videoUrl ? (
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={selectedItem.videoUrl}
                  title={selectedItem.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
            
            <div className="p-3 sm:p-4 bg-black text-white">
              <h3 className="text-lg sm:text-xl font-bold">{selectedItem?.caption}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{selectedItem?.category}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
