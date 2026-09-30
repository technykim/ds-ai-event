import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Paperclip, Send, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playWin95TaDa } from '../../utils/audio';

export default function SubmissionWindow() {
  const [formData, setFormData] = useState({
    teamName: '',
    category: '개인',
    parish: '',
    phone: '',
    email: '',
    pilotLink: '',
    ideaSummary: ''
  });

  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);

  const mailRecipient = 'dscaiteam@proton.me';
  const mailSubject = '[동숭교회]AI아이디어 경진대회 산출물 제출';

  const generateMailBody = () => {
    return `[동숭교회 AI활용 아이디어 경진대회 산출물 제출]

1. 팀명: ${formData.teamName || '(팀명 입력)'}
2. 참가 부문: ${formData.category} 부문
3. 소속 교구: ${formData.parish || '(교구 입력)'}
4. 대표 연락처: ${formData.phone || '(연락처 입력)'}
5. 대표 이메일: ${formData.email || '(이메일 입력)'}

6. 파일럿 서비스 링크 (해당 시): 
${formData.pilotLink || '없음 (발표 슬라이드 첨부)'}

7. 아이디어 요약:
${formData.ideaSummary || '첨부된 발표 슬라이드를 참조해 주세요.'}

* 발표용 슬라이드 (PPT/PDF) 파일이 이 메일에 첨부되었습니다.`;
  };

  const handleCopySubject = () => {
    playClickSound();
    navigator.clipboard.writeText(mailSubject);
    setCopiedSubject(true);
    setTimeout(() => setCopiedSubject(false), 2000);
  };

  const handleCopyBody = () => {
    playClickSound();
    navigator.clipboard.writeText(generateMailBody());
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };

  const handleOpenMailClient = () => {
    playWin95TaDa();
    confetti({ particleCount: 50, spread: 60 });
    const subjectEncoded = encodeURIComponent(mailSubject);
    const bodyEncoded = encodeURIComponent(generateMailBody());
    window.location.href = `mailto:${mailRecipient}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Submission Info Box */}
      <div className="win-outset" style={{ padding: '12px', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Mail size={20} color="#000080" />
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000080' }}>
            📨 산출물 제출 가이드 및 제출처
          </h3>
        </div>

        <div className="win-inset" style={{ padding: '10px', background: '#f5f5f5', marginBottom: '10px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 12px', fontSize: '13px' }}>
            <span style={{ fontWeight: 'bold', color: '#333' }}>• 제출 이메일:</span>
            <span style={{ fontWeight: 'bold', color: '#000080', fontFamily: 'monospace' }}>
              dscaiteam@proton.me
            </span>

            <span style={{ fontWeight: 'bold', color: '#333' }}>• 필수 메일 제목:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ background: '#ffff8d', padding: '1px 6px', border: '1px solid #000', fontWeight: 'bold', fontSize: '12px' }}>
                {mailSubject}
              </span>
              <button
                className="win-btn"
                style={{ fontSize: '11px', padding: '1px 6px' }}
                onClick={handleCopySubject}
              >
                {copiedSubject ? <Check size={12} color="green" /> : <Copy size={12} />}
                {copiedSubject ? '복사됨!' : '제목 복사'}
              </button>
            </div>

            <span style={{ fontWeight: 'bold', color: '#333' }}>• 필수 첨부 파일:</span>
            <span>발표용 슬라이드 (PPT, PDF 등)</span>

            <span style={{ fontWeight: 'bold', color: '#333' }}>• 추가 포함 사항:</span>
            <span>실제 파일럿 구현 시 <b>해당 서비스 링크(URL)</b> 포함 (가산점 부여)</span>
          </div>
        </div>
      </div>

      {/* Interactive Form to Generate Email */}
      <div className="win-fieldset" style={{ background: '#fff' }}>
        <legend className="win-legend" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={14} /> ✍️ 산출물 제출 이메일 작성 도우미
        </legend>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '6px' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
              팀명 / 참가자명 *
            </label>
            <input
              type="text"
              className="win-inset"
              style={{ width: '100%', padding: '6px' }}
              placeholder="예: AI에이블팀 / 홍길동"
              value={formData.teamName}
              onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
              참가 부문 선택 *
            </label>
            <select
              className="win-inset"
              style={{ width: '100%', padding: '6px' }}
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="개인">개인 부문</option>
              <option value="부서">부서 부문</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
              소속 교구 *
            </label>
            <input
              type="text"
              className="win-inset"
              style={{ width: '100%', padding: '6px' }}
              placeholder="예: 3교구 / 청년부"
              value={formData.parish}
              onChange={(e) => setFormData({ ...formData, parish: e.target.value })}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
              대표 연락처 *
            </label>
            <input
              type="text"
              className="win-inset"
              style={{ width: '100%', padding: '6px' }}
              placeholder="010-0000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
              대표 이메일 주소 *
            </label>
            <input
              type="email"
              className="win-inset"
              style={{ width: '100%', padding: '6px' }}
              placeholder="example@domain.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
              🚀 파일럿 서비스 링크 (구현시 입력 - 가산점 부여)
            </label>
            <input
              type="url"
              className="win-inset"
              style={{ width: '100%', padding: '6px' }}
              placeholder="https://my-ai-pilot.vercel.app"
              value={formData.pilotLink}
              onChange={(e) => setFormData({ ...formData, pilotLink: e.target.value })}
            />
          </div>
        </div>

        {/* Mail Content Preview Box */}
        <div style={{ marginTop: '12px' }}>
          <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '3px' }}>
            📄 생성된 메일 본문 미리보기:
          </label>
          <textarea
            className="win-inset"
            rows={6}
            readOnly
            style={{
              width: '100%',
              padding: '8px',
              fontFamily: 'monospace',
              fontSize: '12px',
              background: '#f9f9f9',
              color: '#333'
            }}
            value={generateMailBody()}
          />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '12px' }}>
          <button
            className="win-btn win-btn-primary"
            style={{ padding: '8px 16px', fontSize: '14px' }}
            onClick={handleOpenMailClient}
          >
            <Send size={16} /> 메일 앱으로 바로 보내기 (dscaiteam@proton.me)
          </button>

          <button
            className="win-btn"
            style={{ padding: '8px 16px', fontSize: '14px' }}
            onClick={handleCopyBody}
          >
            {copiedBody ? <Check size={16} color="green" /> : <Copy size={16} />}
            {copiedBody ? '본문 복사 완료!' : '본문 전체 복사'}
          </button>
        </div>
      </div>
    </div>
  );
}
