import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const types = ["Auto Insurance", "Home Insurance", "Business Insurance"];

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative gradient-gold rounded-3xl p-8 md:p-10 shadow-elegant overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blush/30 rounded-full blur-3xl" />
      <div className="relative">
        <h3 className="font-display text-3xl md:text-4xl text-white">Get A Quick Quote</h3>
        <p className="text-white/80 mt-2 text-sm">Free, no-obligation. Reply within 24 hours.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="mt-6 grid md:grid-cols-2 gap-4"
        >
          <Field label="Type of Insurance" full>
            <select className="input-style">
              <option>Select a coverage…</option>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
          <Field label="First Name"><input className="input-style" placeholder="John" /></Field>
          <Field label="Last Name"><input className="input-style" placeholder="Doe" /></Field>
          <Field label="Email"><input className="input-style" type="email" placeholder="john@email.com" /></Field>
          <Field label="Phone"><input className="input-style" placeholder="(555) 555-5555" /></Field>
          <Field label="Message" full>
            <textarea className="input-style min-h-[100px]" placeholder="Leave us a message" />
          </Field>
          <label className="md:col-span-2 flex gap-3 text-xs text-white/90 italic">
            <input type="checkbox" className="mt-1" />
            I consent to receive SMS notifications & occasional email communications from Rising Lotus Insurance. You can unsubscribe at any time.
          </label>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="md:col-span-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-navy text-white font-semibold shadow-soft hover:bg-navy/90 transition"
          >
            {sent ? "✓ Quote Sent" : <>Send My Quote <Send className="w-4 h-4" /></>}
          </motion.button>
        </form>
      </div>

      <style>{`
        .input-style {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.95);
          color: var(--navy);
          font-size: 0.9rem;
          border: 1px solid transparent;
          transition: all 0.2s;
        }
        .input-style:focus {
          outline: none;
          border-color: var(--navy);
          box-shadow: 0 0 0 4px rgba(255,255,255,0.3);
        }
      `}</style>
    </motion.div>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="block text-xs font-semibold text-white mb-1.5 tracking-wide">{label}</label>
      {children}
    </div>
  );
}
