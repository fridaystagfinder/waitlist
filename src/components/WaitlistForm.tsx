import React, { useState } from 'react';
import { Mail, User, Phone, MapPin, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface WaitlistFormProps {
  onSuccess: (name: string) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  customCity: string;
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
    phone: '',
    city: '',
    customCity: '',
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
        consent_given: formData.consent,
      };

      const response = await fetch(`${supabaseUrl}/functions/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
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
        setSubmitError(errorData.error || 'Failed to join waitlist. Please try again.');
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

          {/* Social Proof Banner */}
          <div className="glass-card p-6 mb-8 bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-orange/20 border border-accent-purple/30">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-orange">500+</div>
                <div className="text-sm text-gray-300">Stags & Solo Women</div>
              </div>
              <div className="w-px h-12 bg-accent-purple/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-pink">9</div>
                <div className="text-sm text-gray-300">Major Cities</div>
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
              Get in early for Friday Swipes, stag-friendly venues, safety stack—and exclusive perks!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div id="waitlist-form" className="glass-card p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">Ready to Join?</h3>
            <p className="text-gray-300 text-sm">
              Jump on the waitlist—always free, always private.
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-accent-purple/15 to-accent-pink/15 rounded-xl border border-accent-purple/30">
              <p className="text-accent-purple text-sm font-semibold text-center">
                🎁 Early access + exclusive perks (t-shirts, keychains & more)
              </p>
            </div>
            
            {/* Social Proof */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-400">
                Join <span className="text-accent-orange font-semibold">500+ early members</span> already on the waitlist
              </p>
            </div>
          </div>

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
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="Enter your phone number"
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
                className={`cta-button w-full ${isSubmitting ? 'loading' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    <span>Joining the Revolution...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Join the Revolution</span>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                Always free, always private.
              </p>
            </form>
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