import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Link to "I Do - 911" or a similar romantic wedding track
  // Since we cannot guarantee a specific copyrighted mp3 link persists, 
  // this uses a high-quality royalty-free romantic track as a placeholder.
  // USER: REPLACE THIS URL WITH YOUR DIRECT LINK TO "I DO - 911" MP3
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"; 
  // const audioUrl = "/path/to/your/IDo-911.mp3"; 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Playback prevented by browser autostart policy:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt auto-play on load (often blocked by browsers, but worth a try)
    if (audioRef.current) {
        audioRef.current.volume = 0.5; // Set volume to 50%
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    // Auto-play was prevented
                    console.log("Autoplay prevented. User interaction required.");
                    setIsPlaying(false);
                });
        }
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-[60] flex items-center gap-3">
      <audio ref={audioRef} src={audioUrl} loop />
      
      <button
        onClick={togglePlay}
        className={`relative group w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-white transition-all duration-300 ${
          isPlaying ? 'bg-wedding-500 text-white animate-spin-slow' : 'bg-white text-wedding-500 hover:scale-110'
        }`}
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying ? (
          // Pause / Playing Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          // Muted / Play Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
        
        {/* Pulse effect if not playing to attract attention */}
        {!isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-wedding-400 opacity-30 animate-ping"></span>
        )}
      </button>

      {/* Music Label (fades out when playing) */}
      <div className={`text-xs font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-wedding-600 transition-opacity duration-500 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        Music: I Do - 911
      </div>
    </div>
  );
};

export default MusicPlayer;
