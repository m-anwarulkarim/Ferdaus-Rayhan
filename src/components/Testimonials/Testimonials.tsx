// src/components/Testimonials/Testimonials.tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const reviews = [
  {
    name: "রাফি হাসান",
    role: "YouTuber",
    text: "টাইমিং ও স্টোরিটেলিং অসাধারণ—ভিডিওর ওয়াচ টাইম বেড়েছে।",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "সারাহ রহমান",
    role: "Brand Manager",
    text: "কালার গ্রেডিং ও সাউন্ডের ব্যালান্স—ব্র্যান্ড ফিল একদম ঠিক।",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "তানভীর কবির",
    role: "Writer",
    text: "স্ক্রিপ্ট এডিটিংয়ে গভীরতা—বার্তা পরিষ্কার ও প্রভাববহ।",
    avatar:
      "https://images.unsplash.com/photo-1519340241574-2f2b38b0ddc0?q=80&w=300&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
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
            ক্লায়েন্ট মতামত
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="muted"
            style={{ maxWidth: 760 }}
          >
            বিশ্বাসের গল্প—কাজের ফল ও অভিজ্ঞতা।
          </motion.p>

          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card"
                style={{ padding: 16 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img
                    src={r.avatar}
                    alt={r.name}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <strong>{r.name}</strong>
                    <div className="muted" style={{ fontSize: 13 }}>
                      {r.role}
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: 12 }}>{r.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
