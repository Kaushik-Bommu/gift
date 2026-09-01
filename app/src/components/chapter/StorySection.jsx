import React from 'react';
import { motion } from 'framer-motion';

const StorySection = ({ title, content, color }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto my-64 px-6 text-center"
    >
      {title && (
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-label-caps text-[14px] tracking-[0.3em] uppercase mb-12"
          style={{ color: color }}
        >
          {title}
        </motion.h3>
      )}
      <div className="font-body-main text-[18px] md:text-[22px] text-on-surface/90 leading-[2] tracking-wide font-light drop-shadow-md whitespace-pre-wrap">
        {content}
      </div>
    </motion.section>
  );
};

export default StorySection;
