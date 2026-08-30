import React from 'react';
import { motion } from 'framer-motion';

const StorySection = ({ title, content, color }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5 }}
      className="max-w-4xl mx-auto my-64 px-6 text-center"
    >
      {title && (
        <h3 
          className="font-label-caps text-[14px] tracking-[0.3em] uppercase mb-12 opacity-80"
          style={{ color: color }}
        >
          {title}
        </h3>
      )}
      <div className="font-body-main text-[18px] md:text-[22px] text-on-surface/90 leading-[2] tracking-wide font-light drop-shadow-md whitespace-pre-wrap">
        {content}
      </div>
    </motion.section>
  );
};

export default StorySection;
