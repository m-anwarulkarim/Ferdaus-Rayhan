// src/components/Services/Services.tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import { FiScissors, FiFilm, FiPenTool, FiMusic } from "react-icons/fi";

const items = [
  {
    icon: FiScissors,
    title: "ভিডিও এডিটিং",
    desc: "কাট, ট্রানজিশন, রিদম—স্টোরিটেলিং প্রাধান্য।",
  },
  {
    icon: FiFilm,
    title: "কালার গ্রেডিং",
    desc: "সিনেমাটিক লুক, স্কিন-টোন প্রিজার্ভেশন, LUT ও কাস্টম গ্রেড।",
  },
  {
    icon: FiMusic,
    title: "সাউন্ড ডিজাইন",
    desc: "স্যাউন্ড এফেক্ট, ক্লিন আপ, মিক্সিং ও মাস্টারিং বেসিক।",
  },
  {
    icon: FiPenTool,
    title: "স্ক্রিপ্ট/লেখা",
    desc: "ভিডিও স্ক্রিপ্ট, প্রবন্ধ, সোশ্যাল কপি—অর্থবহ ভাষা।",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
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
            সার্ভিসেস
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="muted"
            style={{ maxWidth: 760 }}
          >
            আপনার প্রয়োজন অনুযায়ী ফোকাসড ডেলিভারি—কনটেন্টের উদ্দেশ্য, দর্শকের
            মনোযোগ ও ব্র্যান্ড ভয়েসকে অগ্রাধিকার।
          </motion.p>

          <div
            className="grid grid-4"
            style={{
              marginTop: 24,
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {items.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card"
                style={{ padding: 18 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <s.icon size={22} />
                  <strong>{s.title}</strong>
                </div>
                <p className="muted" style={{ marginTop: 10 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
