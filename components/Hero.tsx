'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Building2, 
  IndianRupee, 
  Check, 
  QrCode, 
  Clock, 
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'all' | 'first' | 'second'>('all');

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Architectural Accent Blurs */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#2A9D8F]/10 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute top-20 left-10 -z-10 w-80 h-80 bg-[#0A4F8F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge with animated live dot */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FA] border border-[#0A4F8F]/20 text-[#0A4F8F] text-xs font-bold tracking-wide shadow-sm"
            >
              <span className="pulse-dot inline-block mr-1" />
              <span>Next-Gen PG & Hostel Operating System</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.12]">
                Manage your PG,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A4F8F] via-[#1A73E8] to-[#147A6E]">
                  beautifully.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#334155] max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Rooms, tenants, rent and complaints in one calm dashboard. Built specifically for modern Indian paying guest owners.
              </p>
            </motion.div>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/signup"
                className="uiverse-glow-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white rounded-2xl shadow-lg transition-all"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-[#0F172A] bg-white hover:bg-slate-50 border border-slate-300 rounded-2xl shadow-sm hover:shadow transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-[#E6F5F3] flex items-center justify-center text-[#147A6E] group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-[#147A6E]" />
                </div>
                <span>See How It Works</span>
              </Link>
            </motion.div>

            {/* Reassurance points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#334155] font-semibold"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> 14-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Direct UPI, 0% gateway fee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Setup in under 5 mins
              </span>
            </motion.div>
          </div>

          {/* Right Column: Animated Interactive Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Window Container */}
            <div className="relative mx-auto max-w-lg lg:max-w-none bg-white rounded-3xl border border-[#CBD5E1] shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-[#FAFBFD] px-5 py-3.5 border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/30" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/30" />
                  <span className="ml-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#0A4F8F]" />
                    Madori Cloud • Sunshine Residency
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#147A6E] bg-[#E6F5F3] px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#147A6E] animate-pulse" />
                  Live Sync
                </div>
              </div>

              {/* Window Content */}
              <div className="p-6 space-y-5 bg-[#FAFCFD]">
                
                {/* Metric Summary Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold text-slate-500 block">Total Beds</span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-xl font-black text-[#0F172A]">48 / 50</span>
                      <span className="text-[10px] text-emerald-800 font-extrabold bg-emerald-100 px-1.5 py-0.5 rounded">96% Occ</span>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold text-slate-500 block">Rent Collected</span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-xl font-black text-[#0A4F8F]">₹3.42L</span>
                      <span className="text-[10px] text-[#0A4F8F] font-extrabold bg-blue-100 px-1.5 py-0.5 rounded">92%</span>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold text-slate-500 block">Pending Verif.</span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-xl font-black text-amber-700">3</span>
                      <span className="text-[10px] text-amber-900 font-extrabold bg-amber-100 px-1.5 py-0.5 rounded">UPI</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Floor-Plan Matrix */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Interactive Floor Plan</h4>
                      <p className="text-[11px] text-slate-500">Instant room & bed layout overview</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1 text-[10px] text-slate-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#147A6E]" /> Occupied
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                        <span className="w-2 h-2 rounded-full bg-slate-300" /> Vacant
                      </span>
                    </div>
                  </div>

                  {/* Room grid representation */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {/* Room 101 */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0A4F8F]/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#0F172A]">Room 101 (Triple)</span>
                        <span className="text-[10px] font-bold text-[#0A4F8F] bg-[#EBF3FA] px-1.5 py-0.5 rounded">₹8,500</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="flex-1 py-1.5 text-center text-[10px] font-bold rounded bg-[#147A6E] text-white">Bed A</div>
                        <div className="flex-1 py-1.5 text-center text-[10px] font-bold rounded bg-[#147A6E] text-white">Bed B</div>
                        <div className="flex-1 py-1.5 text-center text-[10px] font-bold rounded bg-[#147A6E] text-white">Bed C</div>
                      </div>
                    </div>

                    {/* Room 102 */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0A4F8F]/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#0F172A]">Room 102 (Double)</span>
                        <span className="text-[10px] font-bold text-[#0A4F8F] bg-[#EBF3FA] px-1.5 py-0.5 rounded">₹9,500</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="flex-1 py-1.5 text-center text-[10px] font-bold rounded bg-[#147A6E] text-white">Bed A</div>
                        <div className="flex-1 py-1.5 text-center text-[10px] font-bold rounded bg-slate-200 text-slate-700">Vacant</div>
                      </div>
                    </div>

                    {/* Room 103 */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0A4F8F]/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#0F172A]">Room 103 (Single)</span>
                        <span className="text-[10px] font-bold text-[#0A4F8F] bg-[#EBF3FA] px-1.5 py-0.5 rounded">₹14,000</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="flex-1 py-1.5 text-center text-[10px] font-bold rounded bg-[#147A6E] text-white">Bed A</div>
                      </div>
                    </div>

                    {/* Room 104 */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0A4F8F]/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#0F172A]">Room 104 (Double)</span>
                        <span className="text-[10px] font-bold text-[#0A4F8F] bg-[#EBF3FA] px-1.5 py-0.5 rounded">₹9,500</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="flex-1 py-1.5 text-center text-[10px] font-bold rounded bg-[#147A6E] text-white">Bed A</div>
                        <div className="flex-1 py-1.5 text-center text-[10px] font-bold rounded bg-[#147A6E] text-white">Bed B</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Activity Notification Badge */}
                <div className="bg-[#EBF3FA] border border-[#0A4F8F]/20 rounded-2xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0A4F8F] text-white flex items-center justify-center font-bold text-xs">
                      UPI
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0F172A]">Payment Pending Approval</p>
                      <p className="text-[11px] text-[#334155]">Karan Sharma • Rm 204 • ₹8,500</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Link href="/payments" className="px-2.5 py-1 text-[11px] font-bold bg-white text-[#0A4F8F] rounded-lg border border-[#0A4F8F]/20 hover:bg-slate-50 transition cursor-pointer">
                      Approve
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Trust Card 1 (Top Right) */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xl z-10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E6F5F3] text-[#147A6E] flex items-center justify-center">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#0F172A] block">Zero Gateway Fees</span>
                <span className="text-[10px] text-[#15803D] font-bold flex items-center gap-1">
                  <Check className="w-3 h-3 stroke-[3]" /> Direct UPI to Owner A/C
                </span>
              </div>
            </motion.div>

            {/* Floating Trust Card 2 (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xl z-10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EBF3FA] text-[#0A4F8F] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#0F172A] block">Instant PDF Receipts</span>
                <span className="text-[10px] text-slate-600 font-medium">Auto WhatsApp & SMS alerts</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
