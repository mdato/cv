import homeImage from "./assets/me.jpg";
import qr from "./assets/qr.jpg";

// ========================== Header
const headerIds = ["home", "profile", "education", "skills", "experience"];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
];

// ========================== Home
const homeData = {
  homeImage,
  homeTitle1: "Marcelo",
  homeTitle2: "Dato",
  homeProfession: "Full Stack Web Developer",
  qr,
  // s
};

// ========================== Social
const socialLinks = {
  title: "Social",
  links: [
    {
      link: "https://bacode.com.ar/",
      text: "Web Site",
      icon: "bx-building-house",
    },
    {
      link: "https://github.com/mdato/",
      text: "Github",
      icon: "bxl-github",
    },
    {
      link: "https://www.linkedin.com/in/marcelo-dato-695730206/",
      text: "LinkedIn",
      icon: "bxl-linkedin-square",
    },
    {
      link: "https://glitch.com/@marcelodato/",
      text: "Glitch",
      icon: "bx-brightness",
    },
    {
      link: "https://codepen.io/marcelodato/pens/",
      text: "Codepen",
      icon: "bxl-codepen",
    },
    {
      link: "https://replit.com/@marcelodato/",
      text: "Replit",
      icon: "bx-registered",
    },
    {
      link: "https://www.youtube.com/channel/UCqhXB6DZBEds4NqUT_4M7CA",
      text: "YouTube",
      icon: "bx-movie-play",
    },
  ],
};

// ========================== Profile
const profileData = {
  title: "Profile",
  descriptions: [
    `Full Stack Developer with over 10 years of experience in JavaScript and its frameworks and libraries, including React, Next.js, and Express.js.<br><br>Skilled in using CSS frameworks such as Bootstrap and Tailwind CSS, and adept at leveraging Astro for building fast, content-focused websites.<br><br>Proficient in utilizing Node.js, a JavaScript runtime, for server-side development, and experienced with MongoDB, a NoSQL database.<br><br>`,
    
    `I have made a lot of websites and collaborated for several start-ups.<br><br>`,
    
    `Creator of LingBodie, a free online app to acquire vocabulary.<br><br>`,
    
    `I have developed a variety of applications for Windows in the early 2000s, like Bodie's Calendar, and others...`,
  ],
};

// ========================= Education
const educationData = {
  title: "Education",
  educations: [
    {
      title: "Systems Analyst",
      studies: "Universidad de Belgrano, Buenos Aires, AR",
      year: "1986 - 1990",
      line: true,
    },
    {
      title: "Legacy Full Stack",
      studies: "FreeCodeCamp, Online",
      year: "2020 - 2021",
      line: false,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Skills",
  skills: [
    [`Html`],
    [`Css`],
    [`Express`],
    [`Javascript`],
    [`Vue`],
    [`React`],
    [`Next`],
    [`Astro`],
    [`MongoDb`],
    [`Tailwind`],
    [`Bootstrap`],
  ],
};
const logoText = "BACode";
const menuIcon = "bx-grid-alt";

// ========================= Experience
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Independent Web Designer & Consultant",
      company: "2018 - PRESENT",
      describe:
        "Providing design, web, and branding services to a diverse range of clients, including fashion designers, bloggers, design agencies, and creative professionals.",
      line: true,
    },
    {
      title: "Independent JavaScript Programmer",
      company: "2021 - 2024",
      describe:
        "Specialized in the development of customized software and applications for various language schools, focusing on foreign language learning and practice.",
      line: true,
    },
    {
      title: "Hamelin (Partner and Founder)",
      company: "2008 - 2017",
      describe:
        "Founder of Hamelin, a children's toy distributor. I designed the website, and focused especially on the management of the database of products, customers and suppliers.",
      line: false,
    },
  ],
};

// ========================= Languages
const languageData = {
  title: "Languages",
  languages: ["Spanish", "English", "Italian", "French", "Portuguese"],
};

// ========================= Interest
const interestsData = {
  title: "INTERESTS",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-run",
      text: "Running",
    },
    {
      icon: "bx-book-reader",
      text: "Languages",
    },
    {
      icon: "bx-male-female",
      text: "Friends",
    },
    {
      icon: "bx-code-block",
      text: "Code",
    },
    {
      icon: "bx-headphone",
      text: "Music",
    },
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  experienceData,
  languageData,
  interestsData,
  headerIds,
};
