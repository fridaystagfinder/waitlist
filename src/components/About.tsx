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
            Urban spaces often shut out solo individuals. India's nightlife and urban spaces weren't built for solos. FridayStag changes that. We're building a new kind of urban access layer—for anyone who moves independently but wants to feel welcome. From solo after-work plans to Friday bar nights, we make it easier to step out, connect, and feel sorted. We're solving for access, trust, and a better way to be solo—without being alone.
          </p>
          
          {/* Feature Highlights */}
          <div className="hero-features mt-8">
            <span className="feature-tag highlight-primary">✓ Verified Stag Friendly Venues (Day & Night)</span>
            <span className="feature-tag highlight-exclusive">✓ Friday-Swipe (Exclusive Feature)</span>
            <span className="feature-tag highlight-verified">✓ Verified Users - No Spammers</span>
            <span className="feature-tag highlight-unique">✓ Work from Cafe (or) Bar</span>
            <span className="feature-tag highlight-safety">✓ Women Only Mode</span>
            <span className="feature-tag highlight-security">✓ Improved SOS Shield (Safe & Secure)</span>
            <span className="feature-tag highlight-executive">✓ Executive Friendly (Not Another Dating App)</span>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card glass-card">
            <div className="about-card-title">
              <Shield className="w-8 h-8" />
              Access Where Others Exclude
            </div>
            <div className="about-card-content">
              Break free from 'stags not allowed' and awkward discovery. Verified venues and our exclusive Friday-Only Swipe connect you to experiences and people—no dating, just like-minded company.
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-card-title">
              <Users className="w-8 h-8" />
              Built for Your Safety & Peace of Mind
            </div>
            <div className="about-card-content">
              Your security matters. SOS Shield (WhatsApp-triggered), Women-Only Mode, and rigorous venue verification create a trusted environment for every solo user.
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-card-title">
              <Target className="w-8 h-8" />
              Forever Free, Forever Focused on You
            </div>
            <div className="about-card-content">
              Unlike apps that monetize users, we're free forever. We focus on connecting you to venues and fellow solos, including daytime work-from spots, not selling your data or pushing subscriptions.
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