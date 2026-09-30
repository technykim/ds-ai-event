import React from 'react';
import Desktop from './components/Desktop';
import './index.css';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Desktop />
    </div>
  );
}
