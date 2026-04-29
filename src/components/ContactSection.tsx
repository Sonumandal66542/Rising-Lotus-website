import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const info = [
  { icon: MapPin, t: "Office Location", v: ["123 Insurance Ave, Suite 100", "New York, NY 10001"] },
  { icon: Phone, t: "Phone Number", v: ["(555) 123-4567"] },
  { icon: Mail, t: "Email Address", v: ["info@risinglotusinsurance.com"] },
  { icon: Clock, t: "Office Hours", v: ["Mon–Fri: 9:00 AM – 5:00 PM", "Sat–Sun: Closed"] },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get in touch"
          title={<>We'd love to <em className="font-script text-gold">hear from you</em></>}
          subtitle="Have questions about your coverage or looking for a custom quote? Our team is ready to help."
        />
        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-display text-2xl text-navy mb-2">Contact Information</h3>
            {info.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-border/60 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl gradient-gold grid place-items-center shrink-0">
                  <it.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.t}</div>
                  {it.v.map((v) => (
                    <div key={v} className="text-navy font-medium text-sm mt-0.5">{v}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-elegant border border-border/60 grid md:grid-cols-2 gap-5"
          >
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl text-navy">Send Us a Message</h3>
              <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours</p>
            </div>
            {[
              { l: "First Name", p: "John" },
              { l: "Last Name", p: "Doe" },
              { l: "Email Address", p: "you@email.com", t: "email" },
              { l: "Phone Number", p: "(555) 555-5555" },
            ].map((f) => (
              <label key={f.l} className="block">
                <span className="text-xs font-semibold text-navy/80 mb-1.5 block">{f.l}</span>
                <input
                  type={f.t || "text"}
                  placeholder={f.p}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-cream/60 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition"
                />
              </label>
            ))}
            <label className="block md:col-span-2">
              <span className="text-xs font-semibold text-navy/80 mb-1.5 block">How Can We Help You?</span>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border bg-cream/60 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition"
                placeholder="Tell us about your insurance needs…"
              />
            </label>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-gold text-white font-semibold shadow-elegant"
            >
              {sent ? "✓ Message Sent" : <>Send Message <Send className="w-4 h-4" /></>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
