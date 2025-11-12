import React, { useState, useEffect, useRef } from 'react';
import './ModalWindow.css';

const ModalWindow = ({ show, handleClose, children, title }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const titleRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if text overflows
    if (titleRef.current && !isMobile) {
      const element = titleRef.current;
      setHasOverflow(element.scrollWidth > element.clientWidth);
    }
  }, [title, isMobile, show]);

  // Reset expanded state when modal closes
  useEffect(() => {
    if (!show) {
      setIsExpanded(false);
    }
  }, [show]);

  const handleTitleClick = () => {
    if (hasOverflow && !isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const modalClassName = isMobile ? "modal-main modal-mobile" : "modal-main modal-desktop";
  const titleClassName = `modal-title${isExpanded ? ' expanded' : ''}${hasOverflow ? ' has-overflow' : ''}`;

  return (
    <div className={showHideClassName}>
      <section className={modalClassName}>
        <div className="modal-header">
          <button type="button" className="close" onClick={handleClose}>
          </button>
          <h5 
            ref={titleRef}
            className={titleClassName}
            onClick={handleTitleClick}
            style={{ cursor: hasOverflow && !isMobile ? 'pointer' : 'default' }}
          >
            {title}
          </h5>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalWindow;
