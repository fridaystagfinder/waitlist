import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';

interface ExitIntentPopupProps {
  isWaitlistPage?: boolean;
}

export function ExitIntentPopup({ isWaitlistPage = false }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeOnSite, setTimeOnSite] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Supabase config
  const supabaseUrl = 'https://gntvbngvllfinnympena.supabase.co';
  const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdudHZibmd2bGxmaW5ueW1wZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk1MjcsImV4cCI6MjA2ODc3NTUyN30.ZgZWtoDFnGgVZHdxFa5R5OcC855mRjTZbQ7Ha4av8sY';

  useEffect(() => {
    // Track time on site
    const timer = setInterval(() => {
      setTimeOnSite(prev => prev + 1);
    }, 1000);

    // Exit intent detection - only on waitlist page
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport (not sides/bottom) AND on waitlist page
      if (
        e.clientY <= 0 && 
        !hasShown && 
        timeOnSite >= 90 && // 90 seconds to read through waitlist content
        !isVisible &&
        isWaitlistPage // Only show on waitlist page
      ) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Mobile touch detection (scroll to top quickly) - only on waitlist page
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (
        window.scrollY < 100 && 
        lastScrollY > 200 && 
        !hasShown && 
        timeOnSite >= 90 &&
        !isVisible &&
        isWaitlistPage // Only show on waitlist page
      ) {
        setIsVisible(true);
        setHasShown(true);
      }
      lastScrollY = window.scrollY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown, timeOnSite, isVisible, isWaitlistPage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in both fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/exit_intent_signups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': anonKey,
          'Authorization': `Bearer ${anonKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.toLowerCase().trim(),
          page_url: window.location.href
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Supabase error:', response.status, errorData);
        throw new Error(`Failed to submit: ${response.status}`);
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);

    } catch (err) {
      console.error('Exit intent signup error:', err);
      setError('Unable to save signup. Please try the main waitlist form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl border border-accent-purple/30">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Join the FridayStag Waitlist</h2>
              <p className="text-gray-300 text-sm">
                Be first in line for <span className="text-accent-purple font-semibold">early access</span> + 
                <span className="text-accent-pink font-semibold"> exclusive launch perks</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-purple transition-colors"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-purple transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-purple to-accent-pink text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Limited-edition t-shirts, keychains & accessories included! 🎉
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-white transform rotate-45" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">You're In! 🎉</h2>
            <p className="text-gray-300 text-sm">
              Welcome to the FridayStag family! Check your email for exclusive updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}