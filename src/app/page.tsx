import { ArrowRight, ArrowUpRight, Check, Flame, Star, Zap } from "lucide-react";
import Link from "next/link";
import { ByteAvatar } from "@/components/byte-avatar";
import { CertificateCard, CodeEditorDemo, FaqAccordion, LanguagePill, LeaderboardList, LessonModeTabs, RoadmapCard, StreakCalendar } from "@/components/learning-widgets";
import { languages, roadmaps } from "@/lib/catalog";

const faqItems = [
  { question: "Is Code Languages really free?", answer: "Yes. Every core lesson, practice challenge, and playground is free. We believe the ability to build should never sit behind a paywall." },
  { question: "How long does it take to learn to code?", answer: "You can make something useful in your first session. A focused 10 minutes a day adds up quickly; your roadmap shows the milestones, not a made-up finish line." },
  { question: "Is coding hard to learn?", answer: "It can feel unfamiliar at first, but small, hands-on steps make it approachable. Byte and your learning path help you tackle one new idea at a time." },
  { question: "What is the best first language?", answer: "Python is a friendly first pick for general coding. Choose JavaScript if you want to make websites, or HTML if you want to see a page take shape right away." },
  { question: "Do the certificates cost anything?", answer: "Course certificates are included at no cost. Complete the course assessment and your shareable certificate is ready to add to LinkedIn." },
  { question: "Can I learn on my phone?", answer: "Absolutely. Lessons, quizzes, and bite-sized code challenges work on mobile, tablet, and desktop. You can pick up where you left off on any screen." },
  { question: "Do I need experience to start?", answer: "No experience needed. Pick a goal in the onboarding quiz and we’ll recommend a first step that meets you where you are." },
];

