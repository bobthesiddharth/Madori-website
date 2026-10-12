import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us & Book a Demo — Madori",
  description: "Schedule a personalized 15-minute walkthrough of Madori for your PG or hostel property.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactForm />
    </div>
  );
}
