const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components', 'chapter');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// 1. ChapterHero.jsx
fs.writeFileSync(path.join(componentsDir, 'ChapterHero.jsx'), `
import React from 'react';
import { motion } from 'framer-motion';

const ChapterHero = ({ chapterNumber, planetName, title, color, intro }) => {
  return (
    <header className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Dynamic atmospheric glow based on planet color */}
      <div 
        className="absolute top-0 left-0 right-0 h-[80vh] opacity-20 pointer-events-none"
        style={{
          background: \`radial-gradient(ellipse at top, \${color}50, transparent 70%)\`
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="z-10 flex flex-col items-center mt-[10vh]"
      >
        <span 
          className="font-label-caps tracking-[0.4em] text-[14px] md:text-[18px] uppercase opacity-90 mb-4"
          style={{ color: color }}
        >
          CHAPTER {chapterNumber}
        </span>
        <h1 
          className="font-headline-lg text-[48px] md:text-[80px] text-primary uppercase drop-shadow-2xl mb-4"
          style={{ textShadow: \`0 0 30px \${color}\` }}
        >
          {planetName}
        </h1>
        <h2 className="font-label-mono text-[18px] md:text-[24px] text-on-surface-variant italic uppercase tracking-[0.2em] mb-12">
          {title}
        </h2>
        
        {intro && (
          <p className="font-body-romantic text-[20px] md:text-[24px] text-on-surface max-w-2xl leading-relaxed opacity-90">
            {intro}
          </p>
        )}
      </motion.div>
    </header>
  );
};

export default ChapterHero;
`);

// 2. ChapterNavigation.jsx
fs.writeFileSync(path.join(componentsDir, 'ChapterNavigation.jsx'), `
import React from 'react';
import { Link } from 'react-router-dom';

const ChapterNavigation = ({ current, total, color, previousChapter, nextChapter }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
      {/* Back to Universe */}
      <div className="pointer-events-auto">
        <Link 
          to="/universe" 
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-outline-variant/30 bg-surface-container-low/20 backdrop-blur-md text-on-surface hover:bg-surface-container-low/60 transition-colors group shadow-lg"
        >
          <span className="text-[14px] group-hover:-translate-x-1 transition-transform">&larr;</span>
          <span className="font-label-caps text-[10px] tracking-widest uppercase">Back to the Universe</span>
        </Link>
      </div>

      {/* Progress Indicator */}
      <div className="hidden md:flex pointer-events-auto font-label-mono text-[12px] tracking-[0.3em] opacity-60">
        CHAPTER {current} OF {total}
      </div>

      {/* Optional Top Right element (placeholder) */}
      <div className="w-32 hidden md:block" />
    </nav>
  );
};

export default ChapterNavigation;
`);

// 3. ChapterEnd.jsx
fs.writeFileSync(path.join(componentsDir, 'ChapterEnd.jsx'), `
import React from 'react';
import { Link } from 'react-router-dom';

const ChapterEnd = ({ color, nextChapter, previousChapter, isSun }) => {
  return (
    <div className="w-full py-32 flex flex-col items-center justify-center text-center border-t border-outline-variant/10 relative overflow-hidden">
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-10 pointer-events-none"
        style={{ background: \`radial-gradient(ellipse at bottom, \${color}50, transparent 70%)\` }}
      />

      <span className="font-label-mono text-[14px] text-on-surface-variant tracking-[0.2em] mb-12 opacity-70 italic">
        {isSun ? "The story continues..." : "You've reached the end of this chapter."}
      </span>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center z-10">
        {previousChapter && (
          <Link 
            to={\`/chapter/\${previousChapter}\`}
            className="font-label-caps text-[12px] tracking-[0.3em] text-on-surface/60 hover:text-on-surface transition-colors uppercase py-2"
          >
            &larr; PREVIOUS CHAPTER
          </Link>
        )}

        {nextChapter ? (
          <Link 
            to={\`/chapter/\${nextChapter}\`}
            className="px-8 py-4 rounded-full border border-tertiary-fixed/30 bg-tertiary-fixed/10 hover:bg-tertiary-fixed/20 backdrop-blur-md transition-all font-label-caps tracking-[0.2em] text-[12px] uppercase group shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            style={{ borderColor: \`\${color}50\`, backgroundColor: \`\${color}15\` }}
          >
            CONTINUE THE JOURNEY &rarr;
          </Link>
        ) : (
          <Link 
            to="/universe"
            className="px-8 py-4 rounded-full border border-tertiary-fixed/30 bg-tertiary-fixed/10 hover:bg-tertiary-fixed/20 backdrop-blur-md transition-all font-label-caps tracking-[0.2em] text-[12px] uppercase group shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            style={{ borderColor: \`\${color}50\`, backgroundColor: \`\${color}15\` }}
          >
            RETURN TO OUR UNIVERSE &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default ChapterEnd;
`);

