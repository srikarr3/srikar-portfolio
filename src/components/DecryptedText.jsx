import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const defaultCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomChar(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

const DecryptedText = ({
  text = '',
  speed = 50,
  maxIterations = 10,
  characters = defaultCharacters,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'view', // 'hover' or 'view'
  revealDirection = 'left', // 'left', 'right', 'center'
}) => {
  const [displayed, setDisplayed] = useState(Array.from(text));
  const [revealed, setRevealed] = useState(false);
  const [iteration, setIteration] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (animateOn === 'view' && inView && !revealed) {
      startDecrypt();
    }
    // eslint-disable-next-line
  }, [inView]);

  const startDecrypt = () => {
    setRevealed(false);
    setIteration(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIteration((prev) => {
        if (prev >= maxIterations) {
          clearInterval(intervalRef.current);
          setRevealed(true);
          return prev;
        }
        return prev + 1;
      });
    }, speed);
  };

  useEffect(() => {
    if (iteration === 0 && !revealed) {
      setDisplayed(Array.from(text).map(() => randomChar(characters)));
    } else if (iteration < maxIterations && !revealed) {
      setDisplayed((prev) =>
        prev.map((char, i) => {
          if (revealDirection === 'left') {
            return i <= (iteration * text.length) / maxIterations ? text[i] : randomChar(characters);
          } else if (revealDirection === 'right') {
            return i >= text.length - (iteration * text.length) / maxIterations ? text[i] : randomChar(characters);
          } else if (revealDirection === 'center') {
            const center = Math.floor(text.length / 2);
            const spread = Math.floor((iteration * text.length) / (2 * maxIterations));
            if (i >= center - spread && i <= center + spread) return text[i];
            return randomChar(characters);
          }
          return randomChar(characters);
        })
      );
    } else if (iteration >= maxIterations) {
      setDisplayed(Array.from(text));
    }
    // eslint-disable-next-line
  }, [iteration, revealed]);

  useEffect(() => {
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') startDecrypt();
  };

  return (
    <span
      ref={containerRef}
      className={parentClassName}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: animateOn === 'hover' ? 'pointer' : 'default' }}
    >
      {displayed.map((char, i) => (
        <span
          key={i}
          className={revealed ? className : encryptedClassName}
          style={{ transition: 'color 0.2s' }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default DecryptedText; 