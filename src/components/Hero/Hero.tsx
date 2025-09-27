// src/components/Hero/Hero.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = ["./images/f-1.jpg", "./images/f-2.jpg", "./images/f-3.jpg"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="section"
      style={{ position: "relative", padding: 0 }}
    >
      {/* ব্যাকগ্রাউন্ড ইমেজ */}
      <div
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* ডার্ক/লাইট ওভারলে */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
            mixBlendMode: "multiply",
            zIndex: 1,
          }}
        />

        {/* কনটেন্ট */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "var(--text)",
          }}
        >
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            style={{ fontSize: 48, fontWeight: 700 }}
          >
            ভিডিও এডিটিং ও সাহিত্য—একসাথে গল্পের শক্তি
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="muted"
            style={{
              marginTop: 16,
              fontSize: 18,
              maxWidth: 700,
              marginInline: "auto",
            }}
          >
            দৃশ্যের তাল, শব্দের ছন্দ। আপনার কন্টেন্টকে আমি সিনেমাটিক কাট, কালার
            গ্রেডিং, সাউন্ড ডিজাইন দিয়ে জীবন্ত করি।
          </motion.p>
        </div>

        {/* স্লাইডার কন্ট্রোল */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 20,
            transform: "translateY(-50%)",
            zIndex: 3,
          }}
        >
          <button
            onClick={prev}
            style={{
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "50%",
              padding: 10,
              color: "white",
              cursor: "pointer",
            }}
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 20,
            transform: "translateY(-50%)",
            zIndex: 3,
          }}
        >
          <button
            onClick={next}
            style={{
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "50%",
              padding: 10,
              color: "white",
              cursor: "pointer",
            }}
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
