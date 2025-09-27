// src/components/About/About.tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeInUp}
            style={{ fontSize: 32, marginBottom: 8 }}
          >
            সম্পর্কে
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="muted"
            style={{ maxWidth: 760 }}
          >
            আমি একজন পেশাদার ভিডিও এডিটর ও সাহিত্যপ্রেমী। ডকুমেন্টারি, ইউটিউব,
            সোশ্যাল মিডিয়া বিজ্ঞাপনে গল্প বলার শক্তিকে প্রযুক্তির নিখুঁততার সাথে
            মেলাই—টাইমিং, মুড, স্ক্রিপ্ট—সবই লক্ষ্যভিত্তিক।
          </motion.p>

          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {[
              {
                title: "সিনেমাটিক কাট",
                desc: "রিদম, স্মুথ ট্রানজিশন, গল্পের ফ্লো বজায় রেখে কাট।",
                img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=900&auto=format&fit=crop",
              },
              {
                title: "কালার গ্রেডিং",
                desc: "স্কিন-টোন সচেতন, মুড-ড্রিভেন কালার; LUT কাস্টমাইজেশন।",
                img: "https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=900&auto=format&fit=crop",
              },
              {
                title: "সাহিত্যিক লেখা",
                desc: "প্রবন্ধ, গল্প, স্ক্রিপ্ট—অর্থপূর্ণ শব্দচয়ন ও স্ট্রাকচার।",
                img: "https://images.unsplash.com/photo-1519682333058-3eafc8a7c8d2?q=80&w=900&auto=format&fit=crop",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ margin: 0 }}>{card.title}</h3>
                  <p className="muted" style={{ marginTop: 6 }}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
