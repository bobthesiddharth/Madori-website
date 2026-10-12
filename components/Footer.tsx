import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Heart, 
  MapPin, 
  Phone, 
  Mail,
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info (2 cols on large) */}
          <div className="col-span-2 space-y-4 pr-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Madori"
                  width={140}
                  height={34}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Madori is inspired by the Japanese concept of floor plans — bringing calm, architectural precision, and zero-headache automation to Indian PG and hostel businesses.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero-fee direct UPI architecture • Bank grade security</span>
            </div>
          </div>

          {/* Col 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features#rooms" className="text-slate-300 hover:text-white transition">Floor Plan Layouts</Link></li>
              <li><Link href="/features#onboarding" className="text-slate-300 hover:text-white transition">Digital KYC Onboarding</Link></li>
              <li><Link href="/payments" className="text-slate-300 hover:text-white transition">Direct UPI Rent Flow</Link></li>
              <li><Link href="/pricing" className="text-slate-300 hover:text-white transition">Pricing & Plans</Link></li>
              <li><Link href="/login" className="text-slate-300 hover:text-white transition">Tenant Web App</Link></li>
            </ul>
          </div>

          {/* Col 2: Exploration */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-slate-300 hover:text-white transition">All Features</Link></li>
              <li><Link href="/how-it-works" className="text-slate-300 hover:text-white transition">How It Works</Link></li>
              <li><Link href="/faq" className="text-slate-300 hover:text-white transition">FAQ & Knowledge</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition">Request Demo</Link></li>
              <li><Link href="/payments" className="text-emerald-400 font-bold hover:underline transition">UPI Flow Demo</Link></li>
            </ul>
          </div>

          {/* Col 3: Portals & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Portals
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/login" className="text-white font-bold hover:underline flex items-center gap-1">
                  Owner Admin Login <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white font-bold hover:underline flex items-center gap-1">
                  Tenant Portal <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-emerald-400 font-bold hover:underline">
                  Register New PG Free
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-400">Privacy Policy</li>
              <li className="text-xs text-slate-400">Terms of Service</li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Madori Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Manage your PG, beautifully. Built for Indian PG owners across Bangalore, Pune, and NCR.
          </p>
        </div>

      </div>
    </footer>
  );
}
