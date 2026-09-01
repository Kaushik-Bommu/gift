import React from 'react';
import { motion, useInView } from 'framer-motion';

export const CinematicText = ({ children, delay = 0, className = '', as = 'span' }) => {
  const Component = motion(as);
  return (
    <Component
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay, duration: 1.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-10%' }}
      className={`block ${className}`}
    >
      {children}
    </Component>
  );
};

export const EmotionalText = ({ children, delay = 0, className = '', color = '#fff' }) => (
  <motion.span 
    initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
    transition={{ delay, duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={{ once: true, margin: '-10%' }}
    className={`block ${className}`}
    style={{ textShadow: `0 0 20px ${color}60` }}
  >
    {children}
  </motion.span>
);

export const MilestoneText = ({ children, delay = 0, className = '', color = '#fff' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });
  
  return (
    <div ref={ref} className="relative inline-block w-full text-center my-8">
       {isInView && (
         <motion.div 
           className="absolute inset-0 pointer-events-none z-[-1]"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: [0, 0.2, 0], scale: [0.8, 1.2, 1.5] }}
           transition={{ duration: 3, ease: 'easeOut' }}
           style={{ background: `radial-gradient(circle, ${color}, transparent 60%)` }}
         />
       )}
       <motion.span 
         initial={{ opacity: 0, y: 10 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
         transition={{ delay, duration: 1.5, ease: 'easeOut' }}
         className={`block ${className}`}
         style={{ textShadow: `0 0 30px ${color}80` }}
       >
         {children}
       </motion.span>
    </div>
  );
};

export const FloatingParticle = ({ color, size, duration = 3, delay = 0, xRange = [-20, 20], yRange = [-20, 20] }) => (
  <motion.div
    animate={{ x: xRange, y: yRange, opacity: [0.2, 0.8, 0.2] }}
    transition={{ repeat: Infinity, duration, delay, ease: 'easeInOut', repeatType: 'reverse' }}
    className="absolute rounded-full pointer-events-none"
    style={{ backgroundColor: color, width: size, height: size, filter: `blur(${size/2}px)` }}
  />
);

export const MemoryReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.97, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
    transition={{ delay, duration: 2, ease: 'easeOut' }}
    viewport={{ once: true, margin: '-10%' }}
  >
    {children}
  </motion.div>
);

export const ChapterTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 1.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);
