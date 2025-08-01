import React, { useState } from 'react';
import { Gift, X } from 'lucide-react';

export function GiftBox() {
  const [isClicked, setIsClicked] = useState(false);
  const [isExploded, setIsExploded] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Start explosion animation after a short delay
    setTimeout(() => {
      setIsExploded(true);
    }, 500);
  };

  const handleClose = () => {
    setIsClicked(false);
    setIsExploded(false);
  };

  return (
    <>
      {/* Small gift box in bottom right corner */}
      {!isClicked && (
        <button
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-accent-purple to-accent-pink p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <Gift className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Overlay when clicked */}
      {isClicked && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className={`relative ${isExploded ? 'animate-pulse' : 'animate-bounce'}`}>
            {/* Gift box that moves to center and gets bigger */}
            <div className={`bg-gradient-to-r from-accent-purple to-accent-pink p-8 rounded-2xl shadow-2xl transition-all duration-500 ${
              isExploded ? 'scale-150' : 'scale-100'
            }`}>
              <Gift className="w-16 h-16 text-white" />
            </div>

            {/* Explosion particles */}
            {isExploded && (
              <>
                <div className="absolute inset-0 animate-ping">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-3 h-3 bg-pink-400 rounded-full absolute top-4 left-1/4"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full absolute top-4 right-1/4"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full absolute bottom-4 left-1/3"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full absolute bottom-4 right-1/3"></div>
                </div>
              </>
            )}

            {/* Message popup */}
            {isExploded && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-gray-900/95 backdrop-blur-sm rounded-xl p-6 text-center border border-accent-purple/30 shadow-2xl max-w-sm">
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="text-white space-y-3">
                  <h3 className="text-xl font-bold text-accent-purple">
                    Congrats! You've unlocked early access perks! 🎁
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Fill the waitlist form now – your exclusive spot is reserved.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Perks arrive when FridayStag launches in your city.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
} 