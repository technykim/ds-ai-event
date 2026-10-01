import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function Overview() {
  const features = [
    {
      icon: <Target size={32} />,
      title: '대회 목적',
      desc: '동숭교회 내 다양한 부서 및 개인 단위의 문제 해결 및 사역 효율화를 위해 AI를 활용한 실용적이고 창의적인 아이디어를 발굴합니다.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: '주제 및 분야',
      desc: '행정 효율화, 교육/훈련, 교제/심방, 선교/전도 등 교회의 사역 전반에 걸쳐 자유롭게 제안할 수 있습니다.'
    },
    {
      icon: <Users size={32} />,
      title: '참가 대상',
      desc: '동숭교회 소속 교인이라면 누구나 참여 가능합니다. (개인 또는 팀/부서 단위로 신청 가능)'
    }
  ];

  return (
    <section id="overview" className="section section-alt">
      <div className="container">
        <h2 className="section-title">행사 안내</h2>
        <p className="section-subtitle">
          AI 기술을 통해 교회의 내일을 준비하는 첫 걸음, 여러분의 아이디어가 사역의 새로운 가능성을 엽니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '48px' }}>
          <div style={{ gridColumn: '1 / -1', marginBottom: '16px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src="/church2.jpg" alt="동숭교회 전경" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
          </div>
          {features.map((feature, index) => (
            <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '20px', 
                background: 'rgba(15, 76, 129, 0.1)', 
                color: 'var(--color-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--color-primary-dark)' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
