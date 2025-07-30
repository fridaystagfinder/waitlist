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
      <div className="logo-icon">
        <img 
          src="/Logo_FSF-removebg-preview.png" 
          alt="FridayStag Logo" 
          className="w-8 h-8 object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
        />
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