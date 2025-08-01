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
              India's first stag-friendly platform for solos
            </p>
            <div className="hero-features">
              <span className="feature-tag highlight-primary">✓ Verified Stag Friendly Venues (Day & Night)</span>
              <span className="feature-tag highlight-exclusive">✓ Friday-Swipe (Exclusive Feature)</span>
              <span className="feature-tag highlight-verified">✓ Verified Users - No Spammers</span>
              <span className="feature-tag highlight-unique">✓ Work from Cafe (or) Bar</span>
              <span className="feature-tag highlight-safety">✓ Women Only Mode</span>
              <span className="feature-tag highlight-security">✓ Improved SOS Shield (Safe & Secure)</span>
              <span className="feature-tag highlight-executive">✓ Executive Friendly (Not Another Dating App)</span>
            </div>
          
          {/* City Momentum Notification */}
          <div className="city-notification" id="cityNotification">
            <span className="notification-text">🚀 Bengaluru signing up fastest | Hyderabad catching up!</span>
          </div>
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
            <div className="mt-4 p-4 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-lg border border-accent-purple/30">
              <p className="text-accent-purple font-medium">
                We hear you. That's why we're building FridayStag.
              </p>
            </div>
          </div>

          <button
            onClick={onJoinWaitlist}
            className="cta-button group mb-4"
          >
            <span>Jump on the Waitlist</span>
            <span className="free-forever-badge">Free Forever!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
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