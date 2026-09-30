import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Award, Sparkles, Send, FileText, ExternalLink } from 'lucide-react';
import { playClickSound } from '../../utils/audio';

export default function OverviewWindow({ onOpenWindow }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Event Date: October 25, 2026, 12:30:00
  useEffect(() => {
    const targetDate = new Date('2026-10-25T12:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Top Banner / Hero Box */}
      <div
        className="win-outset"
        style={{
          background: 'linear-gradient(135deg, #000080 0%, #008080 100%)',
          color: '#fff',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span
              style={{
                background: '#ffff00',
                color: '#000',
                fontWeight: 'bold',
                padding: '2px 8px',
                fontSize: '12px',
                border: '1px solid #000'
              }}
            >
              제1회 AI활용 아이디어 경진대회
            </span>
            <span style={{ fontSize: '12px', color: '#81d4fa' }}>● LIVE ONLINE</span>
          </div>

          <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '8px 0', textShadow: '2px 2px 0 #000' }}>
            AI 활용 아이디어톤
          </h1>

          <p
            style={{
              fontSize: '15px',
              color: '#fff176',
              fontStyle: 'italic',
              marginTop: '4px',
              fontFamily: 'var(--font-retro)'
            }}
          >
            "당신의 생각이, 교회를 넘어 이웃에게까지 이어질 수 있습니다."
          </p>
        </div>
      </div>

      {/* D-DAY Live Countdown Bar */}
      <div className="win-fieldset">
        <legend className="win-legend" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Clock size={14} /> D-DAY 행사 카운트다운 (2026년 10월 25일 12:30 PM)
        </legend>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            textAlign: 'center',
            marginTop: '4px'
          }}
        >
          {[
            { label: '남은 일수 (DAYS)', val: timeLeft.days },
            { label: '시간 (HOURS)', val: timeLeft.hours },
            { label: '분 (MINUTES)', val: timeLeft.minutes },
            { label: '초 (SECONDS)', val: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="win-inset" style={{ padding: '8px 4px', background: '#000', color: '#00ff00' }}>
              <div style={{ fontFamily: 'VT323, monospace', fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>
                {String(item.val).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '10px', color: '#aaa', marginTop: '2px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Info Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        <div className="win-outset" style={{ padding: '12px', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000080', fontWeight: 'bold', marginBottom: '6px' }}>
            <Calendar size={18} /> 행사 일시
          </div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>10월 25일 (주일)</div>
          <div style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>
            • 12:30 ~ 13:30 : 마당 쇼케이스<br/>
            • 13:30 ~ 15:00 : 참가자 발표 & 시상
          </div>
        </div>

        <div className="win-outset" style={{ padding: '12px', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#008000', fontWeight: 'bold', marginBottom: '6px' }}>
            <MapPin size={18} /> 행사 장소
          </div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>동숭교회 마당 및 엘림</div>
          <div style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>
            오프라인 발표 및 쇼케이스 부스 운영
          </div>
        </div>

        <div className="win-outset" style={{ padding: '12px', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d81b60', fontWeight: 'bold', marginBottom: '6px' }}>
            <Users size={18} /> 참가 대상
          </div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>동숭교회 구성원 누구나</div>
          <div style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>
            개인 · 부서 · 동아리 등 모든 교인
          </div>
        </div>
      </div>

      {/* Program 1 & 2 Summary */}
      <div className="win-fieldset">
        <legend className="win-legend">💡 주요 프로그램 안내</legend>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div className="win-inset" style={{ padding: '10px', background: '#f8f9fa' }}>
            <div style={{ fontWeight: 'bold', color: '#000080', fontSize: '14px', marginBottom: '4px' }}>
              1. 사역 쇼케이스 (연구 성과발표)
            </div>
            <p style={{ fontSize: '12px', color: '#333', leadingHeight: '1.5' }}>
              AI연구모임이 그동안 연구하고 실험한 AI활용 사례와 프로토타입을 소개합니다. 교회의 새로운 가능성을 함께 나눕니다.
            </p>
          </div>

          <div className="win-inset" style={{ padding: '10px', background: '#f8f9fa' }}>
            <div style={{ fontWeight: 'bold', color: '#008000', fontSize: '14px', marginBottom: '4px' }}>
              2. 아이디어 톤 (개인 / 부서 발표)
            </div>
            <p style={{ fontSize: '12px', color: '#333', leadingHeight: '1.5' }}>
              교회 내 실제 필요와 문제를 AI로 해결할 수 있는 아이디어를 제안하고 행사 당일 각 부문별로 발표를 진행합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links & CTA Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '4px' }}>
        <button
          className="win-btn win-btn-primary"
          style={{ padding: '8px 16px', fontSize: '14px' }}
          onClick={() => {
            playClickSound();
            onOpenWindow('submission');
          }}
        >
          <Send size={16} /> 산출물 제출 가이드 가기
        </button>

        <button
          className="win-btn"
          style={{ padding: '8px 16px', fontSize: '14px' }}
          onClick={() => {
            playClickSound();
            onOpenWindow('schedule');
          }}
        >
          <Calendar size={16} /> 상세 일정 및 부문 보기
        </button>

        <button
          className="win-btn"
          style={{ padding: '8px 16px', fontSize: '14px' }}
          onClick={() => {
            playClickSound();
            onOpenWindow('prizes');
          }}
        >
          <Award size={16} /> 시상 혜택 및 가산점
        </button>

        <button
          className="win-btn"
          style={{ padding: '8px 16px', fontSize: '14px' }}
          onClick={() => {
            playClickSound();
            onOpenWindow('poster');
          }}
        >
          <FileText size={16} /> 포스터 크게보기
        </button>
      </div>
    </div>
  );
}
