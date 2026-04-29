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
    githubUrl: "https://github.com/yourusername/resume-analyzer", // <-- update this
    platform: "HuggingFace Spaces",
  },
  // Add future projects here — they'll automatically appear on the site
];
