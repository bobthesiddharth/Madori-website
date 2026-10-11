'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the free UPI payment flow work? Are there any transaction charges?',
      a: 'Zero transaction charges! Madori generates dynamic UPI deep links and QR codes pre-filled with the owner’s UPI ID (stored securely in your settings), the tenant’s room number, and the exact rent amount. Money transfers directly from the tenant’s UPI app (Google Pay, PhonePe, Paytm) into your bank account. The tenant submits the 12-digit UTR number, and you tap "Approve" with one touch.',
    },
    {
      q: 'Do my tenants need to download a heavy mobile app from the app store?',
      a: 'No app download required! Tenants receive a clean, lightweight mobile web link via WhatsApp or SMS. They can view dues, tap to open their UPI app, download official PDF rent receipts for HRA tax exemptions, and log complaints in seconds.',
    },
    {
      q: 'Can I manage multiple PG branches and assign different wardens?',
      a: 'Absolutely. Madori allows you to manage multiple properties under one account. You can create staff logins for wardens, cooks, and managers with role-based access, ensuring they only see their assigned building’s occupancy and complaints.',
    },
    {
      q: 'How do automated rent receipts work for HRA claims?',
      a: 'Once an owner approves a payment, Madori automatically compiles a professional, branded PDF receipt with your PG name, address, owner PAN/GST (optional), and the tenant’s rent breakdown. Tenants can download it anytime for workplace HRA submissions.',
    },
    {
      q: 'Can I record cash payments and direct IMPS bank transfers?',
      a: 'Yes. While the UPI flow is automated, owners and wardens have full flexibility to log Cash, Cheque, or IMPS/NEFT transfers. Every entry updates the tenant balance and marks their bed as paid for the month.',
    },
    {
      q: 'What if I need help setting up my rooms and onboarding existing tenants?',
      a: 'Every new signup gets free assisted onboarding. You can share your room layout and tenant Excel sheet or register photos with our onboarding team on WhatsApp, and we will configure your floor plan for you within a few hours.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0A4F8F] uppercase bg-[#EBF3FA] px-3.5 py-1.5 rounded-full border border-[#0A4F8F]/15">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
            Everything you need to know about Madori, UPI rent flows, and getting started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 bg-[#F8FAFC]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 text-[#0A4F8F] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#EBF3FA]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#334155] leading-relaxed border-t border-slate-200 pt-4 font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#E6F5F3] border border-[#147A6E]/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#0F172A]">Have a question not listed here?</h4>
            <p className="text-xs text-[#334155] font-medium">Chat directly with our Bangalore product team on WhatsApp.</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-[#0A4F8F] text-xs font-bold rounded-xl border border-slate-200 shadow-sm"
            >
              Search All FAQs
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Madori%20team,%20I%20have%20a%20question%20about%20PG%20management"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#147A6E] hover:bg-[#0E5E54] text-white text-xs font-bold rounded-xl transition shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
