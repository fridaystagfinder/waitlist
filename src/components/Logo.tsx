import React from 'react';

interface LogoProps {
  onClick?: () => void;
  variant?: 'full' | 'mascot'; // 'full' = mascot + text, 'mascot' = mascot only
  size?: number; // px, for mascot; full logo is responsive
}

export function Logo({ onClick, variant = 'mascot', size = 48 }: LogoProps) {
  if (variant === 'full') {
    // Full logo for hero/large spaces
    return (
      <div
        className="logo-container logo-full"
        onClick={onClick}
        role="button"
        tabIndex={0}
        style={{
          maxWidth: 420,
          width: '100%',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          userSelect: 'none',
        }}
      >
        <img
          src="/logo-mascot.png"
          alt="FridayStag Mascot"
          style={{
            width: 120,
            height: 120,
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 32px #0ff) drop-shadow(0 0 64px #f0f)',
            marginBottom: 8,
          }}
        />
        <div style={{ textAlign: 'center', width: '100%' }}>
          <span
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: 54,
              color: '#00fff7',
              textShadow: '0 0 24px #0ff, 0 0 48px #f0f',
              display: 'block',
              lineHeight: 1.1,
              letterSpacing: 1,
              marginBottom: 0,
              background: 'linear-gradient(90deg, #00fff7 60%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            FridayStag
          </span>
          {/* SVG curve for underline */}
          <svg width="220" height="18" viewBox="0 0 220 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto -2px auto' }}>
            <path d="M10 10 Q110 28 210 10" stroke="#00fff7" strokeWidth="3" fill="none" filter="url(#glow)" />
            <defs>
              <filter id="glow" x="-10" y="-10" width="240" height="40">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 22,
              color: '#fff',
              marginTop: 0,
              textShadow: '0 0 12px #0ff, 0 0 24px #f0f',
              letterSpacing: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontWeight: 400, color: '#00fff7', letterSpacing: 0.5 }}>Solo? You’re <span style={{ fontWeight: 900, color: '#fff', letterSpacing: 2, textTransform: 'uppercase', fontSize: 24 }}>IN.</span></span>
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