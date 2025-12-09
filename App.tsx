import React from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingEvents from './components/WeddingEvents';
import Gallery from './components/Gallery';
import AiWishHelper from './components/AiWishHelper';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import FallingPetals from './components/FallingPetals';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Global Effects */}
      <FallingPetals />
      <MusicPlayer />

      <Hero />
      <OurStory />
      <div id="events">
        <WeddingEvents />
      </div>
      <Gallery />
      <div id="wishes">
        <AiWishHelper />
      </div>
      <GiftSection />
      <Footer />
    </div>
  );
}

export default App;
