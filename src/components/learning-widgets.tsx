"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Code2, Flame, Headphones, HelpCircle, MessageCircle, Play, Search, Terminal, Trophy, X } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
import { css } from "@codemirror/lang-css";
import type { Language, CatalogCategory } from "@/lib/catalog";
import { getFileExtension, getStarterCode } from "@/lib/catalog";
import { completeLesson } from "@/lib/progress";

type Roadmap = { title: string; icon: string; color: string; steps: string[] };

export function LanguagePill({ language, ariaHidden = false }: { language: Language; ariaHidden?: boolean }) {
  return <Link className="language-pill" href={`/languages/${language.slug}`} tabIndex={ariaHidden ? -1 : undefined} aria-hidden={ariaHidden} style={{ "--language-color": language.color } as React.CSSProperties}><span className="language-mark">{language.mark}</span><span>{language.name}</span></Link>;
}

export function RoadmapCard({ roadmap, index }: { roadmap: Roadmap; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return <article className={`roadmap-card roadmap-${roadmap.color} ${expanded ? "is-expanded" : ""}`} style={{ "--card-index": index } as React.CSSProperties}>
    <button className="roadmap-toggle" type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}><span className="roadmap-icon">{roadmap.icon}</span><span className="roadmap-card-title">{roadmap.title}</span><span className="roadmap-arrow"><ChevronDown size={16} /></span></button>
    <div className="roadmap-meta"><span>{roadmap.steps.length} steps</span><span>Beginner friendly</span></div>
    {expanded && <ol className="roadmap-steps">{roadmap.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
    <Link href="/onboard" className="roadmap-link">Explore path <ArrowRight size={14} /></Link>
  </article>;
}

export function CertificateCard() {
  return <article className="certificate-card"><div className="certificate-inner"><div className="certificate-top"><span className="certificate-seal"><Code2 size={20} /></span><span>CODE LANGUAGES<br /><small>LEARNING CERTIFICATE</small></span><span className="certificate-laurel">✳</span></div><div className="certificate-title">Certificate of completion</div><p className="certificate-label">This certifies that</p><div className="certificate-name">Jordan Rivera</div><p className="certificate-course">has successfully completed the course</p><strong className="certificate-course-name">Python Foundations</strong><div className="certificate-bottom"><span>SEPTEMBER 27, 2026</span><span className="certificate-sign">Byte <small>Learning guide</small></span></div></div><button className="certificate-share" type="button" onClick={(event) => { event.currentTarget.textContent = "Added to your share list ✓"; }}>Add to LinkedIn <ArrowRight size={14} /></button></article>;
}

export function CodeEditorDemo() {
  const [activeTab, setActiveTab] = useState("Code");
  const [ran, setRan] = useState(false);
  const [source, setSource] = useState('name = "Ada"\nprint(f"Hello, {name}!")\n\n# Your turn: greet a friend');
  const tabs = ["Code", "SQL", "Web", "AI Chat", "Terminal"];
  const tabSource: Record<string, string> = { Code: 'name = "Ada"\nprint(f"Hello, {name}!")\n\n# Your turn: greet a friend', SQL: "SELECT name, language\nFROM learners\nWHERE active = TRUE;", Web: "<main>\n  <h1>Hello, Ada!</h1>\n  <p>Welcome to the web.</p>\n</main>", "AI Chat": "Ask Byte about this lesson...", Terminal: "$ python hello.py\nHello, Ada!" };
  const changeTab = (tab: string) => { setActiveTab(tab); setSource(tabSource[tab]); setRan(false); };
  return <div className="editor-demo"><div className="editor-demo-top"><div className="editor-tabs" role="tablist" aria-label="Practice modes">{tabs.map((tab) => <button key={tab} role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "active" : ""} onClick={() => changeTab(tab)} type="button">{tab === "Terminal" && <Terminal size={13} />}{tab === "AI Chat" && <MessageCircle size={13} />}{tab}{tab === "AI Chat" && <span className="ai-tag">AI</span>}</button>)}</div><span className="editor-saved"><span /> Saved</span></div>
    <div className="editor-workspace"><div className="editor-sidebar"><span className="editor-side-label">FILES</span><button className="file-active" type="button"><Code2 size={13} /> {activeTab === "SQL" ? "query.sql" : activeTab === "Web" ? "index.html" : "hello.py"}</button><span className="editor-side-label side-lower">LEARN</span><p>Make a friendly greeting</p><div className="lesson-progress"><span /></div><small>2 of 5 steps</small></div>
      <div className="editor-main"><div className="editor-filebar"><span>{activeTab === "SQL" ? "query.sql" : activeTab === "Web" ? "index.html" : "hello.py"}</span><button className="run-button" onClick={() => setRan(true)} type="button"><Play size={13} fill="currentColor" /> Run</button></div><div className="demo-code-area"><CodeMirror value={source} onChange={setSource} height="190px" theme={oneDark} extensions={activeTab === "SQL" ? [sql()] : activeTab === "Web" ? [html()] : [python()]} basicSetup={{ lineNumbers: true, foldGutter: false }} aria-label="Editable code example" /></div><div className="console-panel"><div className="console-heading"><span>OUTPUT</span><span>{ran ? "JUST NOW" : "READY"}</span></div><pre>{ran ? (activeTab === "SQL" ? "greeting             |\nHello, Ada!          |\n\nQuery returned 1 row." : activeTab === "Web" ? "Preview rendered successfully." : "Hello, Ada!") : "Run your code to see what happens..."}</pre><div className="test-result"><span className={ran ? "test-passed" : "test-pending"}>{ran ? <Check size={12} /> : <span />}</span>{ran ? "Output matches expected result" : "Test case: output includes a greeting"}<b>{ran ? "PASSED" : "WAITING"}</b></div></div></div></div>
    <div className="editor-bottom"><span><span className="status-dot" /> Python 3.12</span><span>UTF-8</span><span>Ln 1, Col 1</span></div></div>;
}

export function StreakCalendar() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const values = [2, 3, 1, 4, 2, 0, 0, 3, 2, 4, 1, 3, 0, 0, 4, 2, 3, 1, 4, 2, 0, 0, 3, 4, 2, 3, 4, 1, 0, 0, 2, 3, 4, 2, 3];
  return <div className="streak-calendar"><div className="calendar-header"><div><strong>September 2026</strong><span>YOU’RE ON A ROLL</span></div><div className="calendar-arrows"><button type="button" aria-label="Previous month"><ChevronLeft size={16} /></button><button type="button" aria-label="Next month"><ChevronRight size={16} /></button></div></div><div className="calendar-grid">{days.map((day, index) => <span key={`${day}-${index}`} className="calendar-day">{day}</span>)}{values.map((value, index) => <span key={index} className={`calendar-cell ${value ? `activity-${value}` : ""} ${index === 25 ? "today" : ""}`} aria-label={`September ${index + 1}: ${value ? "lesson completed" : "no lesson"}`}>{index + 1}</span>)}</div><div className="calendar-legend"><span><i /> Less</span><span className="legend-scale"><i /><i /><i /><i /></span><span>More</span><span className="legend-streak"><Flame size={13} fill="currentColor" /> 7 day streak</span></div></div>;
}

