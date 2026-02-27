import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createEmojiClickHandler, DEFAULT_EMOJI } from '../../utils/emojiStatusHandler';
import './ProfileImage.css';
import '../EmojiStatus/EmojiStatus.css';

const ProfileImage = ({ 
  src, 
  alt = "Profile", 
  showStatus = false, 
  statusText = "",
  containerStyle = {},
  whileHoverRotation = 10
}) => {
  const [isStatusExpanded, setIsStatusExpanded] = useState(true);
  const [currentEmoji, setCurrentEmoji] = useState(DEFAULT_EMOJI);
  const [isAnimating, setIsAnimating] = useState(null);
  const timeoutRef = useRef(null);
  const handleEmojiClick = createEmojiClickHandler(setCurrentEmoji, setIsAnimating, timeoutRef);

  useEffect(() => {
    const timeoutId = timeoutRef.current;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleStatusClick = (e) => {
    if (!e.target.classList.contains('emoji-status')) {
      setIsStatusExpanded(!isStatusExpanded);
    }
  };

  return (
    <motion.div 
      className="about-image-placeholder" 
      style={containerStyle}
      whileHover={{ rotate: whileHoverRotation }}
      transition={{ type: "tween", duration: 0.0001, ease: "easeInOut" }}
    >
      <img src={src} alt={alt} loading="lazy" />
      {showStatus && statusText && (
        <div 
          className={`status-indicator ${isStatusExpanded ? 'expanded' : ''}`}
          onClick={handleStatusClick}
        >
          <div 
            className={`emoji-status ${isAnimating || ''}`}
            onClick={() => handleEmojiClick(currentEmoji)}
            style={{ fontSize: '1.2em', marginRight: '0.3em' }}
          >
            {currentEmoji}
          </div>
          <span className="status-text">{statusText}</span>
        </div>
      )}
    </motion.div>
  );
};

export default ProfileImage;