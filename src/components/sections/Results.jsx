import React from 'react';
import { Trophy, Award, Medal, Lightbulb, Sparkles, ExternalLink } from 'lucide-react';

export default function Results() {
  const winners = [
    {
      rank: '1등',
      title: '청각장애우를 위한 설교말씀 실시간 자막생성',
      participant: '고광현',
      badgeColor: '#D97706',
      badgeBg: 'rgba(245, 158, 11, 0.14)',
      borderColor: '#F59E0B',
      icon: <Trophy size={20} color="#D97706" />,
    },
    {
      rank: '2등',
      title: '동숭 주보 다시 읽기',
      participant: '김우현',
      badgeColor: '#475569',
      badgeBg: 'rgba(148, 163, 184, 0.2)',
      borderColor: '#94A3B8',
      icon: <Medal size={20} color="#64748B" />,
    },
    {
      rank: '3등',
      title: '별이 빛나는 기도',
      participant: '이성실',
      badgeColor: '#B45309',
      badgeBg: 'rgba(217, 119, 6, 0.12)',
      borderColor: '#D97706',
      icon: <Award size={20} color="#B45309" />,
    },
  ];

  const entries = [
    {
      no: 1,
      name: '김우현',
      dept: '1교구 7구역',
      title: '동숭 주보 다시 읽기',
      summary: '공개된 주보 158주를 AI와 함께 다시 읽고, 지나온 길에서 내일의 아이디어를 찾습니다.',
      award: '2등',
    },
    {
      no: 2,
      name: '박창규',
      dept: '1교구/안수집사회',
      title: '게시판(DID) 관리 시스템',
      summary: '디지털 게시판 관리 시스템 (전산화)\n1) 적용범위 : 교회 내,외부 홍보용 게시판, 프랜카드 포함\n2) TYPE : 터치 판넬, 키오스크 등 (EX. DID 디지털 인포메이션 디스플레이)',
    },
    {
      no: 3,
      name: '김경윤',
      dept: '1교구/일대일양육팀/발사랑전도팀/5남선교회',
      title: '믿음의 길 (Faith Path) - 나의 신앙 여정을 따라가는 서비스',
      summary: '“나의 믿음은 어디까지 자랐을까?” 나의 신앙 여정을 한눈에 확인하고, 아직 경험하지 못한 프로그램의 배움과 섬김의 기회를 발견하는 서비스',
    },
    {
      no: 4,
      name: '고광현',
      dept: '1교구',
      title: '귀가 어두우신 어르신들과 청각 장애우들을 위한 설교말씀 실시간 자막생성',
      summary: '귀가 어두우신 어르신들과 청각 장애우들을 위한 설교말씀 실시간 자막생성',
      award: '1등',
    },
    {
      no: 5,
      name: '이성실',
      dept: '교역자',
      title: '동숭의 숲: 어린이부 공과 퀴즈 및 요절 녹음 앱',
      summary: '어린이부서 공과공부 복습퀴즈 및 구절 녹음으로 양 캐릭터 성장시키는 앱',
    },
    {
      no: 6,
      name: '김택훈',
      dept: '동숭교회AI연구모임/통일선교부/4남선교회',
      title: '당근! 동숭교회지!',
      summary: '교회의 규모가 커짐에 따라 숫자는 많아져서, 성도간의 서로 친교, 교제, 소통을 증진시키는 커뮤니티 기능을 활성화 하고자 함. 기본적으로 당근마켓과 거의 유사하나 참여자는 동숭교회 교인 커뮤니티로 한정함.',
    },
    {
      no: 7,
      name: '정주신',
      dept: '2교구',
      title: '말씀에서 삶으로 : 목사님 설교 RAG 기반의 차세대 교회 통합 LMS',
      summary: '주일 설교 빅데이터를 RAG 기술로 재구조화하여 주일의 은혜를 일주일(168시간)의 삶으로 확장하는 차세대 교회 통합 양육 플랫폼입니다. 목사님의 설교를 학습한 AI가 성도에게는 맞춤형 5일 묵상 가이드와 챗봇, 숏폼 QT를 제공하여 일상 속 영적 성장을 이끌어 줍니다. 동시에 사역자에게는 연간 절기와 설교 주제에 맞춘 찬양·성가대 콘티 자동 구성, 위기 감지 기반의 목양 알림을 지원합니다. 철저한 신학적 가드레일 아래 설교 한 편으로 성도 양육과 예배 기획을 하나로 묶어주는 독창적인 목회 생태계 구축안입니다.',
    },
    {
      no: 8,
      name: '마진수',
      dept: '청장년부',
      title: '동숭교회 건물안내',
      summary: '동숭교회 건물안내 앱입니다. 교회 건물을 둘러보거나 공간 이름(예: 하늘소리)을 검색하면 위치를 알려줍니다.',
    },
    {
      no: 9,
      name: '이병렬',
      dept: '5남/청장년부/QT팀/로고스문학회',
      title: '봉사하고 친교하자!',
      summary: '1. 모두가 각자 자기만의 방식으로 봉사 할 수 있는 기회를 제공한다.\n2. 새로운 분들을 따뜻하게 모두가 가족처럼 친구처럼 함께 맞이한다.',
    },
    {
      no: 10,
      name: '이성실',
      dept: '교역자',
      title: '너를 위한 기도: 자녀를 위한 기도 앱',
      summary: '너를 위한 기도: 부모가 자녀를 위한 기도 녹음 앱으로 자동으로 개인 드라이브에 저장',
    },
    {
      no: 11,
      name: '이성실',
      dept: '교역자',
      title: '별이 빛나는 기도: 기도 요청 및 감사 나눔',
      summary: '별이 빛나는 기도: 기도 요청 글 업로드, 댓글로 기도, 기도 응답에 대한 감사 나눔',
      award: '3등',
    },
    {
      no: 12,
      name: '장원찬',
      dept: '청장년부 부장',
      title: '청장년부 맞춤형 홈페이지',
      summary: '긴 설교를 짧은 영상과 텍스트로 요약, 맞춤형 자료실, 소그룹 스마트 출결',
    },
    {
      no: 13,
      name: '장원찬',
      dept: '청장년부 부장',
      title: '일대일 제자양육: 성경 암송(듣기 및 퀴즈, 관리)',
      summary: '필수성구 15절 반복듣기 등, 암송상태 점검, 빈칸 채우기 퀴즈 등',
    },
  ];

  const showcases = [
    { name: '포도 - 교회나눔터', participant: '김택훈', url: 'https://ds-ai-sharing.vercel.app/' },
    { name: '일대일제자양육 성경암송', participant: '장원찬', url: '' },
    { name: '동숭교회 사용설명서', participant: '마진수, 김예은', url: '' },
    { name: '릴레이 성경녹음', participant: '이성실', url: '' },
    { name: '성경영상제작', participant: '강순국', url: '' },
  ];

  return (
    <section id="results" className="section section-alt">
      <div className="container">
        <h2 className="section-title">행사 결과</h2>
        <p className="section-subtitle">
          제1회 동숭교회 AI활용 아이디어톤 수상작과 전체 참가 작품, 쇼케이스 전시작을 소개합니다.
        </p>

        <style>{`
          .results-table-wrap {
            width: 100%;
            overflow-x: auto;
          }
          .results-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          .results-table th {
            background: rgba(15, 76, 129, 0.06);
            color: var(--color-primary-dark);
            font-weight: 700;
            font-size: 0.95rem;
            padding: 16px 20px;
            border-bottom: 2px solid var(--color-border);
            white-space: nowrap;
          }
          .results-table td {
            padding: 18px 20px;
            border-bottom: 1px solid var(--color-border);
            font-size: 0.98rem;
            vertical-align: top;
          }
          .results-table tr:last-child td {
            border-bottom: none;
          }
          .results-table tbody tr {
            transition: var(--transition-fast);
          }
          .results-table tbody tr:hover {
            background: rgba(15, 76, 129, 0.025);
          }
          .results-subheading {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-primary-dark);
            margin-bottom: 16px;
          }
          @media (max-width: 768px) {
            .results-table th,
            .results-table td {
              padding: 14px 12px;
              font-size: 0.9rem;
            }
          }
        `}</style>

        {/* 1. 입상 결과 표 */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 56px auto' }}>
          <h3 className="results-subheading">
            <Trophy size={24} color="var(--color-primary)" />
            수상작 안내
          </h3>
          <div className="glass-card results-table-wrap" style={{ padding: 0, background: 'var(--color-bg-main)' }}>
            <table className="results-table">
              <thead>
                <tr>
                  <th style={{ width: '120px', textAlign: 'center' }}>입상</th>
                  <th>타이틀</th>
                  <th style={{ width: '140px', textAlign: 'center' }}>참가자</th>
                </tr>
              </thead>
              <tbody>
                {winners.map((item) => (
                  <tr key={item.rank}>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          borderRadius: '9999px',
                          background: item.badgeBg,
                          color: item.badgeColor,
                          fontWeight: 800,
                          fontSize: '0.92rem',
                          border: `1px solid ${item.borderColor}`,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.icon}
                        {item.rank}
                      </span>
                    </td>
                    <td style={{ fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.5, verticalAlign: 'middle' }}>
                      {item.title}
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--color-primary-dark)', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                      {item.participant}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. 참가 작품 전체 목록 표 */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 56px auto' }}>
          <h3 className="results-subheading">
            <Lightbulb size={24} color="var(--color-primary)" />
            참가 작품 목록 (총 {entries.length}작품)
          </h3>
          <div className="glass-card results-table-wrap" style={{ padding: 0, background: 'var(--color-bg-main)' }}>
            <table className="results-table">
              <thead>
                <tr>
                  <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                  <th style={{ width: '150px' }}>참가자</th>
                  <th style={{ width: '280px' }}>작품명</th>
                  <th>아이디어 요약</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.no}>
                    <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                      {entry.no}
                    </td>
                    <td>
                      <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>{entry.name}</div>
                      {entry.dept && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px', lineHeight: 1.35 }}>
                          {entry.dept}
                        </div>
                      )}
                    </td>
                    <td>
                      <div style={{ fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.45 }}>
                        {entry.title}
                      </div>
                      {entry.award && (
                        <span
                          style={{
                            display: 'inline-block',
                            marginTop: '6px',
                            padding: '2px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            background: 'rgba(15, 76, 129, 0.1)',
                            color: 'var(--color-primary)',
                          }}
                        >
                          🏆 {entry.award} 수상
                        </span>
                      )}
                    </td>
                    <td style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {entry.summary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. 쇼케이스 전시 작품 표 */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="results-subheading">
            <Sparkles size={24} color="var(--color-secondary)" />
            쇼케이스 전시 작품
          </h3>
          <div className="glass-card results-table-wrap" style={{ padding: 0, background: 'var(--color-bg-main)' }}>
            <table className="results-table">
              <thead>
                <tr>
                  <th>쇼케이스명</th>
                  <th style={{ width: '180px', textAlign: 'center' }}>참가자</th>
                  <th style={{ width: '160px', textAlign: 'center' }}>비고</th>
                </tr>
              </thead>
              <tbody>
                {showcases.map((sc) => (
                  <tr key={sc.name}>
                    <td style={{ fontWeight: 700, color: 'var(--color-text-main)', verticalAlign: 'middle' }}>
                      {sc.name}
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--color-primary-dark)', verticalAlign: 'middle' }}>
                      {sc.participant}
                    </td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      {sc.url ? (
                        <a
                          href={sc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: 'var(--color-primary)',
                          }}
                        >
                          서비스 바로가기 <ExternalLink size={15} />
                        </a>
                      ) : (
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>현장 전시</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
