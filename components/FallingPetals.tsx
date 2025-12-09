import React, { useEffect, useState } from 'react';

// Simple SVG shape for a rose petal
const PetalSVG = ({ color }: { color: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))' }}
  >
    <path
      d="M15 0C15 0 16.5 9 24 12C31.5 15 25.5 24 15 30C4.5 24 -1.5 15 6 12C13.5 9 15 0 15 0Z"
      fill={color}
    />
  </svg>
);

const colors = [
  '#f43f5e', // wedding-500
  '#fb7185', // wedding-400
  '#fda4af', // wedding-300
  '#ffe4e6', // wedding-100 (very light)
  '#e11d48', // wedding-600 (darker red)
];

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate random petals
    const petalCount = 25;
    const newPetals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100, // Random horizontal position 0-100%
        delay: Math.random() * 10, // Random delay up to 10s
        duration: 10 + Math.random() * 10, // Random fall duration 10-20s (slow)
        size: 15 + Math.random() * 15, // Random size 15-30px
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-full w-full">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s, ${3 + Math.random() * 2}s`, // Fall duration, Sway duration
            animationDelay: `${petal.delay}s, ${Math.random() * 5}s`,
            opacity: 0.8,
          }}
        >
          <PetalSVG color={petal.color} />
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
