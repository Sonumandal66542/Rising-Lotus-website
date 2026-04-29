import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { QuoteForm } from "./QuoteForm";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const word = "Insurance.".split("");

  return (
    <section ref={ref} className="relative pt-32 pb-20 overflow-hidden gradient-hero-bg">
      {/* floating decorative blobs */}
      <motion.div
        className="absolute top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blush/20 blur-3xl animate-blob"
        style={{ y: yImg }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-gold/20 blur-3xl animate-blob"
        style={{ y: yText }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y: yText, opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-soft/50 text-gold text-xs font-semibold tracking-wider uppercase shadow-soft"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Trusted Insurance Agency
          </motion.div>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-medium text-navy leading-[1.02] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              We are in the
            </motion.span>
            <span className="block italic font-script text-gold text-6xl md:text-7xl lg:text-8xl mt-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                business of
              </motion.span>
            </span>
            <span className="block mt-2 overflow-hidden">
              {word.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block shimmer-text"
                >
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Our mission is to help consumers save money and protect their financial future with tailored insurance coverage. Get the peace of mind you deserve today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-8 flex flex-nowrap gap-3"
          >
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full gradient-gold text-white font-semibold shadow-elegant text-sm sm:text-base whitespace-nowrap"
              >
                Contact Us
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Link>
            <Link to="/services">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-white border border-border text-navy font-semibold shadow-soft hover:border-gold text-sm sm:text-base whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" /> Our Coverage
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-10 grid grid-cols-3 gap-3 sm:flex sm:items-center sm:gap-8 text-sm"
          >
            {[
              { v: "People-first", l: "Always" },
              { v: "Independent", l: "Agency" },
              { v: "A+", l: "Rated" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-base sm:text-3xl text-gradient-gold font-semibold leading-tight whitespace-nowrap">{s.v}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div style={{ y: yImg }} className="relative">
            <div className="absolute -inset-4 gradient-gold rounded-[2.5rem] blur-2xl opacity-30 animate-pulse" />
            <img
              src={hero}
              alt="Insurance professional"
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="relative rounded-[2rem] shadow-elegant w-full object-cover aspect-[4/5] md:aspect-[5/6]"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 top-10 bg-white rounded-2xl p-4 shadow-elegant flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full gradient-gold grid place-items-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Protected</div>
                <div className="font-semibold text-navy text-sm">100% Coverage</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 bottom-16 bg-white rounded-2xl p-4 shadow-elegant"
            >
              <div className="text-xs text-muted-foreground">Save up to</div>
              <div className="font-display text-2xl text-gradient-gold font-semibold">25%</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* quick quote */}
      <div id="quote-form" className="relative max-w-7xl mx-auto px-6 mt-20 scroll-mt-24">
        <QuoteForm />
      </div>
    </section>
  );
}
