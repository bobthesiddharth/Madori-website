import PaymentsDemo from "@/components/PaymentsDemo";

export const metadata = {
  title: "Direct UPI Payments & Verification — Madori",
  description: "Experience Madori's zero-fee direct UPI rent flow. Dynamic UPI deep links, QR codes, and 1-tap owner approvals.",
};

export default function PaymentsPage() {
  return (
    <div className="py-8">
      <PaymentsDemo />
    </div>
  );
}
