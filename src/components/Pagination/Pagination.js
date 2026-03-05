import React from 'react';
import './Pagination.css';

const Pagination = ({
  count = 0,
  activeIndex = 0,
  onSelect,
  className = '',
  ariaLabel = 'Pagination',
}) => {
  if (!count || count < 1) return null;

  return (
    <div className={`pagination ${className}`} role="tablist" aria-label={ariaLabel}>
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            type="button"
            className={`pagination-dot${isActive ? ' active' : ''}`}
            aria-label={`Go to item ${index + 1}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={() => onSelect && onSelect(index)}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
