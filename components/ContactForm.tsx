'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pgName: '',
    rooms: '25',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.pgName.trim()) {
      errs.pgName = 'Please enter your PG or hostel name.';
    }
    if (!formData.rooms || Number(formData.rooms) < 1) {
      errs.rooms = 'Please specify at least 1 room.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({
        name: '',
        phone: '',
        pgName: '',
        rooms: '25',
        message: '',
      });
      // Auto-hide toast after 6 seconds
      setTimeout(() => setShowToast(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-24 right-6 z-50 bg-[#0F172A] text-white p-5 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3 max-w-md"
            >
              <div className="w-9 h-9 rounded-full bg-[#15803D] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold">Demo Request Received!</h5>
                <p className="text-xs text-slate-300 mt-0.5">
                  Our onboarding specialist will call you shortly to walk you through your live PG layout.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowToast(false)}
                className="text-slate-400 hover:text-white text-xs font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#0A4F8F] uppercase bg-[#EBF3FA] px-3.5 py-1.5 rounded-full border border-[#0A4F8F]/15">
                SCHEDULE A DEMO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Ready to see your PG layout in action?
              </h2>
              <p className="text-base text-[#334155] leading-relaxed font-medium">
                Book a personalized 15-minute walkthrough. We’ll show you how Madori manages your rooms, tracks UPI rent, and automates receipts.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FA] text-[#0A4F8F] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-600 block font-bold">Direct Phone Line</span>
                  <a href="tel:+918049203920" className="text-sm font-black text-[#0F172A] hover:text-[#0A4F8F]">
                    +91 80 4920 3920 / +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#E6F5F3] text-[#147A6E] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-600 block font-bold">Email Inquiries</span>
                  <a href="mailto:hello@madori.example" className="text-sm font-black text-[#0F172A] hover:text-[#0A4F8F]">
                    hello@madori.example
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] text-slate-700 flex items-center justify-center border border-[#CBD5E1]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-600 block font-bold">Headquarters</span>
                  <p className="text-sm font-bold text-[#0F172A]">
                    HSR Layout, Sector 6, Bengaluru, Karnataka
                  </p>
                </div>
              </div>
            </div>

            {/* SLA badge */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#15803D] bg-emerald-100 border border-emerald-300 px-4 py-3 rounded-xl">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Average response time: under 30 minutes during business hours</span>
            </div>
          </div>

          {/* Right Column: Contact & Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#CBD5E1] shadow-xl">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
              Request a 1-on-1 Walkthrough
            </h3>
            <p className="text-sm text-[#334155] mb-8 font-medium">
              Fill in your details and we will set up a live floor plan preview for your property.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] outline-none transition-all ${
                      errors.name ? 'border-[#B91C1C] bg-red-50/40' : 'border-[#CBD5E1] focus:ring-2 focus:ring-[#0A4F8F]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-[#B91C1C] mt-1 flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] outline-none transition-all ${
                      errors.phone ? 'border-[#B91C1C] bg-red-50/40' : 'border-[#CBD5E1] focus:ring-2 focus:ring-[#0A4F8F]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-[#B91C1C] mt-1 flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* PG Name */}
                <div>
                  <label htmlFor="contact-pg-name" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                    PG / Hostel Name *
                  </label>
                  <input
                    id="contact-pg-name"
                    type="text"
                    value={formData.pgName}
                    onChange={(e) => setFormData({ ...formData, pgName: e.target.value })}
                    placeholder="e.g. Royal Comforts PG"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] outline-none transition-all ${
                      errors.pgName ? 'border-[#B91C1C] bg-red-50/40' : 'border-[#CBD5E1] focus:ring-2 focus:ring-[#0A4F8F]'
                    }`}
                  />
                  {errors.pgName && (
                    <span className="text-xs text-[#B91C1C] mt-1 flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3 h-3" /> {errors.pgName}
                    </span>
                  )}
                </div>

                {/* Number of Rooms */}
                <div>
                  <label htmlFor="contact-rooms" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                    Number of Rooms *
                  </label>
                  <input
                    id="contact-rooms"
                    type="number"
                    min="1"
                    value={formData.rooms}
                    onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0F172A] outline-none transition-all ${
                      errors.rooms ? 'border-[#B91C1C] bg-red-50/40' : 'border-[#CBD5E1] focus:ring-2 focus:ring-[#0A4F8F]'
                    }`}
                  />
                  {errors.rooms && (
                    <span className="text-xs text-[#B91C1C] mt-1 flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3 h-3" /> {errors.rooms}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                  Message / Specific Questions (Optional)
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your properties, existing pain points, or questions..."
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0A4F8F] outline-none text-sm text-[#0F172A] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="uiverse-glow-btn w-full py-4 px-6 rounded-xl font-bold text-base text-white disabled:bg-slate-400 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting request...</span>
                ) : (
                  <>
                    <span>Submit & Request Walkthrough</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
