'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Building2, 
  UserCheck, 
  Banknote, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Add your PG & Layout',
      time: 'Takes 3 mins',
      description: 'Enter your PG name, floors, and room sharing types. Madori automatically creates your interactive floor plan.',
      badge: 'Step 1: Setup',
      icon: Building2,
      highlights: ['Visual bed layout', 'Set per-bed rents', 'Add your UPI ID'],
      accent: 'from-[#0A4F8F] to-[#1A73E8]',
    },
    {
      number: '02',
      title: 'Digital Tenant Onboarding',
      time: 'Paperless check-in',
      description: 'Share your PG invite link on WhatsApp. Tenants fill out digital KYC, upload Aadhaar, and sign house rules.',
      badge: 'Step 2: Onboard',
      icon: UserCheck,
      highlights: ['Aadhaar ID storage', 'Emergency contact log', 'Room allocation'],
      accent: 'from-[#147A6E] to-[#0E5E54]',
    },
    {
      number: '03',
      title: 'Collect Rent via Direct UPI',
      time: 'Zero gateway cut',
      description: 'Tenants scan a custom UPI QR or tap a deep link. Money goes straight to your bank, and Madori issues instant PDF receipts.',
      badge: 'Step 3: Collect',
      icon: Banknote,
      highlights: ['0% transaction fees', '1-tap approval list', 'Auto WhatsApp receipt'],
      accent: 'from-[#0A4F8F] to-[#147A6E]',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0A4F8F] uppercase bg-[#EBF3FA] px-3.5 py-1.5 rounded-full border border-[#0A4F8F]/15">
            EFFORTLESS WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Up and running in three simple steps
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
            No complex ERP training. No complicated hardware. If you know how to use WhatsApp, you know how to use Madori.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="uiverse-card p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Header with Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-slate-300 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF3FA] border border-[#CBD5E1] flex items-center justify-center text-[#0A4F8F]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Timing Pill */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#147A6E] bg-[#E6F5F3] px-2.5 py-1 rounded-full mb-3 border border-[#147A6E]/20">
                    <Clock className="w-3 h-3" /> {step.time}
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#334155] leading-relaxed mb-6 font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {step.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#0F172A]">Want help setting up your PG layout?</h4>
            <p className="text-sm text-[#334155] font-medium">Our onboarding team will create your floor plan and upload past tenant lists for free.</p>
          </div>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#0A4F8F] bg-[#EBF3FA] hover:bg-[#0A4F8F] hover:text-white rounded-xl transition-all shadow-sm"
          >
            Explore Complete 4-Step Timeline <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
