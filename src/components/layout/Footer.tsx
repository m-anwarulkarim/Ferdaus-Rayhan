// src/components/Footer/Footer.tsx
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export default function Footer() {
  return (
    <footer
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="muted">
            © {new Date().getFullYear()} বন্ধুর নাম. সকল অধিকার সংরক্ষিত।
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
