import React from 'react';
import { MapPin, Users, Shield, ArrowRight, Coffee } from 'lucide-react';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Content */}
        <div className="glass-card p-8 md:p-12 mb-16 text-center">
          {/* Glowing Mascot */}
          <div className="mb-6 flex justify-center">
            <img
              src="/logo-mascot.png"
              alt="FridayStag Mascot"
              style={{
                width: 80,
                height: 80,
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))',
              }}
            />
          </div>
          
          <h1 className="hero-title">
            Unleash Your Stag Life!
          </h1>
          <div className="hero-subtitle-container">
            <p className="hero-subtitle-main">
              India's first stag friendly platform for stags & solo women
          </p>
          </div>
          
          {/* "Tired of this?" Section */}
          <div className="glass-card p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-accent-orange">Tired of this?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"Why can't I book a table for one?"</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"Is it even safe to go out solo?"</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"Sorry, no stags allowed."</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"Just need a place to work with Wi-Fi?"</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"I'm new to the city, where are the solo-friendly venues?"</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"You're going alone?"</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                We hear you. That's why we're building FridayStag - to solve these exact problems and make solo experiences better for everyone.
              </p>
            </div>
          </div>

          <button
            onClick={onJoinWaitlist}
            className="cta-button group mb-4"
          >
            <span>Join the Waitlist</span>
            <span className="free-forever-badge">Free Forever!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Coming Soon to Mobile Apps */}
          <div className="flex items-center justify-center gap-2 mb-4 text-gray-400 text-sm">
            <span>📱 Coming Soon to Android & iOS</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            </div>
          </div>
          
          {/* Enticing waitlist text */}
          <div className="max-w-md mx-auto p-3 bg-gray-800/30 rounded-lg">
            <p className="text-sm text-center text-gray-400 leading-relaxed">
              🎁 Early access + exclusive perks
              <br />
              <span className="text-xs text-gray-500">(Limited-edition t-shirts, keychains & accessories)</span>
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="feature-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Friday Swipe (24h Only)</h3>
            <p className="feature-description">Connect with verified solo goers exclusively on Fridays. No dating app—just vibrant nights with like-minded company.</p>
            <div className="free-badge">Always Free</div>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Stag & Solo-Friendly Venues</h3>
            <p className="feature-description">Discover verified bars, lounges, and cafés that welcome solo visitors. No more 'stags not allowed' restrictions.</p>
            <div className="safety-badge">Safety Verified</div>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Work-from-Cafe + Bar Mode</h3>
            <p className="feature-description">Transform any venue into your office. Wi-Fi, power outlets, quality food—while building footfall for venues during off-peak hours.</p>
            <div className="unique-badge">Unique Feature</div>
          </div>
        </div>
      </div>
    </section>
  );
}