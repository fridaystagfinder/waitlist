import React from 'react';
import { Shield, Users, Target } from 'lucide-react';

export function About() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 md:p-12 text-center mb-12">
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
          
          <h2 className="section-title">
            Why FridayStag?
          </h2>
          <p className="section-subtitle">
            India's nightlife and urban spaces weren't built for solos. FridayStag changes that. We're building a new kind of urban access layer—for anyone who moves independently but wants to feel welcome. From solo after-work plans to Friday bar nights, we make it easier to step out, connect, and feel sorted. We're solving for access, trust, and a better way to be solo—without being alone.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card glass-card">
            <div className="about-card-title">
              <Shield className="w-8 h-8" />
              Safe, Stigma-Free Access
            </div>
            <div className="about-card-content">
              Break free from 'stags not allowed' and harassment. Verified venues and community-powered safety features like Women-Only Mode and SOS Shield let you explore confidently.
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-card-title">
              <Users className="w-8 h-8" />
              Friday-Only, Real Connections
            </div>
            <div className="about-card-content">
              Ditch endless dating swipes. Our exclusive Friday-Only Swipe connects verified solos for quality, platonic meetups—no romance pressure.
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-card-title">
              <Target className="w-8 h-8" />
              Trust & Privacy First
            </div>
            <div className="about-card-content">
              Built by solos, for solos. We prioritize your trust and privacy—venue verification, opt-in data sharing, and a commitment to keeping user data private. Forever free for users.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}