import React from 'react';
import { Instagram, Mail, MapPin, X, Linkedin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate?: (tab: 'home' | 'about' | 'waitlist' | 'privacy') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <h4>FridayStag</h4>
            <p>
              Unleash Your Stag Life. Built for solos, not groups.
            </p>
            <div className="flex items-center space-x-2 text-sm mt-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Hyderabad • Delhi • Bengaluru • Pune • Mumbai • Goa • Kolkata • Chennai • Vizag</span>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Your data stays with you—never shared or sold.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => onNavigate?.('home')}
                className="block hover:text-purple-400 transition-colors text-left w-full bg-transparent border-none cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate?.('about')}
                className="block hover:text-purple-400 transition-colors text-left w-full bg-transparent border-none cursor-pointer"
              >
                Why
              </button>
              <button 
                onClick={() => onNavigate?.('waitlist')}
                className="block hover:text-purple-400 transition-colors text-left w-full bg-transparent border-none cursor-pointer"
              >
                Waitlist
              </button>
              <button 
                onClick={() => onNavigate?.('privacy')}
                className="block hover:text-purple-400 transition-colors text-left w-full bg-transparent border-none cursor-pointer"
              >
                Privacy Policy
              </button>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a
                href="https://x.com/fridaystag"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Follow us on X (Twitter)"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/fridaystag"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/fridaystag"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="social-link"
                title="Follow us on TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="#"
                className="social-link"
                title="Add us on Snapchat"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@fridaystag.com"
                className="social-link"
                title="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="social-link"
                title="WhatsApp us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              hello@fridaystag.com
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 FridayStag.com | FridayStagFinder.com | App coming soon!</p>
        </div>
      </div>
    </footer>
  );
}