"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Code2, Globe2, Menu, Moon, Sun, X } from "lucide-react";

const menus = [
  { label: "Languages", href: "/languages", items: ["Python", "JavaScript", "HTML", "SQL", "React"] },
  { label: "Playgrounds", href: "/playground/javascript", items: ["JavaScript", "Python", "HTML", "SQL"] },
  { label: "Tools", href: "/languages?category=Tools", items: ["Git", "Terminal", "Excel"] },
  { label: "Resources", href: "/docs", items: ["Documentation", "Certifications", "Pricing"] },
  { label: "Company", href: "/about", items: ["About us", "Blog", "Support"] },
];

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("code-languages-theme");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("code-languages-theme", next);
  };
  return <header className="site-header"><div className="header-inner page-shell">
    <Link href="/" className="brand" aria-label="Code Languages home"><span className="brand-byte" aria-hidden="true"><i /><i /></span><span>code<span>languages</span></span></Link>
    <nav className={`desktop-nav ${mobileOpen ? "mobile-open" : ""}`} aria-label="Main navigation">{menus.map((menu) => <div className="nav-menu" key={menu.label} onMouseEnter={() => setActiveMenu(menu.label)} onMouseLeave={() => setActiveMenu(null)}><Link href={menu.href} aria-haspopup="true" aria-expanded={activeMenu === menu.label} onFocus={() => setActiveMenu(menu.label)} onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}>{menu.label}<ChevronDown size={12} /></Link>{activeMenu === menu.label && <div className="nav-dropdown" onKeyDown={(event) => { if (event.key === "Escape") setActiveMenu(null); }}><span className="dropdown-label">{menu.label}</span>{menu.items.map((item) => { const slug = item.toLowerCase().replace(" ", "-"); const target = menu.label === "Languages" ? `/languages/${slug}` : menu.label === "Playgrounds" ? `/playground/${slug}` : item === "Documentation" ? "/docs" : item === "Certifications" ? "/certifications" : item === "Pricing" ? "/pricing" : menu.href; return <Link key={item} href={target} onClick={() => setActiveMenu(null)}>{item}<ArrowRight size={13} /></Link>; })}<Link href={menu.href} className="dropdown-all">View all {menu.label.toLowerCase()} <ArrowRight size={13} /></Link></div>}</div>)}</nav>
    <div className="header-actions"><div className="locale-wrap"><button className="header-locale" type="button" aria-label="Choose display language" aria-expanded={localeOpen} aria-controls="locale-menu" onClick={() => setLocaleOpen(!localeOpen)}><Globe2 size={15} /><span>EN</span></button>{localeOpen && <div className="locale-menu" id="locale-menu" role="menu"><span>DISPLAY LANGUAGE</span><button type="button" role="menuitemradio" aria-checked="true" onClick={() => setLocaleOpen(false)}>English <b>Selected</b></button><button type="button" role="menuitemradio" aria-checked="false" disabled>Español <b>Coming soon</b></button><button type="button" role="menuitemradio" aria-checked="false" disabled>Français <b>Coming soon</b></button></div>}</div><button className="theme-toggle" type="button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} onClick={toggleTheme}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button><Link href="/onboard" className="header-cta">Get started <ArrowRight size={14} /></Link><button className="mobile-menu" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={19} /> : <Menu size={19} />}</button></div>
  </div></header>;
}

const footerGroups = [
  { title: "Explore", links: [["Languages", "/languages"], ["Playgrounds", "/playground/javascript"], ["Certifications", "/certifications"], ["Tools", "/languages?category=Tools"]] },
  { title: "Learn", links: [["Documentation", "/docs"], ["Python", "/languages/python"], ["JavaScript", "/languages/javascript"], ["React", "/languages/react"]] },
  { title: "Company", links: [["About", "/about"], ["Blog", "/blog"], ["Support", "/support"], ["Pricing", "/pricing"]] },
];

export function SiteFooter() {
  const [cookieChoice, setCookieChoice] = useState(false);
  return <footer className="site-footer"><div className="page-shell"><div className="footer-main"><div className="footer-brand-column"><Link href="/" className="brand"><span className="brand-byte" aria-hidden="true"><i /><i /></span><span>code<span>languages</span></span></Link><p>Make a little progress.<br />Then a little more.</p><div className="social-links"><a href="https://github.com" aria-label="GitHub">gh</a><a href="https://www.youtube.com" aria-label="YouTube">▶</a><a href="https://www.linkedin.com" aria-label="LinkedIn">in</a></div></div>{footerGroups.map((group) => <div className="footer-group" key={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>)}<div className="footer-group footer-newsletter"><h3>Stay in the loop</h3><p>Fresh lessons and good ideas. No noise.</p><form onSubmit={(event) => { event.preventDefault(); setCookieChoice(true); }}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required placeholder="Your email address" /><button type="submit" aria-label="Subscribe"><ArrowRight size={15} /></button></form>{cookieChoice && <small className="newsletter-confirmation">You’re on the list. Welcome!</small>}</div></div><div className="footer-bottom"><span>© 2026 Code Languages. Built for curious minds.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><button type="button" onClick={() => setCookieChoice(!cookieChoice)}>Cookies</button></div><span className="footer-made"><Code2 size={13} /> Made with curiosity</span></div></div></footer>;
}