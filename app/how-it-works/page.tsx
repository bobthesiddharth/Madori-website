'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Building2, 
  UserCheck, 
  Banknote, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Smartphone, 
  FileSpreadsheet, 
  MessageSquare,
  Receipt,
  HelpCircle
} from 'lucide-react';

export default function HowItWorksPage() {
  const [activeStepTab, setActiveStepTab] = useState(0);

  const stepsDetail = [
    {
      num: '01',
      title: 'Configure Your Floor Plan & Rooms',
      subtitle: 'Setup in 3 minutes. Zero tech skills needed.',
      desc: 'Map out your property just like an architectural blueprint. Specify floor numbers, room types (Single, Double, Triple sharing), and per-bed pricing.',
      keyCapabilities: [
        'Single, Double, Triple, and Quad bed layouts',
        'Set deposit amounts and monthly cycle dates',
        'Add your existing UPI ID directly in settings',
        'Free assisted setup: Send photos of your register and we set it up for you',
      ],
      ownerAction: 'Add Room 101, 102... assign beds with one click',
    },
    {
      num: '02',
      title: 'Onboard Tenants via WhatsApp (No App Download)',
      subtitle: 'Tenants tap a link, upload Aadhaar, and sign house rules.',
      desc: 'Send an automated WhatsApp link to your tenants. They enter emergency contacts, upload Aadhaar/ID photo, and accept room allotment rules digitally.',
      keyCapabilities: [
        'Digital identity storage (Aadhaar, College/Work ID)',
        'Signed room rules without printing paper',
        'Emergency guardian contact archiving',
        'Police verification compliant digital records',
      ],
      ownerAction: 'Share invite link on WhatsApp • Tenant completes in 2 mins',
    },
    {
      num: '03',
      title: 'Collect Rent via Zero-Fee Direct UPI',
      subtitle: 'Money lands directly in your bank. 0% gateway commission.',
      desc: 'On the 1st of every month, tenants receive automated reminders with a pre-filled UPI link. They pay via GPay, PhonePe, or Paytm and submit their UTR reference.',
      keyCapabilities: [
        'Pre-filled UPI link with exact rent amount & room number',
        'One-tap approval queue for the owner to verify 12-digit UTR',
        'Automatic balance update with instant payment confirmation',
        'Support for manual Cash and Bank Transfer entries',
      ],
      ownerAction: 'Review 12-digit UTR in approval queue • Tap Approve',
    },
    {
      num: '04',
      title: 'Automated Tax PDF Receipts & Daily Ops',
      subtitle: 'HRA tax receipts issued instantly. Maintenance tickets resolved.',
      desc: 'On approval, Madori automatically generates an official PDF receipt valid for tenant workplace HRA tax exemptions. Wardens track cleaning and WiFi tickets smoothly.',
      keyCapabilities: [
        'Instant branded PDF receipt sent via WhatsApp and downloadable anytime',
        'Daily breakfast, lunch, and dinner food menu broadcast',
        'Photo-based complaint tracking with warden response times',
        'Month-end accounting exports ready for Excel and Tally',
      ],
      ownerAction: 'Zero receipt paperwork • Complete operational calm',
    },
  ];

  return (
    <div className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FA] border border-[#0A4F8F]/20 text-[#0A4F8F] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#147A6E]" />
            STEP-BY-STEP WORKFLOW
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            How Madori simplifies your PG operations from Day One
          </h1>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            From the moment a tenant moves in to monthly rent collection and maintenance — here is exactly how Madori works behind the scenes.
          </p>
        </div>

        {/* Step-by-Step Interactive Timeline */}
        <div className="space-y-12">
          {stepsDetail.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="uiverse-card p-8 sm:p-10 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Number & Title */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-[#0A4F8F] text-white flex items-center justify-center font-black text-lg shadow-md">
                      {step.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#147A6E] bg-[#E6F5F3] px-3 py-1 rounded-full">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#334155] leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">Owner Action:</span>
                    <span className="text-slate-600 font-medium">{step.ownerAction}</span>
                  </div>
                </div>

                {/* Right Checklist */}
                <div className="lg:col-span-7 bg-[#FAFBFD] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] space-y-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Key Highlights & Built-in Automation:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {step.keyCapabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                        <span className="font-semibold">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Side-by-Side Comparison: Traditional PG vs Madori */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A4F8F] bg-[#EBF3FA] px-3 py-1 rounded-full">
              THE MADORI DIFFERENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Traditional PG Chaos vs Madori Calm
            </h2>
            <p className="text-sm text-[#334155]">
              See why hundreds of PG owners in Bangalore and Pune switch to Madori every month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="p-6 rounded-2xl bg-red-50/40 border border-red-200 space-y-4">
              <div className="flex items-center gap-2 text-red-700 font-bold text-base pb-2 border-b border-red-200">
                <XCircle className="w-5 h-5 text-red-600" />
                The Traditional Old Way
              </div>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  Handwritten registers with crossed-out names and lost room keys.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  Matching hundreds of unlabelled UPI screenshots in WhatsApp groups on the 5th of every month.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  Losing 2% of every rent payment to third-party payment gateways.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  Tenants constantly requesting handwritten HRA rent receipts for tax saving.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  Forgotten maintenance complaints leading to heated tenant disputes.
                </li>
              </ul>
            </div>

            {/* The Madori Way */}
            <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base pb-2 border-b border-emerald-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                The Madori Modern Way
              </div>
              <ul className="space-y-3 text-xs text-slate-800">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Real-time architectural floor plan with live vacant bed indicators.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  1-tap UTR verification queue with automatic reconciliation.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  100% direct bank credit via UPI with zero gateway fee deductions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Automated GST & PAN compliant PDF receipts sent immediately.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Photo-based complaint tracking with warden response countdowns.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Free Assisted Onboarding Banner */}
        <div className="bg-[#EBF3FA] rounded-3xl p-8 sm:p-10 border border-[#0A4F8F]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Too busy to type your room layout? We do it for you for free.
            </h3>
            <p className="text-sm text-[#334155] max-w-xl">
              Take photos of your register or send us your existing Excel sheet on WhatsApp. Our Bangalore team will set up your Madori property within 2 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="uiverse-glow-btn px-7 py-3.5 text-white font-bold text-sm rounded-xl shadow-md whitespace-nowrap"
          >
            Request Free Assisted Setup
          </Link>
        </div>

      </div>
    </div>
  );
}
