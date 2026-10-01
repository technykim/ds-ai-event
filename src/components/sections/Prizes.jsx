import React, { useState } from 'react';
import { Medal, Star, Trophy, Calculator } from 'lucide-react';

export default function Prizes() {
  const [useAI, setUseAI] = useState(0);
  const [completeness, setCompleteness] = useState(0);

  const calculateScore = () => {
    return (useAI * 1.5) + (completeness * 1.2);
  };

  return (
    <section id="prizes" className="section section-alt">
      <div className="container">
        <h2 className="section-title">시상 및 가산점</h2>
        <p className="section-subtitle">
          참가자들을 위한 풍성한 혜택과 시상 내역, 그리고 심사 기준을 소개합니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid #FFD700' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: '#FFD700' }}>
              <Trophy size={48} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>대상</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>부문 통합 1팀</p>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>상금 50만원</div>
          </div>
          
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid #C0C0C0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: '#C0C0C0' }}>
              <Medal size={48} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>최우수상</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>부문별 각 1팀</p>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>상금 30만원</div>
          </div>
          
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid #CD7F32' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: '#CD7F32' }}>
              <Star size={48} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>우수상</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>부문별 각 2팀</p>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>상금 15만원</div>
          </div>
        </div>

        {/* Score Calculator */}
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-bg-main)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Calculator size={24} color="var(--color-primary)" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>심사 가산점 시뮬레이터</h3>
          </div>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
            산출물의 AI 활용 정도와 완성도에 따라 가산점이 차등 부여됩니다. 예상 점수를 확인해보세요.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 600 }}>AI 툴 활용 난이도</label>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{useAI} / 10</span>
              </div>
              <input 
                type="range" 
                min="0" max="10" 
                value={useAI} 
                onChange={(e) => setUseAI(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-primary)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                <span>기본 활용</span>
                <span>전문적 활용</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontWeight: 600 }}>산출물 완성도</label>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{completeness} / 10</span>
              </div>
              <input 
                type="range" 
                min="0" max="10" 
                value={completeness} 
                onChange={(e) => setCompleteness(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-secondary)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                <span>아이디어 스케치</span>
                <span>작동 가능한 프로토타입</span>
              </div>
            </div>

            <div style={{ padding: '24px', background: 'rgba(15, 76, 129, 0.05)', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ color: 'var(--color-text-muted)', fontWeight: 600, marginBottom: '8px' }}>예상 가산점 총합</div>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                +{calculateScore().toFixed(1)} <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>점</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
