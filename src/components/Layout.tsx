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
                logo="FlowRight"
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
                brand="FlowRight Plumbing"
                columns={[
                  {
                    title: "Services",
                    items: [
                      { label: "Leak Detection", href: "#services" },
                      { label: "Drain Cleaning", href: "#services" },
                      { label: "Water Heaters", href: "#services" },
                      { label: "Bathroom Remodels", href: "#services" },
                      { label: "Sewer Repair", href: "#services" },
                    ],
                  },
                  {
                    title: "Company",
                    items: [
                      { label: "About Us", href: "#" },
                      { label: "Testimonials", href: "#reviews" },
                      { label: "FAQ", href: "#faq" },
                      { label: "Careers", href: "#" },
                    ],
                  },
                  {
                    title: "Contact",
                    items: [
                      { label: "(555) 472-8100", href: "tel:5554728100" },
                      { label: "info@flowrightplumbing.com", href: "mailto:info@flowrightplumbing.com" },
                      { label: "Denver, CO" },
                    ],
                  },
                ]}
                copyright="© 2026 FlowRight Plumbing. All rights reserved."
                links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
              />
    </StyleProvider>
  );
}
