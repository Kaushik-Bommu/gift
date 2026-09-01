import React, { useState, useEffect } from 'react';
import SolarSystemScene from '../components/SolarSystemScene';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';

const Universe = () => {
  const [intro, setIntro] = useState(true);
  const transitioningTo = useStore((state) => state.transitioningTo);

  useEffect(() => {
    // Fade out black screen overlay after 1 second
    const timer = setTimeout(() => setIntro(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {transitioningTo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#000] z-[990] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Intro Black Screen */}
      <AnimatePresence>
        {intro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 bg-[#020204] z-[999]"
          />
        )}
      </AnimatePresence>

      <SolarSystemScene />
    </>
  );
};

export default Universe;
