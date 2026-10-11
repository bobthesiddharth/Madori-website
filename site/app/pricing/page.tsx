import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Pricing & Plans — Madori PG Management",
  description: "Transparent, honest pricing for Indian PG and hostel owners. Free direct UPI rent collection with 0% gateway fee.",
};

export default function PricingPage() {
  return (
    <div className="py-8">
      <Pricing />
      <FAQ />
    </div>
  );
}
