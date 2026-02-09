export interface Project {
  title: string;
  description: string;
  tech: string;
  liveLink: string;
  githubLink?: string;
}
const projects:Project[] = [
  {
    title: "Repurpose.ai – AI Content Repurposing Platform",
    description:
      "Built an AI-powered content repurposing platform that converts long-form content into platform-optimized formats such as LinkedIn posts, Twitter/X threads, Instagram carousels, newsletters, and SEO metadata using modular prompt pipelines and audience-aware generation.",
    tech: "Node.js, OpenAI API, React, Tailwind CSS",
    liveLink: "https://repurpose.ai",
    githubLink: "https://github.com/Rishabhupadhya/ai-content-repurpose",
  },
  {
    title: "Credit Card Intelligence & Management System",
    description:
      "Developed a credit card intelligence platform that automatically tracks transactions via bank email parsing, evaluates credit utilization, prioritizes bill payments, and provides actionable credit score improvement insights.",
    tech: "Node.js, Gmail API, MongoDB, OAuth 2.0",
    liveLink: "https://creditcard.yourdomain.com",
    githubLink: "https://github.com/Rishabhupadhya/Credit-Card-Management-",
  },
  {
    title: "Collaborative Productivity & Habit Tracking Platform",
    description:
      "Built a collaborative productivity platform for teams to track habits, goals, and progress using gamification techniques such as streaks, points, and achievements. Implemented team collaboration features and enterprise-ready SSO for seamless onboarding.",
    tech: "React, Node.js, MongoDB, OAuth/SSO, Gamification",
    liveLink: "https://momentum12.vercel.app/",
    githubLink: "https://github.com/Rishabhupadhya/Productivity_Tracker",
  },
  {
    title: "Techies Blog – Developer-Centric Content Platform",
    description:
      "Developed a developer-focused blogging platform with markdown-based authoring, SEO optimization, role-based access control, and engagement analytics.",
    tech: "Next.js, Node.js, MongoDB, Markdown",
    liveLink: "https://techiesblog12.vercel.app/",
    githubLink: "https://github.com/Rishabhupadhya/Blog",
  },
];

export default projects;

//hi
