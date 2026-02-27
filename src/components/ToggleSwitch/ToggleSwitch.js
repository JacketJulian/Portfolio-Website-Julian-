import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isOn, onToggle }) => {
  return (
    <div className="toggle-switch-wrapper">
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={isOn} 
          onChange={onToggle}
          aria-label="Toggle switch"
        />
        <span className="toggle-slider"></span>
      </label>
    </div>
    </div>
  );
};

export default ToggleSwitch;