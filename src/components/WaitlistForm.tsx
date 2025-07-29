import React, { useState } from 'react';
import { Mail, User, Phone, MapPin, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

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
  city?: string;
  consent?: string;
}

const predefinedCities = [
  'Hyderabad',
  'Bengaluru',
  'Delhi',
  'Mumbai',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Other'
];

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    customCity: '',
    comments: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/functions/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || undefined,
          city: formData.city === 'Other' ? formData.customCity.trim() : formData.city,
          comments: formData.comments.trim() || undefined,
          consent_given: formData.consent,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onSuccess(formData.name.trim());
      } else {
        setSubmitError(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    setSubmitError('');
  };

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="section-title mb-4">
              Who's joining us?
            </h2>
            
            {/* User testimonial */}
            <div className="glass-card p-6 mb-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-accent-gold to-accent-purple rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-accent-pink to-accent-gold rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-accent-gold font-medium italic">
                "Finally, I can plan nights out with confidence!"
              </p>
              <p className="text-sm text-gray-400 mt-2">— actual beta user</p>
            </div>
            
            {/* Progress indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-2 text-accent-purple">
                <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Thousands already on our waitlist</span>
                <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <p className="section-subtitle">
              Join the waitlist for early access to India's first solo-friendly nightlife app. No fees, no fake profiles, just real connections.
            </p>
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
                  placeholder="Enter your full name"
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
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">Include country code for better experience</p>
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
                  <MessageSquare className="w-4 h-4" />
                  Comments & Feedback (Optional)
                </label>
                <textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  className="form-input min-h-[120px] resize-y"
                  placeholder=""
                  disabled={isSubmitting}
                  rows={4}
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
                className={`cta-button w-full ${isSubmitting ? 'loading' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    <span>Unleashing Your Stag Life...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Unleash Your Stag Life</span>
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-400 mt-4">
                Zero fees. Stealth phase. Early access only.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}