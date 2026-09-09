import TextAnimation from "@/components/ui/TextAnimation";
import Accordion from "@/components/ui/Accordion";

export default function FaqSection() {
  const faqItems = [
    {
      title: "What areas in Calgary do you serve?",
      content: "We proudly serve all communities across Calgary and surrounding nearby areas. Contact us with your address to confirm service availability.",
    },
    {
      title: "What are your business operating hours?",
      content: "Our team is available Monday through Saturday from 7:00 AM to 6:00 PM. We are closed on Sundays.",
    },
    {
      title: "Do you offer free estimates on plumbing and heating work?",
      content: "Yes, we provide transparent, free estimates before starting any job so you know exactly what to expect with no hidden fees.",
    },
    {
      title: "How quickly can I schedule a service appointment?",
      content: "We offer convenient scheduling Monday through Saturday. You can book directly online or give us a call at (587) 572-2549.",
    },
    {
      title: "Are your technicians licensed and insured?",
      content: "Absolutely. All of our plumbers and HVAC technicians are fully certified, licensed, and insured in Alberta for your complete peace of mind.",
    },
  ];

  return (
    <section id="faq" className="relative w-full bg-background">
      <div className="w-content-width mx-auto flex flex-col items-center">
        <div className="px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-wider card rounded-full border border-white/10 text-accent">
          FAQ
        </div>

        <TextAnimation
          text="Frequently Asked Questions"
          variant="slide-up"
          gradientText={false}
          tag="h2"
          className="text-4xl md:text-5xl font-bold text-center text-foreground max-w-content-width"
        />

        <p className="mt-4 text-lg text-accent text-center max-w-content-width">
          Got questions about our services or scheduling? Find quick answers below.
        </p>

        <div className="w-full max-w-content-width">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}