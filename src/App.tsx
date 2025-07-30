import React, { useState } from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { ThankYouPage } from './components/ThankYouPage';
import { TabNavigation } from './components/TabNavigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { InvestorCTA } from './components/InvestorCTA';

export type ActiveTab = 'home' | 'about' | 'waitlist' | 'privacy';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [showThankYou, setShowThankYou] = useState(false);
  const [userName, setUserName] = useState('');

  const handleWaitlistSuccess = (name: string) => {
    setUserName(name);
    setShowThankYou(true);
  };

  const handleBackToHome = () => {
    setShowThankYou(false);
    setActiveTab('home');
  };

  const handleLogoClick = () => {
    setActiveTab('home');
  };

  // Handle privacy policy navigation from footer links
  React.useEffect(() => {
    const handlePrivacyClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href="/privacy-policy"]')) {
        e.preventDefault();
        setActiveTab('privacy');
        // Scroll to top when navigating to privacy policy
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handlePrivacyClick);
    return () => document.removeEventListener('click', handlePrivacyClick);
  }, []);

  // Scroll to top when privacy tab is active
  React.useEffect(() => {
    if (activeTab === 'privacy') {
      window.scrollTo(0, 0);
    }
  }, [activeTab]);

  if (showThankYou) {
    return (
      <>
        <ThankYouPage userName={userName} onBackToHome={handleBackToHome} />
        <InvestorCTA />
      </>
    );
  }

  if (activeTab === 'privacy') {
    return (
      <div className="min-h-screen text-white overflow-x-hidden">
        <div className="nightlife-bg">
          <div className="city-lights"></div>
        </div>
        <div className="relative z-10">
          <header className="header">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Logo onClick={handleLogoClick} />
              <button 
                onClick={() => setActiveTab('home')}
                className="nav-tab"
              >
                Back to Home
              </button>
            </div>
          </header>
          <PrivacyPolicy />
          <Footer />
          <InvestorCTA />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Nightlife Background */}
      <div className="nightlife-bg">
        <div className="city-lights"></div>
      </div>

      <div className="relative z-10 pb-20">
        <header className="header">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo onClick={handleLogoClick} />
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </header>

        <main className="pt-20">
          {activeTab === 'home' && <Hero onJoinWaitlist={() => setActiveTab('waitlist')} />}
          {activeTab === 'about' && <About />}
          {activeTab === 'waitlist' && <WaitlistForm onSuccess={handleWaitlistSuccess} />}
        </main>

        <Footer />
      </div>
      
      <InvestorCTA />
    </div>
  );
}

export default App;