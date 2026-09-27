import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            import { ArrowDown, ArrowRight, ArrowUpRight, Check, Flame } from "lucide-react";
            import Link from "next/link";
            import { FaqAccordion, LessonModeTabs, RoadmapCard, StreakCalendar, CertificateCard, LanguagePill, CodeEditorDemo, LeaderboardList } from "@/components/learning-widgets";
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
                  <section className="hero-wrap">
                    <div className="hero-grid page-shell">
                      <div className="hero-copy">
                        <p className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</p>
                        <h1>The free, fun way <em>to learn to code.</em></h1>
                        <p className="hero-subtitle">Build real skills by building real things. Little lessons, big momentum, and a friendly Byte in your corner.</p>
                        <div className="hero-actions"><Link className="button button-lime" href="/onboard">Get started <ArrowRight size={17} /></Link><Link className="text-link" href="/login">I already have an account</Link></div>
                        <div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><p><strong>24,813</strong> learners coding today</p><span className="proof-divider" /><p className="rating">★★★★★ <strong>4.9</strong></p></div>
                        <div className="store-row"><span><span className="store-symbol">◉</span> App Store <b>4.9</b></span><span><span className="store-symbol">▶</span> Google Play <b>4.8</b></span></div>
                      </div>
                      <div className="hero-art" aria-label="Byte, your coding companion" role="img">
                        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
                        <div className="hero-terminal"><div className="terminal-top"><span /><span /><span /><b>first-program.py</b></div><div className="terminal-code"><i>01</i> <span className="code-purple">print</span><span>(</span><span className="code-yellow">&quot;hello, future&quot;</span><span>)</span><br /><i>02</i><br /><i>03</i> <span className="code-green">&gt;&gt;&gt;</span> <span className="code-yellow">hello, future</span></div><div className="terminal-success"><Check size={13} /> all tests passed <span>+20 XP</span></div></div>
                        <div className="byte-figure"><div className="byte-shine" /><div className="byte-eyes"><i /><i /></div><div className="byte-smile" /><div className="byte-pixel pixel-a" /><div className="byte-pixel pixel-b" /></div>
                        <div className="float-label label-streak"><Flame size={14} fill="currentColor" /> 7 day streak</div><div className="float-label label-level">✦ LEVEL UP!</div><div className="float-spark spark-a">✳</div><div className="float-spark spark-b">✦</div>
                      </div>
                    </div>
                    <div className="hero-bottom page-shell"><span>START WITH WHAT SPARKS YOU</span><ArrowDown size={14} /><span className="hero-scroll">SCROLL TO EXPLORE</span></div>
                  </section>

                  <section className="language-strip section-pad"><div className="page-shell"><div className="strip-heading"><p className="eyebrow">A WORLD OF CODE, ONE STEP AT A TIME</p><Link href="/languages">Explore all 27 <ArrowUpRight size={14} /></Link></div><div className="language-marquee" aria-label="Explore coding languages"><div className="language-track">{languages.map((language) => <LanguagePill key={language.slug} language={language} />)}{languages.map((language) => <LanguagePill key={`${language.slug}-repeat`} language={language} ariaHidden />)}</div></div></div></section>

                  <section className="section-pad roadmap-section"><div className="page-shell"><div className="section-heading"><div><p className="eyebrow">A MAP FOR WHERE YOU WANT TO GO</p><h2>Learn for a job,<br /><em>not just a language.</em></h2></div><p className="section-intro">Pick a path that fits your ambition. We’ll break the big goal into small, satisfying steps.</p></div><div className="roadmap-grid">{roadmaps.map((roadmap, index) => <RoadmapCard key={roadmap.title} roadmap={roadmap} index={index} />)}</div><div className="catalog-cta"><Link href="/languages">Browse the full catalog <ArrowRight size={16} /></Link><span>27 languages, tools & frameworks</span></div></div></section>

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
