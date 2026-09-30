import React, { useState } from 'react';
import { Phone, Mail, User, Send, Check, Copy, MessageCircle } from 'lucide-react';
import { playClickSound, playWin95TaDa } from '../../utils/audio';

export default function ContactWindow() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [inquiryText, setInquiryText] = useState('');
  const [sentInquiry, setSentInquiry] = useState(false);

  const phoneNum = '010-5231-6937';
  const emailAddr = 'dscaiteam@proton.me';

  const handleCopyPhone = () => {
    playClickSound();
    navigator.clipboard.writeText(phoneNum);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(emailAddr);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendSMS = () => {
    playWin95TaDa();
    setSentInquiry(true);
    const smsUrl = `sms:${phoneNum}?body=${encodeURIComponent('[AI아이디어톤 문의] ' + inquiryText)}`;
    window.location.href = smsUrl;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Contact Card 1: Organizer */}
      <div className="win-outset" style={{ padding: '14px', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <div
            className="win-outset"
            style={{
              width: '40px',
              height: '40px',
              background: '#000080',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px'
            }}
          >
            <User size={22} />
          </div>
          <div>
            <span style={{ fontSize: '11px', background: '#008080', color: '#fff', padding: '1px 6px' }}>
              행사 총괄 및 문의처
            </span>
            <h3 style={{ fontSize: '17px', fontWeight: 'bold' }}>김택훈 집사</h3>
          </div>
        </div>

        <div className="win-inset" style={{ padding: '10px', background: '#f5f5f5' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#008000" />
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{phoneNum}</span>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <a
                href={`tel:${phoneNum}`}
                className="win-btn win-btn-primary"
                style={{ textDecoration: 'none', fontSize: '12px', padding: '2px 8px' }}
                onClick={playClickSound}
              >
                전화 걸기
              </a>
              <button
                className="win-btn"
                style={{ fontSize: '12px', padding: '2px 8px' }}
                onClick={handleCopyPhone}
              >
                {copiedPhone ? <Check size={12} color="green" /> : <Copy size={12} />}
                {copiedPhone ? '복사됨' : '번호 복사'}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="#000080" />
              <span style={{ fontWeight: 'bold', fontSize: '14px', fontFamily: 'monospace' }}>{emailAddr}</span>
            </div>
            <button
              className="win-btn"
              style={{ fontSize: '12px', padding: '2px 8px' }}
              onClick={handleCopyEmail}
            >
              {copiedEmail ? <Check size={12} color="green" /> : <Copy size={12} />}
              {copiedEmail ? '복사됨' : '이메일 복사'}
            </button>
          </div>
        </div>
      </div>

      {/* Quick SMS Messenger Dialog */}
      <div className="win-fieldset" style={{ background: '#fff' }}>
        <legend className="win-legend" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <MessageCircle size={14} /> 💬 빠른 문자 문의 보내기 (SMS)
        </legend>

        <p style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>
          궁금한 사항이 있으시면 아래 메시지를 작성하여 김택훈 집사님 휴대폰으로 즉시 문자를 발송하실 수 있습니다.
        </p>

        <textarea
          className="win-inset"
          rows={3}
          style={{ width: '100%', padding: '8px', fontSize: '13px' }}
          placeholder="예: 안녕하세요! 부서 부문 아이디어 제안 파일럿 관련하여 문의드립니다."
          value={inquiryText}
          onChange={(e) => setInquiryText(e.target.value)}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
          <button
            className="win-btn win-btn-primary"
            disabled={!inquiryText.trim()}
            onClick={handleSendSMS}
          >
            <Send size={14} /> 문자 메시지 앱 열기
          </button>
        </div>
      </div>
    </div>
  );
}
