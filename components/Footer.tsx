import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wedding-600 text-white py-8 text-center">
      <h2 className="text-3xl font-script mb-2">Nam & Linh</h2>
      <p className="text-wedding-200 text-sm mb-4">Thank you for celebrating with us!</p>
      <div className="text-xs opacity-60">
        © 2024 Wedding Invitation. Designed with Love.
      </div>
    </footer>
  );
};

export default Footer;