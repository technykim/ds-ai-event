import React, { useState, useRef, useEffect } from 'react';
import { Minus, Square, X, Copy } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function Window({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  position = { x: 40, y: 30, width: 680, height: 520 },
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onPositionChange,
  menuBar = true,
  children
}) {
  const [pos, setPos] = useState(position);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });
  const windowRef = useRef(null);

  // Sync position if changed externally
  useEffect(() => {
    setPos(position);
  }, [position.x, position.y, position.width, position.height]);

  if (!isOpen || isMinimized) return null;

  const handleMouseDownTitle = (e) => {
    if (e.target.closest('.win-ctrl-btn')) return;
    onFocus(id);
    playClickSound();

    if (isMaximized) return;

    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: pos.x,
      initialY: pos.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      
      const newX = Math.max(0, dragRef.current.initialX + dx);
      const newY = Math.max(0, dragRef.current.initialY + dy);
      
      const newPos = { ...pos, x: newX, y: newY };
      setPos(newPos);
      if (onPositionChange) onPositionChange(id, newPos);
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, pos, id, onPositionChange]);

  const style = isMaximized
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 38, // Above taskbar
        zIndex,
        width: '100%',
        height: 'calc(100vh - 38px)'
      }
    : {
        position: 'absolute',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: typeof pos.width === 'number' ? `${pos.width}px` : pos.width,
        height: typeof pos.height === 'number' ? `${pos.height}px` : pos.height,
        maxWidth: 'calc(100vw - 10px)',
        maxHeight: 'calc(100vh - 50px)',
        zIndex
      };

  return (
    <div
      ref={windowRef}
      className="win-outset win-window"
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.4)',
        padding: '3px'
      }}
      onClick={() => onFocus(id)}
    >
      {/* Title Bar */}
      <div
        className="win-titlebar"
        onMouseDown={handleMouseDownTitle}
        onDoubleClick={() => onMaximize(id)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
          {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </span>
        </div>

        <div className="win-titlebar-controls">
          <button
            className="win-ctrl-btn"
            title="최소화"
            onClick={(e) => {
              e.stopPropagation();
              playClickSound();
              onMinimize(id);
            }}
          >
            <Minus size={10} />
          </button>
          <button
            className="win-ctrl-btn"
            title={isMaximized ? "복원" : "최대화"}
            onClick={(e) => {
              e.stopPropagation();
              playClickSound();
              onMaximize(id);
            }}
          >
            {isMaximized ? <Copy size={10} /> : <Square size={10} />}
          </button>
          <button
            className="win-ctrl-btn"
            title="닫기"
            style={{ fontWeight: 'bold' }}
            onClick={(e) => {
              e.stopPropagation();
              playClickSound();
              onClose(id);
            }}
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Menu Bar (Classic File/Edit/View/Help) */}
      {menuBar && (
        <div
          style={{
            display: 'flex',
            gap: '12px',
            padding: '2px 8px',
            borderBottom: '1px solid var(--win-gray-dark)',
            fontSize: '12px',
            background: 'var(--win-gray)'
          }}
        >
          <span style={{ cursor: 'pointer' }}><u>F</u>ile</span>
          <span style={{ cursor: 'pointer' }}><u>E</u>dit</span>
          <span style={{ cursor: 'pointer' }}><u>V</u>iew</span>
          <span style={{ cursor: 'pointer' }}><u>H</u>elp</span>
        </div>
      )}

      {/* Window Body */}
      <div
        className="win-window-body"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px',
          background: 'var(--win-gray)'
        }}
      >
        {children}
      </div>

      {/* Status Bar */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          padding: '2px 6px',
          marginTop: '2px',
          fontSize: '11px',
          background: 'var(--win-gray)'
        }}
      >
        <div className="win-inset" style={{ flex: 1, padding: '1px 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          준비 완료 (Ready)
        </div>
        <div className="win-inset" style={{ width: '120px', padding: '1px 4px', textAlign: 'center' }}>
          Windows 95 OS
        </div>
      </div>
    </div>
  );
}
