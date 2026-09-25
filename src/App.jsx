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

  const handleSelectService = (domain) => {
    const msg = `Hi Pradeeshwaran, we have an engineering opportunity at our company involving ${domain.title}. Let's connect for an initial discussion.`;
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
