import React from 'react';

interface LogoProps {
  onClick?: () => void;
  variant?: 'full' | 'mascot'; // 'full' = mascot + text, 'mascot' = mascot only
  size?: number; // px, for mascot; full logo is responsive
}

export function Logo({ onClick, variant = 'full', size = 48 }: LogoProps) {
  if (variant === 'full') {
    // Full logo for header - mascot + text + tagline
    return (
      <div
        className="logo-container logo-full"
        onClick={onClick}
        role="button"
        tabIndex={0}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          userSelect: 'none',
        }}
      >
        <img
          src="/logo-mascot.png"
          alt="FridayStag Mascot"
          style={{
            width: size,
            height: size,
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))',
          }}
        />
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          justifyContent: 'center',
          minWidth: 0,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
          }}>
            <span
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: 32,
                background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 25%, #48dbfb 50%, #ff9ff3 75%, #ff6b6b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                fontWeight: 600,
                letterSpacing: 0.5,
                textShadow: '0 0 12px rgba(255, 107, 107, 0.4)',
                filter: 'drop-shadow(0 0 4px rgba(255, 107, 107, 0.3))',
              }}
            >
              FridayStag
            </span>
            <div
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: 14,
                marginTop: 1,
                fontWeight: 600,
                letterSpacing: 0.3,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                width: '100%',
                justifyContent: 'flex-start',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 8px rgba(139, 92, 246, 0.4)',
              }}
            >
              <span>Solo? You're</span>
              <span style={{ 
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: 0.5,
                textShadow: '0 0 8px rgba(236, 72, 153, 0.6)',
                filter: 'drop-shadow(0 0 2px rgba(236, 72, 153, 0.4))',
              }}>IN.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mascot only for nav/header/icon
  return (
    <div
      className="logo-container logo-mascot"
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <img
        src="/logo-mascot.png"
        alt="FridayStag Mascot"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))',
        }}
      />
    </div>
  );
}