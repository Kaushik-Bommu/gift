import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, transitionType = "fade" }) => {
  const variants = {
    fade: {
      initial: { opacity: 0, filter: 'blur(20px)' },
      animate: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(20px)' }
    },
    zoom: {
      initial: { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
      animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, scale: 0.9, filter: 'blur(10px)' }
    },
    warm: {
      initial: { opacity: 0, filter: 'sepia(100%) blur(10px)' },
      animate: { opacity: 1, filter: 'sepia(0%) blur(0px)' },
      exit: { opacity: 0, filter: 'sepia(100%) blur(10px)' }
    }
  };

  const selectedVariant = variants[transitionType] || variants.fade;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedVariant}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full min-h-screen relative z-10"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
