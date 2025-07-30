import React from 'react';
import { Quote } from 'lucide-react';

export function FounderQuote() {
  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-pink/5 rounded-2xl"></div>
          
          {/* Quote icon */}
          <div className="relative z-10 mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30">
              <Quote className="w-8 h-8 text-accent-purple" />
            </div>
          </div>
          
          {/* Quote text */}
          <blockquote className="relative z-10 text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
            <span className="text-accent-purple">"</span>
            The world is yours, even if you're alone.
            <span className="text-accent-pink">"</span>
          </blockquote>
          
          {/* Author */}
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full"></div>
            <cite className="not-italic">
              <div className="text-lg font-semibold text-white">Sai Bharadwaj</div>
              <div className="text-sm text-gray-400 font-medium">Founder, FridayStag.com</div>
            </cite>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-accent-purple rounded-full opacity-60"></div>
          <div className="absolute top-8 right-6 w-1 h-1 bg-accent-pink rounded-full opacity-40"></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-accent-purple rounded-full opacity-50"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-accent-pink rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
}