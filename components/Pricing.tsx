'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const tiers = [
    {
      name: 'Starter',
      description: 'Ideal for boutique PGs or owners managing a single small building.',
      monthlyPrice: '₹1,299',
      annualPrice: '₹999',
      unit: '/ month',
      bedsLimit: 'Up to 25 Beds',
      popular: false,
      features: [
        'Interactive floor-plan layout (1 PG)',
        'Up to 25 beds & tenants',
        'Direct UPI payments (0% commission)',
        'Instant digital PDF receipts',
        'Basic complaint tracking desk',
        'Email & chat support',
      ],
      ctaText: 'Start 14-Day Free Trial',
      ctaHref: '/signup?plan=starter',
    },
    {
      name: 'Growth',
      description: 'The sweet spot for established PGs with multi-sharing rooms and wardens.',
      monthlyPrice: '₹2,499',
      annualPrice: '₹1,999',
      unit: '/ month',
      bedsLimit: 'Up to 75 Beds',
      popular: true,
      features: [
        'Everything in Starter, plus:',
        'Up to 75 beds & tenants',
        'Direct UPI flow with 1-tap approvals',
        'WhatsApp payment reminders & receipts',
        'Daily meal menu & digital noticeboard',
        'Electricity sub-meter bill calculation',
        '2 Warden / Staff logins with permissions',
        'Priority phone & WhatsApp onboarding',
      ],
      ctaText: 'Start Free Trial (Most Popular)',
      ctaHref: '/signup?plan=growth',
    },
    {
      name: 'Pro',
      description: 'Built for multi-branch PG businesses, co-living spaces, and hostel chains.',
      monthlyPrice: '₹4,999',
      annualPrice: '₹3,999',
      unit: '/ month',
      bedsLimit: 'Unlimited Beds',
      popular: false,
      features: [
        'Everything in Growth, plus:',
        'Unlimited beds & multiple PG branches',
        'Multi-property executive dashboard',
        'Custom staff roles (Cook, Warden, Guard)',
        'Accountant export (Tally & Excel ready)',
        'Tenant KYC verification archive',
        'Dedicated account manager (24/7)',
        'Custom domain / branding options',
      ],
      ctaText: 'Talk to Sales / Start Trial',
      ctaHref: '/signup?plan=pro',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-[#0A4F8F] uppercase bg-[#EBF3FA] px-3.5 py-1.5 rounded-full border border-[#0A4F8F]/15">
            HONEST & TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Fair pricing that pays for itself with one timely rent
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
            Zero transaction fees on rent collection. Money goes directly from tenant UPI to your bank.
          </p>

          {/* Billing Interval Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-[#0F172A]' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-14 h-8 bg-[#0A4F8F] rounded-full p-1 relative transition-colors cursor-pointer"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-bold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-[#0F172A]' : 'text-slate-500'}`}>
              Annual billing
              <span className="text-[10px] font-extrabold text-[#15803D] bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {tiers.map((tier) => {
            const price = billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
            return (
              <motion.div
                key={tier.name}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  tier.popular
                    ? 'bg-gradient-to-b from-[#FAFBFD] to-white border-2 border-[#0A4F8F] shadow-2xl ring-4 ring-[#0A4F8F]/15'
                    : 'bg-[#F8FAFC] border border-[#CBD5E1] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Ribbon */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0A4F8F] text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 tracking-wide uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-[#2A9D8F]" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-black text-[#0F172A]">{tier.name}</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-[#CBD5E1] text-[#0A4F8F]">
                      {tier.bedsLimit}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#334155] mb-6 leading-relaxed font-medium">
                    {tier.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#CBD5E1] flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0F172A] tracking-tight">
                      {price}
                    </span>
                    <span className="text-sm text-slate-600 font-bold">{tier.unit}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
                      Included Features:
                    </p>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B]">
                        <div className="w-4 h-4 rounded-full bg-[#EBF3FA] text-[#0A4F8F] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <Link
                    href={tier.ctaHref}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      tier.popular
                        ? 'uiverse-glow-btn text-white shadow-lg'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-[11px] text-slate-600 font-medium text-center mt-2.5">
                    14 days free • No credit card required
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
