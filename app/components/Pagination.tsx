// components/Pagination.tsx
import React from "react";

type PaginationProps = {
  sections: string[];
  currentIndex: number;
  onClick: (index: number) => void;
};

const section = ['HOME', 'ABOUT', 'SKILLS', 'EDUCATION', 'EXPERIENCE', 'CONTACT']

const Pagination: React.FC<PaginationProps> = ({ sections, currentIndex, onClick }) => {
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
