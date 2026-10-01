import React from 'react';
import { Medal, Trophy, CheckCircle, Sparkles } from 'lucide-react';

export default function Prizes() {
  return (
    <section id="prizes" className="section section-alt">
      <div className="container">
        <h2 className="section-title">시상 및 가산점</h2>
        <p className="section-subtitle">
          참가자들을 위한 시상 내역과 심사 가산점 기준을 소개합니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px auto' }}>
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid #FFD700' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: '#FFD700' }}>
              <Trophy size={48} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>개인 최우수상</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>개인 부문 1팀</p>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>6개월 AI구독료 지원</div>
          </div>
          
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid #C0C0C0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: '#C0C0C0' }}>
              <Medal size={48} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>단체 최우수상</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>부서(팀) 부문 1팀</p>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>6개월 AI구독료 지원</div>
          </div>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', padding: '24px', background: 'rgba(15, 76, 129, 0.05)', borderRadius: '12px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <CheckCircle color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-main)' }}>수상자 특별 과제</h4>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              상으로 받은 AI 구독 서비스를 활용하여, 제안하신 아이디어를 완성도 있게 구현한 후 <strong>6개월 이내에 결과물을 제출</strong>해 주셔야 합니다.
            </p>
          </div>
        </div>

        {/* Bonus Points */}
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-bg-main)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Sparkles size={24} color="var(--color-secondary)" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>심사 가산점 안내</h3>
          </div>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
            아이디어 단계에 머무르지 않고, 실제로 작동하는 프로토타입이나 <strong>MVP(Minimum Viable Product)를 직접 제작하여 발표할 경우 높은 가산점</strong>이 부여됩니다.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '16px', background: 'var(--color-bg-alt)', borderRadius: '8px', marginBottom: '12px', borderLeft: '4px solid var(--color-secondary)' }}>
              <strong>MVP 제작 및 발표 (가산점 부여)</strong>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                챗봇, 자동화 스크립트, 웹/앱 서비스 등 AI 툴을 활용하여 실제로 시연 가능한 형태의 결과물을 보여주세요.
              </div>
            </li>
            <li style={{ padding: '16px', background: 'var(--color-bg-alt)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary-light)' }}>
              <strong>단순 아이디어 제안 (기본 심사)</strong>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                기획서, 프레젠테이션(PPT), 문서화된 시나리오만 제출하는 경우 기본 심사 기준이 적용됩니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
