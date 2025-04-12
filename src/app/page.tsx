import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import HomePage from "@/components/Home";
import PricingSection from "@/components/Pricing";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex-1 text-[var(--background)] bg-[var(--foreground)]">
      <HomePage />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
};

export default Home;
