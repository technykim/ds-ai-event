import React from 'react';
import { Clock, BookOpen, Presentation, Award } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    { time: '12:30 - 13:30', title: '쇼케이스 전시 및 참가자 등록', desc: '장소: 천사의뜰', icon: <Clock /> },
    { time: '13:30 - 14:30', title: '아이디어톤 발표회', desc: '장소: 엘림홀 (팀별 발표 및 질의응답)', icon: <Presentation /> },
    { time: '14:30 - 15:00', title: '심사 및 시상식', desc: '결과 발표 및 상품 수여', icon: <Award /> }
  ];

  return (
    <section id="schedule" className="section">
      <div className="container">
        <h2 className="section-title">일정 및 부문</h2>
        <p className="section-subtitle">
          참가 부문과 대회 당일 일정을 확인하세요.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          <div className="glass-card" style={{ background: 'var(--color-bg-alt)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: 'var(--color-primary)' }}>
              개인 부문
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary-light)' }}></span>
                교회 생활 중 겪은 불편함을 해결할 AI 아이디어
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary-light)' }}></span>
                새가족 정착 및 신앙 성장을 돕는 서비스 기획
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary-light)' }}></span>
                누구나 개인 단위로 지원 가능
              </li>
            </ul>
          </div>
          
          <div className="glass-card" style={{ background: 'var(--color-bg-alt)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: 'var(--color-primary)' }}>
              부서 부문 (팀)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)' }}></span>
                각 부서별 행정 업무 자동화 및 효율화
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)' }}></span>
                전도 및 행사 관리에 AI 도구 활용 방안
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)' }}></span>
                동일 부서원 2인 이상 팀으로 참여
              </li>
            </ul>
          </div>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>대회 당일 일정 (10.25)</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {schedule.map((item, index) => (
              <div key={index} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '20px' }}>
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '16px', flexShrink: 0,
                  background: 'rgba(15, 76, 129, 0.1)', color: 'var(--color-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '4px' }}>
                    {item.time}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <div style={{ color: 'var(--color-text-muted)' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
