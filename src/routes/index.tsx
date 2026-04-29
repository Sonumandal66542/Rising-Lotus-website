import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CoverageGrid } from "@/components/CoverageGrid";
import { AboutSection } from "@/components/AboutSection";
import { ProductsMarquee } from "@/components/ProductsMarquee";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rising Lotus Insurance, Tailored Coverage You Can Trust" },
      { name: "description", content: "Independent insurance agency offering Auto, Home and Business coverage. Get a personalized quote in minutes." },
      { property: "og:title", content: "Rising Lotus Insurance, Tailored Coverage You Can Trust" },
      { property: "og:description", content: "Personalized protection from a local agency that puts you first." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <CoverageGrid />
      <AboutSection />
      <ProductsMarquee />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </Layout>
  );
}
