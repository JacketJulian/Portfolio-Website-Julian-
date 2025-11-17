// Emoji pool for random selection
const EMOJI_POOL = [
  '🎯', '🚀', '💻', '✨', '🔥', '⚡', '🎨', '🎭', 
  '🎪', '🎬', '🎮', '🎲', '🎸', '🎺', '🎻', '🎹',
  '🌟', '🌈', '🌸', '🌺', '🌻', '🌼', '💐', '🌷',
  '🦄', '🦋', '🐝', '🐬', '🦁', '🐯', '🦊', '🐼',
  '☕', '🍕', '🍔', '🍩', '🎂', '🍰', '🧁', '🍪'
];

// Default emoji to return to
const DEFAULT_EMOJI = '🤓';

/**
 * Get a random emoji different from the current one
 */
export const getRandomEmoji = (currentEmoji) => {
  const availableEmojis = EMOJI_POOL.filter(e => e !== currentEmoji);
  return availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
};

/**
 * Creates the emoji click handler with animation logic
 * @param {Function} setEmoji - State setter for current emoji
 * @param {Function} setIsAnimating - State setter for animation state
 * @param {Object} timeoutRef - useRef object to track timeout
 * @returns {Function} Click handler function
 */
export const createEmojiClickHandler = (setEmoji, setIsAnimating, timeoutRef) => {
  return (currentEmoji) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start slide-out animation
    setIsAnimating('slide-out');

    // After slide-out completes, change emoji and slide in
    setTimeout(() => {
      const newEmoji = getRandomEmoji(currentEmoji);
      setEmoji(newEmoji);
      setIsAnimating('slide-in');

      // Complete animation
      setTimeout(() => {
        setIsAnimating(null);

        // Set timeout to return to default emoji
        timeoutRef.current = setTimeout(() => {
          // Start slide-out for return
          setIsAnimating('slide-out');

          setTimeout(() => {
            setEmoji(DEFAULT_EMOJI);
            setIsAnimating('slide-in');

            setTimeout(() => {
              setIsAnimating(null);
            }, 300);
          }, 300);
        }, 3000); // 3 seconds of inactivity
      }, 300);
    }, 300); // Match CSS transition duration
  };
};

export { DEFAULT_EMOJI };
