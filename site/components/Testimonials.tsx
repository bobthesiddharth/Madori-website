'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2, MapPin, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'Before Madori, the first week of every month was pure chaos matching endless UPI screenshots in WhatsApp groups. Now tenants tap the deep link, money lands straight into my ICICI account, and receipts are sent in seconds. Saved me at least 15 hours every month.',
      author: 'Suresh Reddy',
      role: 'Owner, Balaji Luxury PGs (3 Branches • 140 Beds)',
      location: 'Koramangala, Bengaluru',
      verified: 'Verified Owner (Using Madori 14 mos)',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'The visual floor plan is genius. When college students and IT professionals walk in for inquiries, I open Madori on my iPad and show them the exact room layout, bed positions, and AC status. Our vacancy dropped to almost zero.',
      author: 'Meera Kulkarni',
      role: 'Proprietor, Sai Residency Ladies PG (65 Beds)',
      location: 'Viman Nagar, Pune',
      verified: 'Verified Owner (Using Madori 9 mos)',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'Other apps take a 1.5% to 2% payment gateway cut. Across 200 beds, we were losing almost ₹15,000 every single month in gateway fees! Madori’s zero-fee direct UPI flow is the single best feature for high-occupancy hostels.',
      author: 'Rajesh Agarwal',
      role: 'Director, Greenwood Co-Living (210 Beds)',
      location: 'Sector 62, Noida (Delhi NCR)',
      verified: 'Verified Owner (Using Madori 18 mos)',
      rating: 5,
    },
  ];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeReview = testimonials[currentIdx];

  return (
    <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#147A6E] uppercase bg-[#E6F5F3] px-3.5 py-1.5 rounded-full border border-[#147A6E]/20">
            REAL OWNER REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Loved by PG operators who value simplicity and peace of mind
          </h2>
          <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
            Here is what hostel owners across Bangalore, Pune, and Delhi NCR say about switching to Madori.
          </p>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative"
            >
              {/* Quote Mark Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3FA] text-[#0A4F8F] flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 fill-[#0A4F8F]" />
              </div>

              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg sm:text-2xl font-semibold text-[#0F172A] leading-relaxed mb-8">
                “{activeReview.quote}”
              </blockquote>

              {/* Author & Verification */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    {activeReview.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#334155] font-medium mt-0.5">
                    {activeReview.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#147A6E]" /> {activeReview.location}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-[#15803D] text-xs font-bold self-start sm:self-auto border border-emerald-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{activeReview.verified}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIdx ? 'w-8 bg-[#0A4F8F]' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 flex items-center justify-center shadow-sm transition active:scale-95 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 flex items-center justify-center shadow-sm transition active:scale-95 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
