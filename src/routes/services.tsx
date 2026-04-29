import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CoverageGrid } from "@/components/CoverageGrid";
import { ProductsMarquee } from "@/components/ProductsMarquee";
import { FAQ } from "@/components/FAQ";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Coverage, Rising Lotus Insurance" },
      { name: "description", content: "Explore Auto, Home, Business, Renters, Flood, RV, Motorcycle and Workers Comp insurance from Rising Lotus." },
      { property: "og:title", content: "Insurance Services, Rising Lotus" },
      { property: "og:description", content: "Comprehensive coverage tailored to your life and business." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <section className="pt-40 pb-12 px-6 gradient-hero-bg text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-gold-soft/50 text-gold text-xs font-semibold tracking-widest uppercase"
        >
          What we offer
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 font-display text-5xl md:text-7xl text-navy max-w-4xl mx-auto leading-[1.05]"
        >
          Coverage that <em className="font-script text-gold">protects</em> what matters.
        </motion.h1>
      </section>
      <CoverageGrid />
      <ProductsMarquee />
      <FAQ />
    </Layout>
  );
}
