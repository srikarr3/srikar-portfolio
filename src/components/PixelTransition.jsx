import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PixelTransition = ({
  firstContent,
  secondContent,
  gridSize = 10,
  pixelColor = '#fff',
  animationStepDuration = 0.3,
  className = '',
}) => {
  const [revealed, setRevealed] = useState(false);
  const grid = Array.from({ length: gridSize * gridSize });

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ aspectRatio: '1/1', minHeight: 200 }}
      onClick={() => setRevealed((r) => !r)}
    >
      <div className="absolute inset-0 w-full h-full z-10">
        <motion.div
          initial={false}
          animate={{ opacity: revealed ? 0 : 1 }}
          transition={{ duration: animationStepDuration }}
          className="w-full h-full"
        >
          {firstContent}
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: animationStepDuration }}
          className="w-full h-full absolute top-0 left-0"
        >
          {secondContent}
        </motion.div>
        {/* Pixel grid overlay for transition effect */}
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
            pointerEvents: 'none',
          }}
        >
          {grid.map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-full"
              style={{ background: pixelColor, opacity: revealed ? 0 : 0.1 }}
              transition={{ delay: (i % gridSize + Math.floor(i / gridSize)) * (animationStepDuration / gridSize) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PixelTransition; 