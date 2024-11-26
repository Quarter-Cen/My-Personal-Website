'use client';
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Pagination from "../components/Pagination";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

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
      }, 700);
    };

    container.addEventListener("wheel", handleWheel);
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  const handlePaginationClick = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    setCurrentIndex(index);
    const sections = container.children;

    (sections[index] as HTMLElement)?.scrollIntoView({
      behavior: "smooth",
      block:  "start"
    });
  };

  const fadeInUp = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: "-50vh",
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
            "-25vh", // ขยับครึ่งทาง
              "0vh", // ขยับถึงจุดหมาย
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
        y: "-50vh",
        transition: {
          duration: 0.5,
        },
      },
    }
  

  return (
    <>
      <div className="container">
        <div className="content" ref={containerRef}>
          {['HOME', 'ABOUT', 'SKILLS', 'EDUCATION', 'EXPERIENCE', 'CONTACT'].map((title, index) => (
            <section className="section" key={title}>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
                >
                    {title}
                </motion.div>
            </section>
          ))}
        </div>
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
