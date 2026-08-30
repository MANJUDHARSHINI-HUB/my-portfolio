/**
 * ============================================================================
 *  src/data.js — THE ONLY FILE YOU SHOULD NEED TO EDIT
 * ============================================================================
 *
 * Everything on the site that changes over time — projects, certificates,
 * skills, experience, education, and contact links — lives in this one file.
 *
 * You should NOT need to touch anything inside `src/components/` to update
 * your content. Just edit the arrays/objects below and save.
 *
 * A few rules the components rely on, so keep these in mind while editing:
 *
 *  1. Leave a field as `null` (not a fake link, not an empty string) if you
 *     don't have the real value yet. The UI already knows how to hide
 *     buttons / show placeholders when a field is `null`.
 *
 *  2. Image paths point into the `public/` folder. Anything you drop into
 *     `public/projects/` or `public/certificates/` can be referenced here
 *     as `/projects/your-file.png` or `/certificates/your-file.png`.
 *
 *  3. Don't delete a field — just leave it `null` or an empty array `[]`
 *     if you don't have content for it yet.
 * ============================================================================
 */

/* ----------------------------------------------------------------------- */
/*  PROFILE — headline identity used in the hero, nav logo, and footer      */
/* ----------------------------------------------------------------------- */
export const profile = {
  name: "S. Manju Dharshini",
  initials: "SMD",
  roles: ["AI/ML Developer", "GenAI Engineer", "Software Developer"],
  headline: "Building ideas into intelligent applications.",
  subheadline:
    "I work across AI, machine learning, and Generative AI — building applications, experimenting with LLMs, and combining intelligent systems with solid software development.",
  // Set this to a real photo path (e.g. "/images/profile.jpg") once you
  // have one you want to use. Until then, the hero shows the illustrated
  // avatar automatically — no need to touch any component code.
  photo: null,
};

/* ----------------------------------------------------------------------- */
/*  MARQUEE — the scrolling strip of skills shown just below the hero.     */
/*  Keep this list short (8-14 items) so the loop feels snappy.            */
/* ----------------------------------------------------------------------- */
export const marqueeSkills = [
  "Python",
  "Machine Learning",
  "Generative AI",
  "LLMs",
  "Prompt Engineering",
  "JavaScript",
  "Agentic AI",
  "Streamlit",
  "SQL",
  "NLP",
];

/* ----------------------------------------------------------------------- */
/*  ABOUT — paragraphs shown in the About section                          */
/*  Edit the text here directly. Each string in the array becomes its own  */
/*  paragraph, so the section doesn't read as one giant wall of text.      */
/* ----------------------------------------------------------------------- */
export const about = {
  paragraphs: [
    "I'm a Computer Science with AI student with a growing passion for Artificial Intelligence, Machine Learning, Generative AI, and Software Development. My journey into this field was unexpected — but as I explored technology through projects and hands-on learning, I discovered a genuine interest in building, experimenting, and creating new solutions.",
    "I enjoy working across the complete development process — from AI/ML model development and GenAI applications to frontend and backend integration, APIs, databases, and deployment. I'm particularly interested in turning ideas into working applications and exploring how emerging AI technologies can solve real-world problems.",
    "I continuously challenge myself to learn new technologies, experiment with different approaches, and transform creative ideas into practical projects. My goal is to grow as an AI/ML Developer, GenAI Engineer, and Software Developer while building innovative applications that combine intelligent systems with strong software development.",
  ],
  // Short highlight chips shown alongside the About text.
  // Add / remove / edit freely — keep each label short (2-4 words).
  focusAreas: [
    "AI & Machine Learning",
    "Generative AI & LLMs",
    "Full-Stack Development",
    "Applied Experimentation",
  ],
};

