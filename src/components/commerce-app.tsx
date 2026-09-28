"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { ArrowRight, BadgeCheck, BarChart3, BookOpen, Check, ChevronLeft, CircleDollarSign, Compass, Lightbulb, Menu, Package, Plus, Send, ShoppingBag, Sparkles, Store, Target, TrendingUp, X } from "lucide-react";
import { courses, launchTasks, type CommerceCourse } from "@/lib/commerce-data";
import { getCommerceSnapshot, getServerCommerceSnapshot, parseCommerceState, saveCommerceState, subscribeCommerceState, type CampaignDraft, type ProductIdea } from "@/lib/commerce-state";

const navigation = [
  { label: "Overview", href: "/", icon: BarChart3 },
  { label: "Academy", href: "/academy", icon: BookOpen },
  { label: "AI coach", href: "/coach", icon: Sparkles },
  { label: "Store simulator", href: "/simulator", icon: Compass },
  { label: "Product lab", href: "/product-lab", icon: Package },
  { label: "Store launch", href: "/store-launch", icon: Store },
  { label: "Marketing", href: "/marketing", icon: TrendingUp },
];

function StoreMark() {
  return <span className="storecraft-mark" aria-hidden="true"><span /><span /><span /></span>;
}

export function CommerceShell({ children, activePath }: { children: React.ReactNode; activePath: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="commerce-app">
    <header className="commerce-topbar">
      <Link href="/" className="commerce-brand" aria-label="Storecraft home"><StoreMark /><span>storecraft<span className="brand-dot">.</span></span></Link>
      <div className="topbar-workspace"><span className="workspace-indicator" /> My learning workspace <span className="workspace-plan">FREE PLAN</span></div>
      <div className="topbar-actions"><Link href="/store-launch" className="topbar-connect"><span className="connect-dot" /> Connect Shopify <ArrowRight size={13} /></Link><button className="topbar-avatar" type="button" aria-label="Open profile">SC</button><button className="topbar-menu" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button></div>
    </header>
    <div className="commerce-frame">
      <aside className={`commerce-sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-label">WORKSPACE</div>
        <nav aria-label="Workspace navigation">{navigation.map((item) => { const Icon = item.icon; return <Link key={item.href} href={item.href} className={activePath === item.href ? "active" : ""} onClick={() => setMenuOpen(false)}><Icon size={16} /><span>{item.label}</span>{item.label === "AI coach" && <span className="nav-new">NEW</span>}</Link>; })}</nav>
        <div className="sidebar-divider" />
        <div className="sidebar-label">YOUR COURSES</div>
        <div className="sidebar-courses">{courses.slice(0, 4).map((course) => <Link key={course.slug} href={`/academy/${course.slug}`} className="sidebar-course"><span className={`course-mini-mark ${course.accent}`}>{course.title.slice(0, 1)}</span><span>{course.title}</span></Link>)}</div>
        <div className="sidebar-bottom"><div className="sidebar-help-mark"><Lightbulb size={15} /></div><div><strong>Need a hand?</strong><span>Ask the commerce coach</span></div><Link href="/coach" aria-label="Open commerce coach"><ArrowRight size={14} /></Link></div>
      </aside>
      <main className="commerce-main">{children}<footer className="commerce-foot"><span>STORECRAFT LEARNING WORKSPACE</span><span>Education only · Verify platform, tax, and consumer rules for your region.</span></footer></main>
    </div>
  </div>;
}

function useCommerceState() {
  const snapshot = useSyncExternalStore(subscribeCommerceState, getCommerceSnapshot, getServerCommerceSnapshot);
  return parseCommerceState(snapshot);
}

function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="page-heading"><div><p className="page-eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}

function StatusTag({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "orange" | "blue" }) {
  return <span className={`status-tag ${tone}`}><i />{children}</span>;
}

export function OverviewPage() {
  const state = useCommerceState();
  const checkedTasks = state.launchChecks.length;
  const courseProgress = state.completedSteps.length;
  const nextCourse = courses.find((course) => course.steps.some((_, index) => !state.completedSteps.includes(`${course.slug}:${index}`))) ?? courses[0];
  const nextStepIndex = nextCourse.steps.findIndex((_, index) => !state.completedSteps.includes(`${nextCourse.slug}:${index}`));
  const products = state.products;
  const avgMargin = products.length ? Math.round(products.reduce((sum, product) => sum + ((product.price - product.cost - product.shipping - product.marketing) / Math.max(product.price, 1)) * 100, 0) / products.length) : null;
  return <div className="overview-page">
    <div className="welcome-strip"><div><span className="welcome-date">MONDAY, SEPTEMBER 28</span><h1>Build a store people <em>come back to.</em></h1><p>Your next smart move is one small step away.</p></div><div className="welcome-actions"><Link className="primary-action" href="/coach"><Sparkles size={15} /> Ask your AI coach</Link><Link className="quiet-action" href={`/academy/${nextCourse.slug}`}><BookOpen size={15} /> Continue learning</Link></div><div className="welcome-decoration" aria-hidden="true"><span /><span /><span /></div></div>
    <div className="metric-grid"><article className="metric-tile"><div className="metric-label">LEARNING PROGRESS <BookOpen size={15} /></div><strong>{courseProgress}<small> steps</small></strong><div className="metric-foot"><span>Across your courses</span><Link href="/academy">View academy <ArrowRight size={12} /></Link></div></article><article className="metric-tile"><div className="metric-label">LAUNCH READINESS <BadgeCheck size={15} /></div><strong>{checkedTasks}<small> / {launchTasks.length}</small></strong><div className="metric-bar"><span style={{ width: `${Math.round(checkedTasks / launchTasks.length * 100)}%` }} /></div><div className="metric-foot"><Link href="/store-launch">Open your checklist <ArrowRight size={12} /></Link></div></article><article className="metric-tile"><div className="metric-label">PRODUCT IDEAS <Package size={15} /></div><strong>{products.length}<small> saved</small></strong><div className="metric-foot"><span>Margin estimate {avgMargin === null ? "—" : `${avgMargin}%`}</span><Link href="/product-lab">Product lab <ArrowRight size={12} /></Link></div></article></div>
    <div className="overview-grid"><section className="panel continue-panel"><div className="panel-heading"><div><span className="panel-kicker">PICK UP WHERE YOU LEFT OFF</span><h2>{nextCourse.title}</h2></div><StatusTag tone="blue">{nextCourse.level}</StatusTag></div><p className="panel-description">{nextCourse.description}</p><div className="next-step-row"><span className="step-token">{String(Math.max(0, nextStepIndex) + 1).padStart(2, "0")}</span><div><small>NEXT LESSON · {nextCourse.steps[Math.max(0, nextStepIndex)]?.duration}</small><strong>{nextCourse.steps[Math.max(0, nextStepIndex)]?.title}</strong></div><Link href={`/academy/${nextCourse.slug}`} className="round-arrow" aria-label="Continue next lesson"><ArrowRight size={16} /></Link></div><div className="panel-progress"><span style={{ width: `${Math.min(100, nextStepIndex / nextCourse.steps.length * 100)}%` }} /></div><div className="panel-footnote">{Math.max(0, nextStepIndex)} of {nextCourse.steps.length} lessons complete <span>{nextCourse.duration} total</span></div></section>
      <section className="panel coach-panel"><div className="coach-panel-head"><span className="coach-icon"><Sparkles size={16} /></span><span className="coach-online"><i /> READY TO HELP</span></div><span className="panel-kicker">YOUR COMMERCE COACH</span><h2>Stuck on your next move?</h2><p>Get a practical suggestion based on your store stage, product notes, or marketing question.</p><Link className="text-action" href="/coach">Open coach <ArrowRight size={14} /></Link></section>
    </div>
    <section className="panel launch-panel"><div className="panel-heading"><div><span className="panel-kicker">YOUR STORE, BUILT ON SOLID GROUND</span><h2>Launch checklist</h2></div><Link className="text-action" href="/store-launch">View all <ArrowRight size={13} /></Link></div><div className="launch-list">{launchTasks.slice(0, 4).map((task) => <div key={task.id} className="launch-row"><span className={`launch-check ${state.launchChecks.includes(task.id) ? "checked" : ""}`}>{state.launchChecks.includes(task.id) && <Check size={12} />}</span><span className="launch-task-title">{task.title}</span><span className="launch-task-detail">{task.detail}</span><span className="launch-task-state">{state.launchChecks.includes(task.id) ? "DONE" : "TO DO"}</span></div>)}</div></section>
    <div className="bottom-grid"><section className="panel path-panel"><div className="panel-heading"><div><span className="panel-kicker">LEARN BY DOING</span><h2>Choose a track</h2></div><Link className="text-action" href="/academy">All courses <ArrowRight size={13} /></Link></div><div className="mini-course-list">{courses.slice(0, 3).map((course) => <Link href={`/academy/${course.slug}`} className="mini-course-row" key={course.slug}><span className={`course-mini-mark ${course.accent}`}>{course.title.slice(0, 1)}</span><span><strong>{course.title}</strong><small>{course.category} · {course.duration}</small></span><ArrowRight size={14} /></Link>)}</div></section><section className="panel product-snapshot"><div className="panel-heading"><div><span className="panel-kicker">IDEAS WITH NUMBERS BEHIND THEM</span><h2>Product lab</h2></div><span className="snapshot-count">{products.length} SAVED</span></div>{products.length ? products.slice(0, 2).map((product) => <div className="product-snapshot-row" key={product.id}><span>{product.name}</span><strong>{Math.round((product.price - product.cost - product.shipping - product.marketing) / Math.max(product.price, 1) * 100)}% margin</strong></div>) : <div className="empty-inline"><span><Package size={17} /></span><p>Your product list is empty.<br /><Link href="/product-lab">Evaluate your first idea <ArrowRight size={12} /></Link></p></div>}</section></div>
  </div>;
}

export function AcademyPage() {
  const state = useCommerceState();
  return <><PageHeading eyebrow="THE COMMERCE ACADEMY" title="Build the skills behind the store." description="Practical courses for store setup, product decisions, operations, marketing, and sustainable growth." /><div className="course-catalog">{courses.map((course) => { const done = course.steps.filter((_, index) => state.completedSteps.includes(`${course.slug}:${index}`)).length; return <Link key={course.slug} href={`/academy/${course.slug}`} className="course-card"><div className={`course-card-art ${course.accent}`}><span className="course-card-icon">{course.title.slice(0, 1)}</span><span className="course-card-category">{course.category}</span></div><div className="course-card-body"><div className="course-card-meta"><StatusTag tone={course.level === "Starter" ? "green" : course.level === "Advanced" ? "orange" : "blue"}>{course.level}</StatusTag><span>{course.duration}</span></div><h2>{course.title}</h2><p>{course.description}</p><div className="course-card-bottom"><span>{done} / {course.steps.length} lessons</span><span className="course-card-link">{done ? "Continue" : "Start course"} <ArrowRight size={13} /></span></div></div></Link>; })}</div></>;
}

const simulatorCriteria = [
  { id: "audience", title: "A clear target customer", detail: "Who is the store specifically built for?" },
  { id: "offer", title: "One focused first offer", detail: "Can a new visitor understand what is being sold?" },
  { id: "delivery", title: "Honest delivery expectations", detail: "Are dispatch and shipping windows clear and realistic?" },
  { id: "support", title: "A visible support and returns plan", detail: "Does a shopper know how to get help or request a return?" },
  { id: "testing", title: "A tested mobile checkout", detail: "Has the order path been checked on a phone?" },
];

export function StoreSimulatorPage() {
  const state = useCommerceState();
  const [storeType, setStoreType] = useState("Curated niche store");
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [supplier, setSupplier] = useState("Still researching suppliers");
  const [checked, setChecked] = useState<string[]>([]);
  const [coachNote, setCoachNote] = useState("");
  const score = Math.round((checked.length / simulatorCriteria.length) * 100);
  const activeProduct = state.products.find((item) => item.name === product);
  const estimatedContribution = activeProduct ? activeProduct.price - activeProduct.cost - activeProduct.shipping - activeProduct.marketing : null;
  const toggleCriterion = (id: string) => setChecked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const askCoach = () => {
    if (!customer.trim()) {
      setCoachNote("Start by describing one specific customer. A store concept is easier to evaluate when it is built around a real need.");
      return;
    }
    if (!product.trim()) {
      setCoachNote(`For ${customer}, choose one product idea and verify the problem, sample quality, delivery promise, and return handling before listing it.`);
      return;
    }
    if (supplier !== "Sample checked") {
      setCoachNote(`Before promoting ${product}, order and inspect a sample. Confirm dispatch location, tracking, packaging, defects, and return terms with the supplier.`);
      return;
    }
    setCoachNote(estimatedContribution !== null && estimatedContribution <= 0
      ? `Your current ${product} estimate is ${estimatedContribution < 0 ? "below zero" : "break-even"} before platform fees, tax, refunds, and overhead. Revisit price or costs before spending on traffic.`
      : `Your ${storeType.toLowerCase()} concept for ${customer} has a checked sample${estimatedContribution === null ? ". Add the product to Product Lab to model contribution after costs." : ` and an estimated $${estimatedContribution.toFixed(2)} contribution before fees and overhead.`} Now verify your delivery policy and mobile checkout.`);
  };
  return <><PageHeading eyebrow="PRACTICE SIMULATOR" title="Build a store before you build a store." description="Try the decisions behind a Shopify launch in a safe practice workspace. Nothing here publishes to Shopify or takes payment." /><div className="simulator-intro"><span className="simulator-icon"><Store size={18} /></span><p><strong>Practice scenario · {storeType}</strong><span>Make the calls, see the readiness score change, and ask the coach what to improve next.</span></p><StatusTag tone="blue">SANDBOX</StatusTag></div><div className="simulator-layout"><section className="panel simulator-controls"><div className="panel-heading"><div><span className="panel-kicker">STORE BLUEPRINT</span><h2>Set up your concept</h2></div><Compass size={18} /></div><label className="sim-field">Store model<select value={storeType} onChange={(event) => setStoreType(event.target.value)}><option>Curated niche store</option><option>Single-product store</option><option>Print-on-demand store</option><option>Dropshipping store</option></select><small>Pick one to focus the practice scenario.</small></label><label className="sim-field">Who are you building for?<input value={customer} onChange={(event) => setCustomer(event.target.value)} placeholder="e.g. apartment gardeners with limited space" /><small>Specific beats broad. Describe a real person and need.</small></label><label className="sim-field">First product to consider<input value={product} onChange={(event) => setProduct(event.target.value)} placeholder="e.g. compact self-watering planter" /><small>{activeProduct ? `Found in Product Lab · estimated $${estimatedContribution?.toFixed(2)} contribution before fees` : "Product Lab ideas connect here by name."}</small></label><label className="sim-field">Supplier verification<select value={supplier} onChange={(event) => setSupplier(event.target.value)}><option>Still researching suppliers</option><option>Supplier terms reviewed</option><option>Sample ordered</option><option>Sample checked</option></select><small>Do not rely only on listing photos or promises.</small></label><button className="primary-action" type="button" onClick={askCoach}><Sparkles size={14} /> Ask coach about this setup</button>{coachNote && <div className="simulator-coach-note" role="status"><span className="coach-icon"><Sparkles size={14} /></span><p>{coachNote}</p></div>}</section><section className="panel simulator-preview"><div className="panel-heading"><div><span className="panel-kicker">YOUR PRACTICE STORE</span><h2>{storeType}</h2></div><StatusTag tone={score >= 80 ? "green" : score >= 40 ? "orange" : "blue"}>{score >= 80 ? "STRONG FOUNDATION" : score >= 40 ? "IN PROGRESS" : "EARLY DRAFT"}</StatusTag></div><div className="sim-score"><div><span>STORE READINESS</span><strong>{score}<small>/100</small></strong></div><div className="sim-score-track"><span style={{ width: `${score}%` }} /></div><p>A practice score from setup decisions, not a sales prediction.</p></div><div className="simulated-storefront"><div className="sim-store-nav"><span className="sim-store-logo">{customer ? customer.split(" ").slice(-1)[0] : "YOUR BRAND"}</span><span>SHOP <i /> ABOUT <i /> CONTACT</span><ShoppingBag size={14} /></div><div className="sim-store-hero"><small>MADE FOR {customer ? customer.toUpperCase() : "YOUR CUSTOMER"}</small><h3>{product || "Your first product"}</h3><p>{customer ? `A thoughtful solution for ${customer}.` : "Start with a real customer need. Your storefront promise will appear here."}</p><button type="button" disabled>Explore the collection</button><div className="sim-product-shape"><Package size={32} /></div></div><div className="sim-store-footer"><span>Shipping expectations</span><span>Returns & support</span><span>Contact information</span></div></div><div className="sim-checklist">{simulatorCriteria.map((criterion) => <button type="button" key={criterion.id} className={checked.includes(criterion.id) ? "sim-criterion checked" : "sim-criterion"} aria-pressed={checked.includes(criterion.id)} onClick={() => toggleCriterion(criterion.id)}><span>{checked.includes(criterion.id) && <Check size={12} />}</span><span><strong>{criterion.title}</strong><small>{criterion.detail}</small></span></button>)}</div></section></div><p className="simulator-disclaimer"><BadgeCheck size={14} /> Simulator only. It does not create a Shopify store, connect a supplier, publish ads, or guarantee results.</p></>;
}

export function CoursePage({ course }: { course: CommerceCourse }) {
  const state = useCommerceState();
  const [activeIndex, setActiveIndex] = useState(0);
  const completed = course.steps.filter((_, index) => state.completedSteps.includes(`${course.slug}:${index}`)).length;
  const selectedIndex = activeIndex < course.steps.length ? activeIndex : course.steps.length - 1;
  const lesson = course.steps[selectedIndex];
  const toggleStep = () => {
    const id = `${course.slug}:${selectedIndex}`;
    const completedSteps = state.completedSteps.includes(id) ? state.completedSteps : [...state.completedSteps, id];
    saveCommerceState({ ...state, completedSteps });
    setActiveIndex(Math.min(selectedIndex + 1, course.steps.length - 1));
  };
  return <><div className="course-detail-top"><Link href="/academy"><ChevronLeft size={14} /> Academy</Link><StatusTag tone={course.level === "Starter" ? "green" : "blue"}>{course.category}</StatusTag></div><PageHeading eyebrow={`${course.level.toUpperCase()} · ${course.duration.toUpperCase()}`} title={course.title} description={course.description} /><div className="course-detail-layout"><aside className="course-outline panel"><div className="outline-head"><span>COURSE OUTLINE</span><strong>{completed}/{course.steps.length}</strong></div><div className="outline-progress"><span style={{ width: `${Math.round(completed / course.steps.length * 100)}%` }} /></div>{course.steps.map((step, index) => { const done = state.completedSteps.includes(`${course.slug}:${index}`); return <button key={step.title} className={`outline-step ${selectedIndex === index ? "active" : ""}`} onClick={() => setActiveIndex(index)} type="button"><span className={`outline-index ${done ? "done" : ""}`}>{done ? <Check size={12} /> : String(index + 1).padStart(2, "0")}</span><span><strong>{step.title}</strong><small>{step.duration}</small></span></button>; })}</aside><article className="lesson-content panel"><div className="lesson-content-meta"><span>LESSON {String(selectedIndex + 1).padStart(2, "0")}</span><span>{lesson.duration.toUpperCase()}</span></div><h2>{lesson.title}</h2><p className="lesson-body-copy">{lesson.lesson}</p><div className="lesson-action-box"><span><Target size={15} /></span><div><small>PUT IT TO WORK</small><p>{lesson.action}</p></div></div><div className="lesson-safety-note"><BadgeCheck size={14} /> Use this as an educational starting point. Confirm platform requirements and local rules before selling.</div><div className="lesson-action-row"><span>{state.completedSteps.includes(`${course.slug}:${selectedIndex}`) ? <><Check size={14} /> Lesson complete</> : "+ 25 learning points"}</span><button type="button" className="primary-action" onClick={toggleStep}>{selectedIndex === course.steps.length - 1 ? "Finish course" : "Mark complete & continue"}<ArrowRight size={14} /></button></div></article></div></>;
}

function ProfitCalculator() {
  const [price, setPrice] = useState("39");
  const [productCost, setProductCost] = useState("11");
  const [shipping, setShipping] = useState("5");
  const [marketing, setMarketing] = useState("8");
  const values = [price, productCost, shipping, marketing].map((value) => Number(value) || 0);
  const [sale, cost, delivery, acquisition] = values;
  const contribution = sale - cost - delivery - acquisition;
  const margin = sale > 0 ? contribution / sale * 100 : 0;
  return <section className="panel profit-panel"><div className="panel-heading"><div><span className="panel-kicker">KNOW YOUR NUMBERS</span><h2>Unit economics</h2></div><CircleDollarSign size={18} /></div><div className="profit-fields">{[["Selling price", price, setPrice], ["Product cost", productCost, setProductCost], ["Shipping & fulfillment", shipping, setShipping], ["Marketing per order", marketing, setMarketing]].map(([label, value, setter]) => <label key={label as string}>{label as string}<span><i>$</i><input type="number" min="0" step="0.01" value={value as string} onChange={(event) => (setter as (value: string) => void)(event.target.value)} /></span></label>)}</div><div className={`profit-result ${contribution < 0 ? "negative" : ""}`}><span>ESTIMATED CONTRIBUTION / ORDER</span><strong>${contribution.toFixed(2)}</strong><small>{margin.toFixed(1)}% before payment fees, tax, refunds, and overhead</small></div></section>;
}

export function ProductLabPage() {
  const state = useCommerceState();
  const [name, setName] = useState("");
  const [audience, setAudience] = useState("");
  const [cost, setCost] = useState("12");
  const [price, setPrice] = useState("39");
  const [shipping, setShipping] = useState("5");
  const [marketing, setMarketing] = useState("8");
  const [notes, setNotes] = useState("");
  const saveIdea = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const product: ProductIdea = { id: crypto.randomUUID(), name, audience, cost: Number(cost), price: Number(price), shipping: Number(shipping), marketing: Number(marketing), notes };
    saveCommerceState({ ...state, products: [product, ...state.products] });
    setName(""); setAudience(""); setNotes("");
  };
  return <><PageHeading eyebrow="PRODUCT LAB" title="Test the idea before the ad spend." description="Capture product concepts, customer signals, supplier checks, and conservative unit economics in one place." /><div className="tool-grid"><form className="panel product-form" onSubmit={saveIdea}><div className="panel-heading"><div><span className="panel-kicker">PRODUCT SCORECARD</span><h2>Save a product idea</h2></div><Package size={18} /></div><label>Product concept<input value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. compact travel organizer" required /></label><label>Who is it for?<input value={audience} onChange={(event) => setAudience(event.target.value)} placeholder="Describe a specific customer" required /></label><div className="form-grid-2"><label>Supplier cost<input type="number" min="0" step="0.01" value={cost} onChange={(event) => setCost(event.target.value)} /></label><label>Target price<input type="number" min="0" step="0.01" value={price} onChange={(event) => setPrice(event.target.value)} /></label><label>Shipping cost<input type="number" min="0" step="0.01" value={shipping} onChange={(event) => setShipping(event.target.value)} /></label><label>Marketing / order<input type="number" min="0" step="0.01" value={marketing} onChange={(event) => setMarketing(event.target.value)} /></label></div><label>Evidence and open questions<textarea rows={3} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="What demand signal have you found? What still needs verifying?" /></label><button className="primary-action" type="submit"><Plus size={15} /> Save idea</button></form><ProfitCalculator /></div><section className="panel saved-products"><div className="panel-heading"><div><span className="panel-kicker">YOUR WORKSPACE</span><h2>Saved product ideas</h2></div><span className="snapshot-count">{state.products.length} IDEAS</span></div>{state.products.length ? <div className="launch-list">{state.products.map((product) => { const contribution = product.price - product.cost - product.shipping - product.marketing; return <div className="launch-row" key={product.id}><span className="launch-check"><Package size={13} /></span><span className="launch-task-title">{product.name}</span><span className="launch-task-detail">For {product.audience}</span><span className="launch-task-state">${contribution.toFixed(2)} EST.</span></div>; })}</div> : <div className="empty-state"><Package size={22} /><strong>No product ideas saved yet</strong><span>Add one above to start comparing evidence and estimated costs.</span></div>}</section></>;
}

export function StoreLaunchPage() {
  const state = useCommerceState();
  const toggleTask = (id: string) => {
    const launchChecks = state.launchChecks.includes(id) ? state.launchChecks.filter((item) => item !== id) : [...state.launchChecks, id];
    saveCommerceState({ ...state, launchChecks });
  };
  const completed = state.launchChecks.length;
  return <><PageHeading eyebrow="STORE LAUNCH" title="Build a store on solid ground." description="A practical checklist for setting up, testing, and preparing your store. Shopify connection is optional and not required to learn here." /><div className="launch-summary panel"><div><span className="panel-kicker">YOUR READINESS</span><strong>{completed} <small>/ {launchTasks.length} steps complete</small></strong><p>Progress saves in this browser.</p></div><div className="launch-summary-meter"><span style={{ width: `${completed / launchTasks.length * 100}%` }} /></div></div><section className="panel launch-panel launch-full"><div className="panel-heading"><div><span className="panel-kicker">A SEQUENCE YOU CAN FOLLOW</span><h2>Launch checklist</h2></div><StatusTag tone={completed === launchTasks.length ? "green" : "blue"}>{completed === launchTasks.length ? "READY TO REVIEW" : `${launchTasks.length - completed} LEFT`}</StatusTag></div><div className="launch-list">{launchTasks.map((task, index) => <button type="button" key={task.id} className="launch-row launch-row-button" onClick={() => toggleTask(task.id)} aria-pressed={state.launchChecks.includes(task.id)}><span className={`launch-check ${state.launchChecks.includes(task.id) ? "checked" : ""}`}>{state.launchChecks.includes(task.id) && <Check size={12} />}</span><span className="launch-task-title"><small>STEP {String(index + 1).padStart(2, "0")}</small>{task.title}</span><span className="launch-task-detail">{task.detail}</span><span className="launch-task-state">{state.launchChecks.includes(task.id) ? "DONE" : "TO DO"}</span></button>)}</div><div className="launch-disclaimer"><BadgeCheck size={15} /> This checklist is educational, not legal or tax advice. Check the rules that apply where you operate and sell.</div></section></>;
}

export function CoachPage() {
  const state = useCommerceState();
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ role: "coach" | "seller"; text: string }[]>([{ role: "coach", text: "Hi, I’m your Storecraft coach. I can help you think through store setup, product research, supplier checks, unit economics, and marketing tests. I use your saved workspace notes and practical rules; I’m not connected to an external AI model." }]);
  const sendQuestion = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const prompt = question.trim();
    if (!prompt) return;
    const normalized = prompt.toLowerCase();
    let response = "Break the decision into customer evidence, cost assumptions, fulfillment risk, and a small next test. Write down what you know, what you are assuming, and what result would change your mind.";
    if (normalized.includes("product") || normalized.includes("niche")) response = state.products.length ? `You have ${state.products.length} saved product idea${state.products.length === 1 ? "" : "s"}. Compare their customer evidence and contribution after supplier cost, delivery, and marketing. Start with the idea that has the clearest customer problem, not simply the highest suggested margin.` : "Start with a specific customer problem. Check several independent demand signals, read negative reviews of existing options, and verify sample quality and delivery before you buy inventory or run ads. Save your first candidate in Product Lab.";
    else if (normalized.includes("ad") || normalized.includes("market") || normalized.includes("tiktok")) response = "Set a small test budget before publishing. Test one creative angle at a time, use original assets, and make only claims you can support. Measure checkout quality, contribution margin, refunds, and delivery experience—not just clicks.";
    else if (normalized.includes("shopify") || normalized.includes("store")) response = `Your launch checklist is ${state.launchChecks.length} of 6 steps complete. Start with one clear customer, a focused offer, accurate delivery details, and a test order. Connect a live Shopify store only after credentials and permissions are configured.`;
    else if (normalized.includes("margin") || normalized.includes("profit")) response = state.products.length ? `Your product lab has ${state.products.length} saved idea${state.products.length === 1 ? "" : "s"}. Recheck contribution after product, shipping, and per-order marketing costs. The calculator does not include payment fees, taxes, returns, chargebacks, or overhead yet.` : "Use the Product Lab calculator to subtract product, shipping, and per-order marketing costs from the price. Treat the result as contribution, not net profit; payment fees, taxes, returns, and overhead still matter.";
    else if (normalized.includes("supplier") || normalized.includes("shipping") || normalized.includes("dropship")) response = "Order a sample and compare it with the listing. Confirm dispatch location, tracking, realistic delivery windows, defect handling, and return terms in writing. Your store remains responsible for clear customer promises even if a supplier ships the parcel.";
    setMessages((current) => [...current, { role: "seller", text: prompt }, { role: "coach", text: response }]);
    setQuestion("");
  };
  return <><PageHeading eyebrow="STORECRAFT COACH" title="Think it through. Then test it." description="A built-in business learning guide. It is rule-based and uses your saved workspace state; external AI and Shopify APIs are not connected in this MVP." /><div className="coach-layout"><section className="panel coach-chat-panel"><div className="coach-chat-top"><span className="coach-icon"><Sparkles size={16} /></span><div><strong>Commerce learning coach</strong><small><i /> Available · local guidance</small></div><StatusTag tone="blue">NOT FINANCIAL ADVICE</StatusTag></div><div className="coach-message-list" aria-live="polite">{messages.map((message, index) => <div key={`${index}-${message.role}`} className={`coach-message ${message.role}`}><span className="coach-message-avatar">{message.role === "coach" ? "SC" : "YOU"}</span><p>{message.text}</p></div>)}</div><form className="coach-compose" onSubmit={sendQuestion}><label className="sr-only" htmlFor="coach-question">Ask about your store</label><textarea id="coach-question" rows={2} value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about your store, a product idea, or a marketing test…" /><button className="primary-action" type="submit" disabled={!question.trim()}><Send size={14} /> Send</button></form></section><aside className="coach-suggestions panel"><span className="panel-kicker">START WITH A QUESTION</span>{["How should I evaluate a product idea?", "What costs should I include in my margin?", "How do I vet a dropshipping supplier?", "What makes a responsible ad test?"].map((prompt) => <button type="button" key={prompt} onClick={() => setQuestion(prompt)}>{prompt}<ArrowRight size={13} /></button>)}<div className="coach-boundary-note"><Lightbulb size={14} /><p>Use the coach to structure thinking. Verify legal, tax, platform, and product-safety requirements with qualified sources.</p></div></aside></div></>;
}

export function MarketingPage() {
  const state = useCommerceState();
  const [channel, setChannel] = useState("Social video");
  const [audience, setAudience] = useState("");
  const [product, setProduct] = useState("");
  const [angle, setAngle] = useState("Demonstrate a real use");
  const [campaigns, setCampaigns] = useState(state.campaigns);
  const [notice, setNotice] = useState("");
  const createCampaign = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const draft: CampaignDraft = { id: crypto.randomUUID(), channel, audience, product, angle, copy: `${angle}: show how ${product} fits into a real moment for ${audience}. Explain the benefit clearly, include a limitation or useful detail, then invite people to learn more.`, createdAt: new Date().toISOString() };
    const updated = [draft, ...state.campaigns];
    saveCommerceState({ ...state, campaigns: updated });
    setCampaigns(updated);
    setNotice("Draft saved locally. Review every claim and asset before publishing.");
  };
  return <><PageHeading eyebrow="MARKETING WORKSHOP" title="Test a message, not a hunch." description="Build an original campaign brief with a clear audience, verifiable product angle, and a small test budget." /><div className="tool-grid"><form className="panel product-form campaign-form" onSubmit={createCampaign}><div className="panel-heading"><div><span className="panel-kicker">CAMPAIGN BUILDER</span><h2>Shape a test</h2></div><TrendingUp size={18} /></div><label>Channel<select value={channel} onChange={(event) => setChannel(event.target.value)}><option>Social video</option><option>Search ads</option><option>Email</option><option>Creator partnership</option><option>Organic social</option></select></label><label>Audience<input value={audience} onChange={(event) => setAudience(event.target.value)} placeholder="A specific customer group" required /></label><label>Product or offer<input value={product} onChange={(event) => setProduct(event.target.value)} placeholder="What are you testing?" required /></label><label>Creative angle<select value={angle} onChange={(event) => setAngle(event.target.value)}><option>Demonstrate a real use</option><option>Answer a common objection</option><option>Compare options fairly</option><option>Show setup and limitations</option></select></label><div className="campaign-guardrail"><BadgeCheck size={15} /> No fabricated reviews, false scarcity, or unsupported performance claims.</div><button className="primary-action" type="submit"><Plus size={14} /> Create campaign brief</button>{notice && <p role="status" className="form-notice">{notice}</p>}</form><section className="panel campaign-preview"><span className="panel-kicker">ORIGINAL COPY STARTER · {channel.toUpperCase()}</span><h2>{product || "Your product"}</h2><p>Choose an audience and angle to build a campaign brief. The generated draft is a starting point; verify product claims and use only assets you have permission to publish.</p><div className="campaign-metrics"><div><span>TEST BUDGET</span><strong>Set a cap first</strong></div><div><span>SUCCESS SIGNAL</span><strong>Contribution / order</strong></div></div><div className="campaign-history">{campaigns.length ? campaigns.slice(0, 3).map((campaign) => <article key={campaign.id}><span>{campaign.channel}</span><strong>{campaign.product}</strong><small>{campaign.audience}</small></article>) : <div className="empty-state"><Target size={20} /><strong>No campaign briefs yet</strong><span>Draft a small, measurable test to get started.</span></div>}</div></section></div></>;
}
