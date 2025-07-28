const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Education",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { id:1 , text: "Ideas", imgPath: "/images/ideas.svg" },
  { id:2 , text: "Concepts", imgPath: "/images/concepts.svg" },
  { id:3 , text: "Designs", imgPath: "/images/designs.svg" },
  { id:4 , text: "Code", imgPath: "/images/code.svg" },
  { id:5 , text: "Ideas", imgPath: "/images/ideas.svg" },
  { id:6 , text: "Concepts", imgPath: "/images/concepts.svg" },
  { id:7 , text: "Designs", imgPath: "/images/designs.svg" },
  { id:8 , text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Major Events Participated" },
  { value: 7, suffix: "+", label: "Prizes & Awards Won" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 89, suffix: "%", label: "Academics-CGPA" },
];

const logoIconsList = [
  {
    id:1,
    imgPath: "/images/logos/Matlab.png",
  },
  {
    id:2,
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    id:3,
    imgPath: "/images/logos/Tensorflow.png",
  },
  {
    id:4,
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    id:5,
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    id:6,
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    id:7,
    imgPath: "/images/logos/Mongodb.png",
  },
  {
    id:8,
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    id:9,
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    id:10,
    imgPath: "/images/logos/Sql.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Precision-Driven Results",
    desc: "Delivering high-quality outcomes with a sharp eye for every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Impactful Communicator",
    desc: "Bringing clarity and charisma to every interaction for a frictionless workflow.",
  },
  {
    imgPath: "/images/time.png",
    title: "Timely Execution",
    desc: "Sticking to deadlines while upholding top-tier quality and precision.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JS & Node JS",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three JS",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & Git Hub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id:1,
    key:215,
    review: "Pursuing Mechatronics Engineering has been an exciting and challenging experience. I’ve maintained a strong academic record and led impactful technical projects that allowed me to combine software, electronics, and mechanical systems.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo-1.png",
    title: "Bachelors in Mechatronics Engineering",
    date: "November 2022 – Present",
    area: "Kongu Engineering College",
    responsibilities: [
      "Studying at Kongu Engineering College with a CGPA of 8.91.",
      "Awarded for academic excellence in 2023–24 and 2024–25.",
      "Led interdisciplinary projects involving ML, IoT, and automation.",
    ],
  },
  {
    id:2,
    key:214,
    review: "My higher secondary years helped build the foundation of my technical interests. That’s when I first started exploring programming and got curious about how digital systems work under the hood.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo-2.png",
    title: "Higher Secondary Education",
    date: "June 2020 – May 2022",
    area: "Kamban Kalvi Nilaiyam",
    responsibilities: [
      "Completed HSC at Kamban Kalvi Nilaiyam with 86%.",
      "Focused on basic electronics and coding fundamentals.",
      "Sparked my early interest in full stack development and microcontrollers.",
    ],
  },
  {
    id:3,
    key:213,
    review: "Scoring 97.6% in SSLC was a milestone for me. It built my confidence and opened the door to my journey in engineering. This phase really shaped my analytical thinking and problem-solving skills.",
    imgPath: "/images/exp3.png",
    logoPath: "images/logo-3.png",
    title: "Secondary School Leaving Certificate",
    date: "June 2019 – March 2020",
    area: "Kamban Kalvi Nilaiyam",
    responsibilities: [
      "Graduated from Kamban Kalvi Nilaiyam with 97.6%.",
      "Excelled in science and math, laying the groundwork for engineering.",
      "Cultivated a love for tech, logic, and curiosity-driven learning.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/public/images/logos/company-logo-10.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Guhan",
    mentions: "Teammate in SIH project",
    review:
      "Gokulnithi's curiosity and drive are contagious — he’s constantly pushing boundaries and exploring tools beyond the syllabus.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Balakumar",
    mentions: "Adobe Hackathon Teammate",
    review:
      "He’s the kind of person who finds creative solutions under pressure and always adds a thoughtful edge to any technical discussion.",
    imgPath: "Adobe Hackathon Teammate",
  },
  {
    name: "Balamurali",
    mentions: "Adobe Hackathon Teammate",
    review:
      "Gokulnithi has a great eye for detail and a unique way of blending logic with design — it makes his work stand out naturally.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Hareesh",
    mentions: "Teammate in SIH project",
    review:
      "He’s deeply committed to learning and constantly evolving — watching him grow has been motivating for all of us in class.",
    imgPath: "/images/client4.png",
  },
  {
    name: "DhanushKumar",
    mentions: "Movie Recommender Project Teammate",
    review:
      "He brings a calm confidence to the classroom — always willing to share insights and lift the team when things get tough.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Mugesh",
    mentions: "Movie Recommender Project Teammate",
    review:
      "Gokulnithi has a natural knack for balancing creative thinking with solid logic — learning alongside him has been inspiring.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url:"https://www.instagram.com/gokulnithi.rar/",
    imgPath: "/images/insta.png",
  },
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/gokulnithi-p-75b581259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