/* ----------------------------------------------------------------------- */
/*  SKILLS — grouped into categories. To add a new skill, add a string to  */
/*  the relevant `items` array. To add a new category, copy a block and    */
/*  give it a new `category` name.                                         */
/* ----------------------------------------------------------------------- */
export const skillGroups = [
  {
    category: "Programming",
    items: ["Python", "Java", "JavaScript"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Bootstrap", "Frontend Development", "Backend Development"],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "NLP",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "Agentic AI",
    ],
  },
  {
    category: "Databases",
    items: ["Oracle SQL", "SQLite", "SQL"],
  },
  {
    category: "Development & Deployment",
    items: ["APIs", "Streamlit", "DevOps & Deployment"],
  },
];

/* ----------------------------------------------------------------------- */
/*  PROJECTS                                                                */
/* ----------------------------------------------------------------------- */
/*
 *  HOW TO ADD A NEW PROJECT:
 *
 *  1. (Optional) Drop a screenshot into `public/projects/`, e.g.
 *     `public/projects/my-new-project.png`.
 *
 *  2. Copy one of the objects below and fill it in:
 *
 *     {
 *       name: "Project Name",
 *       description: "One or two honest sentences about what it does.",
 *       tech: ["Tech", "Stack", "Tags"],
 *       image: "/projects/my-new-project.png",  // or null for a placeholder
 *       github: "https://github.com/...",        // or null to hide the button
 *       demo: "https://your-demo-url.com",       // or null to hide the button
 *     }
 *
 *  3. Add it to the `projects` array below (order = display order).
 *
 *  Leave `github` / `demo` as `null` until you have the real URL —
 *  the card automatically hides that button instead of showing a dead link.
 */
export const projects = [
  {
    name: "Blood Pressure Prediction",
    description:
      "A machine learning model that predicts blood pressure levels from health indicators, deployed as an interactive Streamlit app.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    image: null, // e.g. "/projects/blood-pressure.png"
    github: null, // add repo URL when available
    demo: "https://blood-pressure-bafowvd87bmdwggvvzbcgo.streamlit.app/",
  },
  {
    name: "Car Price Prediction",
    description:
      "A regression-based ML application that estimates a car's resale price from its specifications, built and deployed with Streamlit.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    image: null, // e.g. "/projects/car-price.png"
    github: null, // add repo URL when available
    demo: "https://carpriceprediction-hhsnwy5wf8rasrtp3slxw5.streamlit.app/",
  },
  {
    name: "Object Detection",
    description:
      "A computer vision project focused on detecting and classifying objects in images using Python-based detection models.",
    tech: ["Python", "Computer Vision", "Streamlit"],
    image: null, // e.g. "/projects/object-detection.png"
    github: null, // add repo URL when available
    demo: null, // TODO: add the deployed demo URL once it's finalized
  },
  {
    name: "GenAI & LLM",
    description:
      "An exploration into Generative AI and large language models, experimenting with prompt design and LLM-powered application flows.",
    tech: ["Python", "Generative AI", "LLM", "Streamlit"],
    image: null, // e.g. "/projects/genai-llm.png"
    github: null, // add repo URL when available
    demo: null, // TODO: add the deployed demo URL once it's finalized
  },

  // 👇 Add more projects from your GitHub here, following the same shape.
  // {
  //   name: "",
  //   description: "",
  //   tech: [],
  //   image: null,
  //   github: null,
  //   demo: null,
  // },
];

/* ----------------------------------------------------------------------- */
/*  EXPERIENCE                                                              */
/* ----------------------------------------------------------------------- */
/*
 *  Add a `duration` (e.g. "Jun 2024 – Present") once you have real dates.
 *  Add bullet points to `highlights` once real responsibilities are
 *  confirmed — leave the array empty until then, nothing will render.
 */
export const experience = [
  {
    role: "AI & Computer Science Intern",
    organization: "MEG World Technologies Pvt. Ltd.",
    duration: null, // e.g. "Jan 2025 – Present"
    highlights: [
      // "Add a real, verified responsibility or contribution here.",
    ],
  },

  // 👇 Add future roles here, newest first.
  // {
  //   role: "",
  //   organization: "",
  //   duration: null,
  //   highlights: [],
  // },
];

