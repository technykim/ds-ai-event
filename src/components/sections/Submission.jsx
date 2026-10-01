import React, { useState } from 'react';
import { Send, FileText, CheckCircle } from 'lucide-react';

export default function Submission() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    type: 'individual',
    title: '',
    desc: '',
    aiTools: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const typeStr = formData.type === 'individual' ? '개인' : '팀/부서';
    const subject = `[아이디어톤] ${typeStr} - ${formData.title} 제출`;
    const body = `이름(팀명): ${formData.name}\n소속 부서: ${formData.department}\n참여 부문: ${typeStr}\n\n아이디어 제목: ${formData.title}\n\n아이디어 요약:\n${formData.desc}\n\n사용/활용 예정인 AI 툴:\n${formData.aiTools}\n\n(여기에 세부 설명이나 링크를 추가해주세요)`;
    
    const mailtoLink = `mailto:dscaiteam@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="submit" className="section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title">산출물 제출</h2>
            <p className="section-subtitle">
              아래 양식을 작성하여 산출물을 제출해 주세요. 작성하신 내용은 이메일 초안으로 자동 생성됩니다.
            </p>
          </div>

          <form className="glass-card" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>이름 (또는 팀명) *</label>
                <input 
                  type="text" name="name" required
                  className="input-field" 
                  placeholder="홍길동 / 청년부 A팀" 
                  value={formData.name} onChange={handleChange}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>소속 부서 *</label>
                <input 
                  type="text" name="department" required
                  className="input-field" 
                  placeholder="예: 청년부, 유초등부" 
                  value={formData.department} onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '12px' }}>참여 부문 *</label>
              <div style={{ display: 'flex', gap: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="radio" name="type" value="individual" 
                    checked={formData.type === 'individual'} onChange={handleChange}
                    style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }}
                  />
                  개인 부문
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="radio" name="type" value="team" 
                    checked={formData.type === 'team'} onChange={handleChange}
                    style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }}
                  />
                  부서 부문 (팀)
                </label>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>아이디어 제목 *</label>
              <input 
                type="text" name="title" required
                className="input-field" 
                placeholder="가장 직관적인 제목을 지어주세요" 
                value={formData.title} onChange={handleChange}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>아이디어 요약 *</label>
              <textarea 
                name="desc" rows="4" required
                className="input-field" 
                placeholder="어떤 문제를 해결하는지, 어떻게 동작하는지 간략히 설명해주세요." 
                value={formData.desc} onChange={handleChange}
                style={{ resize: 'vertical' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>사용/활용 예정인 AI 툴</label>
              <input 
                type="text" name="aiTools" 
                className="input-field" 
                placeholder="예: ChatGPT, Midjourney, vrew 등" 
                value={formData.aiTools} onChange={handleChange}
              />
            </div>

            <div style={{ background: 'var(--color-bg-alt)', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.875rem' }}>
              <FileText size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '4px' }}>제출 전 확인사항</p>
                <p style={{ color: 'var(--color-text-muted)' }}>제출 버튼을 누르면 이메일 앱이 열리며 초안이 작성됩니다. <strong>PPT, PDF 등 추가 첨부파일이 있다면 이메일 전송 화면에서 잊지 말고 꼭 첨부해주세요.</strong> (제출 마감: 10월 25일 자정)</p>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.125rem', marginTop: '16px' }}>
              <Send size={20} />
              이메일로 제출하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
