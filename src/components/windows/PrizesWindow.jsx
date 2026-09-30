import React, { useState } from 'react';
import { Award, Zap, CheckCircle, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playWin95TaDa } from '../../utils/audio';

export default function PrizesWindow({ onOpenWindow }) {
  const [hasPilot, setHasPilot] = useState(true);
  const [slideQuality, setSlideQuality] = useState(5);
  const [feasibility, setFeasibility] = useState(5);

  const calculateScore = () => {
    let base = slideQuality * 8 + feasibility * 8; // 80 points max
    let bonus = hasPilot ? 20 : 0; // 20 points pilot bonus
    return base + bonus;
  };

  const triggerConfettiEffect = () => {
    playWin95TaDa();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Grand Prize Box */}
      <div
        className="win-outset"
        style={{
          background: 'linear-gradient(90deg, #fff8e1 0%, #ffffff 100%)',
          padding: '16px',
          borderLeft: '6px solid #f57f17'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div
            className="win-outset"
            style={{
              width: '42px',
              height: '42px',
              background: '#ffd54f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px'
            }}
          >
            <Award size={26} color="#b78103" />
          </div>
          <div>
            <span style={{ fontSize: '11px', background: '#e65100', color: '#fff', padding: '1px 6px', fontWeight: 'bold' }}>
              MAIN PRIZE
            </span>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
              개인 / 부서 부문별 최우수상 (각 1팀)
            </h3>
          </div>
        </div>

        <div className="win-inset" style={{ padding: '12px', background: '#fff9c4', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', color: '#573c00' }}>🏆 당선 포상 혜택 🏆</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#b78103', margin: '4px 0' }}>
            AI 서비스 구독료 지원 (6개월)
          </div>
          <p style={{ fontSize: '12px', color: '#795548', fontStyle: 'italic' }}>
            * (단, 선정된 아이디어를 실제 서비스로 구현하는데 사용해야 함)
          </p>
        </div>
      </div>

      {/* Pilot Bonus Banner */}
      <div
        className="win-outset"
        style={{
          background: 'linear-gradient(90deg, #e8f5e9 0%, #ffffff 100%)',
          padding: '14px',
          borderLeft: '6px solid #2e7d32'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Zap size={20} color="#2e7d32" />
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1b5e20' }}>
            🚀 파일럿 구현 제출시 [가산점] 부여!
          </h4>
        </div>
        <p style={{ fontSize: '13px', color: '#2e7d32', lineHeight: '1.5' }}>
          아이디어 제안 슬라이드(PPT/PDF)를 넘어서 <b>실제 서비스 파일럿(동작하는 데모 서비스 링크 등)</b>까지 작성하여 제출하면 심사 시 <b>강력한 가산점</b>이 추가 부여됩니다!
        </p>
      </div>

      {/* Interactive Score Estimator */}
      <div className="win-fieldset" style={{ background: '#fff' }}>
        <legend className="win-legend" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={14} /> 🧮 AI 아이디어톤 예상 가산점 계산기
        </legend>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
          {/* Pilot switch */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', fontWeight: 'bold' }}>
              1. 파일럿 데모 서비스 링크 포함 여부:
            </span>
            <button
              className={`win-btn ${hasPilot ? 'win-btn-primary active' : ''}`}
              onClick={() => {
                playClickSound();
                const next = !hasPilot;
                setHasPilot(next);
                if (next) triggerConfettiEffect();
              }}
            >
              {hasPilot ? '✅ 파일럿 포함 (가산점 +20점)' : '❌ 미포함 (슬라이드만)'}
            </button>
          </div>

          {/* Slide Quality Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
              <span>2. 발표 슬라이드 완성도:</span>
              <span style={{ fontWeight: 'bold' }}>{slideQuality * 8} / 40 점</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={slideQuality}
              onChange={(e) => setSlideQuality(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>

          {/* Feasibility Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
              <span>3. 실현 가능성 & 현장 적용성:</span>
              <span style={{ fontWeight: 'bold' }}>{feasibility * 8} / 40 점</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={feasibility}
              onChange={(e) => setFeasibility(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>

          {/* Total Score Display */}
          <div
            className="win-inset"
            style={{
              padding: '10px',
              background: '#000',
              color: '#00ff00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontSize: '11px', color: '#888' }}>예상 평가 점수 (MAX 100점)</div>
              <div style={{ fontSize: '20px', fontFamily: 'VT323, monospace', fontWeight: 'bold' }}>
                TOTAL SCORE: {calculateScore()} 점
              </div>
            </div>

            <button
              className="win-btn win-btn-primary"
              onClick={() => {
                triggerConfettiEffect();
                if (onOpenWindow) onOpenWindow('submission');
              }}
            >
              지금 제출하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
