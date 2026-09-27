export type League = "bronze" | "silver" | "gold" | "platinum";
export type LessonType = "theory" | "challenge" | "quiz";

export type UserProgress = {
  id: string;
  xp: number;
  weeklyXp: number;
  streakCount: number;
  freezeTokens: number;
  completedLessons: string[];
  league: League;
  lastActiveDate: string | null;
  weekKey: string;
};

export type Lesson = {
  id: string;
  languageSlug: string;
  title: string;
  type: LessonType;
  xpReward: number;
};

const storageKey = "code-languages-progress-v1";

function currentWeekKey(date: Date) {
  const januaryFirst = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const days = Math.floor((date.getTime() - januaryFirst.getTime()) / 86_400_000);
  return `${date.getUTCFullYear()}-${Math.ceil((days + januaryFirst.getUTCDay() + 1) / 7)}`;
}

export function getProgress(): UserProgress {
  const initial: UserProgress = {
    id: "local-learner",
    xp: 0,
    weeklyXp: 0,
    streakCount: 0,
    freezeTokens: 2,
    completedLessons: [],
    league: "bronze",
    lastActiveDate: null,
    weekKey: currentWeekKey(new Date()),
  };
  if (typeof window === "undefined") return initial;
  try {
    const saved: unknown = JSON.parse(window.localStorage.getItem(storageKey) ?? "null");
    if (!saved || typeof saved !== "object") return initial;
    return { ...initial, ...saved, completedLessons: Array.isArray((saved as UserProgress).completedLessons) ? (saved as UserProgress).completedLessons : [] };
  } catch {
    return initial;
  }
}

export function completeLesson(lesson: Lesson, date = new Date()): { progress: UserProgress; earnedXp: number } {
  const progress = getProgress();
  const today = date.toISOString().slice(0, 10);
  const previousDay = new Date(date.getTime() - 86_400_000).toISOString().slice(0, 10);
  const alreadyCompleted = progress.completedLessons.includes(lesson.id);
  const sameDay = progress.lastActiveDate === today;
  const sameWeek = progress.weekKey === currentWeekKey(date);
  const updated: UserProgress = {
    ...progress,
    xp: progress.xp + (alreadyCompleted ? 0 : lesson.xpReward),
    weeklyXp: (sameWeek ? progress.weeklyXp : 0) + (alreadyCompleted ? 0 : lesson.xpReward),
    streakCount: sameDay ? progress.streakCount : progress.lastActiveDate === previousDay ? progress.streakCount + 1 : 1,
    completedLessons: alreadyCompleted ? progress.completedLessons : [...progress.completedLessons, lesson.id],
    lastActiveDate: today,
    weekKey: currentWeekKey(date),
  };
  if (typeof window !== "undefined") window.localStorage.setItem(storageKey, JSON.stringify(updated));
  return { progress: updated, earnedXp: alreadyCompleted ? 0 : lesson.xpReward };
}