'use client';
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar";

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
      }, 950); // Adjust the timeout based on transition duration
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };

  }, [currentIndex]);

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
      y: "-50vh",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="fixed z-50">
        <Navbar currentIndex={currentIndex}/>
      </div>
      <div className="floating-box"></div>
      <div className="content" ref={containerRef}>
        <section className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="w-full text-zinc-900"
          >
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="col-span-2 row-span-3 flex items-center justify-center w-3/4">
                <div className="flex flex-col ml-16">
                  <div >
                    <p className="text-sm">
                      WEB DEVELOPER <span className="text-[#074940]">AND</span> MUSICIAN 
                    </p>
                    <h1 className="tracking-wide leading-none text-7xl text-shadow-sm">
                      KANOK <span className="block mt-0">{/* No margin-top */} SAENGJAN</span>
                    </h1>
                  </div>
                  <p className="text-sm px-16 mt-2 ">
                    From Thailand, Sisaket. I have experience in web design, also I am good at Aglie Framework. I love to talk with you about our unique.
                  </p>
                  <div className="flex justify-center space-x-4 mt-3 ">
                    <a href="#portfolio" className="btn btn-primary shadow-sm text-white">
                      View My Work
                    </a>
                    <a href="#contact" className="btn btn-outline">
                      Contact Me
                    </a>
                  </div>
              </div>
            </div>
              <div className="row-span-3 justify-self-end">
                <img src="IMG_1480.jpg" alt="" className="min-h-screen w-full object-cover" />
              </div>
            </div>

          </motion.div>
        </section>
        <section className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="bg-blue-500"
          >
            ABOUT
          </motion.div>
        </section>
        <section className="section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="bg-green-500"
          >
            SKILLS
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
