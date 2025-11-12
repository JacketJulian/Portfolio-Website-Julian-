import React, { useState, useEffect } from 'react';
import './ModalWindow.css';

const ModalWindow = ({ show, handleClose, children, title }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const modalClassName = isMobile ? "modal-main modal-mobile" : "modal-main modal-desktop";

  return (
    <div className={showHideClassName}>
      <section className={modalClassName}>
        <div className="modal-header">
          <button type="button" className="close" onClick={handleClose}>
          </button>
          <h5 className="modal-title">{title}</h5>
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
