import {
  AboutData,
  Skill,
  ExperienceItem,
  EducationItem,
  PersonalInfoEntry,
} from "@/types";

export const aboutData: AboutData = {
  heading: "ABOUT ME",
  pageTitleLead: "ABOUT",
  pageTitleAccent: "ME",
  subheading: "Resume",
  description: [
    "Feel free to reach out anytime. I’m always excited to explore new projects, innovative ideas, or opportunities to collaborate and help bring your vision to life. ",
  ],
  image: "/img/img-mobile.jpg",
  stats: [
    { value: "07", label: "Professional Experience" },
    { value: "200", label: "completed projects" },
    { value: "16", label: "Happy Clients" },
    { value: "03", label: "awards won" },
  ],
  cvLink: "/img/sample.pdf",
};

/** Personal info columns (home “more about me” modal + About page hero) */
export const personalInfo: {
  left: PersonalInfoEntry[];
  right: PersonalInfoEntry[];
} = {
  left: [
    { label: "first name", value: "Wahaj" },
    { label: "Age", value: "28 Years" },
    { label: "Freelance", value: "Available", emphasis: "available" },
    { label: "phone", value: "+92 316 213 3633" },
    { label: "LinkedIn", value: "/in/wahajansari08/" },
  ],
  right: [
    { label: "last name", value: "Ansari" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Address", value: "Karachi, Pakistan" },
    { label: "Email", value: "wahajansari08@gmail.com" },
    { label: "langages", value: "Urdu, English" },
  ],
};

export const skills: Skill[] = [
  { name: "html", percentage: 90, category: "technical" },
  { name: "css", percentage: 70, category: "technical" },
  { name: "Tailwind", percentage: 60, category: "technical" },
  { name: "javascript", percentage: 66, category: "technical" },
  { name: "php", percentage: 55, category: "technical" },
  { name: "react", percentage: 65, category: "technical" },
  { name: "Next", percentage: 67, category: "technical" },
  { name: "Node", percentage: 50, category: "technical" },
  { name: "wordpress", percentage: 95, category: "technical" },
  { name: "Shopify", percentage: 75, category: "technical" },
  { name: "Illustrator/Figma", percentage: 50, category: "technical" },
  { name: "On/Off Page SEO", percentage: 50, category: "technical" },
];

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Cognitive IT Solutions",
    period: "2025 - Present",
    description:
      "At Cognitive, working as a Next.js developer, focusing on monetizing WordPress sites, creating new ones, and primarily developing projects using Next.js.",
    current: true,
  },
  {
    role: "CMS Developer",
    company: "Abtach/Intersys LTD",
    period: "2024 - 2025",
    description:
      "Created websites using WordPress, Shopify, & custom platforms, collaborating with sales, design, and animation teams on revisions and refinements",
    current: false,
  },
  {
    role: "Web Developer",
    company: "Web Genie LTD",
    period: "2022 - 2024",
    description:
      "At Webbgenie, I work as a Developer and SEO Specialist, focusing on website development and driving organic traffic through SEO strategies.",
    current: false,
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelors of computer science",
    institution: "Virtual University of Pakistan",
    period: "2021 - 2025",
    description:
      "Built a strong foundation in computer science, software development, and modern web technologies.",
  },
  {
    degree: "Diploma in CIT",
    institution: "Aligarh Institute of Techology",
    period: "2016 - 2018",
    description:
      "Completed academic projects that enhanced problem-solving, programming, and teamwork skills.",
  },
  {
    degree: "Matriculation",
    institution: "BSEK",
    period: "2015",
    description:
      "Completed Matriculation with a solid academic foundation in core subjects. Developed discipline, analytical thinking, and a passion for learning.",
  },
];
