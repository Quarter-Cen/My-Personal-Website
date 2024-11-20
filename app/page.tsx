"use client"

import { motion } from "framer-motion";


export default function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // แสดง animation เมื่อ 20% ของ element เข้า viewport
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <h1>Welcome to My Resume</h1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>Here is some text about me.</p>
      </motion.div>
    </div>
  );
}
