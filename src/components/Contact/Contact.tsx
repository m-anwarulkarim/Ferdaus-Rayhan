// src/components/Contact/Contact.tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@example.com?subject=${encodeURIComponent(
      "নতুন প্রজেক্ট আলোচনা"
    )}&body=${encodeURIComponent(
      `নাম: ${form.name}\nইমেইল: ${form.email}\nবার্তা:\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            style={{ fontSize: 32, marginBottom: 8 }}
          >
            যোগাযোগ
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="muted"
            style={{ maxWidth: 760 }}
          >
            আপনার আইডিয়াকে কাজের পরিকল্পনায় আনতে একবার কথা বলা যাক।
          </motion.p>

          <motion.form
            variants={fadeInUp}
            onSubmit={onSubmit}
            className="card"
            style={{ marginTop: 24, padding: 18, display: "grid", gap: 12 }}
          >
            <label>
              <div>নাম</div>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "10px 12px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  borderRadius: 8,
                }}
              />
            </label>
            <label>
              <div>ইমেইল</div>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "10px 12px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  borderRadius: 8,
                }}
              />
            </label>
            <label>
              <div>বার্তা</div>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "10px 12px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  borderRadius: 8,
                  resize: "vertical",
                }}
              />
            </label>
            <button type="submit" className="button">
              ইমেইল পাঠান
            </button>
            <div className="muted" style={{ fontSize: 13 }}>
              টিপ: hello@example.com
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
