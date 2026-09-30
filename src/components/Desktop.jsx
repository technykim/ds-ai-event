import React, { useState, useEffect } from 'react';
import Window from './Window';
import Taskbar from './Taskbar';
import OverviewWindow from './windows/OverviewWindow';
import ScheduleWindow from './windows/ScheduleWindow';
import PrizesWindow from './windows/PrizesWindow';
import SubmissionWindow from './windows/SubmissionWindow';
import PosterWindow from './windows/PosterWindow';
import FaqWindow from './windows/FaqWindow';
import ContactWindow from './windows/ContactWindow';
import MinesweeperWindow from './windows/MinesweeperWindow';
import { playClickSound, playWin95TaDa } from '../utils/audio';

export default function Desktop() {
  const [crtEnabled, setCrtEnabled] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showShutdownModal, setShowShutdownModal] = useState(false);
  const [wallpaper, setWallpaper] = useState('teal'); // 'teal' | 'grid' | 'sunset'
  const [topZIndex, setTopZIndex] = useState(10);

  // Desktop Icons Configuration
  const desktopIcons = [
    { id: 'overview', title: '행사 안내.exe', label: '행사 안내', icon: '📁', pos: { top: 20, left: 20 } },
    { id: 'schedule', title: '행사 일정.exe', label: '행사 일정 & 부문', icon: '📅', pos: { top: 110, left: 20 } },
    { id: 'prizes', title: '시상안내.exe', label: '시상 & 가산점', icon: '🏆', pos: { top: 200, left: 20 } },
    { id: 'submission', title: '산출물제출.exe', label: '산출물 제출가이드', icon: '📝', pos: { top: 290, left: 20 } },
    { id: 'poster', title: '행사포스터.bmp', label: '행사 포스터', icon: '🖼️', pos: { top: 380, left: 20 } },
    { id: 'faq', title: '자주묻는질문.exe', label: '자주 묻는 질문 FAQ', icon: '❓', pos: { top: 20, left: 140 } },
    { id: 'contact', title: '문의하기.exe', label: '행사 문의처', icon: '☎️', pos: { top: 110, left: 140 } },
    { id: 'minesweeper', title: '마인스위퍼.exe', label: 'AI 마인스위퍼', icon: '🎮', pos: { top: 200, left: 140 } }
  ];

  // Windows Managed State
  const [windows, setWindows] = useState([
    {
      id: 'overview',
      title: '제1회 AI활용 아이디어 경진대회 - 행사 안내',
      icon: '📁',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 80, y: 30, width: 720, height: 560 }
    },
    {
      id: 'schedule',
      title: '행사 일정 & 공모 부문 (Schedule & Topics)',
      icon: '📅',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      position: { x: 120, y: 50, width: 700, height: 540 }
    },
    {
      id: 'prizes',
      title: '시상 혜택 및 가산점 안내 (Prizes & Bonus Points)',
      icon: '🏆',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      position: { x: 150, y: 60, width: 680, height: 520 }
    },
    {
      id: 'submission',
      title: '산출물 제출 가이드 & 이메일 작성기',
      icon: '📝',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      position: { x: 180, y: 40, width: 700, height: 560 }
    },
    {
      id: 'poster',
      title: '공식 행사 포스터 Viewer (Poster.bmp)',
      icon: '🖼️',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      position: { x: 140, y: 30, width: 640, height: 580 }
    },
    {
      id: 'faq',
      title: '자주 묻는 질문 FAQ (Help & Support)',
      icon: '❓',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      position: { x: 160, y: 70, width: 640, height: 500 }
    },
    {
      id: 'contact',
      title: '행사 문의처 (Contact Us)',
      icon: '☎️',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      position: { x: 200, y: 80, width: 560, height: 460 }
    },
    {
      id: 'minesweeper',
      title: 'Windows 95 AI Minesweeper',
      icon: '🎮',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      position: { x: 240, y: 90, width: 340, height: 420 }
    }
  ]);

  const [activeWindowId, setActiveWindowId] = useState('overview');

  // Trigger Win95 Startup chime on load
  useEffect(() => {
    const timer = setTimeout(() => {
      playWin95TaDa();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWindow = (id) => {
    playClickSound();
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setActiveWindowId(id);

    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === id) {
          return { ...win, isOpen: true, isMinimized: false, zIndex: nextZ };
        }
        return win;
      })
    );
  };

  const handleFocusWindow = (id) => {
    if (activeWindowId === id) return;
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setActiveWindowId(id);

    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMinimized: false, zIndex: nextZ } : win))
    );
  };

  const handleCloseWindow = (id) => {
    playClickSound();
    setWindows((prev) => prev.map((win) => (win.id === id ? { ...win, isOpen: false } : win)));
  };

  const handleMinimizeWindow = (id) => {
    playClickSound();
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win))
    );
  };

  const handleMaximizeWindow = (id) => {
    playClickSound();
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMaximized: !win.isMaximized } : win))
    );
  };

  // Background style based on wallpaper setting
  const getWallpaperStyle = () => {
    if (wallpaper === 'grid') {
      return {
        backgroundImage: 'linear-gradient(#006666 1px, transparent 1px), linear-gradient(90deg, #006666 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: '#008080'
      };
    }
    if (wallpaper === 'sunset') {
      return {
        background: 'linear-gradient(180deg, #000080 0%, #008080 50%, #e65100 100%)'
      };
    }
    return { backgroundColor: '#008080' };
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        ...getWallpaperStyle()
      }}
      onClick={() => setSelectedIcon(null)}
    >
      {/* CRT Scanline Overlay */}
      {crtEnabled && <div className="crt-overlay" />}

      {/* Desktop Banner / Header Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          textAlign: 'right',
          color: 'rgba(255, 255, 255, 0.35)',
          fontFamily: 'var(--font-retro)',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        <div style={{ fontSize: '28px', fontWeight: 'bold', textShadow: '1px 1px 0 #000' }}>
          동숭교회 AI 아이디어톤
        </div>
        <div style={{ fontSize: '16px', marginTop: '2px' }}>
          Windows 95 Edition (10.25 주일)
        </div>
      </div>

      {/* Desktop Icons Grid */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '40px' }}>
        {desktopIcons.map((item) => {
          const isSelected = selectedIcon === item.id;
          return (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: `${item.pos.top}px`,
                left: `${item.pos.left}px`,
                width: '90px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '6px'
              }}
              onClick={(e) => {
                e.stopPropagation();
                playClickSound();
                setSelectedIcon(item.id);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                handleOpenWindow(item.id);
              }}
            >
              <div
                style={{
                  fontSize: '36px',
                  marginBottom: '4px',
                  filter: isSelected ? 'drop-shadow(2px 2px 0 #000080)' : 'none'
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '2px 4px',
                  background: isSelected ? '#000080' : 'transparent',
                  border: isSelected ? '1px dotted #fff' : '1px solid transparent',
                  textShadow: isSelected ? 'none' : '1px 1px 2px #000',
                  lineHeight: '1.2'
                }}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Windows Stack */}
      {windows.map((win) => {
        let content = null;
        if (win.id === 'overview') content = <OverviewWindow onOpenWindow={handleOpenWindow} />;
        if (win.id === 'schedule') content = <ScheduleWindow />;
        if (win.id === 'prizes') content = <PrizesWindow onOpenWindow={handleOpenWindow} />;
        if (win.id === 'submission') content = <SubmissionWindow />;
        if (win.id === 'poster') content = <PosterWindow />;
        if (win.id === 'faq') content = <FaqWindow />;
        if (win.id === 'contact') content = <ContactWindow />;
        if (win.id === 'minesweeper') content = <MinesweeperWindow />;

        return (
          <Window
            key={win.id}
            id={win.id}
            title={win.title}
            icon={win.icon}
            isOpen={win.isOpen}
            isMinimized={win.isMinimized}
            isMaximized={win.isMaximized}
            zIndex={win.zIndex}
            position={win.position}
            onClose={handleCloseWindow}
            onMinimize={handleMinimizeWindow}
            onMaximize={handleMaximizeWindow}
            onFocus={handleFocusWindow}
          >
            {content}
          </Window>
        );
      })}

      {/* Taskbar at Bottom */}
      <Taskbar
        windows={windows.filter((w) => w.isOpen)}
        activeWindowId={activeWindowId}
        onOpenWindow={handleOpenWindow}
        onMinimizeWindow={handleMinimizeWindow}
        onFocusWindow={handleFocusWindow}
        crtEnabled={crtEnabled}
        onToggleCrt={() => setCrtEnabled(!crtEnabled)}
        onShowShutdown={() => setShowShutdownModal(true)}
      />

      {/* Easter Egg Shutdown Modal */}
      {showShutdownModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="win-outset" style={{ width: '380px', padding: '16px', background: '#c0c0c0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ fontSize: '32px' }}>💻</span>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: 'bold' }}>Windows 95 시스템 종료</h3>
                <p style={{ fontSize: '12px', color: '#333' }}>
                  지금 컴퓨터를 안전하게 종료하시겠습니까?
                </p>
              </div>
            </div>

            <div className="win-inset" style={{ padding: '10px', background: '#fff', fontSize: '12px', marginBottom: '14px' }}>
              • Vercel 호스팅 준비 완료<br/>
              • GitHub 리포지토리 커밋 준비 완료<br/>
              • 10월 25일 12:30 마당 및 엘림에서 만나요!
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button
                className="win-btn win-btn-primary"
                onClick={() => {
                  playClickSound();
                  setShowShutdownModal(false);
                }}
              >
                계속 탐색하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
