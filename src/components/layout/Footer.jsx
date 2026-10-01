import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-alt)', padding: '60px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            제1회 동숭교회 AI활용 아이디어톤
          </h3>
          <p style={{ color: 'var(--color-text-muted)' }}>
            교회의 사역과 성도의 필요를 해결하는 혁신적인 아이디어
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#overview" style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>행사 안내</a>
          <a href="#schedule" style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>일정 안내</a>
          <a href="#prizes" style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>시상 및 가산점</a>
          <a href="#submit" style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>산출물 제출</a>
          <a href="#faq" style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>문의 및 FAQ</a>
        </div>
        
        <div style={{ width: '100%', height: '1px', background: 'var(--color-border)' }}></div>
        
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          © 2026 동숭교회 AI연구모임 AI 아이디어톤 운영위원회. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
