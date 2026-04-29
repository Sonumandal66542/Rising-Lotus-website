import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";

const products = [
  { title: "Renters Insurance", desc: "Cover your personal property and liability as a tenant.", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80", to: "/products/renters" as const },
  { title: "Flood Insurance", desc: "Protection against water damage not covered by standard policies.", img: "https://images.unsplash.com/photo-1527011045973-e380e2f5b801?w=500&q=80", to: "/products/flood" as const },
  { title: "Motorcycle Insurance", desc: "Stay safe on two wheels with tailored coverage.", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80", to: "/products/motorcycle" as const },
  { title: "RV Insurance", desc: "Comprehensive coverage for your home on wheels.", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&q=80", to: "/products/rv" as const },
  { title: "Workers Comp", desc: "Benefits to employees who suffer work-related injuries.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80", to: "/products/workers-comp" as const },
];

export function ProductsMarquee() {
  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Our products"
          title={<>Insurance products <em className="font-script text-gold">we offer</em></>}
          subtitle="From your primary residence to your business operations, we have policies that provide exactly what you need."
        />
      </div>

      <div className="mt-16 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee w-max">
          {[...products, ...products].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="w-64 sm:w-80 bg-white rounded-3xl overflow-hidden shadow-soft border border-border/60 group flex-shrink-0"
            >
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-navy">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{p.desc}</p>
                <Link
                  to={p.to}
                  className="mt-4 inline-flex text-sm font-semibold text-gold hover:gap-2 gap-1 items-center transition-all"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