// 4. Shared Section Components
fs.writeFileSync(path.join(componentsDir, 'StorySection.jsx'), `
import React from 'react';
import { motion } from 'framer-motion';

const StorySection = ({ title, content, color }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto my-24 px-6 text-center"
    >
      {title && (
        <h3 
          className="font-label-caps text-[14px] tracking-[0.3em] uppercase mb-8 opacity-80"
          style={{ color: color }}
        >
          {title}
        </h3>
      )}
      <p className="font-body-romantic text-[22px] md:text-[28px] text-on-surface leading-[1.8] italic font-light drop-shadow-md whitespace-pre-wrap">
        {content}
      </p>
    </motion.section>
  );
};

export default StorySection;
`);

fs.writeFileSync(path.join(componentsDir, 'PhotoComponent.jsx'), `
import React from 'react';
import { motion } from 'framer-motion';

const PhotoComponent = ({ photo, color }) => {
  if (!photo) return null;
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center my-16 group w-full"
    >
      <div className="relative p-3 bg-surface-container-high/40 backdrop-blur-sm rounded-xl border border-outline-variant/20 shadow-2xl overflow-hidden w-full">
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-xl"
          style={{ backgroundColor: color }}
        />
        <div className="w-full aspect-[4/3] bg-[#111] flex items-center justify-center rounded-lg relative overflow-hidden">
          {photo.url ? (
            <img 
              src={photo.url} 
              alt={photo.title || "Memory"} 
              className="w-full h-full object-cover z-10 relative"
            />
          ) : (
            <span className="font-label-mono text-outline/50 z-10">[ADD PHOTO HERE]</span>
          )}
        </div>
      </div>
      <div className="mt-6 text-center">
        {photo.date && <span className="block font-label-mono text-[12px] opacity-50 mb-2 uppercase tracking-[0.2em]">{photo.date}</span>}
        {photo.title && <h4 className="font-headline-lg-mobile text-[20px] text-primary mb-2">{photo.title}</h4>}
        {photo.caption && <p className="font-body-main text-on-surface-variant italic text-[16px] max-w-xl mx-auto">{photo.caption}</p>}
      </div>
    </motion.div>
  );
};

export default PhotoComponent;
`);

