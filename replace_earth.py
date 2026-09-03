import re

EARTH_CONTENT = """    { 
      id: "earth", 
      name: "Earth", 
      chapter: "06", 
      title: "Our College Life", 
      color: "#2233ff", 
      theme: "warm / nostalgic / blue",
      positionX: 38,
      size: 15.0,
      texture: "/textures/earth.jpg",
      intro: (
        <>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 2}} className="block">
            Finally you have made it to <motion.span animate={{ textShadow: "0 0 15px #4488ff" }} className="text-[#4488ff]">lovely planet EARTH</motion.span>, in this planet you will find out all the college experiences we had
            <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 1.5}}>
              ( that I remember <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>🥲</motion.span>).....
            </motion.span>
          </motion.div>
        </>
      ),
      nextChapter: "venus",
      previousChapter: "mars",
      sections: [
        { 
          title: "THE DISCOVERY OF AASHIK", 
          content: (
            <div className="py-24 text-center">
              The one moment that I love the was when the name AASHIK was discovered..
              <br /><br />
              <div className="my-16 flex justify-center text-[48px] md:text-[80px] font-display-hero text-[#2233ff] drop-shadow-[0_0_20px_rgba(34,51,255,0.4)]">
                {"AASHIK".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.8 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2.5, duration: 1.5}} className="mt-8">
                <span className="font-label-mono text-[16px] md:text-[20px] tracking-[0.3em] opacity-80">
                  A WORD THAT MEANS <motion.span animate={{ scale: [1, 1.05, 1], color: ["#fff", "#2233ff", "#fff"] }} transition={{ repeat: Infinity, duration: 2 }}>LOVER</motion.span>.
                </span>
              </motion.div>
              <br /><br />
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3.5, duration: 2}} className="text-left max-w-3xl mx-auto opacity-90 leading-relaxed relative">
                <div className="absolute inset-0 bg-[#2233ff]/5 blur-3xl -z-10 rounded-full" />
                It was during our lunch break we were sitting on the benches in the corridor outside our classrooms, we were just talking to each other, it was a normal day and then suddenly tarun just comes out of my class goes out doing this work, but while going back he stops and just randomly points out that <motion.span animate={{ color: ["#fff", "#2233ff", "#fff"] }} transition={{ duration: 3, repeat: Infinity }}>if we combine both our names</motion.span> it would create the special word AASHIK, a word that means lover.
                <br /><br />
                We both noticing that were baffled, we were like <motion.span initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} className="inline-block text-[#2233ff] font-bold">" How come we never thought of thattttt"</motion.span> and later thanked Tarun for noticing it...
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "LUNCH BREAKS", 
          content: (
            <div className="py-24">
              Talking about lunch breaks, one of the <motion.span initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }} className="inline-block text-[#ffcc33] font-bold drop-shadow-md">peakkkk memories</motion.span> were the lunch breaks.
              <br /><br />
              <motion.div initial={{opacity:0, y: 10}} whileInView={{opacity:1, y: 0}} transition={{duration: 2}} className="leading-relaxed relative my-12 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                Every single day I would be waiting for the lunch break cuz that was the time I would get to meet you, the time I would get to talk to you...
                <br /><br />
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}}>I would just immediately after lunch come out of my class,</motion.span> 
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="text-[#ffaa33]"> just keep talking to you</motion.span> 
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 2, duration: 1}}> till when there was 15 mins left for the next class </motion.span>
                <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 0.3}} className="font-bold italic">then immediately after lunch I would rush back to class </motion.span>
                <motion.span initial={{opacity:0, scale: 0.9}} whileInView={{opacity:1, scale: 1}} transition={{delay: 3.5, duration: 0.3}} className="text-[#ff3333] font-display-hero text-[24px]">and just consume my food as fastttt as i could </motion.span>
                <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} className="inline-block font-bold">and everyone used to tease me sooooooo much regarding thatt.</motion.span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "SHRAVAN SIR", 
          content: (
            <div className="py-16 text-center">
              <motion.div initial={{opacity:0, scale: 0.9}} whileInView={{opacity:1, scale: 1}} transition={{duration: 1.5}} className="max-w-2xl mx-auto">
                Another funny memory when into your and shravan sir was teaching his class, and then when we saw the both of us he gave a <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1, duration: 1}} className="inline-block mx-1">cute teasing wala look</motion.span> like he <motion.span initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="text-[#4488ff] font-bold">supported us</motion.span>, which was veryy sweet and funny how being chemistry teacher for the both of us he still supported us....!!!!
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "THE STOLEN PHONE", 
          content: (
            <div className="py-16">
              There was this another incident when Adithya stole my phone to prank me, and I was not able to find it anywhere at all, 
              <br /><br />
              <motion.div initial={{opacity:0, x: -20}} whileInView={{opacity:1, x: 0}} transition={{delay: 1, duration: 1, type: "spring"}} className="text-center mt-8">
                <span className="font-display-hero text-[32px] md:text-[48px] text-[#ff3333] drop-shadow-md">
                  you knew about the phone but still never told meeeeee<motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="inline-block">🙄🙄</motion.span>
                </span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "THE STAIRS", 
          content: (
            <div className="py-24 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#2233ff]/5 to-transparent blur-3xl -z-10" />
              Another cute memory that u like is when we were going to home and were on the stairs of our building, mohan then was pulling ur bag, i then suddenly come from behind and pull ur bag and move you closer to me, showing that only I came so that to <motion.span initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }} className="inline-block font-display-hero text-[32px] text-[#ffcc33] drop-shadow-[0_0_15px_rgba(255,204,51,0.5)]">my girlfriend<motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-block ml-2">😎</motion.span></motion.span>
            </div>
          ) 
        },
        { 
          title: "WAIT...", 
          content: (
            <div className="py-32 text-center h-[50vh] flex flex-col justify-center items-center">
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}}>
                <span className="font-headline-lg text-[40px] md:text-[60px] opacity-80">
                  <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.5}}>Wellllll </motion.span>
                  <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5}}>one lasstttttt one, </motion.span>
                  <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3}}>definitely lasttt</motion.span>
                </span>
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "THE DRIVE IN", 
          content: (
            <div className="py-24 relative max-w-3xl mx-auto text-center">
              <motion.div initial={{opacity:0, filter: 'blur(10px)'}} whileInView={{opacity:1, filter: 'blur(0px)'}} transition={{duration: 3}} className="leading-[2.5] font-light text-[18px] md:text-[22px] text-on-surface/90">
                I exactly don't remember when it was, but that day u were wearing a different time of heels and we were walking towards the drive in and after reaching I saw that your handles were hiring u so i removed them and I started pressing your leg, only u me and adi were present during that time...
              </motion.div>
            </div>
          ) 
        },
        { 
          title: "OUR WORLD", 
          content: (
            <div className="py-48 text-center min-h-screen flex flex-col justify-center items-center">
              <HeartbeatEffect color="#2233ff" />
              <div className="mt-16 font-body-main text-[20px] md:text-[28px] leading-relaxed max-w-4xl opacity-90 space-y-12">
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 2}}>
                  This is the end on earth, I know there were <motion.span animate={{ color: ["#fff", "#2233ff", "#fff"] }} transition={{ duration: 4, repeat: Infinity }}>soooooo manyyy other moments</motion.span>
                </motion.div>
                
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 1.5, duration: 2}}>
                  but to mention them a single website would not be enough,
                </motion.div>

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 3, duration: 2}}>
                  one day would not be enough,
                </motion.div>

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4.5, duration: 2}}>
                  one month would also me not enough,
                </motion.div>

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 6, duration: 3}}>
                  <span className="font-headline-lg text-[#ffcc33] tracking-widest block mb-4">time can never explain</span>
                </motion.div>

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 8, duration: 3}}>
                  how those memories were for us,
                </motion.div>

                <motion.div initial={{opacity:0, scale: 0.95}} whileInView={{opacity:1, scale: 1}} transition={{delay: 10, duration: 4}} className="mt-24">
                  <span className="font-display-hero text-[40px] md:text-[64px] text-primary drop-shadow-[0_0_30px_rgba(34,51,255,0.6)]">
                    the best times in my entire life...!!!!
                  </span>
                </motion.div>
              </div>
            </div>
          ) 
        }
      ],
      memories: [
        { url: "", date: "COLLEGE DAYS", title: "AASHIK", caption: "[PHOTO PLACEHOLDER]" },
        { url: "", date: "COLLEGE DAYS", title: "Lunch Breaks", caption: "[PHOTO PLACEHOLDER]" },
        { url: "", date: "COLLEGE DAYS", title: "The Stairs", caption: "[PHOTO PLACEHOLDER]" },
        { url: "", date: "COLLEGE DAYS", title: "Drive In", caption: "[PHOTO PLACEHOLDER]" }
      ],
      timeline: [
        { date: "COLLEGE", title: "AASHIK discovered", description: "" },
        { date: "COLLEGE", title: "Lunch breaks", description: "" },
        { date: "COLLEGE", title: "Shravan Sir teasing us", description: "" },
        { date: "COLLEGE", title: "Stolen phone prank", description: "" },
        { date: "COLLEGE", title: "Stairs / girlfriend moment", description: "" },
        { date: "COLLEGE", title: "Heels / drive-in memory", description: "" },
        { date: "ALWAYS", title: "All the other memories", description: "" }
      ]
    },"""

with open('app/src/data/story.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

earth_regex = re.compile(r'\{\s*id:\s*"earth".*?nextChapter:\s*"venus".*?\]\s*\},', re.DOTALL)

if earth_regex.search(content):
    new_content = earth_regex.sub(EARTH_CONTENT, content)
    with open('app/src/data/story.jsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully replaced Earth chapter.")
else:
    print("Regex did not match.")
