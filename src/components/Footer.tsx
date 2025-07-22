import React from 'react';
import { Twitter, Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <h4>FridayStag</h4>
            <p>
              Unleashing stag life across India, US, and Japan. Join the nightlife revolution.
            </p>
            <div className="flex items-center space-x-2 text-sm mt-2">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad • Austin • Tokyo</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="block hover:text-purple-400 transition-colors">About</a>
              <a href="#waitlist" className="block hover:text-purple-400 transition-colors">Waitlist</a>
              <a href="/privacy-policy" className="block hover:text-purple-400 transition-colors">Privacy Policy</a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a
                href="https://twitter.com/fridaystag"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/fridaystag"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@fridaystag.com"
                className="social-link"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 FridayStag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}