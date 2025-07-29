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
            Solo? You're IN.
          </h1>
          <p className="hero-subtitle">
            India's first free app for solos—find stag-friendly venues, swipe for real Friday connections, and party safe. Alone, never lonely.
          </p>
          
          {/* Who's it for checklist */}
          <div className="glass-card p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-accent-gold">Who's it for?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">Tired of stag restrictions?</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">Want safe Friday nights?</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">Need a friendly Wi-Fi café?</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">New in town or on a budget?</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">Looking for real connections, not just dating?</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-sm text-gray-300">Prefer to step out with just one match?</span>
              </div>
            </div>
          </div>

          <button
            onClick={onJoinWaitlist}
            className="cta-button group"
          >
            <span>Unleash Your Stag Life</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-sm text-gray-400 mt-4">
            Always free. Users never pay.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="feature-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Friday-Only Swipe</h3>
            <p className="feature-description">24-hour matching for check-ins every Friday at 6 PM.</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Stag-Friendly Venues</h3>
            <p className="feature-description">Curated and rated spots that welcome you solo. No more "stags not allowed."</p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Safety & Work</h3>
            <p className="feature-description">Women-Only Mode, instant SOS alerts, and work-friendly venues for remote pros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}