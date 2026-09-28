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
  { name: "Scala", slug: "scala", category: "Languages", mark: "Sc", color: "#dc695c", description: "Functional ideas meet the JVM.", level: "Intermediate", lessons: ["Scala expressions", "Collections and transformations", "Pattern matching", "Build a small service"] },
  { name: "Haskell", slug: "haskell", category: "Languages", mark: "Hs", color: "#a88ac4", description: "Explore functional programming from first principles.", level: "Intermediate", lessons: ["Pure functions", "Types and pattern matching", "Map and fold", "Model a small problem"] },
  { name: "Elixir", slug: "elixir", category: "Languages", mark: "Ex", color: "#9878ae", description: "Build fault-tolerant systems with functional tools.", level: "Intermediate", lessons: ["Elixir expressions", "Pattern matching", "Processes and messages", "Build a resilient worker"] },
  { name: "Erlang", slug: "erlang", category: "Languages", mark: "Er", color: "#a8565a", description: "Learn the language behind dependable systems.", level: "Intermediate", lessons: ["Erlang basics", "Pattern matching", "Concurrent processes", "Supervision fundamentals"] },
  { name: "Perl", slug: "perl", category: "Languages", mark: "Pl", color: "#7795bd", description: "Transform text and automate useful work.", level: "Beginner", lessons: ["Perl building blocks", "Regular expressions", "Work with files", "Automate a report"] },
  { name: "Bash", slug: "bash", category: "Languages", mark: "$", color: "#9cbf75", description: "Automate everyday command-line tasks.", level: "Beginner", lessons: ["Shell commands", "Variables and arguments", "Loops and conditions", "Write a helpful script"] },
  { name: "PowerShell", slug: "powershell", category: "Languages", mark: "PS", color: "#6a91cb", description: "Automate systems with powerful commands.", level: "Beginner", lessons: ["PowerShell commands", "Objects in the pipeline", "Scripts and parameters", "Automate a task"] },
  { name: "Julia", slug: "julia", category: "Languages", mark: "Jl", color: "#8e79c7", description: "Explore fast, expressive scientific computing.", level: "Beginner", lessons: ["Julia essentials", "Arrays and functions", "Explore a dataset", "Plot a result"] },
  { name: "MATLAB", slug: "matlab", category: "Languages", mark: "M", color: "#df9d63", description: "Work with matrices, models, and data.", level: "Beginner", lessons: ["MATLAB workspace", "Vectors and matrices", "Visualize data", "Model a system"] },
  { name: "Objective-C", slug: "objective-c", category: "Languages", mark: "Obj", color: "#7c9bb8", description: "Understand the roots of Apple app development.", level: "Intermediate", lessons: ["Objective-C syntax", "Objects and messages", "Memory fundamentals", "Build a small class"] },
  { name: "Solidity", slug: "solidity", category: "Languages", mark: "So", color: "#a9aa9e", description: "Learn smart contract fundamentals safely.", level: "Intermediate", lessons: ["Contracts and state", "Functions and modifiers", "Events and errors", "Test a simple contract"] },
  { name: "Zig", slug: "zig", category: "Languages", mark: "Zg", color: "#e0a459", description: "Build explicit, low-level software.", level: "Intermediate", lessons: ["Zig fundamentals", "Types and control flow", "Memory and allocators", "Build a small utility"] },
  { name: "Fortran", slug: "fortran", category: "Languages", mark: "F", color: "#7796c3", description: "Explore a classic language for numerical computing.", level: "Beginner", lessons: ["Fortran program structure", "Types and arrays", "Procedures", "Compute a numerical result"] },
  { name: "COBOL", slug: "cobol", category: "Languages", mark: "Co", color: "#82a977", description: "Read the language that runs essential systems.", level: "Beginner", lessons: ["COBOL program layout", "Data divisions", "Conditions and loops", "Process a simple record"] },
  { name: "Groovy", slug: "groovy", category: "Languages", mark: "Gr", color: "#79aeb1", description: "Script smoothly across the JVM ecosystem.", level: "Beginner", lessons: ["Groovy essentials", "Closures and collections", "Automate a build", "Write a small script"] },
  { name: "Clojure", slug: "clojure", category: "Languages", mark: "Cl", color: "#8bb16f", description: "Build with data and functional ideas.", level: "Intermediate", lessons: ["Clojure forms", "Immutable collections", "Functions and sequences", "Transform a dataset"] },
  { name: "F#", slug: "fsharp", category: "Languages", mark: "F#", color: "#6d94bd", description: "Use functional programming on .NET.", level: "Intermediate", lessons: ["F# expressions", "Records and unions", "Pattern matching", "Model a small domain"] },
  { name: "OCaml", slug: "ocaml", category: "Languages", mark: "ML", color: "#d19a61", description: "Make expressive programs with strong types.", level: "Intermediate", lessons: ["OCaml values", "Algebraic data types", "Pattern matching", "Build a small parser"] },
  { name: "Visual Basic", slug: "visual-basic", category: "Languages", mark: "VB", color: "#688dc4", description: "Create approachable programs on .NET.", level: "Beginner", lessons: ["Visual Basic basics", "Variables and decisions", "Forms and events", "Build a small utility"] },
  { name: "GraphQL", slug: "graphql", category: "Languages", mark: "GQL", color: "#de6b9f", description: "Ask APIs for exactly the data you need.", level: "Beginner", lessons: ["GraphQL queries", "Fields and arguments", "Mutations and variables", "Design a useful query"] },
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

