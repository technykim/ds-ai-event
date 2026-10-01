import React from 'react';
import { Clock, BookOpen, Presentation, Award } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    { time: '12:30 - 13:00', title: '참가자 등록 및 오리엔테이션', desc: '대회 안내 및 조별 배정', icon: <Clock /> },
    { time: '13:00 - 14:00', title: '특강: AI와 기독교 사역', desc: '외부 초청 강사 특별 강연', icon: <BookOpen /> },
    { time: '14:00 - 17:00', title: '아이디어 해커톤', desc: '팀별 아이디어 기획 및 구체화 (멘토링 포함)', icon: <Presentation /> },
    { time: '17:00 - 18:30', title: '결과물 발표 및 심사', desc: '팀별 PT (5분 발표, 3분 Q&A)', icon: <Presentation /> },
    { time: '18:30 - 19:00', title: '시상식 및 폐회', desc: '우수팀 시상 및 심사평', icon: <Award /> }
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