export default function Home() {
  return (
    <main>
      <section className="studio-hero">
        <div className="page-shell studio-hero-layout">
          <div className="studio-hero-copy">
            <p className="hero-sticker"><Star size={13} fill="currentColor" /> A LITTLE CODE GOES A LONG WAY</p>
            <h1>Learn to code.<br /><em>Make your ideas real.</em></h1>
            <p className="studio-hero-intro">Tiny lessons, hands-on missions, and a helpful little robot in your corner. Start anywhere. Get better every day.</p>
            <div className="hero-actions"><Link className="button button-lime" href="/onboard">Find my first lesson <ArrowRight size={17} /></Link><Link className="text-link" href="/login">I already have an account</Link></div>
            <div className="studio-social-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><p><strong>24,813</strong> curious minds learning today</p><span className="proof-divider" /><p className="rating"><Star size={12} fill="currentColor" /> <strong>4.9</strong></p></div>
            <div className="hero-language-hint"><span>YOUR FIRST LINE COULD BE</span><code>print(&quot;hello, world!&quot;)</code></div>
          </div>
          <div className="studio-stage" aria-label="Byte helps a learner complete a coding mission" role="img">
            <div className="stage-confetti confetti-one">✦</div><div className="stage-confetti confetti-two">✳</div>
            <div className="mission-window"><div className="mission-window-head"><span><i /><i /><i /></span><b>MISSION 01 <em>·</em> PYTHON</b><span className="mission-state"><span /> READY</span></div><div className="mission-title"><span className="mission-badge"><Zap size={13} fill="currentColor" /></span><div><small>YOUR FIRST CHALLENGE</small><strong>Say hello to the world</strong></div></div><div className="mission-code"><div><i>1</i><code><b>print</b>(<strong>&quot;Hello, world!&quot;</strong>)</code></div><div><i>2</i><code className="code-comment"># You’ve got this</code></div><div className="mission-runline"><span /><span>Run your code to see what happens</span></div></div></div>
            <div className="avatar-platform"><div className="byte-speech">Your turn! <span>↙</span></div><ByteAvatar size="large" /></div>
            <div className="stage-xp"><span><Zap size={13} fill="currentColor" /></span><strong>+20 XP</strong><small>FIRST WIN</small></div>
            <div className="stage-streak"><Flame size={15} fill="currentColor" /><span><strong>Day 1</strong><small>streak started</small></span></div>
          </div>
        </div>
        <div className="page-shell studio-hero-bottom"><span>{languages.length} LANGUAGES & TOOLS</span><span className="hero-bottom-rule" /><span>ONE SMALL WIN AT A TIME</span><Link href="/languages">Explore paths <ArrowRight size={13} /></Link></div>
      </section>

      <section className="language-strip section-pad"><div className="page-shell"><div className="strip-heading"><p className="eyebrow">A WORLD OF CODE, ONE STEP AT A TIME</p><Link href="/languages">Explore all {languages.length} <ArrowUpRight size={14} /></Link></div><div className="language-marquee" aria-label="Explore coding languages"><div className="language-track">{languages.map((language) => <LanguagePill key={language.slug} language={language} />)}{languages.map((language) => <LanguagePill key={`${language.slug}-repeat`} language={language} ariaHidden />)}</div></div></div></section>

      <section className="section-pad roadmap-section"><div className="page-shell"><div className="section-heading"><div><p className="eyebrow">A MAP FOR WHERE YOU WANT TO GO</p><h2>Learn for a job,<br /><em>not just a language.</em></h2></div><p className="section-intro">Pick a path that fits your ambition. We’ll break the big goal into small, satisfying steps.</p></div><div className="roadmap-grid">{roadmaps.map((roadmap, index) => <RoadmapCard key={roadmap.title} roadmap={roadmap} index={index} />)}</div><div className="catalog-cta"><Link href="/languages">Browse the full catalog <ArrowRight size={16} /></Link><span>{languages.length} languages, tools & frameworks</span></div></div></section>

      <section className="section-pad certificate-section"><div className="page-shell certificate-layout"><div className="certificate-copy"><p className="eyebrow">A LITTLE PROOF GOES A LONG WAY</p><h2>Skills you can show.<br /><em>Not just say.</em></h2><p>Finish a course, pass the assessment, and take a verified certificate with you. Yours to share, always free.</p><Link className="button button-outline" href="/certifications">Explore certificates <ArrowRight size={16} /></Link><div className="certificate-note"><span className="note-check"><Check size={13} /></span> Shareable on LinkedIn & your portfolio</div></div><CertificateCard /></div></section>

      <section className="section-pad learn-doing-section"><div className="page-shell"><div className="section-heading"><div><p className="eyebrow">LESS TALK. MORE MAKING.</p><h2>Learn by <em>doing.</em></h2></div><p className="section-intro">Real code, right in your browser. Make a change, run it, see what happens. That’s where it clicks.</p></div><CodeEditorDemo /></div></section>

      <section className="section-pad streak-section"><div className="page-shell streak-layout"><div><p className="eyebrow">TINY HABITS. BIG MOMENTUM.</p><h2>Build your <em>streak.</em></h2><p className="streak-description">A few minutes a day keeps your skills moving. Miss a day? Byte’s got your back.</p><div className="streak-stats"><div className="streak-count"><Flame size={25} fill="currentColor" /><strong>7</strong><span>day streak</span></div><div className="streak-divider" /><div className="freeze-count"><span>❄</span><strong>2</strong><span>freeze tokens</span></div></div><button className="button button-dark" type="button">Try double or nothing <ArrowRight size={15} /></button></div><StreakCalendar /></div></section>

      <section className="section-pad modes-section"><div className="page-shell"><div className="section-heading"><div><p className="eyebrow">FIND YOUR RHYTHM</p><h2>Every way <em>to learn.</em></h2></div><p className="section-intro">Same lesson, different modes. Switch it up when you need a fresh angle.</p></div><LessonModeTabs /></div></section>

      <section className="section-pad league-section"><div className="page-shell league-layout"><div><p className="eyebrow">A LITTLE FRIENDLY COMPETITION</p><h2>Climb the <em>leagues.</em></h2><p className="section-intro">Earn XP from every lesson. Find your people, celebrate progress, and see how far a week can take you.</p><Link className="text-link link-lime" href="/onboard">Find your place <ArrowRight size={15} /></Link></div><LeaderboardList /></div></section>

      <section className="section-pad faq-section"><div className="page-shell faq-layout"><div><p className="eyebrow">GOOD QUESTIONS, HONEST ANSWERS</p><h2>Curious?<br /><em>Good.</em></h2><p>Everything else you need to know before you start.</p></div><FaqAccordion items={faqItems} /></div></section>

      <section className="final-cta"><div className="page-shell final-cta-content"><div><p className="eyebrow">YOUR FIRST LINE OF CODE IS WAITING</p><h2>Ready when <em>you are.</em></h2></div><Link className="button button-navy" href="/onboard">Start learning free <ArrowRight size={17} /></Link><div className="cta-byte" aria-hidden="true"><span /><i /><i /></div></div></section>
    </main>
  );
}