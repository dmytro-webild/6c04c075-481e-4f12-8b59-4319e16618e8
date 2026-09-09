import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarInline from "@/components/ui/NavbarInline";
import FooterSimpleCard from "@/components/sections/footer/FooterSimpleCard";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarInline
                logo="BT Plumbers and Heating"
                navItems={[
                  { name: "Services", href: "#services" },
                  { name: "Reviews", href: "#reviews" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Get Quote", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimpleCard
                brand="BT Plumbers and Heating"
                columns={[
                  {
                    title: "Services",
                    items: [
                      { label: "Leak Detection", href: "#services" },
                      { label: "Drain Cleaning", href: "#services" },
                      { label: "Water Heaters", href: "#services" },
                      { label: "Heating & Furnace", href: "#services" },
                      { label: "Sewer Repair", href: "#services" },
                    ],
                  },
                  {
                    title: "Hours",
                    items: [
                      { label: "Mon - Sat: 7am - 6pm" },
                      { label: "Sunday: Closed" },
                    ],
                  },
                  {
                    title: "Contact",
                    items: [
                      { label: "(587) 572-2549", href: "tel:5875722549" },
                      { label: "228 Sora Ter SE, Calgary, AB T3S 0A8" },
                    ],
                  },
                ]}
                copyright="© 2026 BT Plumbers and Heating. All rights reserved."
                links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
              />
    </StyleProvider>
  );
}
