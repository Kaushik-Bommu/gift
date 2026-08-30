import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Landing = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBegin = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/universe');
    }, 1200);
  };

  return (
    <>
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-orbit-margin">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col gap-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              className="font-display-hero text-display-hero text-primary"
            >
              FROM THEN
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, delay: 1.5, ease: 'easeOut' }}
              className="font-display-hero text-display-hero text-primary"
            >
              TO NOW
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, delay: 2.5, ease: 'easeOut' }}
              className="font-display-hero text-display-hero text-secondary"
            >
              FOREVER
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 3.5, ease: 'easeOut' }}
            className="font-body-romantic text-body-romantic text-on-surface-variant max-w-lg mx-auto"
          >
            A journey through our little universe.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 4.5, ease: 'easeOut' }}
            className="mt-8"
          >
            <button 
              onClick={handleBegin} 
              className="glow-button font-label-caps text-label-caps text-primary border border-primary/50 px-8 py-4 rounded-full bg-transparent hover:bg-primary/5 hover:border-primary transition-all duration-500 tracking-[0.3em] backdrop-blur-sm cursor-pointer"
            >
              BEGIN THE JOURNEY
            </button>
          </motion.div>
        </div>
      </main>

      {/* Transition Flash */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-white z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Landing;
