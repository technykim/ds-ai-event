import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at top right, rgba(0, 188, 212, 0.1), transparent 40%), radial-gradient(circle at bottom left, rgba(15, 76, 129, 0.1), transparent 40%)'
      }}
    >
      {/* Decorative Elements */}
      <div style={{ position: 'absolute', top: '15%', left: '5%', width: '300px', height: '300px', background: 'var(--color-primary)', opacity: '0.05', filter: 'blur(60px)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'var(--color-secondary)', opacity: '0.05', filter: 'blur(80px)', borderRadius: '50%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(15, 76, 129, 0.1)', borderRadius: '9999px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%', display: 'inline-block' }}></span>
            2026 동숭교회 AI활용 아이디어톤
          </div>
          
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>제1회 동숭교회</span><br />
            <span style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              AI활용 아이디어톤
            </span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px' }}>
            교회의 사역과 성도의 필요를 해결하는 혁신적인 아이디어를 기다립니다. 인공지능을 활용하여 우리 교회의 미래를 함께 디자인해보세요.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a href="#submit" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
              산출물 제출하기 <ArrowRight size={20} />
            </a>
            <a href="#schedule" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
              행사 일정 보기
            </a>
          </div>
          
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-text-main)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <Calendar size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>대회 일시</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>2026년 10월 25일 (주일) 낮 12:30</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-text-main)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>대회 장소</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>동숭교회 엘림홀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
