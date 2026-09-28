"use client";

import { useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Check, Lightbulb, Target } from "lucide-react";
import Link from "next/link";
import type { Language } from "@/lib/catalog";
import { ByteAvatar } from "@/components/byte-avatar";
import { getLessonGuide } from "@/lib/lesson-content";
import { completeLesson, getProgressSnapshot, getServerProgressSnapshot, subscribeProgress } from "@/lib/progress";
import { Playground } from "@/components/learning-widgets";

export function LessonCourse({ language }: { language: Language }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const progressSnapshot = useSyncExternalStore(subscribeProgress, getProgressSnapshot, getServerProgressSnapshot);
  const completed = (JSON.parse(progressSnapshot) as { completedLessons: string[] }).completedLessons;
  const firstIncomplete = language.lessons.findIndex((_, index) => !completed.includes(`lesson:${language.slug}:${index}`));
  const activeIndex = selectedIndex ?? Math.max(firstIncomplete, 0);
  const activeLesson = language.lessons[activeIndex] ?? `${language.name} foundations`;
  const lessonId = `lesson:${language.slug}:${activeIndex}`;
  const guide = getLessonGuide(language, activeIndex);
  const completedCount = completed.filter((id) => id.startsWith(`lesson:${language.slug}:`)).length;

  const markComplete = () => {
    completeLesson({ id: lessonId, languageSlug: language.slug, title: activeLesson, type: "challenge", xpReward: 20 });
    if (activeIndex < language.lessons.length - 1) setSelectedIndex(activeIndex + 1);
  };

  return (
    <div className="lesson-course page-shell">
      <header className="lesson-course-heading">
        <div>
          <p className="eyebrow">{language.name.toUpperCase()} · YOUR COURSE</p>
          <h1>Small steps. <em>Real skills.</em></h1>
          <p>Each step introduces one idea, then gives you space to try it yourself.</p>
        </div>
        <div className="course-header-actions"><div className="course-buddy"><ByteAvatar size="brand" label="Byte, your lesson guide" /><span><strong>Byte</strong><small>learning with you</small></span></div><Link href={`/docs/${language.slug}`}><BookOpen size={14} /> Reference</Link></div>
      </header>
      <div className="course-progress" role="progressbar" aria-label="Course progress" aria-valuemin={0} aria-valuemax={language.lessons.length} aria-valuenow={completedCount}>
        <span style={{ width: `${Math.round((completedCount / language.lessons.length) * 100)}%` }} />
      </div>
      <div className="course-shell">
        <aside className="course-step-list" aria-label={`${language.name} lesson steps`}>
          <div className="course-step-list-heading"><span>COURSE STEPS</span><strong>{completedCount}/{language.lessons.length}</strong></div>
          <ol>
            {language.lessons.map((title, index) => {
              const done = completed.includes(`lesson:${language.slug}:${index}`);
              return (
                <li key={`${title}-${index}`}>
                  <button type="button" className={activeIndex === index ? "active" : ""} aria-current={activeIndex === index ? "step" : undefined} onClick={() => setSelectedIndex(index)}>
                    <span className={`step-number ${done ? "done" : ""}`}>{done ? <Check size={13} /> : String(index + 1).padStart(2, "0")}</span>
                    <span className="step-label">{title}<small>{index === 0 ? "START HERE" : "LESSON"}</small></span>
                  </button>
                </li>
              );
            })}
          </ol>
          <Link className="course-back-link" href={`/languages/${language.slug}`}><ArrowLeft size={13} /> All {language.name} details</Link>
        </aside>
        <div className="course-lesson">
          <div className="course-lesson-top"><span>STEP {String(activeIndex + 1).padStart(2, "0")} <i /> {language.lessons.length} TOTAL</span><span>ABOUT 5 MIN</span></div>
          <div className="lesson-heading-inline"><p className="eyebrow">{language.name.toUpperCase()} · STEP {String(activeIndex + 1).padStart(2, "0")}</p><h2>{guide.title}</h2></div>
          <section className="lesson-goal"><span><Target size={15} /></span><div><strong>What you’ll learn</strong><p>{guide.goal}</p></div></section>
          <section className="lesson-note-block"><div className="lesson-note-heading"><span><Lightbulb size={15} /></span><h3>The idea</h3></div><p>{guide.explanation}</p></section>
          <section className="lesson-note-block"><div className="lesson-note-heading"><span><BookOpen size={15} /></span><h3>Keep in mind</h3></div><ul>{guide.notes.map((note) => <li key={note}><Check size={13} /> {note}</li>)}</ul></section>
          <section className="lesson-exercise">
            <div className="exercise-heading"><div><span className="exercise-step">PRACTICE {String(activeIndex + 1).padStart(2, "0")}</span><h3>Try it yourself</h3></div><span className="exercise-xp">+20 XP</span></div>
            <p className="exercise-instruction">{guide.practice}</p>
            <Playground key={lessonId} language={language} lessonId={String(activeIndex)} lessonTitle={activeLesson} />
          </section>
          <div className="course-step-actions"><span>{completed.includes(lessonId) ? <><Check size={14} /> Step complete</> : "Ready to move on?"}</span><button className="button button-lime" type="button" onClick={markComplete}>{activeIndex === language.lessons.length - 1 ? "Finish course" : "Complete & continue"}<ArrowRight size={15} /></button></div>
        </div>
      </div>
    </div>
  );
}
