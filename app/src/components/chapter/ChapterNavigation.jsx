import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChapterNavigation = ({ current, total, color, previousChapter, nextChapter }) => {
  const currentIndex = parseInt(current, 10) - 1;
  const totalCount = parseInt(total, 10);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 p-6 md:p-10 flex flex-col pointer-events-none">
      <div className="flex justify-between items-start w-full">
        {/* Back to Universe */}
        <div className="pointer-events-auto">
          <Link 
            to="/universe" 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-outline-variant/30 bg-surface-container-low/20 backdrop-blur-md text-on-surface hover:bg-surface-container-low/60 hover:scale-105 hover:shadow-xl transition-all group shadow-lg"
          >
            <span className="text-[14px] group-hover:-translate-x-1 transition-transform">&larr;</span>
            <span className="font-label-caps text-[10px] tracking-widest uppercase">BACK TO THE UNIVERSE</span>
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="flex flex-col items-end pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-label-mono text-[14px] tracking-[0.3em] opacity-80" 
            style={{ color, textShadow: `0 0 10px ${color}80` }}
          >
            {current} / {total}
          </motion.div>
          {/* Timeline for chapters */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-48 mt-4 hidden md:block"
          >
             <div className="relative w-full mb-2">
               <div className="relative h-[2px] bg-outline-variant/30 w-full rounded-full overflow-hidden">
                 <motion.div
                   initial={{ width: 0 }}
                   animate={{ width: `${(currentIndex / Math.max(1, totalCount - 1)) * 100}%` }}
                   transition={{ duration: 2, ease: "easeOut" }}
                   className="absolute top-0 bottom-0 left-0"
                   style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
                 />
               </div>
               <motion.div 
                 className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                 initial={{ left: 0 }}
                 animate={{ left: `${(currentIndex / Math.max(1, totalCount - 1)) * 100}%` }}
                 transition={{ duration: 2, ease: "easeOut" }}
                 style={{ 
                   backgroundColor: color, 
                   color: color,
                   marginLeft: '-4px'
                 }}
               />
             </div>
             <div className="flex justify-between items-center font-label-caps text-[8px] tracking-[0.2em] text-on-surface-variant/60">
                <span>THEN</span>
                <span>NOW</span>
                <span>FUTURE</span>
             </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default ChapterNavigation;
