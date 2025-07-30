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
            filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.3))',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
          <span
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: 30,
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2,
              fontWeight: 600,
              letterSpacing: 0.3,
              textShadow: '0 0 8px rgba(139, 92, 246, 0.3)',
            }}
          >
            FridayStag
          </span>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 11,
              marginTop: 1,
              fontWeight: 600,
              letterSpacing: 0.2,
              textAlign: 'left',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <span style={{ color: '#8b5cf6', fontWeight: 500 }}>Solo? You're</span>
            <span style={{ 
              fontWeight: 800, 
              color: '#ec4899', 
              textTransform: 'uppercase',
              fontSize: 12,
              letterSpacing: 0.5,
              textShadow: '0 0 4px rgba(236, 72, 153, 0.5)'
            }}>IN.</span>
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
          filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.3))',
        }}
      />
    </div>
  );
}