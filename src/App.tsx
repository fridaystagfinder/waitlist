import React, { useState } from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { ThankYouPage } from './components/ThankYouPage';
import { TabNavigation } from './components/TabNavigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';

export type ActiveTab = 'home' | 'about' | 'waitlist';

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

  if (showThankYou) {
    return <ThankYouPage userName={userName} onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Nightlife Background */}
      <div className="nightlife-bg">
        <div className="city-lights"></div>
      </div>

      <div className="relative z-10">
        <header className="header">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo />
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
    </div>
  );
}

export default App;