import React, { useState, useEffect } from 'react';
import SolarSystemScene from '../components/SolarSystemScene';
import { motion, AnimatePresence } from 'framer-motion';

const Universe = () => {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    // Fade out black screen overlay after 1 second
    const timer = setTimeout(() => setIntro(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
