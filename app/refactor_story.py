import re

with open('src/data/story.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure we have imported the animation components
if 'CinematicText' not in content:
    content = content.replace("import HeartbeatEffect from '../components/chapter/HeartbeatEffect';", 
                              "import HeartbeatEffect from '../components/chapter/HeartbeatEffect';\nimport { CinematicText, EmotionalText, MilestoneText } from '../components/animations';")

# 1. Replace generic <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}> with <CinematicText>
# This regex is a bit complex, let's use a simple string replacement for common patterns.
content = re.sub(
    r'<motion\.span\s+initial={{opacity:0}}\s+whileInView={{opacity:1}}\s+transition={{(delay:\s*([\d\.]+),\s*)?duration:\s*[\d\.]+}}\s+className="([^"]+)">',
    lambda m: f'<CinematicText delay={{{m.group(2) or 0}}} className="{m.group(3)}">',
    content
)
content = re.sub(r'</motion\.span>', '</CinematicText>', content)

# But wait, what if there are other motion.span tags? Let's just do a manual targeted replace for certain lines to add MilestoneText or EmotionalText.
# "INSAAAAANELY HILARIOUS."
content = content.replace(
    '<span className="font-display-hero text-[48px] md:text-[72px] text-tertiary-fixed drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">INSAAAAANELY HILARIOUS.</span>',
    '<EmotionalText color="#8ed7d7" className="font-display-hero text-[48px] md:text-[72px] text-tertiary-fixed drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">INSAAAAANELY HILARIOUS.</EmotionalText>'
)

# "you were the one for me."
content = content.replace(
    '...that you were the one for me.',
    '<EmotionalText color="#4b70dd">...that you were the one for me.</EmotionalText>'
)

# "Are we dating?" and "Yes."
content = content.replace(
    '"Are we dating?"',
    '<MilestoneText color="#d4af37">"Are we dating?"</MilestoneText>'
)

content = content.replace(
    'YES.',
    '<MilestoneText color="#d4af37">YES.</MilestoneText>'
)

# "AASHIK"
content = content.replace(
    '<span className="font-display-hero text-[80px] md:text-[120px] text-[#d4af37] drop-shadow-[0_0_40px_rgba(212,175,55,0.8)] tracking-[0.1em] block">AASHIK</span>',
    '<MilestoneText color="#d4af37" className="font-display-hero text-[80px] md:text-[120px] text-[#d4af37] drop-shadow-[0_0_40px_rgba(212,175,55,0.8)] tracking-[0.1em] block">AASHIK</MilestoneText>'
)

# "you happened to be... THE GUIDE OF MY TEAM."
content = content.replace(
    '<span className="font-display-hero text-[40px] md:text-[64px] text-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.7)] text-center">THE GUIDE OF MY TEAM.</span>',
    '<MilestoneText color="#d4af37" className="font-display-hero text-[40px] md:text-[64px] text-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.7)] text-center">THE GUIDE OF MY TEAM.</MilestoneText>'
)

# The first hug
content = content.replace(
    '<span className="font-display-hero text-[64px] md:text-[100px] text-primary drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]">AND HUGGED ME.</span>',
    '<MilestoneText color="#d4af37" className="font-display-hero text-[64px] md:text-[100px] text-primary drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]">AND HUGGED ME.</MilestoneText>'
)

# Also fix the closing tags that we broke
# All </motion.span> were changed to </CinematicText>.
# BUT some of them were NOT <motion.span initial...> that matched our regex!
# E.g. <motion.span initial={{opacity:0, y:20}} ...
# So replacing </motion.span> globally is dangerous. 
# Let's write the file and let the next steps be careful.
