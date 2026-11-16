import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

export default function Results() {
  const winners = [
    {
      rank: '1등',
      title: '청각장애우를 위한 설교말씀 실시간 자막생성',
      participant: '고광현',
      badgeColor: '#D97706',
      badgeBg: 'rgba(245, 158, 11, 0.14)',
      borderColor: '#F59E0B',
      icon: <Trophy size={22} color="#D97706" />,
    },
    {
      rank: '2등',
      title: '동숭 주보 다시 읽기',
      participant: '김우현',
      badgeColor: '#475569',
      badgeBg: 'rgba(148, 163, 184, 0.2)',
      borderColor: '#94A3B8',
      icon: <Medal size={22} color="#64748B" />,
    },
    {
      rank: '3등',
      title: '별이 빛나는 기도',
      participant: '이성실',
      badgeColor: '#B45309',
      badgeBg: 'rgba(217, 119, 6, 0.12)',
      borderColor: '#D97706',
      icon: <Award size={22} color="#B45309" />,
    },
  ];

  return (
    <section id="results" className="section section-alt">
      <div className="container">
        <h2 className="section-title">행사 결과</h2>
        <p className="section-subtitle">
          제1회 동숭교회 AI활용 아이디어톤 수상작을 소개합니다. 참여해 주신 모든 분들께 감사드립니다.
        </p>

        <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '0', overflow: 'hidden', background: 'var(--color-bg-main)' }}>
          <style>{`
            .results-table {
              width: 100%;
              border-collapse: collapse;
              text-align: left;
            }
            .results-table th {
              background: rgba(15, 76, 129, 0.06);
              color: var(--color-primary-dark);
              font-weight: 700;
              font-size: 1rem;
              padding: 18px 24px;
              border-bottom: 2px solid var(--color-border);
            }
            .results-table td {
              padding: 22px 24px;
              border-bottom: 1px solid var(--color-border);
              font-size: 1.0625rem;
              vertical-align: middle;
            }
            .results-table tr:last-child td {
              border-bottom: none;
            }
            .results-table tbody tr {
              transition: var(--transition-fast);
            }
            .results-table tbody tr:hover {
              background: rgba(15, 76, 129, 0.02);
            }
            @media (max-width: 640px) {
              .results-table th,
              .results-table td {
                padding: 14px 12px;
                font-size: 0.9375rem;
              }
            }
          `}</style>
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
                  <td style={{ textAlign: 'center' }}>
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
                        fontSize: '0.95rem',
                        border: `1px solid ${item.borderColor}`,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.icon}
                      {item.rank}
                    </span>
                  </td>
                  <td style={{ fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                    {item.title}
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--color-primary-dark)', whiteSpace: 'nowrap' }}>
                    {item.participant}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

