import React from 'react';
import { Instagram, Mail, MapPin, X } from 'lucide-react';

export function Footer() {
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
              <MapPin className="w-4 h-4" />
              <span>Hyderabad • Delhi • Bengaluru • Pune • Mumbai • Goa • Kolkata • Chennai • Vizag</span>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Confidential — Not for distribution. Your data stays with you—never shared or sold.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="block hover:text-purple-400 transition-colors">Why</a>
              <a href="#waitlist" className="block hover:text-purple-400 transition-colors">Waitlist</a>
              <a href="/privacy-policy" className="block hover:text-purple-400 transition-colors">Privacy Policy</a>
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
              >
                <X className="w-5 h-5" />
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
            <p className="text-sm text-gray-400 mt-3">
              hello@fridaystag.com
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 FridayStag. All rights reserved. Confidential - Not for distribution without permission.</p>
        </div>
      </div>
    </footer>
  );
}