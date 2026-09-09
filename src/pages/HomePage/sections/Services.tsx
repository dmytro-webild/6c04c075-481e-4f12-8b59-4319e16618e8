import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { Search, Flame, Droplets, Thermometer, Wrench } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Leak Detection",
      description: "Advanced non-invasive leak detection technology to accurately pinpoint hidden water and gas line leaks before they cause major damage.",
    },
    {
      icon: Droplets,
      title: "Drain Cleaning",
      description: "Comprehensive drain cleaning, hydro-jetting, and clog removal for sinks, showers, toilets, and main stack lines.",
    },
    {
      icon: Thermometer,
      title: "Water Heaters",
      description: "Expert installation, repair, and maintenance for traditional tank water heaters and energy-efficient tankless systems.",
    },
    {
      icon: Flame,
      title: "Heating & Furnace",
      description: "Complete heating solutions including furnace repairs, annual maintenance tune-ups, thermostat installation, and full replacements.",
    },
    {
      icon: Wrench,
      title: "Sewer Repair",
      description: "Main sewer line inspection, trenchless repair, tree root removal, and pipe replacement to keep your plumbing flowing smoothly.",
    },
  ];

  return (
    <section id="services" className="relative w-full bg-background">
      <div className="w-content-width mx-auto flex flex-col items-center">
        {/* Section Badge */}
        <div className="px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-wider card rounded-full border border-white/10 text-accent">
          Our Services
        </div>

        {/* Heading */}
        <TextAnimation
          text="Comprehensive Plumbing & Heating Services"
          variant="slide-up"
          gradientText={false}
          tag="h2"
          className="text-4xl md:text-5xl font-bold text-center text-foreground max-w-content-width"
        />

        <p className="mt-4 text-lg text-accent text-center max-w-content-width">
          Top-rated plumbing and heating solutions for homeowners across Calgary. Reliable craftsmanship and upfront pricing.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} variant="slide-up" delay={idx * 0.08}>
                <div className="flex flex-col justify-between p-8 h-full card rounded-theme border border-white/10 hover:border-accent/40 transition-all duration-300 group">
                  <div>
                    <div className="w-12 h-12 rounded-xl primary-button flex items-center justify-center mb-6 text-primary-cta-text group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-accent leading-relaxed text-sm">{service.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Button text="Book Service" href="#contact" variant="secondary" className="w-full text-xs" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}