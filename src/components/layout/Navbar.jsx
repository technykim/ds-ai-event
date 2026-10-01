import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '행사 안내', href: '#overview' },
    { name: '일정 및 부문', href: '#schedule' },
    { name: '시상 및 가산점', href: '#prizes' },
    { name: '자주 묻는 질문', href: '#faq' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'var(--transition-normal)',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: scrolled ? 'var(--color-primary-dark)' : 'var(--color-text-main)' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '8px', 
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'
          }}>
            AI
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem' }}>
            동숭교회 아이디어톤
          </span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '1rem',
                color: 'var(--color-text-main)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a href="#submit" className="btn btn-primary" style={{ padding: '8px 20px' }}>
            산출물 제출
          </a>
        </div>
      </div>
    </nav>
  );
}
