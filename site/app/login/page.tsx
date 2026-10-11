'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, User, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState<'owner' | 'tenant'>('owner');

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#EBF3FA] text-[#0A4F8F] mb-1">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-[#1F2D3D]">Sign in to Madori</h2>
          <p className="text-sm text-[#5B6B7B]">Select your portal to continue</p>
        </div>

        {/* Role toggle tabs */}
        <div className="grid grid-cols-2 gap-2 bg-[#F5F8FA] p-1.5 rounded-2xl border border-[#E2E8F0]">
          <button
            type="button"
            onClick={() => setRole('owner')}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              role === 'owner'
                ? 'bg-white text-[#0A4F8F] shadow-sm'
                : 'text-[#5B6B7B] hover:text-[#1F2D3D]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            Owner Portal
          </button>
          <button
            type="button"
            onClick={() => setRole('tenant')}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              role === 'tenant'
                ? 'bg-white text-[#2A9D8F] shadow-sm'
                : 'text-[#5B6B7B] hover:text-[#1F2D3D]'
            }`}
          >
            <User className="w-4 h-4" />
            Tenant App
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-[#1F2D3D] uppercase tracking-wider mb-1.5">
              Phone Number or Email
            </label>
            <input
              type="text"
              placeholder={role === 'owner' ? "owner@madori.example or 9876543210" : "tenant@madori.example or 9876543210"}
              className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#0A4F8F] focus:border-transparent outline-none text-sm transition-all text-[#1F2D3D]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1F2D3D] uppercase tracking-wider mb-1.5">
              Password or OTP
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#0A4F8F] focus:border-transparent outline-none text-sm transition-all text-[#1F2D3D]"
            />
          </div>

          <Link
            href={role === 'owner' ? "/admin/dashboard" : "/tenant/home"}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-white bg-[#0A4F8F] hover:bg-[#083E70] rounded-xl shadow-md transition-all"
          >
            Enter {role === 'owner' ? 'Admin Dashboard' : 'Tenant Home'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </form>

        <p className="text-center text-xs text-[#8E9FAA]">
          Need an account?{' '}
          <Link href="/signup" className="text-[#0A4F8F] font-semibold hover:underline">
            Register your PG for free
          </Link>
        </p>
      </div>
    </div>
  );
}
