import React from 'react';
import { motion } from 'framer-motion';

export const storyConfig = {
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
      intro: (
        <>
          Every story has a beginning.
          <br /><br />
          <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 2}} className="block">
            And ours began long before we even knew it.
          </motion.span>
        </>
      ),
      nextChapter: "uranus",
      nextChapterLabel: "TRAVEL TO URANUS",
      previousChapter: null,
      sections: [
        { 
          title: "THE FIRST MEMORY", 
          content: (
            <>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-8">BACK IN SCHOOL</h2>
              <span className="block font-label-mono text-[20px] tracking-[0.4em] mb-12 opacity-80">SVIS</span>
              The first time I saw you was in school in SVIS. I recollect it being in 6th class.
              <br /><br />
              Back then, everyone used to call you...
              <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{duration:1}} className="my-16">
                <span className="font-display-hero text-[48px] md:text-[80px] text-tertiary-fixed drop-shadow-lg block">Aasta Paasta</span>
              </motion.div>
              Not gonna lie, that's how I remembered you during my school days.
              <br /><br />
              <span className="opacity-80">Just... Aasta Paasta.</span>
            </>
          ) 
        },
        { 
          title: "AND THAT WAS PRETTY MUCH IT...", 
          content: (
            <div className="py-24">
              Other than that, I don't think we ever really spoke to each other in school.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 2}} className="block mt-12 opacity-60">
                Still, somehow, those little memories stayed.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "THE NEXT CHAPTER OF LIFE", 
          content: (
            <>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-8">INTERMEDIATE</h2>
              <span className="block font-label-mono text-[20px] tracking-[0.4em] mb-12 opacity-80">DEEKSHA JUNIOR COLLEGE</span>
              As soon as I joined Deeksha, I found out that you had joined too.
              <br /><br />
              And I remember thinking...
              <br /><br />
              <motion.span initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="font-headline-lg-mobile text-[32px] text-primary block my-8">
                "Ooo... another familiar face."
              </motion.span>
              I was honestly laughing at how so many SVIS students had somehow ended up at Deeksha Junior College.
            </>
          ) 
        },
        { 
          title: "ONE MEMORY I CAN'T FORGET", 
          content: (
            <>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-8">THE CAMERA INCIDENT</h2>
              During one of our online classes, I have this vague memory...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className="block mb-8">
                ...you turned on your camera by mistake.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration:1.5}} className="block mb-8">
                And you were brushing your teeth.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration:1.5}} className="block mb-16 opacity-70">
                ...without even realizing it.
              </motion.span>
              <motion.div 
                initial={{opacity:0, scale:0.8}} 
                whileInView={{opacity:1, scale:1}} 
                transition={{type: "spring", bounce: 0.5, delay: 0.5}}
                className="my-16"
              >
                <span className="font-display-hero text-[48px] md:text-[72px] text-tertiary-fixed drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">INSAAAAANELY HILARIOUS.</span>
              </motion.div>
            </>
          ) 
        },
        { 
          title: "THEN CAME THE OFFLINE CLASSES", 
          content: (
            <div className="py-12">
              Soon after, our offline classes started.
              <br /><br />
              After a few months, I saw you properly.
            </div>
          ) 
        },
        { 
          title: "AND THEN...", 
          content: (
            <>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-12 drop-shadow-[0_0_20px_#4b70dd]">I HAD A CRUSH ON YOU.</h2>
              Well...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className="block mb-8">
                Because you looked really cute.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration:1.5}} className="block">
                And beautiful.
              </motion.span>
            </>
          ) 
        },
        { 
          title: "BUT THEN I DID WHAT I THOUGHT WAS THE SMART THING.", 
          content: (
            <>
              I thought...
              <br /><br />
              "These crushes, relationships and all..."
              <br /><br />
              "...are not really for me."
              <br /><br />
              "Let's just focus on my studies."
              <br /><br />
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} className="my-16 p-8 border border-[#4b70dd]/30 bg-[#4b70dd]/5 rounded-2xl inline-block">
                <span className="font-label-mono text-[24px] tracking-[0.3em] text-[#8ed7d7]">FOCUS ON STUDIES</span>
              </motion.div>
              <br />
              Well...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5, duration:1}} className="font-headline-lg-mobile text-[32px] text-primary block mt-8">
                Stupid me.
              </motion.span>
            </>
          ) 
        },
        { 
          title: " ", 
          content: (
            <div className="py-24">
              I didn't realize it back then...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className="block mb-8">
                ...that you were the one for me.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration:1.5}} className="block mb-8">
                Maybe the story had already started...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration:1.5}} className="block mb-16 opacity-70">
                ...I just didn't know it yet.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration:2}} className="font-body-main font-light text-[28px] opacity-90 block text-tertiary-fixed">
                Funny how life works.
              </motion.span>
            </div>
          ) 
        },
        {
          title: "THE BEGINNING",
          content: (
            <div className="py-32">
              That was the beginning.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className="block mb-8">
                Just a few memories...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration:1.5}} className="block mb-16 opacity-80">
                ...from a time when I had absolutely no idea where this story was going.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration:2}} className="block mb-16 text-primary font-headline-lg-mobile text-[32px]">
                And this is only where it begins.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration:2}} className="block mb-16">
                To find out how our story actually started...
              </motion.span>
              <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{delay: 6, duration:2}}>
                <span className="font-headline-lg text-[32px] md:text-[48px] text-tertiary-fixed tracking-[0.2em] drop-shadow-xl">YOU'LL HAVE TO TRAVEL CLOSER.</span>
              </motion.div>
            </div>
          )
        }
      ],
      timeline: [
        { date: "6TH CLASS", title: "SVIS", description: '"Aasta Paasta"' },
        { date: "INTERMEDIATE", title: "DEEKSHA JUNIOR COLLEGE", description: '"Another familiar face"' },
        { date: "ONLINE CLASSES", title: "THE CAMERA INCIDENT", description: '"Brushing your teeth"' },
        { date: "OFFLINE CLASSES", title: "THE FIRST CRUSH", description: '"Because you looked really cute."' },
        { date: "THINKING SMART", title: "FOCUS ON STUDIES", description: '"Stupid me."' },
      ],
      memories: [
        { url: "", date: "[SVIS PHOTO]", title: "School Memory", caption: "[OPTIONAL SCHOOL PHOTO PLACEHOLDER]" },
        { url: "", date: "[DEEKSHA PHOTO]", title: "Junior College", caption: "[OPTIONAL DEEKSHA PHOTO PLACEHOLDER]" },
        { url: "", date: "[ONLINE CLASS MEMORY]", title: "The Camera Incident", caption: "[OPTIONAL ONLINE CLASS PHOTO PLACEHOLDER]" },
        { url: "", date: "[FIRST PHOTO FROM THIS PERIOD]", title: "The Crush", caption: "[OPTIONAL PHOTO FROM OFFLINE CLASSES]" }
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
        letterContent: `[YOUR PERSONAL LETTER WILL GO HERE]
This is where you write to her from the heart.
It will appear at the very end of the journey.`
      }
    }
  ]
};
