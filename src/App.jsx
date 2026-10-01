import React from 'react';
import Desktop from './components/Desktop';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ErrorBoundary>
        <Desktop />
      </ErrorBoundary>
    </div>
  );
}
