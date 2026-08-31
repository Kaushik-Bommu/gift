import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { storyConfig } from '../data/story';
import { motion } from 'framer-motion';

import ChapterHero from '../components/chapter/ChapterHero';
import ChapterNavigation from '../components/chapter/ChapterNavigation';
import ChapterEnd from '../components/chapter/ChapterEnd';
import StorySection from '../components/chapter/StorySection';
import PhotoComponent from '../components/chapter/PhotoComponent';
import ChapterBackgroundPlanet from '../components/chapter/ChapterBackgroundPlanet';

const Chapter = () => {
  const { id } = useParams();
  const planet = storyConfig.planets.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!planet) {
    return <Navigate to="/universe" replace />;
  }

  const isSun = planet.isSun;

  // Render specific content blocks based on the planet's data structure
  const renderContentBlocks = () => {
// ... omitting function body for brevity, wait I need to keep the exact body ...
    const blocks = [];
    
    // Basic Sections
    if (planet.sections && Array.isArray(planet.sections)) {
      planet.sections.forEach((sec, idx) => {
        blocks.push(<StorySection key={`sec-${idx}`} title={sec.title} content={sec.content} color={planet.color} />);
      });
    }

    // Memories Gallery (e.g. Jupiter, Neptune)
    if (planet.memories && Array.isArray(planet.memories)) {
      blocks.push(
        <div key="memories" className="w-full max-w-6xl mx-auto px-6 my-48 flex flex-col items-center">
          <h3 
            className="font-label-caps text-[14px] md:text-[16px] tracking-[0.4em] uppercase mb-16 opacity-80"
            style={{ color: planet.color }}
          >
            MEMORIES FROM THE BEGINNING
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {planet.memories.map((mem, idx) => (
              <PhotoComponent key={`mem-${idx}`} photo={mem} color={planet.color} />
            ))}
          </div>
        </div>
      );
    }

    // Timeline (e.g. Mercury, Saturn)
    if (planet.timeline && Array.isArray(planet.timeline)) {
      if (planet.id === "saturn") {
        blocks.push(
          <div key="timeline" className="flex flex-col items-center max-w-4xl mx-auto my-32 relative px-4">
            <h3 className="font-headline-lg text-[24px] md:text-[32px] text-primary mb-24 tracking-widest text-center">THE ORBIT OF OUR STORY</h3>
            <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
              {/* Orbital Rings */}
              <div className="absolute inset-4 rounded-full border border-[#d4af37]/20 shadow-[0_0_50px_rgba(212,175,55,0.05)]" />
              <div className="absolute inset-12 rounded-full border border-[#d4af37]/10" />
              <div className="absolute inset-20 rounded-full border border-[#d4af37]/5" />
              <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 mix-blend-overlay rounded-full" />
              
              {/* Center planet glow */}
              <div className="absolute w-24 h-24 rounded-full bg-[#d4af37]/20 blur-2xl" />
              
              {/* Orbiting points */}
              {planet.timeline.map((item, idx) => {
                const total = planet.timeline.length;
                // Spiral/circular math
                const angle = (idx / total) * Math.PI * 4; // 2 full rotations
                const radius = 40 + (idx / total) * 45; // Expand from 40% to 85% of container
                const x = 50 + Math.cos(angle) * radius;
                const y = 50 + Math.sin(angle) * radius;
                
                return (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 1, type: "spring" }}
                    viewport={{ once: true, margin: "-50px" }}
                    key={`tl-${idx}`}
                    className="absolute flex flex-col items-center group cursor-pointer"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)] relative z-10 group-hover:scale-150 transition-transform">
                       <div className="absolute inset-[-4px] rounded-full border border-[#d4af37] opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                    </div>
                    
                    <div className="absolute top-6 w-[150px] opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md p-3 rounded-xl border border-[#d4af37]/30 pointer-events-none z-20 text-center shadow-2xl">
                      {item.date && <span className="font-label-mono text-[10px] text-[#d4af37] opacity-80 block mb-1">{item.date}</span>}
                      <h4 className="font-headline-lg-mobile text-primary text-[14px] leading-tight">{item.title}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Fallback vertical list for mobile since spiral is hard to hover */}
            <div className="md:hidden mt-16 w-full space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-[15px] w-[2px] bg-gradient-to-b from-[#d4af37]/50 to-transparent" />
              {planet.timeline.map((item, idx) => (
                <div key={`tl-mob-${idx}`} className="relative pl-12">
                  <div className="absolute left-[11px] top-1 w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                  {item.date && <span className="font-label-mono text-[10px] text-[#d4af37] opacity-80 block mb-1">{item.date}</span>}
                  <h4 className="font-headline-lg-mobile text-primary text-[16px] leading-tight">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        );
      } else {
        blocks.push(
          <div key="timeline" className="flex flex-col items-center max-w-2xl mx-auto my-24 relative px-4">
            <div className="absolute top-0 bottom-0 w-[1px] bg-outline-variant/30 left-1/2 -translate-x-1/2" />
            {planet.timeline.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                key={`tl-${idx}`} 
                className="relative w-full flex flex-col items-center text-center my-12 bg-[#020204]/80 backdrop-blur-sm p-6 rounded-2xl border border-outline-variant/10 shadow-xl"
              >
                <div className="w-3 h-3 rounded-full absolute -top-[6px] left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ backgroundColor: planet.color }} />
                <span className="font-label-mono text-[12px] opacity-60 mb-2 tracking-[0.2em]">{item.date}</span>
                <h4 className="font-headline-lg-mobile text-primary text-[24px] mb-4">{item.title}</h4>
                <p className="font-body-main text-on-surface-variant">{item.description}</p>
              </motion.div>
            ))}
          </div>
        );
      }
    }

    // Distance (e.g. Mars)
    if (planet.distanceData) {
      blocks.push(
        <div key="distance" className="w-full max-w-4xl mx-auto my-32 flex flex-col items-center px-6">
          <div className="flex justify-between w-full items-center font-label-caps text-[12px] md:text-[14px] tracking-widest text-on-surface/80">
            <span className="text-left w-1/3">YOU<br/>{planet.distanceData.locationA}</span>
            <div className="w-1/3 flex flex-col items-center relative">
               <span className="absolute -top-8 text-primary drop-shadow-md text-[16px]">{planet.distanceData.distance}</span>
               <div className="w-full h-[1px] relative overflow-hidden" style={{ background: `linear-gradient(90deg, transparent, ${planet.color}80, transparent)` }}>
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }} 
                   transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                   className="absolute top-0 bottom-0 w-1/2"
                   style={{ background: `linear-gradient(90deg, transparent, ${planet.color}, transparent)` }}
                 />
               </div>
            </div>
            <span className="text-right w-1/3">ME<br/>{planet.distanceData.locationB}</span>
          </div>
        </div>
      );
    }

    // Floating Texts (e.g. Venus)
    if (planet.floatingTexts && Array.isArray(planet.floatingTexts)) {
      blocks.push(
        <div key="floating" className="h-[60vh] relative max-w-5xl mx-auto flex items-center justify-center my-24 overflow-hidden border border-outline-variant/10 rounded-[3rem] bg-surface-container-lowest/30">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${planet.color}, transparent 60%)` }} />
          {planet.floatingTexts.map((txt, i) => (
             <motion.div
               key={i}
               animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
               transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 1.5 }}
               className="absolute font-body-romantic text-[20px] md:text-[32px] text-primary whitespace-nowrap cursor-pointer hover:scale-110 transition-transform flex flex-col items-center group"
               style={{ left: `${15 + (i * 25) % 60}%`, top: `${20 + (i % 3) * 25}%`, textShadow: `0 0 20px ${planet.color}80` }}
             >
               <span>"{txt.title}"</span>
               <span className="opacity-0 group-hover:opacity-100 transition-opacity font-label-mono text-[12px] text-on-surface mt-2 tracking-widest uppercase">{txt.description}</span>
             </motion.div>
          ))}
        </div>
      );
    }

    // Birthday Reveal (Sun)
    if (isSun && planet.birthdayReveal) {
      blocks.push(
        <div key="birthday" className="mt-48 mb-24 flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="mb-32 flex flex-col items-center"
          >
            <h2 className="font-label-caps text-outline mb-12 tracking-[0.4em] text-[14px] md:text-[18px]">{planet.birthdayReveal.tease}</h2>
            <h1 className="font-display-hero text-tertiary-fixed glow-sm mb-6 drop-shadow-2xl text-[48px] md:text-[72px]">{planet.birthdayReveal.date}</h1>
            <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-12">{planet.birthdayReveal.message}</h2>
            {planet.birthdayReveal.video && (
               <div className="w-full max-w-2xl bg-white/5 aspect-video rounded-2xl flex items-center justify-center border border-white/10 mt-8">
                  <span className="font-label-mono text-outline">[OPTIONAL VIDEO PLACEHOLDER]</span>
               </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#020204]/60 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-tertiary-fixed/30 relative max-w-4xl mx-auto w-full"
          >
            <div className="absolute inset-0 bg-tertiary-fixed/10 blur-3xl -z-10 rounded-full" />
            <h3 className="font-headline-lg text-[24px] text-primary mb-2 border-b border-outline-variant/30 pb-6 tracking-widest">{planet.birthdayReveal.letterTitle}</h3>
            {planet.birthdayReveal.letterSubtitle && <h4 className="font-label-mono text-on-surface-variant text-[14px] mb-12 tracking-widest uppercase">{planet.birthdayReveal.letterSubtitle}</h4>}
            <p className="font-body-main text-[18px] md:text-[22px] text-on-surface whitespace-pre-wrap leading-[2] font-light text-left drop-shadow-sm tracking-wide">
              {planet.birthdayReveal.letterContent}
            </p>
          </motion.div>
        </div>
      );
    }

    return blocks;
  };

  return (
    <main className="relative z-20 min-h-screen bg-[#020204] overflow-x-hidden selection:bg-tertiary-fixed/30 selection:text-primary">
      {/* Dynamic atmospheric background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-[1]"
        style={{ backgroundImage: 'url("/textures/noise.png")' }}
      />
      
      {/* Background Rotating Planet */}
      <ChapterBackgroundPlanet planet={planet} />

      
      <ChapterNavigation 
        current={planet.chapter} 
        total="09" 
        color={planet.color} 
        previousChapter={planet.previousChapter}
        nextChapter={planet.nextChapter}
      />

      <ChapterHero 
        chapterNumber={planet.chapter}
        planetName={planet.name}
        title={planet.title}
        color={planet.color}
        intro={planet.intro}
      />

      <div className="relative z-10 w-full px-4 md:px-0">
        {renderContentBlocks()}
      </div>

      <ChapterEnd 
        color={planet.color}
        nextChapter={planet.nextChapter}
        nextChapterLabel={planet.nextChapterLabel}
        nextChapterSubtitle={planet.nextChapterSubtitle}
        previousChapter={planet.previousChapter}
        isSun={isSun}
      />
    </main>
  );
};

export default Chapter;