// 5. Update Chapter.jsx to orchestrate these
fs.writeFileSync(path.join(srcDir, 'pages', 'Chapter.jsx'), `
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { storyConfig } from '../data/story';
import { motion } from 'framer-motion';

import ChapterHero from '../components/chapter/ChapterHero';
import ChapterNavigation from '../components/chapter/ChapterNavigation';
import ChapterEnd from '../components/chapter/ChapterEnd';
import StorySection from '../components/chapter/StorySection';
import PhotoComponent from '../components/chapter/PhotoComponent';

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
    const blocks = [];
    
    // Basic Sections
    if (planet.sections && Array.isArray(planet.sections)) {
      planet.sections.forEach((sec, idx) => {
        blocks.push(<StorySection key={\`sec-\${idx}\`} title={sec.title} content={sec.content} color={planet.color} />);
      });
    }

    // Memories Gallery (e.g. Jupiter)
    if (planet.memories && Array.isArray(planet.memories)) {
      blocks.push(
        <div key="memories" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 my-24">
          {planet.memories.map((mem, idx) => (
            <PhotoComponent key={\`mem-\${idx}\`} photo={mem} color={planet.color} />
          ))}
        </div>
      );
    }

    // Timeline (e.g. Mercury)
    if (planet.timeline && Array.isArray(planet.timeline)) {
      blocks.push(
        <div key="timeline" className="flex flex-col items-center max-w-2xl mx-auto my-24 relative px-4">
          <div className="absolute top-0 bottom-0 w-[1px] bg-outline-variant/30 left-1/2 -translate-x-1/2" />
          {planet.timeline.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              key={\`tl-\${idx}\`} 
              className="relative w-full flex flex-col items-center text-center my-12 bg-[#020204]/80 backdrop-blur-sm p-6 rounded-2xl border border-outline-variant/10 shadow-xl"
            >
              <div className="w-3 h-3 rounded-full absolute -top-[6px] left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ backgroundColor: planet.color }} />
              <span className="font-label-mono text-[12px] opacity-60 mb-2 tracking-[0.2em]">{item.date}</span>
              <h4 className="font-headline-lg-mobile text-primary text-[24px] mb-4">{item.title}</h4>
              <p className="font-body-main text-on-surface-variant italic">{item.description}</p>
            </motion.div>
          ))}
        </div>
      );
    }

    // Distance (e.g. Mars)
    if (planet.distanceData) {
      blocks.push(
        <div key="distance" className="w-full max-w-4xl mx-auto my-32 flex flex-col items-center px-6">
          <div className="flex justify-between w-full items-center font-label-caps text-[12px] md:text-[14px] tracking-widest text-on-surface/80">
            <span className="text-left w-1/3">YOU<br/>{planet.distanceData.locationA}</span>
            <div className="w-1/3 flex flex-col items-center relative">
               <span className="absolute -top-8 text-primary drop-shadow-md text-[16px]">{planet.distanceData.distance}</span>
               <div className="w-full h-[1px] relative overflow-hidden" style={{ background: \`linear-gradient(90deg, transparent, \${planet.color}80, transparent)\` }}>
                 <motion.div 
                   animate={{ x: ["-100%", "100%"] }} 
                   transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                   className="absolute top-0 bottom-0 w-1/2"
                   style={{ background: \`linear-gradient(90deg, transparent, \${planet.color}, transparent)\` }}
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
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: \`radial-gradient(circle, \${planet.color}, transparent 60%)\` }} />
          {planet.floatingTexts.map((txt, i) => (
             <motion.div
               key={i}
               animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
               transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 1.5 }}
               className="absolute font-body-romantic text-[20px] md:text-[32px] text-primary whitespace-nowrap cursor-pointer hover:scale-110 transition-transform flex flex-col items-center group"
               style={{ left: \`\${15 + (i * 25) % 60}%\`, top: \`\${20 + (i % 3) * 25}%\`, textShadow: \`0 0 20px \${planet.color}80\` }}
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
            <p className="font-body-romantic text-[20px] md:text-[24px] text-on-surface whitespace-pre-wrap leading-[2] italic text-left drop-shadow-sm">
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
        previousChapter={planet.previousChapter}
        isSun={isSun}
      />
    </main>
  );
};

export default Chapter;
`);

