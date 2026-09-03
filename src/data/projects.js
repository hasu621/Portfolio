export const devProjects = [
  {
    title: 'FRAMES (Facial Recognition & Attendance Monitoring with Embedded System)',
    description:
      'Automated attendance system combining software logic with embedded hardware. Optimizing responsive UI components and ensuring stable real-time data synchronization.',
    tags: ['React.js', 'Python', 'Express.js', 'Raspberry Pi', 'OpenCV', 'MediaPipe'],
    type: 'Full-Stack',
    category: 'Thesis / Capstone Project',
    icon: '🤖',
    liveUrl: 'https://frames-smartattendance.vercel.app/',
    githubUrl: null,
    image: null,
    images: [],
  },
  {
    title: 'MyDei: Social Media Website',
    description:
      'A social networking platform enabling seamless user interaction and real-time feed updates. Features include Posting, Reacting, Messaging, Friends, Comments, and Reposting.',
    tags: ['React.js', 'Supabase'],
    type: 'Full-Stack',
    category: 'Full-Stack Web Application',
    icon: '🌐',
    liveUrl: 'https://my-dei-mu.vercel.app/',
    githubUrl: null,
    image: null,
    images: [],
  },
  {
    title: 'BeautyConnect',
    description:
      'Front End Developer Intern (Feb 2026 – May 2026)\n\nNote: This is a project I was assigned to and contributed to during my internship at NexVision Innovations Inc., and not a personal solo project.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    type: 'Frontend',
    category: 'Internship Experience',
    icon: '🏢',
    liveUrl: null,
    githubUrl: null,
    isLocalhost: false,
    image: '/Imagess/screenshot20260428172244.png',
    images: ['/Imagess/screenshot20260428172244.png', '/Imagess/screenshot20260428172303.png'],
  },
  {
    title: '7-Evelyn: E-Commerce Platform',
    description:
      'Web application featuring full product catalogs, a dynamic state-managed shopping cart, and user checkout.',
    tags: ['React.js', 'MySQL'],
    type: 'Full-Stack',
    category: 'Web Application',
    icon: '🛒',
    liveUrl: null,
    githubUrl: null,
    image: '/Imagess/screenshot20260604174323.png',
    images: ['/Imagess/screenshot20260604174323.png', '/Imagess/screenshot20260604174334.png', '/Imagess/screenshot20260604174351.png'],
  },
  {
    title: 'Budget Tracker',
    description:
      'Dynamic budgeting application built to track expenses and manage personal transactions.',
    tags: ['React.js', 'Bootstrap', 'Node.js', 'MySQL'],
    type: 'Full-Stack',
    category: 'Financial Tool',
    icon: '💰',
    liveUrl: null,
    githubUrl: null,
    image: '/Imagess/screenshot20260606143529.png',
    images: ['/Imagess/screenshot20260606143529.png'],
  },
];

export const automationProjects = [
  {
    title: 'AI Inbox Triage & Action Queue',
    description: 'Built an AI-powered email operations workflow that automatically captures incoming Gmail messages, prevents duplicate processing, classifies and prioritizes emails with Gemini, validates structured AI output, and writes actionable intelligence to a centralized Google Sheets queue.',
    fullDescription: 'Built an AI-powered email operations workflow that automatically captures incoming Gmail messages, prevents duplicate processing, classifies and prioritizes emails with Gemini, validates structured AI output, and writes actionable intelligence to a centralized Google Sheets queue. Designed with human-in-the-loop controls, deterministic routing, duplicate prevention, and auditability to demonstrate safe, production-minded AI automation.\n\nProject Overview\nDesigned and built an end-to-end AI-powered email triage and action-queue system using n8n, Gmail, Google Sheets, and Google Gemini.\n\nThe automation monitors incoming emails, retrieves the full message, prevents duplicate processing, uses Gemini to classify and prioritize the email, validates the AI-generated result, and records the structured intelligence in a centralized Google Sheets action queue. The system is designed around a human-in-the-loop architecture, ensuring that AI is used for interpretation and classification while deterministic automation controls workflow decisions and consequential actions.\n\nWorkflow\nGmail → Duplicate Detection → Gemini AI Classification → JSON Parsing → Validation → Google Sheets Action Queue → Gmail Labeling → Human Review\n\nKey Capabilities\n• Automated Gmail monitoring — captures incoming emails through an n8n Gmail trigger.\n• Duplicate prevention — checks the email\'s unique Gmail Message ID against the existing action queue before processing.\n• AI-powered classification — Gemini analyzes email content and identifies: Category, Priority, Action required, Suggested action, Deadline, Summary, Confidence score.\n• Structured AI output — converts Gemini\'s JSON response into usable n8n data rather than relying on unstructured text.\n• AI output validation — verifies required fields and confidence levels before allowing the result into the main workflow.\n• Centralized action queue — stores every processed email in Google Sheets with a consistent schema and review status.\n• Gmail organization — applies automation labels to processed messages.\n• Human approval workflow — keeps consequential decisions under human control rather than allowing AI to independently send or execute arbitrary actions.\n• Auditability — maintains message IDs, timestamps, classifications, statuses, and processing information for traceability.\n\nAutomation Principles Demonstrated\n• Trigger → Data → Decision → Action architecture\n• Idempotency and duplicate prevention\n• Structured data contracts\n• AI output validation\n• Deterministic workflow logic\n• Human-in-the-loop controls\n• Untrusted-input handling and prompt-injection awareness\n• Centralized source-of-truth tracking\n• Error/review paths instead of silent failures\n• Auditability and operational visibility\n• Safe separation between AI interpretation and real-world actions',
    tags: ['n8n', 'Gmail', 'Gemini', 'Google Sheets'],
    category: 'Automation Workflow',
    icon: '⚡',
    liveUrl: null,
    githubUrl: null,
    image: '/Imagess/screenshot20260903041233.png',
    images: ['/Imagess/screenshot20260903041233.png'],
  }
];
