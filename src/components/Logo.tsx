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
            filter: 'drop-shadow(0 0 8px #0ff) drop-shadow(0 0 16px #f0f)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: 28,
              color: '#00fff7',
              textShadow: '0 0 12px #0ff, 0 0 24px #f0f',
              lineHeight: 1,
              background: 'linear-gradient(90deg, #00fff7 60%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            FridayStag
          </span>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 12,
              color: '#fff',
              marginTop: -2,
              textShadow: '0 0 8px #0ff, 0 0 16px #f0f',
              letterSpacing: 0.5,
            }}
          >
            <span style={{ fontWeight: 400, color: '#00fff7' }}>Solo? You're </span>
            <span style={{ fontWeight: 900, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>IN.</span>
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
          filter: 'drop-shadow(0 0 8px #0ff) drop-shadow(0 0 16px #f0f)',
        }}
      />
    </div>
  );
}