/* ----------------------------------------------------------------------- */
/*  EDUCATION                                                               */
/* ----------------------------------------------------------------------- */
export const education = [
  {
    degree: "B.Sc. Computer Science with AI",
    institution: "SDNB Vaishnav College for Women",
    duration: null, // e.g. "2023 – 2026"
    status: "Currently pursuing",
    details: [
      // Add CGPA / coursework / honors here once available — none invented.
    ],
  },
];

/* ----------------------------------------------------------------------- */
/*  CERTIFICATIONS                                                          */
/* ----------------------------------------------------------------------- */
/*
 *  HOW TO ADD A CERTIFICATE IMAGE / PDF / LINK LATER:
 *
 *  1. Drop the file into `public/certificates/`, e.g.
 *     `public/certificates/microsoft-ai-basics.png`
 *
 *  2. Set `image` to `/certificates/microsoft-ai-basics.png`
 *     (leave `null` to show a clean placeholder instead of a broken image).
 *
 *  3. Set `pdf` to `/certificates/microsoft-ai-basics.pdf` if you have one.
 *
 *  4. Set `verifyUrl` to the real verification link — the "View Certificate"
 *     button appears automatically once this is a real URL, and stays
 *     hidden until then (no dead buttons).
 */
export const certifications = [
  {
    title: "Explore AI Basics",
    issuer: "Microsoft",
    image: null,
    pdf: null,
    verifyUrl: null,
  },
  {
    title: "English Certificate — 64/100, C1 Advanced",
    issuer: "EF SET",
    image: null,
    pdf: null,
    verifyUrl: null,
  },
  {
    title: "Public Speaking Course",
    issuer: "Simplilearn SkillUp",
    image: null,
    pdf: null,
    verifyUrl: null,
  },
  {
    title: "Introduction to Automation",
    issuer: "UiPath",
    image: null,
    pdf: null,
    verifyUrl: null,
  },
  {
    title: "Certification",
    issuer: "NASSCOM",
    image: null,
    pdf: null,
    verifyUrl: null,
  },
  {
    title: "Certification",
    issuer: "Infosys Springboard",
    image: null,
    pdf: null,
    verifyUrl: null,
  },
  {
    title: "Certification",
    issuer: "LinkedIn Learning",
    image: null,
    pdf: null,
    verifyUrl: null,
  },
  {
    title: "Power BI",
    issuer: "Power BI",
    image: null,
    pdf: null,
    verifyUrl: null,
  },
  {
    title: "IoT",
    issuer: "IoT",
    image: null,
    pdf: null,
    verifyUrl: null,
  },

  // 👇 Add new certificates here, following the same shape.
  // {
  //   title: "",
  //   issuer: "",
  //   image: null,
  //   pdf: null,
  //   verifyUrl: null,
  // },
];

/* ----------------------------------------------------------------------- */
/*  CONTACT — every value here is used to build a real, clickable link.    */
/* ----------------------------------------------------------------------- */
/*
 *  NOTE: The two source briefs you provided had slightly different
 *  LinkedIn URLs:
 *    - "https://www.linkedin.com/in/s-manju-dharshini-4b27b0315"
 *    - "https://www.linkedin.com/in/s-manjudharshini-4b27b0315"
 *  The first version is used below. Please double-check this against your
 *  actual LinkedIn profile URL and correct it here if needed — nothing
 *  else in the site needs to change.
 */
export const contact = {
  phone: {
    display: "+91 88259 04701",
    href: "tel:+918825904701",
  },
  email: {
    display: "smanjudharshini@gmail.com",
    href: "mailto:smanjudharshini@gmail.com",
  },
  location: "Chengalpattu, Tamil Nadu, India",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/s-manju-dharshini-4b27b0315",
    },
    {
      label: "GitHub",
      href: "https://github.com/MANJUDHARSHINI-HUB",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/SManjudharshini/",
    },
  ],
};

/* ----------------------------------------------------------------------- */
/*  NAVIGATION — order here controls the order of nav links AND sections   */
/* ----------------------------------------------------------------------- */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