const modes = [
  { name: "Audio", icon: Headphones, label: "Hear it click.", content: "Listen to a 90-second walkthrough of variables, then follow along at your own pace.", action: "▶  1:32  ·  Variables, out loud" },
  { name: "Quiz", icon: HelpCircle, label: "Check what stuck.", content: "A quick question makes the idea yours. No grades, just a useful nudge in the right direction.", action: "What does a variable do?   →" },
  { name: "Ask AI", icon: MessageCircle, label: "Get unstuck, kindly.", content: "Ask Byte a question about the lesson. You’ll get a hint that helps you find the answer yourself.", action: "Why use a variable here?   →" },
  { name: "References", icon: Code2, label: "Keep the good bits close.", content: "A clear, skimmable reference for the syntax you just used, ready whenever you need a refresher.", action: "name = value     # assign a value" },
];

export function LessonModeTabs() {
  const [active, setActive] = useState("Audio");
  const selected = modes.find((mode) => mode.name === active)!;
  const Icon = selected.icon;
  return <div className="lesson-modes"><div className="mode-tabs" role="tablist" aria-label="Lesson format">{modes.map((mode) => <button className={active === mode.name ? "active" : ""} role="tab" aria-selected={active === mode.name} type="button" key={mode.name} onClick={() => setActive(mode.name)}><mode.icon size={15} /> {mode.name}</button>)}</div><div className="mode-content" role="tabpanel"><div className={`mode-illustration mode-${active.toLowerCase().replace(" ", "-")}`}><Icon size={28} /><span className="mode-orbit" /></div><div className="mode-copy"><span className="mode-kicker">SAME LESSON · DIFFERENT FEEL</span><h3>{selected.label}</h3><p>{selected.content}</p><button className="mode-action" type="button" onClick={() => setActive(active === "Audio" ? "Quiz" : "Audio")}>{selected.action} <ArrowRight size={13} /></button></div><div className="mode-count"><span>01</span><span>/ 04</span></div></div></div>;
}

