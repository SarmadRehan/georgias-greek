import { AskGeorgias } from "@/components/AskGeorgias";
import { CateringSection } from "@/components/CateringSection";
import { DemoBanner } from "@/components/DemoBanner";
import { FindTheTruck } from "@/components/FindTheTruck";
import { GreekMarket } from "@/components/GreekMarket";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { MobileActionBar } from "@/components/MobileActionBar";
import { OurStory } from "@/components/OurStory";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteProvider } from "@/components/SiteProvider";

export default function Home() {
  return (
    <SiteProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <DemoBanner />
      <SiteHeader />
      <main id="main">
        <Hero />
        <OurStory />
        <MenuSection />
        <CateringSection />
        <FindTheTruck />
        <GreekMarket />
      </main>
      <SiteFooter />
      <MobileActionBar />
      <AskGeorgias />
    </SiteProvider>
  );
}
