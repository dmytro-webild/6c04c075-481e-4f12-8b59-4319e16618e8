import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { ShieldCheck, Award, ThumbsUp, FileText, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const badges = [
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: Award, label: "15+ Years Experience" },
    { icon: ThumbsUp, label: "100% Satisfaction Guarantee" },
    { icon: FileText, label: "Free Estimates" },
    { icon: CheckCircle, label: "1,200+ Jobs Completed" },
  ];

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-background">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />

      <div className="relative z-10 w-content-width mx-auto flex flex-col items-center text-center my-auto">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full card mb-6 border border-white/10">
          <AvatarGroup
            avatarsSrc={[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
            ]}
            size="sm"
          />
          <span className="text-sm font-medium text-foreground">Trusted by 1,200+ homeowners</span>
        </div>

        {/* Hero Title */}
        <TextAnimation
          text="Expert Plumbing You Can Trust"
          variant="slide-up"
          gradientText={false}
          tag="h1"
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-content-width"
        />

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-accent max-w-content-width leading-relaxed">
          Professional plumbing and heating services in Calgary. Open Mon–Sat 7:00 AM – 6:00 PM (Closed Sundays).
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button text="Schedule Service" href="#contact" variant="primary" />
          <Button text="(587) 572-2549" href="tel:5875722549" variant="secondary" />
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="relative z-10 w-content-width mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 p-4 rounded-theme card border border-white/10 backdrop-blur-md">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <Icon className="w-4 h-4 text-accent" />
                <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}