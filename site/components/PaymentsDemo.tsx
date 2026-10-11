'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  QrCode, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowRight, 
  FileDown, 
  ShieldCheck, 
  Plus, 
  Smartphone, 
  Building2, 
  Receipt, 
  Check, 
  IndianRupee,
  Settings,
  AlertCircle
} from 'lucide-react';

interface PaymentRecord {
  id: string;
  tenantName: string;
  roomNo: string;
  amount: number;
  month: string;
  method: 'upi' | 'cash' | 'bank' | 'card';
  utrNo: string;
  status: 'PENDING_VERIFICATION' | 'APPROVED' | 'REJECTED';
  date: string;
}

export default function PaymentsDemo() {
  // Owner settings state (per property/org)
  const [ownerUpiId, setOwnerUpiId] = useState('sharma.pg@okicici');
  const [ownerName, setOwnerName] = useState('Sharma Luxury PG & Co-Living');

  // Active view toggle: 'tenant-pay' | 'owner-approvals'
  const [activeTab, setActiveTab] = useState<'tenant-pay' | 'owner-approvals'>('tenant-pay');

  // Tenant payment state
  const [tenantRoom, setTenantRoom] = useState('101 (Bed A)');
  const [tenantName, setTenantName] = useState('Aakash Verma');
  const [rentAmount, setRentAmount] = useState(8500);
  const [rentMonth, setRentMonth] = useState('October 2026');
  const [utrInput, setUtrInput] = useState('');
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  // Manual payment modal state
  const [showManualModal, setShowManualModal] = useState(false);
  const [manualRecord, setManualRecord] = useState({
    tenantName: '',
    roomNo: '',
    amount: 9000,
    method: 'cash' as 'cash' | 'bank',
  });

  // Approved receipt modal
  const [selectedReceipt, setSelectedReceipt] = useState<PaymentRecord | null>(null);

  // Master payment records list
  const [payments, setPayments] = useState<PaymentRecord[]>([
    {
      id: 'PAY-1001',
      tenantName: 'Karan Malhotra',
      roomNo: 'Room 204 (Bed B)',
      amount: 8500,
      month: 'October 2026',
      method: 'upi',
      utrNo: '428901847120',
      status: 'PENDING_VERIFICATION',
      date: '11 Oct 2026, 11:30 AM',
    },
    {
      id: 'PAY-1002',
      tenantName: 'Priya Sundaram',
      roomNo: 'Room 302 (Single)',
      amount: 14000,
      month: 'October 2026',
      method: 'upi',
      utrNo: '519284019283',
      status: 'APPROVED',
      date: '10 Oct 2026, 04:15 PM',
    },
    {
      id: 'PAY-1003',
      tenantName: 'Vikram Joshi',
      roomNo: 'Room 105 (Bed C)',
      amount: 7500,
      month: 'October 2026',
      method: 'cash',
      utrNo: 'CASH-REC-89',
      status: 'APPROVED',
      date: '09 Oct 2026, 07:00 PM',
    },
  ]);

  // Construct UPI deep link
  const noteParam = encodeURIComponent(`Rent ${rentMonth} - Room ${tenantRoom}`);
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(ownerUpiId)}&pn=${encodeURIComponent(ownerName)}&am=${rentAmount}&cu=INR&tn=${noteParam}`;

  // Handle tenant UTR submission
  const handleTenantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!utrInput || utrInput.length < 8) return;

    const newPayment: PaymentRecord = {
      id: `PAY-${Math.floor(1000 + Math.random() * 9000)}`,
      tenantName,
      roomNo: tenantRoom,
      amount: rentAmount,
      month: rentMonth,
      method: 'upi',
      utrNo: utrInput,
      status: 'PENDING_VERIFICATION',
      date: 'Just now',
    };

    setPayments([newPayment, ...payments]);
    setPaymentSubmitted(true);
  };

  // Owner Approve / Reject handlers
  const handleApprove = (id: string) => {
    setPayments((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: 'APPROVED' } : p))
    );
  };

  const handleReject = (id: string) => {
    setPayments((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: 'REJECTED' } : p))
    );
  };

  // Add manual cash or bank entry
  const handleAddManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualRecord.tenantName || !manualRecord.roomNo) return;

    const newPayment: PaymentRecord = {
      id: `PAY-${Math.floor(1000 + Math.random() * 9000)}`,
      tenantName: manualRecord.tenantName,
      roomNo: manualRecord.roomNo,
      amount: manualRecord.amount,
      month: rentMonth,
      method: manualRecord.method,
      utrNo: manualRecord.method === 'cash' ? 'CASH-HANDOVER' : 'NEFT-TRANSFER',
      status: 'APPROVED',
      date: 'Just now',
    };

    setPayments([newPayment, ...payments]);
    setShowManualModal(false);
    setManualRecord({ tenantName: '', roomNo: '', amount: 9000, method: 'cash' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Top Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FA] text-[#0A4F8F] text-xs font-bold mb-2">
            <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
            Free Phase • Zero Gateway Commission Flow
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F2D3D]">
            Direct UPI Rent Collection & Verification
          </h1>
          <p className="text-sm text-[#5B6B7B] mt-1">
            Test the live tenant payment submission and owner one-tap verification flow.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex bg-[#F5F8FA] p-1.5 rounded-2xl border border-[#E2E8F0] shadow-inner">
          <button
            type="button"
            onClick={() => { setActiveTab('tenant-pay'); setPaymentSubmitted(false); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tenant-pay'
                ? 'bg-[#2A9D8F] text-white shadow-md'
                : 'text-[#5B6B7B] hover:text-[#1F2D3D]'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            1. Tenant Pay Screen
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('owner-approvals')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'owner-approvals'
                ? 'bg-[#0A4F8F] text-white shadow-md'
                : 'text-[#5B6B7B] hover:text-[#1F2D3D]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            2. Owner Approvals Table
          </button>
        </div>
      </div>

      {/* Owner UPI Settings Bar */}
      <div className="bg-[#EBF3FA] rounded-2xl p-4 border border-[#0A4F8F]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#0A4F8F] text-white flex items-center justify-center">
            <Settings className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-[#1F2D3D] block">Configured Owner UPI ID (From Settings):</span>
            <span className="text-[#0A4F8F] font-mono font-semibold">{ownerUpiId}</span>
            <span className="text-[#8E9FAA] ml-2">({ownerName})</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#5B6B7B]">Edit in Settings:</span>
          <input
            type="text"
            value={ownerUpiId}
            onChange={(e) => setOwnerUpiId(e.target.value)}
            className="bg-white border border-[#CBD5E1] rounded-lg px-2.5 py-1 text-xs font-mono text-[#1F2D3D] outline-none"
          />
        </div>
      </div>

      {/* Main Tab Views */}
      {activeTab === 'tenant-pay' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tenant Mobile Checkout Simulation */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D8F] bg-[#EAF6F5] px-2.5 py-0.5 rounded-full">
                  Tenant Checkout View
                </span>
                <h3 className="text-xl font-bold text-[#1F2D3D] mt-1">Pay Rent for {rentMonth}</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#8E9FAA] block">Amount Due</span>
                <span className="text-2xl font-black text-[#0A4F8F]">₹{rentAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {paymentSubmitted ? (
              <div className="py-8 text-center space-y-4 bg-[#F5F8FA] rounded-2xl p-6 border border-[#E2E8F0]">
                <div className="w-14 h-14 bg-amber-100 text-[#FFC107] rounded-full mx-auto flex items-center justify-center">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-lg font-bold text-[#1F2D3D]">Payment Submitted for Verification!</h4>
                <p className="text-xs text-[#5B6B7B] max-w-sm mx-auto">
                  UTR: <span className="font-mono font-bold text-[#1F2D3D]">{utrInput}</span>. The PG owner has received your payment alert and will approve it shortly. You will get an automated WhatsApp PDF receipt on approval.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('owner-approvals')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A4F8F] text-white rounded-xl text-xs font-bold hover:bg-[#083E70]"
                  >
                    View in Owner Approvals Table <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Method 1: 1-Tap UPI Apps */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#1F2D3D] uppercase tracking-wider block">
                    Option 1: 1-Tap Direct UPI Payment
                  </span>
                  <a
                    href={upiDeepLink}
                    className="w-full py-3.5 px-4 bg-[#0A4F8F] hover:bg-[#083E70] text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition"
                  >
                    <Smartphone className="w-4 h-4" />
                    Open UPI App (GPay / PhonePe / Paytm)
                  </a>
                  <p className="text-[11px] text-[#8E9FAA] text-center">
                    Deep link pre-fills amount ₹{rentAmount} and reference: &quot;Rent {rentMonth} - Room {tenantRoom}&quot;
                  </p>
                </div>

                {/* Method 2: Dynamic QR Code */}
                <div className="p-5 rounded-2xl bg-[#F5F8FA] border border-[#E2E8F0] text-center space-y-3">
                  <span className="text-xs font-bold text-[#1F2D3D] block">
                    Option 2: Scan Dynamic QR with Any UPI App
                  </span>
                  <div className="inline-block p-4 bg-white rounded-2xl border border-[#CBD5E1] shadow-sm">
                    {/* SVG QR Code Simulation */}
                    <div className="w-44 h-44 bg-[#FAFBFD] flex flex-col items-center justify-center border-2 border-dashed border-[#0A4F8F]/40 rounded-xl relative p-3">
                      <QrCode className="w-24 h-24 text-[#0A4F8F] opacity-90" />
                      <span className="text-[10px] font-mono font-bold text-[#0A4F8F] mt-2">
                        {ownerUpiId}
                      </span>
                      <span className="text-[9px] text-[#28A745] font-bold">
                        ₹{rentAmount} • Fixed Amount
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 2: Tenant Enters 12-Digit UTR */}
                <form onSubmit={handleTenantSubmit} className="space-y-4 pt-2 border-t border-[#E2E8F0]">
                  <div>
                    <label className="block text-xs font-bold text-[#1F2D3D] uppercase tracking-wider mb-1.5">
                      Enter 12-Digit UPI Reference / UTR Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={utrInput}
                      onChange={(e) => setUtrInput(e.target.value)}
                      placeholder="e.g. 428901847120"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] font-mono text-sm focus:ring-2 focus:ring-[#2A9D8F] outline-none text-[#1F2D3D]"
                    />
                    <span className="text-[11px] text-[#8E9FAA] mt-1 block">
                      Found in your GPay / PhonePe / Paytm transaction receipt.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#2A9D8F] hover:bg-[#218276] text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition"
                  >
                    <span>Submit Payment for Approval</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Flow Explanation Side Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
              <h4 className="text-lg font-bold text-[#1F2D3D]">Why the Free UPI Flow Wins</h4>
              <p className="text-sm text-[#5B6B7B] leading-relaxed">
                Paid payment gateways take a 1.5% to 2% deduction on every transaction, plus GST and setup fees. For a 50-bed PG with ₹5,00,000 monthly turnover, that means losing ₹10,000 every month.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  { title: '100% Direct Credit', desc: 'No intermediate wallet hold. Money hits your ICICI, HDFC, or SBI bank account immediately.' },
                  { title: 'Deep Link Auto Pre-fill', desc: 'Tenants do not have to copy-paste amounts or room numbers; everything is verified.' },
                  { title: 'Zero Gateway Risk', desc: 'No risk of sudden payment gateway merchant account freezing or chargeback fraud.' },
                  { title: 'One-Tap Reconciliation', desc: 'Owners verify the 12-digit UTR on mobile with one tap, instantly updating the tenant balance.' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#F5F8FA] border border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#1F2D3D] block">{item.title}</span>
                    <span className="text-xs text-[#5B6B7B] mt-0.5 block">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      ) : (
        /* Owner Approvals Table View */
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xl space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#1F2D3D]">Payments & Approvals Queue</h3>
                <p className="text-xs text-[#8E9FAA]">
                  Listing all pending and verified payments across rooms.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowManualModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#EBF3FA] text-[#0A4F8F] hover:bg-[#0A4F8F] hover:text-white font-bold text-xs transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Log Cash / Bank Transfer
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-[#8E9FAA] border-b border-[#E2E8F0] bg-[#FAFBFD]">
                    <th className="p-3 font-semibold">Payment ID</th>
                    <th className="p-3 font-semibold">Tenant & Room</th>
                    <th className="p-3 font-semibold">Amount</th>
                    <th className="p-3 font-semibold">Method</th>
                    <th className="p-3 font-semibold">UTR / Ref</th>
                    <th className="p-3 font-semibold">Status</th>
                    <th className="p-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5F8FA]">
                  {payments.map((p) => (
                    <tr key={p.id} className="hover:bg-[#F8FAFC] transition">
                      <td className="p-3 font-mono font-bold text-[#0A4F8F]">{p.id}</td>
                      <td className="p-3">
                        <span className="font-bold text-[#1F2D3D] block">{p.tenantName}</span>
                        <span className="text-[11px] text-[#8E9FAA]">{p.roomNo}</span>
                      </td>
                      <td className="p-3 font-bold text-[#1F2D3D]">
                        ₹{p.amount.toLocaleString('en-IN')}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded font-bold text-[10px] uppercase ${
                          p.method === 'upi' ? 'bg-[#EBF3FA] text-[#0A4F8F]' : 'bg-slate-100 text-[#5B6B7B]'
                        }`}>
                          {p.method}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-[#5B6B7B]">{p.utrNo}</td>
                      <td className="p-3">
                        {p.status === 'PENDING_VERIFICATION' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <Clock className="w-3 h-3" /> Pending
                          </span>
                        )}
                        {p.status === 'APPROVED' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-[#28A745] border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" /> Approved
                          </span>
                        )}
                        {p.status === 'REJECTED' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-50 text-[#DC3545] border border-red-200">
                            <XCircle className="w-3 h-3" /> Rejected
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-right">
                        {p.status === 'PENDING_VERIFICATION' ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleApprove(p.id)}
                              className="px-3 py-1.5 rounded-lg bg-[#28A745] hover:bg-emerald-600 text-white font-bold text-xs shadow-sm cursor-pointer"
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              onClick={() => handleReject(p.id)}
                              className="px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-[#DC3545] font-bold text-xs cursor-pointer"
                            >
                              Reject
                            </button>
                          </div>
                        ) : p.status === 'APPROVED' ? (
                          <button
                            type="button"
                            onClick={() => setSelectedReceipt(p)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#EAF6F5] text-[#2A9D8F] font-bold text-xs hover:bg-[#2A9D8F] hover:text-white transition cursor-pointer"
                          >
                            <FileDown className="w-3.5 h-3.5" /> PDF Receipt
                          </button>
                        ) : (
                          <span className="text-[11px] text-[#8E9FAA]">No action</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}

      {/* Manual Entry Modal */}
      {showManualModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#E2E8F0] shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-[#1F2D3D]">Record Cash / Bank Payment</h4>
              <button
                type="button"
                onClick={() => setShowManualModal(false)}
                className="text-slate-400 hover:text-black font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddManual} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1F2D3D] uppercase mb-1">Tenant Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={manualRecord.tenantName}
                  onChange={(e) => setManualRecord({ ...manualRecord, tenantName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-[#1F2D3D] outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1F2D3D] uppercase mb-1">Room / Bed *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Room 202 (Bed A)"
                  value={manualRecord.roomNo}
                  onChange={(e) => setManualRecord({ ...manualRecord, roomNo: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-[#1F2D3D] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#1F2D3D] uppercase mb-1">Amount (₹) *</label>
                  <input
                    type="number"
                    required
                    value={manualRecord.amount}
                    onChange={(e) => setManualRecord({ ...manualRecord, amount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-[#1F2D3D] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#1F2D3D] uppercase mb-1">Method *</label>
                  <select
                    value={manualRecord.method}
                    onChange={(e) => setManualRecord({ ...manualRecord, method: e.target.value as 'cash' | 'bank' })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-[#1F2D3D] outline-none"
                  >
                    <option value="cash">Cash in hand</option>
                    <option value="bank">Direct NEFT/IMPS</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0A4F8F] hover:bg-[#083E70] text-white font-bold rounded-xl cursor-pointer"
                >
                  Save & Update Balance
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Branded PDF Receipt Viewer Modal */}
      {selectedReceipt && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-[#E2E8F0] shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#0A4F8F] bg-[#EBF3FA] px-2.5 py-0.5 rounded-full">
                  Official Rent Receipt
                </span>
                <h4 className="text-lg font-bold text-[#1F2D3D] mt-1">{ownerName}</h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedReceipt(null)}
                className="text-slate-400 hover:text-black font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {/* Receipt Details */}
            <div className="space-y-3 text-xs bg-[#FAFBFD] p-5 rounded-2xl border border-[#E2E8F0]">
              <div className="flex justify-between">
                <span className="text-[#8E9FAA]">Receipt No:</span>
                <span className="font-mono font-bold text-[#1F2D3D]">{selectedReceipt.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9FAA]">Tenant:</span>
                <span className="font-bold text-[#1F2D3D]">{selectedReceipt.tenantName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9FAA]">Room / Bed:</span>
                <span className="text-[#1F2D3D]">{selectedReceipt.roomNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9FAA]">Period:</span>
                <span className="text-[#1F2D3D]">{selectedReceipt.month}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9FAA]">Payment Mode:</span>
                <span className="font-bold uppercase text-[#0A4F8F]">{selectedReceipt.method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9FAA]">Transaction Ref / UTR:</span>
                <span className="font-mono text-[#5B6B7B]">{selectedReceipt.utrNo}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#E2E8F0] text-sm">
                <span className="font-bold text-[#1F2D3D]">Total Received:</span>
                <span className="font-black text-[#28A745]">₹{selectedReceipt.amount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#8E9FAA] text-center">
              This receipt is digitally signed and valid for employer HRA claims.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  alert(`Downloading PDF receipt for ${selectedReceipt.id}...`);
                  setSelectedReceipt(null);
                }}
                className="flex-1 py-3 bg-[#0A4F8F] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileDown className="w-4 h-4" /> Download Official PDF
              </button>
              <button
                type="button"
                onClick={() => setSelectedReceipt(null)}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-[#1F2D3D] font-bold rounded-xl text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
