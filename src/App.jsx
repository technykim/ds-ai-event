import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import Schedule from './components/sections/Schedule';
import Prizes from './components/sections/Prizes';
import Submission from './components/sections/Submission';
import FaqContact from './components/sections/FaqContact';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Hero />
          <Overview />
          <Schedule />
          <Prizes />
          <Submission />
          <FaqContact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
