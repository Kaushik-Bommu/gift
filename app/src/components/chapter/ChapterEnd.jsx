import React from 'react';
import { Link } from 'react-router-dom';

const ChapterEnd = ({ color, nextChapter, nextChapterLabel, previousChapter, isSun }) => {
  return (
    <div className="w-full py-32 flex flex-col items-center justify-center text-center border-t border-outline-variant/10 relative overflow-hidden mt-32">
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at bottom, ${color}50, transparent 70%)` }}
      />

      <span className="font-label-mono text-[14px] text-on-surface-variant tracking-[0.2em] mb-12 opacity-70">
        {isSun ? "The story continues..." : "You've reached the end of this chapter."}
      </span>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center z-10">
        {previousChapter && (
          <Link 
            to={`/chapter/${previousChapter}`}
            className="font-label-caps text-[12px] tracking-[0.3em] text-on-surface/60 hover:text-on-surface transition-colors uppercase py-2"
          >
            &larr; PREVIOUS CHAPTER
          </Link>
        )}

        {nextChapter ? (
          <Link 
            to={`/chapter/${nextChapter}`}
            className="px-8 py-4 rounded-full border border-tertiary-fixed/30 bg-tertiary-fixed/10 hover:bg-tertiary-fixed/20 backdrop-blur-md transition-all font-label-caps tracking-[0.2em] text-[12px] md:text-[14px] uppercase group shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            style={{ borderColor: `${color}50`, backgroundColor: `${color}15` }}
          >
            {nextChapterLabel || "CONTINUE THE JOURNEY"} &rarr;
          </Link>
        ) : (
          <Link 
            to="/universe"
            className="px-8 py-4 rounded-full border border-tertiary-fixed/30 bg-tertiary-fixed/10 hover:bg-tertiary-fixed/20 backdrop-blur-md transition-all font-label-caps tracking-[0.2em] text-[12px] uppercase group shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            style={{ borderColor: `${color}50`, backgroundColor: `${color}15` }}
          >
            RETURN TO OUR UNIVERSE &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default ChapterEnd;
