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
      intro: (
        <>
          Somewhere along the way...
          <br /><br />
          <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 2}} className="block">
            ...we finally started talking.
          </motion.span>
        </>
      ),
      nextChapter: "saturn",
      nextChapterLabel: "TRAVEL TO SATURN",
      nextChapterSubtitle: "CHAPTER 03\nWHEN I FELL FOR YOU",
      previousChapter: "neptune",
      sections: [
        { 
          title: "THE FIRST REAL CONVERSATION", 
          content: (
            <>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-8">YOUR BIRTHDAY</h2>
              <span className="block font-label-mono text-[20px] tracking-[0.4em] mb-12 opacity-80">DEEKSHA JUNIOR COLLEGE</span>
              The first proper conversation we had in Deeksha... I still remember it as if it was just yesterday.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5, duration: 1.5}} className="block mb-8">
                It was your birthday.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1.5}} className="block">
                We were on the ground floor, near the parking.
              </motion.span>
              
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 2}} className="my-16 border-l border-[#8ed7d7]/30 pl-8 relative">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#8ed7d7]/50 to-transparent"></div>
                <span className="font-label-mono text-[14px] tracking-[0.3em] text-[#8ed7d7] block mb-2">GROUND FLOOR</span>
                <span className="font-label-mono text-[14px] tracking-[0.3em] text-[#8ed7d7] block mb-2">PARKING</span>
                <span className="font-label-mono text-[14px] tracking-[0.3em] text-[#8ed7d7] block">CRICKET AREA</span>
              </motion.div>
            </>
          ) 
        },
        { 
          title: "THE CHOCOLATE", 
          content: (
            <>
              You were distributing chocolates.
              <br /><br />
              <motion.span initial={{opacity:0, y: 10}} whileInView={{opacity:1, y: 0}} transition={{delay: 0.5, duration: 1}} className="block mb-12 text-[#8ed7d7]">
                (I'm guessing it was Munch 😭)
              </motion.span>
              
              Somewhere near the border of the place where we played cricket and the parking...
              <br /><br />
              After I finished playing...
              <br /><br />
              <span className="opacity-70 text-sm">(It wasn't during lunch, but some other time.)</span>
              <br /><br />
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-4">
                I came into the parking area.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1}} className="block mb-4">
                I wished you.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1}} className="block mb-12">
                You gave me a chocolate.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 2}} className="block opacity-40 text-sm">
                I didn't have any feelings for you.
              </motion.span>
            </>
          ) 
        },
        { 
          title: "WHY THIS MOMENT MATTERS", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-8 leading-tight">BUT THAT LITTLE MOMENT MATTERED.</h2>
              Because that was the first proper conversation we had in Deeksha.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1.5}} className="block mb-8">
                Actually...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1.5}} className="block mb-8">
                ...as a matter of fact...
              </motion.span>
              <motion.span initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{delay: 5, duration: 2}} className="block text-tertiary-fixed font-headline-lg-mobile text-[32px]">
                ...in our lives.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "AND THEN THERE WAS...", 
          content: (
            <div className="py-12">
              <h2 className="font-display-hero text-[64px] md:text-[96px] text-primary drop-shadow-[0_0_15px_rgba(142,215,215,0.4)] mb-4 leading-none">FOOTBALL.</h2>
              <motion.span initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: 1.5, duration: 1}} className="font-headline-lg text-[32px] md:text-[48px] text-[#8ed7d7] block mb-16">
                WITH A CRICKET BALL.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block mb-8">
                That day, somehow, both of our classes were free.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 1.5}} className="block">
                And somehow both our classes ended up in the play area.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "THE ORIGINAL TEAM", 
          content: (
            <>
              Initially, it was me, Adi, Nikhit, Rohit, Tarun and the others...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5, duration: 1}} className="block mb-16">
                ...just playing.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1}} className="block mb-8 font-headline-lg-mobile text-[24px]">
                And then...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1.5}} className="block mb-8 text-[#8ed7d7]">
                ...you and Arshi...
              </motion.span>
              
              <motion.span initial={{opacity:0, scale: 1.05}} whileInView={{opacity:1, scale: 1}} transition={{delay: 5, duration: 1.5}} className="block mb-8 text-primary font-headline-lg-mobile text-[28px]">
                ...popped out of nowhere.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6.5, duration: 1.5}} className="block">
                and asked if you guys could join.
              </motion.span>
            </>
          ) 
        },
        { 
          title: "THE THREATENING REQUEST", 
          content: (
            <div className="py-12">
              Although...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-8">
                You didn't exactly ASK.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1}} className="block mb-4">
                You asked...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1}} className="block mb-12">
                ...in a rather threatening way...
              </motion.span>
              
              <motion.div initial={{opacity:0, scale: 0.9}} whileInView={{opacity:1, scale: 1}} transition={{delay: 5, duration: 0.5, type: "spring"}} className="mb-16">
                <span className="font-display-hero text-[48px] md:text-[64px] text-tertiary-fixed drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] block text-center">CAN WE JOIN?</span>
              </motion.div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6.5, duration: 1}} className="block mb-8">
                So we formed two teams.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7.5, duration: 1}} className="block mb-8">
                And of course...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8.5, duration: 1.5}} className="block text-[#8ed7d7] font-headline-lg-mobile text-[24px]">
                You were on the opposite team.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "PLAYING AGAINST EACH OTHER", 
          content: (
            <>
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 2}} className="flex items-center justify-center gap-4 md:gap-12 my-16 relative">
                <div className="font-label-mono text-[16px] md:text-[24px] tracking-[0.2em] text-[#8ed7d7] drop-shadow-[0_0_10px_rgba(142,215,215,0.5)]">MY TEAM</div>
                <div className="font-headline-lg text-[24px] md:text-[32px] text-primary opacity-50">VS</div>
                <div className="font-label-mono text-[16px] md:text-[24px] tracking-[0.2em] text-[#8ed7d7] drop-shadow-[0_0_10px_rgba(142,215,215,0.5)]">YOUR TEAM</div>
                
                <motion.div 
                  animate={{ x: [-80, 80] }} 
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, ease: "easeInOut" }}
                  className="absolute bottom-[-30px] w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />
              </motion.div>
              
              <div className="mt-24">
                You were on the opposite team from me.
                <br /><br />
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1.5}} className="block mb-8">
                  As we were playing...
                </motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block mb-8">
                  We started having these small little interactions.
                </motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 1.5}} className="block">
                  I'd try to steal the ball from you...
                </motion.span>
              </div>
            </>
          ) 
        },
        { 
          title: "AND THEN...", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-12">AND THEN...</h2>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1}} className="block mb-8">
                You slipped.
              </motion.span>
              <motion.span initial={{opacity:0, y: 10}} whileInView={{opacity:1, y: 0}} transition={{delay: 3, duration: 1}} className="block mb-16 text-[#8ed7d7] font-headline-lg-mobile text-[24px]">
                ...and collapsed.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 1}} className="block mb-8">
                And then...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6.5, duration: 1.5}} className="block font-headline-lg-mobile text-[28px] text-tertiary-fixed">
                My hero instincts kicked in.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "THE HERO", 
          content: (
            <div className="py-12">
              <h2 className="font-display-hero text-[40px] md:text-[64px] text-primary mb-8 leading-tight drop-shadow-[0_0_15px_rgba(142,215,215,0.3)]">YOUR HERO CAME TO THE RESCUE.</h2>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-16 text-[#8ed7d7]">
                (which is me, obviously 😎)
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block mb-8">
                I offered you a hand to get you up.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 1.5}} className="block mb-16 font-headline-lg-mobile text-[28px] text-primary">
                And you took the hand of this hero ;)
              </motion.span>
              
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5.5, duration: 2}} className="flex justify-center items-center h-24">
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#8ed7d7]/50 to-transparent relative">
                   <motion.div 
                     animate={{ y: [0, 96] }} 
                     transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                     className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8ed7d7] shadow-[0_0_10px_#8ed7d7]"
                   />
                </div>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "AND I THINK...", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-12">AND I THINK...</h2>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1.5}} className="block mb-16 font-headline-lg-mobile text-[28px] text-tertiary-fixed">
                That was probably the first time I touched you.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1}} className="block text-[14px] opacity-60">
                Now I'm sounding like a creepy pervert 🙃
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "WHAT URANUS MEANT", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-16">SO, THAT WAS URANUS.</h2>
              
              <div className="flex flex-col gap-6 text-[#8ed7d7] font-label-mono tracking-widest text-[14px] md:text-[18px]">
                <motion.span initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: 0.5, duration: 1}}>A birthday.</motion.span>
                <motion.span initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: 1.0, duration: 1}}>A chocolate.</motion.span>
                <motion.span initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: 1.5, duration: 1}}>A cricket ground.</motion.span>
                <motion.span initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: 2.0, duration: 1}}>Football with a cricket ball.</motion.span>
                <motion.span initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: 2.5, duration: 1}}>A few small interactions.</motion.span>
                <motion.span initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: 3.0, duration: 1}}>A fall.</motion.span>
                <motion.span initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: 3.5, duration: 1}}>A helping hand.</motion.span>
              </div>
              
              <div className="mt-24">
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 1.5}} className="block mb-8">
                  And somehow...
                </motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6.5, duration: 2}} className="block font-headline-lg-mobile text-[28px] text-primary">
                  ...these tiny moments became part of our story.
                </motion.span>
              </div>
            </div>
          ) 
        },
        { 
          title: "THE EMOTIONAL TRANSITION", 
          content: (
            <div className="py-12">
              Looking back...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1.5}} className="block mb-12">
                It was funny how small these moments seemed at the time.
              </motion.span>
              
              <div className="flex flex-col gap-4 text-center opacity-70 mb-16 font-label-mono tracking-widest text-[14px]">
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1}}>A conversation.</motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.0, duration: 1}}>A chocolate.</motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1}}>A game.</motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.0, duration: 1}}>A helping hand.</motion.span>
              </div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5.5, duration: 2}} className="block font-headline-lg-mobile text-[24px] text-primary">
                But there was still so much more to come.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "WHAT'S NEXT", 
          content: (
            <div className="py-16">
              But if you really want to know...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1.5}} className="block mb-12 font-headline-lg-mobile text-[28px] text-tertiary-fixed">
                ...where our story ACTUALLY began...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1.5}} className="block mb-16">
                That's a story for another planet.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 1.5}} className="block mb-8 text-[#8ed7d7]">
                Your next destination has rings.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6.5, duration: 1.5}} className="block font-display-hero text-[32px] md:text-[48px] text-primary drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                You know which one. 😉
              </motion.span>
            </div>
          ) 
        }
      ],
      timeline: [
        { date: "", title: "YOUR BIRTHDAY", description: "" },
        { date: "", title: "GROUND FLOOR", description: "" },
        { date: "", title: "PARKING", description: "" },
        { date: "", title: "CHOCOLATE", description: "" },
        { date: "", title: "FIRST PROPER CONVERSATION", description: "" },
        { date: "", title: "FOOTBALL WITH A CRICKET BALL", description: "" },
        { date: "", title: "TWO TEAMS", description: "" },
        { date: "", title: "SMALL INTERACTIONS", description: "" },
        { date: "", title: "YOU SLIPPED", description: "" },
        { date: "", title: "THE HERO ARRIVED 😎", description: "" },
        { date: "", title: "THE HAND", description: "" },
        { date: "", title: "THE FIRST TOUCH", description: "" },
        { date: "", title: "\"OKAY, I'M STOPPING NOW 🙃\"", description: "" }
      ],
      memories: [
        { url: "", date: "[DEEKSHA PHOTO]", title: "Deeksha", caption: "[BIRTHDAY MEMORY]" },
        { url: "", date: "[PLAYGROUND PHOTO]", title: "The Ground", caption: "[FOOTBALL MEMORY]" },
        { url: "", date: "[GROUP PHOTO]", title: "The Original Team", caption: "[ANY PHOTO FROM THIS PERIOD]" }
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
