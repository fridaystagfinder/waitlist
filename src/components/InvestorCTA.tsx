import React from 'react';
import { ExternalLink, Users } from 'lucide-react';

export function InvestorCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-gray-900/95 to-gray-800/95 investor-cta">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm">
              <span className="text-white font-medium">Pre-Seed Funding Round: Investors Welcome.</span>
              <span className="text-gray-300 ml-2">Connect with the Founder.</span>
            </div>
          </div>
          
          <a
            href="https://www.linkedin.com/in/saibharadwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 investor-cta-button text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Connect</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
} 