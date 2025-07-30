import React from 'react';

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <div 
      className="logo-container cursor-pointer transition-transform hover:scale-105" 
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="logo-icon nightlife-logo">
        <img 
          src="/Logo_FSF-removebg-preview.png" 
          alt="FridayStag Logo" 
          className="w-8 h-8 object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
        />
        {/* Animated glow effect */}
        <div className="logo-glow"></div>
        <div className="logo-sparkle sparkle-1"></div>
        <div className="logo-sparkle sparkle-2"></div>
        <div className="logo-sparkle sparkle-3"></div>
      </div>
      <div>
        <h1 className="logo-text nightlife-text">
          FridayStag
        </h1>
        <p className="logo-tagline nightlife-slogan">Solo? You're IN.</p>
      </div>
    </div>
  );
}