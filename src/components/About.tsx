import React from 'react';
import { Globe, Shield, Sparkles, Target, DollarSign, Users } from 'lucide-react';

export function About() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 md:p-12 text-center mb-12">
          <h2 className="section-title">
            Why FridayStag?
          </h2>
          <p className="section-subtitle">
            Built for solos, not groups. Break free from awkward restrictions and finally go out on your terms—whether it's for fun, work, or a new connection. Privacy-first, always. No fake romance, no paid upgrades, no crowd manipulation—just real people, real places, always free for users.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card glass-card">
            <div className="about-card-title">
              <Shield className="w-8 h-8" />
              Safe, Stigma-Free Nightlife
            </div>
            <div className="about-card-content">
              No more "stags not allowed" signs. Our community-powered safety features and verified venues ensure you can explore confidently, whether you're looking for a quiet café or a vibrant nightclub.
            </div>
          </div>

          <div className="about-card glass-card">
            <div className="about-card-title">
              <Users className="w-8 h-8" />
              Real Connections Over Endless Swipes
            </div>
            <div className="about-card-content">
              Friday-only matching means quality over quantity. Connect with people who actually want to meet up, not just collect matches. Real conversations, real meetups, real connections.
            </div>
          </div>

          
          <div className="about-card glass-card">
            <div className="about-card-title">
              <Target className="w-8 h-8" />
              Community-Powered Trust and Safety
            </div>
            <div className="about-card-content">
              Built by solos, for solos. Our community rates venues, shares safety tips, and looks out for each other. Your data stays with you—never shared or sold.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}