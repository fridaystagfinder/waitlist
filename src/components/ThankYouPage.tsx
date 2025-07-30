import React, { useEffect, useState } from 'react';
import { CheckCircle, Home, Mail, Star, Users } from 'lucide-react';

interface ThankYouPageProps {
  userName: string;
  onBackToHome: () => void;
}

export function ThankYouPage({ userName, onBackToHome }: ThankYouPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="thank-you-container">
      {/* Animated Background */}
      <div className="nightlife-bg">
        <div className="city-lights"></div>
      </div>

      <div className={`thank-you-card glass-card transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        {/* Success Icon */}
        <div className="success-icon">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>

        {/* Thank You Message */}
        <h1 className="thank-you-title">
          Welcome to Your Stag Life, {userName}!
        </h1>
        <p className="thank-you-message">
          You're officially part of the FridayStag pre-launch. You will be the first to be notified of the app launch with amazing perks. Get ready to unleash your stag life!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400 mb-8">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Confirmation email sent</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>VIP access granted</span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-6 text-center">
            <div className="feature-icon mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Stay Connected</h3>
            <p className="feature-description">Follow us on social media for updates and exclusive previews</p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="feature-icon mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="feature-title">Early Access</h3>
            <p className="feature-description">Priority access to beta features and exclusive Friday events</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <button
            onClick={onBackToHome}
            className="cta-button"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          <p className="text-sm text-gray-500">
            Questions? Reach out to us at{' '}
            <a href="mailto:hello@fridaystag.com" className="text-purple-400 hover:text-orange-400 underline">
              hello@fridaystag.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}