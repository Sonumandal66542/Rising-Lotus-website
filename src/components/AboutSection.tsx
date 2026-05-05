import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Check, Users, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-28 px-6 bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
              alt="Office meeting"
              className="rounded-3xl shadow-elegant aspect-[3/4] object-cover"
            />
            <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-12">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Team"
                className="rounded-3xl shadow-soft aspect-square object-cover"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white rounded-3xl p-4 sm:p-6 shadow-elegant"
              >
                <div className="font-display text-lg sm:text-3xl text-gradient-gold font-semibold leading-tight whitespace-nowrap">People-first</div>
                <div className="text-[11px] sm:text-sm text-muted-foreground mt-1 whitespace-nowrap">Insurance, always</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">About our agency</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
            People-first insurance, <em className="font-script text-gold">always</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Rising Lotus Insurance is an independent insurance agency proudly serving our local communities. We are dedicated to providing personalized protection and exceptional customer service.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We partner with top-rated insurance carriers to offer comprehensive coverage options at competitive rates, ensuring you get the best value without compromising on quality.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Award, t: "100% Protection Focused" },
              { icon: Users, t: "Local Community First" },
            ].map((f) => (
              <motion.div
                key={f.t}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-soft border border-border/60"
              >
                <div className="w-10 h-10 rounded-xl gradient-gold grid place-items-center">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-navy text-sm">{f.t}</span>
              </motion.div>
            ))}
          </div>

  {location.pathname !== "/about" && (
          <Link to="/about" className="mt-8 inline-flex">
            <motion.span
              whileHover={{ scale: 1.04, gap: "1rem" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-gold text-white font-semibold shadow-elegant"
            >
              Learn More About Us <Check className="w-4 h-4" />
            </motion.span>
          </Link>
  )}
        </motion.div>
      </div>
    </section>
  );
}