export function LeaderboardList() {
  const [period, setPeriod] = useState("This week");
  const ranks = [{ name: "Maya Chen", handle: "@mayacodes", xp: "2,480", avatar: "M", color: "#e7a164" }, { name: "Leo Park", handle: "@leopark", xp: "2,210", avatar: "L", color: "#7a9bd0" }, { name: "You", handle: "@newcoder", xp: "1,840", avatar: "Y", color: "#95bf77" }, { name: "Sam Rivera", handle: "@samloops", xp: "1,620", avatar: "S", color: "#bd83ac" }];
  return <div className="leaderboard"><div className="leaderboard-header"><div><span className="league-emblem"><Trophy size={16} /></span><div><strong>Bronze League</strong><small>Ends in 3 days</small></div></div><button type="button" aria-label="Leaderboard time period" onClick={() => setPeriod(period === "This week" ? "Last week" : "This week")}>{period} <ChevronDown size={13} /></button></div><div className="league-progress"><span style={{ width: "62%" }} /></div><div className="league-progress-caption"><span>Promotion zone</span><span>Top 10 advance</span></div><ol>{ranks.map((rank, index) => <li key={rank.name} className={rank.name === "You" ? "rank-you" : ""}><span className="rank-number">{index + 1}</span><span className="rank-avatar" style={{ "--avatar-color": rank.color } as React.CSSProperties}>{rank.avatar}</span><span className="rank-name">{rank.name}<small>{rank.handle}</small></span><strong>{rank.xp} <small>XP</small></strong></li>)}</ol><Link href="/onboard">View all learners <ArrowRight size={13} /></Link></div>;
}

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{items.map((item, index) => <div className={`faq-item ${open === index ? "open" : ""}`} key={item.question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{item.question}</span><span className="faq-icon">{open === index ? <X size={15} /> : <ArrowDown size={15} />}</span></button>{open === index && <p>{item.answer}</p>}</div>)}</div>;
}

