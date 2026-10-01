import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';

export default function FaqContact() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: '코딩을 전혀 할 줄 모르는데 참가할 수 있나요?',
      a: '물론입니다! 본 대회는 프로그래밍 실력을 겨루는 대회가 아니라, AI 도구를 얼마나 잘 활용하여 참신한 아이디어를 내느냐가 핵심입니다. ChatGPT 등을 활용해 기획서나 프로토타입 디자인만 제출해도 충분합니다.'
    },
    {
      q: '팀원이 다른 부서 소속이어도 같이 참여할 수 있나요?',
      a: '네, 가능합니다. 부서가 달라도 2인 이상이라면 "팀 부문"으로 출전할 수 있습니다. 단, 신청 시 대표 1인의 부서를 주소속으로 기입해주시면 됩니다.'
    },
    {
      q: '산출물은 어떤 형태로 제출해야 하나요?',
      a: '자유 양식입니다. 아이디어를 잘 설명할 수 있는 PPT, Word, PDF 문서를 기본으로 하며, 노션 링크나 소개 영상(MP4)도 모두 환영합니다.'
    },
    {
      q: '당일에 꼭 참석해야 하나요?',
      a: '예선 서류 심사가 통과된 팀은 10월 25일 본선 당일에 오프라인으로 5분 PT 발표를 진행해야 하므로 반드시 참석하셔야 합니다.'
    }
  ];

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <h2 className="section-title">자주 묻는 질문</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto 80px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass-card"
              style={{ cursor: 'pointer', padding: '24px' }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text-main)', margin: 0, paddingRight: '24px' }}>
                  <span style={{ color: 'var(--color-primary)', marginRight: '8px' }}>Q.</span>
                  {faq.q}
                </h4>
                {openIdx === idx ? <ChevronUp size={20} color="var(--color-text-muted)" /> : <ChevronDown size={20} color="var(--color-text-muted)" />}
              </div>
              
              {openIdx === idx && (
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--color-secondary)', fontWeight: 700, marginRight: '8px' }}>A.</span>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="section-title">행사 문의처</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="glass-card" style={{ flex: 1, minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(15, 76, 129, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Mail size={24} />
            </div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>이메일 문의</h4>
            <a href="mailto:admin@dongsung.org" style={{ color: 'var(--color-text-muted)' }}>admin@dongsung.org</a>
          </div>
          
          <div className="glass-card" style={{ flex: 1, minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(15, 76, 129, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Phone size={24} />
            </div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>전화 문의</h4>
            <span style={{ color: 'var(--color-text-muted)' }}>010-0000-0000 (김유빈 간사)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
