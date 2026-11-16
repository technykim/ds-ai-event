import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '행사 결과', href: '#results' },
    { name: '모임 소개', href: '#about' },
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
        background: scrolled || isMobileMenuOpen ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled || isMobileMenuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || isMobileMenuOpen ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: scrolled || isMobileMenuOpen ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <style>{`
        .desktop-menu { display: flex; }
        .mobile-menu-btn { display: none; }
        .mobile-menu { display: none; }
        
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .navbar-title { display: none !important; }
        }
      `}</style>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: scrolled ? 'var(--color-primary-dark)' : 'var(--color-text-main)' }}>
          <img src="/logo.png" alt="동숭교회 로고" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
          <span className="navbar-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem' }}>
            동숭교회 AI활용 아이디어톤
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ gap: '24px', alignItems: 'center' }}>
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
            참가 신청
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary-dark)' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          background: 'var(--color-bg-main)',
          padding: '24px',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderBottom: '1px solid var(--color-border)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '1.125rem',
                color: 'var(--color-text-main)',
                padding: '8px 0',
                borderBottom: '1px solid var(--color-border)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#submit"
            className="btn btn-primary"
            style={{ padding: '12px', marginTop: '8px', textAlign: 'center' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            참가 신청
          </a>
        </div>
      )}
    </nav>
  );
}
