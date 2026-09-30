import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Download, Maximize2, FileImage } from 'lucide-react';
import { playClickSound } from '../../utils/audio';

export default function PosterWindow() {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    playClickSound();
    setZoom((prev) => Math.min(prev + 25, 250));
  };

  const handleZoomOut = () => {
    playClickSound();
    setZoom((prev) => Math.max(prev - 25, 50));
  };

  const handleResetZoom = () => {
    playClickSound();
    setZoom(100);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
      {/* Control Bar */}
      <div
        className="win-outset"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 10px',
          background: '#e0e0e0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileImage size={18} color="#000080" />
          <span style={{ fontWeight: 'bold', fontSize: '13px' }}>
            행사 포스터 (Official_Poster.bmp)
          </span>
          <span className="win-inset" style={{ padding: '1px 6px', fontSize: '11px', background: '#fff' }}>
            배율: {zoom}%
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button className="win-btn" onClick={handleZoomIn} title="확대">
            <ZoomIn size={14} /> 확대
          </button>
          <button className="win-btn" onClick={handleZoomOut} title="축소">
            <ZoomOut size={14} /> 축소
          </button>
          <button className="win-btn" onClick={handleResetZoom} title="초기화">
            <RotateCcw size={14} /> 100%
          </button>
          <a
            href="/poster.jpg"
            download="제1회_AI활용_아이디어톤_포스터.jpg"
            className="win-btn win-btn-primary"
            style={{ textDecoration: 'none' }}
            onClick={playClickSound}
          >
            <Download size={14} /> 포스터 다운로드
          </a>
        </div>
      </div>

      {/* Image Display Canvas Container */}
      <div
        className="win-inset"
        style={{
          flex: 1,
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '16px',
          background: '#404040'
        }}
      >
        <img
          src="/poster.jpg"
          alt="제1회 AI활용 아이디어 경진대회 포스터"
          style={{
            width: `${zoom}%`,
            maxWidth: zoom === 100 ? '100%' : 'none',
            height: 'auto',
            transition: 'width 0.2s ease',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
            border: '2px solid #fff'
          }}
        />
      </div>
    </div>
  );
}
