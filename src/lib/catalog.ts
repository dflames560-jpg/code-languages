export type CatalogCategory = "Languages" | "Frameworks" | "Tools" | "DevOps";

export type Language = {
  name: string;
  slug: string;
  category: CatalogCategory;
  mark: string;
  color: string;
  description: string;
  level: string;
  featured?: boolean;
  lessons: string[];
};

export const languages: Language[] = [
  { name: "Python", slug: "python", category: "Languages", mark: "Py", color: "#f3c34e", description: "Think clearly. Build anything.", level: "Beginner", featured: true, lessons: ["Your first Python program", "Values and variables", "Make decisions with if", "Repeat with loops", "Build a tiny text game"] },
  { name: "JavaScript", slug: "javascript", category: "Languages", mark: "JS", color: "#e8d44d", description: "Bring the web to life.", level: "Beginner", featured: true, lessons: ["Meet JavaScript", "Variables and values", "Functions that do work", "Make a page interactive", "Build a mini app"] },
  { name: "TypeScript", slug: "typescript", category: "Languages", mark: "TS", color: "#4b91d1", description: "JavaScript, with superpowers.", level: "Intermediate", lessons: ["Types in a nutshell", "Shape your data", "Functions and types", "Make APIs safer"] },
  { name: "HTML", slug: "html", category: "Languages", mark: "5", color: "#ee7752", description: "Give every webpage its shape.", level: "Beginner", featured: true, lessons: ["Anatomy of a webpage", "Text and headings", "Links and images", "Forms that work"] },
  { name: "CSS", slug: "css", category: "Languages", mark: "#", color: "#578bd4", description: "Make the web look like you.", level: "Beginner", lessons: ["Selectors and style", "Color and type", "Flexible layouts", "Responsive design"] },
  { name: "Java", slug: "java", category: "Languages", mark: "Ja", color: "#e97950", description: "Build sturdy, scalable software.", level: "Beginner", lessons: ["Java foundations", "Objects and classes", "Collections", "A simple service"] },
  { name: "C++", slug: "cpp", category: "Languages", mark: "C+", color: "#69a1d2", description: "Get closer to the machine.", level: "Intermediate", lessons: ["Your first C++ program", "Types and memory", "Functions and classes", "Build a command-line tool"] },
  { name: "SQL", slug: "sql", category: "Languages", mark: "SQ", color: "#e4aa53", description: "Ask better questions of your data.", level: "Beginner", featured: true, lessons: ["Meet your database", "Select and filter", "Join your tables", "Group and summarize"] },
  { name: "C", slug: "c", category: "Languages", mark: "C", color: "#729bd4", description: "Learn what your code is doing.", level: "Intermediate", lessons: ["C from the ground up", "Pointers made clear", "Files and memory"] },
  { name: "C#", slug: "csharp", category: "Languages", mark: "C#", color: "#9a73ca", description: "Make apps, games, and more.", level: "Beginner", lessons: ["Start with C#", "Types and methods", "Objects in action"] },
  { name: "Go", slug: "go", category: "Languages", mark: "Go", color: "#6ac2c4", description: "Simple tools for big systems.", level: "Beginner", lessons: ["Go basics", "Structs and interfaces", "Concurrent programs"] },
  { name: "Rust", slug: "rust", category: "Languages", mark: "Rs", color: "#d98457", description: "Performance with peace of mind.", level: "Intermediate", lessons: ["Rust fundamentals", "Ownership in practice", "Build a CLI"] },
  { name: "PHP", slug: "php", category: "Languages", mark: "Ph", color: "#8278bf", description: "Power the pages behind the page.", level: "Beginner", lessons: ["PHP essentials", "Dynamic pages", "Work with a database"] },
  { name: "Ruby", slug: "ruby", category: "Languages", mark: "Rb", color: "#dd696c", description: "Express ideas with elegant code.", level: "Beginner", lessons: ["Ruby first steps", "Collections and blocks", "Build a tiny app"] },
  { name: "Swift", slug: "swift", category: "Languages", mark: "Sw", color: "#eb805a", description: "Create experiences for Apple.", level: "Beginner", lessons: ["Swift essentials", "Views and state", "Your first iOS screen"] },
  { name: "Kotlin", slug: "kotlin", category: "Languages", mark: "Kt", color: "#a883d7", description: "A modern language for Android.", level: "Beginner", lessons: ["Kotlin foundations", "Null safety", "Build an Android view"] },
  { name: "Dart", slug: "dart", category: "Languages", mark: "Da", color: "#6fa5ce", description: "One codebase, many screens.", level: "Beginner", lessons: ["Dart essentials", "Widgets and state", "A Flutter starter"] },
  { name: "R", slug: "r", category: "Languages", mark: "R", color: "#6a91c8", description: "Find the story in your data.", level: "Beginner", lessons: ["R for curious minds", "Tidy your data", "Visualize a finding"] },
  { name: "Lua", slug: "lua", category: "Languages", mark: "Lu", color: "#697ab8", description: "Small language, big possibilities.", level: "Beginner", lessons: ["Lua basics", "Tables and functions", "A tiny game"] },
  { name: "Assembly", slug: "assembly", category: "Languages", mark: "ASM", color: "#8c9a9c", description: "See the instructions beneath it all.", level: "Advanced", lessons: ["Bits and registers", "Instructions in motion", "A tiny routine"] },
  { name: "React", slug: "react", category: "Frameworks", mark: "Re", color: "#6bc9d2", description: "Build interfaces from components.", level: "Beginner", featured: true, lessons: ["Think in components", "Props and composition", "State that responds", "Build a working dashboard"] },
  { name: "Next.js", slug: "nextjs", category: "Frameworks", mark: "N", color: "#d8d9d4", description: "The full-stack React framework.", level: "Intermediate", lessons: ["Your first route", "Layouts and metadata", "Load and mutate data"] },
  { name: "Docker", slug: "docker", category: "DevOps", mark: "Dk", color: "#55a9d6", description: "Package it once. Run it anywhere.", level: "Beginner", lessons: ["Containers demystified", "Build an image", "Run your app"] },
  { name: "Kubernetes", slug: "kubernetes", category: "DevOps", mark: "K8", color: "#5c86d8", description: "Orchestrate your containers.", level: "Advanced", lessons: ["Pods and deployments", "Services and scaling", "Ship an update"] },
  { name: "Git", slug: "git", category: "Tools", mark: "Gt", color: "#e47f5c", description: "Keep your changes in good company.", level: "Beginner", lessons: ["Version control, simply", "Branch and merge", "Collaborate with Git"] },
  { name: "Terminal", slug: "terminal", category: "Tools", mark: ">_", color: "#a6c46c", description: "Get comfortable at the command line.", level: "Beginner", lessons: ["Navigate with confidence", "Files and commands", "Automate a task"] },
  { name: "Excel", slug: "excel", category: "Tools", mark: "Ex", color: "#67aa80", description: "Make spreadsheets work harder.", level: "Beginner", lessons: ["Formula fundamentals", "Look up and summarize", "Build a clear report"] },
];

