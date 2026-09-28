import type { Language } from "@/lib/catalog";
import { getStarterCode } from "@/lib/catalog";

export type LessonGuide = {
  title: string;
  goal: string;
  explanation: string;
  notes: string[];
  practice: string;
};

const guides: Record<string, Omit<LessonGuide, "title">> = {
  python: {
    goal: "Use a value and a function to print a greeting.",
    explanation: "A variable gives a value a name. Python uses the name later, so one small change can update the whole message.",
    notes: ["The equals sign stores the text Ada in the name variable.", "print(...) sends a readable result to the output.", "The f-string inserts the current value of name into the message."],
    practice: "Change Ada to your name, run the program, and compare the output.",
  },
  javascript: {
    goal: "Store a name, then print a message in the browser console.",
    explanation: "A const binding gives a value a name that stays assigned. Template strings use backticks and ${...} to place values inside text.",
    notes: ["const name = ... creates a named binding.", "console.log(...) writes a line to the playground output.", "${name} is replaced with the value held by name."],
    practice: "Change the name, run the code, and check that the message changes too.",
  },
  typescript: {
    goal: "Give a value an explicit type before using it.",
    explanation: "TypeScript adds checks to JavaScript. The : string annotation says name should hold text, which helps catch mismatches while you write.",
    notes: ["const creates a binding that cannot be reassigned.", ": string documents and checks the value’s shape.", "Template strings keep the greeting easy to read."],
    practice: "Try changing the annotation to number. Notice the editor can flag a value that no longer matches.",
  },
  html: {
    goal: "Describe a heading and paragraph with semantic elements.",
    explanation: "HTML gives content structure. An opening tag starts an element, its text is the content, and a closing tag marks where it ends.",
    notes: ["<main> identifies the primary content of the page.", "<h1> is the page’s main heading.", "<p> groups a paragraph beneath that heading."],
    practice: "Change the heading text and add a second paragraph inside main.",
  },
  css: {
    goal: "Select an element and change how it looks.",
    explanation: "A CSS rule has a selector and declarations. The selector chooses which elements to style; each declaration pairs a property with a value.",
    notes: [".greeting selects elements whose class is greeting.", "color changes the text color.", "font-size changes how large the text appears."],
    practice: "Change the color or font size, then open Preview to see the result.",
  },
  sql: {
    goal: "Use a SELECT statement to ask for a value with a useful name.",
    explanation: "SQL describes the result you want. SELECT chooses a value or column, while AS gives the result a readable column name.",
    notes: ["SELECT starts a query and names the result to return.", "Quoted text is a string literal.", "AS greeting labels the returned column."],
    practice: "Change the greeting text or its column alias to something meaningful.",
  },
  react: {
    goal: "Describe a reusable piece of interface with a component.",
    explanation: "A React component is a function that returns interface elements. JSX lets the returned structure look much like HTML while remaining JavaScript.",
    notes: ["Greeting is the component’s name; React components start with a capital letter.", "return describes what should appear on screen.", "The h1 JSX element creates the heading."],
    practice: "Change the heading, then try returning a paragraph underneath it.",
  },
};

export function getLessonGuide(language: Language, lessonIndex = 0): LessonGuide {
  const title = language.lessons[lessonIndex] ?? `${language.name} foundations`;
  const guide = guides[language.slug];
  if (lessonIndex === 0 && guide) return { title, ...guide };
  const lines = getStarterCode(language).split("\n").filter(Boolean);
  if (lessonIndex > 0) {
    return {
      title,
      goal: `Understand ${title.toLowerCase()} and use it in a small ${language.name} example.`,
      explanation: `This step builds on the earlier ${language.name} foundations. Focus on what ${title.toLowerCase()} changes, and how it helps a program solve a concrete problem.`,
      notes: [
        `Start with the main ${language.name} idea from the example.`,
        lines.length > 1 ? "Read each line in order and notice how the later lines use the earlier ones." : "Identify the keyword or symbol that makes this idea work.",
        "Make one small edit at a time so you can connect each change with its result.",
      ],
      practice: `Change the example to demonstrate ${title.toLowerCase()} in your own way.`,
    };
  }
  return {
    title,
    goal: language.description,
    explanation: `This first ${language.name} example is deliberately small. Read it from top to bottom and notice the punctuation and keywords that give the language its shape.`,
    notes: [
      `The first line begins the example in ${language.name}.`,
      lines.length > 1 ? "The following lines build on that starting point." : "The line contains the first complete idea in the example.",
      "Names and symbols have meaning; changing one thing at a time makes their role easier to see.",
    ],
    practice: `Change one part of the ${language.name} example and explain what you expect it to do.`,
  };
}