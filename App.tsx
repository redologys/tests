import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import EmergencyServices from './components/EmergencyServices';
import SafetyCertifications from './components/SafetyCertifications';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import CallModal from './components/CallModal';
import LiveChat from './components/LiveChat';

const App: React.FC = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const openCallModal = () => setIsCallModalOpen(true);
  const closeCallModal = () => setIsCallModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-onyx-900 pb-[70px] lg:pb-0">
      <Header onOpenCallModal={openCallModal} />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Services />
        <ProcessTimeline />
        <EmergencyServices />
        <SafetyCertifications />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact onOpenCallModal={openCallModal} />
      </main>
      <Footer />
      <StickyBottomBar onOpenCallModal={openCallModal} />
      <CallModal isOpen={isCallModalOpen} onClose={closeCallModal} />
      <LiveChat />
    </div>
  );
};

export default App;