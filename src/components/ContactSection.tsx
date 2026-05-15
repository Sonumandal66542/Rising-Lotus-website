import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
const BASE_URL = import.meta.env.VITE_BASE_URL
console.log(BASE_URL, 'BASE_URL')
const bypassToken = import.meta.env.VITE_BYPASS_TOKEN;
const info = [
  { icon: MapPin, t: "Office Location", v: ["123 Insurance Ave, Suite 100", "New York, NY 10001"] },
  { icon: Phone, t: "Phone Number", v: ["(555) 123-4567"] },
  { icon: Mail, t: "Email Address", v: ["info@risinglotusinsurance.com"] },
  { icon: Clock, t: "Office Hours", v: ["Mon–Fri: 9:00 AM – 5:00 PM", "Sat–Sun: Closed"] },
];

export function ContactSection() {

  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    const key = id.replace('contact-', '');
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
     const response = await fetch(
  `${BASE_URL}/api/v1/contact-user?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=${bypassToken}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  }
);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again.');
      setSuccess(true);
      setFormData({ firstname: '', lastname: '', phonenumber: '', email: '', message: '' });
    } catch (err) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) { const t = setTimeout(() => setSuccess(false), 5000); return () => clearTimeout(t); }
  }, [success]);

  useEffect(() => {
    if (error) { const t = setTimeout(() => setError(''), 5000); return () => clearTimeout(t); }
  }, [error]);

  const infoItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Office Location',
      value: '123 Insurance Ave, Suite 100\nNew York, NY 10001'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16.92z" />
        </svg>
      ),
      label: 'Phone Number',
      value: '(555) 123-4567'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email Address',
      value: 'info@risinglotusinsurance.com'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: 'Office Hours',
      value: 'Mon–Fri: 9:00 AM – 5:00 PM\nSat–Sun: Closed'
    },
  ];


  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          // eyebrow="Get in touch"
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
            onSubmit={async (e) => {
              e.preventDefault();

              setLoading(true);
              setError('');
              setSuccess(false);

              try {
             const response = await fetch(
  `${BASE_URL}/api/v1/contact-user?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=${bypassToken}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  }
);

                const data = await response.json();
                console.log("form data", data);

                if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again.');

                setSuccess(true);
                setSent(true);
                setTimeout(() => setSent(false), 3000);

                setFormData({ firstname: '', lastname: '', phonenumber: '', email: '', message: '' });

              } catch (error: any) {
                setError(error.message);
              } finally {
                setLoading(false);
              }
            }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-elegant border border-border/60 grid md:grid-cols-2 gap-5"
          >
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl text-navy">Send Us a Message</h3>
              <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours</p>
            </div>

            {[
              { l: "First Name", p: "John", k: "firstname", t: "text" },
              { l: "Last Name", p: "Doe", k: "lastname", t: "text" },
              { l: "Email Address", p: "you@email.com", k: "email", t: "email" },
              { l: "Phone Number", p: "(555) 555-5555", k: "phonenumber", t: "Number" },
            ].map((f) => (
              <label key={f.l} className="block">
                <span className="text-xs font-semibold text-navy/80 mb-1.5 block">{f.l}</span>
                <input
                  type={f.t}
                  placeholder={f.p}
                  value={formData[f.k as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [f.k]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-cream/60 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition"
                />
              </label>
            ))}

            <label className="block md:col-span-2">
              <span className="text-xs font-semibold text-navy/80 mb-1.5 block">How Can We Help You?</span>
              <textarea
                rows={5}
                placeholder="Tell us about your insurance needs…"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-cream/60 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition"
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-gold text-white font-semibold shadow-elegant"
            >
              {sent ? "✓ Message Sent" : <>{loading ? "Sending…" : "Send Message"} <Send className="w-4 h-4" /></>}
            </motion.button>

            {error && <p className="md:col-span-2 text-sm text-red-500">{error}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
