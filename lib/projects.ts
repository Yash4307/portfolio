export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string[];
  tags: string[];
  status: "live" | "wip" | "archived";
  liveUrl?: string;
  githubUrl?: string;
  platform?: string;
}

export const projects: Project[] = [
  {
    id: "safeprompt",
    title: "SafePrompt Scanner",
    shortDesc:
      "Detects prompt injection attacks in user input and webpages before they reach LLMs — with multi-layered defense and safe summarization.",
    longDesc: [
      "Built a web-based tool to detect prompt injection attacks in user input and webpages before they reach Large Language Models.",
      "Implemented multi-layered detection including regex patterns, strong/mild injection identification, and invisible character scanning (zero-width spaces, Unicode tricks).",
      "Integrated safe summarization using Groq API — only processes content when risk is Low, preventing prompt injection exploits.",
      "Features include scan history, real-time statistics, export functionality, and a cyberpunk-themed UI with Matrix rain animation.",
      "Demonstrates practical understanding of AI security risks and defensive prompt engineering.",
    ],
    tags: ["Python", "Flask", "Groq API", "AI Security", "Prompt Engineering"],
    status: "live",
    liveUrl: "https://safeprompt-scanner.onrender.com", // <-- update this
    githubUrl: "https://github.com/Yash4307/safeprompt-scanner", // <-- update this
    platform: "Render",
  },
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    shortDesc:
      "LLM-powered resume analysis using RAG — generates tailored resumes, job match scores, and cover letters from your actual experience.",
    longDesc: [
      "Built an AI-powered resume analyzer using LLMs and Retrieval-Augmented Generation (RAG) to ground recommendations in the user's real experience.",
      "Generates tailored resumes optimized for specific job descriptions, match analysis scores, and cover letters.",
      "Deployed on Hugging Face Spaces with a clean, accessible interface.",
    ],
    tags: ["Python", "LLMs", "RAG", "NLP", "HuggingFace"],
    status: "live",
    liveUrl: "https://huggingface.co/spaces/yash4306/smart-resume-ai", // <-- update this
    githubUrl: "https://github.com/Yash4307/smartresume-ai", // <-- update this
    platform: "HuggingFace Spaces",
  },
  {
  id: "movierater",
  title: "MovieRater",
  shortDesc:
    "Production-ready movie discovery and review platform with social feeds, watchlists, role-based access, and real-time AJAX search — powered by Flask and MySQL.",
  longDesc: [
    "Built end-to-end full-stack application with Python,Flask, SQLAlchemy, MySQL, JavaScript, HTML/CSS — structured for scalability with migration-ready DB workflows and connection pooling.",
    "Implemented role-based access control with separate admin dashboard and user management actions.",
    "Built social features including community feed, user profiles, review likes/hearts, and watchlist management.",
    "Added real-time UX with AJAX live search suggestions and dynamic client-side updates.",
    "Integrated IMDb/OMDb and TMDB APIs for movie metadata, posters, ratings, and trending content.",
    "Deployed on Render with environment-based secrets and production-ready database configuration.",
  ],
  tags: ["Python", "Flask", "SQLAlchemy", "MySQL", "JavaScript", "AJAX", "OMDb API", "TMDB"],
  status: "live",
  liveUrl: "https://movie-rater-3y6w.onrender.com",   // ← replace with your Render URL
  githubUrl: "https://github.com/Yash4307/Movie-Rater", // ← replace with your actual repo name
  platform: "Render",
},
];