// 6. Generate the new story.js structure
const newStoryJS = \`export const storyConfig = {
  girlfriendName: "[HER NAME]",
  birthday: "September 2026",
  finalMessage: "Happy Birthday, [HER NAME].",
  
  planets: [
    { 
      id: "neptune", 
      name: "Neptune", 
      chapter: "01", 
      title: "The Beginning", 
      color: "#4b70dd", 
      theme: "deep blue / indigo",
      positionX: -110, 
      size: 6.0,
      texture: "/textures/neptune.jpg",
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: "uranus",
      previousChapter: null,
      sections: [
        { title: "Opening Story", content: "[YOUR STORY WILL GO HERE]" },
        { title: "How Everything Started", content: "[HOW EVERYTHING STARTED HERE]" },
        { title: "First Conversation", content: "[FIRST CONVERSATION HERE]" },
        { title: "First Impression", content: "[FIRST IMPRESSION HERE]" },
        { title: "Closing Thought", content: "[CLOSING THOUGHT HERE]" }
      ],
      memories: [
        { url: "", date: "[DATE WILL GO HERE]", title: "First Important Memory", caption: "[ADD MEMORY HERE]" },
        { url: "", date: "[DATE WILL GO HERE]", title: "First Photograph", caption: "[ADD PHOTO CAPTION HERE]" }
      ]
    },
    { 
      id: "uranus", 
      name: "Uranus", 
      chapter: "02", 
      title: "When We Met", 
      color: "#8ed7d7", 
      theme: "cyan / turquoise",
      positionX: -85,
      size: 6.5,
      texture: "/textures/uranus.jpg",
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: "saturn",
      previousChapter: "neptune",
      sections: [
        { title: "How We Met", content: "[ADD STORY HERE]" },
        { title: "First Meeting", content: "[ADD STORY HERE]" },
        { title: "Closing Transition", content: "[ADD STORY HERE]" }
      ],
      memories: [
        { url: "", date: "[ADD DATE HERE]", title: "Early Memories", caption: "[ADD MEMORY HERE]" },
        { url: "", date: "[ADD DATE HERE]", title: "Funny Moments", caption: "[ADD MEMORY HERE]" }
      ]
    },
    { 
      id: "saturn", 
      name: "Saturn", 
      chapter: "03", 
      title: "When I Fell For You", 
      color: "#e6dbad", 
      theme: "gold / warm beige",
      positionX: -50,
      size: 9.0,
      texture: "/textures/saturn.jpg",
      ringTexture: "/textures/saturn_ring.png",
      hasRings: true,
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: "jupiter",
      previousChapter: "uranus",
      sections: [
        { title: "The moment(s) I started falling", content: "[ADD STORY HERE]" },
        { title: "Things I noticed", content: "[ADD STORY HERE]" },
        { title: "Small moments", content: "[ADD STORY HERE]" },
        { title: "Personal message", content: "[ADD PERSONAL MESSAGE HERE]" }
      ],
      memories: [
        { url: "", date: "[ADD DATE HERE]", title: "Saturn Memory", caption: "[ADD MEMORY HERE]" }
      ]
    },
    { 
      id: "jupiter", 
      name: "Jupiter", 
      chapter: "04", 
      title: "Our Memories", 
      color: "#e3bb76", 
      theme: "cream / orange / brown",
      positionX: -15,
      size: 11.5,
      texture: "/textures/jupiter.jpg",
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: "mars",
      previousChapter: "saturn",
      memories: [
        { url: "", date: "[MEMORY DATE]", title: "[MEMORY TITLE]", caption: "[MEMORY DESCRIPTION]" },
        { url: "", date: "[MEMORY DATE]", title: "[MEMORY TITLE]", caption: "[MEMORY DESCRIPTION]" },
        { url: "", date: "[MEMORY DATE]", title: "[MEMORY TITLE]", caption: "[MEMORY DESCRIPTION]" },
        { url: "", date: "[MEMORY DATE]", title: "[MEMORY TITLE]", caption: "[MEMORY DESCRIPTION]" }
      ]
    },
    { 
      id: "mars", 
      name: "Mars", 
      chapter: "05", 
      title: "The Distance", 
      color: "#ff4d00", 
      theme: "deep red / burnt orange",
      positionX: 15,
      size: 4.5,
      texture: "/textures/mars.jpg",
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: "earth",
      previousChapter: "jupiter",
      distanceData: {
        locationA: "[LOCATION]",
        locationB: "[LOCATION]",
        distance: "[DISTANCE]"
      },
      sections: [
        { title: "Calls and Messages", content: "[ADD STORY HERE]" },
        { title: "Waiting", content: "[ADD STORY HERE]" },
        { title: "Missed Moments", content: "[ADD STORY HERE]" },
        { title: "Things That Kept Us Connected", content: "[ADD STORY HERE]" },
        { title: "Hopeful Moments", content: "[ADD STORY HERE]" }
      ]
    },
    { 
      id: "earth", 
      name: "Earth", 
      chapter: "06", 
      title: "Us, Right Now", 
      color: "#2233ff", 
      theme: "blue / green",
      positionX: 38,
      size: 7.0,
      texture: "/textures/earth.jpg",
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: "venus",
      previousChapter: "mars",
      sections: [
        { title: "Where we are now", content: "[ADD STORY HERE]" },
        { title: "Things we do together", content: "[ADD STORY HERE]" },
        { title: "Favorite conversations", content: "[ADD STORY HERE]" },
        { title: "What makes us 'us'", content: "[ADD STORY HERE]" }
      ],
      memories: [
        { url: "", date: "[ADD DATE HERE]", title: "Recent Memory", caption: "[ADD MEMORY HERE]" }
      ]
    },
    { 
      id: "venus", 
      name: "Venus", 
      chapter: "07", 
      title: "All The Little Things", 
      color: "#ffcc33", 
      theme: "warm gold / peach / soft orange",
      positionX: 60,
      size: 5.5,
      texture: "/textures/venus.jpg",
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: "mercury",
      previousChapter: "earth",
      floatingTexts: [
        { title: "[ADD QUOTE HERE]", description: "[ADD DESCRIPTION HERE]" },
        { title: "[ADD QUOTE HERE]", description: "[ADD DESCRIPTION HERE]" },
        { title: "[ADD QUOTE HERE]", description: "[ADD DESCRIPTION HERE]" },
        { title: "[ADD QUOTE HERE]", description: "[ADD DESCRIPTION HERE]" },
        { title: "[ADD QUOTE HERE]", description: "[ADD DESCRIPTION HERE]" }
      ]
    },
    { 
      id: "mercury", 
      name: "Mercury", 
      chapter: "08", 
      title: "Everything We've Been Through", 
      color: "#999999", 
      theme: "silver / charcoal / warm white",
      positionX: 78,
      size: 4.0,
      texture: "/textures/mercury.jpg",
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: "sun",
      previousChapter: "venus",
      timeline: [
        { date: "[ADD DATE HERE]", title: "The Beginning", description: "[ADD MEMORY HERE]" },
        { date: "[ADD DATE HERE]", title: "When We Met", description: "[ADD MEMORY HERE]" },
        { date: "[ADD DATE HERE]", title: "When I Fell For You", description: "[ADD MEMORY HERE]" },
        { date: "[ADD DATE HERE]", title: "Our Memories", description: "[ADD MEMORY HERE]" },
        { date: "[ADD DATE HERE]", title: "The Distance", description: "[ADD MEMORY HERE]" },
        { date: "[ADD DATE HERE]", title: "Us, Right Now", description: "[ADD MEMORY HERE]" },
        { date: "[ADD DATE HERE]", title: "All The Little Things", description: "[ADD MEMORY HERE]" },
        { date: "[ADD DATE HERE]", title: "Now", description: "[ADD MEMORY HERE]" }
      ]
    },
    { 
      id: "sun", 
      name: "Sun", 
      chapter: "09", 
      title: "What's Next", 
      color: "#ffcc00", 
      theme: "gold / orange / yellow / white",
      positionX: 145,
      size: 35.0,
      texture: "/textures/sun.jpg",
      isSun: true,
      intro: "[CHAPTER INTRODUCTION WILL BE PROVIDED LATER]",
      nextChapter: null,
      previousChapter: "mercury",
      sections: [
        { title: "Things we want to do", content: "[ADD STORY HERE]" },
        { title: "Places we want to visit", content: "[ADD STORY HERE]" },
        { title: "Dreams", content: "[ADD STORY HERE]" },
        { title: "Personal future message", content: "[ADD PERSONAL MESSAGE HERE]" }
      ],
      birthdayReveal: {
        tease: "THERE'S ONE LAST THING...",
        date: "September 2026",
        message: "Happy Birthday, [HER NAME].",
        letterTitle: "TO YOU",
        letterSubtitle: "[OPTIONAL SUBTITLE]",
        video: true,
        letterContent: \`[YOUR PERSONAL LETTER WILL GO HERE]
This is where you write to her from the heart.
It will appear at the very end of the journey.\`
      }
    }
  ]
};
\`;

fs.writeFileSync(path.join(srcDir, 'data', 'story.js'), newStoryJS);

console.log("Chapter architecture completely built.");
