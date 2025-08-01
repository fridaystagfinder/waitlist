import React, { useState } from 'react';
import { Gift } from 'lucide-react';

const GiftBox: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    // Hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Message that appears above the gift box */}
      {showMessage && (
        <div className="absolute bottom-16 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse mb-2 whitespace-nowrap">
          <div className="text-sm font-medium">Signup to unlock your exclusive gift</div>
          {/* Small arrow pointing down */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
        </div>
      )}
      
      {/* Bouncing gift box */}
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:scale-110"
        style={{ animationDuration: '2s' }}
      >
        <Gift className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default GiftBox; 