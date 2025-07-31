import React from 'react';
import { Shield, Users, Target, ArrowRight } from 'lucide-react';

interface AboutProps {
  onJoinWaitlist?: () => void;
}

export function About({ onJoinWaitlist }: AboutProps) {
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
        
        {/* Waitlist CTA Section */}
        {onJoinWaitlist && (
          <div className="glass-card p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Solo Experience?</h3>
            <p className="text-gray-300 mb-6">Join thousands of solos already on our waitlist</p>
            
            <button
              onClick={onJoinWaitlist}
              className="cta-button group mb-4"
            >
              <span>Join Waitlist Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Enticing waitlist text */}
            <div className="max-w-md mx-auto p-4 bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 rounded-xl border border-accent-purple/20">
              <p className="text-sm text-center text-gray-300 leading-relaxed">
                🎁 <span className="text-accent-purple font-semibold">Early access</span> + 
                <span className="text-accent-pink font-semibold"> exclusive perks</span> 
                <br />
                <span className="text-xs text-gray-400">(Limited-edition t-shirts, keychains & accessories)</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}