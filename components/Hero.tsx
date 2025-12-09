import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      {/* Parallax Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://picsum.photos/id/342/1920/1080")', 
          transform: `translateY(${offset * 0.5}px)`,
          filter: 'brightness(0.55) contrast(1.1)'
        }}
      ></div>

      {/* Decorative Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-wedding-50/20 z-1"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 animate-fade-in-up w-full max-w-4xl mx-auto">
        <p className="text-xl md:text-3xl font-script text-wedding-gold mb-2 tracking-wider animate-float text-glow">
          Save the Date
        </p>
        
        <div className="mb-6 relative">
          <h1 className="text-5xl md:text-8xl font-script text-white drop-shadow-2xl leading-tight">
            Tuấn Anh <br className="md:hidden" />
            <span className="text-4xl align-middle px-2 text-wedding-200">&</span>
            <br className="md:hidden" /> Kiều Anh
          </h1>
        </div>

        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-wedding-300 to-transparent mx-auto mb-8"></div>
        
        <p className="text-xl md:text-3xl font-serif uppercase tracking-[0.3em] mb-4 text-wedding-50 font-light">
          13 . 12 . 2025
        </p>
        
        <p className="text-base md:text-lg font-sans font-light italic opacity-90 mb-8 max-w-xl mx-auto">
          "Hạnh phúc là khi chúng ta cùng nhau già đi."
        </p>

        {/* Countdown Timer */}
        <Countdown />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 text-white/70 hover:text-white transition-colors cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-wedding-50 to-transparent z-5"></div>
    </div>
  );
};

export default Hero;