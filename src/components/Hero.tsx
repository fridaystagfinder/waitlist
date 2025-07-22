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
            Swipe, Match, Explore Safely
          </h1>
          <p className="hero-subtitle">
            FridayStag is India's first platform for urban solos, connecting you to verified stag-friendly bars and like-minded night owls every Friday night. With safety-first features like SOS tracking and women-only options, transform your solo adventures into epic nights in Hyderabad, Bengaluru, Delhi, and beyond.
          </p>
          
          <button
            onClick={onJoinWaitlist}
            className="cta-button group"
          >
            <span>Join the Stag Revolution!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Cards */}
        <div className="feature-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Discover Stag-Friendly Venues</h3>
            <p className="feature-description">Find premium bars and clubs that welcome solos, powered by AI recommendations and geolocation.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Connect on Fridays</h3>
            <p className="feature-description">Swipe to match with verified users for platonic nightlife vibes, live every Friday at 6 PM.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Own Your Night Safely</h3>
            <p className="feature-description">Enjoy advanced verification, real-time SOS alerts, and community-driven safety ratings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}