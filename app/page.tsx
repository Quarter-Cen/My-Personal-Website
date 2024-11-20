"use client"
import Navbar from "./components/Navbar"; 
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import SkillTech from "./components/SkillTech";


export default function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#e0e0de]">
      <Navbar></Navbar>
      <div >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // แสดง animation เมื่อ 20% ของ element เข้า viewport
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <Hero></Hero>
        </motion.div>
        <div className="divider"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SkillTech></SkillTech>
        </motion.div>
      </div>
    </div>
  );
}
