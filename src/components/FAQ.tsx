import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "What types of insurance do you offer?", a: "We offer a comprehensive range of coverage including Auto, Home, and Business insurance, plus specialty products like Renters, Flood, RV, Motorcycle and Workers Comp. Our licensed agents work with multiple top-rated carriers to find you the best rates and coverage tailored to your needs." },
  { q: "How do I get a quote?", a: "Getting a quote is fast and free! Simply fill out the quick quote form on our homepage, call us directly, or visit our office. Most quotes are delivered within 24 hours with no obligation to purchase." },
  { q: "Can I bundle multiple policies together?", a: "Absolutely. Bundling your auto and home, or any combination of policies, typically saves you 10–25% on your premiums. Our agents will walk you through all available multi-policy discounts." },
  { q: "What happens when I need to file a claim?", a: "We're here for you every step of the way. Contact our claims support line and a dedicated agent will guide you through the process, help gather documentation, and advocate on your behalf with the carrier." },
  { q: "How do I update or change my current policy?", a: "Policy changes can be made quickly by calling our office or sending us an email. Most updates, like adding a driver, changing your address, or adjusting coverage limits, take effect within 2-3 business days." },
  { q: "Is my information kept confidential?", a: "Yes, absolutely. We take your privacy seriously and never sell your personal information to third parties. All data is securely stored and used solely to service your insurance needs." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently asked <em className="font-script text-gold">questions</em></>}
          subtitle="Everything you need to know about our insurance services. Can't find what you're looking for? Reach out to our team."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  active ? "border-gold bg-white shadow-soft" : "border-border bg-white/60"
                }`}
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl text-navy">{f.q}</span>
                  <motion.div
                    animate={{ rotate: active ? 45 : 0 }}
                    className={`w-9 h-9 rounded-full grid place-items-center shrink-0 ${
                      active ? "gradient-gold text-white" : "bg-muted text-navy"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
