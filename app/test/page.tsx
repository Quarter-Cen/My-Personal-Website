// pages/index.tsx
'use client';

import React, { useState, useRef, useEffect } from "react";
import Pagination from "../components/Pagination";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current section index
  const isScrolling = useRef(false); // To lock scrolling while animating

  // Handle scroll event to move between sections
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) return; // Skip if already scrolling
      isScrolling.current = true;

      const direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction
      const sections = container.children;
      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1)); // Limit the index

      setCurrentIndex(nextIndex);

      (sections[nextIndex] as HTMLElement)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Prevent quick consecutive scrolls
      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  // Handle click on pagination dots
  const handlePaginationClick = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    setCurrentIndex(index);

    const sections = container.children;
    (sections[index] as HTMLElement)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container">
      <div className="content" ref={containerRef}>
        {/* Sections */}
        <section className="section">HOME</section>
        <section className="section">ABOUT</section>
        <section className="section">SKILLS</section>
        <section className="section">EDUCATION</section>
        <section className="section">EXPERIENCE</section>
        <section className="section">CONTACT</section>
      </div>

      {/* Pagination */}
      <Pagination 
        sections={['HOME', 'ABOUT', 'SKILLS', 'EDUCATION', 'EXPERIENCE', 'CONTACT']}
        currentIndex={currentIndex}
        onClick={handlePaginationClick}
       />
    </div>
  );
};

export default Home;
