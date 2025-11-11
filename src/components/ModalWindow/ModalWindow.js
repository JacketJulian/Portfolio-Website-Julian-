import React from 'react';
import './ModalWindow.css';

const ModalWindow = ({ show, handleClose, children, title }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
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
