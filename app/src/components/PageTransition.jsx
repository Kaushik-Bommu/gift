import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, transitionType = "fade" }) => {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    zoom: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
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
      transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="w-screen h-screen relative z-10"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
