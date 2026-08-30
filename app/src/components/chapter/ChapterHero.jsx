import React from 'react';
import { motion } from 'framer-motion';

const ChapterHero = ({ chapterNumber, planetName, title, color, intro }) => {
  return (
    <header className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Dynamic atmospheric glow based on planet color */}
      <div 
        className="absolute top-0 left-0 right-0 h-full opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top, ${color}30, transparent 60%)`
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="z-10 flex flex-col items-center max-w-4xl"
      >
        <span className="font-label-mono text-[10px] md:text-[12px] tracking-[0.4em] uppercase text-on-surface-variant opacity-60 mb-12">
          CELESTIAL JOURNEY
        </span>

        <span 
          className="font-label-caps tracking-[0.4em] text-[14px] md:text-[18px] uppercase opacity-90 mb-6"
          style={{ color: color }}
        >
          CHAPTER {chapterNumber}
        </span>
        
        <h1 
          className="font-headline-lg text-[64px] md:text-[100px] text-primary uppercase drop-shadow-2xl mb-6 leading-none"
          style={{ textShadow: `0 0 40px ${color}` }}
        >
          {planetName}
        </h1>
        
        <h2 className="font-label-mono text-[16px] md:text-[20px] text-on-surface uppercase tracking-[0.3em] mb-24 opacity-80 drop-shadow-md">
          {title}
        </h2>
        
        {intro && (
          <div className="font-body-main text-[18px] md:text-[22px] text-on-surface/90 leading-[2] tracking-wide font-light drop-shadow-md whitespace-pre-wrap mt-8">
            {intro}
          </div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="mt-16 flex flex-col items-center opacity-50 z-10"
      >
        <span className="font-label-mono text-[10px] tracking-[0.3em] mb-4">SCROLL</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12"
          style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${color}, transparent)` }}
        />
      </motion.div>
    </header>
  );
};

export default ChapterHero;
