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
import { FounderQuote } from './components/FounderQuote';
import { Testimonials } from './components/Testimonials';
import { AnonymousFeedback } from './components/AnonymousFeedback';


export type ActiveTab = 'home' | 'about' | 'waitlist' | 'privacy';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [showThankYou, setShowThankYou] = useState(false);
  const [userName, setUserName] = useState('');

  const handleWaitlistSuccess = (name: string) => {
    setUserName(name);
    setShowThankYou(true);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setShowThankYou(false);
    setActiveTab('home');
  };

  const handleLogoClick = () => {
    handleNavigation('home');
  };

  const handleNavigation = (tab: 'home' | 'about' | 'waitlist' | 'privacy') => {
    setActiveTab(tab);
    // Always scroll to top for all tabs
    window.scrollTo(0, 0);
  };





  if (showThankYou) {
    return (
      <div className="min-h-screen text-white overflow-x-hidden">
        <div className="nightlife-bg">
          <div className="city-lights"></div>
        </div>
        <div className="relative z-10 pb-20">
          <header className="header">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Logo onClick={handleLogoClick} />
              <TabNavigation activeTab={activeTab} onTabChange={handleNavigation} />
            </div>
          </header>
          <ThankYouPage userName={userName} onBackToHome={handleBackToHome} />
          <Footer onNavigate={handleNavigation} />
          <InvestorCTA />
          <AnonymousFeedback />
        </div>
      </div>
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
                onClick={() => handleNavigation('home')}
                className="nav-tab"
              >
                Back to Home
              </button>
            </div>
          </header>
          <PrivacyPolicy />
          <Footer onNavigate={handleNavigation} />
          <InvestorCTA />
          <AnonymousFeedback />
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
            <TabNavigation activeTab={activeTab} onTabChange={handleNavigation} />
          </div>
        </header>

        <main className="pt-20">
          {activeTab === 'home' && (
            <>
              <Hero onJoinWaitlist={() => handleNavigation('waitlist')} />
              <Testimonials />
              <FounderQuote />
            </>
          )}
          {activeTab === 'about' && <About onJoinWaitlist={() => handleNavigation('waitlist')} />}
          {activeTab === 'waitlist' && <WaitlistForm onSuccess={handleWaitlistSuccess} />}
        </main>

        <Footer onNavigate={handleNavigation} />
      </div>
      
      <InvestorCTA />
      {activeTab !== 'waitlist' && <AnonymousFeedback />}
    </div>
  );
}

export default App;