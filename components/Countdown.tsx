import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Target date: December 13, 2025
    const difference = +new Date("2025-12-13T00:00:00") - +new Date();
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-lg transition-transform transform hover:scale-110">
        <span className="text-xl md:text-3xl font-bold text-white font-serif">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-xs md:text-sm text-wedding-50 uppercase mt-2 tracking-widest font-medium drop-shadow-md">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center items-center mt-8 md:mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
       <TimeUnit value={timeLeft.days} label="Ngày" />
       <TimeUnit value={timeLeft.hours} label="Giờ" />
       <TimeUnit value={timeLeft.minutes} label="Phút" />
       <TimeUnit value={timeLeft.seconds} label="Giây" />
    </div>
  );
};

export default Countdown;