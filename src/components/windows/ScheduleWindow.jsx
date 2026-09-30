import React, { useState } from 'react';
import { Calendar, Clock, User, Users, Lightbulb, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { playClickSound } from '../../utils/audio';

export default function ScheduleWindow() {
  const [activeTab, setActiveTab] = useState('timeline'); // 'timeline' | 'topics' | 'ideas'
  const [selectedTopic, setSelectedTopic] = useState('all');

  const ideaExamples = [
    {
      category: '개인',
      title: '📱 교회 문자서비스 비용 절감 AI 카카오 알림톡 자동화',
      desc: '기존 단체 SMS 문발송 비용을 AI 자동 분류와 카카오 알림톡 API 연동으로 90% 이상 절감하는 방안',
      tech: 'LLM + Kakao API'
    },
    {
      category: '개인',
      title: '🎵 예배 찬양팀을 위한 간단 AI 자동 편곡 & 렌더링',
      desc: '코드 악보만 입력하면 찬양 보컬 및 악기 구성을 고려해 4성부 편곡과 가상 악기 가이드 음원을 자동 제작',
      tech: 'AI Audio / MIDI'
    },
    {
      category: '개인',
      title: '🚐 장소 및 교회 차량 신청 간편화 AI 대화형 챗봇',
      desc: '복잡한 서면 신청서 대신 자연어 음성/텍스트 명령으로 차량 reservation 및 장소 배정을 자동 조율',
      tech: 'Chatbot / NLP'
    },
    {
      category: '부서',
      title: '📖 교회 학교(교육부) AI 주일학교 다국어 과교재 생성기',
      desc: '초등부/중고등부 공과 공부 시 다문화 가정 청소년을 위한 다국어 번역 및 맞춤형 퀴즈 자동 생성',
      tech: 'LLM Prompting'
    },
    {
      category: '부서',
      title: '📊 행정/운영부 교회 봉사자 배치 및 주차 관리 최적화',
      desc: '주일 주차 공간 현황 파악 및 봉사 스케줄의 빈자리를 실시간 감지하여 자동 할당',
      tech: 'Vision AI / Optimization'
    },
    {
      category: '부서',
      title: '🤝 성도 교제 & 목양 기도제목 분류 AI 요약 대시보드',
      desc: '교구별/순별 중보기도 제목을 개인정보를 보호하며 키워드별로 분류하여 목회 행정 지원',
      tech: 'AI Summarizer'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Tab Controls */}
      <div className="win-tabs">
        <button
          className={`win-tab ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => { playClickSound(); setActiveTab('timeline'); }}
        >
          ⏰ 타임테이블 (10/25)
        </button>
        <button
          className={`win-tab ${activeTab === 'topics' ? 'active' : ''}`}
          onClick={() => { playClickSound(); setActiveTab('topics'); }}
        >
          🎯 공모 주제 (개인 / 부서)
        </button>
        <button
          className={`win-tab ${activeTab === 'ideas' ? 'active' : ''}`}
          onClick={() => { playClickSound(); setActiveTab('ideas'); }}
        >
          💡 아이디어 샘플 보관함
        </button>
      </div>

      {/* Tab 1: Timeline */}
      {activeTab === 'timeline' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="win-fieldset">
            <legend className="win-legend">📅 10월 25일 (주일) 당일 시간표</legend>
            <p style={{ fontSize: '12px', color: '#555', marginBottom: '10px' }}>
              행사는 동숭교회 <b>마당 및 엘림</b>에서 진행되며, 쇼케이스와 발표회가 연속 개최됩니다.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Event 1 */}
              <div
                className="win-outset"
                style={{ padding: '12px', background: '#fff', borderLeft: '6px solid #000080' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 'bold', color: '#000080', fontSize: '15px' }}>
                    12:30 ~ 13:30 (60분)
                  </span>
                  <span className="win-inset" style={{ padding: '2px 8px', fontSize: '11px', background: '#e1f5fe' }}>
                    마당 쇼케이스
                  </span>
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '4px' }}>
                  🏛️ 사역 쇼케이스 (연구 성과발표)
                </h4>
                <p style={{ fontSize: '13px', color: '#333' }}>
                  AI연구모임이 그동안 연구하고 실험한 AI활용 사례와 프로토타입을 소개합니다. 교회의 새로운 가능성을 함께 나눕니다.
                </p>
              </div>

              {/* Event 2 */}
              <div
                className="win-outset"
                style={{ padding: '12px', background: '#fff', borderLeft: '6px solid #008000' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 'bold', color: '#008000', fontSize: '15px' }}>
                    13:30 ~ 15:00 (90분)
                  </span>
                  <span className="win-inset" style={{ padding: '2px 8px', fontSize: '11px', background: '#e8f5e9' }}>
                    발표 & 시상식
                  </span>
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '4px' }}>
                  🎤 아이디어톤 참가자 발표 및 최종 시상
                </h4>
                <p style={{ fontSize: '13px', color: '#333' }}>
                  교회 내 실제 필요와 문제를 AI로 해결할 수 있는 아이디어를 당일 부문별(개인/부서)로 발표를 진행하고 최우수상 시상식을 실시합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Topics */}
      {activeTab === 'topics' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {/* Individual Category */}
            <div className="win-fieldset" style={{ background: '#fff' }}>
              <legend className="win-legend" style={{ color: '#000080' }}>
                👤 1. 개인 부문 주제
              </legend>
              <div style={{ fontWeight: 'bold', fontSize: '14px', margin: '6px 0', color: '#1a237e' }}>
                사역 현장(행정, 목회), 개인 신앙생활, 성도간의 교제 등
              </div>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '10px' }}>
                교회를 주제로 제한 없이 자유롭게 AI 활용 아이디어를 제안할 수 있습니다.
              </p>

              <div className="win-inset" style={{ padding: '10px', background: '#f5f5f5' }}>
                <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#d81b60', marginBottom: '6px' }}>
                  📌 아이디어 예시
                </div>
                <ul style={{ fontSize: '12px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>교회 문자서비스 비용 절감 혹은 대체 방안</li>
                  <li>찬양/예배용 간단한 편곡 도우미</li>
                  <li>장소 / 차량 신청 서비스 간편화 AI 챗봇</li>
                  <li>신앙생활 묵상 및 성경 구절 검색 보조 AI</li>
                </ul>
              </div>
            </div>

            {/* Department Category */}
            <div className="win-fieldset" style={{ background: '#fff' }}>
              <legend className="win-legend" style={{ color: '#008000' }}>
                👥 2. 부서 부문 주제
              </legend>
              <div style={{ fontWeight: 'bold', fontSize: '14px', margin: '6px 0', color: '#1b5e20' }}>
                부서에서 AI 활용 방안 제시
              </div>
              <p style={{ fontSize: '12px', color: '#555', marginBottom: '10px' }}>
                각 부서의 실제 업무와 사역 과정의 필요/문제를 해결할 솔루션을 자유롭게 제시합니다.
              </p>

              <div className="win-inset" style={{ padding: '10px', background: '#f5f5f5' }}>
                <div style={{ fontWeight: 'bold', fontSize: '12px', color: '#008000', marginBottom: '6px' }}>
                  📌 적용 가능한 사역 영역
                </div>
                <ul style={{ fontSize: '12px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li><b>교육부</b> : 공과 교재, 다국어 퀴즈 생성</li>
                  <li><b>찬양부</b> : 악보 정리, 미디어 자원 분류</li>
                  <li><b>행정부</b> : 교적/봉사자 관리, 서식 자동화</li>
                  <li><b>운영부</b> : 시설/차량/주차 배정 스마트화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Idea Samples */}
      {activeTab === 'ideas' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: 'bold' }}>💡 참가자 창의성 자극용 영감 보관함</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {['all', '개인', '부서'].map((cat) => (
                <button
                  key={cat}
                  className={`win-btn ${selectedTopic === cat ? 'active win-btn-primary' : ''}`}
                  onClick={() => { playClickSound(); setSelectedTopic(cat); }}
                  style={{ fontSize: '11px', padding: '2px 8px' }}
                >
                  {cat === 'all' ? '전체보기' : cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
            {ideaExamples
              .filter((item) => selectedTopic === 'all' || item.category === selectedTopic)
              .map((item, idx) => (
                <div key={idx} className="win-outset" style={{ padding: '10px', background: '#fff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        padding: '1px 6px',
                        background: item.category === '개인' ? '#e3f2fd' : '#e8f5e9',
                        color: item.category === '개인' ? '#000080' : '#008000',
                        fontWeight: 'bold',
                        border: '1px solid #ccc'
                      }}
                    >
                      {item.category} 부문
                    </span>
                    <span style={{ fontSize: '10px', color: '#666', fontFamily: 'monospace' }}>
                      {item.tech}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '13px', fontWeight: 'bold', margin: '4px 0', color: '#000' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.4' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
