import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  location: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/portfolio-photo-1.jpg',
    alt: 'Construction Project Portfolio 1',
    category: 'Renovation',
    title: 'Home Renovation',
    location: 'Queens, NY'
  },
  {
    id: '2',
    src: '/assets/portfolio-photo-2.jpg',
    alt: 'Construction Project Portfolio 2',
    category: 'Commercial',
    title: 'Commercial Project',
    location: 'Jamaica, NY'
  },
  {
    id: '3',
    src: '/assets/portfolio-photo-3.jpg',
    alt: 'Construction Project Portfolio 3',
    category: 'Kitchen',
    title: 'Kitchen Remodel',
    location: 'Forest Hills, NY'
  },
  {
    id: '4',
    src: '/assets/portfolio-photo-4.jpg',
    alt: 'Construction Project Portfolio 4',
    category: 'Exterior',
    title: 'Exterior Work',
    location: 'Ozone Park, NY'
  },
  {
    id: '5',
    src: '/assets/portfolio-photo-5.jpg',
    alt: 'Construction Project Portfolio 5',
    category: 'Bathroom',
    title: 'Bathroom Renovation',
    location: 'Richmond Hill, NY'
  },
  {
    id: '6',
    src: '/assets/portfolio-photo-6.jpg',
    alt: 'Construction Project Portfolio 6',
    category: 'Flooring',
    title: 'Flooring Installation',
    location: 'Flushing, NY'
  },
  {
    id: '7',
    src: '/assets/portfolio-photo-7.jpg',
    alt: 'Construction Project Portfolio 7',
    category: 'Renovation',
    title: 'General Construction',
    location: 'Jamaica Estates, NY'
  }
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const categories = ['All', ...new Set(GALLERY_IMAGES.map(img => img.category))];

  const filteredImages = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-24 bg-onyx-900 overflow-hidden scroll-mt-premium"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-onyx-900 via-onyx-800/30 to-onyx-900"></div>
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-copper-500/3 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-premium opacity-20"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 text-copper-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="w-12 h-px bg-copper-500"></span>
              Our Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
              Craftsmanship In <br />
              <span className="gradient-text">Every Detail</span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className={`flex flex-wrap gap-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                  ? 'bg-copper-500 text-onyx-900'
                  : 'glass text-warm-gray hover:text-ivory hover:border-copper-500/30'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(198,122,57,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 75}ms` }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-900 via-onyx-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="glass px-3 py-1.5 rounded-full text-xs font-medium text-ivory">
                  {image.category}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-10 h-10 rounded-full bg-copper-500/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-copper-400" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-2xl text-ivory mb-1">{image.title}</h3>
                <p className="text-warm-gray text-sm flex items-center gap-2">
                  <span className="w-4 h-px bg-copper-500"></span>
                  {image.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`text-center mt-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 glass hover:bg-onyx-600/50 text-ivory px-8 py-4 rounded-xl font-semibold transition-all group"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-5 h-5 text-copper-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-onyx-950/98 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-onyx-700 hover:border-copper-500 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-ivory" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-onyx-700 hover:border-copper-500 hover:bg-copper-500/10 flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-ivory" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-onyx-700 hover:border-copper-500 hover:bg-copper-500/10 flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6 text-ivory" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="font-display text-3xl text-ivory mb-2">{selectedImage.title}</h3>
              <p className="text-warm-gray flex items-center justify-center gap-2">
                <span className="w-6 h-px bg-copper-500"></span>
                {selectedImage.category} • {selectedImage.location}
                <span className="w-6 h-px bg-copper-500"></span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/20 to-transparent"></div>
    </section>
  );
};

export default Gallery;