'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Smartphone, 
  Check, 
  QrCode, 
  FileText, 
  AlertCircle, 
  Utensils, 
  UserCheck, 
  ShieldCheck, 
  CreditCard,
  ArrowRight,
  TrendingUp,
  Receipt
} from 'lucide-react';

export default function TwoPortals() {
  const [activePortal, setActivePortal] = useState<'owner' | 'tenant'>('owner');

  return (
    <section className="py-24 bg-white border-y border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-[#147A6E] uppercase bg-[#E6F5F3] px-3.5 py-1.5 rounded-full border border-[#147A6E]/20">
            DEDICATED EXPERIENCES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Two specialized interfaces. One synchronized platform.
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
            Owners get a command center for complete control. Tenants get a frictionless mobile web app for payments and complaints.
          </p>

          {/* Portal Switcher Tabs */}
          <div className="inline-flex p-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl mt-4 shadow-sm">
            <button
              type="button"
              onClick={() => setActivePortal('owner')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activePortal === 'owner'
                  ? 'bg-[#0A4F8F] text-white shadow-md'
                  : 'text-slate-700 hover:text-black'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Owner Command Center
            </button>
            <button
              type="button"
              onClick={() => setActivePortal('tenant')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activePortal === 'tenant'
                  ? 'bg-[#147A6E] text-white shadow-md'
                  : 'text-slate-700 hover:text-black'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Tenant Resident App
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="mt-8 bg-[#F8FAFC] rounded-3xl border border-[#CBD5E1] p-6 lg:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            {activePortal === 'owner' ? (
              <motion.div
                key="owner-portal"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left side details */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0A4F8F] uppercase bg-[#EBF3FA] px-3 py-1 rounded-full border border-[#0A4F8F]/15">
                    <Building2 className="w-3.5 h-3.5" /> For Owners & Managers
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                    Master your entire property from a single calm dashboard.
                  </h3>
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                    Track rooms, beds, automated rent reconciliation, and warden duties. Never miss a defaulter or an open maintenance ticket.
                  </p>

                  <ul className="space-y-3.5">
                    {[
                      'Interactive floor plan grid with real-time room occupancy',
                      'One-tap UPI payment approval with instant PDF receipt creation',
                      'Support for manual Cash & Bank Transfer logs',
                      'Electricity sub-meter readings and automated bill splitting',
                      'Warden & staff assignment with SLA tracking',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B]">
                        <div className="w-5 h-5 rounded-full bg-[#EBF3FA] text-[#0A4F8F] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="font-semibold">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex gap-4">
                    <Link
                      href="/features"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0A4F8F] hover:text-[#083E70]"
                    >
                      Explore Owner Features <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/payments"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147A6E] bg-[#E6F5F3] px-3 py-1.5 rounded-lg hover:underline"
                    >
                      Test Approval Queue
                    </Link>
                  </div>
                </div>

                {/* Right side mockup: Owner Admin View */}
                <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xl p-5 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#15803D]" />
                      <span className="text-xs font-extrabold text-[#0F172A]">Pending UPI Approvals (Free Flow)</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Synced with Owner UPI ID</span>
                  </div>

                  {/* Verification table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-500 border-b border-slate-100 bg-slate-50">
                          <th className="p-2 font-bold">Tenant</th>
                          <th className="p-2 font-bold">Room</th>
                          <th className="p-2 font-bold">Amount</th>
                          <th className="p-2 font-bold">Method</th>
                          <th className="p-2 font-bold">UTR No.</th>
                          <th className="p-2 font-bold text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="p-2.5 font-bold text-[#0F172A]">Rohan Mehta</td>
                          <td className="p-2.5 text-[#334155]">Rm 201 (Bed B)</td>
                          <td className="p-2.5 font-black text-[#0A4F8F]">₹8,500</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 bg-[#EBF3FA] text-[#0A4F8F] rounded font-bold text-[10px]">UPI</span></td>
                          <td className="p-2.5 text-slate-600 font-mono">4289018471</td>
                          <td className="p-2.5 text-right">
                            <Link href="/payments" className="px-2.5 py-1 bg-[#15803D] text-white rounded-lg font-bold text-[10px] shadow-sm">
                              Approve
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-[#0F172A]">Ananya Roy</td>
                          <td className="p-2.5 text-[#334155]">Rm 304 (Bed A)</td>
                          <td className="p-2.5 font-black text-[#0A4F8F]">₹9,000</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 bg-[#EBF3FA] text-[#0A4F8F] rounded font-bold text-[10px]">UPI</span></td>
                          <td className="p-2.5 text-slate-600 font-mono">5102948291</td>
                          <td className="p-2.5 text-right">
                            <Link href="/payments" className="px-2.5 py-1 bg-[#15803D] text-white rounded-lg font-bold text-[10px] shadow-sm">
                              Approve
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-[#0F172A]">Vikram Sethi</td>
                          <td className="p-2.5 text-[#334155]">Rm 102 (Single)</td>
                          <td className="p-2.5 font-black text-[#0A4F8F]">₹14,000</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-bold text-[10px]">CASH</span></td>
                          <td className="p-2.5 text-slate-600">Manual Handover</td>
                          <td className="p-2.5 text-right">
                            <Link href="/payments" className="px-2.5 py-1 bg-[#15803D] text-white rounded-lg font-bold text-[10px] shadow-sm">
                              Approve
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Summary Footer */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-[#334155] font-medium">Auto-generated receipt sent instantly on tap</span>
                    <span className="font-bold text-[#15803D] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100% Direct Account Credit
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="tenant-portal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left side details */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#147A6E] uppercase bg-[#E6F5F3] px-3 py-1 rounded-full border border-[#147A6E]/20">
                    <Smartphone className="w-3.5 h-3.5" /> For Residents & Tenants
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                    Zero friction for your tenants. Nothing to download from app stores.
                  </h3>
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                    Tenants simply open a clean mobile link on WhatsApp or browser to pay rent via UPI, raise complaints, and download rent receipts for HRA claims.
                  </p>

                  <ul className="space-y-3.5">
                    {[
                      '1-Tap UPI deep link (GPay, PhonePe, Paytm, BHIM)',
                      'Instant PDF rent receipts for tax saving and HRA proof',
                      'Photo-based complaint logger (WiFi, Plumbing, AC)',
                      'Live breakfast, lunch, and dinner food menu',
                      'Digital notice board for gate timings & festival announcements',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B]">
                        <div className="w-5 h-5 rounded-full bg-[#E6F5F3] text-[#147A6E] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="font-semibold">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex gap-4">
                    <Link
                      href="/payments"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#147A6E] hover:text-[#0E5E54]"
                    >
                      Try Tenant Payment View <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right side mockup: Tenant Mobile View */}
                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-sm bg-white rounded-3xl border-4 border-slate-800 shadow-2xl overflow-hidden p-5 space-y-4">
                    {/* Status header */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div>
                        <h4 className="text-sm font-extrabold text-[#0F172A]">Hi Rahul 👋</h4>
                        <p className="text-[11px] text-slate-500 font-medium">Room 204 • Bed A</p>
                      </div>
                      <span className="text-[10px] font-bold bg-[#E6F5F3] text-[#147A6E] px-2.5 py-1 rounded-full">
                        Due: 5th Oct
                      </span>
                    </div>

                    {/* Rent Due Card */}
                    <div className="bg-gradient-to-br from-[#0A4F8F] to-[#083E70] rounded-2xl p-4 text-white space-y-3">
                      <div className="flex justify-between items-center text-xs opacity-90">
                        <span>Current Month Rent</span>
                        <span>October 2026</span>
                      </div>
                      <div className="text-2xl font-black tracking-tight">₹8,500</div>
                      <div className="pt-1 flex gap-2">
                        <Link href="/payments" className="flex-1 py-2 bg-white text-[#0A4F8F] font-bold text-xs rounded-xl shadow-sm text-center">
                          Pay with UPI
                        </Link>
                        <Link href="/payments" className="px-3 py-2 bg-white/20 text-white font-medium text-xs rounded-xl flex items-center gap-1">
                          <QrCode className="w-3.5 h-3.5" /> QR
                        </Link>
                      </div>
                    </div>

                    {/* Tenant Actions Grid */}
                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:bg-[#EBF3FA] transition">
                        <Receipt className="w-4 h-4 mx-auto text-[#0A4F8F] mb-1" />
                        <span className="font-bold text-[#0F172A] block">HRA Receipts</span>
                        <span className="text-[10px] text-slate-500 font-medium">Download PDF</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:bg-[#EBF3FA] transition">
                        <AlertCircle className="w-4 h-4 mx-auto text-amber-600 mb-1" />
                        <span className="font-bold text-[#0F172A] block">Raise Ticket</span>
                        <span className="text-[10px] text-slate-500 font-medium">WiFi, Plumber</span>
                      </div>
                    </div>

                    {/* Today's Food Menu */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between font-bold text-[#0F172A]">
                        <span className="flex items-center gap-1.5 text-[#147A6E]">
                          <Utensils className="w-3.5 h-3.5" /> Today’s Menu
                        </span>
                        <span className="text-[10px] text-slate-500">Dinner at 8:00 PM</span>
                      </div>
                      <p className="text-[11px] text-[#334155] font-medium">Paneer Butter Masala, Jeera Rice, Dal Tadka & Chapati</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
