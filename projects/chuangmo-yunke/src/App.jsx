import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GenerateSection from './components/GenerateSection';
import TradingSection from './components/TradingSection';
import RequirementsSection from './components/RequirementsSection';
import CommunitySection from './components/CommunitySection';
import SupplierSection from './components/SupplierSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Chatbot from './components/Chatbot';
import GenerationCases from './components/GenerationCases';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('generate');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLoginClick={() => setShowLoginModal(true)}
        onAboutClick={() => setShowAbout(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="flex-grow">
        {activeTab === 'generate' && (
          <>
            <GenerateSection />
            <GenerationCases />
            <FAQSection />
          </>
        )}
        {activeTab === 'trading' && (
          <>
            <TradingSection />
            <ReviewsSection />
          </>
        )}
        {activeTab === 'requirements' && <RequirementsSection />}
        {activeTab === 'community' && (
          <>
            <CommunitySection />
            <ReviewsSection />
          </>
        )}
        {activeTab === 'suppliers' && (
          <>
            <SupplierSection />
            <ReviewsSection />
          </>
        )}
        {showAbout && <AboutSection />}
      </main>
      
      <Footer onAboutClick={() => setShowAbout(true)} />
      <Chatbot />
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
}
