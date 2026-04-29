import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Briefcase, Home, Car, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Briefcase, title: "Business Insurance", desc: "Protect your enterprise with tailored commercial coverages including liability, property, and workers compensation.", to: "/insurance/business" as const },
  { icon: Home, title: "Home Insurance", desc: "Safeguard your most valuable asset and personal belongings against unexpected events and natural disasters.", to: "/insurance/home" as const },
  { icon: Car, title: "Auto Insurance", desc: "Drive with confidence knowing you have the right protection for your vehicles, passengers, and liabilities.", to: "/insurance/auto" as const },
];

export function CoverageGrid() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What we cover"
          title={<>Insurance <em className="font-script text-gold">coverage</em> options</>}
          subtitle="We offer a wide variety of insurance solutions customized for your needs. Select an option below to learn more or get a personalized quote."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl p-8 shadow-soft border border-border/60 overflow-hidden"
            >
              <div className="absolute inset-0 gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gold-soft/40 group-hover:bg-white/20 transition-colors duration-500" />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl gradient-gold group-hover:bg-white grid place-items-center shadow-soft"
                >
                  <it.icon className="w-6 h-6 text-white group-hover:text-gold transition-colors" />
                </motion.div>
                <h3 className="mt-6 font-display text-2xl text-navy group-hover:text-white transition-colors">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-white/90 transition-colors leading-relaxed">
                  {it.desc}
                </p>
                <Link
                  to={it.to}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:text-white transition-colors"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
