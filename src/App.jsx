import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const handleOpenContact = (customMessage = '') => {
    if (customMessage) {
      setPrefilledMessage(customMessage);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service) => {
    const msg = `Hi Pradeeshwaran, I am interested in your "${service.title}" service. Let's discuss requirements.`;
    handleOpenContact(msg);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        onOpenContact={() => handleOpenContact()}
      />
      <main style={{ flex: 1 }}>
        <Hero
          onOpenContact={() => handleOpenContact()}
        />
        <Services
          onSelectService={handleSelectService}
        />
        <Projects
          onOpenContact={() => handleOpenContact()}
        />
        <Experience />
        <ResumeViewer />
        <Contact prefilledMessage={prefilledMessage} />
      </main>
      <Footer />
    </div>
  );
}
