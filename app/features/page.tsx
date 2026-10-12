'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutGrid, 
  UserPlus, 
  QrCode, 
  Receipt, 
  Wrench, 
  BellRing, 
  Users2, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  IndianRupee, 
  Smartphone,
  Layers,
  Clock,
  Sliders
} from 'lucide-react';

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [bedCount, setBedCount] = useState<number>(50);
  const avgRentPerBed = 8500;
  const gatewayFeePercentage = 0.02; // 2% gateway fee charged by competitors
  const monthlySavings = Math.round(bedCount * avgRentPerBed * gatewayFeePercentage);
  const annualSavings = monthlySavings * 12;

  const featureDeepDives = [
    {
      id: 'rooms',
      category: 'operations',
      icon: LayoutGrid,
      badge: 'Visual Layouts',
      title: 'Interactive Room & Bed Matrix',
      summary: 'Replace messy Excel sheets with a real-time architectural floor plan built specifically for Indian PG sharing models.',
      points: [
        'Color-coded occupancy status: Green (Vacant), Blue (Occupied), Amber (Pending Verification)',
        'Support for Single, Double, Triple, and Quad-sharing bed configurations',
        'Floor-wise building breakdown with one-tap bed swapping and history logs',
        'Electricity sub-meter readings tied directly to each room ledger',
      ],
      tagline: 'See vacancy at a glance before prospect walk-ins.',
    },
    {
      id: 'onboarding',
      category: 'tenants',
      icon: UserPlus,
      badge: 'Paperless KYC',
      title: 'Digital Tenant Onboarding via WhatsApp',
      summary: 'Zero paperwork. Send a WhatsApp onboarding link; tenants submit their Aadhaar, photo, and emergency contacts in under 2 minutes.',
      points: [
        'Digital ID & Aadhaar image capture with secure cloud storage',
        'Automatic house rules & agreement acceptance before room key handover',
        'Pre-allocation of deposit, monthly rent date, and notice period terms',
        'Police verification ready data export in one click',
      ],
      tagline: 'Onboard tenants 5x faster with 0 lost documents.',
    },
    {
      id: 'upi',
      category: 'payments',
      icon: QrCode,
      badge: 'Free UPI Architecture',
      title: 'Zero-Fee Direct UPI Collection',
      summary: 'Never pay 2% to a third-party payment gateway again. Rent routes directly from the tenant UPI app to your verified bank account.',
      points: [
        'Dynamic UPI deep links pre-filling Amount, Room Number, and Month',
        'Custom dynamic QR codes compatible with GPay, PhonePe, Paytm, and BHIM',
        '1-tap UTR approval queue: verify the 12-digit bank reference in seconds',
        'Automatic balance update and WhatsApp receipt dispatch upon approval',
      ],
      tagline: 'Keep 100% of your rent money in your own bank.',
    },
    {
      id: 'receipts',
      category: 'payments',
      icon: Receipt,
      badge: 'HRA Compliant',
      title: 'Automated Tax & HRA PDF Receipts',
      summary: 'Tenants constantly ask for receipts for company HRA reimbursements. Madori generates and dispatches them automatically.',
      points: [
        'Instant branded PDF generation with owner PAN/GST details',
        'Downloadable directly by tenants from their mobile web link',
        'Permanent searchable receipt archive for yearly tax audits',
        'Eliminates manual paper receipt books and handwritten stamps',
      ],
      tagline: 'Make your tenants happy with professional digital receipts.',
    },
    {
      id: 'complaints',
      category: 'operations',
      icon: Wrench,
      badge: 'SLA Tracking',
      title: 'Smart Maintenance & Complaint Desk',
      summary: 'Stop reading frustrated complaints in informal WhatsApp groups. Structure maintenance with photo proof and assigned wardens.',
      points: [
        'Tenants choose category (WiFi, Plumbing, Electrical, Cleaning) and attach photos',
        'Assign tickets directly to building wardens or electricians with status tracking',
        'Time-stamped resolution logs so owners can measure warden responsiveness',
        'Prevents rent-withholding arguments on the 1st of every month',
      ],
      tagline: 'Resolve issues before they become rent disputes.',
    },
    {
      id: 'food-notices',
      category: 'tenants',
      icon: BellRing,
      badge: 'Resident Broadcast',
      title: 'Daily Meal Menus & Digital Notice Board',
      summary: 'Keep your hostel residents informed without repeating the same answers 50 times every morning.',
      points: [
        'Daily breakfast, lunch, and dinner menu board updated in 30 seconds',
        'Push notifications for gate closure times, generator repairs, and holidays',
        'Emergency broadcast alerts sent directly to registered WhatsApp numbers',
        'Digital notice archive accessible on the tenant web portal',
      ],
      tagline: 'Clear resident communication with zero spam.',
    },
    {
      id: 'staff',
      category: 'operations',
      icon: Users2,
      badge: 'Role Control',
      title: 'Granular Staff & Warden Permissions',
      summary: 'Give your managers and wardens the tools they need while protecting sensitive financial data and ownership settings.',
      points: [
        'Separate logins for Property Managers, Wardens, Cooks, and Security Guards',
        'Wardens can only see room vacancy and tickets for their assigned branch',
        'Financial banking UPI settings restricted exclusively to the Owner',
        'Audit trail of every bed check-in, rent approval, and maintenance ticket',
      ],
      tagline: 'Delegate daily ground operations with total security.',
    },
    {
      id: 'analytics',
      category: 'analytics',
      icon: BarChart3,
      badge: 'Executive View',
      title: 'Revenue Analytics & Defaulters Radar',
      summary: 'Know exactly where your business stands with crystal-clear graphs on occupancy, collections, and overdue accounts.',
      points: [
        'Live collection percentage tracker updated in real time as UPI payments are approved',
        'Overdue defaulters list with one-tap automated WhatsApp reminder pings',
        'Occupancy trends across months to plan marketing and bed pricing',
        'One-click export to Microsoft Excel and Tally accounting formats',
      ],
      tagline: 'Executive visibility across single or multi-branch PGs.',
    },
  ];

  const filteredFeatures = activeCategory === 'all'
    ? featureDeepDives
    : featureDeepDives.filter((f) => f.category === activeCategory);

  return (
    <div className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FA] border border-[#0A4F8F]/20 text-[#0A4F8F] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#147A6E]" />
            DEEP DIVE PRODUCT TOUR
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Built from the ground up for modern Indian PG businesses
          </h1>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Explore every capability of Madori — designed to eliminate operational stress, prevent revenue leakages, and make your PG run with complete calm.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Features' },
              { id: 'payments', label: 'Direct UPI & Billing' },
              { id: 'operations', label: 'Rooms & Maintenance' },
              { id: 'tenants', label: 'Digital Tenant App' },
              { id: 'analytics', label: 'Reports & Analytics' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0A4F8F] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-[#E2E8F0] hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                id={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                className="uiverse-card p-8 flex flex-col justify-between group hover:border-[#0A4F8F]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF3FA] text-[#0A4F8F] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#147A6E] bg-[#E6F5F3] px-3 py-1 rounded-full border border-[#147A6E]/20">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[#0A4F8F] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#334155] leading-relaxed mb-6 font-medium">
                    {feat.summary}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#F1F5F9] mb-6">
                    {feat.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#334155]">
                        <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 italic">
                    {feat.tagline}
                  </span>
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-1 font-bold text-[#0A4F8F] hover:text-[#083E70]"
                  >
                    Try Feature <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive UI Element: Live Direct UPI Savings Calculator */}
        <div className="bg-gradient-to-br from-[#0A4F8F] via-[#083E70] to-[#147A6E] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2A9D8F] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                ZERO GATEWAY COMMISSION CALCULATOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Calculate how much money Madori saves your PG every month
              </h2>
              <p className="text-sm sm:text-base text-slate-200">
                Payment gateways take a 2% cut on rent. Our direct UPI flow takes 0%. See what that means for your bottom line.
              </p>
            </div>

            {/* Interactive Slider Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="bed-slider" className="text-sm font-bold flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#2A9D8F]" /> Total Beds in your PG / Hostel:
                  </label>
                  <span className="text-2xl font-black text-white px-3 py-1 bg-white/20 rounded-xl">
                    {bedCount} Beds
                  </span>
                </div>
                <input
                  id="bed-slider"
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={bedCount}
                  onChange={(e) => setBedCount(Number(e.target.value))}
                  className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#2A9D8F]"
                />
                <div className="flex justify-between text-xs text-slate-300 mt-2">
                  <span>10 Beds</span>
                  <span>150 Beds</span>
                  <span>300 Beds</span>
                </div>
              </div>

              {/* Savings Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div className="bg-white/15 p-4 rounded-xl text-center">
                  <span className="text-xs uppercase tracking-wider text-slate-200 block font-semibold">
                    Monthly Direct Savings
                  </span>
                  <span className="text-3xl font-black text-emerald-300 block mt-1">
                    ₹{monthlySavings.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-slate-300">
                    Kept directly in your bank account
                  </span>
                </div>

                <div className="bg-white/15 p-4 rounded-xl text-center">
                  <span className="text-xs uppercase tracking-wider text-slate-200 block font-semibold">
                    Annual Direct Savings
                  </span>
                  <span className="text-3xl font-black text-emerald-300 block mt-1">
                    ₹{annualSavings.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-slate-300">
                    Every single year without gateway fees
                  </span>
                </div>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/payments"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A4F8F] font-bold text-sm rounded-xl hover:bg-slate-100 shadow-lg transition active:scale-95"
                >
                  <span>Experience the Free UPI Flow</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-8 space-y-4">
          <h3 className="text-2xl font-bold text-[#0F172A]">
            Ready to experience calm PG management?
          </h3>
          <p className="text-sm text-[#334155]">
            Start your 14-day free trial. Setup takes under 5 minutes.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/signup"
              className="uiverse-glow-btn px-8 py-3.5 text-white font-bold text-sm rounded-xl shadow-lg"
            >
              Start Free Trial Now
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white border border-[#E2E8F0] text-slate-800 font-bold text-sm rounded-xl hover:bg-slate-100 shadow-sm"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
