import React from 'react';
import ScrollReveal from './ScrollReveal';

const GiftSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-script text-wedding-600 mb-6">Hộp Mừng Cưới</h2>
          <p className="text-gray-500 mb-16 max-w-xl mx-auto text-lg leading-relaxed">
            Sự hiện diện của bạn là món quà quý giá nhất đối với chúng mình. <br/>
            Nếu bạn muốn gửi quà mừng từ xa, xin hãy tham khảo thông tin bên dưới nhé.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Groom's QR */}
          <ScrollReveal threshold={0.2} className="h-full">
            <div className="bg-white p-8 rounded-3xl border-2 border-wedding-50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center group">
              <div className="w-56 h-56 bg-wedding-50 p-3 rounded-2xl shadow-inner mb-6 flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 border-2 border-dashed border-wedding-200 rounded-2xl m-2"></div>
                 {/* Placeholder for QR Code */}
                 <img src="https://picsum.photos/id/1025/200/200" alt="Mã QR Chú Rể" className="w-full h-full object-cover rounded-xl mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-1">Mừng cưới Chú Rể</h3>
              <p className="text-wedding-500 font-bold text-lg mb-4">Tuấn Anh</p>
              
              <div className="w-full pt-4 border-t border-gray-100 text-center">
                  <p className="text-gray-500 text-sm mb-1">Ngân hàng</p>
                  <p className="font-bold text-gray-800 text-lg mb-3">MB Bank</p>
                  
                  <p className="text-gray-500 text-sm mb-1">Số tài khoản</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="font-mono font-bold text-wedding-600 text-xl tracking-wider">9999 8888 6666</p>
                    <button className="text-gray-400 hover:text-wedding-500" title="Sao chép">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                       </svg>
                    </button>
                  </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bride's QR */}
          <ScrollReveal threshold={0.2} className="h-full">
            <div className="bg-white p-8 rounded-3xl border-2 border-wedding-50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center group">
              <div className="w-56 h-56 bg-wedding-50 p-3 rounded-2xl shadow-inner mb-6 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 border-2 border-dashed border-wedding-200 rounded-2xl m-2"></div>
                {/* Placeholder for QR Code */}
               <img src="https://picsum.photos/id/1024/200/200" alt="Mã QR Cô Dâu" className="w-full h-full object-cover rounded-xl mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-1">Mừng cưới Cô Dâu</h3>
              <p className="text-wedding-500 font-bold text-lg mb-4">Kiều Anh</p>
              
              <div className="w-full pt-4 border-t border-gray-100 text-center">
                  <p className="text-gray-500 text-sm mb-1">Ngân hàng</p>
                  <p className="font-bold text-gray-800 text-lg mb-3">Techcombank</p>
                  
                  <p className="text-gray-500 text-sm mb-1">Số tài khoản</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="font-mono font-bold text-wedding-600 text-xl tracking-wider">1111 2222 3333</p>
                    <button className="text-gray-400 hover:text-wedding-500" title="Sao chép">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                       </svg>
                    </button>
                  </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;