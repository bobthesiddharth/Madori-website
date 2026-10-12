'use client';

import { motion } from 'motion/react';
import { Building2, Users, BedDouble, ShieldCheck, MapPin } from 'lucide-react';

export default function TrustStrip() {
  const stats = [
    {
      id: 'pgs',
      label: 'PGs & Hostels Managed',
      value: '1,250+',
      subtext: 'Across 14 metro cities',
      icon: Building2,
    },
    {
      id: 'rooms',
      label: 'Rooms & Beds Laid Out',
      value: '28,000+',
      subtext: 'Live floor-plan syncing',
      icon: BedDouble,
    },
    {
      id: 'tenants',
      label: 'Active Tenants',
      value: '45,000+',
      subtext: 'Using the Madori Tenant App',
      icon: Users,
    },
    {
      id: 'rent',
      label: 'Rent Processed via UPI',
      value: '₹35 Cr+',
      subtext: '100% direct to owner accounts',
      icon: ShieldCheck,
    },
  ];

  const cities = ['Bengaluru', 'Pune', 'Hyderabad', 'Delhi NCR', 'Kota', 'Chennai', 'Mumbai', 'Ahmedabad'];

  return (
    <section className="relative py-16 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Tag */}
        <div className="text-center space-y-2 mb-10">
          <p className="text-xs font-bold tracking-widest text-[#0A4F8F] uppercase bg-[#EBF3FA] inline-block px-3 py-1 rounded-full border border-[#0A4F8F]/15">
            Proven at scale across India
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
            Trusted by modern PG owners & hostel operators
          </h2>
        </div>

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0A4F8F]/40 hover:bg-[#EBF3FA]/30 transition-all duration-200 group text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white border border-[#CBD5E1] text-[#0A4F8F] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-6 h-6 text-[#0A4F8F]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#1E293B] mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#475569] font-medium mt-0.5">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Presence Pills */}
        <div className="mt-10 pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs font-bold text-slate-700 mr-2 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#147A6E]" /> Active Metro Hubs:
          </span>
          {cities.map((city) => (
            <span
              key={city}
              className="px-3 py-1 text-xs font-bold bg-[#F8FAFC] border border-slate-300 text-slate-800 rounded-full"
            >
              {city}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
