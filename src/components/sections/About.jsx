import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">AI연구모임 소개</h2>
        <p className="section-subtitle">
          교회를 위한 작은 실험실, 동숭교회 AI연구모임을 소개합니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', marginTop: '48px', maxWidth: '900px', margin: '48px auto 0 auto' }}>
          
          {/* 소개글 */}
          <div className="glass-card" style={{ padding: '40px', lineHeight: 1.8, fontSize: '1.125rem', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '16px' }}>
              동숭교회 AI연구모임은 사역을 돕는 도구인 AI를 통해 교회와 성도에게 실제적인 도움을 주는 것을 목표로 <strong>2026년 5월 3일 첫 오프라인 모임을 시작</strong>하였습니다.
            </p>
            <p style={{ marginBottom: '16px' }}>
              모임은 주로 각자 생각하고 연구한 내용을 발표하는 세미나 형식으로 진행되며, 현재까지 2주에 한 번씩 온·오프라인으로 모임을 지속하고 있습니다.
            </p>
            <p>
              저희는 <strong>"실험실(Lab)"</strong>처럼 AI에 관한 다양한 연구와 실행을 통해 경험을 쌓아 교회에 도움이 될 만한 연구를 하고 있습니다. 부담 없이 교회를 위한 도구로 AI 활용에 관심 있는 분은 언제든 연락 주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