export const roadmaps = [
  { title: "Software Engineer", icon: "{ }", color: "mint", steps: ["Programming foundations", "Data structures & algorithms", "Git and collaboration", "Build a portfolio project"] },
  { title: "Frontend Developer", icon: "▧", color: "coral", steps: ["HTML & CSS essentials", "JavaScript in the browser", "React interfaces", "Ship a responsive app"] },
  { title: "Backend Developer", icon: "⌘", color: "blue", steps: ["Python or JavaScript", "APIs and HTTP", "Databases with SQL", "Deploy a web service"] },
  { title: "Full Stack Developer", icon: "◫", color: "gold", steps: ["Web foundations", "Frontend with React", "Backend APIs", "Connect and deploy"] },
  { title: "Data Analyst", icon: "▥", color: "violet", steps: ["SQL for exploration", "Spreadsheets that scale", "Python for analysis", "Tell a story with data"] },
  { title: "DevOps Engineer", icon: "⇄", color: "mint", steps: ["Linux and terminal", "Git workflows", "Docker containers", "Kubernetes essentials"] },
  { title: "Network Engineer", icon: "⌁", color: "blue", steps: ["Network foundations", "Protocols and addressing", "Linux networking", "Troubleshoot with confidence"] },
  { title: "DSA Interview Prep", icon: "⌬", color: "coral", steps: ["Arrays and strings", "Hash maps and sets", "Trees and graphs", "Practice interview patterns"] },
];

export function getLanguage(slug: string) {
  return languages.find((language) => language.slug === slug);
}

export const featuredLanguages = languages.filter((language) => language.featured);

export const sampleLesson = {
  title: "Make a friendly greeting",
  objective: "Store a name in a variable, then use it to greet someone.",
  examples: {
    python: 'name = "Ada"\nprint(f"Hello, {name}!")',
    javascript: 'const name = "Ada";\nconsole.log(`Hello, ${name}!`);',
    html: '<h1>Hello, Ada!</h1>\n<p>Welcome to your first webpage.</p>',
    sql: 'SELECT \'Hello, Ada!\' AS greeting;',
    react: 'function Greeting() {\n  return <h1>Hello, Ada!</h1>;\n}',
  },
};