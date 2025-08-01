import React, { useState, useEffect } from 'react';
import { MessageSquareHeart, Send, X, Sparkles } from 'lucide-react';

export function AnonymousFeedback() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Auto-collapse when scrolling
      if (isExpanded && !isSubmitted) {
        setIsExpanded(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      // Auto-collapse when clicking outside
      if (isExpanded && !isSubmitted) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isExpanded, isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const submissionData = {
        feedback: feedback.trim(),
        user_agent: navigator.userAgent,
        page_url: window.location.href,
        created_at: new Date().toISOString()
      };

      const response = await fetch('https://gntvbngvllfinnympena.supabase.co/rest/v1/anonymous_feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdudHZibmd2bGxmaW5ueW1wZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk1MjcsImV4cCI6MjA2ODc3NTUyN30.ZgZWtoDFnGgVZHdxFa5R5OcC855mRjTZbQ7Ha4av8sY',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdudHZibmd2bGxmaW5ueW1wZW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk1MjcsImV4cCI6MjA2ODc3NTUyN30.ZgZWtoDFnGgVZHdxFa5R5OcC855mRjTZbQ7Ha4av8sY'
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFeedback('');
        // Auto-collapse after 3 seconds
        setTimeout(() => {
          setIsExpanded(false);
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // You could add error state here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30" onClick={(e) => e.stopPropagation()}>
      {/* Always Visible Label */}
                        <div className="text-center mb-2">
                    <p className="text-xs text-gray-400 font-medium">Single?</p>
                  </div>
      
      <div className={`transition-all duration-300 ${isExpanded ? 'w-72' : 'w-12'}`}>
        {/* Main Feedback Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 mb-2 relative overflow-hidden group"
          title="Share your thoughts anonymously"
        >
          {/* Sparkle animation background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <MessageSquareHeart className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform duration-200" />
          
          {/* Floating sparkles on hover */}
          <Sparkles className="w-3 h-3 text-white/60 absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125" />
          
          {/* Hover Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 text-xs text-gray-300 bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-accent-purple/20">
            💭 Share your thoughts
            {/* Tooltip arrow */}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900/90 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          </div>
        </button>

        {/* Expanded Feedback Form */}
        {isExpanded && (
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-accent-purple/20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-pink/5 rounded-lg"></div>
            
            <div className="relative z-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquareHeart className="w-4 h-4 text-accent-purple" />
                    <p className="text-sm font-medium text-white">Share your thoughts</p>
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-3">
                    Help us build better for solos. 100% anonymous.
                  </p>
                  
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="What's on your mind about solo experiences? Any suggestions, concerns, or hopes?"
                    className="w-full h-24 px-3 py-2 bg-gray-800/50 border border-accent-purple/30 rounded-md text-white text-sm placeholder-gray-500 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/20 resize-none"
                    disabled={isSubmitting}
                    maxLength={500}
                  />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {feedback.length}/500
                    </span>
                    
                    <button
                      type="submit"
                      disabled={!feedback.trim() || isSubmitting}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-accent-purple to-accent-pink disabled:from-gray-600 disabled:to-gray-700 text-white text-xs rounded-md transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3 h-3" />
                          <span>Send</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center mx-auto mb-2">
                    <MessageSquareHeart className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm font-medium text-white mb-1">Thank you!</p>
                  <p className="text-xs text-gray-400">
                    Your feedback helps us build better for solos ✨
                  </p>
                </div>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-accent-purple rounded-full opacity-40"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-accent-pink rounded-full opacity-30"></div>
          </div>
        )}
      </div>
    </div>
  );
}