import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.26L4.8 22H2l7-8L2 2h6.91l4.31 5.71L18.244 2zm-1.2 18h1.62L7.04 4H5.3l11.74 16z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative mt-32 bg-navy text-white overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blush/10 blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-blob" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 grid md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <img src={logo} alt="Rising Lotus" width={56} height={56} loading="lazy" decoding="async" className="h-14 w-14 bg-white/95 rounded-full p-1" />
            <div>
              <div className="font-script text-xl text-blush-soft">Rising Lotus</div>
              <div className="text-[10px] tracking-[0.25em] text-white/70">INSURANCE LLC</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/70 leading-relaxed">
            Tailored protection for what matters most, your family, home, business and future.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/risinglotusinsurance", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/risinglotusinsurance", label: "Facebook" },
              { Icon: Twitter, href: "https://twitter.com/risinglotusins", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Rising Lotus Insurance on ${label}`}
                whileHover={{ y: -3, color: "var(--gold)" }}
                className="w-10 h-10 rounded-full bg-white/10 grid place-items-center text-white/80 hover:bg-white/20"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-gold uppercase">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-gold uppercase">Coverage</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li><Link to="/insurance/auto" className="hover:text-gold">Auto Insurance</Link></li>
            <li><Link to="/insurance/home" className="hover:text-gold">Home Insurance</Link></li>
            <li><Link to="/insurance/business" className="hover:text-gold">Business Insurance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-gold uppercase">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold mt-0.5" /> 123 Insurance Ave, Suite 100, NY 10001</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 text-gold" /> (555) 123-4567</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-gold" /> info@risinglotusinsurance.com</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Rising Lotus Insurance LLC. All rights reserved.
      </div>
    </footer>
  );
}
