export const careersData = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    category: "Web",
    icon: "LayoutTemplate",
    shortDescription: "Builds everything the user clicks, slides, and sees on a website or app.",
    overview: {
      description: "Frontend Developers are responsible for the 'face' of a website. Whenever you see a beautifully animated button, a sleek navigation bar, or a fast-loading page on your phone, a Frontend Developer built the code (HTML/CSS/JS) to make that design completely real and usable.",
      dailyTasks: [
        "Translate boring design files (like Figma) into living, clickable code.",
        "Make sure the website doesn't break when viewed on a tiny phone screen vs a massive TV.",
        "Connect buttons to databases so that when you click 'Like', it actually saves the Like.",
        "Obsess over loading speeds so users don't close the tab before seeing the content."
      ],
      salary: {
        india: "₹4L - ₹15L / year",
        worldwide: "$60K - $120K / year"
      }
    },
    roadmap: [
      { step: "Internet Basics & HTML/CSS", duration: "1 month" },
      { step: "JavaScript Fundamentals (Core Logic)", duration: "2 months" },
      { step: "Modern Polish (Tailwind CSS, Animations)", duration: "1 month" },
      { step: "The Engine (React or Next.js Frameworks)", duration: "2 months" },
      { step: "Talking to Servers (APIs & Data Fetching)", duration: "1 month" },
      { step: "Job-Ready Real-World Projects", duration: "1 month" }
    ],
    skills: {
      technical: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      soft: ["Eye for Design", "Empathy for the User", "Patience for Browser Glitches"],
      tools: ["VS Code", "Git/GitHub", "Figma", "Chrome DevTools"]
    },
    market: {
      trend: "stable",
      jobDemand: 8.5,
      industries: ["Startups", "E-commerce", "Agencies", "Literally Every Software Company"],
      historicalTrend: [
        { year: '2019', demand: 70 },
        { year: '2020', demand: 75 },
        { year: '2021', demand: 90 },
        { year: '2022', demand: 85 },
        { year: '2023', demand: 82 },
        { year: '2024', demand: 84 },
        { year: '2025', demand: 85 }
      ]
    },
    fit: {
      enjoy: ["Seeing visual results immediately", "Making things look beautiful", "User psychology", "Instant gratification"],
      challenges: ["Every web browser acts differently", "New frameworks launch every week", "Pixel-perfect anxiety"]
    },
    resources: {
      freeCourses: [
        { name: "SuperSimpleDev HTML/CSS", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc", thumbnail: "https://img.youtube.com/vi/G3e-cpL7ofc/mqdefault.jpg" },
        { name: "Bro Code React Tutorial", url: "https://www.youtube.com/watch?v=SqcY0GlETPk", thumbnail: "https://img.youtube.com/vi/SqcY0GlETPk/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Frontend Masters", url: "#" }
      ],
      books: ["Eloquent JavaScript (Free Online)"],
      practice: ["Frontend Mentor (Build real designs)"]
    },
    relatedIds: ["ui-ux-designer", "full-stack-developer", "mobile-app-developer"]
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    category: "Web",
    icon: "Server",
    shortDescription: "Builds the invisible engine, databases, and security systems behind apps.",
    overview: {
      description: "If Frontend is the steering wheel and paint job of a car, Backend is the engine. A Backend Developer writes the invisible code that runs on massive computer servers. They handle the databases (storing your passwords), the logic (calculating your bank balance), and the security (stopping hackers).",
      dailyTasks: [
        "Create the 'API' bridges that send data to the frontend when requested.",
        "Design massive spreadsheets (Databases) that don't crash when a million people search at once.",
        "Write complex logic to process payments securely and verify user logins.",
        "Fix bugs on servers that sit in a warehouse thousands of miles away."
      ],
      salary: {
        india: "₹5L - ₹18L / year",
        worldwide: "$70K - $130K / year"
      }
    },
    roadmap: [
      { step: "Core Programming (Node/Python/Java)", duration: "2 months" },
      { step: "Databases (SQL for strict data, NoSQL for messy data)", duration: "1.5 months" },
      { step: "Building Bridges (REST APIs & Express/Django)", duration: "2 months" },
      { step: "Locking the Doors (Authentication & JWT)", duration: "1 month" },
      { step: "Speed & Scale (Caching & System Design)", duration: "1.5 months" },
      { step: "Going Live (Cloud Deployment Basics)", duration: "1 month" }
    ],
    skills: {
      technical: ["Node.js / Python", "SQL (PostgreSQL)", "MongoDB", "REST APIs", "Docker/Redis"],
      soft: ["Strict Logic", "Caution", "Systems Thinking", "Security First Mindset"],
      tools: ["Postman (Testing APIs)", "Docker", "Git", "Terminal/Command Line"]
    },
    market: {
      trend: "stable",
      jobDemand: 9.0,
      industries: ["Finance", "Healthcare", "Large Tech Giants", "Gaming"],
      historicalTrend: [
        { year: '2019', demand: 80 },
        { year: '2020', demand: 82 },
        { year: '2021', demand: 90 },
        { year: '2022', demand: 88 },
        { year: '2023', demand: 87 },
        { year: '2024', demand: 89 },
        { year: '2025', demand: 90 }
      ]
    },
    fit: {
      enjoy: ["Solving complex logic puzzles", "Working with massive amounts of data", "Optimization", "Not worrying about what colors to use"],
      challenges: ["Bugs you cannot physically 'see'", "Massive pressure if the server crashes", "Understanding horrible old code"]
    },
    resources: {
      freeCourses: [
        { name: "FreeCodeCamp Node.js", url: "https://www.youtube.com/watch?v=Oe421EPjeBE", thumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "AlgoExpert - SystemsExpert", url: "#" }
      ],
      books: ["Clean Code (Must Read)"],
      practice: ["LeetCode", "Building personal API projects"]
    },
    relatedIds: ["data-engineer", "full-stack-developer", "cloud-engineer-aws-azure-gcp"]
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    category: "Web",
    icon: "Layers",
    shortDescription: "A 'Jack of all Trades' who can build entire websites from front to back.",
    overview: {
      description: "A Full Stack Developer is a one-person army. They know enough Frontend to build the buttons you click, and enough Backend to build the database that stores what you clicked. Startups love them because hiring one Full Stack developer is cheaper than hiring two specialists.",
      dailyTasks: [
        "Plan out exactly how a new feature will look (Frontend) and how it will save data (Backend).",
        "Jump between writing database queries and centering text on a webpage in the same hour.",
        "Launch entire minimum viable products (MVPs) completely solo.",
        "Fix bugs that cross the barrier between the server and the browser."
      ],
      salary: {
        india: "₹6L - ₹22L / year",
        worldwide: "$80K - $150K / year"
      }
    },
    roadmap: [
      { step: "The Visuals (HTML/CSS/JS)", duration: "2 months" },
      { step: "The Interactivity (React)", duration: "2 months" },
      { step: "The Memory (SQL & Databases)", duration: "1.5 months" },
      { step: "The Logic Engine (Node.js & APIs)", duration: "1.5 months" },
      { step: "The Bridge (Next.js & Server/Client linking)", duration: "1 month" },
      { step: "The Launch (Putting it on the internet)", duration: "1 month" }
    ],
    skills: {
      technical: ["Next.js (The Ultimate Tool)", "React", "Node.js", "SQL/NoSQL", "Git", "Basic Cloud Setup"],
      soft: ["Time Management", "Extreme Adaptability", "Connecting the Dots", "Learning Speed"],
      tools: ["VS Code", "Vercel", "Supabase", "Git/GitHub"]
    },
    market: {
      trend: "growing",
      jobDemand: 9.5,
      industries: ["Startups (Massive Demand)", "Freelancing", "Agencies", "Fast-moving Tech Teams"],
      historicalTrend: [
        { year: '2019', demand: 85 },
        { year: '2020', demand: 88 },
        { year: '2021', demand: 95 },
        { year: '2022', demand: 92 },
        { year: '2023', demand: 93 },
        { year: '2024', demand: 94 },
        { year: '2025', demand: 95 }
      ]
    },
    fit: {
      enjoy: ["Total control over a project", "Never getting bored doing the exact same thing", "Building startups from scratch"],
      challenges: ["Context switching hurts your brain", "You are a master of none", "Learning twice as much tech to stay relevant"]
    },
    resources: {
      freeCourses: [
        { name: "Javascript Mastery Next.js", url: "https://www.youtube.com/watch?v=wm5gMKuwSYk", thumbnail: "https://img.youtube.com/vi/wm5gMKuwSYk/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Codecademy Full-Stack Track", url: "#" }
      ],
      books: ["The Pragmatic Programmer"],
      practice: ["Build full clones of Twitter or Netflix"]
    },
    relatedIds: ["frontend-developer", "backend-developer"]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "Data",
    icon: "DatabaseZ",
    shortDescription: "Turns giant boring spreadsheets into beautiful, money-making charts.",
    overview: {
      description: "Companies collect an insane amount of data every day but have no idea what it means. A Data Analyst takes millions of rows of messy data, cleans it up, and turns it into beautiful dashboards (graphs). They find the hidden story that proves 'Hey, we lose 20% of our sales on Tuesdays' so the CEO can make better decisions.",
      dailyTasks: [
        "Write queries (SQL) to fetch the exact numbers the boss asked for.",
        "Scrub messy data (like fixing 10,000 misspelled names) so it can be graphed.",
        "Create interactive dashboards using tools like PowerBI or Tableau.",
        "Give presentations translating complicated numbers into simple business advice."
      ],
      salary: {
        india: "₹5L - ₹15L / year",
        worldwide: "$65K - $110K / year"
      }
    },
    roadmap: [
      { step: "Advanced Excel Formulas & Pivot Tables", duration: "1 month" },
      { step: "Talking to Databases (SQL Mastery)", duration: "2 months" },
      { step: "Making it Pretty (Tableau / PowerBI)", duration: "1.5 months" },
      { step: "Python for Automation (Pandas)", duration: "2 months" },
      { step: "Business Storytelling & Mock Projects", duration: "1.5 months" }
    ],
    skills: {
      technical: ["SQL (Required)", "Excel (Required)", "Tableau / PowerBI", "Python (Bonus)", "Basic Stats"],
      soft: ["Telling amazing stories with numbers", "Attention to detail", "Understanding business goals"],
      tools: ["Microsoft Excel", "Tableau", "PostgreSQL", "Jupyter Notebooks"]
    },
    market: {
      trend: "stable",
      jobDemand: 8.5,
      industries: ["Finance", "Marketing", "E-commerce", "Consulting", "Every Mid/Large Business"],
      historicalTrend: [
        { year: '2019', demand: 75 },
        { year: '2020', demand: 78 },
        { year: '2021', demand: 85 },
        { year: '2022', demand: 86 },
        { year: '2023', demand: 84 },
        { year: '2024', demand: 85 },
        { year: '2025', demand: 85 }
      ]
    },
    fit: {
      enjoy: ["Finding answers hidden inside numbers", "Making charts", "Having predictable workloads", "Helping the 'suit and tie' people make money"],
      challenges: ["Cleaning up data is incredibly boring", "People asking you for reports that don't make sense", "Repetitive tasks"]
    },
    resources: {
      freeCourses: [
        { name: "Alex The Analyst Bootcamp", url: "https://www.youtube.com/watch?v=OWZNIEGNEJU&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcX0IG", thumbnail: "https://img.youtube.com/vi/OWZNIEGNEJU/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Google Data Analytics Certificate", url: "#" }
      ],
      books: ["Storytelling with Data"],
      practice: ["Download free Kaggle Datasets and graph them"]
    },
    relatedIds: ["data-scientist", "data-engineer"]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Data",
    icon: "DatabaseZ",
    shortDescription: "Uses heavy math and AI to predict the future based on past data.",
    overview: {
      description: "If a Data Analyst looks at what happened *yesterday*, a Data Scientist writes heavy math algorithms to predict what will happen *tomorrow*. They build machine learning models—like the one Netflix uses to accurately guess which movie you want to watch next before you even know it yourself.",
      dailyTasks: [
        "Write heavy Python code to wrangle utterly massive datasets.",
        "Train machine learning algorithms to recognize patterns (like fraud detection).",
        "Run statistical experiments (A/B testing) to prove a new feature works.",
        "Translate extremely complex math into decisions the company can use."
      ],
      salary: {
        india: "₹8L - ₹25L / year",
        worldwide: "$90K - $160K / year"
      }
    },
    roadmap: [
      { step: "Heavy College-Level Math & Stats", duration: "2 months" },
      { step: "Python Mastery (Pandas/NumPy)", duration: "1.5 months" },
      { step: "SQL & Data Extraction", duration: "1 month" },
      { step: "Machine Learning (Scikit-Learn)", duration: "2 months" },
      { step: "Deep Learning (Neural Networks)", duration: "2 months" },
      { step: "Building Predictive Portfolio Models", duration: "1.5 months" }
    ],
    skills: {
      technical: ["Python", "Heavy Statistics/Probability", "SQL", "Machine Learning", "Data Visualization"],
      soft: ["Scientific Curiosity", "Critical questioning", "Explaining math to non-math people"],
      tools: ["Jupyter", "Apache Spark", "Git", "AWS/GCP"]
    },
    market: {
      trend: "growing",
      jobDemand: 8.8,
      industries: ["Finance / Wall Street", "Healthcare & Biotech", "Big Tech (Netflix/Amazon)", "Self-Driving Cars"],
      historicalTrend: [
        { year: '2019', demand: 85 },
        { year: '2020', demand: 86 },
        { year: '2021', demand: 92 },
        { year: '2022', demand: 90 },
        { year: '2023', demand: 88 },
        { year: '2024', demand: 87 },
        { year: '2025', demand: 88 }
      ]
    },
    fit: {
      enjoy: ["Calculus and Statistics", "Solving 'Impossible' puzzles", "Inventing formulas", "High-paying logic heavy work"],
      challenges: ["Companies expect you to do magic", "Extremely messy starting data", "Algorithms failing for unknown reasons"]
    },
    resources: {
      freeCourses: [
        { name: "Krish Naik Data Science", url: "https://www.youtube.com/watch?v=T_W24xYtF9M&list=PLZoTAELRKSVNfXyB7eR66B72UqO-lK1x4", thumbnail: "https://img.youtube.com/vi/T_W24xYtF9M/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Coursera Data Science Math Skills", url: "#" }
      ],
      books: ["An Introduction to Statistical Learning"],
      practice: ["Kaggle Machine Learning Competitions"]
    },
    relatedIds: ["machine-learning-engineer", "data-analyst", "ai-engineer"]
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    category: "Data",
    icon: "DatabaseZ",
    shortDescription: "Builds the massive pipelines that transport and store raw data.",
    overview: {
      description: "Data Scientists cannot do their math unless someone builds the pipes to get the data to them. A Data Engineer builds those digital plumbing pipes. They set up massive warehouses on the cloud where millions of pieces of messy data are safely collected from apps, cleaned automatically, and stored.",
      dailyTasks: [
        "Write scripts to pull exactly 3.5 million rows from a database without breaking it.",
        "Design 'Pipelines' that automatically sort clean data from garbage data as it arrives.",
        "Setup super-powerful Cloud computers (like AWS or Snowflake) to store data safely.",
        "Make sure the Data Analysts and Scientists can actually access the data quickly."
      ],
      salary: {
        india: "₹7L - ₹24L / year",
        worldwide: "$85K - $145K / year"
      }
    },
    roadmap: [
      { step: "SQL Database Mastery (The Core)", duration: "2 months" },
      { step: "Python Processing (Pandas & Airflow)", duration: "2 months" },
      { step: "Data Warehousing (Snowflake/BigQuery)", duration: "1.5 months" },
      { step: "Big Data Tools (Spark & Hadoop)", duration: "1.5 months" },
      { step: "Cloud Infrastructure (AWS/GCP Basics)", duration: "1 month" }
    ],
    skills: {
      technical: ["Advanced SQL", "Python", "Apache Spark", "Airflow", "Cloud Warehousing"],
      soft: ["Systems Thinking", "Intense Attention to Detail", "Patience for long processes"],
      tools: ["Snowflake", "Databricks", "AWS S3 / Redshift", "Docker"]
    },
    market: {
      trend: "growing",
      jobDemand: 9.3,
      industries: ["Streaming Services", "Big Tech", "E-Commerce Giants", "IoT Companies"],
      historicalTrend: [
        { year: '2019', demand: 60 },
        { year: '2020', demand: 65 },
        { year: '2021', demand: 75 },
        { year: '2022', demand: 82 },
        { year: '2023', demand: 88 },
        { year: '2024', demand: 92 },
        { year: '2025', demand: 93 }
      ]
    },
    fit: {
      enjoy: ["Building invisible foundations", "Handling millions of things at once", "Fixing plumbing (Digital)"],
      challenges: ["Unnoticed when things go right, blamed when things break", "Long rendering times", "Extremely complex architectures"]
    },
    resources: {
      freeCourses: [
        { name: "Seattle Data Guy - Data Engineering", url: "https://www.youtube.com/watch?v=MjfEqrIin58", thumbnail: "https://img.youtube.com/vi/MjfEqrIin58/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Coursera Data Engineering Google Cloud", url: "#" }
      ],
      books: ["Fundamentals of Data Engineering"],
      practice: ["Build a real-time Twitter sentiment pipeline"]
    },
    relatedIds: ["data-scientist", "backend-developer"]
  },
  {
    id: "cybersecurity-engineer",
    title: "Cybersecurity Engineer",
    category: "Security",
    icon: "ShieldCheck",
    shortDescription: "The digital bodyguards protecting code, apps, and users from hackers.",
    overview: {
      description: "Every time you save a credit card online, a Cybersecurity Engineer made sure nobody could steal it. They are digital bodyguards (also known as Ethical Hackers) who intentionally try to break their own company's software to find weaknesses before the actual bad guys do.",
      dailyTasks: [
        "Play the 'Red Team' and intentionally hack your own apps to expose weak points.",
        "Monitor massive dashboards looking for weird traffic spikes from foreign countries.",
        "Set up strict firewalls and encryption to lock down sensitive data.",
        "Train regular employees not to click on fake phishing emails."
      ],
      salary: {
        india: "₹6L - ₹20L / year",
        worldwide: "$85K - $145K / year"
      }
    },
    roadmap: [
      { step: "How the Internet actually wires together (Networking)", duration: "2 months" },
      { step: "Linux OS and Command Line Mastery", duration: "1.5 months" },
      { step: "Security Basics & Cryptography (Encryption)", duration: "1.5 months" },
      { step: "Offensive Hacking (Pen Testing & Kali Linux)", duration: "2 months" },
      { step: "Defensive Security & Incident Response", duration: "1.5 months" },
      { step: "Acquiring Certifications (CompTIA Security+, CEH)", duration: "1.5 months" }
    ],
    skills: {
      technical: ["Networking (TCP/IP)", "Linux/Bash", "Firewalls", "Penetration Testing (Ethical Hacking)", "Cryptography"],
      soft: ["Paranoia (The good kind)", "Thinking exactly like a criminal", "Crisis management"],
      tools: ["Wireshark (Watching traffic)", "Metasploit", "Kali Linux", "Nmap"]
    },
    market: {
      trend: "growing",
      jobDemand: 9.2,
      industries: ["Banks & Finance", "Government & Defense", "Hospitals", "E-commerce apps"],
      historicalTrend: [
        { year: '2019', demand: 85 },
        { year: '2020', demand: 88 },
        { year: '2021', demand: 90 },
        { year: '2022', demand: 95 },
        { year: '2023', demand: 94 },
        { year: '2024', demand: 93 },
        { year: '2025', demand: 92 }
      ]
    },
    fit: {
      enjoy: ["Breaking things on purpose", "High stakes adrenaline", "Cat and Mouse games", "Feeling like a movie hacker"],
      challenges: ["Burnout from constant vigilance", "A single mistake can cost your company millions", "Being the person who always says 'No, that's unsafe'"]
    },
    resources: {
      freeCourses: [
        { name: "NetworkChuck Ethical Hacking", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE", thumbnail: "https://img.youtube.com/vi/3Kq1MIfTWCE/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "HackTheBox Academy", url: "#" }
      ],
      books: ["The Web Application Hacker's Handbook"],
      practice: ["TryHackMe (Learn by playing hacker games)"]
    },
    relatedIds: ["cloud-architect", "backend-developer"]
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer",
    category: "Mobile",
    icon: "Smartphone",
    shortDescription: "Creates apps for iPhones and Androids that you download from the store.",
    overview: {
      description: "If you spend 6 hours a day on Instagram or WhatsApp, you are using the exact work of Mobile App Developers. They build native smartphone applications. They don't just write code; they have to figure out how to make code run smoothly on an aging iPhone 8 without draining the battery in ten minutes.",
      dailyTasks: [
        "Build touch-friendly screens and swiping animations for a small screen.",
        "Talk to the phone's physical hardware (like turning on the Camera or GPS).",
        "Fight with the App Store reviewers to get the new update approved and launched.",
        "Optimize the app so it doesn't crash when someone loses their 5G connection."
      ],
      salary: {
        india: "₹5L - ₹18L / year",
        worldwide: "$75K - $135K / year"
      }
    },
    roadmap: [
      { step: "Pick your path: iOS (Swift) OR Android (Kotlin)", duration: "2 months" },
      { step: "OR learn Cross-Platform (React Native / Flutter)", duration: "2 months" },
      { step: "Building Layouts and Screens for small devices", duration: "1.5 months" },
      { step: "Connecting to the internet & databases", duration: "1.5 months" },
      { step: "Accessing Camera, GPS, and Push Notifications", duration: "1 month" },
      { step: "Surviving the Apple/Google App Store Launch process", duration: "1 month" }
    ],
    skills: {
      technical: ["Swift (Apple) or Kotlin (Android)", "React Native or Flutter", "Mobile UI Design", "Using APIs"],
      soft: ["Patience for App Reviewers", "Empathy for bad internet connections", "Eye for smooth animation"],
      tools: ["Xcode (Mac)", "Android Studio", "Figma", "Firebase"]
    },
    market: {
      trend: "stable",
      jobDemand: 8.5,
      industries: ["Gaming Studios", "Social Media Startups", "Delivery Services (Uber/Zomato)", "Retail"],
      historicalTrend: [
        { year: '2019', demand: 90 },
        { year: '2020', demand: 88 },
        { year: '2021', demand: 86 },
        { year: '2022', demand: 87 },
        { year: '2023', demand: 85 },
        { year: '2024', demand: 84 },
        { year: '2025', demand: 85 }
      ]
    },
    fit: {
      enjoy: ["Holding your own creation in the palm of your hand", "Using the camera and GPS in code", "Very direct user interaction"],
      challenges: ["Apple rejecting your app for a tiny rule", "Testing on 50 different weirdly-shaped Android phones", "Battery life constraints"]
    },
    resources: {
      freeCourses: [
        { name: "Academind Flutter Crash Course", url: "https://www.youtube.com/watch?v=VPvVD8t02U8", thumbnail: "https://img.youtube.com/vi/VPvVD8t02U8/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Udemy iOS Bootcamps by Angela Yu", url: "#" }
      ],
      books: ["Clean Architecture"],
      practice: ["Build a weather app and publish it to the Google Play Store"]
    },
    relatedIds: ["frontend-developer", "game-developer"]
  },
  {
    id: "ai-engineer",
    title: "AI / Prompt Engineer",
    category: "AI/ML",
    icon: "BrainCircuit",
    shortDescription: "Plugs powerful Artificial Intelligence like ChatGPT directly into custom apps.",
    overview: {
      description: "While Data Scientists build AI from absolute scratch, AI Engineers are the pragmatic builders. They take existing super-brains (like OpenAI's ChatGPT models or Anthropic) and smartly wire them into startup apps. If a law firm wants an AI that only answers questions based on their private legal documents, the AI Engineer builds that exact pipeline (called RAG).",
      dailyTasks: [
        "Write extremely specific 'Prompts' in code to force an AI to behave safely and accurately.",
        "Store millions of private company documents in a 'Vector Database' so the AI can read them.",
        "Build the 'chat' backend API that talks to OpenAI servers.",
        "Fine-tune smaller models to work cheaply on specific local tasks."
      ],
      salary: {
        india: "₹10L - ₹30L / year",
        worldwide: "$110K - $180K / year"
      }
    },
    roadmap: [
      { step: "Python Mastery (The Language of AI)", duration: "1.5 months" },
      { step: "Prompt Engineering (How to talk to LLMs securely)", duration: "1 month" },
      { step: "Connecting AI via Code (OpenAI API / LangChain)", duration: "1.5 months" },
      { step: "Giving AI Memories (Vector Databases & RAG)", duration: "1.5 months" },
      { step: "Training Custom Models (Fine-Tuning loosely)", duration: "1.5 months" },
      { step: "Deploying AI tools cheaply on the cloud", duration: "1 month" }
    ],
    skills: {
      technical: ["Python", "LangChain / LlamaIndex", "Vector Databases (Pinecone/Chroma)", "Prompt Security", "REST APIs"],
      soft: ["Lightning Fast Learning", "Experimentation", "Accepting AI unreliability", "Creativity"],
      tools: ["OpenAI API", "HuggingFace", "Python Server (FastAPI)", "Vector DBs"]
    },
    market: {
      trend: "skyrocketing",
      jobDemand: 9.8,
      industries: ["AI Agencies", "Startups", "Enterprise Tooling", "Customer Support Automation"],
      historicalTrend: [
        { year: '2019', demand: 20 },
        { year: '2020', demand: 25 },
        { year: '2021', demand: 30 },
        { year: '2022', demand: 45 },
        { year: '2023', demand: 90 },
        { year: '2024', demand: 95 },
        { year: '2025', demand: 98 }
      ]
    },
    fit: {
      enjoy: ["Playing with literal cutting edge sci-fi technology", "Building magical feeling apps", "Massive startup salaries", "Chaotic, newly discovered tech"],
      challenges: ["What you learn today will literally be absolute garbage in 3 months", "AI hallucinating and lying to your users permanently", "Insane API costs"]
    },
    resources: {
      freeCourses: [
        { name: "Langchain JS/Python Mastery", url: "https://www.youtube.com/watch?v=WjiOUTSkbIk", thumbnail: "https://img.youtube.com/vi/WjiOUTSkbIk/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "DeepLearning.AI Generative AI courses", url: "#" }
      ],
      books: ["Building Applications with LLMs"],
      practice: ["Build an AI bot that reads your personal school notes and quizzes you"]
    },
    relatedIds: ["data-scientist", "backend-developer"]
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    category: "Cloud",
    icon: "Cloud",
    shortDescription: "Designs the massive virtual servers that hold the internet up.",
    overview: {
      description: "Instead of buying physical metal computers, companies now rent 'Cloud' computers from Amazon (AWS) or Google (GCP). A Cloud Architect designs the blueprint for how applications will live on these rented computers so they are perfectly secure, never crash, and don't cost a million dollars a month in hosting bills.",
      dailyTasks: [
        "Sketch out complex diagrams showing how servers talk to databases and firewalls.",
        "Calculate whether running 50 small servers is cheaper than running 5 giant ones.",
        "Write 'Infrastructure as Code' (Terraform) so an entire company's servers can be built with one click.",
        "Build backup systems so if a server catches fire in Virginia, a backup turns on in Ohio instantly."
      ],
      salary: {
        india: "₹12L - ₹35L / year",
        worldwide: "$120K - $190K / year"
      }
    },
    roadmap: [
      { step: "How Linux Servers and Networks actually work", duration: "1.5 months" },
      { step: "The Core Big 3 (AWS, Azure, or GCP)", duration: "2 months" },
      { step: "Containerization (Docker & Kubernetes)", duration: "2 months" },
      { step: "Infrastructure as Code (Terraform / Ansible)", duration: "1.5 months" },
      { step: "Cloud Security & Identity Management", duration: "1.5 months" },
      { step: "Getting Professional AWS/GCP Certifications", duration: "1.5 months" }
    ],
    skills: {
      technical: ["AWS/Azure/GCP", "Linux", "Docker/Kubernetes", "Terraform", "Networking (DNS, Gateways)"],
      soft: ["Big Picture Thinking", "Cost awareness", "Disaster scenario planning"],
      tools: ["Terraform", "AWS CLI", "Draw.io (Diagrams)", "Grafana (Monitoring)"]
    },
    market: {
      trend: "stable",
      jobDemand: 9.1,
      industries: ["Enterprise Companies", "Tech Consultancies", "Banks", "Massive Startups"],
      historicalTrend: [
        { year: '2019', demand: 85 },
        { year: '2020', demand: 89 },
        { year: '2021', demand: 93 },
        { year: '2022', demand: 92 },
        { year: '2023', demand: 90 },
        { year: '2024', demand: 91 },
        { year: '2025', demand: 91 }
      ]
    },
    fit: {
      enjoy: ["Drawing system diagrams", "Controlling massive infrastructure", "Never writing the actual app code", "High salary stability"],
      challenges: ["Accidentally racking up a $10,000 Amazon bill", "Complex IAM permission errors", "Cloud platforms changing names and menus every month"]
    },
    resources: {
      freeCourses: [
        { name: "TechWorld with Nana DevOps", url: "https://www.youtube.com/watch?v=hQcFE0RD0cQ", thumbnail: "https://img.youtube.com/vi/hQcFE0RD0cQ/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Adrian Cantrill AWS Courses", url: "#" }
      ],
      books: ["Site Reliability Engineering (Google)"],
      practice: ["The Cloud Resume Challenge"]
    },
    relatedIds: ["devops-sre-engineer", "backend-developer"]
  },
  {
    id: "devops-sre-engineer",
    title: "DevOps & SRE Engineer",
    category: "Cloud",
    icon: "Server",
    shortDescription: "Automates the boring stuff to get code from developers' laptops to the live internet safely.",
    overview: {
      description: "DevOps stands for Development + Operations. When a programmer finishes writing code on their laptop, it needs to get to the live website. Instead of humans doing it (and making mistakes), a DevOps engineer writes 'Pipelines' that automatically test the code and perfectly deploy it to millions of users in seconds.",
      dailyTasks: [
        "Build CI/CD Pipelines (The automated highway for code).",
        "Put apps inside 'Containers' (Docker) so they run exactly the same everywhere.",
        "Set up alarm bells (Monitoring) that text the team if the website crashes at 3 AM.",
        "Automate literally everything so developers never have to do manual work."
      ],
      salary: {
        india: "₹10L - ₹28L / year",
        worldwide: "$110K - $170K / year"
      }
    },
    roadmap: [
      { step: "Linux Command Line & Bash Scripting", duration: "1 month" },
      { step: "Git & GitHub Advanced Workflows", duration: "1 month" },
      { step: "Putting Apps in Boxes (Docker & Kubernetes)", duration: "2 months" },
      { step: "Building the Automated CI/CD Highway (GitHub Actions / Jenkins)", duration: "1.5 months" },
      { step: "Automating Cloud Servers (Terraform)", duration: "1.5 months" },
      { step: "Watching the Apps (Prometheus & Grafana)", duration: "1 month" }
    ],
    skills: {
      technical: ["Linux & Bash/Python", "Docker/Kubernetes", "CI/CD (Jenkins, Actions)", "Terraform", "Monitoring Tools"],
      soft: ["Hating manual work", "Obsession with efficiency", "Staying calm when everything is broken at 3 AM"],
      tools: ["GitHub Actions", "Docker", "Kubernetes", "Prometheus"]
    },
    market: {
      trend: "growing",
      jobDemand: 9.4,
      industries: ["Virtually Every Modern Software Company"],
      historicalTrend: [
        { year: '2019', demand: 80 },
        { year: '2020', demand: 85 },
        { year: '2021', demand: 90 },
        { year: '2022', demand: 93 },
        { year: '2023', demand: 95 },
        { year: '2024', demand: 94 },
        { year: '2025', demand: 94 }
      ]
    },
    fit: {
      enjoy: ["Making developers' lives easier", "Writing automation scripts", "Fixing massive systems", "High-demand job security"],
      challenges: ["Being on 'on-call' duty at night", "When the pipeline breaks, nobody can work", "Tools change incredibly fast"]
    },
    resources: {
      freeCourses: [
        { name: "TechWorld with Nana Kubernetes", url: "https://www.youtube.com/watch?v=X48VuDVv0do", thumbnail: "https://img.youtube.com/vi/X48VuDVv0do/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "KodeKloud DevOps Courses", url: "#" }
      ],
      books: ["The Phoenix Project"],
      practice: ["Automate deploying a simple React app using GitHub Actions"]
    },
    relatedIds: ["cloud-architect", "backend-developer"]
  },
  {
    id: "blockchain-web3-developer",
    title: "Blockchain / Web3 Developer",
    category: "Web3",
    icon: "Layers",
    shortDescription: "Writes unbreakable 'Smart Contracts' for Crypto, NFTs, and Decentralized Finance.",
    overview: {
      description: "Web3 developers don't use regular Amazon servers. They build apps that run across thousands of random computers connected globally (The Blockchain). They write 'Smart Contracts'—which are pieces of code that handle literal money without a bank involved, so they have to be absolutely perfect.",
      dailyTasks: [
        "Write Smart Contracts using Solidity (Ethereum).",
        "Connect standard React frontend websites to Crypto Wallets (like MetaMask).",
        "Write massive automated tests because if Smart Contract code has a bug, millions of dollars can be stolen permanently.",
        "Audit older smart contracts for security flaws."
      ],
      salary: {
        india: "₹8L - ₹30L / year",
        worldwide: "$100K - $180K / year"
      }
    },
    roadmap: [
      { step: "How Cryptography and Blockchains actually work", duration: "1 month" },
      { step: "Writing Smart Contracts (Solidity/Rust)", duration: "2 months" },
      { step: "Testing Contracts strictly (Hardhat / Foundry)", duration: "1.5 months" },
      { step: "Building the Frontend (React.js & Ethers.js)", duration: "2 months" },
      { step: "Smart Contract Security & Hacking", duration: "1.5 months" }
    ],
    skills: {
      technical: ["Solidity / Rust", "React or Next.js", "Web3.js / Ethers.js", "Hardhat/Foundry", "Deep understanding of Gas optimization"],
      soft: ["Extreme Paranoia (Security first)", "Ability to read dense math", "Acceptance of chaos"],
      tools: ["Remix IDE", "MetaMask", "Foundry", "Alchemy"]
    },
    market: {
      trend: "volatile",
      jobDemand: 6.5,
      industries: ["Crypto Startups", "DeFi Platforms", "Gaming Studios (NFTs)", "Fintech"],
      historicalTrend: [
        { year: '2019', demand: 30 },
        { year: '2020', demand: 40 },
        { year: '2021', demand: 95 },
        { year: '2022', demand: 85 },
        { year: '2023', demand: 50 },
        { year: '2024', demand: 60 },
        { year: '2025', demand: 65 }
      ]
    },
    fit: {
      enjoy: ["High risk, high reward environments", "Working on the absolute fringe of finance", "Remote work (Heavy Web3 culture)"],
      challenges: ["Incredibly volatile market (Jobs disappear in bear markets)", "Scammers everywhere", "A typo could drain $10 Million"]
    },
    resources: {
      freeCourses: [
        { name: "Patrick Collins Full Solidity Course", url: "https://www.youtube.com/watch?v=umepbfKp5rI", thumbnail: "https://img.youtube.com/vi/umepbfKp5rI/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Alchemy University (Free)", url: "#" }
      ],
      books: ["Mastering Ethereum"],
      practice: ["Build a basic token swap (DEX) locally"]
    },
    relatedIds: ["frontend-developer", "cybersecurity-engineer"]
  },
  {
    id: "embedded-systems-engineer",
    title: "Embedded Systems / IoT Engineer",
    category: "Systems",
    icon: "BrainCircuit",
    shortDescription: "Writes the low-level code that makes cars, fridges, and medical devices actually work.",
    overview: {
      description: "Not all code runs on shiny MacBooks. Embedded Engineers write 'C' or 'C++' code that runs on tiny, microscopic computer chips hidden inside digital watches, car engines, and smart thermostats. They work at the exact point where software physically touches hardware.",
      dailyTasks: [
        "Write pure C/C++ code that uses less than 1 Megabyte of memory.",
        "Read 500-page hardware manuals to figure out how a specific microchip works.",
        "Use oscilloscopes and multimeters to debug why a physical button isn't sending a signal.",
        "Write the firmware that flashes real-world machinery to life."
      ],
      salary: {
        india: "₹5L - ₹18L / year",
        worldwide: "$80K - $140K / year"
      }
    },
    roadmap: [
      { step: "Mastering pure C and C++ (No training wheels)", duration: "2 months" },
      { step: "Basic Electronics (Resistors, Voltage, Multimeters)", duration: "1.5 months" },
      { step: "Microcontroller architecture (How chips actually think)", duration: "1.5 months" },
      { step: "Hardware Protocols (I2C, SPI, UART)", duration: "2 months" },
      { step: "Real-Time Operating Systems (RTOS)", duration: "1.5 months" }
    ],
    skills: {
      technical: ["C / C++", "Microcontrollers (ARM, Arduino)", "Hardware Debugging", "RTOS", "Python for testing"],
      soft: ["Extreme patience", "Reading thick documentation", "Respect for physical restraints"],
      tools: ["Oscilloscope", "Soldering Iron", "Keil / STM32Cube", "Git"]
    },
    market: {
      trend: "stable",
      jobDemand: 8.0,
      industries: ["Automotive (Tesla/Ford)", "Aerospace", "Medical Devices", "Consumer Electronics (Apple/Samsung)"],
      historicalTrend: [
        { year: '2019', demand: 80 },
        { year: '2020', demand: 75 },
        { year: '2021', demand: 78 },
        { year: '2022', demand: 80 },
        { year: '2023', demand: 81 },
        { year: '2024', demand: 82 },
        { year: '2025', demand: 80 }
      ]
    },
    fit: {
      enjoy: ["Making physical things move with code", "Highly complex logical puzzles", "Working away from standard web browsers"],
      challenges: ["Debugging is incredibly hard", "Code compiles extremely slowly", "Hardware breaks and you can't hit 'undo'"]
    },
    resources: {
      freeCourses: [
        { name: "FastBit Embedded Brain Academy Tutorials", url: "https://www.youtube.com/watch?v=FjI-y6xK3K0", thumbnail: "https://img.youtube.com/vi/FjI-y6xK3K0/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Udemy Mastering Microcontrollers", url: "#" }
      ],
      books: ["Making Embedded Systems"],
      practice: ["Buy an Arduino/ESP32 kit and build a smart weather station"]
    },
    relatedIds: ["backend-developer", "data-engineer"]
  },
  {
    id: "game-developer",
    title: "Game Developer",
    category: "Gaming",
    icon: "Smartphone",
    shortDescription: "Uses heavy math and physics engines to build interactive 3D/2D video games.",
    overview: {
      description: "Game Developers combine art, math, and code. They use massive software engines (like Unity or Unreal) to write the physics of how a character jumps, the artificial intelligence of how enemies attack, and the logic of how inventories are saved.",
      dailyTasks: [
        "Write scripts in C# or C++ to control Player Movement.",
        "Design systems for enemies that are challenging but 'fair'.",
        "Optimize 3D graphics so the frame rate doesn't drop below 60fps.",
        "Work directly with 3D artists, animators, and sound designers to combine assets."
      ],
      salary: {
        india: "₹4L - ₹15L / year",
        worldwide: "$60K - $120K / year"
      }
    },
    roadmap: [
      { step: "Pick an Engine: Unity (C#) or Unreal (C++)", duration: "1 month" },
      { step: "Learning the Language deeply (C# or C++)", duration: "2 months" },
      { step: "Core Math for Games (Vectors, Quaternions, Physics)", duration: "1 month" },
      { step: "Scripting Player Controllers & Interactions", duration: "1.5 months" },
      { step: "UI, Audio, and Game State Management", duration: "1.5 months" },
      { step: "Publishing your first small complete Indie Game", duration: "1 month" }
    ],
    skills: {
      technical: ["C# or C++", "Unity or Unreal Engine", "Math (Linear Algebra/Vectors)", "3D Render Pipelines", "Performance Profiling"],
      soft: ["Creative vision", "Perseverance", "Working well with wild artists"],
      tools: ["Unity", "Unreal Engine", "Blender (Basic)", "Git LFS"]
    },
    market: {
      trend: "stable",
      jobDemand: 7.5,
      industries: ["AAA Gaming Studios (EA, Sony)", "Indie Game Studios", "VR/AR Companies", "Gambling Engines"],
      historicalTrend: [
        { year: '2019', demand: 80 },
        { year: '2020', demand: 90 },
        { year: '2021', demand: 85 },
        { year: '2022', demand: 80 },
        { year: '2023', demand: 75 },
        { year: '2024', demand: 76 },
        { year: '2025', demand: 75 }
      ]
    },
    fit: {
      enjoy: ["Seeing massive visual payoffs", "Playing games", "Combining art with strict math", "Building fun over utility"],
      challenges: ["Notorious industry crunch time (Crazy hours)", "Lower pay compared to Web Developers", "Insanely complex spaghetti code"]
    },
    resources: {
      freeCourses: [
        { name: "Brackeys (How to make a Video Game)", url: "https://www.youtube.com/watch?v=IlKaB1etrik", thumbnail: "https://img.youtube.com/vi/IlKaB1etrik/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "GameDev.tv Complete C# Unity", url: "#" }
      ],
      books: ["Game Programming Patterns"],
      practice: ["Participate in a 48-Hour Game Jam on Itch.io"]
    },
    relatedIds: ["mobile-app-developer", "frontend-developer"]
  },
  {
    id: "qa-automation-engineer",
    title: "QA Automation Engineer",
    category: "QA",
    icon: "ShieldCheck",
    shortDescription: "Writes 'robot programs' that pretend to be human to automatically test websites for bugs.",
    overview: {
      description: "When a human tests a website, they click the buttons to see if they break. That's slow. A QA *Automation* Engineer writes robot code using tools like Selenium or Cypress or Playwright. These robots open imaginary browsers, click 10,000 buttons a second, and report any bugs before the customers ever see them.",
      dailyTasks: [
        "Write testing scripts using Playwright/Cypress in JavaScript or Python.",
        "Set up pipelines so every time a developer saves code, the robots automatically test it.",
        "Hunt down flaky tests (Robots that fail for no logical reason).",
        "Document step-by-step exactly how a bug happened so the developers can fix it."
      ],
      salary: {
        india: "₹5L - ₹16L / year",
        worldwide: "$70K - $120K / year"
      }
    },
    roadmap: [
      { step: "Manual Testing Basics (How to actually hunt bugs)", duration: "1 month" },
      { step: "Programming Basics (JavaScript or Python)", duration: "1.5 months" },
      { step: "Locating Elements on a page (HTML/CSS Selectors/XPath)", duration: "1 month" },
      { step: "UI Testing Frameworks (Playwright or Cypress)", duration: "2 months" },
      { step: "API Testing Backends (Postman/RestAssured)", duration: "1 month" },
      { step: "Wiring it to CI/CD pipelines (GitHub Actions)", duration: "1 month" }
    ],
    skills: {
      technical: ["JavaScript/TypeScript or Python", "Playwright/Cypress/Selenium", "XPath/CSS Locators", "API Testing", "CI/CD basics"],
      soft: ["Extreme attention to detail", "Patience with failing tests", "Empathy towards developers"],
      tools: ["Playwright", "Postman", "GitHub Actions", "Jira"]
    },
    market: {
      trend: "growing",
      jobDemand: 8.7,
      industries: ["Software Companies", "E-Commerce", "Finance/Banking Apps", "Health Tech"],
      historicalTrend: [
        { year: '2019', demand: 70 },
        { year: '2020', demand: 75 },
        { year: '2021', demand: 85 },
        { year: '2022', demand: 86 },
        { year: '2023', demand: 88 },
        { year: '2024', demand: 89 },
        { year: '2025', demand: 87 }
      ]
    },
    fit: {
      enjoy: ["Finding other people's mistakes", "Writing clean automation scripts", "Ensuring perfect quality", "Predictable coding patterns"],
      challenges: ["Flaky tests that fail randomly", "Developers ignoring your bug reports", "Being blamed if a bug slips through"]
    },
    resources: {
      freeCourses: [
        { name: "ExecuteAutomation Playwright Crash Course", url: "https://www.youtube.com/watch?v=_1BvA-zH8vQ", thumbnail: "https://img.youtube.com/vi/_1BvA-zH8vQ/mqdefault.jpg" }
      ],
      paidCourses: [
        { name: "Test Automation University (Free/Sponsored)", url: "#" }
      ],
      books: ["Agile Testing"],
      practice: ["Write a Playwright script that automatically logs into your own dummy website"]
    },
    relatedIds: ["frontend-developer", "devops-sre-engineer"]
  }
];

export const allCategories = ["All", "Web", "Data", "Security", "Mobile", "AI/ML", "Cloud", "Gaming", "Systems", "Web3", "QA"];
