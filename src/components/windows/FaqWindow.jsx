import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronRight, MessageSquareCheck } from 'lucide-react';
import { playClickSound } from '../../utils/audio';

export default function FaqWindow() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIdx, setExpandedIdx] = useState(0);

  const faqs = [
    {
      q: '참가 대상은 누구인가요?',
      a: '동숭교회 구성원이라면 누구나 참여가 가능합니다! 개인, 부서, 동아리, 구역/순 등 원하시는 단위로 자유롭게 신청해 주세요.'
    },
    {
      q: '개발자나 코딩 기술이 없어도 참여할 수 있나요?',
      a: '네, 적극 환영합니다! 본 경진대회는 기술적 코딩보다 교회의 사역과 성도의 필요를 해결하는 "아이디어와 기획"에 집중합니다. 발표용 슬라이드(PPT, PDF)만 작성하여 제출하시면 됩니다.'
    },
    {
      q: '파일럿 데모 서비스를 반드시 만들어야 하나요?',
      a: '아닙니다! 발표용 슬라이드만 제출하셔도 정상 평가를 받으실 수 있습니다. 다만, 실제 아이디어를 시범 구현한 웹/앱 파일럿 서비스 링크를 함께 첨부하시면 가산점이 부여됩니다.'
    },
    {
      q: '개인 부문과 부서 부문의 차이는 무엇인가요?',
      a: '• 개인 부문: 사역현장, 개인신앙생활, 성도간 교제 등 자유로운 주제로 개인 제출\n• 부서 부문: 교육, 찬양, 행정, 운영 등 해당 부서의 사역 개선 및 필요를 제안하는 제출입니다.'
    },
    {
      q: '최우수상 혜택인 AI 구독료 지원(6개월)은 어떻게 지급되나요?',
      a: '개인/부서 부문별 최우수상 각 1팀에게 ChatGPT Plus, Claude, Midjourney 등 AI 서비스 6개월 구독료를 지원합니다. (단, 제안한 아이디어를 실제 서비스로 구현하는 용도로 사용되어야 함)'
    },
    {
      q: '산출물 제출 마감 및 방법은 어떻게 되나요?',
      a: '발표용 슬라이드(PPT/PDF)를 작성하여 이메일 dscaiteam@proton.me 로 제출해 주세요. 메일 제목은 "[동숭교회]AI아이디어 경진대회 산출물 제출" 로 통일해 주셔야 합니다.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (item) => item.q.includes(searchQuery) || item.a.includes(searchQuery)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Search Input Box */}
      <div className="win-outset" style={{ padding: '8px', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Search size={16} color="#555" />
          <input
            type="text"
            className="win-inset"
            style={{ flex: 1, padding: '4px 8px', fontSize: '13px' }}
            placeholder="질문 키워드 검색 (예: 비개발자, 가산점, 시상, 제출)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Accordion FAQ list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filteredFaqs.map((faq, idx) => {
          const isOpen = expandedIdx === idx;
          return (
            <div key={idx} className="win-outset" style={{ background: '#fff' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  cursor: 'pointer',
                  background: isOpen ? '#e0f2fe' : '#fff',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  color: isOpen ? '#000080' : '#333'
                }}
                onClick={() => {
                  playClickSound();
                  setExpandedIdx(isOpen ? -1 : idx);
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={16} color={isOpen ? '#000080' : '#666'} />
                  <span>Q. {faq.q}</span>
                </div>
                {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>

              {isOpen && (
                <div
                  className="win-inset"
                  style={{
                    padding: '10px 12px',
                    margin: '0 8px 8px 8px',
                    background: '#fafafa',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line',
                    color: '#222'
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', color: '#008000', fontWeight: 'bold', marginBottom: '4px' }}>
                    <MessageSquareCheck size={16} /> 답변 (A)
                  </div>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="win-inset" style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
            검색 결과가 없습니다. 다른 키워드로 검색해 보세요.
          </div>
        )}
      </div>
    </div>
  );
}
