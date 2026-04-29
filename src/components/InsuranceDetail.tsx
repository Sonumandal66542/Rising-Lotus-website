import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { Skeleton } from "./ui/skeleton";

export interface InsuranceDetailProps {
  eyebrow: string;
  title: string;
  scriptWord: string;
  intro: string;
  description: string;
  benefits: string[];
  coverages: { title: string; desc: string }[];
  icon: LucideIcon;
  heroImage?: string;
}

export function InsuranceDetail({
  eyebrow,
  title,
  scriptWord,
  intro,
  description,
  benefits,
  coverages,
  icon: Icon,
  heroImage,
}: InsuranceDetailProps) {
  const [heroLoaded, setHeroLoaded] = useState(!heroImage);

  useEffect(() => {
    if (!heroImage) return;
    const img = new Image();
    img.decoding = "async";
    img.fetchPriority = "high" as never;
    img.src = heroImage;
    if (img.complete) {
      setHeroLoaded(true);
      return;
    }
    img.onload = () => setHeroLoaded(true);
    img.onerror = () => setHeroLoaded(true);
  }, [heroImage]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 gradient-hero-bg overflow-hidden">
        {heroImage && (
          <>
            <div
              className={`absolute inset-0 bg-cover bg-center mix-blend-multiply transition-opacity duration-500 ${heroLoaded ? "opacity-25" : "opacity-0"}`}
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            {!heroLoaded && (
              <Skeleton className="absolute inset-0 rounded-none opacity-40" />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          </>
        )}
        <div className="absolute -top-24 -right-24 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full bg-gold/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -left-24 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full bg-blush/20 blur-3xl animate-blob" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gold-soft/60 text-gold text-xs font-semibold tracking-widest uppercase"
          >
            {eyebrow}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
            className="mx-auto mt-5 sm:mt-6 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl gradient-gold grid place-items-center shadow-elegant"
          >
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 sm:mt-6 font-display text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.05] text-balance break-words hyphens-auto"
          >
            {title.split(scriptWord)[0]}
            <em className="font-script text-gold">{scriptWord}</em>
            {title.split(scriptWord)[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 text-pretty"
          >
            {intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 sm:mt-8 px-4 sm:px-0"
          >
            <Link
              to="/"
              hash="quote-form"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full gradient-gold text-white font-semibold shadow-elegant hover:scale-105 transition-transform text-sm sm:text-base"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-navy">
              Why <em className="font-script text-gold">choose us</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Coverages */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gold-soft/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy text-balance">
              What's <em className="font-script text-gold">covered</em>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
              Comprehensive protection designed around your needs.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coverages.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-border/60"
              >
                <h3 className="font-display text-lg sm:text-xl text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy text-balance">
              Key <em className="font-script text-gold">benefits</em>
            </h2>
          </div>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-3 sm:gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 bg-white rounded-xl p-4 sm:p-5 shadow-soft border border-border/60"
              >
                <div className="mt-0.5 w-6 h-6 rounded-full gradient-gold grid place-items-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-navy text-sm sm:text-base">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-3xl gradient-gold p-8 sm:p-12 md:p-16 text-center shadow-elegant overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blush/30 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-4xl md:text-5xl text-white text-balance">
              Ready for a personalized quote?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90 max-w-xl mx-auto px-2">
              Tell us a bit about your needs and we'll get back within 24 hours, free, no obligation.
            </p>
            <Link
              to="/"
              hash="quote-form"
              className="mt-6 sm:mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-navy text-white font-semibold hover:bg-navy/90 transition text-sm sm:text-base"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}