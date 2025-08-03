import React, { useState } from 'react';
import { Mail, User, Phone, MapPin, CheckCircle, AlertCircle, Loader, MessageSquareHeart } from 'lucide-react';

interface WaitlistFormProps {
  onSuccess: (name: string) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  customCity: string;
  comments: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  consent?: string;
}

const predefinedCities = [
  'Hyderabad',
  'Delhi',
  'Bengaluru',
  'Pune',
  'Mumbai',
  'Goa',
  'Kolkata',
  'Chennai',
  'Vizag',
  'Other'
];

// --- START: HARDCODED SUPABASE VALUES ---
const supabaseUrl = 'https://gntvbngvllfinnympena.supabase.co';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdudHZibmd2bGxmaW5ueW1wZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk1MjcsImV4cCI6MjA2ODc3NTUyN30.ZgZWtoDFnGgVZHdxFa5R5OcC855mRjTZbQ7Ha4av8sY';
// --- END ---

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '9999999999',
    city: '',
    customCity: '',
    comments: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.city) {
      newErrors.city = 'City is required';
    } else if (formData.city === 'Other' && !formData.customCity.trim()) {
      newErrors.city = 'Please specify your city';
    }
    if (!formData.consent) {
      newErrors.consent = 'You must accept the privacy policy to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        city: formData.city === 'Other' ? formData.customCity.trim() : formData.city,
        comments: formData.comments.trim() || null,
        consent_given: formData.consent,
      };

      // Direct Supabase REST API call to bypass Edge Function caching issues
      const response = await fetch(`${supabaseUrl}/rest/v1/waitlist_new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
          'apikey': anonKey,
          'Prefer': 'return=representation',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setShowSuccessAnimation(true);
        setTimeout(() => {
          onSuccess(formData.name.trim());
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        console.error('Response status:', response.status);
        setSubmitError(errorData.error || errorData.message || 'Failed to join waitlist. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    if (value !== '') {
      let fieldError: string | undefined;
      
      switch (field) {
        case 'name':
          if (typeof value === 'string' && value.trim().length < 2) {
            fieldError = 'Name must be at least 2 characters';
          }
          break;
        case 'email':
          if (typeof value === 'string' && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            fieldError = 'Please enter a valid email address';
          }
          break;
        case 'phone':
          if (typeof value === 'string' && value.trim() && !/^\+?[\d\s\-\(\)]{10,}$/.test(value.trim())) {
            fieldError = 'Please enter a valid phone number';
          }
          break;
        case 'city':
          if (value === 'Other' && formData.customCity.trim() === '') {
            fieldError = 'Please specify your city';
          }
          break;
        case 'customCity':
          if (formData.city === 'Other' && typeof value === 'string' && value.trim() === '') {
            fieldError = 'Please specify your city';
          }
          break;
      }
      
      setErrors(prev => ({ ...prev, [field]: fieldError }));
    } else {
      // Clear error when field is empty
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <img
              src="/logo-mascot.png"
              alt="FridayStag Mascot"
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 12px rgba(139, 92, 246, 0.6))',
              }}
            />
          </div>
          
            <h2 className="section-title mb-4">
            Join the Stag Revolution
            </h2>

          {/* Combined Social Proof & Form Section */}
          <div className="glass-card p-8 md:p-12">
            {/* Social Proof Banner */}
            <div className="glass-card p-6 mb-8 bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-orange/20 border border-accent-purple/30">
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-orange">500+</div>
                  <div className="text-sm text-gray-300">Stags & Solo Women</div>
                </div>
                <div className="w-px h-12 bg-accent-purple/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-pink">9+</div>
                  <div className="text-sm text-gray-300">Cities</div>
                </div>
                <div className="w-px h-12 bg-accent-purple/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-purple">Sep 2025</div>
                  <div className="text-sm text-gray-300">Early Access</div>
                </div>
              </div>
              <p className="text-white font-semibold text-lg mb-2">
                🔑 Early Access is Opening Soon
              </p>
              <p className="text-gray-300 text-sm">
                Always free for users, safe & secured
              </p>
            </div>

                        {/* Form Content */}
            <div className="form-container">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="What should we call you?"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <div className="form-error">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <div className="form-error">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </label>
                <div className="mt-2 text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-accent-purple">🔒</span>
                  <span>For app notifications - feel free to use your real number (we respect privacy)</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="Or enter your real number for notifications"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <div className="form-error">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </div>
                )}
              </div>

              {/* City Field */}
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  <MapPin className="w-4 h-4" />
                  City *
                </label>
                <select
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  disabled={isSubmitting}
                >
                  <option value="">Select your city</option>
                  {predefinedCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>

                {formData.city === 'Other' && (
                  <input
                    type="text"
                    value={formData.customCity}
                    onChange={(e) => handleInputChange('customCity', e.target.value)}
                    className={`form-input mt-2 ${errors.city ? 'error' : ''}`}
                    placeholder="Enter your city"
                    disabled={isSubmitting}
                  />
                )}

                {errors.city && (
                  <div className="form-error">
                    <AlertCircle className="w-4 h-4" />
                    {errors.city}
                  </div>
                )}
              </div>

              {/* Comments Field */}
              <div className="form-group">
                <label htmlFor="comments" className="form-label">
                  <MessageSquareHeart className="w-4 h-4" />
                  Comments & Feedback (Optional)
                </label>
                <textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  className="form-input min-h-[80px] resize-none"
                  placeholder="Share your thoughts, suggestions, or any feedback..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Consent Checkbox */}
              <div className="form-group">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                    className="checkbox"
                    disabled={isSubmitting}
                  />
                  <label htmlFor="consent" className="checkbox-label">
                    I agree to the{' '}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>{' '}
                    and consent to data collection per India's DPDP Act, CCPA, and APPI. *
                  </label>
                </div>
                {errors.consent && (
                  <div className="form-error">
                    <AlertCircle className="w-4 h-4" />
                    {errors.consent}
                  </div>
                )}
              </div>

              {/* Submit Error */}
              {submitError && (
                <div className="p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-300 flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-purple to-accent-pink text-white font-semibold py-4 px-8 rounded-xl hover:from-accent-purple/90 hover:to-accent-pink/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Signing up...</span>
                  </div>
                ) : (
                  "Signup for Waitlist"
                )}
              </button>

              {/* Coming Soon to Mobile Apps */}
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm">
                <span>📱 Coming Soon to Android & iOS</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
              </div>

              <p className="text-center text-sm text-gray-400 mt-4">
                Always free, always private.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
      
      {/* Success Animation Overlay */}
      {showSuccessAnimation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 text-center border border-accent-purple/30 shadow-2xl animate-in fade-in duration-300">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            
            {/* Success Message */}
            <h3 className="text-2xl font-bold text-white mb-2">
              Welcome to the Revolution!
            </h3>
            <p className="text-gray-300 text-lg">
              You're now part of the stag-friendly movement
            </p>
            
            {/* Loading dots */}
            <div className="flex justify-center mt-6 space-x-1">
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-accent-pink rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-accent-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}