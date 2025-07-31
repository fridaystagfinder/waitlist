import React, { useState, useEffect } from 'react';
import { Share2, MessageCircle, X } from 'lucide-react';

export function StickyShareBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const shareUrl = window.location.origin;
  const shareText = "Just discovered FridayStag! 🎉 India's first stag-friendly platform for solos. Check it out:";

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30">
      <div className={`transition-all duration-300 ${isExpanded ? 'w-48' : 'w-12'}`}>
        {/* Main Share Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 mb-2"
          title="Share FridayStag"
        >
          <Share2 className="w-5 h-5 text-white" />
        </button>

        {/* Expanded Share Options */}
        {isExpanded && (
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-accent-purple/20">
            <div className="space-y-2">
              <p className="text-xs text-gray-300 mb-3 text-center">Share with friends</p>
              
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs rounded-md transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
              
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-black hover:bg-gray-800 text-white text-xs rounded-md transition-all duration-200 transform hover:scale-105"
              >
                <X className="w-3 h-3" />
                <span>X (Twitter)</span>
              </a>
              
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}