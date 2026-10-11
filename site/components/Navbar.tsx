'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'UPI Flow', href: '/payments', badge: '0% Fee' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0A4F8F] rounded-lg p-1">
            <Image
              src="/logo.svg"
              alt="Madori - PG Management System"
              width={150}
              height={38}
              priority
              className="h-9 w-auto transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-all relative py-1 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0A4F8F]'
                      : 'text-slate-700 hover:text-[#0A4F8F]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-extrabold px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A4F8F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-bold text-slate-800 hover:text-[#0A4F8F] hover:bg-slate-100 rounded-xl transition-all"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="uiverse-glow-btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-white px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold py-2 flex items-center justify-between ${
                  pathname === link.href ? 'text-[#0A4F8F]' : 'text-slate-800 hover:text-[#0A4F8F]'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-slate-800 bg-slate-100 rounded-xl hover:bg-slate-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="uiverse-glow-btn w-full text-center py-3 text-sm font-bold text-white rounded-xl shadow-md"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
