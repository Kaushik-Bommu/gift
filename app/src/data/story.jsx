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
      title: "The Moment Everything Changed", 
      color: "#d4af37", 
      theme: "gold / warm beige / brown",
      positionX: -50,
      size: 9.0,
      texture: "/textures/saturn.jpg",
      ringTexture: "/textures/saturn_ring.png",
      hasRings: true,
      intro: (
        <>
          <span className="block mb-8">The single most important game of our lives.</span>
          <br /><br />
          <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1.5}} className="block mb-8">
            Who would've thought...
          </motion.span>
          <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block mb-8">
            ...that a kids' game of treasure hunt...
          </motion.span>
          <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 2}} className="block font-headline-lg-mobile text-[32px] text-primary">
            ...would change our lives for the besttttttttttttttt.
          </motion.span>
        </>
      ),
      nextChapter: "jupiter",
      nextChapterLabel: "TRAVEL TO JUPITER",
      nextChapterSubtitle: "CHAPTER 04\nOUR MEMORIES",
      previousChapter: "uranus",
      sections: [
        { 
          title: "THE TREASURE HUNT", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-[#d4af37] mb-8">THE TREASURE HUNT</h2>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1.5}} className="block mb-12 font-headline-lg-mobile text-[28px]">
                The single most important game of our lives.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1.5}} className="block mb-8">
                Who would've thought that one game...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1.5}} className="block mb-8">
                ...that too a kids' game of treasure hunt...
              </motion.span>
              <motion.span initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{delay: 4.5, duration: 2}} className="block font-display-hero text-[32px] md:text-[48px] text-tertiary-fixed drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                ...would change our lives for the besttttttttttttttt.
              </motion.span>
            </div>
          )
        },
        { 
          title: "14 NOVEMBER 2022", 
          content: (
            <div className="py-24 text-center">
              <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration: 2}} className="inline-block relative mb-12">
                <div className="absolute inset-0 bg-[#d4af37]/20 blur-3xl rounded-full" />
                <span className="font-display-hero text-[48px] md:text-[72px] text-[#d4af37] relative z-10 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] tracking-widest">
                  14 NOVEMBER 2022
                </span>
              </motion.div>
              <br />
              <motion.span initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: 1, duration: 1.5}} className="block font-headline-lg-mobile text-[32px] text-primary mb-8">
                Children's Day
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block text-[18px] opacity-70">
                (I wish that day was sooner 🥲)
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "CHILDREN'S DAY", 
          content: (
            <>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-8">CHILDREN'S DAY</h2>
              You were part of the team organizing all the games.
              <br /><br />
              The different mini events.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1.5}} className="block mb-8">
                Basically...
              </motion.span>
              <motion.span initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{delay: 2, duration: 1.5}} className="block font-headline-lg-mobile text-[32px] text-tertiary-fixed mb-16">
                THE ENTIRE CHILDREN'S DAY.
              </motion.span>
              Initially, I was surprised that a junior college was even celebrating Children's Day.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1}} className="block mb-8">
                But I was like...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 1}} className="block mb-4 text-[#d4af37]">
                "Okay."
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 1}} className="block mb-4 text-[#d4af37]">
                "A day with no classes and games!"
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 1}} className="block font-headline-lg-mobile text-[28px] text-primary">
                "I'm up for it!"
              </motion.span>
            </>
          ) 
        },
        { 
          title: "THE MORNING", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-12">THE MORNING</h2>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5, duration: 1}} className="block mb-12">
                I felt insanelyyy bored.
              </motion.span>
              
              <div className="w-full max-w-md mx-auto my-16 p-4 bg-white/5 border border-white/10 rounded-xl relative shadow-lg flex items-center justify-center aspect-video">
                <span className="font-label-mono text-[14px] text-outline opacity-50 tracking-widest">[SMALL SCREEN / ENOLA HOLMES MEMORY]</span>
              </div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1.5}} className="block mb-8">
                You guys just played Enola Holmes on that small screen of ours.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1.5}} className="block opacity-80">
                I was basically watching the movie and talking to my friends.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "LUNCH", 
          content: (
            <div className="py-12 relative">
              <motion.div 
                animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute right-10 top-0 w-2 h-2 rounded-full bg-[#d4af37] blur-[2px]"
              />
              <motion.div 
                animate={{ y: [10, -10, 10], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute left-10 bottom-10 w-3 h-3 rounded-full bg-[#d4af37] blur-[3px]"
              />
              
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-12">LUNCH</h2>
              I went downstairs near the reception.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-4">
                Mohan was there.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1}} className="block mb-4">
                You were there too.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1.5}} className="block text-[#d4af37]">
                You were talking to Mohan.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "AND THEN I DID WHAT ANY GENTLEMAN WOULD DO", 
          content: (
            <>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-12 leading-tight">AND THEN I DID WHAT ANY GENTLEMAN WOULD DO 🤵😎</h2>
              
              You were a little upset that you weren't able to order food.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-8">
                So, being the gentleman I am...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1}} className="block mb-8">
                I offered to order food for you from my phone.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 1}} className="block mb-8">
                And without any hesitation...
              </motion.span>
              
              <motion.div initial={{opacity:0, scale: 0.8}} whileInView={{opacity:1, scale: 1}} transition={{delay: 5.5, duration: 0.5, type: "spring"}} className="my-16 flex justify-center">
                <span className="font-display-hero text-[48px] md:text-[80px] text-tertiary-fixed drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">YOU SAID YES.</span>
              </motion.div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6.5, duration: 1}} className="block mb-8">
                I still remember ordering a Pizza Hut pizza.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7.5, duration: 1}} className="block mb-4">
                And I asked if it was okay...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8.5, duration: 1}} className="block opacity-80">
                ...because you weren't able to decide anything for yourself 🤦
              </motion.span>
            </>
          ) 
        },
        { 
          title: "THE THUMS UP ORDER", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-12 leading-tight">BUT THAT WASN'T THE END OF YOUR ORDERS 😂</h2>
              
              After that, we went our separate ways.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-4">
                Later, when the order arrived...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1}} className="block mb-8">
                I came downstairs to the room where you were working on some decorations.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1}} className="block mb-4">
                I told you that your order had arrived.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration: 1}} className="block mb-4">
                You asked me to go collect it.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5.5, duration: 1}} className="block mb-12">
                You gave me the money.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7, duration: 1}} className="block mb-8">
                But that wasn't all.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8, duration: 1}} className="block mb-8">
                You also asked me to go to the bakery...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 9, duration: 1}} className="block mb-12">
                ...and buy you a bottle of...
              </motion.span>
              
              <motion.div initial={{opacity:0, scale:0.9, rotate: -2}} whileInView={{opacity:1, scale:1, rotate: 0}} transition={{delay: 10.5, duration: 0.5, type: "spring"}} className="my-16 flex justify-center">
                <span className="font-display-hero text-[56px] md:text-[80px] text-[#d4af37] bg-black/40 px-12 py-4 rounded-3xl border border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">THUMS UP</span>
              </motion.div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 12, duration: 1}} className="block mb-8">
                I was a little baffled by the request.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 13, duration: 1.5}} className="block font-headline-lg-mobile text-[24px]">
                It was the first time we had actually spoken...
                <br /><br />
                <span className="text-[#d4af37]">...and you're already giving me orders 😂</span>
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "SANJI MODE", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-4">BUT ME BEING THE KIND MAN I AM...</h2>
              <span className="block font-label-mono text-[16px] tracking-widest text-[#d4af37] opacity-80 mb-16">(like Sanji 😎)</span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-4">I took the money.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1}} className="block mb-4">I picked up your order.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1}} className="block mb-12">And went to get the Thums Up.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration: 1}} className="block mb-8">The security guard...</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 1}} className="block mb-12">...didn't let me go outside.</motion.span>
              
              <motion.span initial={{opacity:0, scale: 0.8}} whileInView={{opacity:1, scale: 1}} transition={{delay: 7.5, duration: 1}} className="block text-[48px] mb-12">
                🥲🥲
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8.5, duration: 1}} className="block mb-4">So I came back.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 9.5, duration: 1}} className="block mb-4">I gave you your pizza.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 10.5, duration: 1}} className="block mb-8">And informed you that I couldn't follow...</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 11.5, duration: 1}} className="block mb-8 font-headline-lg-mobile text-[28px] text-[#d4af37]">...His Highness's order...</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 12.5, duration: 1}} className="block mb-16 opacity-80">...because of SECURITY.</motion.span>
              
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: 14, duration: 1.5}} className="flex justify-center">
                <span className="font-display-hero text-[32px] md:text-[48px] text-white opacity-40">HER HIGHNESS 👑</span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "THE GAME", 
          content: (
            <div className="py-24 relative">
              <div className="absolute inset-0 bg-black/60 z-[-1] rounded-3xl" />
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1.5}} className="block font-label-mono tracking-[0.4em] text-[18px] opacity-70 mb-12">
                AND THEN...
              </motion.span>
              
              <motion.h2 initial={{opacity:0, scale: 0.95}} whileInView={{opacity:1, scale: 1}} transition={{delay: 1.5, duration: 2}} className="font-display-hero text-[64px] md:text-[96px] text-primary mb-8 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                THE GAME.
              </motion.h2>
              
              <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 2}} className="font-headline-lg text-[40px] md:text-[56px] text-[#d4af37] mb-24">
                THE TREASURE HUNT.
              </motion.h3>
              
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 3}} className="relative w-full max-w-lg mx-auto h-[300px] border border-[#d4af37]/20 rounded-[2rem] overflow-hidden bg-[#d4af37]/5 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 mix-blend-overlay" />
                <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute opacity-60">
                   <path d="M 50 250 Q 150 200 200 150 T 350 50" fill="transparent" stroke="#d4af37" strokeWidth="2" strokeDasharray="5,5" />
                   <circle cx="50" cy="250" r="4" fill="#d4af37" />
                   <circle cx="200" cy="150" r="4" fill="#d4af37" />
                   <circle cx="350" cy="50" r="8" fill="#d4af37" />
                   <circle cx="350" cy="50" r="16" fill="transparent" stroke="#d4af37" strokeWidth="1" />
                </svg>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "THE TEAMS", 
          content: (
            <div className="py-12">
              There were multiple teams.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-8">
                Each team had its own guide.
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block mb-16">
                The guide would help their team throughout the game.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration: 1.5}} className="block mb-8">
                And out of everyone...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 1.5}} className="block mb-12 text-[24px]">
                ...you happened to be...
              </motion.span>
              
              <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{delay: 8, duration: 2}} className="my-16 flex justify-center">
                <span className="font-display-hero text-[40px] md:text-[64px] text-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.7)] text-center">THE GUIDE OF MY TEAM.</span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "THE FIRST ROUND", 
          content: (
            <>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-12">ROUND ONE</h2>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5, duration: 1}} className="block mb-8">
                I was on fire.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1.5}} className="block mb-8">
                I was solving clues left, right and center.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1.5}} className="block mb-8">
                And because of my genius 😎...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration: 1}} className="block mb-12">
                ...we cleared the round.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5.5, duration: 1}} className="block mb-12">
                And we came FIRST.
              </motion.span>
              
              <motion.div initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} transition={{delay: 7, duration: 1, type: "spring"}} className="flex justify-center my-16">
                <div className="border-2 border-[#d4af37] px-12 py-6 rounded-2xl bg-[#d4af37]/10 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                   <span className="font-display-hero text-[40px] md:text-[56px] text-[#d4af37] tracking-widest">FIRST PLACE</span>
                </div>
              </motion.div>
            </>
          ) 
        },
        { 
          title: "THE MOMENT THAT CHANGED EVERYTHING", 
          content: (
            <div className="py-32 relative bg-black/40 rounded-3xl backdrop-blur-sm px-6 border border-[#d4af37]/10 my-12">
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 2}} className="block font-label-mono tracking-[0.4em] text-[20px] opacity-80 mb-16 text-center">
                AND THEN...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 2}} className="block font-headline-lg-mobile text-[32px] md:text-[40px] text-tertiary-fixed text-center mb-24">
                The moment that changed everything.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 2}} className="block text-[24px] text-center mb-16">
                You just came up to me...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7.5, duration: 1.5}} className="block text-[28px] text-[#d4af37] text-center mb-24">
                ...OUT OF NOWHERE...
              </motion.span>
              
              <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{delay: 10, duration: 3}} className="text-center">
                <span className="font-display-hero text-[64px] md:text-[100px] text-primary drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]">AND HUGGED ME.</span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "THE FIRST HUG", 
          content: (
            <div className="py-16 relative flex flex-col items-center">
              <motion.div 
                initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 4}}
                className="w-[200px] h-[200px] relative mb-24 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#d4af37]/20 blur-3xl rounded-full" />
                <motion.div 
                   animate={{ x: [-30, 0] }} transition={{ duration: 3, ease: "easeOut" }}
                   className="w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_15px_#d4af37] absolute left-[40%]"
                />
                <motion.div 
                   animate={{ x: [30, 0] }} transition={{ duration: 3, ease: "easeOut" }}
                   className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white] absolute right-[40%]"
                />
                <motion.div 
                   initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ delay: 3, duration: 2 }}
                   className="w-[100px] h-[100px] rounded-full border border-[#d4af37] absolute opacity-40 shadow-[0_0_20px_#d4af37]"
                />
              </motion.div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1.5}} className="block mb-8 text-center w-full">
                I did NOT expect that at alllllll.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block mb-16 text-center w-full text-[#d4af37] font-headline-lg-mobile text-[28px]">
                I blushed alloooottt.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration: 1.5}} className="block mb-8 text-center w-full">
                And in that moment...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 2}} className="block font-headline-lg-mobile text-[32px] text-primary text-center w-full">
                ...I couldn't think of anything other than hugging you back.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "THE FINAL ROUND", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-12">THE FINAL ROUND</h2>
              
              And then came the final round.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-12">
                Our team won.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block mb-8 font-headline-lg-mobile text-[32px] text-tertiary-fixed">
                You hugged me again.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration: 1.5}} className="block mb-8">
                But this time...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 1.5}} className="block mb-4 text-[#d4af37]">
                ...it felt more comfortable.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7.5, duration: 1.5}} className="block text-[#d4af37]">
                ...and better.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "ONE LAST REQUEST", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-12">ONE LAST REQUEST</h2>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5, duration: 1}} className="block mb-4">
                At the end of the day...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1}} className="block mb-12">
                You asked me to buy you a chocolate.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1}} className="block mb-4">
                Because we won...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1.5}} className="block mb-16 text-[#d4af37]">
                ...because you were the guide of our team.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 1}} className="block mb-8">
                You weren't serious about it.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7, duration: 1.5}} className="block mb-16 font-headline-lg-mobile text-[28px] text-tertiary-fixed">
                But I took it very seriously.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8.5, duration: 1.5}} className="block">
                I planned to give you a chocolate.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "THE WEEK THAT DIDN'T GO AS PLANNED", 
          content: (
            <div className="py-12">
              As soon as I got home...
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-12">
                I bought the chocolate.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1}} className="block mb-12">
                I decided to give it to you the next day.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1}} className="block mb-8 opacity-70">
                But...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration: 1.5}} className="block mb-8 text-[#d4af37]">
                I got sick.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 1.5}} className="block mb-4">
                I couldn't come to college...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7.5, duration: 1.5}} className="block text-[24px] opacity-80">
                ...for an entire week.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "THE CHOCOLATE RETURN", 
          content: (
            <div className="py-12">
              <span className="block font-label-mono text-[16px] tracking-widest opacity-70 mb-8">THE NEXT WEEK</span>
              <h2 className="font-headline-lg text-[40px] md:text-[56px] text-primary mb-16">I CAME BACK.</h2>
              
              When I was feeling better, I came to college.
              <br /><br />
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="block mb-8">
                And the FIRST thing I did...
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 2}} className="block mb-16 font-headline-lg-mobile text-[28px] text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                ...was give you the chocolate you asked for.
              </motion.span>
              
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: 4.5, duration: 1}} className="w-[60px] h-[60px] mx-auto rounded-xl bg-gradient-to-br from-[#d4af37] to-[#8c7324] shadow-[0_0_20px_rgba(212,175,55,0.5)] mb-16" />
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5.5, duration: 1.5}} className="block mb-8">
                The expression on your face when you took it...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7, duration: 1.5}} className="block mb-12 text-[24px] text-tertiary-fixed">
                ...was priceless.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8.5, duration: 1.5}} className="block mb-4">
                You were surprised...
              </motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 10, duration: 1.5}} className="block opacity-80">
                ...that I still remembered it after an entire week.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "THE ICE BREAKS", 
          content: (
            <div className="py-24 text-center">
              <h2 className="font-display-hero text-[48px] md:text-[72px] text-primary mb-12">AND THAT...</h2>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1.5}} className="block mb-16 font-headline-lg-mobile text-[28px] text-[#d4af37]">
                ...was when the ice broke.
              </motion.span>
              
              <div className="text-[18px] opacity-80 mb-24 space-y-4">
                <motion.span initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 2.5, duration: 1}} className="block">That one game...</motion.span>
                <motion.span initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 3.5, duration: 1}} className="block">...and that one chocolate...</motion.span>
                <motion.span initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 4.5, duration: 1}} className="block text-white opacity-100">...broke the ice between us.</motion.span>
              </div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 1.5}} className="block mb-12">
                And after that...
              </motion.span>
              
              <div className="flex flex-col items-center gap-6">
                <motion.span initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} transition={{delay: 7.5, duration: 1}} className="font-display-hero text-[32px] md:text-[48px] text-tertiary-fixed">TALKING.</motion.span>
                <motion.span initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} transition={{delay: 8.5, duration: 1}} className="font-display-hero text-[40px] md:text-[56px] text-tertiary-fixed">TALKING.</motion.span>
                <motion.span initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} transition={{delay: 9.5, duration: 1.5}} className="font-display-hero text-[48px] md:text-[72px] text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">AND MORE TALKING.</motion.span>
              </div>
            </div>
          ) 
        },
        { 
          title: "THE CONVERSATIONS", 
          content: (
            <div className="py-16 relative flex flex-col items-center">
              <motion.div 
                animate={{ y: [0, -20, 0], opacity: [0, 0.8, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 0 }}
                className="absolute left-[20%] top-10 w-8 h-4 rounded-full bg-white/10 blur-[1px] border border-white/20"
              />
              <motion.div 
                animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 1.5 }}
                className="absolute right-[30%] top-40 w-12 h-6 rounded-full bg-[#d4af37]/10 blur-[2px] border border-[#d4af37]/20"
              />
              <motion.div 
                animate={{ y: [0, -25, 0], opacity: [0, 0.7, 0] }} transition={{ repeat: Infinity, duration: 4.5, delay: 3 }}
                className="absolute left-[60%] bottom-20 w-10 h-5 rounded-full bg-white/10 blur-[1px] border border-white/20"
              />
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1.5}} className="block mb-6 font-headline-lg-mobile text-[24px]">We spoke during the day.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1.5}} className="block mb-6 font-headline-lg-mobile text-[24px]">We spoke in the evening.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1.5}} className="block mb-24 font-headline-lg-mobile text-[24px]">And even during the latest of nights.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 1.5}} className="block mb-8">And somewhere along the way...</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 2}} className="block mb-16 text-[32px] text-tertiary-fixed">
                I started loving you...
              </motion.span>
              
              <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{delay: 8, duration: 2, type: "spring"}} className="text-center mb-16 w-full flex justify-center">
                <span className="font-display-hero text-[48px] md:text-[80px] text-primary drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] block">WAYYYYYY<br />TOOOOOO<br />MUCHHHH</span>
              </motion.div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 10, duration: 1.5}} className="block text-center opacity-60">
                But I never told you.
              </motion.span>
            </div>
          ) 
        },
        { 
          title: "28 DECEMBER 2022", 
          content: (
            <div className="py-48 text-center relative z-20">
              <div className="absolute inset-0 bg-[#020204]/90 z-[-1] rounded-[3rem] backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)]" />
              
              <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{duration: 3}} className="mb-8">
                <span className="font-display-hero text-[48px] md:text-[80px] text-[#d4af37] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] tracking-widest block">
                  28 DECEMBER 2022
                </span>
              </motion.div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 2}} className="block mb-32 font-label-mono tracking-[0.4em] text-[18px] opacity-70">
                THE DAY AASHIK BEGAN.
              </motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 1.5}} className="block mb-6 text-[20px]">I was going to my home.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6.5, duration: 1.5}} className="block mb-16 text-[20px]">I was in the corridor of my flat.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8.5, duration: 2}} className="block mb-16 text-[24px]">You asked me...</motion.span>
              
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: 12, duration: 3}} className="my-24">
                <span className="font-display-hero text-[64px] md:text-[100px] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] block leading-tight">
                  "Are we dating?"
                </span>
              </motion.div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 18, duration: 2}} className="block mb-16 text-[24px] opacity-80">I said...</motion.span>
              
              <motion.div initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} transition={{delay: 21, duration: 4}} className="my-16 flex justify-center">
                <span className="font-display-hero text-[120px] md:text-[180px] text-[#d4af37] drop-shadow-[0_0_50px_rgba(212,175,55,1)] leading-none block">
                  YES.
                </span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "THE PROPOSAL", 
          content: (
            <div className="py-24 text-center">
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1.5}} className="block mb-4 text-[24px]">And there you go.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1.5}} className="block mb-16 text-[24px]">That was our proposal.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 2}} className="block mb-12 font-headline-lg-mobile text-[32px] text-tertiary-fixed">
                That was how AASHIK started.
              </motion.span>
              
              <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{delay: 6, duration: 3}} className="mt-16 flex justify-center">
                <span className="font-display-hero text-[80px] md:text-[120px] text-[#d4af37] drop-shadow-[0_0_40px_rgba(212,175,55,0.8)] tracking-[0.1em] block">AASHIK</span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "LOOKING BACK", 
          content: (
            <div className="py-12">
              <h2 className="font-headline-lg text-[32px] md:text-[48px] text-primary mb-12">LOOKING BACK...</h2>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5, duration: 1.5}} className="block mb-6">At the time, it was just a game.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 1.5}} className="block mb-6">Just a chocolate.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="block mb-6">Just a few conversations.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 1.5}} className="block mb-16">Just two hugs.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5, duration: 1.5}} className="block mb-8">But somehow...</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6.5, duration: 1.5}} className="block mb-16 font-headline-lg-mobile text-[28px] text-[#d4af37]">...those tiny moments changed everything.</motion.span>
              
              <div className="my-16 font-label-mono tracking-[0.3em] text-[16px] md:text-[20px] space-y-6 opacity-80 text-center">
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8.5, duration: 1}} className="block">One game.</motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 9.5, duration: 1}} className="block">One day.</motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 10.5, duration: 1}} className="block">One chocolate.</motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 11.5, duration: 1}} className="block">One question.</motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 12.5, duration: 1}} className="block">One answer.</motion.span>
              </div>
              
              <motion.div initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} transition={{delay: 14.5, duration: 2.5}} className="text-center mt-24">
                <span className="font-display-hero text-[64px] md:text-[96px] text-primary drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] block">US.</span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "TRANSITION TO JUPITER", 
          content: (
            <div className="py-24">
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1.5}} className="block mb-8 text-[24px]">So...</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1.5}} className="block mb-16 font-headline-lg-mobile text-[28px] text-tertiary-fixed">That was the actual beginning of our story.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration: 1.5}} className="block mb-4">From that point on...</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 5.5, duration: 1.5}} className="block mb-16 text-[#d4af37]">...there was no going back.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 7, duration: 1.5}} className="block mb-8">But our story doesn't end here.</motion.span>
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8.5, duration: 1.5}} className="block mb-12">Now we move forward.</motion.span>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 10, duration: 1.5}} className="block mb-8 font-headline-lg-mobile text-[28px] opacity-90">To the largest planet in the Solar System.</motion.span>
              
              <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} transition={{delay: 12.5, duration: 2}} className="my-16 flex justify-center">
                <span className="font-display-hero text-[56px] md:text-[80px] text-primary drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] block">JUPITER.</span>
              </motion.div>
              
              <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 15, duration: 2}} className="block text-center text-[#d4af37] font-headline-lg-mobile text-[24px]">
                Just as big as our lives for each other.
              </motion.span>
            </div>
          ) 
        }
      ],
      timeline: [
        { date: "14 NOVEMBER 2022", title: "CHILDREN'S DAY", description: "" },
        { date: "", title: "PIZZA", description: "" },
        { date: "", title: "THUMS UP", description: "" },
        { date: "", title: "TREASURE HUNT", description: "" },
        { date: "", title: "TEAM GUIDE", description: "" },
        { date: "", title: "FIRST ROUND", description: "" },
        { date: "", title: "FIRST HUG", description: "" },
        { date: "", title: "FINAL ROUND", description: "" },
        { date: "", title: "SECOND HUG", description: "" },
        { date: "", title: "CHOCOLATE", description: "" },
        { date: "", title: "THE ICE BREAKS", description: "" },
        { date: "", title: "CONVERSATIONS", description: "" },
        { date: "28 DECEMBER 2022", title: "\"ARE WE DATING?\"", description: "" },
        { date: "", title: "\"YES.\"", description: "" },
        { date: "", title: "AASHIK", description: "" }
      ],
      memories: [
        { url: "", date: "14 NOV 2022", title: "Children's Day", caption: "[CHILDREN'S DAY PHOTO]" },
        { url: "", date: "NOV 2022", title: "Deeksha", caption: "[DEEKSHA PHOTO]" },
        { url: "", date: "14 NOV 2022", title: "The Game", caption: "[GAME / TREASURE HUNT PHOTO]" },
        { url: "", date: "14 NOV 2022", title: "My Team", caption: "[TEAM PHOTO]" },
        { url: "", date: "NOV 2022", title: "The Return", caption: "[CHOCOLATE MEMORY]" },
        { url: "", date: "DEC 2022", title: "Us", caption: "[PHOTO FROM THIS PERIOD]" },
        { url: "", date: "28 DEC 2022", title: "The Proposal", caption: "[28 DECEMBER MEMORY]" }
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