export function CatalogBrowser({ languages }: { languages: Language[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", "Languages", "Frameworks", "Tools", "DevOps"];
  const results = useMemo(() => languages.filter((language) => (category === "All" || language.category === category) && `${language.name} ${language.description}`.toLowerCase().includes(query.toLowerCase())), [languages, category, query]);
  return <><div className="catalog-controls"><label className="catalog-search"><Search size={17} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search languages, tools..." aria-label="Search the catalog" />{query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={14} /></button>}</label><div className="category-filters" role="group" aria-label="Filter by category">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "active" : ""} type="button">{item}</button>)}</div></div><p className="catalog-count">Showing <strong>{results.length}</strong> of {languages.length} learning paths</p><div className="catalog-grid">{results.map((language) => <Link href={`/languages/${language.slug}`} key={language.slug} className="catalog-card"><span className="catalog-mark" style={{ "--language-color": language.color } as React.CSSProperties}>{language.mark}</span><span className="catalog-info"><strong>{language.name}</strong><small>{language.description}</small><span className="catalog-tags"><i>{language.category}</i><i>{language.level}</i></span></span><ArrowRight size={16} /></Link>)}{results.length === 0 && <div className="catalog-empty"><Search size={20} /><strong>No matches yet</strong><span>Try a different name or category.</span></div>}</div></>;
}

export function Playground({ language, lessonId = "first-run", lessonTitle = `${language.name} first successful run`, onLessonComplete }: { language: Language; lessonId?: string; lessonTitle?: string; onLessonComplete?: () => void }) {
  const langKey = language.slug;
  const [source, setSource] = useState(() => getStarterCode(language));
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [runnerGeneration, setRunnerGeneration] = useState(0);
  const runnerRef = useRef<HTMLIFrameElement>(null);
  const queuedCode = useRef("");
  const runTimer = useRef<number | null>(null);
  useEffect(() => {
    const receiveOutput = (event: MessageEvent) => {
      if (event.source !== runnerRef.current?.contentWindow || event.data?.type !== "code-output") return;
      if (runTimer.current !== null) window.clearTimeout(runTimer.current);
      const result = event.data as { type: string; output: string; error?: string };
      if (result.error) setOutput(result.error);
      else {
        const completion = completeLesson({ id: `lesson:${langKey}:${lessonId}`, languageSlug: langKey, title: lessonTitle, type: "challenge", xpReward: 20 });
        setOutput(`${result.output || "Program finished with no output."}${completion.earnedXp ? `\n\n+${completion.earnedXp} XP earned` : "\n\nLesson completed"}`);
        onLessonComplete?.();
      }
      setRunning(false);
    };
    window.addEventListener("message", receiveOutput);
    return () => {
      window.removeEventListener("message", receiveOutput);
      if (runTimer.current !== null) window.clearTimeout(runTimer.current);
    };
  }, [langKey, language.name, lessonId, lessonTitle, onLessonComplete]);
  const runnerDocument = `<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; connect-src 'none'; img-src 'none'; style-src 'unsafe-inline'"><script>addEventListener('message',function(e){if(!e.data||e.data.type!=='execute')return;var lines=[];var logger=function(){lines.push(Array.from(arguments).map(function(v){try{return typeof v==='object'?JSON.stringify(v):String(v)}catch{return String(v)}}).join(' '))};try{new Function('console',e.data.code)({log:logger,warn:logger,error:logger,info:logger,table:logger});parent.postMessage({type:'code-output',output:lines.join('\\n')},'*')}catch(error){parent.postMessage({type:'code-output',error:error.name+': '+error.message},'*')}})</script>`;
  const loadRunner = () => {
    runnerRef.current?.contentWindow?.postMessage({ type: "execute", code: queuedCode.current }, "*");
    runTimer.current = window.setTimeout(() => {
      setOutput("Execution stopped after 2.5 seconds.");
      setRunning(false);
      setRunnerGeneration((generation) => generation + 1);
    }, 2500);
  };
  const runCode = () => {
    setRunning(true);
    if (langKey === "javascript") {
      queuedCode.current = source;
      setOutput("Running in an isolated browser sandbox...");
      setRunnerGeneration((generation) => generation + 1);
    } else if (langKey === "html") { setOutput("HTML preview updated. Open the Preview tab to inspect the result."); }
    else if (langKey === "css") { setOutput("CSS preview updated. Open the Preview tab to inspect the result."); }
    else { setOutput(`${language.name} editor is ready with a language-specific example. Its execution runtime is not bundled yet.`); }
    if (langKey !== "javascript") window.setTimeout(() => setRunning(false), 160);
  };
  const extensions = langKey === "python" ? [python()] : langKey === "sql" ? [sql()] : langKey === "html" ? [html()] : langKey === "css" ? [css()] : ["javascript", "typescript", "react", "nextjs"].includes(langKey) ? [javascript({ jsx: langKey === "react" || langKey === "nextjs", typescript: langKey === "typescript" || langKey === "nextjs" })] : [];
  const previewMarkup = langKey === "css" ? `<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'"><style>${source}</style><body><h1 class="greeting">Hello, Ada!</h1><p>Edit the CSS to style this preview.</p></body>` : `<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'"><body>${source}`;
  const previewAvailable = langKey === "html" || langKey === "css";
  return <div className="playground"><div className="playground-top"><span><i className="playground-live" /> {language.name} Playground</span><div><button className="playground-clear" type="button" onClick={() => { setSource(getStarterCode(language)); setOutput(""); }}>Reset example</button><button className="run-button playground-run" type="button" onClick={runCode} disabled={running}><Play size={14} fill="currentColor" /> {running ? "Running" : "Run code"}</button></div></div><div className="playground-panes"><section className="playground-editor"><div className="playground-file"><Code2 size={14} /> main.{getFileExtension(language)}</div><CodeMirror value={source} onChange={setSource} height="min(57vh, 560px)" theme={oneDark} extensions={extensions} basicSetup={{ lineNumbers: true, foldGutter: true }} aria-label={`${language.name} code editor`} /></section><section className="playground-output"><div className="output-tabs"><button className={!showPreview ? "selected" : ""} type="button" onClick={() => setShowPreview(false)}>Console</button><button className={showPreview ? "selected" : ""} type="button" onClick={() => setShowPreview(true)} disabled={!previewAvailable}>Preview</button></div>{showPreview && previewAvailable ? <iframe className="html-preview" title={`${language.name} code preview`} sandbox="" srcDoc={previewMarkup} /> : <pre>{output || (langKey === "javascript" ? "Run JavaScript to see your output here." : `Starter example for ${language.name}. Run support is not bundled for this runtime yet.`)}</pre>}<span className="playground-note">{langKey === "javascript" ? "JavaScript runs in an isolated sandbox with network access disabled." : previewAvailable ? "Preview runs in an isolated frame with scripts and network access disabled." : `CodeMirror editor for ${language.name}. Runtime support is coming later.`}</span></section></div><div className="playground-foot"><span>{langKey === "javascript" ? "Isolated JavaScript sandbox" : previewAvailable ? "Sandboxed preview" : "Language-specific starter editor"}</span><span>Unsaved draft</span></div><iframe key={runnerGeneration} ref={runnerRef} title="Isolated JavaScript runner" sandbox="allow-scripts" srcDoc={runnerDocument} onLoad={langKey === "javascript" && running ? loadRunner : undefined} hidden /></div>;
}

export function OnboardingQuiz() {
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("");
  const recommendation = goal === "web" ? "javascript" : goal === "data" ? "python" : goal === "webpage" ? "html" : goal === "apps" ? "react" : "python";
  return <div className="quiz-wrap"><div className="quiz-progress"><span style={{ width: goal && experience ? "100%" : goal ? "66%" : "33%" }} /></div><p className="eyebrow">LET’S FIND YOUR FIRST STEP</p><h1>A path that fits <em>you.</em></h1><fieldset><legend>What would you love to make?</legend><div className="quiz-options">{[["web", "A website or web app"], ["webpage", "My first webpage"], ["data", "Something with data"], ["apps", "Interactive user interfaces"]].map(([value, label]) => <button className={goal === value ? "selected" : ""} type="button" key={value} onClick={() => setGoal(value)}>{label}{goal === value && <Check size={15} />}</button>)}</div></fieldset><fieldset><legend>How much coding have you done?</legend><div className="quiz-options">{[["none", "Brand new"], ["some", "A little bit"], ["lots", "I’ve built things before"]].map(([value, label]) => <button className={experience === value ? "selected" : ""} type="button" key={value} onClick={() => setExperience(value)}>{label}{experience === value && <Check size={15} />}</button>)}</div></fieldset>{goal && experience && <div className="quiz-recommendation"><span className="quiz-badge">YOUR FIRST PATH</span><h2>{recommendation === "python" ? "Python" : recommendation === "html" ? "HTML" : recommendation === "react" ? "React" : "JavaScript"} Foundations</h2><p>A hands-on start, picked for what you want to build.</p><Link href={`/languages/${recommendation}`} className="button button-lime">Start my path <ArrowRight size={16} /></Link></div>}</div>;
}

export function LoginForm() {
  const [sent, setSent] = useState(false);
  return <form className="login-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Password<input required minLength={8} type="password" placeholder="At least 8 characters" /></label><button className="button button-lime" type="submit">Sign in <ArrowRight size={16} /></button>{sent && <p className="form-feedback" role="status">Demo sign-in received. Account authentication will be connected in a future release.</p>}<p className="form-legal">By continuing, you agree to our <Link href="/">Terms</Link> and <Link href="/">Privacy Policy</Link>.</p></form>;
}

export function CertificateGrid({ languages }: { languages: Language[] }) {
  return <div className="cert-grid">{languages.slice(0, 8).map((language, index) => <article className="cert-tile" key={language.slug}><div className="cert-tile-top"><span style={{ "--language-color": language.color } as React.CSSProperties}>{language.mark}</span><small>{index === 0 ? "IN PROGRESS" : "START ANYTIME"}</small></div><h3>{language.name} {index === 0 ? "Foundations" : "Essentials"}</h3><p>Build a strong foundation through hands-on lessons and a final skills check.</p><div className="cert-tile-bottom"><span>{index === 0 ? "2 of 8 lessons" : `${language.lessons.length} lessons`}</span><Link href={`/languages/${language.slug}`}>{index === 0 ? "Continue" : "Explore"} <ArrowRight size={13} /></Link></div>{index === 0 && <div className="cert-progress"><span /></div>}</article>)}</div>;
}

export function DocsSidebar({ languages, active }: { languages: Language[]; active?: string }) {
  const groups: { label: CatalogCategory; slugs: string[] }[] = [{ label: "Languages", slugs: ["python", "javascript", "typescript", "html", "css", "java", "sql", "go", "rust", "swift", "bash", "julia", "solidity", "scala"] }, { label: "Frameworks", slugs: ["react"] }];
  return <aside className="docs-sidebar"><Link href="/docs" className="docs-overview"><Code2 size={15} /> Documentation home</Link>{groups.map((group) => <div className="docs-side-group" key={group.label}><h3>{group.label}</h3>{group.slugs.map((slug) => { const language = languages.find((item) => item.slug === slug)!; return <Link key={slug} href={`/docs/${slug}`} className={active === slug ? "active" : ""}>{language.name}</Link>; })}</div>)}</aside>;
}