const starterCode: Record<string, string> = {
  python: 'name = "Ada"\nprint(f"Hello, {name}!")',
  javascript: 'const name = "Ada";\nconsole.log(`Hello, ${name}!`);',
  typescript: 'const name: string = "Ada";\nconsole.log(`Hello, ${name}!`);',
  html: '<main>\n  <h1>Hello, Ada!</h1>\n  <p>Welcome to the web.</p>\n</main>',
  css: '.greeting {\n  color: #83a94c;\n  font-size: 1.5rem;\n}',
  java: 'class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Ada!");\n  }\n}',
  cpp: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, Ada!\\n";\n}',
  sql: "SELECT 'Hello, Ada!' AS greeting;",
  c: '#include <stdio.h>\n\nint main(void) {\n  puts("Hello, Ada!");\n  return 0;\n}',
  csharp: 'using System;\n\nConsole.WriteLine("Hello, Ada!");',
  go: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, Ada!")\n}',
  rust: 'fn main() {\n    println!("Hello, Ada!");\n}',
  php: '<?php\n$name = "Ada";\necho "Hello, $name!";\n?>',
  ruby: 'name = "Ada"\nputs "Hello, #{name}!"',
  swift: 'let name = "Ada"\nprint("Hello, \\(name)!")',
  kotlin: 'fun main() {\n  val name = "Ada"\n  println("Hello, $name!")\n}',
  dart: 'void main() {\n  const name = "Ada";\n  print("Hello, $name!");\n}',
  r: 'name <- "Ada"\ncat("Hello,", name, "!\\n")',
  lua: 'local name = "Ada"\nprint("Hello, " .. name .. "!")',
  assembly: 'section .data\n  message db "Hello, Ada!", 10',
  react: 'function Greeting() {\n  return <h1>Hello, Ada!</h1>;\n}',
  nextjs: 'export default function Page() {\n  return <h1>Hello, Ada!</h1>;\n}',
  docker: 'FROM node:22-alpine\nWORKDIR /app\nCOPY . .\nCMD ["node", "app.js"]',
  kubernetes: 'apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello\nspec:\n  containers:\n    - name: app\n      image: hello:latest',
  git: 'git status\ngit add .\ngit commit -m "Add greeting"',
  terminal: 'name="Ada"\nprintf "Hello, %s!\\n" "$name"',
  excel: '= "Hello, " & A2 & "!"',
  scala: 'object Main extends App {\n  val name = "Ada"\n  println(s"Hello, $name!")\n}',
  haskell: 'main :: IO ()\nmain = putStrLn "Hello, Ada!"',
  elixir: 'name = "Ada"\nIO.puts("Hello, #{name}!")',
  erlang: '-module(hello).\n-export([start/0]).\nstart() -> io:format("Hello, Ada!~n").',
  perl: 'my $name = "Ada";\nprint "Hello, $name!\\n";',
  bash: 'name="Ada"\nprintf "Hello, %s!\\n" "$name"',
  powershell: '$name = "Ada"\nWrite-Output "Hello, $name!"',
  julia: 'name = "Ada"\nprintln("Hello, $name!")',
  matlab: 'name = "Ada";\nfprintf("Hello, %s!\\n", name);',
  "objective-c": '#import <Foundation/Foundation.h>\n\nint main() {\n  NSLog(@"Hello, Ada!");\n  return 0;\n}',
  solidity: 'pragma solidity ^0.8.20;\n\ncontract Hello {\n  string public greeting = "Hello, Ada!";\n}',
  zig: 'const std = @import("std");\n\npub fn main() void {\n    std.debug.print("Hello, Ada!\\n", .{});\n}',
  fortran: 'program hello\n  print *, "Hello, Ada!"\nend program hello',
  cobol: 'IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO.\nPROCEDURE DIVISION.\n    DISPLAY "Hello, Ada!".\n    STOP RUN.',
  groovy: 'def name = "Ada"\nprintln "Hello, ${name}!"',
  clojure: '(def name "Ada")\n(println (str "Hello, " name "!"))',
  fsharp: 'let name = "Ada"\nprintfn "Hello, %s!" name',
  ocaml: 'let name = "Ada"\nlet () = print_endline ("Hello, " ^ name ^ "!")',
  "visual-basic": 'Module Hello\n  Sub Main()\n    Console.WriteLine("Hello, Ada!")\n  End Sub\nEnd Module',
  graphql: 'query Greeting {\n  viewer {\n    name\n  }\n}',
};

const fileExtensions: Record<string, string> = {
  python: "py", javascript: "js", typescript: "ts", html: "html", css: "css", java: "java", cpp: "cpp", sql: "sql", c: "c", csharp: "cs", go: "go", rust: "rs", php: "php", ruby: "rb", swift: "swift", kotlin: "kt", dart: "dart", r: "r", lua: "lua", assembly: "asm", react: "jsx", nextjs: "tsx", docker: "Dockerfile", kubernetes: "yaml", git: "sh", terminal: "sh", excel: "xlsx", scala: "scala", haskell: "hs", elixir: "ex", erlang: "erl", perl: "pl", bash: "sh", powershell: "ps1", julia: "jl", matlab: "m", "objective-c": "m", solidity: "sol", zig: "zig", fortran: "f90", cobol: "cbl", groovy: "groovy", clojure: "clj", fsharp: "fs", ocaml: "ml", "visual-basic": "vb", graphql: "graphql",
};

export function getStarterCode(language: Language) {
  return starterCode[language.slug] ?? "";
}

export function getFileExtension(language: Language) {
  return fileExtensions[language.slug] ?? "txt";
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