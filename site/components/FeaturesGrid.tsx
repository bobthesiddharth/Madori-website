'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  LayoutGrid, 
  UserPlus, 
  QrCode, 
  Receipt, 
  Wrench, 
  BellRing, 
  Users2, 
  BarChart3,
  ArrowRight
} from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      id: 'rooms',
      icon: LayoutGrid,
      title: 'Room & Bed Management',
      tag: 'Floor-Plan Sync',
      description: 'Visual floor-plan layouts tailored to each building. Manage single, double, and triple-sharing beds with instant occupancy color codes.',
      color: 'text-[#0A4F8F] bg-[#EBF3FA]',
    },
    {
      id: 'onboarding',
      icon: UserPlus,
      title: 'Digital Tenant Onboarding',
      tag: 'Paperless KYC',
      description: 'Paperless check-ins with Aadhaar / ID upload, emergency contacts, and automated digital agreement signing in under 2 minutes.',
      color: 'text-[#147A6E] bg-[#E6F5F3]',
    },
    {
      id: 'upi',
      icon: QrCode,
      title: 'Zero-Fee Direct UPI Collection',
      tag: 'Free Direct Flow',
      description: 'Dynamic UPI deep links & QR codes with pre-filled room and month amounts. Rent credits directly to the owner bank account with 0% gateway cut.',
      color: 'text-[#0A4F8F] bg-[#EBF3FA]',
    },
    {
      id: 'receipts',
      icon: Receipt,
      title: 'Automated PDF Receipts',
      tag: 'WhatsApp & SMS',
      description: 'On one-tap payment approval, Madori automatically creates a branded PDF receipt and dispatches it immediately to the tenant.',
      color: 'text-[#15803D] bg-emerald-50',
    },
    {
      id: 'complaints',
      icon: Wrench,
      title: 'Smart Complaint Desk',
      tag: 'SLA Tracking',
      description: 'Residents log WiFi, plumbing, or AC issues with photo proof. Assign tasks to wardens and resolve before rent-day grievances build up.',
      color: 'text-[#B45309] bg-amber-50',
    },
    {
      id: 'food-notices',
      icon: BellRing,
      title: 'Notices & Daily Food Menus',
      tag: 'Instant Broadcast',
      description: 'Post breakfast, lunch, and dinner menus daily. Push notifications for gate closing rules, festivals, or maintenance shutdowns.',
      color: 'text-[#0A4F8F] bg-[#EBF3FA]',
    },
    {
      id: 'staff',
      icon: Users2,
      title: 'Staff & Warden Permissions',
      tag: 'Role-Based Access',
      description: 'Separate roles for property managers, accountants, and security guards with granular permissions and complete audit trails.',
      color: 'text-[#147A6E] bg-[#E6F5F3]',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Revenue & Occupancy Analytics',
      tag: 'Executive Insights',
      description: 'Track collection percentages, upcoming defaulters, vacancy rates, and monthly revenue trends across all your PG branches in one view.',
      color: 'text-[#0A4F8F] bg-[#EBF3FA]',
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FA] text-[#0A4F8F] text-xs font-bold tracking-wide border border-[#0A4F8F]/15">
            BUILT FOR ENTERPRISE & INDEPENDENT PGS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Everything you need to run your PG with complete calm
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
            Say goodbye to messy WhatsApp groups, paper registers, and lost UPI screenshots. Madori handles every operational corner.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="uiverse-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feat.color} transition-transform group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0A4F8F] transition-colors mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#334155] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={`/features#${feat.id}`}
                    className="inline-flex items-center text-xs font-bold text-[#0A4F8F] hover:text-[#083E70] transition-colors"
                  >
                    Learn more details <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All Features Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#0A4F8F] font-bold text-xs rounded-xl shadow-sm hover:shadow transition"
          >
            <span>Explore In-Depth Architecture & Savings Calculator</span>
            <ArrowRight className="w-4 h-4 text-[#0A4F8F]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
