'use client';
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const [isMdScreen, setIsMdScreen] = useState(false); // ตรวจสอบขนาดหน้าจอ

  useEffect(() => {
    window.scrollTo(0, 0); // เลื่อนไปบนสุดเมื่อ URL เปลี่ยน
  }, []);

  // ฟังก์ชันตรวจสอบขนาดหน้าจอ
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // ขนาดหน้าจอ md ขึ้นไป
        setIsMdScreen(true);
      } else {
        setIsMdScreen(false);
      }
    };

    handleResize(); // ตรวจสอบขนาดหน้าจอเริ่มต้น
    window.addEventListener("resize", handleResize); // ฟังการเปลี่ยนแปลงขนาดหน้าจอ

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMdScreen) return; // ถ้าหน้าจอ md ขึ้นไปไม่ให้ใช้การเลื่อนแบบ step

    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      const target = event.target as HTMLElement;
      const isInsideNavbar = target.closest(".navbar");

      // Allow scroll inside Navbar
      if (isInsideNavbar) {
        event.preventDefault();
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const sections = container.children;
      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

      setCurrentIndex(nextIndex);

      (sections[nextIndex] as HTMLElement)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000); // Adjust the timeout based on transition duration
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, isMdScreen]);

  const handlePaginationClick = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    setCurrentIndex(index);
    const sections = container.children;

    (sections[index] as HTMLElement)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        y: {
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8,
          delay: 0.2,
          keyframes: [
            "-25vh", // Halfway move
            "0vh",   // Final position
          ],
        },
        opacity: {
          duration: 0.5,
          delay: 0.3,
        },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="fixed z-50">
        <Navbar currentIndex={currentIndex} />
      </div>
      <div className="floating-box"></div>
      <div className="content " ref={containerRef}>
        <section className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2  }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="w-full text-zinc-900"
          >
            <HomeSection/>
          </motion.div>
        </section>
        <section className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3  }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="text-zinc-900"
          >
            <AboutSection/>
          </motion.div>
        </section>
        <section className="section ">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="text-zinc-900 my-background flex w-screen h-screen items-center justify-center"
          >
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="text-zinc-900 w-[80vw] h-[70vh]"
          >
              <SkillSection />
            </motion.div>
          </motion.div>
          
        </section>
        <section className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="bg-yellow-500"
          >
            EDUCATION
          </motion.div>
        </section>
        <section className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="bg-purple-500"
          >
            EXPERIENCE
          </motion.div>
        </section>
        <section className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="bg-orange-500"
          >
            CONTACT
          </motion.div>
        </section>
      </div>
      <Pagination
        sections={['HOME', 'ABOUT', 'SKILLS', 'EDUCATION', 'EXPERIENCE', 'CONTACT']}
        currentIndex={currentIndex}
        onClick={handlePaginationClick}
      />
    </>
  );
};

export default Home;
