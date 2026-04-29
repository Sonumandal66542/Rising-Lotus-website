import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us, Rising Lotus Insurance" },
      { name: "description", content: "Learn about Rising Lotus Insurance, a local independent agency dedicated to personalized protection and exceptional service." },
      { property: "og:title", content: "About Rising Lotus Insurance" },
      { property: "og:description", content: "People-first insurance, always. Our story, mission, and values." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="pt-40 pb-20 px-6 gradient-hero-bg text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-gold-soft/50 text-gold text-xs font-semibold tracking-widest uppercase"
        >
          Our Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 font-display text-5xl md:text-7xl text-navy max-w-4xl mx-auto leading-[1.05]"
        >
          A boutique agency with a <em className="font-script text-gold">heart</em>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          People-first insurance, always, we help families and businesses find the right protection without jargon, pressure, or surprises.
        </motion.p>
      </section>
      <AboutSection />
      <Testimonials />
    </Layout>
  );
}
