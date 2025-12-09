import React from 'react';
import ScrollReveal from './ScrollReveal';

const OurStory: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-script text-wedding-600 mb-6">Cô Dâu & Chú Rể</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-sans text-lg">
            Hai mảnh ghép hoàn hảo đã tìm thấy nhau giữa thế giới bao la này.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Groom */}
        <ScrollReveal className="flex flex-col items-center text-center group" threshold={0.2}>
          <div className="relative w-64 h-64 mb-8 rounded-full overflow-hidden border-4 border-wedding-200 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2">
            <img 
              src="https://picsum.photos/id/1005/500/500" 
              alt="Chú rể Tuấn Anh" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-4xl font-serif text-gray-800 mb-2">Tuấn Anh</h3>
          <p className="text-wedding-500 font-bold uppercase tracking-widest text-sm mb-4">Chú Rể</p>
          <div className="w-12 h-1 bg-wedding-300 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-xs italic text-base leading-relaxed">
            "Chàng trai điềm đạm, ấm áp, luôn là chỗ dựa vững chắc cho gia đình nhỏ."
          </p>
        </ScrollReveal>

        {/* Heart Divider */}
        <ScrollReveal className="text-wedding-400 text-5xl animate-pulse-slow hidden md:block">
          ♥
        </ScrollReveal>

        {/* Bride */}
        <ScrollReveal className="flex flex-col items-center text-center group" threshold={0.2}>
          <div className="relative w-64 h-64 mb-8 rounded-full overflow-hidden border-4 border-wedding-200 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
            <img 
              src="https://picsum.photos/id/64/500/500" 
              alt="Cô dâu Kiều Anh" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-4xl font-serif text-gray-800 mb-2">Kiều Anh</h3>
          <p className="text-wedding-500 font-bold uppercase tracking-widest text-sm mb-4">Cô Dâu</p>
          <div className="w-12 h-1 bg-wedding-300 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-xs italic text-base leading-relaxed">
            "Cô gái dịu dàng, đảm đang, người giữ lửa hạnh phúc cho tổ ấm."
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OurStory;