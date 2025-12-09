import React from 'react';
import ScrollReveal from './ScrollReveal';

const EventCard: React.FC<{
  title: string;
  time: string;
  date: string;
  location: string;
  address: string;
  mapQuery: string;
  image: string;
}> = ({ title, time, date, location, address, mapQuery, image }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-wedding-50">
    <div className="h-56 overflow-hidden relative group">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
        <h3 className="text-white font-serif text-3xl font-bold tracking-wide drop-shadow-md">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 text-wedding-600 mb-4 bg-wedding-50 p-3 rounded-lg w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-bold text-lg">{time} - {date}</span>
      </div>
      
      <div className="mb-6">
        <h4 className="font-bold text-xl text-gray-800 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wedding-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </h4>
        <p className="text-gray-600 text-sm ml-7 leading-relaxed">{address}</p>
      </div>
      
      {/* Embedded Google Map */}
      <div className="w-full h-48 rounded-lg overflow-hidden shadow-inner border border-gray-200">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
      </div>
      
      <div className="mt-4 text-center">
         <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm text-wedding-600 font-semibold hover:text-wedding-800 hover:underline"
         >
           Mở rộng bản đồ →
         </a>
      </div>
    </div>
  </div>
);

const WeddingEvents: React.FC = () => {
  return (
    <section className="py-24 bg-wedding-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-wedding-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-wedding-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-script text-wedding-600 mb-4">Sự Kiện Quan Trọng</h2>
            <p className="text-gray-500 font-sans text-lg">Mời bạn cùng đến chung vui với gia đình chúng mình</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal threshold={0.1}>
            <EventCard 
              title="Lễ Thành Hôn (Nhà Trai)"
              time="08:30"
              date="13/12/2025"
              location="Tư gia Nhà Trai"
              address="Xóm 2 - Thôn Phong Lạc - Xã Đông Tiền Hải - Tỉnh Hưng Yên"
              mapQuery="Xóm 2, Thôn Phong Lạc, Xã Đông Tiền Hải, Tỉnh Hưng Yên"
              image="https://picsum.photos/id/192/600/400"
            />
          </ScrollReveal>
          
          <ScrollReveal threshold={0.1} className="md:mt-12">
            <EventCard 
              title="Lễ Vu Quy (Nhà Gái)"
              time="09:00"
              date="13/12/2025"
              location="Tư gia Nhà Gái"
              address="Xóm 2 - Thôn Thượng - Xã Tiền Hải - Tỉnh Hưng Yên"
              mapQuery="Xóm 2, Thôn Thượng, Xã Tiền Hải, Tỉnh Hưng Yên"
              image="https://picsum.photos/id/402/600/400"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;