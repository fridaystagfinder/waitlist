import React, { useEffect, useState } from 'react';
import { CheckCircle, Mail, Star, Users, Share2, MessageCircle } from 'lucide-react';

interface ThankYouPageProps {
  userName: string;
  onBackToHome: () => void;
}

export function ThankYouPage({ userName, onBackToHome }: ThankYouPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="thank-you-container">
      {/* Animated Background */}
      <div className="nightlife-bg">
        <div className="city-lights"></div>
      </div>

      <div className={`thank-you-card glass-card transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        {/* Success Icon */}
        <div className="success-icon">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>

        {/* Thank You Message */}
        <h1 className="thank-you-title">
          Welcome to Your Stag Life, {userName}!
        </h1>
        <p className="thank-you-message">
          You're officially part of the movement to make India solo-friendly! You will be the first to be notified of the app launch with amazing perks. Get ready to unleash your stag life!
        </p>
        
        {/* Exclusive Perks Section */}
        <div className="glass-card p-6 mb-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20">
          <div className="text-center mb-6">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">✨ Your Exclusive Perks Unlocked! ✨</h3>
            <p className="text-gray-300 text-sm mb-4">
              These premium features will be available when FridayStag launches in your city
            </p>
            <div className="text-purple-300 text-xs font-medium bg-purple-900/50 px-3 py-1 rounded-full inline-block">
              🚀 Launching September 2025
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Friday Swipe (Exclusive Feature)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Verified Stag Friendly Venues</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Work from Cafe/Bar</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Women Only Mode</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Improved SOS Shield (Safe & Secure)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Executive Friendly (Not Another Dating App)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Verified Users - No Spammers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Always Free for Users</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400 mb-8">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Confirmation email sent</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>VIP access granted</span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-6 text-center">
            <div className="feature-icon mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Stay Connected</h3>
            <p className="feature-description">Follow us on social media for updates and exclusive previews</p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="feature-icon mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Early Access</h3>
            <p className="feature-description">Priority access to beta features and exclusive Friday events</p>
          </div>
        </div>

        {/* Share Section */}
        <div className="glass-card p-6 mb-8">
          <div className="text-center mb-4">
            <Share2 className="w-8 h-8 text-accent-purple mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Help Us Grow! 🚀</h3>
            <p className="text-gray-300 text-sm">Share FridayStag with your solo friends and help build India's largest solo community</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/?text=Just joined FridayStag waitlist! 🎉 India's first stag-friendly platform for solos. Join me: ${window.location.origin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            
            <a
              href={`https://twitter.com/intent/tweet?text=Just joined FridayStag waitlist! 🎉 India's first stag-friendly platform for solos. Join the movement: ${window.location.origin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>
            
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Questions? Reach out to us at{' '}
            <a href="mailto:hello@fridaystag.com" className="text-purple-400 hover:text-orange-400 underline">
              hello@fridaystag.com
            </a>
          </p>
          
          <p className="text-xs text-gray-600">
            Use the navigation above to explore more about FridayStag!
          </p>
        </div>
      </div>
    </div>
  );
}