export const technologies = [
  { value: "c", label: "C" },
  { value: "c++", label: "C++" },
  { value: "cuda", label: "CUDA" },
  { value: "go", label: "Go" },
  { value: "html", label: "HTML" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "sass", label: "Sass" },
  { value: "typescript", label: "TypeScript" }
];

export const lvlOfDifficulty = [
  { value: "easy", label: "Easy" },
  { value: "moderate", label: "Moderate" },
  { value: "*", label: "Not sure" }
];

export const issueType = [
  { value: "enhancement", label: "Enhancement" },
  { value: "bugfix", label: "Bugfix" },
  { value: "*", label: "Not sure" }
];

export const filters = [
  { label: "Technologies", value: "language", options: technologies },
  {
    label: "Level of difficulty",
    value: "experience_needed",
    options: lvlOfDifficulty
  },
  { label: "Type", value: "type", options: issueType }
];

