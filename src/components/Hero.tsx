import React from 'react';
import { MapPin, Users, Shield, ArrowRight } from 'lucide-react';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Content */}
        <div className="glass-card p-8 md:p-12 mb-12 text-center">
          <h1 className="hero-title">
            Unleash Your Stag Life!
          </h1>
          <p className="hero-subtitle">
            India's first platform for solos. Verified venues. Friday-only connections. Always free. Safe. Soulful.
          </p>
          
          {/* "Tired of this?" Section */}
          <div className="glass-card p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-accent-orange">Tired of this?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"Sorry, no stags allowed."</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"You're going alone?"</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"Is it even safe to go out solo?"</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">"Just need a place to work with Wi-Fi?"</span>
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
            className="cta-button group"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Cards */}
        <div className="feature-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Friday Swipe (24h)</h3>
            <p className="feature-description">Connect with verified solo goers exclusively on Fridays for 24 hours. No bots, no noise—just platonic, vibrant nights planned.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Stag-Friendly Venues</h3>
            <p className="feature-description">Discover verified bars, cafés, and co-working spaces where solo visitors are not just welcome—they're celebrated.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Safety Stack</h3>
            <p className="feature-description">Women-Only Mode, SOS Shield, and venue verification ensure every night out feels safe and sorted.</p>
          </div>
        </div>
      </div>
    </section>
  );
}