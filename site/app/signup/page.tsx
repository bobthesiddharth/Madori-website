'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FA] text-[#0A4F8F] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#2A9D8F]" />
            14-Day Free Trial
          </div>
          <h2 className="text-3xl font-extrabold text-[#1F2D3D]">Start managing your PG</h2>
          <p className="text-sm text-[#5B6B7B]">Set up your rooms and start collecting rent in under 5 minutes.</p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-[#28A745] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1F2D3D]">Welcome to Madori!</h3>
            <p className="text-sm text-[#5B6B7B]">Your account is created. Proceed to your admin dashboard to configure your floor plan.</p>
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A4F8F] text-white font-semibold rounded-xl hover:bg-[#083E70]"
            >
              Go to Owner Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label className="block text-xs font-semibold text-[#1F2D3D] uppercase tracking-wider mb-1.5">
                Owner Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#0A4F8F] focus:border-transparent outline-none text-sm text-[#1F2D3D]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1F2D3D] uppercase tracking-wider mb-1.5">
                PG / Hostel Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sri Balaji Luxury PG"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#0A4F8F] focus:border-transparent outline-none text-sm text-[#1F2D3D]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1F2D3D] uppercase tracking-wider mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#0A4F8F] focus:border-transparent outline-none text-sm text-[#1F2D3D]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1F2D3D] uppercase tracking-wider mb-1.5">
                  No. of Rooms
                </label>
                <input
                  type="number"
                  defaultValue={20}
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#0A4F8F] focus:border-transparent outline-none text-sm text-[#1F2D3D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1F2D3D] uppercase tracking-wider mb-1.5">
                Your UPI ID (For Direct Rent Credit)
              </label>
              <input
                type="text"
                placeholder="e.g. ramesh@okicici"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#0A4F8F] focus:border-transparent outline-none text-sm text-[#1F2D3D]"
              />
              <span className="text-[11px] text-[#8E9FAA] mt-1 block">
                Stored in settings. Tenants will pay directly to this ID with 0% gateway commission.
              </span>
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-4 text-base font-semibold text-white bg-[#0A4F8F] hover:bg-[#083E70] rounded-xl shadow-lg shadow-[#0A4F8F]/20 transition-all cursor-pointer"
            >
              Create My Free Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="text-center pt-2">
          <Link href="/login" className="text-xs text-[#5B6B7B] hover:text-[#0A4F8F]">
            Already have an account? <span className="font-semibold text-[#0A4F8F]">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
