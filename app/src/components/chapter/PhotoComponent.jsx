import React from 'react';
import { motion } from 'framer-motion';

const PhotoComponent = ({ photo, color }) => {
  if (!photo) return null;
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.97, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="flex flex-col items-center my-16 group w-full relative"
    >
      <motion.div 
         whileHover={{ scale: 1.02 }}
         transition={{ duration: 0.5, ease: 'easeOut' }}
         className="relative p-3 bg-surface-container-high/40 backdrop-blur-sm rounded-xl border border-outline-variant/20 shadow-2xl overflow-hidden w-full"
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 blur-2xl"
          style={{ backgroundColor: color }}
        />
        <div className="w-full aspect-[4/3] bg-[#000] flex items-center justify-center rounded-lg relative overflow-hidden">
          {photo.url ? (
            <img 
              src={photo.url} 
              alt={photo.title || "Memory"} 
              className="w-full h-full object-cover z-10 relative"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full z-10 p-4 text-center border border-dashed border-outline-variant/30 rounded-lg bg-surface-container-low/10" style={{ borderColor: `${color}40` }}>
              <span className="font-label-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase opacity-70" style={{ color: color }}>
                {photo.caption || "MEMORY PLACEHOLDER"}
              </span>
            </div>
          )}
        </div>
      </motion.div>
      <motion.div 
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: 1, duration: 1 }}
         viewport={{ once: true }}
         className="mt-6 text-center z-10 relative"
      >
        {photo.date && <span className="block font-label-mono text-[12px] opacity-50 mb-2 uppercase tracking-[0.2em]">{photo.date}</span>}
        {photo.title && <h4 className="font-headline-lg-mobile text-[20px] text-primary mb-2">{photo.title}</h4>}
        {photo.caption && <p className="font-body-main text-on-surface-variant text-[16px] max-w-xl mx-auto">{photo.caption}</p>}
      </motion.div>
    </motion.div>
  );
};

export default PhotoComponent;
