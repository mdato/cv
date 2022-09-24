import homeImage from "./assets/me.jpg";
import qr from "./assets/qr.jpg";


// ========================== Header Data
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
];
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
    // {
    //   linkText: "References",
    //   linkID: "references",
    //   boxIcon: "bx-link-external",
    // },
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeImage,
  homeTitle1: "Marcelo",
  homeTitle2: "Dato",
  homeProfession: "Full Stack Web Developer",
  qr,
  // s
};

// ========================== Social Links
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

// ========================== Profile Data
const profileData = {
  title: "Profile",
  //   Here you can add as much paragraph as you can
  descriptions: [
    `Full Stack Developer with over 10 years of experience in Javascript and their frameworks/libraries: React, Next, Vue, Bootstrap, Tailwinds, Material-UI, etc.`,
    `I have made a lot of websites and collaborated for several start-ups.`,
    `Creator of LingBodie, an app to acquire vocabulary, and I am also the author of DerDieDas, an app for learning German articles. Both are free.`,
    `I have developed a variety of applications for windows in the early 2000s, like Bodie's Calendar, and others..., `,
  ],
};

// ========================= Education Data
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
  //   Here you can add further skills array
  skills: [
    [`Html`],
    [`Css`],
    [`Saas`],
    [`Javascript`],
    [`Vue`],
    [`React`],
    [`Next`],
    [`MongoDb`],
    [`Tailwind`],
    [`Material`],
    [`Bootstrap`],
    [`Chakra`],

    // [`Html`, `Css`, `Saas`],[`React`,`Typescript`, `Javascript`],
    // [`Next`, `Vue`,`Express`],[,`MongoDb`,`Tailwind`, `Bootstrap`],
    // [`Material-Ui`, `Chakra-Ui`]
    
  ],
};
const logoText = "BACode";
const menuIcon = "bx-grid-alt";

//  ===================================== Right Section Content =============================== //

// ========================= Experience Data
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Bodie Agency (Web Designer)",
      company: "2018 - PRESENT",
      describe:
        "Founder of an independent design studio. I work together with a graphic designer. We offer design and branding services to a range of businesses, from fashion designer and blogger, to design agencies and creative professionals.",
      line: true,
    },
    {
      title: "BACode (Javascript Programmer)",
      company: "2021 - Present",
      describe: "For some time now, I have been offering customized versions to language schools, some of my apps for learning and practicing foreign languages.",
      line: true,
    },
    {
      title: "Hamelin (Partner and Founder)",
      company: "2008 - 2017",
      describe: "Founder of Hamelin, a children's toy distributor. I designed the website, and focused especially on the management of the database of products, customers and suppliers.",
      line: false,
    },
  ],
};

// ========================= Languages Data
const languageData = {
  title: "Languages",
  languages: ["Spanish", "English", "Italian", "French", "Portuguese"],
};

// ========================= INTERESTS Data
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
