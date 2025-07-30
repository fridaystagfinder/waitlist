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

  const handleNavigation = (tab: 'home' | 'about' | 'waitlist' | 'privacy') => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };



  // Scroll to top when privacy tab is active
  React.useEffect(() => {
    if (activeTab === 'privacy') {
      window.scrollTo(0, 0);
    }
  }, [activeTab]);

  // Scroll to top when waitlist tab is active
  React.useEffect(() => {
    if (activeTab === 'waitlist') {
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
          <Footer onNavigate={handleNavigation} />
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

        <Footer onNavigate={handleNavigation} />
      </div>
      
      <InvestorCTA />
    </div>
  );
}

export default App;