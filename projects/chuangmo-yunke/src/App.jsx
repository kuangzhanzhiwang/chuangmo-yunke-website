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
import ModelDetailPage from './components/ModelDetailPage';
import PricingPage from './components/PricingPage';
import CreatorProfilePage from './components/CreatorProfilePage';
import NewUserGuide from './components/NewUserGuide';
import CopyrightPage from './components/CopyrightPage';
import GenerateGuide from './components/GenerateGuide';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('generate');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [showNewUserGuide, setShowNewUserGuide] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <PricingPage />;
      case 'creator':
        return <CreatorProfilePage />;
      case 'copyright':
        return <CopyrightPage />;
      case 'guide':
        return <GenerateGuide />;
      case 'about':
        return <AboutSection />;
      case 'home':
      default:
        return (
          <>
            {activeTab === 'generate' && (
              <>
                <GenerateSection onGuideClick={() => setCurrentPage('guide')} />
                <GenerationCases />
                <FAQSection />
              </>
            )}
            {activeTab === 'trading' && (
              <>
                <TradingSection onModelClick={(id) => setCurrentPage(`detail-${id}`)} />
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
          </>
        );
    }
  };

  if (currentPage.startsWith('detail-')) {
    const modelId = parseInt(currentPage.replace('detail-', ''));
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onLoginClick={() => setShowLoginModal(true)}
          onHomeClick={() => setCurrentPage('home')}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <ModelDetailPage modelId={modelId} onBack={() => setCurrentPage('home')} />
        <Footer />
        <Chatbot />
        <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLoginClick={() => setShowLoginModal(true)}
        onPricingClick={() => setCurrentPage('pricing')}
        onGuideClick={() => setCurrentPage('guide')}
        onCopyrightClick={() => setCurrentPage('copyright')}
        onAboutClick={() => setCurrentPage('about')}
        onHomeClick={() => setCurrentPage('home')}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer 
        onAboutClick={() => setCurrentPage('about')}
        onPricingClick={() => setCurrentPage('pricing')}
        onCopyrightClick={() => setCurrentPage('copyright')}
      />
      <Chatbot />
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      
      {showNewUserGuide && (
        <NewUserGuide onComplete={(reward) => {
          setShowNewUserGuide(false);
          console.log('完成新手任务，获得奖励：¥' + reward);
        }} />
      )}
    </div>
  );
}
