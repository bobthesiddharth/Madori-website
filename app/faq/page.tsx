'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall,
  CheckCircle2,
  QrCode,
  Building2,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const allFaqs = [
    {
      id: 1,
      category: 'payments',
      q: 'How does the free UPI payment flow work? Are there any hidden transaction charges?',
      a: 'There are absolutely zero transaction charges. Madori generates dynamic UPI deep links and QR codes pre-filled with the owner’s UPI ID (saved securely in your Settings), the tenant’s room number, and the exact rent amount. Money transfers directly from the tenant’s UPI app (Google Pay, PhonePe, Paytm, BHIM) into your bank account. The tenant submits the 12-digit UTR reference, and the owner approves with one tap. Madori never deducts any commission.',
    },
    {
      id: 2,
      category: 'payments',
      q: 'Why should I use Madori’s direct UPI flow instead of a payment gateway like Razorpay or Cashfree?',
      a: 'Payment gateways charge a 1.5% to 2% MDR fee plus GST on every transaction. For a 50-bed PG with ₹5 Lakh monthly turnover, that means losing ₹10,000 every single month in gateway fees. Furthermore, gateways hold money in nodal accounts for T+2 days and can freeze accounts during verification. Madori’s direct UPI flow is 100% free, credits instantly to your bank account, and eliminates gateway deductions completely.',
    },
    {
      id: 3,
      category: 'tenants',
      q: 'Do tenants need to download a heavy mobile app from Google Play Store or Apple App Store?',
      a: 'No app download is required! Tenants receive a clean, lightweight mobile web link via WhatsApp or SMS. It opens in any mobile browser in less than a second. Tenants can view dues, tap to open their UPI app, download official PDF rent receipts for HRA tax saving, and submit maintenance complaints.',
    },
    {
      id: 4,
      category: 'setup',
      q: 'How long does it take to configure my rooms and move away from paper registers or Excel?',
      a: 'Setup takes under 5 minutes with our visual room setup wizard. If you are busy, we offer 100% Free Assisted Onboarding: simply take photos of your paper register or WhatsApp us your existing Excel sheet, and our Bangalore team will build your complete floor plan and room ledger for you within 2 hours.',
    },
    {
      id: 5,
      category: 'tenants',
      q: 'How do automated rent receipts work for tenants claiming workplace HRA tax exemptions?',
      a: 'The moment an owner or warden taps "Approve" on a verified payment, Madori automatically generates a professional, branded PDF receipt. It includes your PG name, address, owner PAN/GST number (optional), room/bed details, and month of rent. Tenants can view and download it anytime, saving you from writing paper receipts.',
    },
    {
      id: 6,
      category: 'setup',
      q: 'Can I manage multiple PG branches with separate wardens and staff permissions?',
      a: 'Yes! Madori natively supports multi-property setups. You can create staff accounts for Property Managers, Wardens, Cooks, and Security Guards with granular permissions. For example, wardens only see occupancy and tickets for their assigned branch, while banking UPI settings are restricted exclusively to the master Owner.',
    },
    {
      id: 7,
      category: 'payments',
      q: 'Can I record cash payments and direct NEFT / IMPS bank transfers?',
      a: 'Yes. In addition to UPI, owners and wardens have full flexibility to log Cash, Cheque, or Direct IMPS entries in the approval screen. Every entry instantly updates the tenant balance, marks their bed as paid for the month, and issues an official receipt.',
    },
    {
      id: 8,
      category: 'security',
      q: 'Is tenant Aadhaar and KYC data secure?',
      a: 'Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Identity documents and Aadhaar numbers are stored securely with strict access control and are never shared or sold to third parties.',
    },
  ];

  const filtered = allFaqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesQuery =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-12 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FA] border border-[#0A4F8F]/20 text-[#0A4F8F] text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-[#147A6E]" />
            KNOWLEDGE BASE & SUPPORT
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#334155]">
            Everything you need to know about Madori, zero-fee UPI collections, and property setup.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. UPI, receipts, cash, setup)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] shadow-sm focus:ring-2 focus:ring-[#0A4F8F] outline-none"
            />
          </div>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'payments', label: 'Direct UPI & Fees' },
              { id: 'setup', label: 'Setup & Wardens' },
              { id: 'tenants', label: 'Tenants & Receipts' },
              { id: 'security', label: 'Security & Privacy' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0A4F8F] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-[#E2E8F0] hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered FAQ Accordion List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <p className="text-slate-600 font-medium text-sm">
                No matching questions found for &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="text-xs font-bold text-[#0A4F8F] hover:underline cursor-pointer"
              >
                Clear search and view all questions
              </button>
            </div>
          ) : (
            filtered.map((faq, idx) => {
              const isOpen = openIdx === faq.id;
              return (
                <div
                  key={faq.id}
                  className="uiverse-card overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 text-[#0A4F8F] flex items-center justify-center shrink-0 transition-transform duration-200 ${
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
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#334155] leading-relaxed border-t border-slate-100 pt-4 font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* WhatsApp & Phone Direct Card */}
        <div className="bg-[#EBF3FA] rounded-3xl p-8 border border-[#0A4F8F]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#0F172A]">Still have a specific question about your PG?</h4>
            <p className="text-xs sm:text-sm text-[#334155]">
              Our onboarding team in Bangalore is available 7 days a week on WhatsApp and phone.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20Madori%20team,%20I%20have%20a%20question%20about%20my%20PG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#147A6E] hover:bg-[#0E5E54] text-white text-xs font-bold rounded-xl shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-[#0A4F8F] text-xs font-bold rounded-xl border border-slate-200 shadow-sm transition"
            >
              Book a Call
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
