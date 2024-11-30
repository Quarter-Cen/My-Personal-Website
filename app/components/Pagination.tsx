'use client'
import React from "react";
import { useEffect, useState } from "react";

type PaginationProps = {
  sections: string[];
  currentIndex: number;
  onClick: (index: number) => void;
};



const Pagination: React.FC<PaginationProps> = ({ sections, currentIndex, onClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  // ตรวจสอบขนาดหน้าจอเมื่อโหลดคอมโพเนนต์
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // ตรวจสอบขนาดหน้าจอทันทีที่โหลด
    window.addEventListener("resize", handleResize);

    // ลบ event listener เมื่อคอมโพเนนต์ถูกทำลาย
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return null; // ถ้าหน้าจอเล็กกว่า md, ซ่อน Pagination
  }

  return (
    <div className="pagination">
      {sections.map((section, index) => (
        <div
          key={section}
          className={`pagination-item ${index === currentIndex ? "active" : ""}`}
          data-name={section}
          onClick={() => onClick(index)}
        >
          <div className="diamond" />
        </div>
      ))}
    </div>
  );
};

export default Pagination;
