import React from 'react';
import { ExternalLink, Users, Linkedin, X, ArrowRight } from 'lucide-react';

export function InvestorCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-gray-900/95 to-gray-800/95 investor-cta">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm flex items-center">
              <span className="text-white font-medium">Pre-Seed Funding: Investors Welcome</span>
              <ArrowRight className="w-3 h-3 text-accent-purple mx-2" />
              <span className="text-gray-300">Connect with the Founder</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/saibharadwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 investor-cta-button text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Connect</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/saibharadwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-105"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            
            <a
              href="https://www.x.com/saibharadwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-105"
              title="Follow on X (Twitter)"
            >
              <X className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 