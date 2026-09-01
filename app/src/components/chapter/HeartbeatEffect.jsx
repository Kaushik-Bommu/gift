import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HeartbeatEffect = ({ intensity = 'low', text, subText, showPulse = true, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  const getAnimationProps = () => {
    switch(intensity) {
      case 'climax':
        return { scale: [1, 1.15, 1], transition: { repeat: Infinity, duration: 0.3, times: [0, 0.5, 1] } };
      case 'high':
        return { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 0.5, times: [0, 0.4, 1] } };
      case 'medium':
        return { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 0.8, times: [0, 0.3, 1] } };
      case 'low':
      default:
        return { scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 1.2, times: [0, 0.2, 1] } };
    }
  };

  const anim = getAnimationProps();

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center my-12 py-12 w-full">
      {showPulse && isInView && (
        <motion.div 
          className="absolute inset-0 pointer-events-none z-[-1]"
          animate={{ opacity: [0, intensity === 'climax' ? 0.4 : intensity === 'high' ? 0.3 : 0.2, 0] }}
          transition={anim.transition}
          style={{ background: `radial-gradient(circle at center, rgba(227,187,118,0.5), transparent 70%)` }}
        />
      )}
      
      <motion.div 
        animate={isInView ? { scale: anim.scale } : { scale: 1 }} 
        transition={anim.transition}
        className="text-center w-full relative z-10"
      >
        {text && <h2 className={`font-display-hero text-primary drop-shadow-[0_0_15px_rgba(227,187,118,0.5)] ${intensity === 'climax' ? 'text-[80px] md:text-[120px]' : intensity === 'high' ? 'text-[64px] md:text-[96px]' : 'text-[48px] md:text-[80px]'}`}>
          {text}
        </h2>}
        {subText && (
          <p className="font-headline-lg-mobile text-[24px] md:text-[32px] text-[#e3bb76] mt-8">
            {subText}
          </p>
        )}
        {children}
      </motion.div>
    </div>
  );
};

export default HeartbeatEffect;
