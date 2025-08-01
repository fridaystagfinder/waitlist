import React from 'react';
import { ActiveTab } from '../App';
import { ArrowRight } from 'lucide-react';

interface TabNavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Why' },
    { id: 'waitlist', label: 'Waitlist' },
  ] as const;

  return (
    <nav className="nav-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''} ${tab.id === 'waitlist' ? 'waitlist-tab' : ''}`}
        >
          {tab.label}
          {tab.id === 'waitlist' && (
            <ArrowRight className="w-3 h-3 ml-1 animate-pulse" />
          )}
        </button>
      ))}
    </nav>
  );
}