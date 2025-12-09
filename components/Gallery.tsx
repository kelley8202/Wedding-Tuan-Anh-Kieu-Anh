import React, { useState, useEffect, useCallback } from 'react';

// Extended list of photos for the album
const photos = [
  "https://picsum.photos/id/65/600/800",
  "https://picsum.photos/id/338/800/600",
  "https://picsum.photos/id/334/600/600",
  "https://picsum.photos/id/400/600/800",
  "https://picsum.photos/id/431/800/600",
  "https://picsum.photos/id/514/600/600",
  "https://picsum.photos/id/250/600/800",
  "https://picsum.photos/id/129/800/600",
  "https://picsum.photos/id/82/600/600",
  "https://picsum.photos/id/85/800/600",
  "https://picsum.photos/id/103/600/800",
  "https://picsum.photos/id/145/600/600",
  "https://picsum.photos/id/229/800/600",
  "https://picsum.photos/id/238/600/800",
  "https://picsum.photos/id/306/600/600",
  "https://picsum.photos/id/319/800/600",
];

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show only first 8 photos in the grid
  const visiblePhotos = photos.slice(0, 8);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, []);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, showNext, showPrev]);

  return (
    <section className="py-20 px-4 bg-wedding-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-script text-wedding-600 mb-4">Album Hình Cưới</h2>
          <p className="text-gray-500">Những khoảnh khắc hạnh phúc của chúng mình</p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {visiblePhotos.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative"
              onClick={() => openLightbox(index)}
            >
              <img src={src} alt={`Wedding Photo ${index + 1}`} className="w-full h-auto object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-black/50 rounded-full p-2">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                   </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {photos.length > 8 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => openLightbox(0)}
              className="inline-flex items-center px-8 py-3 bg-white border border-wedding-200 rounded-full text-wedding-600 font-semibold hover:bg-wedding-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-wedding-200/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Xem tất cả ảnh
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in-up duration-300">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button 
              onClick={showPrev}
              className="absolute left-2 md:left-8 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-40 hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button 
              onClick={showNext}
              className="absolute right-2 md:right-8 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-40 hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image Container */}
            <div className="relative w-full h-full p-4 flex items-center justify-center" onClick={closeLightbox}>
              <div 
                className="relative max-w-7xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} 
              >
                <img 
                  src={photos[currentIndex]} 
                  alt={`Wedding Photo ${currentIndex + 1}`} 
                  className="max-h-[85vh] max-w-full w-auto object-contain rounded-lg shadow-2xl mx-auto"
                />
                
                {/* Mobile Navigation Controls Overlay */}
                <div className="absolute inset-y-0 left-0 w-1/4 z-30 md:hidden" onClick={showPrev}></div>
                <div className="absolute inset-y-0 right-0 w-1/4 z-30 md:hidden" onClick={showNext}></div>
                
                {/* Counter */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white font-medium text-lg tracking-widest">
                  {currentIndex + 1} / {photos.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;