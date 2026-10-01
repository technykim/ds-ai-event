import React from 'react';
import { Send, FileText, ExternalLink, Mail } from 'lucide-react';

export default function Submission() {
  return (
    <section id="submit" className="section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title">참가 신청 및 산출물 제출</h2>
            <p className="section-subtitle">
              대회 참가를 원하시는 분들은 먼저 참가 신청을 완료하신 후, 기한 내에 산출물을 이메일로 제출해 주세요.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* 참가 신청 카드 */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  <FileText size={24} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>1단계: 참가 신청</h3>
                </div>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  아이디어톤에 참여할 개인 또는 팀을 등록해 주세요. 어떤 아이디어를 준비 중인지 대략적으로 남겨주시면 됩니다.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 76, 129, 0.05)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '4px' }}>참가 신청 마감일</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-secondary)' }}>10월 24일 까지</div>
              </div>

              <a 
                href="https://form.typeform.com/to/jeo0Y0No" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary" 
                style={{ padding: '16px', fontSize: '1.125rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: 'auto' }}
              >
                참가 신청서 작성하기
                <ExternalLink size={20} />
              </a>
            </div>

            {/* 산출물 제출 카드 */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-secondary)', marginBottom: '8px' }}>
                  <Send size={24} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>2단계: 산출물 제출</h3>
                </div>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  준비된 기획서(PPT, PDF 등), 시연 영상, 또는 완성된 결과물(MVP)을 아래 이메일로 보내주세요.
                </p>
              </div>

              <div style={{ background: 'rgba(0, 188, 212, 0.05)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '4px' }}>산출물 제출 마감일</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>행사 전까지</div>
              </div>

              <div style={{ background: 'var(--color-bg-alt)', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--color-border)', marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                  <Mail size={32} />
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>제출 이메일 주소</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', wordBreak: 'break-all' }}>
                  <a href="mailto:dscaiteam@proton.me">dscaiteam@proton.me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
