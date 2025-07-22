import React from 'react';
import { Globe, Shield, Sparkles, Target, DollarSign, Users } from 'lucide-react';

export function About() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 md:p-12 text-center mb-12">
          <h2 className="section-title">
            Redefining Solo Nightlife
          </h2>
          <p className="section-subtitle">
            FridayStag is a movement to empower urban solos—professionals, women, stags, remote workers, students, and venues—to own their Friday nights. Launched in India's $5B nightlife market, we connect you to stag-friendly bars and verified night owls with a free-forever app, powered by AI and safety-first tech.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card glass-card">
            <div className="about-card-title">
              <Target className="w-8 h-8" />
              Our Mission
            </div>
            <div className="about-card-content">
              To break nightlife barriers with curated venue listings, Friday-only swipe-to-match, and tools like SOS tracking, creating safe, epic experiences for urban solos in 9 Indian cities by October 2025.
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-card-title">
              <Globe className="w-8 h-8" />
              Global Vision
            </div>
            <div className="about-card-content">
              From Hyderabad's tech hubs to Austin's vibrant scene and Tokyo's neon nights, we're scaling to the US ($8B market) and Japan ($10B market), uniting adventure-seekers worldwide.
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12">
          <h3 className="section-title mb-8">
            Why FridayStag?
          </h3>
          <div className="stats-grid">
            <div className="stat-card glass-card">
              <div className="feature-icon mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h4 className="feature-title">Free Forever</h4>
              <p className="feature-description">No user fees—revenue comes from venue partnerships aiming for ₹12 Cr ARR by Q4 2025.</p>
            </div>

            <div className="stat-card glass-card">
              <div className="feature-icon mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="feature-title">Safe & Inclusive</h4>
              <p className="feature-description">Women-only options, OTP verification, and real-time safety alerts.</p>
            </div>

            <div className="stat-card glass-card">
              <div className="feature-icon mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="feature-title">AI-Powered</h4>
              <p className="feature-description">Smart venue recommendations tailored to your vibe and location.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}