import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const list = [
  { type: "Auto Insurance", body: "Rising Lotus made finding auto coverage easy and affordable. The team was incredibly responsive and broke down all the confusing details for me. Highly recommend!", name: "Jessica R.", initial: "J" },
  { type: "Business Insurance", body: "We switched our business liability insurance to them last year and have been extremely satisfied. Great customer service and a much better premium rate.", name: "Marcus T.", initial: "M" },
  { type: "Home Insurance", body: "Best agency in town. They handled my roof claim smoothly without any stress on my end. A true partner when you actually need them.", name: "Amanda K.", initial: "A" },
  { type: "Renters Insurance", body: "Setting up renters coverage took less than a day and the price was unbeatable. The team explained exactly what was protected and answered every question patiently.", name: "David L.", initial: "D" },
  { type: "Auto + Home Bundle", body: "Bundling saved us nearly 30% compared to our old provider. The onboarding was seamless and any question I send gets answered the same day. Truly five-star service.", name: "Priya S.", initial: "P" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const starsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const star = {
  hidden: { opacity: 0, scale: 0, rotate: -45 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring" as const, stiffness: 300, damping: 12 } },
};

export function Testimonials() {
  return (
    <section className="py-28 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What our <em className="font-script text-gold">clients</em> say</>}
          subtitle="Don't just take our word for it, read reviews from real clients who trust us with their insurance needs."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {list.map((t, i) => (
            <motion.div
              key={t.name}
              variants={card}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-3xl p-8 shadow-soft border border-border/60 group ${
                i === 3 ? "lg:col-start-1 lg:col-end-3 md:col-span-2" : ""
              } ${i === 4 ? "lg:col-span-1 md:col-span-2" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                className="absolute top-6 right-6"
              >
                <Quote className="w-10 h-10 text-gold-soft group-hover:text-gold transition-colors duration-500" />
              </motion.div>

              <span className="inline-block px-3 py-1 rounded-full bg-gold-soft/50 text-gold text-xs font-semibold">
                {t.type}
              </span>

              <motion.div
                variants={starsContainer}
                className="mt-3 flex gap-1"
              >
                {[...Array(5)].map((_, j) => (
                  <motion.span key={j} variants={star}>
                    <Star className="w-4 h-4 fill-gold text-gold" />
                  </motion.span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="mt-4 text-navy/90 leading-relaxed italic"
              >
                "{t.body}"
              </motion.p>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/60">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-11 h-11 rounded-full gradient-gold grid place-items-center text-white font-semibold shadow-soft"
                >
                  {t.initial}
                </motion.div>
                <div className="font-semibold text-navy text-sm">{t.name}</div>
              </div>

              <div className="absolute inset-0 rounded-3xl border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
