import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { storyConfig } from '../data/story';
import { useStore } from '../store';

const Navigation = () => {
  const location = useLocation();
  const isChapter = location.pathname.startsWith('/chapter/');
  const isLanding = location.pathname === '/';
  const isUniverse = location.pathname === '/universe';
  
  const hoveredPlanet = useStore(state => state.hoveredPlanet);
  const transitioningTo = useStore(state => state.transitioningTo);

  const [visible, setVisible] = useState(!isUniverse);
  
  useEffect(() => {
    if (isUniverse && !visible) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isUniverse, visible]);

  if (isLanding || isChapter) return null;

  let activePlanetId = hoveredPlanet;
  if (isChapter) {
    activePlanetId = location.pathname.split('/').pop();
  }

  const activePlanetIndex = storyConfig.planets.findIndex(p => p.id === activePlanetId);

  return (
    <AnimatePresence>
      {(visible && !transitioningTo) && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between"
        >
          {/* Top Bar */}
          <header className="w-full flex justify-between items-start px-8 py-8 md:px-12 md:py-10">
            {/* Back Button */}
            <div className="w-32">
              <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/30 bg-surface-container-low/20 backdrop-blur-md text-on-surface hover:bg-surface-container-low/50 transition-colors pointer-events-auto group">
                <span className="text-[14px] group-hover:-translate-x-1 transition-transform">&larr;</span>
                <span className="font-label-caps text-[10px] tracking-widest">BACK</span>
              </Link>
            </div>

            {/* Title */}
            <div className="flex-1 text-center hidden md:block mt-4">
              <h1 className="font-headline-lg text-[24px] md:text-[36px] tracking-[0.2em] text-primary/90 uppercase drop-shadow-md">
                {isUniverse ? 'Select a planet to travel through time' : 'Celestial Journey'}
              </h1>
            </div>

            {/* Counter */}
            <div className="w-32 flex justify-end">
              {activePlanetIndex !== -1 && (
                <div className="font-label-mono text-[14px] text-primary/60 tracking-widest">
                  {String(activePlanetIndex + 1).padStart(2, '0')} / 09
                </div>
              )}
            </div>
          </header>

          {/* Bottom Timeline (Universe Only) */}
          {isUniverse && (
            <footer className="w-full max-w-5xl mx-auto px-8 pb-12">
              <div className="relative flex justify-between items-center w-full mb-2">
                {/* Connecting Line */}
                <div className="absolute left-4 right-4 h-[1px] bg-outline-variant/20 top-1/2 -translate-y-1/2 z-[-1]" />
                
                {storyConfig.planets.map((planet) => {
                  const isHovered = hoveredPlanet === planet.id;
                  return (
                    <div key={planet.id} className="flex flex-col items-center">
                      <div 
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${isHovered ? 'bg-primary scale-150 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-outline-variant/40'}`}
                      />
                    </div>
                  );
                })}
              </div>
              
              <div className="flex justify-between items-center font-label-caps text-[12px] tracking-[0.3em] text-on-surface-variant/80 mt-4 drop-shadow-sm">
                <span className="w-20 text-left">THEN</span>
                <span className="w-20 text-center">NOW</span>
                <span className="w-20 text-right">FUTURE</span>
              </div>
            </footer>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
