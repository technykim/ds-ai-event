import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Tv, Terminal, Power, ExternalLink, Sparkles } from 'lucide-react';
import { playClickSound, toggleSound, isSoundEnabled } from '../utils/audio';

export default function Taskbar({
  windows,
  activeWindowId,
  onOpenWindow,
  onMinimizeWindow,
  onFocusWindow,
  crtEnabled,
  onToggleCrt,
  onShowShutdown
}) {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [timeStr, setTimeStr] = useState('');

  // Clock tick
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  return (
    <div
      className="win-outset"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '38px',
        zIndex: 9999,
        background: 'var(--win-gray)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2px 4px'
      }}
    >
      {/* Start Button & Start Menu Container */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <button
          className={`win-btn ${startMenuOpen ? 'active win-btn-primary' : ''}`}
          style={{
            fontWeight: 'bold',
            fontSize: '13px',
            height: '30px',
            padding: '2px 10px',
            gap: '6px'
          }}
          onClick={(e) => {
            e.stopPropagation();
            playClickSound();
            setStartMenuOpen(!startMenuOpen);
          }}
        >
          {/* Classic Win95 Flag Icon */}
          <span style={{ fontSize: '16px' }}>🪟</span>
          <span>시작 (Start)</span>
        </button>

        {/* Windows 95 Start Menu */}
        {startMenuOpen && (
          <div
            className="win-outset"
            style={{
              position: 'absolute',
              bottom: '36px',
              left: 0,
              width: '260px',
              background: 'var(--win-gray)',
              boxShadow: '4px -4px 12px rgba(0,0,0,0.5)',
              display: 'flex',
              padding: '2px',
              zIndex: 10000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Vertical Banner */}
            <div
              style={{
                width: '32px',
                background: 'linear-gradient(180deg, #000080 0%, #1084d0 100%)',
                color: '#fff',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                padding: '12px 4px',
                fontFamily: 'var(--font-retro)',
                fontWeight: 'bold',
                fontSize: '15px',
                letterSpacing: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              Windows<span style={{ color: '#ffd54f' }}>95</span>
            </div>

            {/* Menu Options List */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {[
                { id: 'overview', title: '행사 안내 (Overview)', icon: '📁' },
                { id: 'schedule', title: '행사 일정 & 부문 (Schedule)', icon: '📅' },
                { id: 'prizes', title: '시상 & 가산점 (Prizes)', icon: '🏆' },
                { id: 'submission', title: '산출물 제출가이드 (Submit)', icon: '📝' },
                { id: 'poster', title: '행사 포스터 (Poster.bmp)', icon: '🖼️' },
                { id: 'faq', title: '자주 묻는 질문 (FAQ)', icon: '❓' },
                { id: 'contact', title: '행사 문의처 (Contact)', icon: '☎️' },
                { id: 'minesweeper', title: 'AI 마인스위퍼 게임', icon: '🎮' }
              ].map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#000080', e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#000')}
                  onClick={() => {
                    playClickSound();
                    onOpenWindow(item.id);
                    setStartMenuOpen(false);
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              ))}

              <div style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #fff', margin: '4px 0' }} />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#000080', e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#000')}
                onClick={() => {
                  onToggleCrt();
                  setStartMenuOpen(false);
                }}
              >
                <Tv size={16} />
                <span>CRT 레트로 스캔라인 {crtEnabled ? '끄기' : '켜기'}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#000080', e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#000')}
                onClick={() => {
                  playClickSound();
                  onShowShutdown();
                  setStartMenuOpen(false);
                }}
              >
                <Power size={16} color="#d32f2f" />
                <span>시스템 종료 (Shut Down)...</span>
              </div>
            </div>
          </div>
        )}

        {/* Taskbar Windows Tabs */}
        <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', flex: 1, paddingRight: '8px' }}>
          {windows.map((win) => {
            const isActive = activeWindowId === win.id && !win.isMinimized;
            return (
              <button
                key={win.id}
                className={`win-btn ${isActive ? 'active win-btn-primary' : ''}`}
                style={{
                  maxWidth: '160px',
                  height: '30px',
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
                onClick={() => {
                  playClickSound();
                  if (isActive) {
                    onMinimizeWindow(win.id);
                  } else {
                    onFocusWindow(win.id);
                  }
                }}
              >
                <span>{win.icon}</span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{win.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* System Tray (Clock, Audio, Vercel/GitHub links) */}
      <div
        className="win-inset"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '30px',
          padding: '2px 8px',
          fontSize: '12px'
        }}
      >
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={handleToggleSound}
          title={soundOn ? "사운드 켜짐" : "사운드 음소거"}
        >
          {soundOn ? <Volume2 size={16} color="#000" /> : <VolumeX size={16} color="#888" />}
        </button>

        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={onToggleCrt}
          title={crtEnabled ? "CRT 효과 끄기" : "CRT 효과 켜기"}
        >
          <Tv size={16} color={crtEnabled ? "#008000" : "#666"} />
        </button>

        <span style={{ fontFamily: 'VT323, monospace', fontSize: '15px', fontWeight: 'bold' }}>
          {timeStr}
        </span>
      </div>
    </div>
  );
}
