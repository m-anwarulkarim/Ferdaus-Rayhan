// src/components/Portfolio/Portfolio.tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../../utils/animations";

const works = [
  {
    title: "ডকু-শর্ট: স্মৃতির শহর",
    tag: "Documentary",
    thumb:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "ইউটিউব এডিট: টেক রিভিউ",
    tag: "YouTube",
    thumb:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "ব্র্যান্ড অ্যাড: কফি হাউস",
    tag: "Commercial",
    thumb:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "স্ক্রিপ্টেড শর্ট: আলো-ছায়া",
    tag: "Narrative",
    thumb:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "ইভেন্ট হাইলাইট: কালার ও কাট",
    tag: "Event",
    thumb:
      "https://images.unsplash.com/photo-1517249361621-f11084eb8b61?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "সাহিত্যিক প্রেজেন্টেশন: ভয়েস ওভার",
    tag: "Writing",
    thumb:
      "https://images.unsplash.com/photo-1517519014922-8d3f3f7c7a56?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
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
            পোর্টফোলিও
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="muted"
            style={{ maxWidth: 760 }}
          >
            নির্বাচিত কাজগুলো—স্টাইল, মুড ও উদ্দেশ্যের ভিন্নতায়। প্রতিটিতে গল্প
            কেন্দ্রিক এডিটিং অ্যাপ্রোচ।
          </motion.p>

          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {works.map((w, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="card"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={w.thumb}
                  alt={w.title}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <div style={{ padding: 14 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <strong>{w.title}</strong>
                    <span className="muted" style={{ fontSize: 13 }}>
                      {w.tag}
                    </span>
                  </div>
                  <a
                    className="button"
                    style={{ marginTop: 12 }}
                    href="#contact"
                    aria-label={`Discuss project: ${w.title}`}
                  >
                    এই ধরণের কাজ করুন
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
