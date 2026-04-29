import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, Rising Lotus Insurance" },
      { name: "description", content: "Reach Rising Lotus Insurance for a quote, claim help, or policy questions. Our team typically responds within 24 hours." },
      { property: "og:title", content: "Contact Rising Lotus Insurance" },
      { property: "og:description", content: "We'd love to hear from you. Get in touch today." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="pt-40 pb-12 px-6 gradient-hero-bg text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-gold-soft/50 text-gold text-xs font-semibold tracking-widest uppercase"
        >
          Get in touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 font-display text-5xl md:text-7xl text-navy max-w-4xl mx-auto leading-[1.05]"
        >
          Let's <em className="font-script text-gold">talk</em>.
        </motion.h1>
      </section>
      <ContactSection />
    </Layout>
  );
}
