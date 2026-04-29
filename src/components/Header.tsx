import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.img
            src={logo}
            alt="Rising Lotus Insurance"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
            transition={{ duration: 0.6 }}
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-script text-lg text-blush">Rising Lotus</div>
            <div className="text-[10px] tracking-[0.25em] text-navy/70 font-medium">
              INSURANCE LLC
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => {
            const active = loc.pathname === n.to;
            return (
              <Link key={n.to} to={n.to} className="relative group text-sm font-medium">
                <span className={active ? "text-gold" : "text-navy/80 group-hover:text-navy"}>
                  {n.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] gradient-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="quote-form"
            className="hidden md:inline-flex"
          >
            <motion.span
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-gold text-white text-sm font-semibold shadow-elegant"
            >
              Get a Quote
            </motion.span>
          </Link>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/60"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="py-2 text-navy/80 font-medium hover:text-gold"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/"
                hash="quote-form"
                className="mt-2 text-center px-6 py-3 rounded-full gradient-gold text-white font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
