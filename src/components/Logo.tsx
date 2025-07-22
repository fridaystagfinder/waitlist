import React from 'react';
import { Star } from 'lucide-react';

export function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <Star className="w-6 h-6 text-white fill-white" />
      </div>
      <div>
        <h1 className="logo-text">
          FridayStag
        </h1>
        <p className="logo-tagline">Unleash Your Stag Life!</p>
      </div>
    </div>
  );
}